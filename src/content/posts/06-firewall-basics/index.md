---
title: "06 防火墙基础 / Firewall Basics"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-11-10
description: "防火墙基础课讨论流量如何被允许、拒绝、记录和分段。它不是一道万能墙，而是一套基于规则、场景和日志的访问控制方法。 / Firewall basics explain how traffic is allowed, denied, logged, and segmented through rules and policy."
tags: ["Firewall", "Network Security", "Access Control", "Ports", "Traffic Filtering", "Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-11-10

> 这篇讲义按课堂主线重新梳理：先抓住概念，再看命令、结构图和练习任务。别急着开大招，先把地图点亮。

## 导读

防火墙基础课讨论流量如何被允许、拒绝、记录和分段。它不是一道万能墙，而是一套基于规则、场景和日志的访问控制方法。

## 学习目标

- 理解防火墙在网络防御中的位置
- 认识端口、协议、方向和规则顺序
- 能用日志复盘一次访问控制结果

## 1. 防火墙的角色

防火墙的核心是访问控制：什么来源可以访问什么目标，使用什么协议和端口，是否需要记录。它不能替代系统加固，也不能修复应用漏洞。

讲者补充：防火墙规则要服务于资产边界。先知道要保护什么，再决定挡什么。

> 小旁白：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

## 2. 规则、端口与方向

一条规则通常包含源地址、目的地址、协议、端口、动作和日志策略。规则顺序会影响命中结果，因此配置后必须测试。

讲者补充：默认拒绝、按需放行是常见防御思路。但在学习环境中要先确保不会把自己锁在机器外。

> 小旁白：看到命令别只复制，顺手问一句：它读了什么、改了什么、留下了什么证据？

## 3. 示例与作业

通过示例练习，可以把“允许 SSH”“阻止某端口”“记录异常访问”变成可观察结果。日志是判断规则是否有效的重要证据。

讲者补充：每次改规则前先备份，改完后记录预期结果和实际结果。

> 小旁白：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

## 课堂练习

- 写出一条允许 SSH 的规则条件
- 解释入站和出站规则的区别
- 设计一个默认拒绝的最小开放策略

:::

:::section{.lang-en}

**Original PPT date:** 2025-11-10

> These notes follow the lesson path: understand the idea first, then read commands, diagrams, and practice tasks with evidence.

## Overview

Firewall basics explain how traffic is allowed, denied, logged, and segmented through rules and policy.

## Learning Goals

- Explain the main workflow behind Firewall Basics.
- Use Firewall, Network Security, Access Control to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Role of a firewall

A firewall is access control, not a replacement for secure systems and applications.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

## 2. Rules, ports, and direction

Rules should be specific, ordered, tested, and logged.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not just copy the command. Ask what it reads, what it changes, and what evidence it leaves.

## 3. Examples and homework

Firewall work is evidence-driven: configure, test, and read logs.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

## Practice

- Summarize the main workflow of Firewall Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
