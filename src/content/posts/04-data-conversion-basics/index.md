---
title: "04 数据转换基础 / Data Conversion Basics"
published: 2025-10-15
description: "数据转换基础课解决一个常见困惑：安全题目中的字符串为什么会变成二进制、十六进制、Base64 或 JSON。理解编码不是炫技，而是为了还原数据本来的含义。 / Data conversion explains why strings appear as binary, hex, Base64, Unicode, or JSON in security tasks."
tags: ["Data Encoding", "Binary", "Hex", "ASCII", "Unicode", "Base64", "JSON"]
category: "Club Course"
draft: false
---

# 04 数据转换基础

**English title:** Data Conversion Basics

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-10-15

**关键词 / Keywords:** #Data-Encoding #Binary #Hex #ASCII #Unicode #Base64 #JSON

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

数据转换基础课解决一个常见困惑：安全题目中的字符串为什么会变成二进制、十六进制、Base64 或 JSON。理解编码不是炫技，而是为了还原数据本来的含义。

> English overview: Data conversion explains why strings appear as binary, hex, Base64, Unicode, or JSON in security tasks.

## 学习目标 / Learning Goals

- 区分编码、加密和哈希
- 理解常见进制与字符集
- 能在 CTF 或日志中还原数据

## 1. 为什么要做数据转换 / Why conversion matters

计算机底层处理的是字节，人看到的是文本、图片或协议字段。编码就是在人类可读形式和机器可处理形式之间建立约定。

讲者补充：看到一串奇怪字符时，先判断它像编码、加密还是压缩，不要直接套所有工具暴力尝试。

> English recap: Encoding is a convention between bytes and human-readable data.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.jpeg)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-02.jpeg)
![Slide 2 image](./images/slide-02-03.png)
![Slide 2 image](./images/slide-02-04.svg)
![Slide 2 image](./images/slide-02-05.png)
![Slide 2 image](./images/slide-02-06.svg)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-07.jpeg)

## 2. 进制与字符集 / Bases and character sets

二进制、十六进制和 ASCII/Unicode 经常一起出现。十六进制适合表示字节，字符集负责解释这些字节对应什么文字。

讲者补充：乱码通常不是“文字坏了”，而是用错了解码方式。记录原始字节比复制乱码更可靠。

> English recap: Hex represents bytes; character sets explain what those bytes mean.

### 相关课件图片 / Related Slide Images

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-08.jpeg)
![Slide 4 image](./images/slide-04-09.png)
![Slide 4 image](./images/slide-04-10.svg)
![Slide 4 image](./images/slide-04-11.png)

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-12.jpeg)
![Slide 5 image](./images/slide-05-13.png)
![Slide 5 image](./images/slide-05-14.svg)
![Slide 5 image](./images/slide-05-15.png)

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-16.jpeg)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-17.jpeg)
![Slide 7 image](./images/slide-07-18.png)

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-19.jpeg)

## 3. Base64、JSON 与实战还原 / Base64, JSON, and recovery

Base64 常用于把二进制数据放进文本环境，JSON 常用于结构化传输。安全分析中，我们经常需要把多层编码逐层拆开。

讲者补充：每还原一层都要保存中间结果，并说明判断依据。这样即使方向错了，也能退回上一层重新分析。

> English recap: Decode step by step and keep intermediate results for review.

### 相关课件图片 / Related Slide Images

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-20.jpeg)
![Slide 9 image](./images/slide-09-21.jpeg)
![Slide 9 image](./images/slide-09-22.jpeg)
![Slide 9 image](./images/slide-09-23.jpeg)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-24.jpeg)
![Slide 10 image](./images/slide-10-25.png)

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-26.jpeg)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-27.jpeg)
![Slide 12 image](./images/slide-12-28.png)
![Slide 12 image](./images/slide-12-29.svg)
![Slide 12 image](./images/slide-12-30.png)
![Slide 12 image](./images/slide-12-31.svg)

### 第 13 页配图 / Slide 13 Images

![Slide 13 image](./images/slide-13-32.jpeg)

## 课堂练习 / Practice

- 把一段文本转换为十六进制再还原
- 判断一段 Base64 文本解码后是什么格式
- 解释编码、加密、哈希三者区别
