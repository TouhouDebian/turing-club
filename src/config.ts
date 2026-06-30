import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "天一中学图灵社",
	subtitle: "Turing Club",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "/banner/89596288_p0.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center 58%", // Equivalent to object-position. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "顶部图片出处 / Header image source", // Credit text to be displayed
			url: "https://www.pixiv.net/artworks/89596288", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/favicon/zunix.svg",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "友链",
			url: "/links/",
		},
		{
			name: "留言",
			url: "/comment/",
		},
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/TouhouDebian/turing-club", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/cyber-club/club-visual.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "天一中学图灵社",
	bio: "Turing Club · Computing, programming and cybersecurity.",
	links: [
		{
			name: "About",
			icon: "fa6-regular:address-card", // Visit https://icones.js.org/ for icon codes
			url: "/about/",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
