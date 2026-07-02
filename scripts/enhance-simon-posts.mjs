import { createHash } from "node:crypto";
import {
	existsSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { extname, join } from "node:path";
import sharp from "sharp";

const postsDir = "src/content/posts";

const guides = {
	"00-cybersecurity-club-trial": {
		lead: "这节体验课不是单纯展示工具，而是把图灵社的学习路线摊开：从网页、后端、文件读取、内存读取，到虚拟机实验和摸底测试。读者可以把它当作加入网络安全方向前的路线图。",
		enLead:
			"This trial lesson is a roadmap for the club: web pages, backend ideas, file and memory reading, virtual machines, and a baseline challenge.",
		goals: [
			"了解社团的学习节奏与实践方式",
			"知道网页、后端和系统实验之间的关系",
			"建立合法、可控、可复现的实验意识",
		],
		sections: [
			section(
				"社团学习路线",
				"Club learning path",
				[1, 5],
				[
					"网络安全不是只会“攻击”的技术，而是理解系统如何工作、如何出错、如何被保护的综合能力。体验课先把学习范围展示出来，让新成员知道后续会同时接触编程、网络、操作系统和安全伦理。",
					"讲者补充：初学时不要急着追求复杂工具，先能解释一个网页请求如何到达服务器、服务器如何读写文件、系统如何限制权限，这些基础会决定后面能走多远。",
				],
				"The first goal is orientation. Before tools, learners need a mental map of web, backend, operating system, and ethics.",
			),
			section(
				"从网页到后端",
				"From webpage to backend",
				[6, 12],
				[
					"幻灯片中的主页上传、后端部分、文件读取和内存读取，可以串成一条完整链路：用户在前端提交内容，后端接收并处理，系统再根据权限访问文件或内存资源。",
					"讲者补充：安全问题往往出现在边界处，例如上传内容是否可信、路径是否被限制、后端是否把用户输入直接当作文件名或代码执行。阅读时可以尝试把每一步都问成“这里信任了谁？”",
				],
				"The web-to-backend path is a chain of trust. Many vulnerabilities come from trusting input at the wrong boundary.",
			),
			section(
				"实验环境与自测",
				"Lab environment and self-check",
				[13, 18],
				[
					"虚拟机的意义在于隔离：把练习环境和日常电脑隔开，出错时可以回滚，实验也不会影响真实系统。摸底测试则用于判断大家对系统、网络和编程基础的掌握情况。",
					"讲者补充：所有练习都应在授权环境中完成。真正的安全学习不是越界，而是在可控范围内把原理想清楚、把证据记录清楚。",
				],
				"Virtual machines keep practice safe and repeatable. A baseline test helps learners choose the right starting point.",
			),
		],
		practice: [
			"安装一个虚拟机并记录快照步骤",
			"画出一次网页上传到后端处理的流程图",
			"写下三个你认为最容易出错的信任边界",
		],
	},
	"01-windows-basics": {
		lead: "Windows 基础课关注的是日常系统如何成为安全实验对象：文件、用户、权限、进程、命令行和网络配置都不是孤立知识，它们共同决定一台主机是否可管理、可审计、可防护。",
		enLead:
			"This lesson treats Windows as a security target: files, users, permissions, processes, shells, and networking form the base of host security.",
		goals: [
			"熟悉 Windows 文件与账户体系",
			"理解权限、进程和服务的基本含义",
			"会用命令行观察系统状态",
		],
		sections: [
			section(
				"把 Windows 当作一台主机来理解",
				"Windows as a host",
				[1, 3],
				[
					"学习 Windows 安全时，第一步不是背菜单位置，而是建立主机视角：系统里有哪些用户，文件放在哪里，程序以什么权限运行，哪些服务正在监听网络。",
					"讲者补充：图形界面适合操作，命令行适合记录和复现。安全排查时，能把操作转换成命令，才方便向同伴解释和复盘。",
				],
				"Think of Windows as a host with identities, files, processes, and network services.",
			),
			section(
				"文件、账户与权限",
				"Files, accounts, and permissions",
				[4, 8],
				[
					"权限决定谁能读取、修改或执行某个资源。对初学者来说，管理员账户、普通账户、系统账户之间的区别非常重要，因为许多风险都来自不必要的高权限运行。",
					"讲者补充：遇到“权限不足”不要立刻切管理员，而要先判断这个操作是否真的需要高权限。最小权限原则是防御的基本习惯。",
				],
				"Least privilege is the core habit: do not run with more permission than the task requires.",
			),
			section(
				"命令行观察与安全排查",
				"Command-line observation",
				[9, 12],
				[
					"CMD、PowerShell 和系统管理工具可以帮助我们查看进程、网络连接、环境变量、文件权限和服务状态。它们是后续学习取证、应急和漏洞复现的入口。",
					"讲者补充：每次练习建议记录命令、输出和结论。能留下复现记录，比“我刚才点过某个按钮”更有价值。",
				],
				"Command-line tools turn system operations into repeatable evidence.",
			),
		],
		practice: [
			"查看当前用户权限并解释结果",
			"列出一个目录的权限信息",
			"观察当前网络连接并判断哪些属于浏览器或系统服务",
		],
	},
	"02-linux-basics": {
		lead: "Linux 基础课把发行版、Shell、文件系统、SSH、用户和权限串起来。它的重点不是记住某个命令，而是理解命令为什么能控制系统资源。",
		enLead:
			"Linux basics connect distributions, shell, filesystems, SSH, users, and permissions. The point is to understand why commands control resources.",
		goals: [
			"理解 Linux 发行版与 Shell 的关系",
			"掌握常见文件和目录操作",
			"理解 SSH、用户、组和权限的安全意义",
		],
		sections: [
			section(
				"Linux 与发行版",
				"Linux and distributions",
				[1, 5],
				[
					"Linux 严格来说是内核，日常使用的 Ubuntu、Debian、Arch 等是围绕内核打包出的发行版。发行版差异会影响包管理、默认配置和使用习惯，但文件、权限、进程这些核心概念是相通的。",
					"讲者补充：选择发行版时不用纠结“最强”，先选资料多、容易恢复、适合课堂环境的版本。能稳定练习比追求新奇更重要。",
				],
				"A distribution is a usable system built around the Linux kernel. Core security concepts remain similar across distributions.",
			),
			section(
				"Shell 与命令行",
				"Shell and command line",
				[6, 11],
				[
					"Shell 是人与系统对话的接口。`echo $SHELL`、`chsh`、`cd`、`ls` 等命令看似简单，却覆盖了查看环境、切换目录、列出文件、调整默认 Shell 等基础动作。",
					"讲者补充：命令行学习要养成读提示符、读路径、读错误信息的习惯。很多错误不是命令不会，而是当前目录、权限或参数没有看清。",
				],
				"The shell is the interface between the user and the operating system. Small commands build reliable habits.",
			),
			section(
				"SSH 与远程连接",
				"SSH and remote access",
				[12, 12],
				[
					"SSH 是远程管理 Linux 主机的常用协议，它用加密连接替代明文登录。连接时要明确用户名、主机地址、端口和认证方式。",
					"讲者补充：不要把 SSH 当成“能连上就行”。安全配置还包括禁用弱密码、限制登录用户、使用密钥、查看监听端口和日志。",
				],
				"SSH provides encrypted remote access, but secure configuration matters as much as the connection command.",
			),
			section(
				"文件系统、用户与权限",
				"Filesystem, users, and permissions",
				[13, 21],
				[
					"Linux 中“一切皆文件”的思想，让设备、配置、日志和普通文本都能用统一方式管理。用户、组和权限则决定谁能读、写、执行这些文件。",
					"讲者补充：`rwx` 不只是三个字母。读权限影响查看，写权限影响修改，执行权限影响运行或进入目录。理解目录权限尤其重要。",
				],
				"Files, users, groups, and permissions are the foundation of Linux security.",
			),
		],
		practice: [
			"用命令查看当前 Shell 和当前目录",
			"创建一个文件并修改权限",
			"尝试用 SSH 连接实验机并记录认证方式",
		],
	},
	"03-python-basics": {
		lead: "Python 基础课服务于后续自动化、安全脚本和数据处理。初学时应优先理解变量、流程控制、函数和调试，而不是急着写很长的程序。",
		enLead:
			"Python basics support automation, security scripting, and data processing. Variables, control flow, functions, and debugging come first.",
		goals: [
			"理解 Python 程序的基本结构",
			"能用变量、条件和循环表达简单逻辑",
			"为后续安全自动化打基础",
		],
		sections: [
			section(
				"从脚本开始",
				"Starting from scripts",
				[1, 6],
				[
					"Python 适合作为第一门安全自动化语言，因为语法清晰，能快速处理文本、文件、网络请求和数据格式。课堂上应先把脚本看作“可重复执行的操作记录”。",
					"讲者补充：不要只追求代码能跑。每段代码都要能说清输入是什么、输出是什么、失败时会发生什么。",
				],
				"A script is a repeatable record of operations. Clear input and output matter.",
			),
			section(
				"变量、判断与循环",
				"Variables, branches, and loops",
				[7, 15],
				[
					"变量负责保存状态，条件判断负责选择路径，循环负责重复动作。这三件事足以表达大多数入门任务，例如批量检查文件名、统计日志行、过滤可疑字符串。",
					"讲者补充：安全脚本常常处理脏数据，写判断时要考虑空值、格式错误和异常输入。",
				],
				"Variables store state, branches choose paths, and loops repeat work.",
			),
			section(
				"函数与模块化",
				"Functions and modularity",
				[16, 24],
				[
					"函数把一段逻辑命名并复用。对安全学习来说，函数能把扫描、解析、输出、保存结果这些步骤分开，降低调试难度。",
					"讲者补充：函数名要表达意图，例如 `parse_log_line` 比 `do_thing` 更适合复盘和协作。",
				],
				"Functions name reusable logic and make scripts easier to test.",
			),
			section(
				"练习与调试",
				"Practice and debugging",
				[25, 33],
				[
					"调试不是出错后的补救，而是写程序的一部分。通过打印中间结果、缩小输入范围、阅读报错堆栈，可以更快定位问题。",
					"讲者补充：写安全脚本时先在小样本上验证，再扩大到真实数据，避免错误脚本批量破坏文件或输出误判。",
				],
				"Debugging is part of programming. Test with small samples before scaling up.",
			),
		],
		practice: [
			"写一个脚本统计文本中某个关键词出现次数",
			"用函数封装一次日志行解析",
			"故意制造一个错误并解释报错位置",
		],
	},
	"04-data-conversion-basics": {
		lead: "数据转换基础课解决一个常见困惑：安全题目中的字符串为什么会变成二进制、十六进制、Base64 或 JSON。理解编码不是炫技，而是为了还原数据本来的含义。",
		enLead:
			"Data conversion explains why strings appear as binary, hex, Base64, Unicode, or JSON in security tasks.",
		goals: [
			"区分编码、加密和哈希",
			"理解常见进制与字符集",
			"能在 CTF 或日志中还原数据",
		],
		sections: [
			section(
				"为什么要做数据转换",
				"Why conversion matters",
				[1, 3],
				[
					"计算机底层处理的是字节，人看到的是文本、图片或协议字段。编码就是在人类可读形式和机器可处理形式之间建立约定。",
					"讲者补充：看到一串奇怪字符时，先判断它像编码、加密还是压缩，不要直接套所有工具暴力尝试。",
				],
				"Encoding is a convention between bytes and human-readable data.",
			),
			section(
				"进制与字符集",
				"Bases and character sets",
				[4, 8],
				[
					"二进制、十六进制和 ASCII/Unicode 经常一起出现。十六进制适合表示字节，字符集负责解释这些字节对应什么文字。",
					"讲者补充：乱码通常不是“文字坏了”，而是用错了解码方式。记录原始字节比复制乱码更可靠。",
				],
				"Hex represents bytes; character sets explain what those bytes mean.",
			),
			section(
				"Base64、JSON 与实战还原",
				"Base64, JSON, and recovery",
				[9, 13],
				[
					"Base64 常用于把二进制数据放进文本环境，JSON 常用于结构化传输。安全分析中，我们经常需要把多层编码逐层拆开。",
					"讲者补充：每还原一层都要保存中间结果，并说明判断依据。这样即使方向错了，也能退回上一层重新分析。",
				],
				"Decode step by step and keep intermediate results for review.",
			),
		],
		practice: [
			"把一段文本转换为十六进制再还原",
			"判断一段 Base64 文本解码后是什么格式",
			"解释编码、加密、哈希三者区别",
		],
	},
	"05-cryptography-basics": {
		lead: "密码学基础课介绍从古典密码到现代加密的核心思想。课堂目标不是手写完整算法，而是知道不同密码机制解决什么问题、不能解决什么问题。",
		enLead:
			"Cryptography basics introduce classical and modern ideas: confidentiality, integrity, authentication, and their limits.",
		goals: [
			"理解对称加密、非对称加密和哈希的区别",
			"认识 Vigenere、XOR 等基础思想",
			"建立不要自创密码算法的安全意识",
		],
		sections: [
			section(
				"密码学解决什么问题",
				"What cryptography solves",
				[1, 4],
				[
					"密码学常见目标包括保密性、完整性、身份认证和不可否认性。不同算法负责不同目标，把它们混用会导致错误的安全感。",
					"讲者补充：加密不等于安全。密钥管理、随机数、协议设计和实现细节同样会决定结果。",
				],
				"Cryptography supports confidentiality, integrity, authentication, and non-repudiation, but only when used correctly.",
			),
			section(
				"对称与非对称加密",
				"Symmetric and asymmetric encryption",
				[5, 7],
				[
					"对称加密速度快，但双方要共享同一把密钥；非对称加密便于密钥交换和签名，但计算成本更高。现代协议通常把两者组合使用。",
					"讲者补充：TLS 等协议不是只用一种算法，而是把密钥交换、身份验证、对称加密和完整性校验组织成流程。",
				],
				"Modern protocols combine symmetric and asymmetric techniques.",
			),
			section(
				"Vigenere 与 XOR",
				"Vigenere and XOR",
				[8, 14],
				[
					"Vigenere 展示了“密钥重复使用”带来的模式问题，XOR 展示了位运算在加密和编码中的基础作用。它们适合帮助初学者理解密钥与明文的关系。",
					"讲者补充：在 CTF 中看到 XOR，不要只想爆破，也要观察明文格式、文件头和重复周期。",
				],
				"Classical examples reveal how keys interact with plaintext and why patterns matter.",
			),
			section(
				"作业与复习",
				"Homework and review",
				[15, 17],
				[
					"复习密码学时建议按问题分类：我要隐藏内容、验证完整性、确认身份，还是交换密钥。先确认目标，再选择机制。",
					"讲者补充：不要在真实项目中自创加密方案。学习可以复现，生产要使用成熟库和成熟协议。",
				],
				"Choose cryptographic mechanisms by security goal, not by name recognition.",
			),
		],
		practice: [
			"用自己的话解释哈希和加密的区别",
			"完成一个简单 XOR 还原练习",
			"列出 TLS 中至少两个密码学机制",
		],
	},
	"06-firewall-basics": {
		lead: "防火墙基础课讨论流量如何被允许、拒绝、记录和分段。它不是一道万能墙，而是一套基于规则、场景和日志的访问控制方法。",
		enLead:
			"Firewall basics explain how traffic is allowed, denied, logged, and segmented through rules and policy.",
		goals: [
			"理解防火墙在网络防御中的位置",
			"认识端口、协议、方向和规则顺序",
			"能用日志复盘一次访问控制结果",
		],
		sections: [
			section(
				"防火墙的角色",
				"Role of a firewall",
				[1, 7],
				[
					"防火墙的核心是访问控制：什么来源可以访问什么目标，使用什么协议和端口，是否需要记录。它不能替代系统加固，也不能修复应用漏洞。",
					"讲者补充：防火墙规则要服务于资产边界。先知道要保护什么，再决定挡什么。",
				],
				"A firewall is access control, not a replacement for secure systems and applications.",
			),
			section(
				"规则、端口与方向",
				"Rules, ports, and direction",
				[8, 12],
				[
					"一条规则通常包含源地址、目的地址、协议、端口、动作和日志策略。规则顺序会影响命中结果，因此配置后必须测试。",
					"讲者补充：默认拒绝、按需放行是常见防御思路。但在学习环境中要先确保不会把自己锁在机器外。",
				],
				"Rules should be specific, ordered, tested, and logged.",
			),
			section(
				"示例与作业",
				"Examples and homework",
				[13, 18],
				[
					"通过示例练习，可以把“允许 SSH”“阻止某端口”“记录异常访问”变成可观察结果。日志是判断规则是否有效的重要证据。",
					"讲者补充：每次改规则前先备份，改完后记录预期结果和实际结果。",
				],
				"Firewall work is evidence-driven: configure, test, and read logs.",
			),
		],
		practice: [
			"写出一条允许 SSH 的规则条件",
			"解释入站和出站规则的区别",
			"设计一个默认拒绝的最小开放策略",
		],
	},
	"07-network-basics": {
		lead: "网络基础课从“送快递”的比喻讲起，把 TCP/IP、常见协议、流量分析和 VPN 串成一张地图。安全学习离不开网络，因为攻击和防御都需要在流量中留下痕迹。",
		enLead:
			"Networking basics connect TCP/IP, protocols, traffic analysis, and VPN through the idea of delivering packets.",
		goals: [
			"理解分层模型和 TCP/IP 的基本作用",
			"区分 TCP、UDP 与常见应用层协议",
			"知道流量分析能观察到什么",
		],
		sections: [
			section(
				"网络像送快递",
				"Networking as delivery",
				[1, 6],
				[
					"把数据包想成快递，有寄件人、收件人、路线和内容。IP 负责寻址，端口帮助找到应用，协议规定双方如何交流。",
					"讲者补充：比喻不是为了取代细节，而是帮助你在看到抓包时知道每一层大概负责什么。",
				],
				"Packets have addresses, routes, ports, and protocol rules.",
			),
			section(
				"TCP、UDP 与应用层协议",
				"TCP, UDP, and application protocols",
				[7, 10],
				[
					"TCP 注重可靠连接，UDP 注重轻量快速。DNS、HTTP 等应用层协议建立在这些传输方式之上，决定具体业务如何表达请求和响应。",
					"讲者补充：排查网络问题时先问“连得上吗”，再问“协议说得对吗”。这两个问题分别对应不同层次。",
				],
				"Transport and application protocols answer different questions.",
			),
			section(
				"流量分析与辅助技术",
				"Traffic analysis and supporting technologies",
				[11, 16],
				[
					"ARP、DHCP、ICMP、VPN 等技术常出现在排障和安全分析中。流量分析不是偷看内容，而是通过包结构、方向、频率和错误信息理解系统状态。",
					"讲者补充：抓包时要在授权网络中进行，并尽量过滤范围，避免采集无关隐私数据。",
				],
				"Traffic analysis turns packets into evidence while respecting authorization and privacy.",
			),
		],
		practice: [
			"解释 TCP 和 UDP 的差异",
			"抓一次 DNS 查询并标出请求和响应",
			"画出访问一个网站时可能经过的协议",
		],
	},
	"08-attack-techniques": {
		lead: "攻击技术简介课用于建立攻防视角：攻击链通常包含信息收集、漏洞利用、权限扩大、维持访问和清理痕迹等环节。学习这些内容的目的，是更好地理解防御重点。",
		enLead:
			"This lesson introduces attack stages so learners can understand what defenders need to observe and prevent.",
		goals: [
			"认识常见攻击链阶段",
			"理解攻击技术与防御措施的对应关系",
			"强化授权实验和安全伦理",
		],
		sections: [
			section(
				"攻击链不是一个按钮",
				"An attack chain is not one button",
				[1, 4],
				[
					"真实攻击往往不是单个漏洞决定胜负，而是多个小失误被串联：资产暴露、弱口令、错误配置、过期组件和权限边界松动。",
					"讲者补充：学习攻击技术时要同步问防御问题：这个阶段留下什么日志？管理员怎样更早发现？",
				],
				"Attack chains combine small weaknesses. Defenders should map each stage to evidence.",
			),
			section(
				"从侦察到利用",
				"From reconnaissance to exploitation",
				[5, 9],
				[
					"侦察阶段关注目标信息，利用阶段验证某个弱点是否能造成影响。课堂中应强调验证范围，只在授权靶场或实验环境中操作。",
					"讲者补充：不要把“能跑 payload”当作理解。真正要掌握的是前提条件、触发点、影响范围和修复方式。",
				],
				"Exploitation must be scoped and authorized. Understand prerequisites and impact.",
			),
			section(
				"权限、维持与防御",
				"Privilege, persistence, and defense",
				[10, 13],
				[
					"权限提升和持久化会把一次漏洞变成长期风险。防御侧需要最小权限、补丁管理、日志监控和异常行为检测共同配合。",
					"讲者补充：攻防是同一件事的两面。越能理解攻击者需要什么条件，越能设计有效防护。",
				],
				"Privilege and persistence turn incidents into long-term risk; defense needs layers.",
			),
			section(
				"收束与复盘",
				"Wrap-up",
				[14, 14],
				[
					"本课的重点不是学会越界攻击，而是形成结构化复盘能力：目标是什么、路径是什么、证据在哪里、防线如何改进。",
					"讲者补充：任何实操都必须限定在社团靶场、个人虚拟机或明确授权范围内。",
				],
				"The ethical boundary is part of the technical lesson.",
			),
		],
		practice: [
			"用表格列出攻击链每一步对应的防御措施",
			"选择一个漏洞案例并写出前提条件",
			"说明为什么授权范围比工具本身更重要",
		],
	},
	"09-information-gathering-part-1": {
		lead: "信息收集与枚举上半部分先讲被动信息收集：尽量不直接接触目标系统，通过公开资料、搜索引擎、域名和网页痕迹建立目标画像。",
		enLead:
			"Part 1 focuses on passive reconnaissance: building a target profile from public information before touching the target.",
		goals: [
			"理解信息收集的目的和边界",
			"掌握被动收集的常见来源",
			"知道如何记录证据和不足",
		],
		sections: [
			section(
				"信息收集的意义",
				"Purpose of reconnaissance",
				[1, 4],
				[
					"信息收集不是八卦，而是为了减少盲目操作。知道目标资产、技术栈、公开入口和历史暴露信息，才能制定更稳妥的测试计划。",
					"讲者补充：收集阶段最重要的是记录来源。没有来源的信息很难复核，也不适合写进报告。",
				],
				"Reconnaissance reduces guessing. Evidence and sources matter.",
			),
			section(
				"被动信息收集",
				"Passive reconnaissance",
				[5, 10],
				[
					"被动收集包括搜索引擎、公开页面、域名记录、代码仓库、公告和历史快照等。它的优点是低噪声、低影响，适合作为第一步。",
					"讲者补充：Google hacking 的重点是查询思路，不是复制语法。先明确想找什么，再设计搜索语句。",
				],
				"Passive reconnaissance uses public sources with minimal target interaction.",
			),
			section(
				"不足与下一步",
				"Limitations and next steps",
				[11, 19],
				[
					"被动收集会受公开资料质量影响，可能过时、不完整或存在误导。因此后续需要主动枚举和验证，但主动操作必须遵守授权范围。",
					"讲者补充：把“不确定”写出来是专业表现。报告中应区分确认事实、推测和待验证线索。",
				],
				"Separate confirmed facts, assumptions, and leads that need validation.",
			),
		],
		practice: [
			"为一个授权靶场域名整理公开信息来源",
			"写出三条搜索语句及其目的",
			"把收集结果分成事实、推测、待验证三类",
		],
	},
	"09-information-gathering-enumeration": {
		lead: "完整的信息收集与枚举课程在被动收集之后加入主动枚举、自动化和作业设计。重点是把零散线索转成可验证的资产清单。",
		enLead:
			"The full lesson moves from passive reconnaissance to active enumeration and automation, turning clues into an asset inventory.",
		goals: [
			"区分被动收集与主动枚举",
			"理解 DNS、端口和服务发现的作用",
			"建立自动化但不过度打扰目标的意识",
		],
		sections: [
			section(
				"从线索到资产",
				"From clues to assets",
				[1, 8],
				[
					"信息收集的最终产物不应只是链接列表，而是结构化资产：域名、IP、端口、服务、技术栈、负责人、证据来源和验证状态。",
					"讲者补充：表格化记录比聊天式记录更可靠。每条资产都应能追溯来源。",
				],
				"The output should be a structured asset inventory, not a pile of links.",
			),
			section(
				"搜索引擎与被动资料",
				"Search engines and passive sources",
				[9, 10],
				[
					"搜索引擎适合发现公开页面、泄露痕迹、文档和历史信息。查询时要注意关键词、限定域名、文件类型和缓存结果。",
					"讲者补充：不要把搜索结果当成最终结论，尤其是时间较久或来源不明的信息。",
				],
				"Search results are leads; verify them before treating them as facts.",
			),
			section(
				"主动枚举与自动化",
				"Active enumeration and automation",
				[11, 14],
				[
					"主动枚举会直接与目标交互，例如 DNS 查询、端口扫描、服务识别。自动化可以提高效率，但也可能制造噪声，因此要控制速率和范围。",
					"讲者补充：扫描前先确认授权、范围和时间窗口。扫描后要复核误报，避免把临时状态写成确定结论。",
				],
				"Active enumeration needs scope control, rate control, and manual verification.",
			),
			section(
				"作业与复盘",
				"Homework and review",
				[15, 17],
				[
					"作业三选一的价值在于让同学选择不同深度：整理公开资料、完成基础枚举、或写一份小报告。重点是表达清楚方法、证据和结论。",
					"讲者补充：好的报告能让别人复现你的路径，而不是只看到结果截图。",
				],
				"A good report explains method, evidence, and conclusion clearly enough to reproduce.",
			),
		],
		practice: [
			"建立一份资产清单模板",
			"对授权目标做一次 DNS 记录整理",
			"解释自动化扫描为什么需要限速",
		],
	},
	"10-understanding-web-attacks": {
		lead: "Web 攻击入门课围绕数据库、SQL 注入和 XSS 展开。它的核心是理解用户输入如何进入服务器、数据库和浏览器，并在错误处理时造成安全影响。",
		enLead:
			"This web security lesson focuses on databases, SQL injection, and XSS: how input moves through server, database, and browser.",
		goals: [
			"理解 Web 应用的输入输出路径",
			"认识 SQL 注入和 XSS 的基本原理",
			"知道常见防御方向",
		],
		sections: [
			section(
				"Web 应用与数据库",
				"Web apps and databases",
				[1, 7],
				[
					"Web 应用通常接收用户输入，交给后端逻辑处理，再读写数据库并返回页面。攻击面就藏在这些输入、查询、渲染和权限边界里。",
					"讲者补充：学 Web 安全时要画数据流。输入从哪里来，经过哪些组件，最终在哪里显示或执行，是判断风险的关键。",
				],
				"Draw the data flow: input, backend logic, database, rendering, and permissions.",
			),
			section(
				"SQL 注入",
				"SQL injection",
				[8, 10],
				[
					"SQL 注入发生在用户输入被拼接进数据库语句时，攻击者可能改变查询逻辑。理解它时要关注参数化查询、输入校验和数据库权限。",
					"讲者补充：不要只背 payload。更重要的是解释为什么字符串拼接会把数据变成语句的一部分。",
				],
				"SQL injection turns data into query logic when input is concatenated unsafely.",
			),
			section(
				"XSS 与浏览器执行",
				"XSS and browser execution",
				[11, 12],
				[
					"XSS 的关键是恶意脚本进入页面并在用户浏览器中执行。反射型、存储型和 DOM 型的差别，在于脚本从哪里进入、在哪里保存、在哪里触发。",
					"讲者补充：防 XSS 时要根据输出上下文做编码，HTML、属性、URL、JavaScript 字符串里的规则并不相同。",
				],
				"XSS is about untrusted script reaching a browser execution context.",
			),
			section(
				"作业与安全边界",
				"Homework and boundaries",
				[13, 15],
				[
					"练习应在靶场中完成，目标是理解漏洞成因和修复思路，而不是对真实网站尝试 payload。",
					"讲者补充：一次完整练习应包含复现、影响说明、修复建议和验证修复。",
				],
				"Practice in labs and always include remediation and verification.",
			),
		],
		practice: [
			"画出登录表单到数据库查询的数据流",
			"说明参数化查询如何防 SQL 注入",
			"比较反射型和存储型 XSS",
		],
	},
	"11-web-penetration": {
		lead: "Web 渗透课程以 Netcat 和考试式练习为入口，强调工具只是手段，真正要训练的是网络连接、输入输出、证据记录和边界意识。",
		enLead:
			"This lesson uses Netcat and exam-style practice to train connections, input/output, evidence, and boundaries.",
		goals: [
			"理解 Netcat 的常见用途",
			"认识反弹 shell 和文件传输的风险",
			"为 Web 安全综合练习做准备",
		],
		sections: [
			section(
				"课程结构与边界",
				"Course structure and boundaries",
				[1, 2],
				[
					"这节课把工具学习、考试练习和未来方向放在一起，说明 Web 渗透不是单点技巧，而是综合能力训练。",
					"讲者补充：任何反弹 shell、文件传输、端口监听练习都必须在授权环境中进行。",
				],
				"Tool practice must stay within authorized lab environments.",
			),
			section(
				"Netcat 的用途",
				"What Netcat is used for",
				[3, 8],
				[
					"Netcat 常被称为网络瑞士军刀，可用于监听端口、连接服务、传输文本或文件、获取 banner、辅助调试网络连通性。",
					"讲者补充：`nc` 很强，也很危险。学习时重点理解数据从哪个端口进、由哪个程序处理、输出流向哪里。",
				],
				"Netcat is useful because it exposes raw network input and output.",
			),
			section(
				"考试式练习",
				"Exam-style practice",
				[9, 13],
				[
					"考试练习通常要求在有限信息下判断连接方式、参数、目标端口和输出证据。它考查的是基本功，而不是背题。",
					"讲者补充：解题时先写下假设，再验证假设。不要在没有记录的情况下乱试。",
				],
				"Exam tasks reward clear assumptions, controlled tests, and evidence.",
			),
			section(
				"未来的 Web 安全学习",
				"Future web security learning",
				[14, 15],
				[
					"后续可以继续学习 HTTP、身份认证、会话管理、漏洞验证、报告撰写和修复验证。工具会变，但方法论会一直使用。",
					"讲者补充：真正的渗透测试报告要能帮助修复，而不是只证明“我进去了”。",
				],
				"Good testing helps people fix systems, not merely prove access.",
			),
		],
		practice: [
			"用 Netcat 在本地监听并发送一段文本",
			"解释反弹 shell 为什么危险",
			"写一段包含证据和修复建议的小报告",
		],
	},
	"12-defending-injection-attacks": {
		lead: "防御注入攻击课程从攻击原理转向修复方法：不要让用户输入直接改变命令、查询或解释器语义。核心防线是参数化、校验、最小权限和持续维护。",
		enLead:
			"Defending injection means preventing user input from changing query, command, or interpreter semantics.",
		goals: [
			"理解注入类漏洞的共同结构",
			"掌握参数化查询和输入校验思路",
			"认识后期维护的重要性",
		],
		sections: [
			section(
				"注入攻击的共同点",
				"Common pattern of injection",
				[1, 5],
				[
					"注入的本质是程序把不可信输入当成了语句、命令或结构的一部分。SQL 注入、命令注入、模板注入都可以用这个角度理解。",
					"讲者补充：防御时不要只过滤几个危险字符，因为上下文不同，危险字符也不同。",
				],
				"Injection happens when untrusted data becomes executable structure.",
			),
			section(
				"防御概览",
				"Defense overview",
				[6, 8],
				[
					"有效防御通常包括参数化 API、白名单校验、上下文编码、最小权限、错误信息控制和日志监控。它们互相补位。",
					"讲者补充：参数化不是“把字符串拼得更小心”，而是让数据库明确区分代码和数据。",
				],
				"Parameterized APIs separate code from data.",
			),
			section(
				"代码示例与维护",
				"Code examples and maintenance",
				[9, 12],
				[
					"安全代码不是一次写完就结束。依赖更新、测试用例、代码审查和日志告警能防止旧问题重新出现。",
					"讲者补充：修复后要验证 payload 不再生效，并确认正常业务没有被破坏。",
				],
				"Fixes require regression tests and verification.",
			),
		],
		practice: [
			"把一段拼接 SQL 改成参数化查询思路",
			"列出命令注入的三个防御点",
			"写一个修复验证清单",
		],
	},
	"13-defending-password-bruteforce": {
		lead: "防御密码爆破课程关注认证系统如何抵抗大量猜测。重点不是让密码规则越来越复杂，而是组合限速、锁定、MFA、监控和用户体验。",
		enLead:
			"Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design.",
		goals: [
			"理解爆破攻击的基本条件",
			"掌握限速、锁定和 MFA 的作用",
			"知道如何监控认证异常",
		],
		sections: [
			section(
				"爆破攻击如何发生",
				"How brute force works",
				[1, 5],
				[
					"爆破依赖三个条件：可尝试的入口、可验证的反馈、足够多的尝试次数。防御就是打断其中一个或多个条件。",
					"讲者补充：错误提示不要泄露“用户名存在但密码错”这类可枚举信息。",
				],
				"Brute force needs an entry point, feedback, and many attempts.",
			),
			section(
				"防御手段",
				"Defense controls",
				[6, 8],
				[
					"常见措施包括登录限速、失败次数锁定、验证码、MFA、强密码策略和泄露密码检测。不同场景需要平衡安全和可用性。",
					"讲者补充：锁定策略要防止被滥用成拒绝服务，例如攻击者故意锁死大量用户。",
				],
				"Controls must balance security, usability, and abuse resistance.",
			),
			section(
				"代码、日志与维护",
				"Code, logs, and maintenance",
				[9, 12],
				[
					"认证系统需要记录失败次数、来源、时间、用户代理和风险评分。维护阶段要关注异常峰值、撞库行为和绕过路径。",
					"讲者补充：密码防御不是只靠登录页面，重置密码、注册、API 登录同样要纳入策略。",
				],
				"Authentication defense includes every path that can verify credentials.",
			),
		],
		practice: [
			"设计一个登录限速策略",
			"解释 MFA 能防什么、不能防什么",
			"列出认证日志中应记录的字段",
		],
	},
	"14-defending-xss-attacks": {
		lead: "防御 XSS 课程把重点放在输出上下文、编码、CSP 和安全开发习惯上。XSS 防御不是简单删除 `<script>`，而是系统性管理不可信内容。",
		enLead:
			"Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content.",
		goals: [
			"理解三类 XSS 的触发位置",
			"掌握输出编码和 CSP 的作用",
			"形成前端安全开发习惯",
		],
		sections: [
			section(
				"XSS 的攻击原理",
				"How XSS works",
				[1, 5],
				[
					"XSS 的共同点是不可信内容进入浏览器执行环境。反射型、存储型和 DOM 型的区别在于输入流向和触发位置。",
					"讲者补充：过滤输入只能降低风险，关键仍是按输出上下文编码。",
				],
				"XSS is untrusted content reaching browser execution contexts.",
			),
			section(
				"防御概览",
				"Defense overview",
				[6, 7],
				[
					"防御包括 HTML 转义、属性编码、URL 编码、避免危险 API、模板自动转义、CSP 和 Cookie 安全属性。",
					"讲者补充：不同上下文不能共用同一套编码函数。HTML 文本、属性、脚本和 URL 都要分开看。",
				],
				"Encoding must match the output context.",
			),
			section(
				"代码示例与复盘",
				"Code examples and review",
				[8, 12],
				[
					"通过代码示例可以看到：安全渲染应该让用户内容保持“数据”身份，而不是变成 HTML 或 JavaScript。",
					"讲者补充：修复 XSS 后要测试正常文本、特殊符号、链接、富文本等边界输入。",
				],
				"Keep user content as data, not executable markup.",
			),
		],
		practice: [
			"比较反射型、存储型和 DOM 型 XSS",
			"为评论区设计 XSS 防御方案",
			"解释 CSP 为什么不是唯一防线",
		],
	},
	"15-handover-permissions": {
		lead: "交接与权限处理课偏向社团运营和工程习惯：任务交付、权限移交、文档记录、AI 使用边界和活动收尾，都会影响项目能否长期运转。",
		enLead:
			"This operations lesson covers task handover, permission transfer, documentation, AI boundaries, and sustainable club workflow.",
		goals: [
			"理解任务交付和权限交接的重要性",
			"建立文档和审计意识",
			"明确 AI 工具使用边界",
		],
		sections: [
			section(
				"任务不是做完就结束",
				"A task is not done until handed over",
				[1, 5],
				[
					"任务完成后还需要交付说明、文件位置、账号权限、后续维护人和已知问题。否则下一位同学会从零开始猜。",
					"讲者补充：交付文档不需要华丽，但必须能让别人接手。",
				],
				"A task is complete only when another person can continue it.",
			),
			section(
				"权限与自由",
				"Permissions and freedom",
				[6, 9],
				[
					"自由协作需要权限边界。管理员权限、仓库权限、服务器权限和账号恢复方式都要有记录，并遵循最小权限原则。",
					"讲者补充：权限交接时要同时考虑撤权。离任、换届、项目结束后不应保留不必要权限。",
				],
				"Good permission management includes granting and revoking access.",
			),
			section(
				"活动收尾",
				"Closing an activity",
				[10, 12],
				[
					"拍照、娱乐和完结不是无关内容，它们帮助社团形成记忆，也提醒大家项目结束后要整理资料、归档成果、感谢参与者。",
					"讲者补充：运营细节会影响技术社团的持续性。资料越清楚，下一届越容易接上。",
				],
				"Sustainable clubs need archives, gratitude, and clear handover.",
			),
		],
		practice: [
			"写一份项目交接清单",
			"列出一个仓库需要哪些角色权限",
			"设计离任撤权流程",
		],
	},
	"cynthia-li-honeypots": {
		lead: "蜜罐课程从主动防御角度介绍如何用诱饵系统收集威胁情报。它把传统蜜罐、IoT 蜜罐、云蜜罐、AI 自适应防御和未来趋势连接起来。",
		enLead:
			"This honeypot lesson explains deception-based active defense, from traditional systems to IoT, cloud, AI, and future trends.",
		goals: [
			"理解蜜罐的定义和价值",
			"区分不同交互程度和部署类型",
			"认识 AI 与蜜罐结合的机会和风险",
		],
		sections: [
			section(
				"蜜罐为什么是主动防御",
				"Why honeypots are active defense",
				[1, 2],
				[
					"蜜罐的价值来自攻击者交互。合法用户通常不会访问诱饵资源，因此蜜罐流量信噪比高，适合发现扫描、攻击工具和行为链。",
					"讲者补充：蜜罐不是替代防火墙，而是补充威胁感知能力。",
				],
				"Honeypots create high-signal interaction data for threat intelligence.",
			),
			section(
				"分类与交互程度",
				"Types and interaction levels",
				[3, 4],
				[
					"物理、虚拟、生产型、研究型、低交互、高交互和混合蜜罐各有取舍。交互越深，情报越丰富，风险和维护成本也越高。",
					"讲者补充：课堂上要特别强调隔离和监控，否则高交互蜜罐可能变成攻击跳板。",
				],
				"More interaction means richer intelligence but higher risk.",
			),
			section(
				"AI、IoT 与分布式蜜网",
				"AI, IoT, and distributed honeynets",
				[5, 8],
				[
					"AI 可以帮助蜜罐识别异常、动态调整诱饵特征，IoT 和云场景则扩大了部署范围。分布式蜜网能从多个区域收集趋势。",
					"讲者补充：AI 不是魔法，模型解释性、对抗样本和资源消耗仍是现实挑战。",
				],
				"AI improves adaptation but introduces explainability and adversarial risks.",
			),
			section(
				"历史、挑战与未来",
				"History, challenges, and future",
				[9, 12],
				[
					"从早期诱捕实践到 AI 驱动系统，蜜罐一直在攻防博弈中演进。未来方向包括自适应欺骗、量子安全和更大规模的协同情报。",
					"讲者补充：部署蜜罐还要考虑法律、隐私和组织流程，不只是技术搭建。",
				],
				"Honeypots combine technology, law, privacy, and operations.",
			),
		],
		practice: [
			"比较低交互和高交互蜜罐",
			"设计一个 IoT 蜜罐要模拟的协议",
			"列出蜜罐部署的三个风险控制点",
		],
	},
	"linux-ai-vulnerability-walkthrough": {
		lead: "Linux 与 AI 漏洞讲解从 Dirty Pipe、Zero Copy 和 AI 扫描谈起，帮助同学理解：现代系统很安全，但复杂优化也可能带来难发现的内核级漏洞。",
		enLead:
			"This walkthrough uses Dirty Pipe, Zero Copy, and AI scanning to explain why optimized systems can still hide deep kernel bugs.",
		goals: [
			"理解 Linux 内核漏洞为什么影响巨大",
			"认识 Zero Copy 和 Dirty Pipe 的基本概念",
			"讨论 AI 在漏洞发现中的作用和限制",
		],
		sections: [
			section(
				"漏洞时间线与 Linux 安全",
				"Timeline and Linux security",
				[1, 4],
				[
					"Linux 能快速修复漏洞，得益于开源审计、社区协作和补丁流程。但复杂系统仍可能出现高影响漏洞，尤其是涉及内核、缓存和权限边界时。",
					"讲者补充：安全不是“没有漏洞”，而是发现、修复、分发补丁和降低影响的能力。",
				],
				"Security is the ability to find, fix, distribute, and reduce impact.",
			),
			section(
				"Zero Copy、Dirty Pipe 与漏洞成因",
				"Zero Copy, Dirty Pipe, and root cause",
				[5, 10],
				[
					"Zero Copy 追求性能，减少数据复制；Dirty Pipe 这类问题提醒我们，性能优化如果和权限边界交织，可能产生意外写入或数据污染。",
					"讲者补充：理解漏洞时不要只看名字，要问哪些状态被共享、哪些检查被绕过、影响了什么权限边界。",
				],
				"Performance optimizations can create subtle state-sharing bugs.",
			),
			section(
				"AI 如何参与漏洞发现",
				"How AI helps vulnerability research",
				[11, 12],
				[
					"AI 可以辅助扫描代码模式、总结补丁差异、提示可疑路径，但仍需要人类验证可利用性、影响范围和修复方案。",
					"讲者补充：AI 适合做放大镜，不适合当最终裁判。安全结论必须能被证据支持。",
				],
				"AI can assist analysis, but evidence and human verification remain necessary.",
			),
			section(
				"影响、比喻与讨论",
				"Impact, analogy, and discussion",
				[13, 19],
				[
					"内核漏洞影响巨大，是因为它位于系统信任链底层。课堂讨论应关注未来：AI 会提高漏洞发现效率，也会改变防御和补丁管理方式。",
					"讲者补充：学生理解这类问题时，可以从“谁能写、写到哪里、为什么本不该写”三个问题入手。",
				],
				"Kernel bugs are serious because they sit near the bottom of the trust chain.",
			),
		],
		practice: [
			"解释 Zero Copy 为什么能提升性能",
			"用三句话说明 Dirty Pipe 的风险",
			"讨论 AI 扫描漏洞需要哪些人工验证",
		],
	},
};

function section(title, enTitle, slides, paragraphs, enSummary) {
	return { title, enTitle, slides, paragraphs, enSummary };
}

const escapeYaml = (value) =>
	`"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

const parseFrontmatter = (text) => {
	const match = text.match(/^---\n([\s\S]*?)\n---\n/);
	if (!match) throw new Error("Missing frontmatter");
	const yaml = match[1];
	const get = (key) =>
		yaml.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim() ?? "";
	return {
		title: JSON.parse(get("title")),
		published: get("published"),
		description: get("description") ? JSON.parse(get("description")) : "",
		tagsLine: get("tags"),
		category: get("category").replace(/^"|"$/g, "") || "Club Course",
		draft: get("draft") || "false",
		body: text.slice(match[0].length),
	};
};

const parseTags = (tagsLine) => {
	const matches = [...tagsLine.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
	return matches.length ? matches : [];
};

const readPngSize = (buffer) => {
	if (buffer.length < 24 || buffer.toString("ascii", 1, 4) !== "PNG")
		return null;
	return {
		width: buffer.readUInt32BE(16),
		height: buffer.readUInt32BE(20),
	};
};

const readJpegSize = (buffer) => {
	let offset = 2;
	while (offset < buffer.length) {
		if (buffer[offset] !== 0xff) return null;
		const marker = buffer[offset + 1];
		const length = buffer.readUInt16BE(offset + 2);
		if (marker >= 0xc0 && marker <= 0xc3) {
			return {
				height: buffer.readUInt16BE(offset + 5),
				width: buffer.readUInt16BE(offset + 7),
			};
		}
		offset += 2 + length;
	}
	return null;
};

const readImageInfo = (postDir, src) => {
	const filePath = join(postDir, src.replace(/^\.\//, ""));
	if (!existsSync(filePath)) return null;
	const buffer = readFileSync(filePath);
	const ext = extname(filePath).toLowerCase();
	const size =
		ext === ".png"
			? readPngSize(buffer)
			: ext === ".jpg" || ext === ".jpeg"
				? readJpegSize(buffer)
				: null;
	return {
		src,
		filePath,
		ext,
		width: size?.width ?? 0,
		height: size?.height ?? 0,
		hash: createHash("sha1").update(buffer).digest("hex"),
	};
};

const getTechnicalImageScore = async (filePath) => {
	const { data, info } = await sharp(filePath)
		.resize({ width: 160, height: 160, fit: "inside" })
		.removeAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });
	const gray = new Float32Array(info.width * info.height);
	const bins = new Map();
	let sum = 0;
	let sumSquares = 0;
	let dark = 0;
	let light = 0;
	let edgePixels = 0;

	for (let index = 0, pixel = 0; index < data.length; index += 3, pixel++) {
		const red = data[index];
		const green = data[index + 1];
		const blue = data[index + 2];
		const value = 0.299 * red + 0.587 * green + 0.114 * blue;
		gray[pixel] = value;
		sum += value;
		sumSquares += value * value;
		if (value < 40) dark++;
		if (value > 215) light++;
		const key = ((red >> 4) << 8) | ((green >> 4) << 4) | (blue >> 4);
		bins.set(key, (bins.get(key) ?? 0) + 1);
	}

	for (let y = 1; y < info.height; y++) {
		for (let x = 1; x < info.width; x++) {
			const index = y * info.width + x;
			const difference =
				Math.abs(gray[index] - gray[index - 1]) +
				Math.abs(gray[index] - gray[index - info.width]);
			if (difference > 30) edgePixels++;
		}
	}

	const pixels = info.width * info.height;
	let entropy = 0;
	for (const count of bins.values()) {
		const probability = count / pixels;
		entropy -= probability * Math.log2(probability);
	}

	const mean = sum / pixels;
	return {
		edgeDensity: edgePixels / pixels,
		entropy,
		standardDeviation: Math.sqrt(sumSquares / pixels - mean * mean),
		darkRatio: dark / pixels,
		lightRatio: light / pixels,
	};
};

const collectSlideImages = async (body, postDir) => {
	const slides = new Map();
	const images = [];
	const imageMatches = [
		...body.matchAll(/!\[[^\]]*\]\((\.\/images\/slide-(\d+)-[^)]+)\)/g),
	];
	for (const match of imageMatches) {
		const src = match[1];
		const slide = Number(match[2]);
		const image = readImageInfo(postDir, src);
		if (!image) continue;
		image.technicalScore = await getTechnicalImageScore(image.filePath);
		image.slide = slide;
		images.push(image);
		if (!slides.has(slide)) slides.set(slide, []);
		slides.get(slide).push(image);
	}
	const hashCounts = new Map();
	for (const image of images) {
		hashCounts.set(image.hash, (hashCounts.get(image.hash) ?? 0) + 1);
	}
	for (const image of images)
		image.duplicateCount = hashCounts.get(image.hash) ?? 1;
	return slides;
};

const isRelevantImage = (image) => {
	if (!image) return false;
	if (image.ext === ".svg") return false;
	if (image.ext === ".jpg" || image.ext === ".jpeg") return false;
	if (!image.width || !image.height) return false;
	if (image.width < 360 || image.height < 160) return false;
	if (image.width * image.height < 180_000) return false;
	if (Math.max(image.width / image.height, image.height / image.width) > 6)
		return false;
	if (image.duplicateCount > 3) return false;
	const metrics = image.technicalScore;
	if (!metrics) return false;
	if (metrics.edgeDensity < 0.045) return false;
	if (metrics.standardDeviation < 8) return false;
	if (metrics.lightRatio > 0.98 || metrics.darkRatio > 0.98) return false;
	if (metrics.entropy > 5.2 && metrics.edgeDensity < 0.34) return false;
	return true;
};

const selectImagesForRange = (slides, range, usedImages, maxImages = 4) => {
	const [start, end] = range;
	const selected = [];
	for (let slide = start; slide <= end; slide += 1) {
		const images = slides.get(slide);
		if (!images?.length) continue;
		for (const image of images) {
			if (usedImages.has(image.src) || !isRelevantImage(image)) continue;
			selected.push(image);
			usedImages.add(image.src);
			if (selected.length >= maxImages) return selected;
		}
	}
	return selected;
};

const renderImageBlock = (images, lang) => {
	if (!images.length) return "";
	const lines = [lang === "zh" ? "### 相关图片" : "### Related Images", ""];
	images.forEach((image, index) => {
		const alt =
			lang === "zh"
				? `课程相关截图 ${index + 1}`
				: `Course-related screenshot ${index + 1}`;
		lines.push(`![${alt}](${image.src})`);
	});
	return lines.join("\n");
};

const cleanupUnusedImages = (postDir, usedImages) => {
	const imageDir = join(postDir, "images");
	if (!existsSync(imageDir)) return;
	for (const file of readdirSync(imageDir)) {
		const src = `./images/${file}`;
		if (!usedImages.has(src)) rmSync(join(imageDir, file));
	}
};

const renderList = (items) => items.map((item) => `- ${item}`).join("\n");
const renderKeywords = (tags) =>
	tags.map((tag) => `#${tag.replace(/\s+/g, "-")}`).join(" ");
const splitBilingual = (value) => {
	const [zh, ...rest] = String(value).split(" / ");
	return {
		zh: zh.trim(),
		en: (rest.join(" / ") || zh).trim(),
	};
};
const englishGoalsFor = (title, tags) => [
	`Understand the core ideas of ${title}.`,
	`Connect ${tags.slice(0, 3).join(", ")} to practical security work.`,
	"Practice only in authorized, repeatable lab environments.",
];
const englishPracticeFor = (title) => [
	`Summarize the main workflow of ${title} in your own words.`,
	"Reproduce one safe observation step and record the evidence.",
	"Explain one likely risk and one matching defense.",
];
const englishParagraphsFor = (item) => [
	item.enSummary,
	"Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.",
];

for (const [slug, guide] of Object.entries(guides)) {
	const postPath = join(postsDir, slug, "index.md");
	if (!existsSync(postPath)) throw new Error(`Missing post: ${slug}`);
	const original = readFileSync(postPath, "utf8");
	const frontmatter = parseFrontmatter(original);
	const tags = parseTags(frontmatter.tagsLine);
	const [titleZh, titleEn = ""] = frontmatter.title.split(" / ");
	const author = splitBilingual(
		original.match(/\*\*作者 \/ Author:\*\*\s*(.+)/)?.[1]?.trim() ?? "",
	);
	const date =
		original
			.match(/\*\*原 PPT 日期 \/ Original PPT date:\*\*\s*(.+)/)?.[1]
			?.trim() ?? frontmatter.published;
	const slides = await collectSlideImages(
		frontmatter.body,
		join(postsDir, slug),
	);
	const usedImages = new Set();
	const description = `${guide.lead} / ${guide.enLead}`;

	const lines = [
		"---",
		`title: ${escapeYaml(frontmatter.title)}`,
		`published: ${frontmatter.published}`,
		`description: ${escapeYaml(description)}`,
		`tags: [${tags.map(escapeYaml).join(", ")}]`,
		`category: ${escapeYaml(frontmatter.category)}`,
		`draft: ${frontmatter.draft}`,
		"---",
		"",
		":::section{.lang-zh}",
		"",
		`**作者：** ${author.zh}`,
		"",
		`**原 PPT 日期：** ${date}`,
		"",
		`**关键词：** ${renderKeywords(tags)}`,
		"",
		"> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。",
		"",
		"## 导读",
		"",
		guide.lead,
		"",
		"## 学习目标",
		"",
		renderList(guide.goals),
		"",
	];

	guide.sections.forEach((item, index) => {
		const sectionImages = selectImagesForRange(slides, item.slides, usedImages);
		lines.push(`## ${index + 1}. ${item.title}`, "");
		for (const paragraph of item.paragraphs) lines.push(paragraph, "");
		const renderedImages = renderImageBlock(sectionImages, "zh");
		if (renderedImages) lines.push(renderedImages, "");
	});

	lines.push("## 课堂练习", "", renderList(guide.practice), "", ":::", "");

	const englishTitle = titleEn || titleZh;
	lines.push(
		":::section{.lang-en}",
		"",
		`**Author:** ${author.en || author.zh}`,
		"",
		`**Original PPT date:** ${date}`,
		"",
		`**Keywords:** ${renderKeywords(tags)}`,
		"",
		"> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.",
		"",
		"## Overview",
		"",
		guide.enLead,
		"",
		"## Learning Goals",
		"",
		renderList(guide.enGoals ?? englishGoalsFor(englishTitle, tags)),
		"",
	);

	usedImages.clear();
	guide.sections.forEach((item, index) => {
		const sectionImages = selectImagesForRange(slides, item.slides, usedImages);
		lines.push(`## ${index + 1}. ${item.enTitle}`, "");
		for (const paragraph of item.enParagraphs ?? englishParagraphsFor(item))
			lines.push(paragraph, "");
		const renderedImages = renderImageBlock(sectionImages, "en");
		if (renderedImages) lines.push(renderedImages, "");
	});

	lines.push(
		"## Practice",
		"",
		renderList(guide.enPractice ?? englishPracticeFor(englishTitle)),
		"",
		":::",
		"",
	);

	cleanupUnusedImages(join(postsDir, slug), usedImages);

	writeFileSync(
		postPath,
		`${lines
			.filter((line) => line !== undefined)
			.join("\n")
			.replace(/\n{3,}/g, "\n\n")
			.trim()}\n`,
		"utf8",
	);
}

const known = new Set(Object.keys(guides));
for (const entry of readdirSync(postsDir, { withFileTypes: true })) {
	if (entry.isDirectory() && !known.has(entry.name)) {
		console.warn(`No enhancement guide for ${entry.name}`);
	}
}
