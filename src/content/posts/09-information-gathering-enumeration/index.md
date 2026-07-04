---
title: "09 信息收集与枚举 / Information Gathering and Enumeration"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-12-09
description: "完整的信息收集与枚举课程在被动收集之后加入主动枚举、自动化和作业设计。重点是把零散线索转成可验证的资产清单。 / The full lesson moves from passive reconnaissance to active enumeration and automation, turning clues into an asset inventory."
tags: ["OSINT", "Enumeration", "Reconnaissance", "Google Hacking", "DNS", "Port Scanning", "Asset Discovery"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-12-09

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

## 导读

完整的信息收集与枚举课程在被动收集之后加入主动枚举、自动化和作业设计。重点是把零散线索转成可验证的资产清单。

## 学习目标

- 区分被动收集与主动枚举
- 理解 DNS、端口和服务发现的作用
- 建立自动化但不过度打扰目标的意识

## 1. 从线索到资产

信息收集的最终产物不应只是链接列表，而是结构化资产：域名、IP、端口、服务、技术栈、负责人、证据来源和验证状态。

讲者补充：表格化记录比聊天式记录更可靠。每条资产都应能追溯来源。

> 小旁白：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 2 页：Collect information

- Collect information
- 被动信息收集
- Passive information collection
- Proactive information collection
- Next work direction

#### 第 8 页：被动信息收集

- 演示文稿是一种实用的工具，可以是演示，演讲，报告等。大部分时间，它们都是在为观众服务

## 2. 搜索引擎与被动资料

搜索引擎适合发现公开页面、泄露痕迹、文档和历史信息。查询时要注意关键词、限定域名、文件类型和缓存结果。

讲者补充：不要把搜索结果当成最终结论，尤其是时间较久或来源不明的信息。

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

## 3. 主动枚举与自动化

主动枚举会直接与目标交互，例如 DNS 查询、端口扫描、服务识别。自动化可以提高效率，但也可能制造噪声，因此要控制速率和范围。

讲者补充：扫描前先确认授权、范围和时间窗口。扫描后要复核误报，避免把临时状态写成确定结论。

> 小旁白：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

## 4. 作业与复盘

作业三选一的价值在于让同学选择不同深度：整理公开资料、完成基础枚举、或写一份小报告。重点是表达清楚方法、证据和结论。

讲者补充：好的报告能让别人复现你的路径，而不是只看到结果截图。

> 小旁白：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 16 页：作业三选一

- 被动信息收集关于
- 主动收集关于
- TYAP/TYZX
- 主动信息收集
- 如果选择此选项，将获得双倍得分

## 课堂练习

- 建立一份资产清单模板
- 对授权目标做一次 DNS 记录整理
- 解释自动化扫描为什么需要限速

:::

:::section{.lang-en}

**Original PPT date:** 2025-12-09

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

## Overview

The full lesson moves from passive reconnaissance to active enumeration and automation, turning clues into an asset inventory.

## Learning Goals

- Explain the main workflow behind Information Gathering and Enumeration.
- Use OSINT, Enumeration, Reconnaissance to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. From clues to assets

The output should be a structured asset inventory, not a pile of links.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## 2. Search engines and passive sources

Search results are leads; verify them before treating them as facts.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## 3. Active enumeration and automation

Active enumeration needs scope control, rate control, and manual verification.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not rush the special move: draw input, processing, and output first.

## 4. Homework and review

A good report explains method, evidence, and conclusion clearly enough to reproduce.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

## Practice

- Summarize the main workflow of Information Gathering and Enumeration in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
