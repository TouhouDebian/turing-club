---
title: "14 防御跨站脚本(XSS)攻击 / Defending Against Cross-Site Scripting (XSS)"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-04-22
description: "防御 XSS 课程把重点放在输出上下文、编码、CSP 和安全开发习惯上。XSS 防御不是简单删除 `<script>`，而是系统性管理不可信内容。 / Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content."
tags: ["XSS", "CSP", "Output Encoding", "Frontend Security", "Web Defense", "Secure Coding"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-04-22

> 此文为codex改编往年课件而成

## 先把地图点亮

如果你是第一次接触这个主题，不用先背一堆名词。先抓住一个小问题：它解决什么麻烦？输入从哪里来？最后能留下什么证据？

防御 XSS 课程把重点放在输出上下文、编码、CSP 和安全开发习惯上。XSS 防御不是简单删除 `<script>`，而是系统性管理不可信内容。

下面按“概念 -> 例子 -> 可操作的小任务”的顺序拆开。读完不一定立刻变成高手，但至少能知道下一步该点亮哪块地图。

## 你会学到

- 理解三类 XSS 的触发位置
- 掌握输出编码和 CSP 的作用
- 形成前端安全开发习惯

## 1. XSS 的攻击原理

XSS 的共同点是不可信内容进入浏览器执行环境。反射型、存储型和 DOM 型的区别在于输入流向和触发位置。

过滤输入只能降低风险，关键仍是按输出上下文编码。

> 小提示：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

## 2. 防御概览

防御包括 HTML 转义、属性编码、URL 编码、避免危险 API、模板自动转义、CSP 和 Cookie 安全属性。

不同上下文不能共用同一套编码函数。HTML 文本、属性、脚本和 URL 都要分开看。

> 小提示：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

## 3. 代码示例与复盘

通过代码示例可以看到：安全渲染应该让用户内容保持“数据”身份，而不是变成 HTML 或 JavaScript。

修复 XSS 后要测试正常文本、特殊符号、链接、富文本等边界输入。

> 小提示：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

## 动手小任务

- 比较反射型、存储型和 DOM 型 XSS
- 为评论区设计 XSS 防御方案
- 解释 CSP 为什么不是唯一防线

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> This article was adapted by Codex from previous course slides.

## Overview

If this topic is new to you, do not start by memorizing every term. First ask a smaller question: what problem does it solve, where does input enter, and what evidence can we observe?

Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content.

The article follows a simple path: idea, example, and a small task you can reproduce safely.

## Learning Goals

- Explain the main workflow behind Defending Against Cross-Site Scripting (XSS).
- Use XSS, CSP, Output Encoding to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. How XSS works

XSS is untrusted content reaching browser execution contexts.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

## 2. Defense overview

Encoding must match the output context.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## 3. Code examples and review

Keep user content as data, not executable markup.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## Practice

- Summarize the main workflow of Defending Against Cross-Site Scripting (XSS) in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
