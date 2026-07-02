---
title: "00 网络安全社体验课 正式 / Cybersecurity Club Trial Lesson"
published: 2025-09-11
description: "这节体验课不是单纯展示工具，而是把图灵社的学习路线摊开：从网页、后端、文件读取、内存读取，到虚拟机实验和摸底测试。读者可以把它当作加入网络安全方向前的路线图。 / This trial lesson is a roadmap for the club: web pages, backend ideas, file and memory reading, virtual machines, and a baseline challenge."
tags: ["Cybersecurity", "Turing Club", "Club Intro", "CTF", "Ethics", "Linux", "Python"]
category: "Club Course"
draft: false
---

# 00 网络安全社体验课 正式

**English title:** Cybersecurity Club Trial Lesson

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-09-11

**关键词 / Keywords:** #Cybersecurity #Turing-Club #Club-Intro #CTF #Ethics #Linux #Python

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

这节体验课不是单纯展示工具，而是把图灵社的学习路线摊开：从网页、后端、文件读取、内存读取，到虚拟机实验和摸底测试。读者可以把它当作加入网络安全方向前的路线图。

> English overview: This trial lesson is a roadmap for the club: web pages, backend ideas, file and memory reading, virtual machines, and a baseline challenge.

## 学习目标 / Learning Goals

- 了解社团的学习节奏与实践方式
- 知道网页、后端和系统实验之间的关系
- 建立合法、可控、可复现的实验意识

## 1. 社团学习路线 / Club learning path

网络安全不是只会“攻击”的技术，而是理解系统如何工作、如何出错、如何被保护的综合能力。体验课先把学习范围展示出来，让新成员知道后续会同时接触编程、网络、操作系统和安全伦理。

讲者补充：初学时不要急着追求复杂工具，先能解释一个网页请求如何到达服务器、服务器如何读写文件、系统如何限制权限，这些基础会决定后面能走多远。

> English recap: The first goal is orientation. Before tools, learners need a mental map of web, backend, operating system, and ethics.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.svg)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-03.png)
![Slide 2 image](./images/slide-02-04.svg)
![Slide 2 image](./images/slide-02-05.jpeg)
![Slide 2 image](./images/slide-02-06.jpeg)
![Slide 2 image](./images/slide-02-07.png)
![Slide 2 image](./images/slide-02-08.svg)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-09.png)
![Slide 3 image](./images/slide-03-10.svg)
![Slide 3 image](./images/slide-03-11.png)
![Slide 3 image](./images/slide-03-12.svg)

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-13.png)
![Slide 4 image](./images/slide-04-14.svg)
![Slide 4 image](./images/slide-04-15.png)
![Slide 4 image](./images/slide-04-16.svg)

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-17.png)
![Slide 5 image](./images/slide-05-18.svg)
![Slide 5 image](./images/slide-05-19.jpeg)

## 2. 从网页到后端 / From webpage to backend

幻灯片中的主页上传、后端部分、文件读取和内存读取，可以串成一条完整链路：用户在前端提交内容，后端接收并处理，系统再根据权限访问文件或内存资源。

讲者补充：安全问题往往出现在边界处，例如上传内容是否可信、路径是否被限制、后端是否把用户输入直接当作文件名或代码执行。阅读时可以尝试把每一步都问成“这里信任了谁？”

> English recap: The web-to-backend path is a chain of trust. Many vulnerabilities come from trusting input at the wrong boundary.

### 相关课件图片 / Related Slide Images

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-20.png)
![Slide 6 image](./images/slide-06-21.svg)
![Slide 6 image](./images/slide-06-22.png)
![Slide 6 image](./images/slide-06-23.svg)
![Slide 6 image](./images/slide-06-24.png)
![Slide 6 image](./images/slide-06-25.svg)
![Slide 6 image](./images/slide-06-26.png)
![Slide 6 image](./images/slide-06-27.svg)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-28.png)
![Slide 7 image](./images/slide-07-29.svg)
![Slide 7 image](./images/slide-07-30.jpeg)
![Slide 7 image](./images/slide-07-31.jpeg)
![Slide 7 image](./images/slide-07-32.png)
![Slide 7 image](./images/slide-07-33.svg)
![Slide 7 image](./images/slide-07-34.png)
![Slide 7 image](./images/slide-07-35.svg)

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-36.png)
![Slide 8 image](./images/slide-08-37.svg)
![Slide 8 image](./images/slide-08-38.png)
![Slide 8 image](./images/slide-08-39.svg)

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-40.png)
![Slide 9 image](./images/slide-09-41.svg)
![Slide 9 image](./images/slide-09-42.png)
![Slide 9 image](./images/slide-09-43.svg)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-44.png)
![Slide 10 image](./images/slide-10-45.svg)
![Slide 10 image](./images/slide-10-46.jpeg)
![Slide 10 image](./images/slide-10-47.jpeg)

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-48.png)
![Slide 11 image](./images/slide-11-49.svg)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-50.png)
![Slide 12 image](./images/slide-12-51.svg)
![Slide 12 image](./images/slide-12-52.png)
![Slide 12 image](./images/slide-12-53.svg)
![Slide 12 image](./images/slide-12-54.png)
![Slide 12 image](./images/slide-12-55.svg)
![Slide 12 image](./images/slide-12-56.png)
![Slide 12 image](./images/slide-12-57.svg)
![Slide 12 image](./images/slide-12-58.png)
![Slide 12 image](./images/slide-12-59.svg)
![Slide 12 image](./images/slide-12-60.png)
![Slide 12 image](./images/slide-12-61.svg)

## 3. 实验环境与自测 / Lab environment and self-check

虚拟机的意义在于隔离：把练习环境和日常电脑隔开，出错时可以回滚，实验也不会影响真实系统。摸底测试则用于判断大家对系统、网络和编程基础的掌握情况。

讲者补充：所有练习都应在授权环境中完成。真正的安全学习不是越界，而是在可控范围内把原理想清楚、把证据记录清楚。

> English recap: Virtual machines keep practice safe and repeatable. A baseline test helps learners choose the right starting point.

### 相关课件图片 / Related Slide Images

### 第 13 页配图 / Slide 13 Images

![Slide 13 image](./images/slide-13-62.png)
![Slide 13 image](./images/slide-13-63.svg)
![Slide 13 image](./images/slide-13-64.png)
![Slide 13 image](./images/slide-13-65.svg)

### 第 14 页配图 / Slide 14 Images

![Slide 14 image](./images/slide-14-66.png)
![Slide 14 image](./images/slide-14-67.svg)
![Slide 14 image](./images/slide-14-68.png)
![Slide 14 image](./images/slide-14-69.svg)
![Slide 14 image](./images/slide-14-70.png)
![Slide 14 image](./images/slide-14-71.svg)
![Slide 14 image](./images/slide-14-72.png)
![Slide 14 image](./images/slide-14-73.svg)

### 第 15 页配图 / Slide 15 Images

![Slide 15 image](./images/slide-15-74.png)
![Slide 15 image](./images/slide-15-75.svg)
![Slide 15 image](./images/slide-15-76.jpeg)
![Slide 15 image](./images/slide-15-77.jpeg)

### 第 16 页配图 / Slide 16 Images

![Slide 16 image](./images/slide-16-78.png)
![Slide 16 image](./images/slide-16-79.svg)
![Slide 16 image](./images/slide-16-80.png)
![Slide 16 image](./images/slide-16-81.svg)

### 第 17 页配图 / Slide 17 Images

![Slide 17 image](./images/slide-17-82.png)
![Slide 17 image](./images/slide-17-83.svg)
![Slide 17 image](./images/slide-17-84.jpeg)

### 第 18 页配图 / Slide 18 Images

![Slide 18 image](./images/slide-18-85.png)
![Slide 18 image](./images/slide-18-86.svg)

## 课堂练习 / Practice

- 安装一个虚拟机并记录快照步骤
- 画出一次网页上传到后端处理的流程图
- 写下三个你认为最容易出错的信任边界
