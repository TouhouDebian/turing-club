---
title: "11 Web渗透 / Web Penetration Testing"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-01-26
description: "Web 渗透课程以 Netcat 和考试式练习为入口，强调工具只是手段，真正要训练的是网络连接、输入输出、证据记录和边界意识。 / This lesson uses Netcat and exam-style practice to train connections, input/output, evidence, and boundaries."
tags: ["Web Penetration Testing", "Netcat", "Reverse Shell", "HTTP", "Vulnerability Assessment", "Ethics"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-01-26

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

Web 渗透课程以 Netcat 和考试式练习为入口，强调工具只是手段，真正要训练的是网络连接、输入输出、证据记录和边界意识。

## 学习目标

- 理解 Netcat 的常见用途
- 认识反弹 shell 和文件传输的风险
- 为 Web 安全综合练习做准备

## 1. 课程结构与边界

这节课把工具学习、考试练习和未来方向放在一起，说明 Web 渗透不是单点技巧，而是综合能力训练。

讲者补充：任何反弹 shell、文件传输、端口监听练习都必须在授权环境中进行。

## 2. Netcat 的用途

Netcat 常被称为网络瑞士军刀，可用于监听端口、连接服务、传输文本或文件、获取 banner、辅助调试网络连通性。

讲者补充：`nc` 很强，也很危险。学习时重点理解数据从哪个端口进、由哪个程序处理、输出流向哪里。

## 3. 考试式练习

考试练习通常要求在有限信息下判断连接方式、参数、目标端口和输出证据。它考查的是基本功，而不是背题。

讲者补充：解题时先写下假设，再验证假设。不要在没有记录的情况下乱试。

## 4. 未来的 Web 安全学习

后续可以继续学习 HTTP、身份认证、会话管理、漏洞验证、报告撰写和修复验证。工具会变，但方法论会一直使用。

讲者补充：真正的渗透测试报告要能帮助修复，而不是只证明“我进去了”。

## 课堂练习

- 用 Netcat 在本地监听并发送一段文本
- 解释反弹 shell 为什么危险
- 写一段包含证据和修复建议的小报告

:::

:::section{.lang-en}

**Original PPT date:** 2026-01-26

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

This lesson uses Netcat and exam-style practice to train connections, input/output, evidence, and boundaries.

## Learning Goals

- Explain the main workflow behind Web Penetration Testing.
- Use Web Penetration Testing, Netcat, Reverse Shell to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Course structure and boundaries

Tool practice must stay within authorized lab environments.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 2. What Netcat is used for

Netcat is useful because it exposes raw network input and output.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 3. Exam-style practice

Exam tasks reward clear assumptions, controlled tests, and evidence.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 4. Future web security learning

Good testing helps people fix systems, not merely prove access.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## Practice

- Summarize the main workflow of Web Penetration Testing in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
