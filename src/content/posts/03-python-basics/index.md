---
title: "03 Python基础(副社长presentation) / Python Basics"
published: 2025-10-15
description: "Python 基础课服务于后续自动化、安全脚本和数据处理。初学时应优先理解变量、流程控制、函数和调试，而不是急着写很长的程序。 / Python basics support automation, security scripting, and data processing. Variables, control flow, functions, and debugging come first."
tags: ["Python", "Programming", "Variables", "Control Flow", "Functions", "Automation"]
category: "Club Course"
draft: false
---

:::section{.lang-zh}

**作者：** 2023届 Jack Zhang

**原 PPT 日期：** 2025-10-15

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

Python 基础课服务于后续自动化、安全脚本和数据处理。初学时应优先理解变量、流程控制、函数和调试，而不是急着写很长的程序。

## 学习目标

- 理解 Python 程序的基本结构
- 能用变量、条件和循环表达简单逻辑
- 为后续安全自动化打基础

## 1. 从脚本开始

Python 适合作为第一门安全自动化语言，因为语法清晰，能快速处理文本、文件、网络请求和数据格式。课堂上应先把脚本看作“可重复执行的操作记录”。

讲者补充：不要只追求代码能跑。每段代码都要能说清输入是什么、输出是什么、失败时会发生什么。

### 相关图片

![课程相关截图 1](./images/slide-01-01.png)
![课程相关截图 2](./images/slide-04-04.png)
![课程相关截图 3](./images/slide-05-05.png)
![课程相关截图 4](./images/slide-06-06.png)

## 2. 变量、判断与循环

变量负责保存状态，条件判断负责选择路径，循环负责重复动作。这三件事足以表达大多数入门任务，例如批量检查文件名、统计日志行、过滤可疑字符串。

讲者补充：安全脚本常常处理脏数据，写判断时要考虑空值、格式错误和异常输入。

### 相关图片

![课程相关截图 1](./images/slide-07-07.png)
![课程相关截图 2](./images/slide-09-09.png)
![课程相关截图 3](./images/slide-10-10.png)
![课程相关截图 4](./images/slide-11-11.png)

## 3. 函数与模块化

函数把一段逻辑命名并复用。对安全学习来说，函数能把扫描、解析、输出、保存结果这些步骤分开，降低调试难度。

讲者补充：函数名要表达意图，例如 `parse_log_line` 比 `do_thing` 更适合复盘和协作。

### 相关图片

![课程相关截图 1](./images/slide-16-16.png)
![课程相关截图 2](./images/slide-17-17.png)
![课程相关截图 3](./images/slide-18-18.png)
![课程相关截图 4](./images/slide-20-20.png)

## 4. 练习与调试

调试不是出错后的补救，而是写程序的一部分。通过打印中间结果、缩小输入范围、阅读报错堆栈，可以更快定位问题。

讲者补充：写安全脚本时先在小样本上验证，再扩大到真实数据，避免错误脚本批量破坏文件或输出误判。

### 相关图片

![课程相关截图 1](./images/slide-25-25.png)
![课程相关截图 2](./images/slide-26-26.png)
![课程相关截图 3](./images/slide-27-27.png)
![课程相关截图 4](./images/slide-28-28.png)

## 课堂练习

- 写一个脚本统计文本中某个关键词出现次数
- 用函数封装一次日志行解析
- 故意制造一个错误并解释报错位置

:::

:::section{.lang-en}

**Author:** Class of 2023 Jack Zhang

**Original PPT date:** 2025-10-15

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

Python basics support automation, security scripting, and data processing. Variables, control flow, functions, and debugging come first.

## Learning Goals

- Understand the core ideas of Python Basics.
- Connect Python, Programming, Variables to practical security work.
- Practice only in authorized, repeatable lab environments.

## 1. Starting from scripts

A script is a repeatable record of operations. Clear input and output matter.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-01-01.png)
![Course-related screenshot 2](./images/slide-04-04.png)
![Course-related screenshot 3](./images/slide-05-05.png)
![Course-related screenshot 4](./images/slide-06-06.png)

## 2. Variables, branches, and loops

Variables store state, branches choose paths, and loops repeat work.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-07-07.png)
![Course-related screenshot 2](./images/slide-09-09.png)
![Course-related screenshot 3](./images/slide-10-10.png)
![Course-related screenshot 4](./images/slide-11-11.png)

## 3. Functions and modularity

Functions name reusable logic and make scripts easier to test.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-16-16.png)
![Course-related screenshot 2](./images/slide-17-17.png)
![Course-related screenshot 3](./images/slide-18-18.png)
![Course-related screenshot 4](./images/slide-20-20.png)

## 4. Practice and debugging

Debugging is part of programming. Test with small samples before scaling up.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-25-25.png)
![Course-related screenshot 2](./images/slide-26-26.png)
![Course-related screenshot 3](./images/slide-27-27.png)
![Course-related screenshot 4](./images/slide-28-28.png)

## Practice

- Summarize the main workflow of Python Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
