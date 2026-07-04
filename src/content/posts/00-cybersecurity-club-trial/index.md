---
title: "00 网络安全社体验课 正式 / Cybersecurity Club Trial Lesson"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-09-11
description: "这节体验课不是单纯展示工具，而是把图灵社的学习路线摊开：从网页、后端、文件读取、内存读取，到虚拟机实验和摸底测试。读者可以把它当作加入网络安全方向前的路线图。 / This trial lesson is a roadmap for the club: web pages, backend ideas, file and memory reading, virtual machines, and a baseline challenge."
tags: ["Cybersecurity", "Turing Club", "Club Intro", "CTF", "Ethics", "Linux", "Python"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-09-11

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

## 导读

这节体验课不是单纯展示工具，而是把图灵社的学习路线摊开：从网页、后端、文件读取、内存读取，到虚拟机实验和摸底测试。读者可以把它当作加入网络安全方向前的路线图。

## 学习目标

- 了解社团的学习节奏与实践方式
- 知道网页、后端和系统实验之间的关系
- 建立合法、可控、可复现的实验意识

## 1. 社团学习路线

网络安全不是只会“攻击”的技术，而是理解系统如何工作、如何出错、如何被保护的综合能力。体验课先把学习范围展示出来，让新成员知道后续会同时接触编程、网络、操作系统和安全伦理。

讲者补充：初学时不要急着追求复杂工具，先能解释一个网页请求如何到达服务器、服务器如何读写文件、系统如何限制权限，这些基础会决定后面能走多远。

> 小旁白：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 1 页：如何搭建自己的网站

- 如何搭建自己的网站
- 你的电脑密码，真的安全吗？

#### 第 2 页：迎新会

- 收得住，放得开；玩归玩，学归学
- 按时完成并上交作业，牢记课堂中教授的操作方式和思维方式
- 根据自身情况尽可能为社团出力，至少避免消极懈怠的情绪
- 尊重并善待每一位成员
- 出现疑问或特殊情况时及时告知社内干部
- 10/11 *64
- 的实体机或者虚拟机
- linux 实体机或者虚拟机

#### 第 3 页：Part 01

- 搭建自己的网站
- uild your own website

## 2. 从网页到后端

幻灯片中的主页上传、后端部分、文件读取和内存读取，可以串成一条完整链路：用户在前端提交内容，后端接收并处理，系统再根据权限访问文件或内存资源。

讲者补充：安全问题往往出现在边界处，例如上传内容是否可信、路径是否被限制、后端是否把用户输入直接当作文件名或代码执行。阅读时可以尝试把每一步都问成“这里信任了谁？”

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 6 页：上传主页

- Post your homepage + Apply SSL certification
- 去管理产品→虚拟主机→管理→一键登录
- html 文件，并且把文件名改成
- 证书，使得自己的网站不提示不安全（看演示操作）
- 进入网页后台后，
- 点击域名管理，输入刚刚创建的域名，文件夹
- 在网页地址栏输入你的域名，即可访问你的网站

#### 第 7 页：后端部分

- 代码用于存储，读取，删除数据库的数据，同时，它也可以支持网页渲染，先把群里的
- check_resgister_time.php
- 下载下来，改数据库名，数据库密码，数据表名。
- 将会模拟注册和登录
- 注册：写入数据库的操作
- 登录：读取数据库的操作
- 登陆后会查看你是什么时候注册的

#### 第 8 页：Part 02

- 你的电脑密码，真的安全吗？
- Is your computer password really secure?

## 3. 实验环境与自测

虚拟机的意义在于隔离：把练习环境和日常电脑隔开，出错时可以回滚，实验也不会影响真实系统。摸底测试则用于判断大家对系统、网络和编程基础的掌握情况。

讲者补充：所有练习都应在授权环境中完成。真正的安全学习不是越界，而是在可控范围内把原理想清楚、把证据记录清楚。

> 小旁白：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 14 页：虚拟机

- machine VS real machine
- linux 虚拟机会导致
- linux 卡顿或者无法开机，一直开机会影响到宿主机
- windows 的使用。但是方便查资料
- 实体机拥有急速的响应，但是
- 过高导致字体变小，不是很方便使用日常软件
- 这个只能装两个虚拟机
- linux 建议配置至少

#### 第 15 页：选择你的

- https://www.kali.org/get-kali/#kali-virtual-machines
- 怎么装（有时间的话社长演示）：
- https://blog.csdn.net/Zachyy/article/details/146372003
- 选择这个的建议看最下面的教程或单独找社长装！！！
- https://www.kali.org/get-kali/#kali-installer-images
- 准备一个至少
- 注意，建议使用
- ，这样就没有最后一步

#### 第 17 页：摸底测试

- 道单项选择题，
- 分钟考试时间
- 本次考试只是一次摸底测验，不要紧张，放平心态
- 完成考试后，我们会对各社员能力进行评估以保证所有人都能跟上在后续课程
- 我们不会根据本考试的情况而考虑是否将你踢出社团，请放心作答！
- 简单级：日常安全常识
- 中等级：基础概念理解
- 困难级：技术应用理解

## 课堂练习

- 安装一个虚拟机并记录快照步骤
- 画出一次网页上传到后端处理的流程图
- 写下三个你认为最容易出错的信任边界

:::

:::section{.lang-en}

**Original PPT date:** 2025-09-11

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

## Overview

This trial lesson is a roadmap for the club: web pages, backend ideas, file and memory reading, virtual machines, and a baseline challenge.

## Learning Goals

- Explain the main workflow behind Cybersecurity Club Trial Lesson.
- Use Cybersecurity, Turing Club, Club Intro to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Club learning path

The first goal is orientation. Before tools, learners need a mental map of web, backend, operating system, and ethics.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## 2. From webpage to backend

The web-to-backend path is a chain of trust. Many vulnerabilities come from trusting input at the wrong boundary.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## 3. Lab environment and self-check

Virtual machines keep practice safe and repeatable. A baseline test helps learners choose the right starting point.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not rush the special move: draw input, processing, and output first.

## Practice

- Summarize the main workflow of Cybersecurity Club Trial Lesson in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
