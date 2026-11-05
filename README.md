# Turing Club · 天一中学图灵社

[![Turing Club homepage](docs/images/homepage.png)](https://turing.tyzx.org/)

The source code and articles for [天一中学图灵社 / Turing Club](https://turing.tyzx.org/), covering computing, programming, cybersecurity, club lessons, and occasional Touhou-themed experiments.

**Based on [Fuwari](https://github.com/saicaca/fuwari) by [saicaca](https://github.com/saicaca), built with [Astro](https://astro.build), Svelte, and Tailwind CSS.** This repository is the club's customized website, not the upstream Fuwari template.

[中文说明与写文章教程](docs/README.zh-CN.md) · [Website](https://turing.tyzx.org/) · [Archive](https://turing.tyzx.org/archive/) · [Repository](https://github.com/TouhouDebian/turing-club)

## Website Features

- Chinese / English switching for navigation, article metadata, and bilingual article sections.
- Course articles organized into S1 Start and S2 Set Sail, alongside Secret Sealing Club and site stories.
- Date, category, tag, and author archives; author names below article titles link to their archive. Posts on the same date use descending lesson numbers where both have a numeric prefix.
- Light / dark themes, separate light-mode banner, configurable accent color, responsive layout, and smooth page transitions.
- [Pagefind](https://pagefind.app/) search, article outlines, image viewing, syntax-highlighted code blocks, math, RSS, and sitemap generation.
- [Giscus](https://giscus.app/) comments backed by GitHub Discussions, synchronized with the site theme; GitHub sign-in is required to post.
- Desktop Touhou Live2D widget, defaulting to Flandre, with character selection, mouse tracking, and optional Yukkuri speech. Voice starts muted; fixed lines use recordings and AI replies use lazy-loaded browser-local synthesis (up to 240 characters per reply). Marisa uses f2; other characters use f1.
- School-related links, external school links, an About page, and a guestbook.

The AI chat endpoint in `functions/api/live2d-chat.js` is a separate Cloudflare Pages Function. A static Astro build or GitHub Pages deployment alone does **not** run that endpoint. Its server environment needs `DEEPSEEK_API_KEY` (and optionally `DEEPSEEK_MODEL`); never put keys in Markdown, public assets, or client-side code.

## Local Development

Use **Node.js 22** and **pnpm 9.14.4** to match the deployment workflow. Build/check CI also covers Node.js 24.

```sh
git clone https://github.com/TouhouDebian/turing-club.git
cd turing-club
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open the address printed in the terminal, normally `http://localhost:4321/`. Run these commands in the project root; `sharp` is already a dependency and needs no separate installation.

## Project Layout

| Path | Purpose |
|:--|:--|
| `src/content/posts/` | Articles, frontmatter, and article-local images |
| `src/content/spec/` | About-page content |
| `src/config.ts` | Site name, navigation, profile, theme, banners, and article license |
| `src/components/` | Article UI, archives, comments, and Live2D widget |
| `public/` | Static assets copied to the build |
| `public/audio/live2d/` | Prerecorded voice lines and their source notes |
| `functions/` | Cloudflare Pages middleware and chat endpoint, separate from Astro output |
| `scripts/new-post.js` | Bilingual article starter |
| `astro.config.mjs` | Canonical domain, deployment base path, Markdown plugins |
| `.github/workflows/` | Quality checks, build checks, and GitHub Pages deployment |

## Frontmatter of Posts

```yaml
---
title: Chinese Title / English Title
author: Chinese Author Name / English Author Name
published: 2023-09-09
description: Chinese summary / English summary.
image: ./cover.jpg
tags: [Linux, Shell]
category: Chinese Category / English Category
draft: false
lang: en      # Set only if the post's language differs from the site's language in `config.ts`
---
```

Notes:

- Use `Chinese / English` for `title`, `author`, `description`, and `category` when the field should follow the language switch.
- Use `YYYY-MM-DD` for `published`.
- Keep 3–5 clear tags per article; English tags work best for archive filtering.
- Keep article images in the post folder, usually under `images/`.
- Set `draft: true` while writing and switch it to `false` before publishing.

## ✍️ Writing Posts

Recommended bilingual structure:

```md
:::section{.lang-zh}

## 导读

这里写中文正文。

:::

:::section{.lang-en}

## Overview

Write the English version here.

:::
```

For bilingual posts, use one of these workflows:

- Recommended: write one Markdown file with `:::section{.lang-zh}` and `:::section{.lang-en}` blocks. Keep the same headings in both sections so the language switch stays predictable.
- Safer for long posts: draft in Chinese first, then translate section by section. Keep code blocks, commands, image paths, and frontmatter identical in both languages.
- Technical posts should read like “problem -> idea -> steps -> result -> notes”, not like pasted slides.
- Use code fences for commands, code, and terminal output. Prefer text over screenshots when text is enough.
- Fast notes: write the main article in the site language and add `lang:` only when a post is intentionally single-language.


### Creating an Article and Adding Images

```sh
pnpm new-post my-new-post/index.md
```

Edit `src/content/posts/my-new-post/index.md`. The script includes `author` between `title` and `published`, plus both language blocks. The generated post has `draft: false`: change it to `true` while writing.

Put an image at `src/content/posts/my-new-post/images/terminal.png`, then reference it from that article:

```md
![Terminal output after starting the server](./images/terminal.png)
```

Keep original image proportions. Use meaningful screenshots or diagrams; write commands and code in fenced code blocks so readers can copy them.

A new `category` value automatically appears after rebuilding; no category file is needed. Reuse the exact existing bilingual value to avoid splitting an archive. For example:

```yaml
category: '2026.9-2027.6课件-S2扬帆 / 2026.9-2027.6 Slides S2 Set Sail'
```

Separate bilingual metadata with a space on each side of ` / `. Single or double quotes are both valid YAML; escape embedded quotes as needed. The `lang` field does not translate text: write both language sections for a complete bilingual article.

## Markdown Extensions

Fuwari's Markdown extensions are retained: admonitions, GitHub repository cards, math, and Expressive Code blocks with line numbers and copy controls. See the [upstream usage examples](https://github.com/saicaca/fuwari#-markdown-extended-syntax).

## Commands

| Command | Purpose |
|:--|:--|
| `pnpm install --frozen-lockfile` | Install locked dependencies |
| `pnpm dev` | Start the local development server |
| `pnpm new-post my-new-post/index.md` | Generate an article folder and bilingual starter |
| `pnpm check` | Run Astro checks |
| `pnpm build` | Build to `dist/` and generate the Pagefind index |
| `pnpm preview` | Preview the production build locally |
| `pnpm format` | Format source files with Biome |
| `pnpm lint` | Check and modify source files with Biome |
| `node scripts/test-giscus-theme.mjs` | Run Giscus theme regression tests |

## Publishing and Maintenance

The public site URL is [turing.tyzx.org](https://turing.tyzx.org/), configured in `astro.config.mjs`. The repository currently includes a push-to-`main` GitHub Pages workflow, building with `DEPLOY_BASE=/turing-club/`. The default local build uses `/`. Domain routing and any Cloudflare Functions must be configured separately; copying `dist/` alone does not deploy the chat service.

Before publishing, check both language versions, image paths, authors, categories, and draft status, then run `pnpm check` and `pnpm build`. Pagefind search is generated by `pnpm build`, so use `pnpm preview` to verify its production index.

Local source PPT files in the root of `Simon/` are ignored by Git. Commit the generated Markdown and required images instead. Ignore rules do not remove files that were already tracked.

## Credits and Licenses

- Theme: [Fuwari](https://github.com/saicaca/fuwari) by saicaca, under the [MIT License](LICENSE). Preserve the upstream copyright notice when redistributing code.
- Articles: the site currently displays [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), configured in `src/config.ts`.
- Illustrations, course images, Live2D models, and voice assets retain their respective rights and source requirements; the code's MIT license does not grant blanket rights to them.
- Live2D model source: [TouhouCannonBall-Live2d-Models](https://github.com/n0099/TouhouCannonBall-Live2d-Models). Voice provenance and restrictions are documented in [public/audio/live2d/README.md](public/audio/live2d/README.md).

This repository maintains two README versions: this English README and the [Chinese README](docs/README.zh-CN.md).
