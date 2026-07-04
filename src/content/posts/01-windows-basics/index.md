---
title: "01 Windows基础 / Windows Basics"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-09-17
description: "Windows 基础课关注的是日常系统如何成为安全实验对象：文件、用户、权限、进程、命令行和网络配置都不是孤立知识，它们共同决定一台主机是否可管理、可审计、可防护。 / This lesson treats Windows as a security target: files, users, permissions, processes, shells, and networking form the base of host security."
image: "./images/slide-02-07.jpeg"
tags: ["Windows", "PowerShell", "CMD", "File System", "Users", "Permissions", "Process", "Security Basics"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-09-17

> 此文为codex改编往年课件而成

## 先把地图点亮

如果你是第一次接触这个主题，不用先背一堆名词。先抓住一个小问题：它解决什么麻烦？输入从哪里来？最后能留下什么证据？

Windows 基础课关注的是日常系统如何成为安全实验对象：文件、用户、权限、进程、命令行和网络配置都不是孤立知识，它们共同决定一台主机是否可管理、可审计、可防护。

下面按“概念 -> 例子 -> 可操作的小任务”的顺序拆开。读完不一定立刻变成高手，但至少能知道下一步该点亮哪块地图。

## 你会学到

- 熟悉 Windows 文件与账户体系
- 理解权限、进程和服务的基本含义
- 会用命令行观察系统状态

## 1. 把 Windows 当作一台主机来理解

学习 Windows 安全时，第一步不是背菜单位置，而是建立主机视角：系统里有哪些用户，文件放在哪里，程序以什么权限运行，哪些服务正在监听网络。

图形界面适合操作，命令行适合记录和复现。安全排查时，能把操作转换成命令，才方便向同伴解释和复盘。

> 小提示：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

## 2. 文件、账户与权限

权限决定谁能读取、修改或执行某个资源。对初学者来说，管理员账户、普通账户、系统账户之间的区别非常重要，因为许多风险都来自不必要的高权限运行。

遇到“权限不足”不要立刻切管理员，而要先判断这个操作是否真的需要高权限。最小权限原则是防御的基本习惯。

> 小提示：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

## 3. 命令行观察与安全排查

CMD、PowerShell 和系统管理工具可以帮助我们查看进程、网络连接、环境变量、文件权限和服务状态。它们是后续学习取证、应急和漏洞复现的入口。

每次练习建议记录命令、输出和结论。能留下复现记录，比“我刚才点过某个按钮”更有价值。

> 小提示：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

## 动手小任务

- 查看当前用户权限并解释结果
- 列出一个目录的权限信息
- 观察当前网络连接并判断哪些属于浏览器或系统服务

:::

:::section{.lang-en}

**Original PPT date:** 2025-09-17

> This article was adapted by Codex from previous course slides.

## Overview

If this topic is new to you, do not start by memorizing every term. First ask a smaller question: what problem does it solve, where does input enter, and what evidence can we observe?

This lesson treats Windows as a security target: files, users, permissions, processes, shells, and networking form the base of host security.

The article follows a simple path: idea, example, and a small task you can reproduce safely.

## Learning Goals

- Explain the main workflow behind Windows Basics.
- Use Windows, PowerShell, CMD to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Windows as a host

Think of Windows as a host with identities, files, processes, and network services.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## 2. Files, accounts, and permissions

Least privilege is the core habit: do not run with more permission than the task requires.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Do not rush the special move: draw input, processing, and output first.

## 3. Command-line observation

Command-line tools turn system operations into repeatable evidence.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

## Practice

- Summarize the main workflow of Windows Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
