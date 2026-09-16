---
title: "00 图灵社体验课：Python 入门与入社测试器 / Turing Club Trial Lesson: Python and Interest Quiz"
author: "天一中学图灵社 / Tianyi High School Turing Club"
published: 2026-09-16
description: "图灵社体验课介绍课堂安排与学习准备，带新成员练习 Python 的输出、变量、输入和条件判断，并完成一个用于交流计算机兴趣方向的入社测试器。 / This trial lesson introduces the club, covers Python output, variables, input, and conditionals, and asks new members to build an interest quiz."
image: "./images/cover.jpeg"
tags: ["Python", "Programming", "Turing Club", "Beginner"]
category: "2026.9-2027.6课件-S2扬帆 / 2026.9-2027.6 Slides S2 Set Sail"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-09-16

> 此文由 Codex 根据课件改编。

## 课程简介

这节体验课面向刚接触图灵社的新成员。课程从社团安排和课堂约定开始，随后用一段短程序介绍 Python 的输出、变量、输入和条件判断。课堂任务是制作一个“图灵社入社测试器”，并用它了解其他成员感兴趣的计算机方向。

## 社团课程与学习准备

图灵社的课程涉及 Python、网站开发、Linux、网络安全、CTF、AI、服务器和校园 Wiki。没有编程经验也可以参加，课程会提供可以直接运行和修改的示例。

每次上课需要准备电脑和文具。建议安装 Visual Studio Code，并单独建立一个目录保存代码和课堂工具。课程通知与作业要求会发到 QQ 学习群，需要按时查看。

课堂中的约定也很明确：活动时可以交流和放松，进入练习后需要完成当堂任务；代码和作业应按时提交；成员之间保持尊重；遇到设备、时间或学习方面的问题，要及时联系社团干部。

## 1. 用 `print()` 输出内容

Python 可以通过 `print()` 在终端显示文字、数字和计算结果。

```python
print("Hello, Turing Club!")
print(6 * 7)
```

运行后，终端会依次显示一行文字和计算结果。修改引号里的内容，再次运行程序，就能看到输出随代码变化。

## 2. 用变量保存数据

变量用于保存程序稍后还要使用的数据。变量名应说明内容，便于阅读和修改。

```python
name = "Cirno"
age = 9

print(name)
print(age)
```

这里的 `name` 保存文字，`age` 保存数字。Python 会根据赋给变量的值识别数据类型。

## 3. 获取用户输入

`input()` 会暂停程序，等待用户在终端输入内容。输入的结果可以保存到变量中。

```python
name = input("请输入你的名字：")
print("你好，" + name + "！")
```

字符串可以用 `+` 连接。程序因此能够把用户输入的名字放进问候语里。

## 4. 用条件判断处理不同回答

`if` 根据条件决定执行哪段代码。`else` 处理条件不成立时的情况。

```python
choice = input("你喜欢编程吗？yes/no：")

if choice == "yes":
    print("你可以继续试试 Python 和项目开发。")
else:
    print("也可以看看网络、Linux、AI 或其他方向。")
```

缩进决定哪些语句属于 `if` 或 `else`。输入内容还需要与代码中的文字一致。输入 `Yes`、`YES` 或多余空格时，这段程序不会把它们当作 `yes`。后续可以使用 `strip()` 和 `lower()` 统一输入格式。

```python
choice = input("你喜欢编程吗？yes/no：").strip().lower()
```

## 5. 制作“图灵社入社测试器”

测试器可以询问成员对编程、网络安全、Web、Linux 和 AI 的兴趣。每个回答都会影响程序给出的结果。

完成程序时需要检查这些内容：

- 问题能够区分不同兴趣方向
- 输入提示清楚，回答格式固定
- 条件判断覆盖常见回答
- 每条结果都能说明对应方向
- 程序遇到意外输入时不会直接结束

初版程序可以只问两到四个问题。把问题数量控制在较小范围，便于检查每一种回答组合。完成后与其他成员互相测试，记录哪些问题容易误解，再修改提示和判断条件。

## 课堂任务

新建一个 Python 文件，完成自己的入社测试器。程序先显示测试说明并接收用户回答，完成判断后再输出一个兴趣方向。提交前至少运行三次，覆盖不同答案和一次意外输入。

可以使用 AI 辅助检查报错或解释语法。使用生成的代码前，需要逐行阅读并亲自运行，确保自己能说明每一行代码的作用。

:::

:::section{.lang-en}

**Original PPT date:** 2026-09-16

> This article was adapted by Codex from the course slides.

## Overview

This trial lesson introduces new members to the Turing Club and its class routines. The coding portion covers Python output, variables, user input, and conditional statements. Members then build a short quiz that reports a possible area of interest in computing.

## Club courses and preparation

The club works with Python, web development, Linux, cybersecurity, CTF exercises, AI, servers, and the school Wiki. New members can join without prior programming experience.

Bring a computer and stationery to each lesson. Visual Studio Code is the recommended editor. Keep course files and tools in a separate folder, and check the QQ study group for notices and assignments.

## 1. Output with `print()`

The `print()` function displays text, numbers, or calculation results in the terminal.

```python
print("Hello, Turing Club!")
print(6 * 7)
```

## 2. Variables and input

Variables store data that the program will use later. The `input()` function waits for a response and returns it as text.

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
```

## 3. Conditional statements

An `if` statement chooses what to run based on a condition. An `else` block handles the remaining case.

```python
choice = input("Do you enjoy programming? yes/no: ").strip().lower()

if choice == "yes":
    print("Try Python and project development.")
else:
    print("You can also explore networking, Linux, AI, or other topics.")
```

## 4. Turing Club interest quiz

The quiz asks about interests such as programming, cybersecurity, web development, Linux, and AI. Its prompts should be clear, and its conditions should handle expected answers without crashing on an unfamiliar input.

Keep the first version short. Test several answer combinations with other members, note any confusing questions, and revise the prompts before submitting the program.

## Class task

Create a Python file that introduces the quiz and collects the answers. It should print one interest area after evaluating the responses. Run it at least three times with different answers, including one unexpected input. AI may help explain an error, but read and run any suggested code before using it.

:::
