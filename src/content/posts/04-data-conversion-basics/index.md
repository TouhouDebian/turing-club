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

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

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

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 1 页：天一网络安全社

- 天一网络安全社
- 数据转换基础

#### 第 2 页：哈希与密码破解

- 哈希与密码破解
- ASCII vs UTF(Unicode)

## 2. 进制与字符集

二进制、十六进制和 ASCII/Unicode 经常一起出现。十六进制适合表示字节，字符集负责解释这些字节对应什么文字。

讲者补充：乱码通常不是“文字坏了”，而是用错了解码方式。记录原始字节比复制乱码更可靠。

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

## 3. Base64、JSON 与实战还原

Base64 常用于把二进制数据放进文本环境，JSON 常用于结构化传输。安全分析中，我们经常需要把多层编码逐层拆开。

讲者补充：每还原一层都要保存中间结果，并说明判断依据。这样即使方向错了，也能退回上一层重新分析。

> 小旁白：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 9 页：WORK SUMMARY REPORT· WORK SUMMARY REPORT ·WORK SUMMARY REPORT · WORK SUMMARY REPORT

- 将可变大小的输入转换成固定长度的十六进制输出，也称为摘要
- 输入数据的微小变化会导致摘要的巨大变化，通常用于完整性检验
- 速度很快，极难碰撞
- 生成散列很容易，但是将散列逆向还原为原始数据很困难，也就是“单向”属性

#### 第 12 页：WORK SUMMARY REPORT· WORK SUMMARY REPORT ·WORK SUMMARY REPORT · WORK SUMMARY REPORT

- python 代码，要求如下：
- 个小明，对应的电话号码分别为：
- 请让程序找出电话号码数值大于
- 然后把这个文件编译成
- python 文件并转换为
- ，最后将代码和
- 进制数值发送给社长。

#### 第 13 页：天一网络安全社

- 天一网络安全社
- WORK SUMMARY REPORT· WORK SUMMARY REPORT ·WORK SUMMARY REPORT · WORK SUMMARY REPORT

### 相关图解

> 这些图是为了辅助理解结构、命令输出或表格关系；装饰图已经尽量排除。

![课程相关截图 1](./images/slide-09-23-square.png)
![课程相关截图 2](./images/slide-09-21-square.png)

## 课堂练习

- 把一段文本转换为十六进制再还原
- 判断一段 Base64 文本解码后是什么格式
- 解释编码、加密、哈希三者区别

:::

:::section{.lang-en}

**Original PPT date:** 2025-10-15

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

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

### Related Visuals

> These visuals are kept for structure, command output, or tables; decorative images are intentionally filtered out.

![Course-related screenshot 1](./images/slide-09-23-square.png)
![Course-related screenshot 2](./images/slide-09-21-square.png)

## Practice

- Summarize the main workflow of Data Conversion Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
