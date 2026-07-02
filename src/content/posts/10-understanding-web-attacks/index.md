---
title: "10 了解Web攻击 / Understanding Web Attacks"
published: 2025-12-09
description: "Web 攻击入门课围绕数据库、SQL 注入和 XSS 展开。它的核心是理解用户输入如何进入服务器、数据库和浏览器，并在错误处理时造成安全影响。 / This web security lesson focuses on databases, SQL injection, and XSS: how input moves through server, database, and browser."
tags: ["Web Security", "SQL Injection", "XSS", "Database", "OWASP", "Web Defense"]
category: "Club Course"
draft: false
---

# 10 了解Web攻击

**English title:** Understanding Web Attacks

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-12-09

**关键词 / Keywords:** #Web-Security #SQL-Injection #XSS #Database #OWASP #Web-Defense

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

Web 攻击入门课围绕数据库、SQL 注入和 XSS 展开。它的核心是理解用户输入如何进入服务器、数据库和浏览器，并在错误处理时造成安全影响。

> English overview: This web security lesson focuses on databases, SQL injection, and XSS: how input moves through server, database, and browser.

## 学习目标 / Learning Goals

- 理解 Web 应用的输入输出路径
- 认识 SQL 注入和 XSS 的基本原理
- 知道常见防御方向

## 1. Web 应用与数据库 / Web apps and databases

Web 应用通常接收用户输入，交给后端逻辑处理，再读写数据库并返回页面。攻击面就藏在这些输入、查询、渲染和权限边界里。

讲者补充：学 Web 安全时要画数据流。输入从哪里来，经过哪些组件，最终在哪里显示或执行，是判断风险的关键。

> English recap: Draw the data flow: input, backend logic, database, rendering, and permissions.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.svg)
![Slide 1 image](./images/slide-01-03.png)
![Slide 1 image](./images/slide-01-04.svg)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-05.png)
![Slide 2 image](./images/slide-02-06.svg)
![Slide 2 image](./images/slide-02-07.png)
![Slide 2 image](./images/slide-02-08.svg)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-09.png)
![Slide 3 image](./images/slide-03-10.svg)
![Slide 3 image](./images/slide-03-11.png)
![Slide 3 image](./images/slide-03-12.svg)

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-13.png)
![Slide 4 image](./images/slide-04-14.svg)
![Slide 4 image](./images/slide-04-15.png)
![Slide 4 image](./images/slide-04-16.svg)
![Slide 4 image](./images/slide-04-17.png)

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-18.png)
![Slide 5 image](./images/slide-05-19.svg)
![Slide 5 image](./images/slide-05-20.png)
![Slide 5 image](./images/slide-05-21.svg)
![Slide 5 image](./images/slide-05-22.png)

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-23.png)
![Slide 6 image](./images/slide-06-24.svg)
![Slide 6 image](./images/slide-06-25.png)
![Slide 6 image](./images/slide-06-26.svg)
![Slide 6 image](./images/slide-06-27.png)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-28.png)
![Slide 7 image](./images/slide-07-29.svg)
![Slide 7 image](./images/slide-07-30.png)
![Slide 7 image](./images/slide-07-31.svg)
![Slide 7 image](./images/slide-07-32.png)

## 2. SQL 注入 / SQL injection

SQL 注入发生在用户输入被拼接进数据库语句时，攻击者可能改变查询逻辑。理解它时要关注参数化查询、输入校验和数据库权限。

讲者补充：不要只背 payload。更重要的是解释为什么字符串拼接会把数据变成语句的一部分。

> English recap: SQL injection turns data into query logic when input is concatenated unsafely.

### 相关课件图片 / Related Slide Images

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-33.png)
![Slide 8 image](./images/slide-08-34.svg)
![Slide 8 image](./images/slide-08-35.png)
![Slide 8 image](./images/slide-08-36.svg)

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-37.png)
![Slide 9 image](./images/slide-09-38.svg)
![Slide 9 image](./images/slide-09-39.png)
![Slide 9 image](./images/slide-09-40.svg)
![Slide 9 image](./images/slide-09-41.png)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-42.png)
![Slide 10 image](./images/slide-10-43.svg)
![Slide 10 image](./images/slide-10-44.png)
![Slide 10 image](./images/slide-10-45.svg)
![Slide 10 image](./images/slide-10-46.png)

## 3. XSS 与浏览器执行 / XSS and browser execution

XSS 的关键是恶意脚本进入页面并在用户浏览器中执行。反射型、存储型和 DOM 型的差别，在于脚本从哪里进入、在哪里保存、在哪里触发。

讲者补充：防 XSS 时要根据输出上下文做编码，HTML、属性、URL、JavaScript 字符串里的规则并不相同。

> English recap: XSS is about untrusted script reaching a browser execution context.

### 相关课件图片 / Related Slide Images

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-47.png)
![Slide 11 image](./images/slide-11-48.svg)
![Slide 11 image](./images/slide-11-49.png)
![Slide 11 image](./images/slide-11-50.svg)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-51.png)
![Slide 12 image](./images/slide-12-52.svg)
![Slide 12 image](./images/slide-12-53.png)
![Slide 12 image](./images/slide-12-54.svg)

## 4. 作业与安全边界 / Homework and boundaries

练习应在靶场中完成，目标是理解漏洞成因和修复思路，而不是对真实网站尝试 payload。

讲者补充：一次完整练习应包含复现、影响说明、修复建议和验证修复。

> English recap: Practice in labs and always include remediation and verification.

### 相关课件图片 / Related Slide Images

### 第 13 页配图 / Slide 13 Images

![Slide 13 image](./images/slide-13-55.png)
![Slide 13 image](./images/slide-13-56.svg)
![Slide 13 image](./images/slide-13-57.png)
![Slide 13 image](./images/slide-13-58.svg)

### 第 14 页配图 / Slide 14 Images

![Slide 14 image](./images/slide-14-59.png)
![Slide 14 image](./images/slide-14-60.svg)
![Slide 14 image](./images/slide-14-61.png)
![Slide 14 image](./images/slide-14-62.svg)
![Slide 14 image](./images/slide-14-63.png)
![Slide 14 image](./images/slide-14-64.svg)

### 第 15 页配图 / Slide 15 Images

![Slide 15 image](./images/slide-15-65.png)
![Slide 15 image](./images/slide-15-66.svg)
![Slide 15 image](./images/slide-15-67.png)
![Slide 15 image](./images/slide-15-68.svg)

## 课堂练习 / Practice

- 画出登录表单到数据库查询的数据流
- 说明参数化查询如何防 SQL 注入
- 比较反射型和存储型 XSS
