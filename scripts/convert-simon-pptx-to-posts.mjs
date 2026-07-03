import { spawnSync } from "node:child_process";
import {
	copyFileSync,
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { basename, extname, join } from "node:path";

const root = process.cwd();
const simonDir = join(root, "Simon");
const postsDir = join(root, "src/content/posts");
const tmpDir = join(root, ".tmp/pptx-posts");

const dates = new Map([
	["00-网络安全社体验课 - 正式.pptx", "2025-09-11"],
	["01-Windows基础.pptx", "2025-09-17"],
	["02-Linux基础.pptx", "2025-09-24"],
	["03-Python基础(副社长presentation).pptx", "2025-10-15"],
	["04-数据转换基础.pptx", "2025-10-15"],
	["05-密码学基础.pptx", "2025-11-03"],
	["06-防火墙基础.pptx", "2025-11-17"],
	["07-网络基础.pptx", "2025-11-10"],
	["08-攻击技术简介.pptx", "2025-12-02"],
	["09-信息收集与枚举（一半）.pptx", "2025-12-02"],
	["09-信息收集与枚举.pptx", "2025-12-09"],
	["10-了解Web攻击.pptx", "2025-12-09"],
	["11-Web渗透.pptx", "2026-01-26"],
	["Cynthia Li-蜜罐.pptx", "2026-01-21"],
	["12-防御注入攻击.pptx", "2026-04-22"],
	["13-防御密码爆破.pptx", "2026-04-22"],
	["14-防御跨站脚本(XSS)攻击.pptx", "2026-04-22"],
	["15-处理事情与交接权限.pptx", "2026-04-28"],
	["Linux_AI_漏洞讲解_模板版.pptx", "2026-06-03"],
]);

const authors = new Map([
	[
		"03-Python基础(副社长presentation).pptx",
		{
			zh: "2023届 Jack Zhang",
			en: "Class of 2023 Jack Zhang",
		},
	],
	[
		"Cynthia Li-蜜罐.pptx",
		{
			zh: "2024届 Cynthia Li",
			en: "Class of 2024 Cynthia Li",
		},
	],
	[
		"Linux_AI_漏洞讲解_模板版.pptx",
		{
			zh: "2024届 Bob Gong",
			en: "Class of 2024 Bob Gong",
		},
	],
]);

const defaultAuthor = {
	zh: "2023届 Simon Li",
	en: "Class of 2023 Simon Li",
};

const titleTranslations = new Map([
	["00-网络安全社体验课 - 正式", "Cybersecurity Club Trial Lesson"],
	["01-Windows基础", "Windows Basics"],
	["02-Linux基础", "Linux Basics"],
	["03-Python基础(副社长presentation)", "Python Basics"],
	["04-数据转换基础", "Data Conversion Basics"],
	["05-密码学基础", "Cryptography Basics"],
	["06-防火墙基础", "Firewall Basics"],
	["07-网络基础", "Networking Basics"],
	["08-攻击技术简介", "Introduction to Attack Techniques"],
	[
		"09-信息收集与枚举（一半）",
		"Information Gathering and Enumeration, Part 1",
	],
	["09-信息收集与枚举", "Information Gathering and Enumeration"],
	["10-了解Web攻击", "Understanding Web Attacks"],
	["11-Web渗透", "Web Penetration Testing"],
	["12-防御注入攻击", "Defending Against Injection Attacks"],
	["13-防御密码爆破", "Defending Against Password Brute Force"],
	["14-防御跨站脚本(XSS)攻击", "Defending Against Cross-Site Scripting (XSS)"],
	["15-处理事情与交接权限", "Handling Tasks and Handover Permissions"],
	["Cynthia Li-蜜罐", "Honeypots"],
	["Linux_AI_漏洞讲解_模板版", "Linux AI Vulnerability Walkthrough"],
]);

const titleZhOverrides = new Map([
	["Linux_AI_漏洞讲解_模板版", "浅谈一下Linux近期漏洞"],
]);

const slugMap = new Map([
	["00-网络安全社体验课 - 正式.pptx", "00-cybersecurity-club-trial"],
	["01-Windows基础.pptx", "01-windows-basics"],
	["02-Linux基础.pptx", "02-linux-basics"],
	["03-Python基础(副社长presentation).pptx", "03-python-basics"],
	["04-数据转换基础.pptx", "04-data-conversion-basics"],
	["05-密码学基础.pptx", "05-cryptography-basics"],
	["06-防火墙基础.pptx", "06-firewall-basics"],
	["07-网络基础.pptx", "07-network-basics"],
	["08-攻击技术简介.pptx", "08-attack-techniques"],
	["09-信息收集与枚举（一半）.pptx", "09-information-gathering-part-1"],
	["09-信息收集与枚举.pptx", "09-information-gathering-enumeration"],
	["10-了解Web攻击.pptx", "10-understanding-web-attacks"],
	["11-Web渗透.pptx", "11-web-penetration"],
	["Cynthia Li-蜜罐.pptx", "cynthia-li-honeypots"],
	["12-防御注入攻击.pptx", "12-defending-injection-attacks"],
	["13-防御密码爆破.pptx", "13-defending-password-bruteforce"],
	["14-防御跨站脚本(XSS)攻击.pptx", "14-defending-xss-attacks"],
	["15-处理事情与交接权限.pptx", "15-handover-permissions"],
	["Linux_AI_漏洞讲解_模板版.pptx", "linux-ai-vulnerability-walkthrough"],
]);

const tagsMap = new Map([
	[
		"00-网络安全社体验课 - 正式.pptx",
		[
			"Cybersecurity",
			"Turing Club",
			"Club Intro",
			"CTF",
			"Ethics",
			"Linux",
			"Python",
		],
	],
	[
		"01-Windows基础.pptx",
		[
			"Windows",
			"PowerShell",
			"CMD",
			"File System",
			"Users",
			"Permissions",
			"Process",
			"Security Basics",
		],
	],
	[
		"02-Linux基础.pptx",
		["Linux", "Bash", "Shell", "SSH", "File System", "Users", "Permissions"],
	],
	[
		"03-Python基础(副社长presentation).pptx",
		[
			"Python",
			"Programming",
			"Variables",
			"Control Flow",
			"Functions",
			"Automation",
		],
	],
	[
		"04-数据转换基础.pptx",
		["Data Encoding", "Binary", "Hex", "ASCII", "Unicode", "Base64", "JSON"],
	],
	[
		"05-密码学基础.pptx",
		[
			"Cryptography",
			"Hash",
			"Symmetric Encryption",
			"Asymmetric Encryption",
			"Vigenere",
			"XOR",
		],
	],
	[
		"06-防火墙基础.pptx",
		[
			"Firewall",
			"Network Security",
			"Access Control",
			"Ports",
			"Traffic Filtering",
			"Defense",
		],
	],
	[
		"07-网络基础.pptx",
		["Networking", "TCP/IP", "TCP", "UDP", "DNS", "HTTP", "Packet Analysis"],
	],
	[
		"08-攻击技术简介.pptx",
		[
			"Attack Techniques",
			"Reconnaissance",
			"Exploitation",
			"Social Engineering",
			"Vulnerability",
			"Defense",
		],
	],
	[
		"09-信息收集与枚举（一半）.pptx",
		[
			"OSINT",
			"Reconnaissance",
			"Information Gathering",
			"Search Engines",
			"Domains",
			"Passive Reconnaissance",
		],
	],
	[
		"09-信息收集与枚举.pptx",
		[
			"OSINT",
			"Enumeration",
			"Reconnaissance",
			"Google Hacking",
			"DNS",
			"Port Scanning",
			"Asset Discovery",
		],
	],
	[
		"10-了解Web攻击.pptx",
		[
			"Web Security",
			"SQL Injection",
			"XSS",
			"Database",
			"OWASP",
			"Web Defense",
		],
	],
	[
		"11-Web渗透.pptx",
		[
			"Web Penetration Testing",
			"Netcat",
			"Reverse Shell",
			"HTTP",
			"Vulnerability Assessment",
			"Ethics",
		],
	],
	[
		"Cynthia Li-蜜罐.pptx",
		[
			"Honeypot",
			"Threat Intelligence",
			"Deception",
			"IoT Security",
			"AI Security",
			"Active Defense",
		],
	],
	[
		"12-防御注入攻击.pptx",
		[
			"SQL Injection",
			"Input Validation",
			"Parameterized Query",
			"Secure Coding",
			"Web Defense",
		],
	],
	[
		"13-防御密码爆破.pptx",
		[
			"Password Security",
			"Brute Force",
			"Authentication",
			"MFA",
			"Rate Limiting",
			"Defense",
		],
	],
	[
		"14-防御跨站脚本(XSS)攻击.pptx",
		[
			"XSS",
			"CSP",
			"Output Encoding",
			"Frontend Security",
			"Web Defense",
			"Secure Coding",
		],
	],
	[
		"15-处理事情与交接权限.pptx",
		[
			"Operations",
			"Handover",
			"Permissions",
			"Account Security",
			"Documentation",
			"Governance",
		],
	],
	[
		"Linux_AI_漏洞讲解_模板版.pptx",
		[
			"Linux",
			"AI Security",
			"Vulnerability",
			"Dirty Pipe",
			"Zero Copy",
			"Kernel Security",
			"CVE",
		],
	],
]);

const xmlEntities = {
	"&amp;": "&",
	"&lt;": "<",
	"&gt;": ">",
	"&quot;": '"',
	"&apos;": "'",
};

const decodeXml = (value) =>
	value
		.replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
			String.fromCodePoint(Number.parseInt(hex, 16)),
		)
		.replace(/&#(\d+);/g, (_, dec) =>
			String.fromCodePoint(Number.parseInt(dec, 10)),
		)
		.replace(
			/&(amp|lt|gt|quot|apos);/g,
			(entity) => xmlEntities[entity] ?? entity,
		);

const escapeYaml = (value) =>
	`"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
const formatYamlArray = (items) =>
	`[${items.map((item) => escapeYaml(item)).join(", ")}]`;
const escapeMarkdownText = (value) =>
	String(value)
		.replace(/\\/g, "\\\\")
		.replace(/\$/g, "\\$")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
const escapeSvgTitle = (value) =>
	String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");

const ensureSvgTitle = (filePath, title) => {
	if (extname(filePath).toLowerCase() !== ".svg") return;
	const svg = readFileSync(filePath, "utf8");
	const titleText = escapeSvgTitle(title);
	let next = svg;
	if (/<title\b[^>]*>\s*<\/title>/i.test(next)) {
		next = next.replace(
			/<title\b[^>]*>\s*<\/title>/i,
			`<title>${titleText}</title>`,
		);
	} else if (!/<title\b[^>]*>[\s\S]*?<\/title>/i.test(next)) {
		next = next.replace(
			/<svg\b([^>]*)>/i,
			(match) => `${match}<title>${titleText}</title>`,
		);
	}
	if (next !== svg) writeFileSync(filePath, next, "utf8");
};

const cleanTitle = (file) => basename(file, extname(file));
const formatDisplayTitle = (title) =>
	title
		.replace(/\s*-\s*/g, " ")
		.replace(/\s+/g, " ")
		.trim();

const unzipList = (pptx) => {
	const result = spawnSync("unzip", ["-Z1", pptx], { encoding: "utf8" });
	if (result.status !== 0)
		throw new Error(`Failed to list ${pptx}: ${result.stderr}`);
	return result.stdout.split(/\r?\n/).filter(Boolean);
};

const unzipText = (pptx, file) => {
	const result = spawnSync("unzip", ["-p", pptx, file], {
		encoding: "utf8",
		maxBuffer: 64 * 1024 * 1024,
	});
	return result.status === 0 ? result.stdout : "";
};

const unzipFile = (pptx, file, outDir) => {
	const result = spawnSync("unzip", ["-qq", "-j", pptx, file, "-d", outDir], {
		encoding: "utf8",
	});
	if (result.status !== 0)
		throw new Error(`Failed to extract ${file} from ${pptx}: ${result.stderr}`);
};

const getSlideNumber = (name) => {
	const match = name.match(/ppt\/slides\/slide(\d+)\.xml$/);
	return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
};

const extractTexts = (xml) => {
	const textRuns = [...xml.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)]
		.map((match) => decodeXml(match[1]).trim())
		.filter(Boolean);
	const lines = [];
	for (const text of textRuns) {
		if (lines[lines.length - 1] !== text) lines.push(text);
	}
	return lines;
};

const extractRelationships = (relsXml) => {
	const map = new Map();
	for (const rel of relsXml.matchAll(/<Relationship\b([^>]+)>/g)) {
		const attrs = rel[1];
		const id = attrs.match(/\bId="([^"]+)"/)?.[1];
		const target = attrs.match(/\bTarget="([^"]+)"/)?.[1];
		if (id && target && target.includes("media/")) {
			map.set(id, `ppt/${target.replace(/^\.\.\//, "")}`);
		}
	}
	return map;
};

const extractImageRelIds = (xml) =>
	[...xml.matchAll(/r:embed="([^"]+)"/g)].map((match) => match[1]);

const unique = (items) => [...new Set(items)];

const writePost = ({ pptx, postDir, slug }) => {
	const fileName = basename(pptx);
	const rawTitleZh = cleanTitle(fileName);
	const titleZh =
		titleZhOverrides.get(rawTitleZh) ?? formatDisplayTitle(rawTitleZh);
	const titleEn = titleTranslations.get(rawTitleZh) ?? titleZh;
	const author = authors.get(fileName) ?? defaultAuthor;
	const date = dates.get(fileName);
	const tags = tagsMap.get(fileName) ?? ["Cybersecurity", "Club Course"];
	if (!date) throw new Error(`Missing date for ${fileName}`);

	const files = unzipList(pptx);
	const slideFiles = files
		.filter((file) => /^ppt\/slides\/slide\d+\.xml$/.test(file))
		.sort((a, b) => getSlideNumber(a) - getSlideNumber(b));
	const imageDir = join(postDir, "images");
	mkdirSync(imageDir, { recursive: true });

	let imageCounter = 1;
	const sections = [];

	for (const slideFile of slideFiles) {
		const slideNumber = getSlideNumber(slideFile);
		const relsFile = `ppt/slides/_rels/slide${slideNumber}.xml.rels`;
		const slideXml = unzipText(pptx, slideFile);
		const relsXml = unzipText(pptx, relsFile);
		const texts = extractTexts(slideXml);
		const rels = extractRelationships(relsXml);
		const imageTargets = unique(
			extractImageRelIds(slideXml)
				.map((id) => rels.get(id))
				.filter(Boolean),
		);
		const imageMarkdown = [];

		for (const imageTarget of imageTargets) {
			const originalName = basename(imageTarget);
			const extension = extname(originalName).toLowerCase() || ".png";
			const outName = `slide-${String(slideNumber).padStart(2, "0")}-${String(imageCounter).padStart(2, "0")}${extension}`;
			unzipFile(pptx, imageTarget, imageDir);
			const extractedPath = join(imageDir, originalName);
			const finalPath = join(imageDir, outName);
			if (extractedPath !== finalPath) {
				if (existsSync(finalPath)) rmSync(finalPath);
				copyFileSync(extractedPath, finalPath);
				rmSync(extractedPath);
			}
			ensureSvgTitle(
				finalPath,
				`${titleZh} slide ${slideNumber} image ${imageCounter}`,
			);
			imageCounter += 1;
			imageMarkdown.push(`![Slide ${slideNumber} image](./images/${outName})`);
		}

		if (!texts.length && !imageMarkdown.length) continue;

		const title = texts[0] || `Slide ${slideNumber}`;
		const body = texts.slice(1);
		const slideLines = [
			`## 第 ${slideNumber} 页 / Slide ${slideNumber}: ${escapeMarkdownText(title)}`,
		];
		if (body.length) {
			slideLines.push(
				"",
				"### 原文 / Original Text",
				"",
				...body.map((text) => `- ${escapeMarkdownText(text)}`),
			);
		}
		if (imageMarkdown.length) {
			slideLines.push("", "### 图片 / Images", "", ...imageMarkdown);
		}
		sections.push(slideLines.join("\n"));
	}

	const description = `${titleZh} / ${titleEn}. ${author.zh} / ${author.en}.`;
	const frontmatter = [
		"---",
		`title: ${escapeYaml(`${titleZh} / ${titleEn}`)}`,
		`published: ${date}`,
		`description: ${escapeYaml(description)}`,
		`tags: ${formatYamlArray(tags)}`,
		`category: "Club Course"`,
		"draft: false",
		"---",
	].join("\n");

	const intro = [
		`# ${titleZh}`,
		"",
		`**English title:** ${titleEn}`,
		"",
		`**作者 / Author:** ${author.zh} / ${author.en}`,
		"",
		`**原 PPT 日期 / Original PPT date:** ${date}`,
		"",
		"> 本文由社团课程 PPT 转换而来，保留原幻灯片文字与图片，便于网页阅读。",
		">",
		"> This article was converted from the club course PowerPoint. Original slide text and images are preserved for web reading.",
	].join("\n");

	writeFileSync(
		join(postDir, "index.md"),
		`${frontmatter}\n\n${intro}\n\n${sections.join("\n\n")}\n`,
		"utf8",
	);
	console.log(
		`${slug}: ${slideFiles.length} slides, ${imageCounter - 1} images`,
	);
};

if (!existsSync(simonDir)) throw new Error(`Missing ${simonDir}`);
rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });

for (const entry of readdirSync(postsDir, { withFileTypes: true })) {
	if (entry.name === ".DS_Store") continue;
	rmSync(join(postsDir, entry.name), { recursive: true, force: true });
}

const pptxFiles = readdirSync(simonDir)
	.filter((name) => name.endsWith(".pptx") && !name.startsWith(".~"))
	.sort(
		(a, b) =>
			(dates.get(a) ?? "9999").localeCompare(dates.get(b) ?? "9999") ||
			a.localeCompare(b, "zh-Hans-CN"),
	);

for (const fileName of pptxFiles) {
	const slug = slugMap.get(fileName);
	if (!slug) throw new Error(`Missing slug for ${fileName}`);
	const postDir = join(postsDir, slug);
	mkdirSync(postDir, { recursive: true });
	writePost({
		pptx: join(simonDir, fileName),
		postDir,
		slug,
	});
}
