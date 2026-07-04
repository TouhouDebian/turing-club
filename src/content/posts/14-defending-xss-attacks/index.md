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

> 这篇讲义按课堂主线重新梳理：先抓住概念，再看命令、结构图和练习任务。别急着开大招，先把地图点亮。

## 导读

防御 XSS 课程把重点放在输出上下文、编码、CSP 和安全开发习惯上。XSS 防御不是简单删除 `<script>`，而是系统性管理不可信内容。

## 学习目标

- 理解三类 XSS 的触发位置
- 掌握输出编码和 CSP 的作用
- 形成前端安全开发习惯

## 1. XSS 的攻击原理

XSS 的共同点是不可信内容进入浏览器执行环境。反射型、存储型和 DOM 型的区别在于输入流向和触发位置。

讲者补充：过滤输入只能降低风险，关键仍是按输出上下文编码。

> 小旁白：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

## 2. 防御概览

防御包括 HTML 转义、属性编码、URL 编码、避免危险 API、模板自动转义、CSP 和 Cookie 安全属性。

讲者补充：不同上下文不能共用同一套编码函数。HTML 文本、属性、脚本和 URL 都要分开看。

> 小旁白：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

## 3. 代码示例与复盘

通过代码示例可以看到：安全渲染应该让用户内容保持“数据”身份，而不是变成 HTML 或 JavaScript。

讲者补充：修复 XSS 后要测试正常文本、特殊符号、链接、富文本等边界输入。

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

## 课堂练习

- 比较反射型、存储型和 DOM 型 XSS
- 为评论区设计 XSS 防御方案
- 解释 CSP 为什么不是唯一防线

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> These notes follow the lesson path: understand the idea first, then read commands, diagrams, and practice tasks with evidence.

## Overview

Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content.

## Learning Goals

- Explain the main workflow behind Defending Against Cross-Site Scripting (XSS).
- Use XSS, CSP, Output Encoding to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. How XSS works

XSS is untrusted content reaching browser execution contexts.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

## 2. Defense overview

Encoding must match the output context.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## 3. Code examples and review

Keep user content as data, not executable markup.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## Practice

- Summarize the main workflow of Defending Against Cross-Site Scripting (XSS) in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
