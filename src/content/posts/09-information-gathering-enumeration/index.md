---
title: "09 信息收集与枚举 / Information Gathering and Enumeration"
published: 2025-12-09
description: "完整的信息收集与枚举课程在被动收集之后加入主动枚举、自动化和作业设计。重点是把零散线索转成可验证的资产清单。 / The full lesson moves from passive reconnaissance to active enumeration and automation, turning clues into an asset inventory."
tags: ["OSINT", "Enumeration", "Reconnaissance", "Google Hacking", "DNS", "Port Scanning", "Asset Discovery"]
category: "Club Course"
draft: false
---

# 09 信息收集与枚举

**English title:** Information Gathering and Enumeration

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-12-09

**关键词 / Keywords:** #OSINT #Enumeration #Reconnaissance #Google-Hacking #DNS #Port-Scanning #Asset-Discovery

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

完整的信息收集与枚举课程在被动收集之后加入主动枚举、自动化和作业设计。重点是把零散线索转成可验证的资产清单。

> English overview: The full lesson moves from passive reconnaissance to active enumeration and automation, turning clues into an asset inventory.

## 学习目标 / Learning Goals

- 区分被动收集与主动枚举
- 理解 DNS、端口和服务发现的作用
- 建立自动化但不过度打扰目标的意识

## 1. 从线索到资产 / From clues to assets

信息收集的最终产物不应只是链接列表，而是结构化资产：域名、IP、端口、服务、技术栈、负责人、证据来源和验证状态。

讲者补充：表格化记录比聊天式记录更可靠。每条资产都应能追溯来源。

> English recap: The output should be a structured asset inventory, not a pile of links.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.svg)
![Slide 1 image](./images/slide-01-03.jpeg)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-04.png)
![Slide 2 image](./images/slide-02-05.svg)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-06.png)
![Slide 3 image](./images/slide-03-07.svg)

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-08.png)
![Slide 4 image](./images/slide-04-09.svg)
![Slide 4 image](./images/slide-04-10.png)

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-11.png)
![Slide 5 image](./images/slide-05-12.svg)

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-13.png)
![Slide 6 image](./images/slide-06-14.svg)
![Slide 6 image](./images/slide-06-15.png)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-16.png)
![Slide 7 image](./images/slide-07-17.svg)
![Slide 7 image](./images/slide-07-18.png)

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-19.png)
![Slide 8 image](./images/slide-08-20.svg)
![Slide 8 image](./images/slide-08-21.png)
![Slide 8 image](./images/slide-08-22.png)
![Slide 8 image](./images/slide-08-23.png)
![Slide 8 image](./images/slide-08-24.png)
![Slide 8 image](./images/slide-08-25.png)

## 2. 搜索引擎与被动资料 / Search engines and passive sources

搜索引擎适合发现公开页面、泄露痕迹、文档和历史信息。查询时要注意关键词、限定域名、文件类型和缓存结果。

讲者补充：不要把搜索结果当成最终结论，尤其是时间较久或来源不明的信息。

> English recap: Search results are leads; verify them before treating them as facts.

### 相关课件图片 / Related Slide Images

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-26.png)
![Slide 9 image](./images/slide-09-27.svg)
![Slide 9 image](./images/slide-09-28.png)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-29.png)
![Slide 10 image](./images/slide-10-30.svg)
![Slide 10 image](./images/slide-10-31.png)

## 3. 主动枚举与自动化 / Active enumeration and automation

主动枚举会直接与目标交互，例如 DNS 查询、端口扫描、服务识别。自动化可以提高效率，但也可能制造噪声，因此要控制速率和范围。

讲者补充：扫描前先确认授权、范围和时间窗口。扫描后要复核误报，避免把临时状态写成确定结论。

> English recap: Active enumeration needs scope control, rate control, and manual verification.

### 相关课件图片 / Related Slide Images

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-32.png)
![Slide 11 image](./images/slide-11-33.svg)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-34.png)
![Slide 12 image](./images/slide-12-35.svg)
![Slide 12 image](./images/slide-12-36.png)

### 第 13 页配图 / Slide 13 Images

![Slide 13 image](./images/slide-13-37.png)
![Slide 13 image](./images/slide-13-38.svg)
![Slide 13 image](./images/slide-13-39.png)

### 第 14 页配图 / Slide 14 Images

![Slide 14 image](./images/slide-14-40.png)
![Slide 14 image](./images/slide-14-41.svg)
![Slide 14 image](./images/slide-14-42.png)

## 4. 作业与复盘 / Homework and review

作业三选一的价值在于让同学选择不同深度：整理公开资料、完成基础枚举、或写一份小报告。重点是表达清楚方法、证据和结论。

讲者补充：好的报告能让别人复现你的路径，而不是只看到结果截图。

> English recap: A good report explains method, evidence, and conclusion clearly enough to reproduce.

### 相关课件图片 / Related Slide Images

### 第 15 页配图 / Slide 15 Images

![Slide 15 image](./images/slide-15-43.png)
![Slide 15 image](./images/slide-15-44.svg)

### 第 16 页配图 / Slide 16 Images

![Slide 16 image](./images/slide-16-45.png)
![Slide 16 image](./images/slide-16-46.svg)
![Slide 16 image](./images/slide-16-47.png)
![Slide 16 image](./images/slide-16-48.svg)
![Slide 16 image](./images/slide-16-49.jpeg)
![Slide 16 image](./images/slide-16-50.png)
![Slide 16 image](./images/slide-16-51.svg)
![Slide 16 image](./images/slide-16-52.png)
![Slide 16 image](./images/slide-16-53.svg)

### 第 17 页配图 / Slide 17 Images

![Slide 17 image](./images/slide-17-54.png)
![Slide 17 image](./images/slide-17-55.svg)
![Slide 17 image](./images/slide-17-56.jpeg)

## 课堂练习 / Practice

- 建立一份资产清单模板
- 对授权目标做一次 DNS 记录整理
- 解释自动化扫描为什么需要限速
