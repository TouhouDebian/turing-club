import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../src/components/Live2DWidget.astro", import.meta.url), "utf8");
const start = source.indexOf("const letterReadings =");
const end = source.indexOf("const loadSynthResources =", start);
assert(start !== -1 && end > start, "Speech sanitizer must exist");
const sanitize = vm.runInNewContext(`${source.slice(start, end)}\nsafeKana`);

for (const input of [
  "ニーハオ！ウオシーフーランドゥオルー～（ワイトウ）✨",
  "Python, HTML/CSS/JavaScript **print** `Hello!`",
  "ワンルオ：1. バオミーシン；2. ワンジョンシン\n- ミーマー！",
  "Hello! I am Marisa. Let's learn together.",
]) {
  const result = sanitize(input);
  assert(result.length > 0);
  assert.match(result, /^[\u3041-\u3096\u30a1-\u30faー、]+$/u);
  assert(!result.startsWith("、") && !result.endsWith("、"));
  assert(!result.includes("、、"));
}
assert.equal(sanitize("✨() **"), "");
assert.equal(sanitize("ヴ"), "ブ");
assert.equal(sanitize("ジ'ーアオ"), "ジーアオ");
assert.equal(sanitize("ーアオ、ーシー"), "アオ、シー");

const helperStart = source.indexOf("const joinVoiceWavs =");
const helperEnd = source.indexOf("const synthesizeVoice =", helperStart);
const helpers = vm.runInNewContext(`${source.slice(helperStart, helperEnd)}\n({joinVoiceWavs, splitVoiceKana})`, { Uint8Array, DataView });
const kana = "ニーハオ".repeat(40);
const parts = helpers.splitVoiceKana(kana);
assert(parts.length > 1);
assert.equal(parts.join(""), kana);
assert(parts.every((part) => !/^[ーァィゥェォャュョ]/.test(part)));
const wav = new Uint8Array(48);
const view = new DataView(wav.buffer);
for (const [offset, tag] of [[0, "RIFF"], [8, "WAVE"], [12, "fmt "], [36, "data"]]) wav.set([...tag].map((c) => c.charCodeAt(0)), offset);
view.setUint32(4, 40, true); view.setUint32(16, 16, true);
view.setUint16(20, 1, true); view.setUint16(22, 1, true);
view.setUint32(24, 8000, true); view.setUint32(28, 16000, true);
view.setUint16(32, 2, true); view.setUint16(34, 16, true);
view.setUint32(40, 4, true); wav.set([1, 2, 3, 4], 44);
const joined = helpers.joinVoiceWavs([wav, wav]);
assert.equal(joined.length, 52);
assert.equal(new DataView(joined.buffer).getUint32(40, true), 8);
assert.deepEqual([...joined.slice(44)], [1, 2, 3, 4, 1, 2, 3, 4]);
console.log("PASS: speech text excludes unsupported punctuation, emoji, markup and Latin remnants");
console.log("PASS: long phonemes split safely and WAV chunks join without losing samples");
