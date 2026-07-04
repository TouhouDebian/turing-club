---
title: "09 信息收集与枚举（一半） / Information Gathering and Enumeration, Part 1"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-12-02
description: "信息收集与枚举上半部分先讲被动信息收集：尽量不直接接触目标系统，通过公开资料、搜索引擎、域名和网页痕迹建立目标画像。 / Part 1 focuses on passive reconnaissance: building a target profile from public information before touching the target."
tags: ["OSINT", "Reconnaissance", "Information Gathering", "Search Engines", "Domains", "Passive Reconnaissance"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-12-02

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

## 导读

信息收集与枚举上半部分先讲被动信息收集：尽量不直接接触目标系统，通过公开资料、搜索引擎、域名和网页痕迹建立目标画像。

## 学习目标

- 理解信息收集的目的和边界
- 掌握被动收集的常见来源
- 知道如何记录证据和不足

## 1. 信息收集的意义

信息收集不是八卦，而是为了减少盲目操作。知道目标资产、技术栈、公开入口和历史暴露信息，才能制定更稳妥的测试计划。

讲者补充：收集阶段最重要的是记录来源。没有来源的信息很难复核，也不适合写进报告。

> 小旁白：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 2 页：Collect information

- Collect information
- 被动信息收集
- Passive information collection
- Proactive information collection
- Next work direction

## 2. 被动信息收集

被动收集包括搜索引擎、公开页面、域名记录、代码仓库、公告和历史快照等。它的优点是低噪声、低影响，适合作为第一步。

讲者补充：Google hacking 的重点是查询思路，不是复制语法。先明确想找什么，再设计搜索语句。

> 小旁白：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 8 页：被动信息收集

- 演示文稿是一种实用的工具，可以是演示，演讲，报告等。大部分时间，它们都是在为观众服务

## 3. 不足与下一步

被动收集会受公开资料质量影响，可能过时、不完整或存在误导。因此后续需要主动枚举和验证，但主动操作必须遵守授权范围。

讲者补充：把“不确定”写出来是专业表现。报告中应区分确认事实、推测和待验证线索。

> 小旁白：看到命令别只复制，顺手问一句：它读了什么、改了什么、留下了什么证据？

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 12 页：问题不足呈现

- 演示文稿是一种实用的工具，可以是演示，演讲，报告等。大部分时间，它们都是在为观众服务。演示文稿是一种实用的工具，可以是演示，演讲，报告等

#### 第 13 页：问题不足呈现

- 演示文稿是一种实用的工具，可以是演示，演讲，报告等。大部分时间，它们都是在为观众服务。演示文稿是一种实用的工具

#### 第 14 页：问题不足呈现

- 演示文稿是一种实用的工具，可以是演示，演讲，报告等。大部分时间，它们都是在为观众服务
- 演示文稿是一种实用的工具，可以是演示，演讲，报告等。大部分时间，它们都是在为观众服务。演示文稿是一种实用的工具，可以是演示，演讲，报告等。大部分时间，它们都是在为观众服务

### 相关图解

> 这些图是为了辅助理解结构、命令输出或表格关系；装饰图已经尽量排除。

![课程相关截图 1](./images/slide-17-56-square.png)

## 课堂练习

- 为一个授权靶场域名整理公开信息来源
- 写出三条搜索语句及其目的
- 把收集结果分成事实、推测、待验证三类

:::

:::section{.lang-en}

**Original PPT date:** 2025-12-02

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

## Overview

Part 1 focuses on passive reconnaissance: building a target profile from public information before touching the target.

## Learning Goals

- Explain the main workflow behind Information Gathering and Enumeration, Part 1.
- Use OSINT, Reconnaissance, Information Gathering to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Purpose of reconnaissance

Reconnaissance reduces guessing. Evidence and sources matter.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not rush the special move: draw input, processing, and output first.

## 2. Passive reconnaissance

Passive reconnaissance uses public sources with minimal target interaction.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

## 3. Limitations and next steps

Separate confirmed facts, assumptions, and leads that need validation.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not just copy the command. Ask what it reads, what it changes, and what evidence it leaves.

### Related Visuals

> These visuals are kept for structure, command output, or tables; decorative images are intentionally filtered out.

![Course-related screenshot 1](./images/slide-17-56-square.png)

## Practice

- Summarize the main workflow of Information Gathering and Enumeration, Part 1 in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
