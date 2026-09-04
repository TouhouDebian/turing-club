---
title: "12 防御注入攻击 / Defending Against Injection Attacks"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-04-22
description: "防御注入攻击课程从攻击原理转向修复方法：不要让用户输入直接改变命令、查询或解释器语义。核心防线是参数化、校验、最小权限和持续维护。 / Defending injection means preventing user input from changing query, command, or interpreter semantics."
tags: ["SQL Injection", "Input Validation", "Parameterized Query", "Web Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-04-22

> 此文为codex改编往年课件而成

## 课程简介

防御注入攻击课程从攻击原理转向修复方法：不要让用户输入直接改变命令、查询或解释器语义。核心防线是参数化、校验、最小权限和持续维护。

## 你会学到

- 理解注入类漏洞的共同结构
- 掌握参数化查询和输入校验思路
- 认识后期维护的重要性

## 1. 注入攻击的共同点

当程序把不可信输入解析为语句、命令或结构的一部分时，就可能出现注入漏洞。SQL 注入、命令注入和模板注入都符合这个条件。

仅过滤几个危险字符无法覆盖不同上下文，应根据 SQL、命令或模板的解析规则选择防护方法。

![图示 1](./images/slide-04-05.jpeg)

## 2. 防御概览

有效防御通常包括参数化 API、白名单校验、上下文编码、最小权限、错误信息控制和日志监控。它们互相补位。

参数化查询会将语句结构与参数值分开交给数据库处理。

## 3. 代码示例与维护

安全代码不是一次写完就结束。依赖更新、测试用例、代码审查和日志告警能防止旧问题重新出现。

修复后要验证 payload 不再生效，并确认正常业务没有被破坏。

## 动手小任务

- 把一段拼接 SQL 改成参数化查询思路
- 列出命令注入的三个防御点
- 写一个修复验证清单

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> This article was adapted by Codex from previous course slides.

## Overview

Defending injection means preventing user input from changing query, command, or interpreter semantics.

## 1. Common pattern of injection

Injection happens when untrusted data becomes executable structure.

![Illustration 1](./images/slide-04-05.jpeg)

## 2. Defense overview

Parameterized APIs separate code from data.

## 3. Code examples and maintenance

Fixes require regression tests and verification.

:::
