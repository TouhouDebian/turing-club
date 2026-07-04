---
title: "03 Python基础(副社长presentation) / Python Basics"
author: "2023届 Jack Zhang / Class of 2023 Jack Zhang"
published: 2025-10-15
description: "Python 基础课服务于后续自动化、安全脚本和数据处理。初学时应优先理解变量、流程控制、函数和调试，而不是急着写很长的程序。 / Python basics support automation, security scripting, and data processing. Variables, control flow, functions, and debugging come first."
tags: ["Python", "Programming", "Variables", "Control Flow", "Functions", "Automation"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-10-15

> 此文为codex改编往年课件而成

## 先把地图点亮

如果你是第一次接触这个主题，不用先背一堆名词。先抓住一个小问题：它解决什么麻烦？输入从哪里来？最后能留下什么证据？

Python 基础课服务于后续自动化、安全脚本和数据处理。初学时应优先理解变量、流程控制、函数和调试，而不是急着写很长的程序。

下面按“概念 -> 例子 -> 可操作的小任务”的顺序拆开。读完不一定立刻变成高手，但至少能知道下一步该点亮哪块地图。

## 你会学到

- 理解 Python 程序的基本结构
- 能用变量、条件和循环表达简单逻辑
- 为后续安全自动化打基础

## 1. 从脚本开始

Python 适合作为第一门安全自动化语言，因为语法清晰，能快速处理文本、文件、网络请求和数据格式。学习时可以先把脚本看作“可重复执行的操作记录”。

不要只追求代码能跑。每段代码都要能说清输入是什么、输出是什么、失败时会发生什么。

> 小提示：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

![图示 1](./images/slide-01-01.png)

![图示 2](./images/slide-04-04.png)

## 2. 变量、判断与循环

变量负责保存状态，条件判断负责选择路径，循环负责重复动作。这三件事足以表达大多数入门任务，例如批量检查文件名、统计日志行、过滤可疑字符串。

安全脚本常常处理脏数据，写判断时要考虑空值、格式错误和异常输入。

> 小提示：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

![图示 1](./images/slide-14-14.png)

![图示 2](./images/slide-09-09.png)

## 3. 函数与模块化

函数把一段逻辑命名并复用。对安全学习来说，函数能把扫描、解析、输出、保存结果这些步骤分开，降低调试难度。

函数名要表达意图，例如 `parse_log_line` 比 `do_thing` 更适合复盘和协作。

> 小提示：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

![图示 1](./images/slide-17-17.png)

![图示 2](./images/slide-18-18.png)

## 4. 练习与调试

调试不是出错后的补救，而是写程序的一部分。通过打印中间结果、缩小输入范围、阅读报错堆栈，可以更快定位问题。

写安全脚本时先在小样本上验证，再扩大到真实数据，避免错误脚本批量破坏文件或输出误判。

> 小提示：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

![图示 1](./images/slide-25-25.png)

## 动手小任务

- 写一个脚本统计文本中某个关键词出现次数
- 用函数封装一次日志行解析
- 故意制造一个错误并解释报错位置

:::

:::section{.lang-en}

**Original PPT date:** 2025-10-15

> This article was adapted by Codex from previous course slides.

## Overview

If this topic is new to you, do not start by memorizing every term. First ask a smaller question: what problem does it solve, where does input enter, and what evidence can we observe?

Python basics support automation, security scripting, and data processing. Variables, control flow, functions, and debugging come first.

The article follows a simple path: idea, example, and a small task you can reproduce safely.

## Learning Goals

- Explain the main workflow behind Python Basics.
- Use Python, Programming, Variables to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Starting from scripts

A script is a repeatable record of operations. Clear input and output matter.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Errors are not the villain; they usually point at the layer that does not match.

![Illustration 1](./images/slide-01-01.png)

![Illustration 2](./images/slide-04-04.png)

## 2. Variables, branches, and loops

Variables store state, branches choose paths, and loops repeat work.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

![Illustration 1](./images/slide-14-14.png)

![Illustration 2](./images/slide-09-09.png)

## 3. Functions and modularity

Functions name reusable logic and make scripts easier to test.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Do not rush the special move: draw input, processing, and output first.

![Illustration 1](./images/slide-17-17.png)

![Illustration 2](./images/slide-18-18.png)

## 4. Practice and debugging

Debugging is part of programming. Test with small samples before scaling up.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

![Illustration 1](./images/slide-25-25.png)

## Practice

- Summarize the main workflow of Python Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
