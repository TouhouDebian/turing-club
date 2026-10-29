import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { runInNewContext } from "node:vm";

const component = readFileSync(new URL("../src/components/GiscusComments.astro", import.meta.url), "utf8");
const source = component.match(/<script is:inline define:vars=.*?>([\s\S]*?)<\/script>/)[1];

function fixture(dark = true) {
	const observers = [];
	const messages = [];
	const frames = [];
	const events = new Map();
	const root = { classList: { contains: () => dark } };
	const shell = {
		isConnected: true,
		querySelectorAll: () => frames,
		appendChild: (client) => { shell.client = client; },
	};
	const window = {
		btoa: (value) => Buffer.from(value, "binary").toString("base64"),
		addEventListener: (name, callback) => events.set(name, callback),
		removeEventListener: (name) => events.delete(name),
	};
	const context = {
		window,
		document: {
			documentElement: root,
			currentScript: { previousElementSibling: { querySelector: () => shell } },
			createElement: () => ({ dataset: {} }),
		},
		TextEncoder,
		getComputedStyle: () => ({ getPropertyValue: () => "250" }),
		MutationObserver: class {
			constructor(callback) { this.callback = callback; observers.push(this); }
			observe(target) { this.target = target; }
			disconnect() { this.disconnected = true; }
		},
		giscusConfig: { repo: "TouhouDebian/turing-club", repoId: "test", categoryId: "test" },
		giscusThemes: { dark: "main { color-scheme: dark; }", light: "main { color-scheme: light; }" },
	};
	const run = () => runInNewContext(source, context);
	const mutate = (target) => observers.filter((o) => o.target === target && !o.disconnected).forEach((o) => o.callback());
	const frame = () => {
		const listeners = new Map();
		const item = {
			contentWindow: { postMessage: (message, origin) => messages.push({ message, origin }) },
			addEventListener: (name, callback) => listeners.set(name, callback),
			removeEventListener: (name) => listeners.delete(name),
			load: () => listeners.get("load")?.(),
		};
		frames.push(item);
		mutate(shell);
		return item;
	};
	run();
	return {
		shell, root, window, messages, observers, events, frame,
		run: () => { frames.length = 0; run(); },
		theme: () => Buffer.from(messages.at(-1).message.giscus.setConfig.theme.split(",")[1], "base64").toString(),
		setDark: (value) => { dark = value; mutate(root); },
		message: (item, origin = "https://giscus.app") => events.get("message")?.({ origin, source: item.contentWindow, data: { giscus: { resizeHeight: 500 } } }),
	};
}

test("the client starts in the actual site theme, including explicit light mode", () => {
	assert.equal(fixture().shell.client.dataset.theme, "dark");
	assert.equal(fixture(false).shell.client.dataset.theme, "light");
});

test("late lazy iframe receives current theme and is resynchronized on load/reload", () => {
	const f = fixture();
	f.setDark(false);
	const frame = f.frame();
	assert.equal(f.messages.length, 1);
	assert.match(f.theme(), /color-scheme: light/);
	frame.load();
	frame.load();
	assert.equal(f.messages.length, 3);
	assert(f.messages.every(({ origin }) => origin === "https://giscus.app"));
});

test("rapid theme switches cannot deliver a stale asynchronous theme", () => {
	const f = fixture();
	f.frame();
	f.setDark(false);
	f.setDark(true);
	assert.match(f.theme(), /color-scheme: dark/);
	assert.equal(f.shell.client.dataset.theme, "dark");
});

test("resize messages do not create a postMessage feedback loop", () => {
	const f = fixture();
	const frame = f.frame();
	for (let i = 0; i < 20; i++) f.message(frame);
	f.message(frame, "https://untrusted.example");
	assert.equal(f.messages.length, 1);
});

test("page reinitialization disposes old observers and listeners", () => {
	const f = fixture();
	const oldFrame = f.frame();
	f.run();
	assert(f.observers.slice(0, 2).every((o) => o.disconnected));
	const count = f.messages.length;
	oldFrame.load();
	assert.equal(f.messages.length, count);
	f.shell.isConnected = false;
	f.setDark(false);
	assert.equal(f.messages.length, count);
});
