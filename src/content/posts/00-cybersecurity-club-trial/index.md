---
title: "00 网络安全社体验课 正式 / Cybersecurity Club Trial Lesson"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-09-11
description: "这节体验课介绍图灵社网络安全方向的课程内容，包括网页、后端、文件与内存读取、虚拟机实验和摸底测试。 / This trial lesson introduces the club's cybersecurity topics: web pages, backend concepts, file and memory reading, virtual machines, and a baseline challenge."
image: "./images/slide-10-46.jpeg"
tags: ["Cybersecurity", "Turing Club", "CTF", "Ethics"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-09-11

> 此文为codex改编往年课件而成

## 课程简介

体验课介绍图灵社网络安全方向的课程内容，包括网页、后端、文件与内存读取、虚拟机实验和摸底测试。

## 你会学到

- 了解社团的学习节奏与实践方式
- 知道网页、后端和系统实验之间的关系
- 建立合法、可控、可复现的实验意识

## 1. 社团学习路线

网络安全课程需要理解系统的工作方式、常见故障和防护措施。新成员后续会接触编程、网络、操作系统和安全伦理。

初学时不要急着追求复杂工具，先能解释一个网页请求如何到达服务器、服务器如何读写文件、系统如何限制权限，这些基础会决定后面能走多远。

## 2. 从网页到后端

幻灯片中的主页上传、后端部分、文件读取和内存读取，可以串成一条完整链路：用户在前端提交内容，后端接收并处理，系统再根据权限访问文件或内存资源。

安全问题往往出现在边界处，例如上传内容是否可信、路径是否被限制、后端是否把用户输入直接当作文件名或代码执行。阅读时可以尝试把每一步都问成“这里信任了谁？”

## 3. 实验环境与自测

虚拟机的意义在于隔离：把练习环境和日常电脑隔开，出错时可以回滚，实验也不会影响真实系统。摸底测试则用于判断大家对系统、网络和编程基础的掌握情况。

所有练习都应在授权环境中完成。练习时需要限定范围，并记录操作和结果。

## 动手小任务

- 安装一个虚拟机并记录快照步骤
- 画出一次网页上传到后端处理的流程图
- 写下三个你认为最容易出错的信任边界

:::

:::section{.lang-en}

**Original PPT date:** 2025-09-11

> This article was adapted by Codex from previous course slides.

## Overview

This trial lesson introduces the club's cybersecurity topics: web pages, backend concepts, file and memory reading, virtual machines, and a baseline challenge.

## 1. Club learning path

The lesson places web development, backend processing, operating systems, and security ethics in the same course outline.

## 2. From webpage to backend

Many web vulnerabilities occur when a backend accepts input without adequate validation or permission checks.

## 3. Lab environment and self-check

Virtual machines keep practice safe and repeatable. A baseline test helps learners choose the right starting point.

:::
