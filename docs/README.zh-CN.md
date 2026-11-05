# 天一中学图灵社 · Turing Club

[![天一中学图灵社首页](images/homepage.png)](https://turing.tyzx.org/)

[天一中学图灵社网站](https://turing.tyzx.org/)的源码与文章仓库，记录计算机、编程、网络安全课程、社团活动，以及一些带有东方 Project 气息的小实验。

**本站基于 [saicaca](https://github.com/saicaca) 的 [Fuwari](https://github.com/saicaca/fuwari) 二次开发，使用 [Astro](https://astro.build)、Svelte 和 Tailwind CSS 构建。** 这里维护的是图灵社网站，不是 Fuwari 原始模板。

[English README](../README.md) · [访问网站](https://turing.tyzx.org/) · [文章归档](https://turing.tyzx.org/archive/) · [源码仓库](https://github.com/TouhouDebian/turing-club)

## 网站现有功能

- 中英文切换：导航、文章标题、作者、摘要、分类与双语正文随网站语言显示。
- 课程文章分为 S1 启程、S2 扬帆，也收录天一中学秘封俱乐部和本站故事。
- 按日期、分类、标签、作者查看文章；标题下的作者名称可点击进入作者归档。同日文章若都有数字序号，序号大的排在上面。
- 浅色 / 深色模式、浅色专用头图、可调主题色、响应式布局与页面过渡。
- Pagefind 搜索、文章目录、图片查看、代码高亮、数学公式，以及 RSS 和站点地图生成。
- Giscus 评论与留言区，基于 GitHub Discussions，跟随网站主题；发表评论需要登录 GitHub。
- 桌面端东方 Live2D 看板娘，默认芙兰朵露，支持切换角色、鼠标追踪和可选的油库里语音。声音默认关闭；固定台词使用预录音频，AI 回复在浏览器按需合成，每条最多朗读 240 字。魔理沙用 f2，其余角色暂用灵梦 f1。
- 本校相关与外校友链子页面、关于页面。

AI 聊天接口位于 `functions/api/live2d-chat.js`，属于独立的 Cloudflare Pages Function。仅运行 Astro 静态构建或发布到 GitHub Pages，**不会自动运行这个接口**。接口需要在服务端配置 `DEEPSEEK_API_KEY`，可选 `DEEPSEEK_MODEL`；密钥不能写进文章、公开资源或前端代码。

## 本地运行

建议使用与部署流程一致的 **Node.js 22** 和 **pnpm 9.14.4**；构建与检查 CI 同时覆盖 Node.js 24。

```sh
git clone https://github.com/TouhouDebian/turing-club.git
cd turing-club
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

打开终端显示的地址，通常为 `http://localhost:4321/`。命令都在项目根目录执行；`sharp` 已经包含在依赖中，不用单独安装。

## 目录说明

| 路径 | 内容 |
|:--|:--|
| `src/content/posts/` | 文章、Frontmatter 与文章配图 |
| `src/content/spec/` | 关于页面正文 |
| `src/config.ts` | 站点名称、导航、简介、主题、头图与文章许可 |
| `src/components/` | 文章、归档、评论和看板娘组件 |
| `public/` | 构建时直接复制的静态资源 |
| `public/audio/live2d/` | 油库里预录台词及来源说明 |
| `functions/` | 独立于 Astro 静态输出的 Cloudflare Pages 中间件与聊天接口 |
| `scripts/new-post.js` | 双语文章生成脚本 |
| `astro.config.mjs` | 正式域名、部署路径与 Markdown 扩展 |
| `.github/workflows/` | 代码质量、构建检查与 GitHub Pages 部署 |

## 文章 Frontmatter

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
- 每篇保留 3–5 个明确的 `tags`，建议使用英文关键词，便于归档和搜索。
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


### 新建文章与插图

```sh
pnpm new-post my-new-post/index.md
```

编辑生成的 `src/content/posts/my-new-post/index.md`。脚本已在 `title` 与 `published` 之间加入 `author`，并生成中英文正文区块。生成时默认 `draft: false`，没写完可以先改成 `true`。

把图片放到 `src/content/posts/my-new-post/images/terminal.png`，正文这样引用：

```md
![启动服务器后的终端输出](./images/terminal.png)
```

图片保留原始比例，优先使用能说明操作的截图或知识结构图。代码、命令用带语言名称的代码块，不要让读者照着截图手敲。

`category` 填入新名称，重新构建后就会自动出现分类。已有分类请复用完整名称，中英文字段不同会被视为不同分类。例如 S2 课程使用：

```yaml
category: '2026.9-2027.6课件-S2扬帆 / 2026.9-2027.6 Slides S2 Set Sail'
```

双语元数据用两侧带空格的 ` / ` 分隔。单引号和双引号都是合法 YAML 写法，内容中出现同类引号时要正确转义。`lang` 不会自动翻译正文，想让文章完整跟随中英文切换，仍需写齐两个语言区块。

## Markdown 扩展

保留了 Fuwari 的提示框、GitHub 仓库卡片、数学公式，以及带行号和复制按钮的 Expressive Code 代码块。语法示例可参考 [Fuwari 原项目说明](https://github.com/saicaca/fuwari#-markdown-extended-syntax)。

## 常用命令

| 命令 | 用途 |
|:--|:--|
| `pnpm install --frozen-lockfile` | 按锁文件安装依赖 |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm new-post my-new-post/index.md` | 新建文章目录与双语模板 |
| `pnpm check` | 运行 Astro 检查 |
| `pnpm build` | 构建到 `dist/` 并生成 Pagefind 搜索索引 |
| `pnpm preview` | 本地预览正式构建结果 |
| `pnpm format` | 使用 Biome 格式化源码 |
| `pnpm lint` | 使用 Biome 检查并修改源码 |
| `node scripts/test-giscus-theme.mjs` | 运行评论主题回归测试 |

## 发布与维护

正式站点为 [turing.tyzx.org](https://turing.tyzx.org/)，域名配置在 `astro.config.mjs`。仓库目前保留了推送 `main` 后运行的 GitHub Pages 工作流，构建时使用 `DEPLOY_BASE=/turing-club/`；本地默认构建路径是 `/`。域名转发与 Cloudflare Functions 需要单独配置，只复制 `dist/` 不会部署 AI 聊天服务。

发布前检查两个语言版本、图片路径、作者、分类和草稿状态，再运行 `pnpm check` 与 `pnpm build`。Pagefind 索引在正式构建时生成，搜索功能请用 `pnpm preview` 验证。

`Simon/` 根目录里的原始 PPT 文件已加入 Git 忽略规则；发布文章时提交整理好的 Markdown 和实际用到的图片即可。忽略规则不会自动取消已经跟踪的文件。

## 致谢与许可

- 主题基于 saicaca 的 [Fuwari](https://github.com/saicaca/fuwari)，源码遵循 [MIT License](../LICENSE)。再分发代码时请保留上游版权声明。
- 本站文章当前显示 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)，由 `src/config.ts` 配置。
- 插画、课件配图、Live2D 模型与语音资源各有权利归属和使用要求，不能把源码的 MIT 许可直接套用到所有素材上。
- Live2D 模型来源：[TouhouCannonBall-Live2d-Models](https://github.com/n0099/TouhouCannonBall-Live2d-Models)；语音来源与限制见 [public/audio/live2d/README.md](../public/audio/live2d/README.md)。

本仓库仅维护本页与[英文 README](../README.md) 两个版本。
