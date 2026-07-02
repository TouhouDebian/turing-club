---
title: "14 防御跨站脚本(XSS)攻击 / Defending Against Cross-Site Scripting (XSS)"
published: 2026-04-22
description: "防御 XSS 课程把重点放在输出上下文、编码、CSP 和安全开发习惯上。XSS 防御不是简单删除 `<script>`，而是系统性管理不可信内容。 / Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content."
tags: ["XSS", "CSP", "Output Encoding", "Frontend Security", "Web Defense", "Secure Coding"]
category: "Club Course"
draft: false
---

:::section{.lang-zh}

**作者：** 2023届 Simon Li

**原 PPT 日期：** 2026-04-22

**关键词：** #XSS #CSP #Output-Encoding #Frontend-Security #Web-Defense #Secure-Coding

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

防御 XSS 课程把重点放在输出上下文、编码、CSP 和安全开发习惯上。XSS 防御不是简单删除 `<script>`，而是系统性管理不可信内容。

## 学习目标

- 理解三类 XSS 的触发位置
- 掌握输出编码和 CSP 的作用
- 形成前端安全开发习惯

## 1. XSS 的攻击原理

XSS 的共同点是不可信内容进入浏览器执行环境。反射型、存储型和 DOM 型的区别在于输入流向和触发位置。

讲者补充：过滤输入只能降低风险，关键仍是按输出上下文编码。

## 2. 防御概览

防御包括 HTML 转义、属性编码、URL 编码、避免危险 API、模板自动转义、CSP 和 Cookie 安全属性。

讲者补充：不同上下文不能共用同一套编码函数。HTML 文本、属性、脚本和 URL 都要分开看。

## 3. 代码示例与复盘

通过代码示例可以看到：安全渲染应该让用户内容保持“数据”身份，而不是变成 HTML 或 JavaScript。

讲者补充：修复 XSS 后要测试正常文本、特殊符号、链接、富文本等边界输入。

## 课堂练习

- 比较反射型、存储型和 DOM 型 XSS
- 为评论区设计 XSS 防御方案
- 解释 CSP 为什么不是唯一防线

:::

:::section{.lang-en}

**Author:** Class of 2023 Simon Li

**Original PPT date:** 2026-04-22

**Keywords:** #XSS #CSP #Output-Encoding #Frontend-Security #Web-Defense #Secure-Coding

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content.

## Learning Goals

- Understand the core ideas of Defending Against Cross-Site Scripting (XSS).
- Connect XSS, CSP, Output Encoding to practical security work.
- Practice only in authorized, repeatable lab environments.

## 1. How XSS works

XSS is untrusted content reaching browser execution contexts.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## 2. Defense overview

Encoding must match the output context.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## 3. Code examples and review

Keep user content as data, not executable markup.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## Practice

- Summarize the main workflow of Defending Against Cross-Site Scripting (XSS) in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
