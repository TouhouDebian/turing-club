---
title: "02 Linux基础 / Linux Basics"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-09-24
description: "Linux 基础课把发行版、Shell、文件系统、SSH、用户和权限串起来。它的重点不是记住某个命令，而是理解命令为什么能控制系统资源。 / Linux basics connect distributions, shell, filesystems, SSH, users, and permissions. The point is to understand why commands control resources."
image: "./images/slide-01-01.jpeg"
tags: ["Linux", "Bash", "Shell", "SSH", "File System", "Users", "Permissions"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-09-24

> 此文为codex改编往年课件而成

## 先把地图点亮

如果你是第一次接触这个主题，不用先背一堆名词。先抓住一个小问题：它解决什么麻烦？输入从哪里来？最后能留下什么证据？

Linux 基础课把发行版、Shell、文件系统、SSH、用户和权限串起来。它的重点不是记住某个命令，而是理解命令为什么能控制系统资源。

下面按“概念 -> 例子 -> 可操作的小任务”的顺序拆开。读完不一定立刻变成高手，但至少能知道下一步该点亮哪块地图。

## 你会学到

- 理解 Linux 发行版与 Shell 的关系
- 掌握常见文件和目录操作
- 理解 SSH、用户、组和权限的安全意义

## 1. Linux 与发行版

Linux 严格来说是内核，日常使用的 Ubuntu、Debian、Arch 等是围绕内核打包出的发行版。发行版差异会影响包管理、默认配置和使用习惯，但文件、权限、进程这些核心概念是相通的。

选择发行版时不用纠结“最强”，先选资料多、容易恢复、适合课堂环境的版本。能稳定练习比追求新奇更重要。

> 小提示：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

![图示 1](./images/slide-04-07.png)

## 2. Shell 与命令行

Shell 是人与系统对话的接口。`echo $SHELL`、`chsh`、`cd`、`ls` 等命令看似简单，却覆盖了查看环境、切换目录、列出文件、调整默认 Shell 等基础动作。

命令行学习要养成读提示符、读路径、读错误信息的习惯。很多错误不是命令不会，而是当前目录、权限或参数没有看清。

> 小提示：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

![图示 1](./images/slide-07-15.jpeg)

## 3. SSH 与远程连接

SSH 是远程管理 Linux 主机的常用协议，它用加密连接替代明文登录。连接时要明确用户名、主机地址、端口和认证方式。

不要把 SSH 当成“能连上就行”。安全配置还包括禁用弱密码、限制登录用户、使用密钥、查看监听端口和日志。

> 小提示：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

## 4. 文件系统、用户与权限

Linux 中“一切皆文件”的思想，让设备、配置、日志和普通文本都能用统一方式管理。用户、组和权限则决定谁能读、写、执行这些文件。

`rwx` 不只是三个字母。读权限影响查看，写权限影响修改，执行权限影响运行或进入目录。理解目录权限尤其重要。

> 小提示：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

## 动手小任务

- 用命令查看当前 Shell 和当前目录
- 创建一个文件并修改权限
- 尝试用 SSH 连接实验机并记录认证方式

:::

:::section{.lang-en}

**Original PPT date:** 2025-09-24

> This article was adapted by Codex from previous course slides.

## Overview

If this topic is new to you, do not start by memorizing every term. First ask a smaller question: what problem does it solve, where does input enter, and what evidence can we observe?

Linux basics connect distributions, shell, filesystems, SSH, users, and permissions. The point is to understand why commands control resources.

The article follows a simple path: idea, example, and a small task you can reproduce safely.

## Learning Goals

- Explain the main workflow behind Linux Basics.
- Use Linux, Bash, Shell to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Linux and distributions

A distribution is a usable system built around the Linux kernel. Core security concepts remain similar across distributions.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

![Illustration 1](./images/slide-04-07.png)

## 2. Shell and command line

The shell is the interface between the user and the operating system. Small commands build reliable habits.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Errors are not the villain; they usually point at the layer that does not match.

![Illustration 1](./images/slide-07-15.jpeg)

## 3. SSH and remote access

SSH provides encrypted remote access, but secure configuration matters as much as the connection command.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## 4. Filesystem, users, and permissions

Files, users, groups, and permissions are the foundation of Linux security.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Do not rush the special move: draw input, processing, and output first.

## Practice

- Summarize the main workflow of Linux Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
