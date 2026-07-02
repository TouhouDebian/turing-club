---
title: "00 网络安全社体验课 正式 / Cybersecurity Club Trial Lesson"
published: 2025-09-11
description: "这节体验课不是单纯展示工具，而是把图灵社的学习路线摊开：从网页、后端、文件读取、内存读取，到虚拟机实验和摸底测试。读者可以把它当作加入网络安全方向前的路线图。 / This trial lesson is a roadmap for the club: web pages, backend ideas, file and memory reading, virtual machines, and a baseline challenge."
tags: ["Cybersecurity", "Turing Club", "Club Intro", "CTF", "Ethics", "Linux", "Python"]
category: "Club Course"
draft: false
---

:::section{.lang-zh}

**作者：** 2023届 Simon Li

**原 PPT 日期：** 2025-09-11

**关键词：** #Cybersecurity #Turing-Club #Club-Intro #CTF #Ethics #Linux #Python

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

这节体验课不是单纯展示工具，而是把图灵社的学习路线摊开：从网页、后端、文件读取、内存读取，到虚拟机实验和摸底测试。读者可以把它当作加入网络安全方向前的路线图。

## 学习目标

- 了解社团的学习节奏与实践方式
- 知道网页、后端和系统实验之间的关系
- 建立合法、可控、可复现的实验意识

## 1. 社团学习路线

网络安全不是只会“攻击”的技术，而是理解系统如何工作、如何出错、如何被保护的综合能力。体验课先把学习范围展示出来，让新成员知道后续会同时接触编程、网络、操作系统和安全伦理。

讲者补充：初学时不要急着追求复杂工具，先能解释一个网页请求如何到达服务器、服务器如何读写文件、系统如何限制权限，这些基础会决定后面能走多远。

## 2. 从网页到后端

幻灯片中的主页上传、后端部分、文件读取和内存读取，可以串成一条完整链路：用户在前端提交内容，后端接收并处理，系统再根据权限访问文件或内存资源。

讲者补充：安全问题往往出现在边界处，例如上传内容是否可信、路径是否被限制、后端是否把用户输入直接当作文件名或代码执行。阅读时可以尝试把每一步都问成“这里信任了谁？”

### 相关图片

![课程相关截图 1](./images/slide-07-32.png)
![课程相关截图 2](./images/slide-07-34.png)
![课程相关截图 3](./images/slide-12-52.png)
![课程相关截图 4](./images/slide-12-54.png)

## 3. 实验环境与自测

虚拟机的意义在于隔离：把练习环境和日常电脑隔开，出错时可以回滚，实验也不会影响真实系统。摸底测试则用于判断大家对系统、网络和编程基础的掌握情况。

讲者补充：所有练习都应在授权环境中完成。真正的安全学习不是越界，而是在可控范围内把原理想清楚、把证据记录清楚。

## 课堂练习

- 安装一个虚拟机并记录快照步骤
- 画出一次网页上传到后端处理的流程图
- 写下三个你认为最容易出错的信任边界

:::

:::section{.lang-en}

**Author:** Class of 2023 Simon Li

**Original PPT date:** 2025-09-11

**Keywords:** #Cybersecurity #Turing-Club #Club-Intro #CTF #Ethics #Linux #Python

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

This trial lesson is a roadmap for the club: web pages, backend ideas, file and memory reading, virtual machines, and a baseline challenge.

## Learning Goals

- Understand the core ideas of Cybersecurity Club Trial Lesson.
- Connect Cybersecurity, Turing Club, Club Intro to practical security work.
- Practice only in authorized, repeatable lab environments.

## 1. Club learning path

The first goal is orientation. Before tools, learners need a mental map of web, backend, operating system, and ethics.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## 2. From webpage to backend

The web-to-backend path is a chain of trust. Many vulnerabilities come from trusting input at the wrong boundary.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-07-32.png)
![Course-related screenshot 2](./images/slide-07-34.png)
![Course-related screenshot 3](./images/slide-12-52.png)
![Course-related screenshot 4](./images/slide-12-54.png)

## 3. Lab environment and self-check

Virtual machines keep practice safe and repeatable. A baseline test helps learners choose the right starting point.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## Practice

- Summarize the main workflow of Cybersecurity Club Trial Lesson in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
