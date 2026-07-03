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

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

信息收集与枚举上半部分先讲被动信息收集：尽量不直接接触目标系统，通过公开资料、搜索引擎、域名和网页痕迹建立目标画像。

## 学习目标

- 理解信息收集的目的和边界
- 掌握被动收集的常见来源
- 知道如何记录证据和不足

## 1. 信息收集的意义

信息收集不是八卦，而是为了减少盲目操作。知道目标资产、技术栈、公开入口和历史暴露信息，才能制定更稳妥的测试计划。

讲者补充：收集阶段最重要的是记录来源。没有来源的信息很难复核，也不适合写进报告。

## 2. 被动信息收集

被动收集包括搜索引擎、公开页面、域名记录、代码仓库、公告和历史快照等。它的优点是低噪声、低影响，适合作为第一步。

讲者补充：Google hacking 的重点是查询思路，不是复制语法。先明确想找什么，再设计搜索语句。

## 3. 不足与下一步

被动收集会受公开资料质量影响，可能过时、不完整或存在误导。因此后续需要主动枚举和验证，但主动操作必须遵守授权范围。

讲者补充：把“不确定”写出来是专业表现。报告中应区分确认事实、推测和待验证线索。

## 课堂练习

- 为一个授权靶场域名整理公开信息来源
- 写出三条搜索语句及其目的
- 把收集结果分成事实、推测、待验证三类

:::

:::section{.lang-en}

**Original PPT date:** 2025-12-02

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

Part 1 focuses on passive reconnaissance: building a target profile from public information before touching the target.

## Learning Goals

- Explain the main workflow behind Information Gathering and Enumeration, Part 1.
- Use OSINT, Reconnaissance, Information Gathering to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Purpose of reconnaissance

Reconnaissance reduces guessing. Evidence and sources matter.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 2. Passive reconnaissance

Passive reconnaissance uses public sources with minimal target interaction.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 3. Limitations and next steps

Separate confirmed facts, assumptions, and leads that need validation.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## Practice

- Summarize the main workflow of Information Gathering and Enumeration, Part 1 in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
