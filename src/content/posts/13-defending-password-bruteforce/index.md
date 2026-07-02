---
title: "13 防御密码爆破 / Defending Against Password Brute Force"
published: 2026-04-22
description: "防御密码爆破课程关注认证系统如何抵抗大量猜测。重点不是让密码规则越来越复杂，而是组合限速、锁定、MFA、监控和用户体验。 / Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design."
tags: ["Password Security", "Brute Force", "Authentication", "MFA", "Rate Limiting", "Defense"]
category: "Club Course"
draft: false
---

# 13 防御密码爆破

**English title:** Defending Against Password Brute Force

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2026-04-22

**关键词 / Keywords:** #Password-Security #Brute-Force #Authentication #MFA #Rate-Limiting #Defense

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

防御密码爆破课程关注认证系统如何抵抗大量猜测。重点不是让密码规则越来越复杂，而是组合限速、锁定、MFA、监控和用户体验。

> English overview: Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design.

## 学习目标 / Learning Goals

- 理解爆破攻击的基本条件
- 掌握限速、锁定和 MFA 的作用
- 知道如何监控认证异常

## 1. 爆破攻击如何发生 / How brute force works

爆破依赖三个条件：可尝试的入口、可验证的反馈、足够多的尝试次数。防御就是打断其中一个或多个条件。

讲者补充：错误提示不要泄露“用户名存在但密码错”这类可枚举信息。

> English recap: Brute force needs an entry point, feedback, and many attempts.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.png)
![Slide 1 image](./images/slide-01-03.png)
![Slide 1 image](./images/slide-01-04.png)
![Slide 1 image](./images/slide-01-05.svg)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-06.png)
![Slide 2 image](./images/slide-02-07.png)
![Slide 2 image](./images/slide-02-08.png)
![Slide 2 image](./images/slide-02-09.svg)
![Slide 2 image](./images/slide-02-10.png)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-11.png)
![Slide 3 image](./images/slide-03-12.png)
![Slide 3 image](./images/slide-03-13.png)
![Slide 3 image](./images/slide-03-14.png)
![Slide 3 image](./images/slide-03-15.svg)

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-16.png)
![Slide 4 image](./images/slide-04-17.png)
![Slide 4 image](./images/slide-04-18.png)
![Slide 4 image](./images/slide-04-19.png)
![Slide 4 image](./images/slide-04-20.svg)

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-21.png)
![Slide 5 image](./images/slide-05-22.png)
![Slide 5 image](./images/slide-05-23.png)
![Slide 5 image](./images/slide-05-24.png)
![Slide 5 image](./images/slide-05-25.svg)
![Slide 5 image](./images/slide-05-26.svg)
![Slide 5 image](./images/slide-05-27.png)
![Slide 5 image](./images/slide-05-28.jpeg)
![Slide 5 image](./images/slide-05-29.jpeg)

## 2. 防御手段 / Defense controls

常见措施包括登录限速、失败次数锁定、验证码、MFA、强密码策略和泄露密码检测。不同场景需要平衡安全和可用性。

讲者补充：锁定策略要防止被滥用成拒绝服务，例如攻击者故意锁死大量用户。

> English recap: Controls must balance security, usability, and abuse resistance.

### 相关课件图片 / Related Slide Images

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-30.png)
![Slide 6 image](./images/slide-06-31.png)
![Slide 6 image](./images/slide-06-32.png)
![Slide 6 image](./images/slide-06-33.png)
![Slide 6 image](./images/slide-06-34.svg)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-35.png)
![Slide 7 image](./images/slide-07-36.png)
![Slide 7 image](./images/slide-07-37.png)
![Slide 7 image](./images/slide-07-38.png)
![Slide 7 image](./images/slide-07-39.svg)
![Slide 7 image](./images/slide-07-40.jpeg)

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-41.png)
![Slide 8 image](./images/slide-08-42.png)
![Slide 8 image](./images/slide-08-43.png)
![Slide 8 image](./images/slide-08-44.png)
![Slide 8 image](./images/slide-08-45.svg)

## 3. 代码、日志与维护 / Code, logs, and maintenance

认证系统需要记录失败次数、来源、时间、用户代理和风险评分。维护阶段要关注异常峰值、撞库行为和绕过路径。

讲者补充：密码防御不是只靠登录页面，重置密码、注册、API 登录同样要纳入策略。

> English recap: Authentication defense includes every path that can verify credentials.

### 相关课件图片 / Related Slide Images

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-46.png)
![Slide 9 image](./images/slide-09-47.png)
![Slide 9 image](./images/slide-09-48.png)
![Slide 9 image](./images/slide-09-49.png)
![Slide 9 image](./images/slide-09-50.svg)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-51.png)
![Slide 10 image](./images/slide-10-52.png)
![Slide 10 image](./images/slide-10-53.png)
![Slide 10 image](./images/slide-10-54.png)
![Slide 10 image](./images/slide-10-55.svg)

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-56.png)
![Slide 11 image](./images/slide-11-57.png)
![Slide 11 image](./images/slide-11-58.png)
![Slide 11 image](./images/slide-11-59.png)
![Slide 11 image](./images/slide-11-60.svg)
![Slide 11 image](./images/slide-11-61.png)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-62.png)
![Slide 12 image](./images/slide-12-63.png)
![Slide 12 image](./images/slide-12-64.png)
![Slide 12 image](./images/slide-12-65.png)
![Slide 12 image](./images/slide-12-66.svg)

## 课堂练习 / Practice

- 设计一个登录限速策略
- 解释 MFA 能防什么、不能防什么
- 列出认证日志中应记录的字段
