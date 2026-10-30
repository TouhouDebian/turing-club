import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { runInNewContext } from "node:vm";

// The separately installed upstream engine stays local and is never bundled.
const engine = process.argv[2];
if (!engine) throw new Error("Pass the path to the locally installed synth/synthesize.mjs");
const { YukkuriSynth } = await import(pathToFileURL(path.resolve(engine)).href);
const component = await readFile("src/components/Live2DWidget.astro", "utf8");
const greetings = runInNewContext(`(${component.match(/const characterGreetings = (\{[\s\S]*?\n\t\t\});/)[1]})`);
const messages = JSON.parse(await readFile("src/live2d/messages/messages.json", "utf8"));
const texts = [...new Set([...messages.map((m) => m.zh), ...Object.values(greetings).flatMap((g) => g.zh)])];
const folder = "public/audio/live2d";
await mkdir(folder, { recursive: true });
const manifest = {};
const synth = new YukkuriSynth();
try {
	for (const voice of ["f1", "f2"]) {
		for (const text of texts) {
			const id = createHash("sha256").update(text).digest("hex").slice(0, 16);
			const filename = `${voice}-${id}.wav`;
			const spoken = text.replace(/东方Project/g, "东方计划").replace(/Debian/g, "德比安").replace(/system-bootmgr-L/g, "系统启动管理器艾尔").replace(/DA☆ZE/g, "哒贼").replace(/[☆♪～]/g, "");
			const result = await synth.synthesize({ text: spoken, lang: /[\u3040-\u30ff]/.test(spoken) ? "ja" : "zh", voice, speed: 100 });
			await writeFile(`${folder}/${filename}`, result.wav);
			(manifest[text] ??= {})[voice] = filename;
			console.log(voice, text, result.durationSec.toFixed(2));
		}
	}
} finally { await synth.dispose(); }
await writeFile("src/live2d/messages/voices.json", `${JSON.stringify(manifest, null, "\t")}\n`);
