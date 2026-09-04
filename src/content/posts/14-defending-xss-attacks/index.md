---
title: "14 防御跨站脚本(XSS)攻击 / Defending Against Cross-Site Scripting (XSS)"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-04-22
description: "防御 XSS 课程讲解输出上下文、编码、CSP 和安全开发习惯。删除 `<script>` 无法覆盖所有 XSS 场景，不可信内容需要按上下文处理。 / Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content."
tags: ["XSS", "CSP", "Output Encoding", "Frontend Security"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-04-22

> 此文为codex改编往年课件而成

## 课程简介

课程讲解输出上下文、编码、CSP 和安全开发习惯。删除 `<script>` 无法覆盖所有 XSS 场景，不可信内容需要按上下文处理。

## 你会学到

- 理解三类 XSS 的触发位置
- 掌握输出编码和 CSP 的作用
- 形成前端安全开发习惯

## 1. XSS 的攻击原理

XSS 的共同点是不可信内容进入浏览器执行环境。反射型、存储型和 DOM 型的区别在于输入流向和触发位置。

过滤输入只能降低风险，关键仍是按输出上下文编码。

## 2. 防御概览

防御包括 HTML 转义、属性编码、URL 编码、避免危险 API、模板自动转义、CSP 和 Cookie 安全属性。

不同上下文不能共用同一套编码函数。HTML 文本、属性、脚本和 URL 都要分开看。

## 3. 代码示例与复盘

安全渲染会把用户内容作为数据处理，避免浏览器将其解析为 HTML 或 JavaScript。

修复 XSS 后要测试正常文本、特殊符号、链接、富文本等边界输入。

## 动手小任务

- 比较反射型、存储型和 DOM 型 XSS
- 为评论区设计 XSS 防御方案
- 解释 CSP 为什么不是唯一防线

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> This article was adapted by Codex from previous course slides.

## Overview

Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content.

## 1. How XSS works

XSS is untrusted content reaching browser execution contexts.

## 2. Defense overview

Encoding must match the output context.

## 3. Code examples and review

Keep user content as data, not executable markup.

:::
