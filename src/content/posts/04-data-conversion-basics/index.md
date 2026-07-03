---
title: "04 数据转换基础 / Data Conversion Basics"
published: 2025-10-15
description: "数据转换基础课解决一个常见困惑：安全题目中的字符串为什么会变成二进制、十六进制、Base64 或 JSON。理解编码不是炫技，而是为了还原数据本来的含义。 / Data conversion explains why strings appear as binary, hex, Base64, Unicode, or JSON in security tasks."
tags: ["Data Encoding", "Binary", "Hex", "ASCII", "Unicode", "Base64", "JSON"]
category: "Club Course"
draft: false
---

:::section{.lang-zh}

**作者：** 2023届 Simon Li

**原 PPT 日期：** 2025-10-15

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

数据转换基础课解决一个常见困惑：安全题目中的字符串为什么会变成二进制、十六进制、Base64 或 JSON。理解编码不是炫技，而是为了还原数据本来的含义。

## 学习目标

- 区分编码、加密和哈希
- 理解常见进制与字符集
- 能在 CTF 或日志中还原数据

## 1. 为什么要做数据转换

计算机底层处理的是字节，人看到的是文本、图片或协议字段。编码就是在人类可读形式和机器可处理形式之间建立约定。

讲者补充：看到一串奇怪字符时，先判断它像编码、加密还是压缩，不要直接套所有工具暴力尝试。

## 2. 进制与字符集

二进制、十六进制和 ASCII/Unicode 经常一起出现。十六进制适合表示字节，字符集负责解释这些字节对应什么文字。

讲者补充：乱码通常不是“文字坏了”，而是用错了解码方式。记录原始字节比复制乱码更可靠。

## 3. Base64、JSON 与实战还原

Base64 常用于把二进制数据放进文本环境，JSON 常用于结构化传输。安全分析中，我们经常需要把多层编码逐层拆开。

讲者补充：每还原一层都要保存中间结果，并说明判断依据。这样即使方向错了，也能退回上一层重新分析。

## 课堂练习

- 把一段文本转换为十六进制再还原
- 判断一段 Base64 文本解码后是什么格式
- 解释编码、加密、哈希三者区别

:::

:::section{.lang-en}

**Author:** Class of 2023 Simon Li

**Original PPT date:** 2025-10-15

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

Data conversion explains why strings appear as binary, hex, Base64, Unicode, or JSON in security tasks.

## Learning Goals

- Understand the core ideas of Data Conversion Basics.
- Connect Data Encoding, Binary, Hex to practical security work.
- Practice only in authorized, repeatable lab environments.

## 1. Why conversion matters

Encoding is a convention between bytes and human-readable data.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## 2. Bases and character sets

Hex represents bytes; character sets explain what those bytes mean.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## 3. Base64, JSON, and recovery

Decode step by step and keep intermediate results for review.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## Practice

- Summarize the main workflow of Data Conversion Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
