<script lang="ts">
import Icon from "@iconify/svelte";
import { onMount } from "svelte";

type Language = "zh" | "en";

let language: Language = $state("zh");

function applyLanguage(nextLanguage: Language) {
	language = nextLanguage;
	localStorage.setItem("language", nextLanguage);
	document.documentElement.dataset.language = nextLanguage;
	document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
}

function toggleLanguage() {
	applyLanguage(language === "zh" ? "en" : "zh");
}

onMount(() => {
	const stored = localStorage.getItem("language");
	applyLanguage(stored === "en" ? "en" : "zh");
});
</script>

<button
	aria-label="Switch Language"
	class="btn-plain scale-animation rounded-lg h-11 px-3 active:scale-90 font-bold"
	onclick={toggleLanguage}
>
	<Icon icon="material-symbols:translate-rounded" class="text-[1.25rem] mr-1"></Icon>
	<span class="text-sm">{language === "zh" ? "EN" : "中"}</span>
</button>
