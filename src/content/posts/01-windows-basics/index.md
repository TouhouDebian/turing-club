---
title: "01 Windows基础 / Windows Basics"
published: 2025-09-17
description: "Windows 基础课关注的是日常系统如何成为安全实验对象：文件、用户、权限、进程、命令行和网络配置都不是孤立知识，它们共同决定一台主机是否可管理、可审计、可防护。 / This lesson treats Windows as a security target: files, users, permissions, processes, shells, and networking form the base of host security."
tags: ["Windows", "PowerShell", "CMD", "File System", "Users", "Permissions", "Process", "Security Basics"]
category: "Club Course"
draft: false
---

# 01 Windows基础

**English title:** Windows Basics

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-09-17

**关键词 / Keywords:** #Windows #PowerShell #CMD #File-System #Users #Permissions #Process #Security-Basics

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

Windows 基础课关注的是日常系统如何成为安全实验对象：文件、用户、权限、进程、命令行和网络配置都不是孤立知识，它们共同决定一台主机是否可管理、可审计、可防护。

> English overview: This lesson treats Windows as a security target: files, users, permissions, processes, shells, and networking form the base of host security.

## 学习目标 / Learning Goals

- 熟悉 Windows 文件与账户体系
- 理解权限、进程和服务的基本含义
- 会用命令行观察系统状态

## 1. 把 Windows 当作一台主机来理解 / Windows as a host

学习 Windows 安全时，第一步不是背菜单位置，而是建立主机视角：系统里有哪些用户，文件放在哪里，程序以什么权限运行，哪些服务正在监听网络。

讲者补充：图形界面适合操作，命令行适合记录和复现。安全排查时，能把操作转换成命令，才方便向同伴解释和复盘。

> English recap: Think of Windows as a host with identities, files, processes, and network services.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.png)
![Slide 1 image](./images/slide-01-03.png)
![Slide 1 image](./images/slide-01-04.png)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-05.png)
![Slide 2 image](./images/slide-02-06.png)
![Slide 2 image](./images/slide-02-07.jpeg)
![Slide 2 image](./images/slide-02-08.png)
![Slide 2 image](./images/slide-02-09.png)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-10.png)
![Slide 3 image](./images/slide-03-11.png)
![Slide 3 image](./images/slide-03-12.png)

## 2. 文件、账户与权限 / Files, accounts, and permissions

权限决定谁能读取、修改或执行某个资源。对初学者来说，管理员账户、普通账户、系统账户之间的区别非常重要，因为许多风险都来自不必要的高权限运行。

讲者补充：遇到“权限不足”不要立刻切管理员，而要先判断这个操作是否真的需要高权限。最小权限原则是防御的基本习惯。

> English recap: Least privilege is the core habit: do not run with more permission than the task requires.

### 相关课件图片 / Related Slide Images

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-13.png)
![Slide 4 image](./images/slide-04-14.png)
![Slide 4 image](./images/slide-04-15.svg)
![Slide 4 image](./images/slide-04-16.png)
![Slide 4 image](./images/slide-04-17.svg)
![Slide 4 image](./images/slide-04-18.png)
![Slide 4 image](./images/slide-04-19.svg)
![Slide 4 image](./images/slide-04-20.png)
![Slide 4 image](./images/slide-04-21.png)

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-22.png)
![Slide 5 image](./images/slide-05-23.png)
![Slide 5 image](./images/slide-05-24.png)
![Slide 5 image](./images/slide-05-25.png)
![Slide 5 image](./images/slide-05-26.png)

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-27.png)
![Slide 6 image](./images/slide-06-28.png)
![Slide 6 image](./images/slide-06-29.png)
![Slide 6 image](./images/slide-06-30.png)
![Slide 6 image](./images/slide-06-31.png)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-32.png)
![Slide 7 image](./images/slide-07-33.png)
![Slide 7 image](./images/slide-07-34.png)
![Slide 7 image](./images/slide-07-35.png)

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-36.png)
![Slide 8 image](./images/slide-08-37.png)
![Slide 8 image](./images/slide-08-38.png)

## 3. 命令行观察与安全排查 / Command-line observation

CMD、PowerShell 和系统管理工具可以帮助我们查看进程、网络连接、环境变量、文件权限和服务状态。它们是后续学习取证、应急和漏洞复现的入口。

讲者补充：每次练习建议记录命令、输出和结论。能留下复现记录，比“我刚才点过某个按钮”更有价值。

> English recap: Command-line tools turn system operations into repeatable evidence.

### 相关课件图片 / Related Slide Images

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-39.png)
![Slide 9 image](./images/slide-09-40.png)
![Slide 9 image](./images/slide-09-41.png)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-42.png)
![Slide 10 image](./images/slide-10-43.jpeg)
![Slide 10 image](./images/slide-10-44.png)
![Slide 10 image](./images/slide-10-45.png)

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-46.png)
![Slide 11 image](./images/slide-11-47.png)
![Slide 11 image](./images/slide-11-48.png)
![Slide 11 image](./images/slide-11-49.png)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-50.png)
![Slide 12 image](./images/slide-12-51.png)
![Slide 12 image](./images/slide-12-52.png)
![Slide 12 image](./images/slide-12-53.png)

## 课堂练习 / Practice

- 查看当前用户权限并解释结果
- 列出一个目录的权限信息
- 观察当前网络连接并判断哪些属于浏览器或系统服务
