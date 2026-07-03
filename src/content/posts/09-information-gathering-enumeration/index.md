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

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

完整的信息收集与枚举课程在被动收集之后加入主动枚举、自动化和作业设计。重点是把零散线索转成可验证的资产清单。

## 学习目标

- 区分被动收集与主动枚举
- 理解 DNS、端口和服务发现的作用
- 建立自动化但不过度打扰目标的意识

## 1. 从线索到资产

信息收集的最终产物不应只是链接列表，而是结构化资产：域名、IP、端口、服务、技术栈、负责人、证据来源和验证状态。

讲者补充：表格化记录比聊天式记录更可靠。每条资产都应能追溯来源。

## 2. 搜索引擎与被动资料

搜索引擎适合发现公开页面、泄露痕迹、文档和历史信息。查询时要注意关键词、限定域名、文件类型和缓存结果。

讲者补充：不要把搜索结果当成最终结论，尤其是时间较久或来源不明的信息。

## 3. 主动枚举与自动化

主动枚举会直接与目标交互，例如 DNS 查询、端口扫描、服务识别。自动化可以提高效率，但也可能制造噪声，因此要控制速率和范围。

讲者补充：扫描前先确认授权、范围和时间窗口。扫描后要复核误报，避免把临时状态写成确定结论。

## 4. 作业与复盘

作业三选一的价值在于让同学选择不同深度：整理公开资料、完成基础枚举、或写一份小报告。重点是表达清楚方法、证据和结论。

讲者补充：好的报告能让别人复现你的路径，而不是只看到结果截图。

## 课堂练习

- 建立一份资产清单模板
- 对授权目标做一次 DNS 记录整理
- 解释自动化扫描为什么需要限速

:::

:::section{.lang-en}

**Original PPT date:** 2025-12-09

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

The full lesson moves from passive reconnaissance to active enumeration and automation, turning clues into an asset inventory.

## Learning Goals

- Explain the main workflow behind Information Gathering and Enumeration.
- Use OSINT, Enumeration, Reconnaissance to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. From clues to assets

The output should be a structured asset inventory, not a pile of links.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 2. Search engines and passive sources

Search results are leads; verify them before treating them as facts.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 3. Active enumeration and automation

Active enumeration needs scope control, rate control, and manual verification.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 4. Homework and review

A good report explains method, evidence, and conclusion clearly enough to reproduce.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## Practice

- Summarize the main workflow of Information Gathering and Enumeration in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
