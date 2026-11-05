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
console.log("PASS: speech text excludes unsupported punctuation, emoji, markup and Latin remnants");
