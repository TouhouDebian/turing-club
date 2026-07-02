---
title: "10-了解Web攻击 / Understanding Web Attacks"
published: 2025-12-09
description: "10-了解Web攻击 / Understanding Web Attacks. 2023届 Simon Li / Class of 2023 Simon Li."
tags: ["Cybersecurity", "Club Course", "Slides"]
category: "Club Course"
draft: false
---

# 10-了解Web攻击

**English title:** Understanding Web Attacks

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-12-09

> 本文由社团课程 PPT 转换而来，保留原幻灯片文字与图片，便于网页阅读。
>
> This article was converted from the club course PowerPoint. Original slide text and images are preserved for web reading.

## 第 1 页 / Slide 1: 10-

### 原文 / Original Text

- 了解
- WEB
- 攻击
- TY
- cybersec
- BLUE ARCHIVE
- Simon Li

### 图片 / Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.svg)
![Slide 1 image](./images/slide-01-03.png)
![Slide 1 image](./images/slide-01-04.svg)

## 第 2 页 / Slide 2: Contents

### 原文 / Original Text

- 目录
- 简介
- I
- ntroduction
- 01
- SQL
- 注入
- SQL injection
- 02
- XSS
- 注入
- XSS injection
- 03
- 作业
- H
- omework
- 04

### 图片 / Images

![Slide 2 image](./images/slide-02-05.png)
![Slide 2 image](./images/slide-02-06.svg)
![Slide 2 image](./images/slide-02-07.png)
![Slide 2 image](./images/slide-02-08.svg)

## 第 3 页 / Slide 3: 01

### 原文 / Original Text

- 简介
- I
- ntroduction

### 图片 / Images

![Slide 3 image](./images/slide-03-09.png)
![Slide 3 image](./images/slide-03-10.svg)
![Slide 3 image](./images/slide-03-11.png)
![Slide 3 image](./images/slide-03-12.svg)

## 第 4 页 / Slide 4: 简介

### 图片 / Images

![Slide 4 image](./images/slide-04-13.png)
![Slide 4 image](./images/slide-04-14.svg)
![Slide 4 image](./images/slide-04-15.png)
![Slide 4 image](./images/slide-04-16.svg)
![Slide 4 image](./images/slide-04-17.png)

## 第 5 页 / Slide 5: 数据库基础

### 图片 / Images

![Slide 5 image](./images/slide-05-18.png)
![Slide 5 image](./images/slide-05-19.svg)
![Slide 5 image](./images/slide-05-20.png)
![Slide 5 image](./images/slide-05-21.svg)
![Slide 5 image](./images/slide-05-22.png)

## 第 6 页 / Slide 6: 评估

### 原文 / Original Text

- web
- 安全

### 图片 / Images

![Slide 6 image](./images/slide-06-23.png)
![Slide 6 image](./images/slide-06-24.svg)
![Slide 6 image](./images/slide-06-25.png)
![Slide 6 image](./images/slide-06-26.svg)
![Slide 6 image](./images/slide-06-27.png)

## 第 7 页 / Slide 7: 评估

### 原文 / Original Text

- web
- 应用安全

### 图片 / Images

![Slide 7 image](./images/slide-07-28.png)
![Slide 7 image](./images/slide-07-29.svg)
![Slide 7 image](./images/slide-07-30.png)
![Slide 7 image](./images/slide-07-31.svg)
![Slide 7 image](./images/slide-07-32.png)

## 第 8 页 / Slide 8: 02

### 原文 / Original Text

- SQL
- 注入
- SQL
- injection

### 图片 / Images

![Slide 8 image](./images/slide-08-33.png)
![Slide 8 image](./images/slide-08-34.svg)
![Slide 8 image](./images/slide-08-35.png)
![Slide 8 image](./images/slide-08-36.svg)

## 第 9 页 / Slide 9: SQL

### 原文 / Original Text

- 注入
- SQL
- 注入攻击模拟器
- |
- 在线安全检测工具
- |
- 实战演练平台

### 图片 / Images

![Slide 9 image](./images/slide-09-37.png)
![Slide 9 image](./images/slide-09-38.svg)
![Slide 9 image](./images/slide-09-39.png)
![Slide 9 image](./images/slide-09-40.svg)
![Slide 9 image](./images/slide-09-41.png)

## 第 10 页 / Slide 10: SQL

### 原文 / Original Text

- 注入

### 图片 / Images

![Slide 10 image](./images/slide-10-42.png)
![Slide 10 image](./images/slide-10-43.svg)
![Slide 10 image](./images/slide-10-44.png)
![Slide 10 image](./images/slide-10-45.svg)
![Slide 10 image](./images/slide-10-46.png)

## 第 11 页 / Slide 11: 03

### 原文 / Original Text

- XSS
- 注入
- SHORTCOMINGS OF WORK

### 图片 / Images

![Slide 11 image](./images/slide-11-47.png)
![Slide 11 image](./images/slide-11-48.svg)
![Slide 11 image](./images/slide-11-49.png)
![Slide 11 image](./images/slide-11-50.svg)

## 第 12 页 / Slide 12: XSS

### 原文 / Original Text

- 的三类主要形式
- 反射型（
- Reflected XSS
- ）
- 特点：恶意脚本随请求参数（如
- URL
- 、表单字段）被服务器原样返回到响应页面，并在用户浏览器中执行。
- 场景示例：搜索结果页、错误信息页、重定向参数等直接把用户输入展示在页面上，未做过滤或转义。
- 常见利用流程：攻击者诱导用户点击特制链接（含恶意脚本），服务器在响应中反射该脚本，用户浏览器执行。
- 存储型（
- Stored XSS
- ，又称持久型）
- 特点：恶意脚本被存储在服务器端（如数据库、留言板、用户资料、评论等），随后所有查看该数据的用户都会触发脚本执行。
- 场景示例：论坛发帖、评论、用户签名、上传的
- HTML
- 内容等被保存并在页面上直接渲染。
- 危害最大：因为影响范围大，能对大量用户造成长期影响。
- DOM‑based XSS
- （基于
- DOM
- 的
- XSS
- ）
- 特点：恶意脚本不经过服务器或服务器并未修改返回内容，而是浏览器端
- JavaScript
- 读取不可信来源（如
- location.hash
- 、
- location.search
- 、
- document.referrer
- 、
- localStorage
- 等）并把值写进
- DOM
- （
- innerHTML
- 、
- document.write
- 、
- eval
- 等），导致执行。
- 场景示例：前端路由、客户端模板或脚本直接用不可信数据生成
- HTML
- 或执行代码。

### 图片 / Images

![Slide 12 image](./images/slide-12-51.png)
![Slide 12 image](./images/slide-12-52.svg)
![Slide 12 image](./images/slide-12-53.png)
![Slide 12 image](./images/slide-12-54.svg)

## 第 13 页 / Slide 13: 04

### 原文 / Original Text

- 作业
- H
- omework

### 图片 / Images

![Slide 13 image](./images/slide-13-55.png)
![Slide 13 image](./images/slide-13-56.svg)
![Slide 13 image](./images/slide-13-57.png)
![Slide 13 image](./images/slide-13-58.svg)

## 第 14 页 / Slide 14: 作业

### 原文 / Original Text

- 未来规划
- 还记得我们第一节课给你们搭的网站吗
- Emmm
- ,
- 或许已经到期了对吗
- 到期了没关系，重新买一个就行了
- 写一个具有
- sql
- 漏洞的
- html
- ，需要和数据库建立连接，建完成后把网址发给我

### 图片 / Images

![Slide 14 image](./images/slide-14-59.png)
![Slide 14 image](./images/slide-14-60.svg)
![Slide 14 image](./images/slide-14-61.png)
![Slide 14 image](./images/slide-14-62.svg)
![Slide 14 image](./images/slide-14-63.png)
![Slide 14 image](./images/slide-14-64.svg)

## 第 15 页 / Slide 15: TYcybersec

### 原文 / Original Text

- S
- imon Li
- THANK YOU
- 感谢您的观看

### 图片 / Images

![Slide 15 image](./images/slide-15-65.png)
![Slide 15 image](./images/slide-15-66.svg)
![Slide 15 image](./images/slide-15-67.png)
![Slide 15 image](./images/slide-15-68.svg)
