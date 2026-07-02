---
title: "12 防御注入攻击 / Defending Against Injection Attacks"
published: 2026-04-22
description: "防御注入攻击课程从攻击原理转向修复方法：不要让用户输入直接改变命令、查询或解释器语义。核心防线是参数化、校验、最小权限和持续维护。 / Defending injection means preventing user input from changing query, command, or interpreter semantics."
tags: ["SQL Injection", "Input Validation", "Parameterized Query", "Secure Coding", "Web Defense"]
category: "Club Course"
draft: false
---

# 12 防御注入攻击

**English title:** Defending Against Injection Attacks

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2026-04-22

**关键词 / Keywords:** #SQL-Injection #Input-Validation #Parameterized-Query #Secure-Coding #Web-Defense

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

防御注入攻击课程从攻击原理转向修复方法：不要让用户输入直接改变命令、查询或解释器语义。核心防线是参数化、校验、最小权限和持续维护。

> English overview: Defending injection means preventing user input from changing query, command, or interpreter semantics.

## 学习目标 / Learning Goals

- 理解注入类漏洞的共同结构
- 掌握参数化查询和输入校验思路
- 认识后期维护的重要性

## 1. 注入攻击的共同点 / Common pattern of injection

注入的本质是程序把不可信输入当成了语句、命令或结构的一部分。SQL 注入、命令注入、模板注入都可以用这个角度理解。

讲者补充：防御时不要只过滤几个危险字符，因为上下文不同，危险字符也不同。

> English recap: Injection happens when untrusted data becomes executable structure.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.png)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-02.png)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-03.png)

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-04.png)
![Slide 4 image](./images/slide-04-05.jpeg)

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-06.png)

## 2. 防御概览 / Defense overview

有效防御通常包括参数化 API、白名单校验、上下文编码、最小权限、错误信息控制和日志监控。它们互相补位。

讲者补充：参数化不是“把字符串拼得更小心”，而是让数据库明确区分代码和数据。

> English recap: Parameterized APIs separate code from data.

### 相关课件图片 / Related Slide Images

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-07.png)
![Slide 6 image](./images/slide-06-08.jpeg)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-09.png)
![Slide 7 image](./images/slide-07-10.jpeg)
![Slide 7 image](./images/slide-07-11.jpeg)
![Slide 7 image](./images/slide-07-12.jpeg)

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-13.png)

## 3. 代码示例与维护 / Code examples and maintenance

安全代码不是一次写完就结束。依赖更新、测试用例、代码审查和日志告警能防止旧问题重新出现。

讲者补充：修复后要验证 payload 不再生效，并确认正常业务没有被破坏。

> English recap: Fixes require regression tests and verification.

### 相关课件图片 / Related Slide Images

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-14.png)
![Slide 9 image](./images/slide-09-15.svg)
![Slide 9 image](./images/slide-09-16.svg)
![Slide 9 image](./images/slide-09-17.svg)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-18.png)

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-19.png)
![Slide 11 image](./images/slide-11-20.png)
![Slide 11 image](./images/slide-11-21.jpeg)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-22.png)

## 课堂练习 / Practice

- 把一段拼接 SQL 改成参数化查询思路
- 列出命令注入的三个防御点
- 写一个修复验证清单
