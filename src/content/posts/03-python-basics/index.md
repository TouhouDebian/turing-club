---
title: "03 Python基础(副社长presentation) / Python Basics"
published: 2025-10-15
description: "Python 基础课服务于后续自动化、安全脚本和数据处理。初学时应优先理解变量、流程控制、函数和调试，而不是急着写很长的程序。 / Python basics support automation, security scripting, and data processing. Variables, control flow, functions, and debugging come first."
tags: ["Python", "Programming", "Variables", "Control Flow", "Functions", "Automation"]
category: "Club Course"
draft: false
---

# 03 Python基础(副社长presentation)

**English title:** Python Basics

**作者 / Author:** 2023届 Jack Zhang / Class of 2023 Jack Zhang

**原 PPT 日期 / Original PPT date:** 2025-10-15

**关键词 / Keywords:** #Python #Programming #Variables #Control-Flow #Functions #Automation

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

Python 基础课服务于后续自动化、安全脚本和数据处理。初学时应优先理解变量、流程控制、函数和调试，而不是急着写很长的程序。

> English overview: Python basics support automation, security scripting, and data processing. Variables, control flow, functions, and debugging come first.

## 学习目标 / Learning Goals

- 理解 Python 程序的基本结构
- 能用变量、条件和循环表达简单逻辑
- 为后续安全自动化打基础

## 1. 从脚本开始 / Starting from scripts

Python 适合作为第一门安全自动化语言，因为语法清晰，能快速处理文本、文件、网络请求和数据格式。课堂上应先把脚本看作“可重复执行的操作记录”。

讲者补充：不要只追求代码能跑。每段代码都要能说清输入是什么、输出是什么、失败时会发生什么。

> English recap: A script is a repeatable record of operations. Clear input and output matter.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.png)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-02.png)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-03.png)

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-04.png)

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-05.png)

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-06.png)

## 2. 变量、判断与循环 / Variables, branches, and loops

变量负责保存状态，条件判断负责选择路径，循环负责重复动作。这三件事足以表达大多数入门任务，例如批量检查文件名、统计日志行、过滤可疑字符串。

讲者补充：安全脚本常常处理脏数据，写判断时要考虑空值、格式错误和异常输入。

> English recap: Variables store state, branches choose paths, and loops repeat work.

### 相关课件图片 / Related Slide Images

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-07.png)

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-08.png)

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-09.png)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-10.png)

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-11.png)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-12.png)

### 第 13 页配图 / Slide 13 Images

![Slide 13 image](./images/slide-13-13.png)

### 第 14 页配图 / Slide 14 Images

![Slide 14 image](./images/slide-14-14.png)

### 第 15 页配图 / Slide 15 Images

![Slide 15 image](./images/slide-15-15.png)

## 3. 函数与模块化 / Functions and modularity

函数把一段逻辑命名并复用。对安全学习来说，函数能把扫描、解析、输出、保存结果这些步骤分开，降低调试难度。

讲者补充：函数名要表达意图，例如 `parse_log_line` 比 `do_thing` 更适合复盘和协作。

> English recap: Functions name reusable logic and make scripts easier to test.

### 相关课件图片 / Related Slide Images

### 第 16 页配图 / Slide 16 Images

![Slide 16 image](./images/slide-16-16.png)

### 第 17 页配图 / Slide 17 Images

![Slide 17 image](./images/slide-17-17.png)

### 第 18 页配图 / Slide 18 Images

![Slide 18 image](./images/slide-18-18.png)

### 第 19 页配图 / Slide 19 Images

![Slide 19 image](./images/slide-19-19.png)

### 第 20 页配图 / Slide 20 Images

![Slide 20 image](./images/slide-20-20.png)

### 第 21 页配图 / Slide 21 Images

![Slide 21 image](./images/slide-21-21.png)

### 第 22 页配图 / Slide 22 Images

![Slide 22 image](./images/slide-22-22.png)

### 第 23 页配图 / Slide 23 Images

![Slide 23 image](./images/slide-23-23.png)

### 第 24 页配图 / Slide 24 Images

![Slide 24 image](./images/slide-24-24.png)

## 4. 练习与调试 / Practice and debugging

调试不是出错后的补救，而是写程序的一部分。通过打印中间结果、缩小输入范围、阅读报错堆栈，可以更快定位问题。

讲者补充：写安全脚本时先在小样本上验证，再扩大到真实数据，避免错误脚本批量破坏文件或输出误判。

> English recap: Debugging is part of programming. Test with small samples before scaling up.

### 相关课件图片 / Related Slide Images

### 第 25 页配图 / Slide 25 Images

![Slide 25 image](./images/slide-25-25.png)

### 第 26 页配图 / Slide 26 Images

![Slide 26 image](./images/slide-26-26.png)

### 第 27 页配图 / Slide 27 Images

![Slide 27 image](./images/slide-27-27.png)

### 第 28 页配图 / Slide 28 Images

![Slide 28 image](./images/slide-28-28.png)

### 第 29 页配图 / Slide 29 Images

![Slide 29 image](./images/slide-29-29.png)

### 第 30 页配图 / Slide 30 Images

![Slide 30 image](./images/slide-30-30.png)

### 第 31 页配图 / Slide 31 Images

![Slide 31 image](./images/slide-31-31.png)

### 第 32 页配图 / Slide 32 Images

![Slide 32 image](./images/slide-32-32.png)

### 第 33 页配图 / Slide 33 Images

![Slide 33 image](./images/slide-33-33.png)

## 课堂练习 / Practice

- 写一个脚本统计文本中某个关键词出现次数
- 用函数封装一次日志行解析
- 故意制造一个错误并解释报错位置
