---
title: "13 防御密码爆破 / Defending Against Password Brute Force"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-04-22
description: "防御密码爆破课程关注认证系统如何抵抗大量猜测。有效措施包括限速、锁定、MFA、监控和合理的密码策略。 / Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design."
tags: ["Password Security", "Brute Force", "Authentication", "MFA", "Rate Limiting"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-04-22

> 此文为codex改编往年课件而成

## 课程简介

课程关注认证系统如何抵抗大量猜测。有效措施包括限速、锁定、MFA、监控和合理的密码策略。

## 你会学到

- 理解爆破攻击的基本条件
- 掌握限速、锁定和 MFA 的作用
- 知道如何监控认证异常

## 1. 爆破攻击如何发生

爆破依赖三个条件：可尝试的入口、可验证的反馈、足够多的尝试次数。防御就是打断其中一个或多个条件。

错误提示不要泄露“用户名存在但密码错”这类可枚举信息。

## 2. 防御手段

常见措施包括登录限速、失败次数锁定、验证码、MFA、强密码策略和泄露密码检测。不同场景需要平衡安全和可用性。

锁定策略要防止被滥用成拒绝服务，例如攻击者故意锁死大量用户。

![图示 1](./images/slide-07-40.jpeg)

## 3. 代码、日志与维护

认证系统需要记录失败次数、来源、时间、用户代理和风险评分。维护阶段要关注异常峰值、撞库行为和绕过路径。

密码防御不是只靠登录页面，重置密码、注册、API 登录同样要纳入策略。

## 动手小任务

- 设计一个登录限速策略
- 解释 MFA 能防什么、不能防什么
- 列出认证日志中应记录的字段

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> This article was adapted by Codex from previous course slides.

## Overview

Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design.

## 1. How brute force works

Brute force needs an entry point, feedback, and many attempts.

## 2. Defense controls

Controls must balance security, usability, and abuse resistance.

![Illustration 1](./images/slide-07-40.jpeg)

## 3. Code, logs, and maintenance

Authentication defense includes every path that can verify credentials.

:::
