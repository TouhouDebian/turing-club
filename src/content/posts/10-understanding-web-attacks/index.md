---
title: "10 了解Web攻击 / Understanding Web Attacks"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-12-09
description: "Web 攻击入门课围绕数据库、SQL 注入和 XSS 展开。它的核心是理解用户输入如何进入服务器、数据库和浏览器，并在错误处理时造成安全影响。 / This web security lesson focuses on databases, SQL injection, and XSS: how input moves through server, database, and browser."
tags: ["Web Security", "SQL Injection", "XSS", "Database", "OWASP", "Web Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-12-09

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

## 导读

Web 攻击入门课围绕数据库、SQL 注入和 XSS 展开。它的核心是理解用户输入如何进入服务器、数据库和浏览器，并在错误处理时造成安全影响。

## 学习目标

- 理解 Web 应用的输入输出路径
- 认识 SQL 注入和 XSS 的基本原理
- 知道常见防御方向

## 1. Web 应用与数据库

Web 应用通常接收用户输入，交给后端逻辑处理，再读写数据库并返回页面。攻击面就藏在这些输入、查询、渲染和权限边界里。

讲者补充：学 Web 安全时要画数据流。输入从哪里来，经过哪些组件，最终在哪里显示或执行，是判断风险的关键。

> 小旁白：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

## 2. SQL 注入

SQL 注入发生在用户输入被拼接进数据库语句时，攻击者可能改变查询逻辑。理解它时要关注参数化查询、输入校验和数据库权限。

讲者补充：不要只背 payload。更重要的是解释为什么字符串拼接会把数据变成语句的一部分。

> 小旁白：看到命令别只复制，顺手问一句：它读了什么、改了什么、留下了什么证据？

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 9 页：SQL

- SQL 注入攻击模拟器
- 在线安全检测工具
- 实战演练平台

## 3. XSS 与浏览器执行

XSS 的关键是恶意脚本进入页面并在用户浏览器中执行。反射型、存储型和 DOM 型的差别，在于脚本从哪里进入、在哪里保存、在哪里触发。

讲者补充：防 XSS 时要根据输出上下文做编码，HTML、属性、URL、JavaScript 字符串里的规则并不相同。

> 小旁白：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 12 页：XSS

- XSS 的三类主要形式
- 特点：恶意脚本随请求参数（如
- URL 、表单字段）被服务器原样返回到响应页面，并在用户浏览器中执行。
- 场景示例：搜索结果页、错误信息页、重定向参数等直接把用户输入展示在页面上，未做过滤或转义。
- 常见利用流程：攻击者诱导用户点击特制链接（含恶意脚本），服务器在响应中反射该脚本，用户浏览器执行。
- 特点：恶意脚本被存储在服务器端（如数据库、留言板、用户资料、评论等），随后所有查看该数据的用户都会触发脚本执行。
- 场景示例：论坛发帖、评论、用户签名、上传的
- HTML 内容等被保存并在页面上直接渲染。

## 4. 作业与安全边界

练习应在靶场中完成，目标是理解漏洞成因和修复思路，而不是对真实网站尝试 payload。

讲者补充：一次完整练习应包含复现、影响说明、修复建议和验证修复。

> 小旁白：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 14 页：作业

- 还记得我们第一节课给你们搭的网站吗
- 或许已经到期了对吗
- 到期了没关系，重新买一个就行了
- html ，需要和数据库建立连接，建完成后把网址发给我

## 课堂练习

- 画出登录表单到数据库查询的数据流
- 说明参数化查询如何防 SQL 注入
- 比较反射型和存储型 XSS

:::

:::section{.lang-en}

**Original PPT date:** 2025-12-09

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

## Overview

This web security lesson focuses on databases, SQL injection, and XSS: how input moves through server, database, and browser.

## Learning Goals

- Explain the main workflow behind Understanding Web Attacks.
- Use Web Security, SQL Injection, XSS to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Web apps and databases

Draw the data flow: input, backend logic, database, rendering, and permissions.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

## 2. SQL injection

SQL injection turns data into query logic when input is concatenated unsafely.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not just copy the command. Ask what it reads, what it changes, and what evidence it leaves.

## 3. XSS and browser execution

XSS is about untrusted script reaching a browser execution context.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

## 4. Homework and boundaries

Practice in labs and always include remediation and verification.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## Practice

- Summarize the main workflow of Understanding Web Attacks in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
