---
title: "10 了解Web攻击 / Understanding Web Attacks"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-12-09
description: "Web 攻击入门课围绕数据库、SQL 注入和 XSS 展开。它的核心是理解用户输入如何进入服务器、数据库和浏览器，并在错误处理时造成安全影响。 / This web security lesson focuses on databases, SQL injection, and XSS: how input moves through server, database, and browser."
tags: ["Web Security", "SQL Injection", "XSS", "Database", "OWASP"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-12-09

> 此文为codex改编往年课件而成

## 先把地图点亮

如果你是第一次接触这个主题，不用先背一堆名词。先抓住一个小问题：它解决什么麻烦？输入从哪里来？最后能留下什么证据？

Web 攻击入门课围绕数据库、SQL 注入和 XSS 展开。它的核心是理解用户输入如何进入服务器、数据库和浏览器，并在错误处理时造成安全影响。

下面按“概念 -> 例子 -> 可操作的小任务”的顺序拆开。读完不一定立刻变成高手，但至少能知道下一步该点亮哪块地图。

## 你会学到

- 理解 Web 应用的输入输出路径
- 认识 SQL 注入和 XSS 的基本原理
- 知道常见防御方向

## 1. Web 应用与数据库

Web 应用通常接收用户输入，交给后端逻辑处理，再读写数据库并返回页面。攻击面就藏在这些输入、查询、渲染和权限边界里。

学 Web 安全时要画数据流。输入从哪里来，经过哪些组件，最终在哪里显示或执行，是判断风险的关键。

> 小提示：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

## 2. SQL 注入

SQL 注入发生在用户输入被拼接进数据库语句时，攻击者可能改变查询逻辑。理解它时要关注参数化查询、输入校验和数据库权限。

不要只背 payload。更重要的是解释为什么字符串拼接会把数据变成语句的一部分。

> 小提示：看到命令别只复制，顺手问一句：它读了什么、改了什么、留下了什么证据？

## 3. XSS 与浏览器执行

XSS 的关键是恶意脚本进入页面并在用户浏览器中执行。反射型、存储型和 DOM 型的差别，在于脚本从哪里进入、在哪里保存、在哪里触发。

防 XSS 时要根据输出上下文做编码，HTML、属性、URL、JavaScript 字符串里的规则并不相同。

> 小提示：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

## 4. 作业与安全边界

练习应在靶场中完成，目标是理解漏洞成因和修复思路，而不是对真实网站尝试 payload。

一次完整练习应包含复现、影响说明、修复建议和验证修复。

> 小提示：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

## 动手小任务

- 画出登录表单到数据库查询的数据流
- 说明参数化查询如何防 SQL 注入
- 比较反射型和存储型 XSS

:::

:::section{.lang-en}

**Original PPT date:** 2025-12-09

> This article was adapted by Codex from previous course slides.

## Overview

If this topic is new to you, do not start by memorizing every term. First ask a smaller question: what problem does it solve, where does input enter, and what evidence can we observe?

This web security lesson focuses on databases, SQL injection, and XSS: how input moves through server, database, and browser.

The article follows a simple path: idea, example, and a small task you can reproduce safely.

## Learning Goals

- Explain the main workflow behind Understanding Web Attacks.
- Use Web Security, SQL Injection, XSS to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Web apps and databases

Draw the data flow: input, backend logic, database, rendering, and permissions.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

## 2. SQL injection

SQL injection turns data into query logic when input is concatenated unsafely.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Do not just copy the command. Ask what it reads, what it changes, and what evidence it leaves.

## 3. XSS and browser execution

XSS is about untrusted script reaching a browser execution context.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

## 4. Homework and boundaries

Practice in labs and always include remediation and verification.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## Practice

- Summarize the main workflow of Understanding Web Attacks in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
