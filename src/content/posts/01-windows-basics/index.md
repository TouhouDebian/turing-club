---
title: "01 Windows基础 / Windows Basics"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-09-17
description: "Windows 基础课关注的是日常系统如何成为安全实验对象：文件、用户、权限、进程、命令行和网络配置都不是孤立知识，它们共同决定一台主机是否可管理、可审计、可防护。 / This lesson treats Windows as a security target: files, users, permissions, processes, shells, and networking form the base of host security."
image: "./images/slide-02-07.jpeg"
tags: ["Windows", "PowerShell", "Permissions", "Security Basics"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-09-17

> 此文为codex改编往年课件而成

## 课程简介

Windows 基础课关注的是日常系统如何成为安全实验对象：文件、用户、权限、进程、命令行和网络配置都不是孤立知识，它们共同决定一台主机是否可管理、可审计、可防护。

## 你会学到

- 熟悉 Windows 文件与账户体系
- 理解权限、进程和服务的基本含义
- 会用命令行观察系统状态

## 1. 把 Windows 当作一台主机来理解

学习 Windows 安全时，需要检查系统中的用户、文件位置、程序权限和正在监听网络的服务。

图形界面适合操作，命令行适合记录和复现。安全排查时，能把操作转换成命令，才方便向同伴解释和复盘。

## 2. 文件、账户与权限

权限决定谁能读取、修改或执行某个资源。对初学者来说，管理员账户、普通账户、系统账户之间的区别非常重要，因为许多风险都来自不必要的高权限运行。

遇到“权限不足”不要立刻切管理员，而要先判断这个操作是否真的需要高权限。最小权限原则是防御的基本习惯。

## 3. 命令行观察与安全排查

CMD、PowerShell 和系统管理工具可以帮助我们查看进程、网络连接、环境变量、文件权限和服务状态。它们是后续学习取证、应急和漏洞复现的入口。

每次练习建议记录命令、输出和结论。能留下复现记录，比“我刚才点过某个按钮”更有价值。

## 动手小任务

- 查看当前用户权限并解释结果
- 列出一个目录的权限信息
- 观察当前网络连接并判断哪些属于浏览器或系统服务

:::

:::section{.lang-en}

**Original PPT date:** 2025-09-17

> This article was adapted by Codex from previous course slides.

## Overview

This lesson treats Windows as a security target: files, users, permissions, processes, shells, and networking form the base of host security.

## 1. Windows as a host

Think of Windows as a host with identities, files, processes, and network services.

## 2. Files, accounts, and permissions

Least privilege is the core habit: do not run with more permission than the task requires.

## 3. Command-line observation

Command-line tools turn system operations into repeatable evidence.

:::
