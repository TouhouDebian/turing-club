---
title: "06 防火墙基础 / Firewall Basics"
published: 2025-11-17
description: "防火墙基础课讨论流量如何被允许、拒绝、记录和分段。它不是一道万能墙，而是一套基于规则、场景和日志的访问控制方法。 / Firewall basics explain how traffic is allowed, denied, logged, and segmented through rules and policy."
tags: ["Firewall", "Network Security", "Access Control", "Ports", "Traffic Filtering", "Defense"]
category: "Club Course"
draft: false
---

# 06 防火墙基础

**English title:** Firewall Basics

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-11-17

**关键词 / Keywords:** #Firewall #Network-Security #Access-Control #Ports #Traffic-Filtering #Defense

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

防火墙基础课讨论流量如何被允许、拒绝、记录和分段。它不是一道万能墙，而是一套基于规则、场景和日志的访问控制方法。

> English overview: Firewall basics explain how traffic is allowed, denied, logged, and segmented through rules and policy.

## 学习目标 / Learning Goals

- 理解防火墙在网络防御中的位置
- 认识端口、协议、方向和规则顺序
- 能用日志复盘一次访问控制结果

## 1. 防火墙的角色 / Role of a firewall

防火墙的核心是访问控制：什么来源可以访问什么目标，使用什么协议和端口，是否需要记录。它不能替代系统加固，也不能修复应用漏洞。

讲者补充：防火墙规则要服务于资产边界。先知道要保护什么，再决定挡什么。

> English recap: A firewall is access control, not a replacement for secure systems and applications.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.png)
![Slide 1 image](./images/slide-01-03.png)
![Slide 1 image](./images/slide-01-04.png)
![Slide 1 image](./images/slide-01-05.png)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-06.png)
![Slide 2 image](./images/slide-02-07.png)
![Slide 2 image](./images/slide-02-08.png)
![Slide 2 image](./images/slide-02-09.png)
![Slide 2 image](./images/slide-02-10.png)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-11.png)
![Slide 3 image](./images/slide-03-12.png)
![Slide 3 image](./images/slide-03-13.png)
![Slide 3 image](./images/slide-03-14.png)
![Slide 3 image](./images/slide-03-15.png)

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-16.png)
![Slide 4 image](./images/slide-04-17.png)
![Slide 4 image](./images/slide-04-18.png)
![Slide 4 image](./images/slide-04-19.png)
![Slide 4 image](./images/slide-04-20.png)
![Slide 4 image](./images/slide-04-21.png)

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-22.png)
![Slide 5 image](./images/slide-05-23.png)
![Slide 5 image](./images/slide-05-24.png)
![Slide 5 image](./images/slide-05-25.png)
![Slide 5 image](./images/slide-05-26.png)
![Slide 5 image](./images/slide-05-27.png)

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-28.png)
![Slide 6 image](./images/slide-06-29.png)
![Slide 6 image](./images/slide-06-30.png)
![Slide 6 image](./images/slide-06-31.png)
![Slide 6 image](./images/slide-06-32.png)
![Slide 6 image](./images/slide-06-33.png)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-34.png)
![Slide 7 image](./images/slide-07-35.png)
![Slide 7 image](./images/slide-07-36.png)
![Slide 7 image](./images/slide-07-37.png)
![Slide 7 image](./images/slide-07-38.png)
![Slide 7 image](./images/slide-07-39.png)

## 2. 规则、端口与方向 / Rules, ports, and direction

一条规则通常包含源地址、目的地址、协议、端口、动作和日志策略。规则顺序会影响命中结果，因此配置后必须测试。

讲者补充：默认拒绝、按需放行是常见防御思路。但在学习环境中要先确保不会把自己锁在机器外。

> English recap: Rules should be specific, ordered, tested, and logged.

### 相关课件图片 / Related Slide Images

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-40.png)
![Slide 8 image](./images/slide-08-41.png)
![Slide 8 image](./images/slide-08-42.png)
![Slide 8 image](./images/slide-08-43.png)
![Slide 8 image](./images/slide-08-44.png)

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-45.png)
![Slide 9 image](./images/slide-09-46.png)
![Slide 9 image](./images/slide-09-47.png)
![Slide 9 image](./images/slide-09-48.png)
![Slide 9 image](./images/slide-09-49.png)
![Slide 9 image](./images/slide-09-50.png)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-51.png)
![Slide 10 image](./images/slide-10-52.png)
![Slide 10 image](./images/slide-10-53.png)
![Slide 10 image](./images/slide-10-54.png)
![Slide 10 image](./images/slide-10-55.png)
![Slide 10 image](./images/slide-10-56.png)

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-57.png)
![Slide 11 image](./images/slide-11-58.png)
![Slide 11 image](./images/slide-11-59.png)
![Slide 11 image](./images/slide-11-60.png)
![Slide 11 image](./images/slide-11-61.png)
![Slide 11 image](./images/slide-11-62.png)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-63.png)
![Slide 12 image](./images/slide-12-64.png)
![Slide 12 image](./images/slide-12-65.png)
![Slide 12 image](./images/slide-12-66.png)
![Slide 12 image](./images/slide-12-67.png)
![Slide 12 image](./images/slide-12-68.png)
![Slide 12 image](./images/slide-12-69.png)

## 3. 示例与作业 / Examples and homework

通过示例练习，可以把“允许 SSH”“阻止某端口”“记录异常访问”变成可观察结果。日志是判断规则是否有效的重要证据。

讲者补充：每次改规则前先备份，改完后记录预期结果和实际结果。

> English recap: Firewall work is evidence-driven: configure, test, and read logs.

### 相关课件图片 / Related Slide Images

### 第 13 页配图 / Slide 13 Images

![Slide 13 image](./images/slide-13-70.png)
![Slide 13 image](./images/slide-13-71.png)
![Slide 13 image](./images/slide-13-72.png)
![Slide 13 image](./images/slide-13-73.png)
![Slide 13 image](./images/slide-13-74.png)

### 第 14 页配图 / Slide 14 Images

![Slide 14 image](./images/slide-14-75.png)
![Slide 14 image](./images/slide-14-76.png)
![Slide 14 image](./images/slide-14-77.png)
![Slide 14 image](./images/slide-14-78.png)
![Slide 14 image](./images/slide-14-79.png)
![Slide 14 image](./images/slide-14-80.png)

### 第 15 页配图 / Slide 15 Images

![Slide 15 image](./images/slide-15-81.png)
![Slide 15 image](./images/slide-15-82.png)
![Slide 15 image](./images/slide-15-83.png)
![Slide 15 image](./images/slide-15-84.png)
![Slide 15 image](./images/slide-15-85.png)
![Slide 15 image](./images/slide-15-86.png)
![Slide 15 image](./images/slide-15-87.png)

### 第 16 页配图 / Slide 16 Images

![Slide 16 image](./images/slide-16-88.png)
![Slide 16 image](./images/slide-16-89.png)
![Slide 16 image](./images/slide-16-90.png)
![Slide 16 image](./images/slide-16-91.png)
![Slide 16 image](./images/slide-16-92.png)

### 第 17 页配图 / Slide 17 Images

![Slide 17 image](./images/slide-17-93.png)
![Slide 17 image](./images/slide-17-94.png)
![Slide 17 image](./images/slide-17-95.png)
![Slide 17 image](./images/slide-17-96.png)
![Slide 17 image](./images/slide-17-97.png)

### 第 18 页配图 / Slide 18 Images

![Slide 18 image](./images/slide-18-98.png)
![Slide 18 image](./images/slide-18-99.png)
![Slide 18 image](./images/slide-18-100.png)
![Slide 18 image](./images/slide-18-101.png)
![Slide 18 image](./images/slide-18-102.png)

## 课堂练习 / Practice

- 写出一条允许 SSH 的规则条件
- 解释入站和出站规则的区别
- 设计一个默认拒绝的最小开放策略
