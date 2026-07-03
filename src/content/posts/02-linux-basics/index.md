---
title: "02 Linux基础 / Linux Basics"
published: 2025-09-24
description: "Linux 基础课把发行版、Shell、文件系统、SSH、用户和权限串起来。它的重点不是记住某个命令，而是理解命令为什么能控制系统资源。 / Linux basics connect distributions, shell, filesystems, SSH, users, and permissions. The point is to understand why commands control resources."
tags: ["Linux", "Bash", "Shell", "SSH", "File System", "Users", "Permissions"]
category: "Club Course"
draft: false
---

:::section{.lang-zh}

**作者：** 2023届 Simon Li

**原 PPT 日期：** 2025-09-24

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

Linux 基础课把发行版、Shell、文件系统、SSH、用户和权限串起来。它的重点不是记住某个命令，而是理解命令为什么能控制系统资源。

## 学习目标

- 理解 Linux 发行版与 Shell 的关系
- 掌握常见文件和目录操作
- 理解 SSH、用户、组和权限的安全意义

## 1. Linux 与发行版

Linux 严格来说是内核，日常使用的 Ubuntu、Debian、Arch 等是围绕内核打包出的发行版。发行版差异会影响包管理、默认配置和使用习惯，但文件、权限、进程这些核心概念是相通的。

讲者补充：选择发行版时不用纠结“最强”，先选资料多、容易恢复、适合课堂环境的版本。能稳定练习比追求新奇更重要。

## 2. Shell 与命令行

Shell 是人与系统对话的接口。`echo $SHELL`、`chsh`、`cd`、`ls` 等命令看似简单，却覆盖了查看环境、切换目录、列出文件、调整默认 Shell 等基础动作。

讲者补充：命令行学习要养成读提示符、读路径、读错误信息的习惯。很多错误不是命令不会，而是当前目录、权限或参数没有看清。

## 3. SSH 与远程连接

SSH 是远程管理 Linux 主机的常用协议，它用加密连接替代明文登录。连接时要明确用户名、主机地址、端口和认证方式。

讲者补充：不要把 SSH 当成“能连上就行”。安全配置还包括禁用弱密码、限制登录用户、使用密钥、查看监听端口和日志。

## 4. 文件系统、用户与权限

Linux 中“一切皆文件”的思想，让设备、配置、日志和普通文本都能用统一方式管理。用户、组和权限则决定谁能读、写、执行这些文件。

讲者补充：`rwx` 不只是三个字母。读权限影响查看，写权限影响修改，执行权限影响运行或进入目录。理解目录权限尤其重要。

### 相关图片

![课程相关截图 1](./images/slide-14-37.png)
![课程相关截图 2](./images/slide-18-46.png)

## 课堂练习

- 用命令查看当前 Shell 和当前目录
- 创建一个文件并修改权限
- 尝试用 SSH 连接实验机并记录认证方式

:::

:::section{.lang-en}

**Author:** Class of 2023 Simon Li

**Original PPT date:** 2025-09-24

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

Linux basics connect distributions, shell, filesystems, SSH, users, and permissions. The point is to understand why commands control resources.

## Learning Goals

- Understand the core ideas of Linux Basics.
- Connect Linux, Bash, Shell to practical security work.
- Practice only in authorized, repeatable lab environments.

## 1. Linux and distributions

A distribution is a usable system built around the Linux kernel. Core security concepts remain similar across distributions.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## 2. Shell and command line

The shell is the interface between the user and the operating system. Small commands build reliable habits.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## 3. SSH and remote access

SSH provides encrypted remote access, but secure configuration matters as much as the connection command.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## 4. Filesystem, users, and permissions

Files, users, groups, and permissions are the foundation of Linux security.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-14-37.png)
![Course-related screenshot 2](./images/slide-18-46.png)

## Practice

- Summarize the main workflow of Linux Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
