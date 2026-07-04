---
title: "04 数据转换基础 / Data Conversion Basics"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-10-15
description: "数据转换基础课解决一个常见困惑：安全题目中的字符串为什么会变成二进制、十六进制、Base64 或 JSON。理解编码不是炫技，而是为了还原数据本来的含义。 / Data conversion explains why strings appear as binary, hex, Base64, Unicode, or JSON in security tasks."
tags: ["Data Encoding", "Binary", "Hex", "ASCII", "Unicode", "Base64", "JSON"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-10-15

> 这篇讲义按课堂主线重新梳理：先抓住概念，再看命令、结构图和练习任务。别急着开大招，先把地图点亮。

## 导读

数据转换基础课解决一个常见困惑：安全题目中的字符串为什么会变成二进制、十六进制、Base64 或 JSON。理解编码不是炫技，而是为了还原数据本来的含义。

## 学习目标

- 区分编码、加密和哈希
- 理解常见进制与字符集
- 能在 CTF 或日志中还原数据

## 1. 为什么要做数据转换

计算机底层处理的是字节，人看到的是文本、图片或协议字段。编码就是在人类可读形式和机器可处理形式之间建立约定。

讲者补充：看到一串奇怪字符时，先判断它像编码、加密还是压缩，不要直接套所有工具暴力尝试。

> 小旁白：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

## 2. 进制与字符集

二进制、十六进制和 ASCII/Unicode 经常一起出现。十六进制适合表示字节，字符集负责解释这些字节对应什么文字。

讲者补充：乱码通常不是“文字坏了”，而是用错了解码方式。记录原始字节比复制乱码更可靠。

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

## 3. Base64、JSON 与实战还原

Base64 常用于把二进制数据放进文本环境，JSON 常用于结构化传输。安全分析中，我们经常需要把多层编码逐层拆开。

讲者补充：每还原一层都要保存中间结果，并说明判断依据。这样即使方向错了，也能退回上一层重新分析。

> 小旁白：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

![课程相关截图 1](./images/slide-09-23.jpeg)

![课程相关截图 2](./images/slide-09-21.jpeg)

## 课堂练习

- 把一段文本转换为十六进制再还原
- 判断一段 Base64 文本解码后是什么格式
- 解释编码、加密、哈希三者区别

:::

:::section{.lang-en}

**Original PPT date:** 2025-10-15

> These notes follow the lesson path: understand the idea first, then read commands, diagrams, and practice tasks with evidence.

## Overview

Data conversion explains why strings appear as binary, hex, Base64, Unicode, or JSON in security tasks.

## Learning Goals

- Explain the main workflow behind Data Conversion Basics.
- Use Data Encoding, Binary, Hex to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Why conversion matters

Encoding is a convention between bytes and human-readable data.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## 2. Bases and character sets

Hex represents bytes; character sets explain what those bytes mean.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## 3. Base64, JSON, and recovery

Decode step by step and keep intermediate results for review.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not rush the special move: draw input, processing, and output first.

![Course-related screenshot 1](./images/slide-09-23.jpeg)

![Course-related screenshot 2](./images/slide-09-21.jpeg)

## Practice

- Summarize the main workflow of Data Conversion Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
