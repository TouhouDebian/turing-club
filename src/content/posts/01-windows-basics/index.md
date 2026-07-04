---
title: "01 Windows基础 / Windows Basics"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-09-17
description: "Windows 基础课关注的是日常系统如何成为安全实验对象：文件、用户、权限、进程、命令行和网络配置都不是孤立知识，它们共同决定一台主机是否可管理、可审计、可防护。 / This lesson treats Windows as a security target: files, users, permissions, processes, shells, and networking form the base of host security."
tags: ["Windows", "PowerShell", "CMD", "File System", "Users", "Permissions", "Process", "Security Basics"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-09-17

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

## 导读

Windows 基础课关注的是日常系统如何成为安全实验对象：文件、用户、权限、进程、命令行和网络配置都不是孤立知识，它们共同决定一台主机是否可管理、可审计、可防护。

## 学习目标

- 熟悉 Windows 文件与账户体系
- 理解权限、进程和服务的基本含义
- 会用命令行观察系统状态

## 1. 把 Windows 当作一台主机来理解

学习 Windows 安全时，第一步不是背菜单位置，而是建立主机视角：系统里有哪些用户，文件放在哪里，程序以什么权限运行，哪些服务正在监听网络。

讲者补充：图形界面适合操作，命令行适合记录和复现。安全排查时，能把操作转换成命令，才方便向同伴解释和复盘。

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 2 页：公众号

- 陈西设计之家
- 微信搜索即可
- 公众号：陈西设计之家。微信搜索即可
- 是一个什么样的操作系统
- Windows 的文件夹权限分布

#### 第 3 页：公众号 陈西设计之家 微信搜索即可

- 公众号：陈西设计之家。微信搜索即可
- Windows 是一个闭源，付费的操作系统
- 的最高管理员是
- Administrator (SYSTEM)
- 使用驱动器概念，每个驱动器包含自己的文件结构目录
- 的路径分割是“
- ”，不区分大小写
- 使用注册表集中管理系统配置和应用

## 2. 文件、账户与权限

权限决定谁能读取、修改或执行某个资源。对初学者来说，管理员账户、普通账户、系统账户之间的区别非常重要，因为许多风险都来自不必要的高权限运行。

讲者补充：遇到“权限不足”不要立刻切管理员，而要先判断这个操作是否真的需要高权限。最小权限原则是防御的基本习惯。

> 小旁白：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 4 页：公众号

- 陈西设计之家
- 微信搜索即可
- 公众号：陈西设计之家。微信搜索即可
- 文件管理基础
- Program Files(×86)
- 位程序的目录
- 核心系统库和可执行文件
- 位系统独有，存储

#### 第 5 页：公众号 陈西设计之家 微信搜索即可

- 公众号：陈西设计之家。微信搜索即可
- Fundamental command

#### 第 6 页：公众号 陈西设计之家 微信搜索即可

- 公众号：陈西设计之家。微信搜索即可
- 除目录本身外，还将删除指定目录下的所有子目录和
- 文件。用于删除目录树。
- 删除目录树时不要求确认
- 第二个命令有问题，不要用
- 这种问题是你没有开管理员权限

## 3. 命令行观察与安全排查

CMD、PowerShell 和系统管理工具可以帮助我们查看进程、网络连接、环境变量、文件权限和服务状态。它们是后续学习取证、应急和漏洞复现的入口。

讲者补充：每次练习建议记录命令、输出和结论。能留下复现记录，比“我刚才点过某个按钮”更有价值。

> 小旁白：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 9 页：公众号 陈西设计之家 微信搜索即可

- 公众号：陈西设计之家。微信搜索即可

#### 第 10 页：公众号 陈西设计之家 微信搜索即可

- 公众号：陈西设计之家。微信搜索即可
- N/F, M/RX/R/W/D

#### 第 11 页：公众号 陈西设计之家 微信搜索即可

- 公众号：陈西设计之家。微信搜索即可
- 注册表读取到了密码！

## 课堂练习

- 查看当前用户权限并解释结果
- 列出一个目录的权限信息
- 观察当前网络连接并判断哪些属于浏览器或系统服务

:::

:::section{.lang-en}

**Original PPT date:** 2025-09-17

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

## Overview

This lesson treats Windows as a security target: files, users, permissions, processes, shells, and networking form the base of host security.

## Learning Goals

- Explain the main workflow behind Windows Basics.
- Use Windows, PowerShell, CMD to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Windows as a host

Think of Windows as a host with identities, files, processes, and network services.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## 2. Files, accounts, and permissions

Least privilege is the core habit: do not run with more permission than the task requires.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not rush the special move: draw input, processing, and output first.

## 3. Command-line observation

Command-line tools turn system operations into repeatable evidence.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

## Practice

- Summarize the main workflow of Windows Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
