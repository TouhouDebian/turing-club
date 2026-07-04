---
title: "13 防御密码爆破 / Defending Against Password Brute Force"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-04-22
description: "防御密码爆破课程关注认证系统如何抵抗大量猜测。重点不是让密码规则越来越复杂，而是组合限速、锁定、MFA、监控和用户体验。 / Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design."
tags: ["Password Security", "Brute Force", "Authentication", "MFA", "Rate Limiting", "Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-04-22

> 这篇讲义按课堂主线重新梳理：先抓住概念，再看命令、结构图和练习任务。别急着开大招，先把地图点亮。

## 导读

防御密码爆破课程关注认证系统如何抵抗大量猜测。重点不是让密码规则越来越复杂，而是组合限速、锁定、MFA、监控和用户体验。

## 学习目标

- 理解爆破攻击的基本条件
- 掌握限速、锁定和 MFA 的作用
- 知道如何监控认证异常

## 1. 爆破攻击如何发生

爆破依赖三个条件：可尝试的入口、可验证的反馈、足够多的尝试次数。防御就是打断其中一个或多个条件。

讲者补充：错误提示不要泄露“用户名存在但密码错”这类可枚举信息。

> 小旁白：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

## 2. 防御手段

常见措施包括登录限速、失败次数锁定、验证码、MFA、强密码策略和泄露密码检测。不同场景需要平衡安全和可用性。

讲者补充：锁定策略要防止被滥用成拒绝服务，例如攻击者故意锁死大量用户。

> 小旁白：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

![课程相关截图 1](./images/slide-07-40.jpeg)

## 3. 代码、日志与维护

认证系统需要记录失败次数、来源、时间、用户代理和风险评分。维护阶段要关注异常峰值、撞库行为和绕过路径。

讲者补充：密码防御不是只靠登录页面，重置密码、注册、API 登录同样要纳入策略。

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

## 课堂练习

- 设计一个登录限速策略
- 解释 MFA 能防什么、不能防什么
- 列出认证日志中应记录的字段

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> These notes follow the lesson path: understand the idea first, then read commands, diagrams, and practice tasks with evidence.

## Overview

Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design.

## Learning Goals

- Explain the main workflow behind Defending Against Password Brute Force.
- Use Password Security, Brute Force, Authentication to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. How brute force works

Brute force needs an entry point, feedback, and many attempts.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

## 2. Defense controls

Controls must balance security, usability, and abuse resistance.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Errors are not the villain; they usually point at the layer that does not match.

![Course-related screenshot 1](./images/slide-07-40.jpeg)

## 3. Code, logs, and maintenance

Authentication defense includes every path that can verify credentials.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## Practice

- Summarize the main workflow of Defending Against Password Brute Force in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
