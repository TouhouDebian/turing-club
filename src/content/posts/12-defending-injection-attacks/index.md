---
title: "12 防御注入攻击 / Defending Against Injection Attacks"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-04-22
description: "防御注入攻击课程从攻击原理转向修复方法：不要让用户输入直接改变命令、查询或解释器语义。核心防线是参数化、校验、最小权限和持续维护。 / Defending injection means preventing user input from changing query, command, or interpreter semantics."
tags: ["SQL Injection", "Input Validation", "Parameterized Query", "Secure Coding", "Web Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-04-22

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

防御注入攻击课程从攻击原理转向修复方法：不要让用户输入直接改变命令、查询或解释器语义。核心防线是参数化、校验、最小权限和持续维护。

## 学习目标

- 理解注入类漏洞的共同结构
- 掌握参数化查询和输入校验思路
- 认识后期维护的重要性

## 1. 注入攻击的共同点

注入的本质是程序把不可信输入当成了语句、命令或结构的一部分。SQL 注入、命令注入、模板注入都可以用这个角度理解。

讲者补充：防御时不要只过滤几个危险字符，因为上下文不同，危险字符也不同。

## 2. 防御概览

有效防御通常包括参数化 API、白名单校验、上下文编码、最小权限、错误信息控制和日志监控。它们互相补位。

讲者补充：参数化不是“把字符串拼得更小心”，而是让数据库明确区分代码和数据。

## 3. 代码示例与维护

安全代码不是一次写完就结束。依赖更新、测试用例、代码审查和日志告警能防止旧问题重新出现。

讲者补充：修复后要验证 payload 不再生效，并确认正常业务没有被破坏。

## 课堂练习

- 把一段拼接 SQL 改成参数化查询思路
- 列出命令注入的三个防御点
- 写一个修复验证清单

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

Defending injection means preventing user input from changing query, command, or interpreter semantics.

## Learning Goals

- Explain the main workflow behind Defending Against Injection Attacks.
- Use SQL Injection, Input Validation, Parameterized Query to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Common pattern of injection

Injection happens when untrusted data becomes executable structure.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 2. Defense overview

Parameterized APIs separate code from data.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 3. Code examples and maintenance

Fixes require regression tests and verification.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## Practice

- Summarize the main workflow of Defending Against Injection Attacks in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
