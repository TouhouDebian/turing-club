---
title: "13 防御密码爆破 / Defending Against Password Brute Force"
published: 2026-04-22
description: "防御密码爆破课程关注认证系统如何抵抗大量猜测。重点不是让密码规则越来越复杂，而是组合限速、锁定、MFA、监控和用户体验。 / Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design."
tags: ["Password Security", "Brute Force", "Authentication", "MFA", "Rate Limiting", "Defense"]
category: "Club Course"
draft: false
---

:::section{.lang-zh}

**作者：** 2023届 Simon Li

**原 PPT 日期：** 2026-04-22

**关键词：** #Password-Security #Brute-Force #Authentication #MFA #Rate-Limiting #Defense

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

防御密码爆破课程关注认证系统如何抵抗大量猜测。重点不是让密码规则越来越复杂，而是组合限速、锁定、MFA、监控和用户体验。

## 学习目标

- 理解爆破攻击的基本条件
- 掌握限速、锁定和 MFA 的作用
- 知道如何监控认证异常

## 1. 爆破攻击如何发生

爆破依赖三个条件：可尝试的入口、可验证的反馈、足够多的尝试次数。防御就是打断其中一个或多个条件。

讲者补充：错误提示不要泄露“用户名存在但密码错”这类可枚举信息。

### 相关图片

![课程相关截图 1](./images/slide-02-10.png)

## 2. 防御手段

常见措施包括登录限速、失败次数锁定、验证码、MFA、强密码策略和泄露密码检测。不同场景需要平衡安全和可用性。

讲者补充：锁定策略要防止被滥用成拒绝服务，例如攻击者故意锁死大量用户。

## 3. 代码、日志与维护

认证系统需要记录失败次数、来源、时间、用户代理和风险评分。维护阶段要关注异常峰值、撞库行为和绕过路径。

讲者补充：密码防御不是只靠登录页面，重置密码、注册、API 登录同样要纳入策略。

### 相关图片

![课程相关截图 1](./images/slide-11-61.png)

## 课堂练习

- 设计一个登录限速策略
- 解释 MFA 能防什么、不能防什么
- 列出认证日志中应记录的字段

:::

:::section{.lang-en}

**Author:** Class of 2023 Simon Li

**Original PPT date:** 2026-04-22

**Keywords:** #Password-Security #Brute-Force #Authentication #MFA #Rate-Limiting #Defense

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design.

## Learning Goals

- Understand the core ideas of Defending Against Password Brute Force.
- Connect Password Security, Brute Force, Authentication to practical security work.
- Practice only in authorized, repeatable lab environments.

## 1. How brute force works

Brute force needs an entry point, feedback, and many attempts.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-02-10.png)

## 2. Defense controls

Controls must balance security, usability, and abuse resistance.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

## 3. Code, logs, and maintenance

Authentication defense includes every path that can verify credentials.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-11-61.png)

## Practice

- Summarize the main workflow of Defending Against Password Brute Force in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
