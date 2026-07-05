---
title: "09 信息收集与枚举 / Information Gathering and Enumeration"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-12-09
description: "完整的信息收集与枚举课程在被动收集之后加入主动枚举、自动化和作业设计。重点是把零散线索转成可验证的资产清单。 / The full lesson moves from passive reconnaissance to active enumeration and automation, turning clues into an asset inventory."
image: "./images/slide-16-49.jpeg"
tags: ["OSINT", "Enumeration", "Google Hacking", "DNS", "Port Scanning"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-12-09

> 此文为codex改编往年课件而成

## 先把地图点亮

如果你是第一次接触这个主题，不用先背一堆名词。先抓住一个小问题：它解决什么麻烦？输入从哪里来？最后能留下什么证据？

完整的信息收集与枚举课程在被动收集之后加入主动枚举、自动化和作业设计。重点是把零散线索转成可验证的资产清单。

下面按“概念 -> 例子 -> 可操作的小任务”的顺序拆开。读完不一定立刻变成高手，但至少能知道下一步该点亮哪块地图。

## 你会学到

- 区分被动收集与主动枚举
- 理解 DNS、端口和服务发现的作用
- 建立自动化但不过度打扰目标的意识

## 1. 从线索到资产

信息收集的最终产物不应只是链接列表，而是结构化资产：域名、IP、端口、服务、技术栈、负责人、证据来源和验证状态。

表格化记录比聊天式记录更可靠。每条资产都应能追溯来源。

> 小提示：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

## 2. 搜索引擎与被动资料

搜索引擎适合发现公开页面、泄露痕迹、文档和历史信息。查询时要注意关键词、限定域名、文件类型和缓存结果。

不要把搜索结果当成最终结论，尤其是时间较久或来源不明的信息。

> 小提示：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

## 3. 主动枚举与自动化

主动枚举会直接与目标交互，例如 DNS 查询、端口扫描、服务识别。自动化可以提高效率，但也可能制造噪声，因此要控制速率和范围。

扫描前先确认授权、范围和时间窗口。扫描后要复核误报，避免把临时状态写成确定结论。

> 小提示：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

## 4. 作业与复盘

作业三选一的价值在于让同学选择不同深度：整理公开资料、完成基础枚举、或写一份小报告。重点是表达清楚方法、证据和结论。

好的报告能让别人复现你的路径，而不是只看到结果截图。

> 小提示：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

## 动手小任务

- 建立一份资产清单模板
- 对授权目标做一次 DNS 记录整理
- 解释自动化扫描为什么需要限速

:::

:::section{.lang-en}

**Original PPT date:** 2025-12-09

> This article was adapted by Codex from previous course slides.

## Overview

If this topic is new to you, do not start by memorizing every term. First ask a smaller question: what problem does it solve, where does input enter, and what evidence can we observe?

The full lesson moves from passive reconnaissance to active enumeration and automation, turning clues into an asset inventory.

The article follows a simple path: idea, example, and a small task you can reproduce safely.

## Learning Goals

- Explain the main workflow behind Information Gathering and Enumeration.
- Use OSINT, Enumeration, Reconnaissance to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. From clues to assets

The output should be a structured asset inventory, not a pile of links.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## 2. Search engines and passive sources

Search results are leads; verify them before treating them as facts.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## 3. Active enumeration and automation

Active enumeration needs scope control, rate control, and manual verification.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Do not rush the special move: draw input, processing, and output first.

## 4. Homework and review

A good report explains method, evidence, and conclusion clearly enough to reproduce.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

## Practice

- Summarize the main workflow of Information Gathering and Enumeration in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
