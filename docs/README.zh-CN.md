# 🍥Fuwari

基于 [Astro](https://astro.build) 开发的静态博客模板。

[**🖥️在线预览（Vercel）**](https://fuwari.vercel.app)

![Preview Image](https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png)

## ✨ 功能特性

- [x] 基于 Astro 和 Tailwind CSS 开发
- [x] 流畅的动画和页面过渡
- [x] 亮色 / 暗色模式
- [x] 自定义主题色和横幅图片
- [x] 响应式设计
- [ ] 评论
- [x] 搜索
- [x] 文内目录

## 👀 要求

- Node.js <= 22
- pnpm <= 9

## 🚀 使用方法 1

使用 [create-fuwari](https://github.com/L4Ph/create-fuwari) 在本地初始化项目。

```sh
# npm
npm create fuwari@latest

# yarn
yarn create fuwari

# pnpm
pnpm create fuwari@latest

# bun
bun create fuwari@latest

# deno
deno run -A npm:create-fuwari@latest
```

1. 通过配置文件 `src/config.ts` 自定义博客
2. 执行 `pnpm new-post <filename>` 创建新文章，并在 `src/content/posts/` 目录中编辑
3. 参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages 等；部署前需编辑 `astro.config.mjs` 中的站点设置。

## 🚀 使用方法 2

1. 使用此模板[生成新仓库](https://github.com/saicaca/fuwari/generate)或 Fork 此仓库
2. 进行本地开发，Clone 新的仓库，执行 `pnpm install` 和 `pnpm add sharp` 以安装依赖  
   - 若未安装 [pnpm](https://pnpm.io)，执行 `npm install -g pnpm`
3. 通过配置文件 `src/config.ts` 自定义博客
4. 执行 `pnpm new-post <filename>` 创建新文章，并在 `src/content/posts/` 目录中编辑
5. 参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages 等；部署前需编辑 `astro.config.mjs` 中的站点设置。

## ⚙️ 文章 Frontmatter

```yaml
---
title: 中文标题 / English Title
author: 作者中文名 / English Author Name
published: 2023-09-09
description: 中文摘要 / English summary.
image: ./cover.jpg
tags: [Linux, Shell]
category: 中文分类 / English Category
draft: false
lang: zh-CN      # 仅当文章语言与 `config.ts` 中的网站语言不同时需要设置
---
```

说明：

- `title`、`author`、`description`、`category` 推荐使用 `中文 / English` 格式，网站会按语言切换显示对应内容。
- `published` 使用 `YYYY-MM-DD`，例如 `2026-07-03`。
- `tags` 使用英文关键词，便于归档和搜索。
- `image` 可以留空；如果使用文章内图片，建议放在文章同目录的 `images/` 文件夹中。
- `draft: true` 表示草稿，正式发布前改为 `false`。

## ✍️ 写文章指南

推荐使用下面的双语结构：

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

写作建议：

- 推荐：一个 Markdown 文件里同时写 `:::section{.lang-zh}` 和 `:::section{.lang-en}`，两边使用相同标题结构，语言切换最稳定。
- 长文更稳：先写中文，再按小节翻译英文；代码块、命令、图片路径和 frontmatter 保持一致。
- 技术文章尽量写成“问题 -> 原理 -> 操作 -> 结果 -> 注意事项”，不要只粘贴 PPT 或命令。
- 代码、命令、终端输出使用代码块；能用文字说明的内容不要截图。
- 临时笔记：只写一种语言，并在确实需要时设置 `lang:`，避免半翻译内容在切换语言时混乱。

## 🧞 指令

下列指令均需要在项目根目录执行：

| Command                           | Action                            |
|:----------------------------------|:----------------------------------|
| `pnpm install` 并 `pnpm add sharp` | 安装依赖                              |
| `pnpm dev`                        | 在 `localhost:4321` 启动本地开发服务器      |
| `pnpm build`                      | 构建网站至 `./dist/`                   |
| `pnpm preview`                    | 本地预览已构建的网站                        |
| `pnpm new-post <filename>`        | 创建新文章                             |
| `pnpm astro ...`                  | 执行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`               | 显示 Astro CLI 帮助                   |
