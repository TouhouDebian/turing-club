---
title: "08 攻击技术简介 / Introduction to Attack Techniques"
published: 2025-12-02
description: "攻击技术简介课用于建立攻防视角：攻击链通常包含信息收集、漏洞利用、权限扩大、维持访问和清理痕迹等环节。学习这些内容的目的，是更好地理解防御重点。 / This lesson introduces attack stages so learners can understand what defenders need to observe and prevent."
tags: ["Attack Techniques", "Reconnaissance", "Exploitation", "Social Engineering", "Vulnerability", "Defense"]
category: "Club Course"
draft: false
---

# 08 攻击技术简介

**English title:** Introduction to Attack Techniques

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-12-02

**关键词 / Keywords:** #Attack-Techniques #Reconnaissance #Exploitation #Social-Engineering #Vulnerability #Defense

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

攻击技术简介课用于建立攻防视角：攻击链通常包含信息收集、漏洞利用、权限扩大、维持访问和清理痕迹等环节。学习这些内容的目的，是更好地理解防御重点。

> English overview: This lesson introduces attack stages so learners can understand what defenders need to observe and prevent.

## 学习目标 / Learning Goals

- 认识常见攻击链阶段
- 理解攻击技术与防御措施的对应关系
- 强化授权实验和安全伦理

## 1. 攻击链不是一个按钮 / An attack chain is not one button

真实攻击往往不是单个漏洞决定胜负，而是多个小失误被串联：资产暴露、弱口令、错误配置、过期组件和权限边界松动。

讲者补充：学习攻击技术时要同步问防御问题：这个阶段留下什么日志？管理员怎样更早发现？

> English recap: Attack chains combine small weaknesses. Defenders should map each stage to evidence.

### 相关课件图片 / Related Slide Images

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-01.jpeg)
![Slide 4 image](./images/slide-04-02.png)

## 2. 从侦察到利用 / From reconnaissance to exploitation

侦察阶段关注目标信息，利用阶段验证某个弱点是否能造成影响。课堂中应强调验证范围，只在授权靶场或实验环境中操作。

讲者补充：不要把“能跑 payload”当作理解。真正要掌握的是前提条件、触发点、影响范围和修复方式。

> English recap: Exploitation must be scoped and authorized. Understand prerequisites and impact.

### 相关课件图片 / Related Slide Images

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-03.jpeg)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-04.jpeg)
![Slide 7 image](./images/slide-07-05.jpeg)
![Slide 7 image](./images/slide-07-06.png)

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-07.jpeg)
![Slide 8 image](./images/slide-08-08.jpeg)
![Slide 8 image](./images/slide-08-09.png)

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-10.jpeg)
![Slide 9 image](./images/slide-09-11.jpeg)

## 3. 权限、维持与防御 / Privilege, persistence, and defense

权限提升和持久化会把一次漏洞变成长期风险。防御侧需要最小权限、补丁管理、日志监控和异常行为检测共同配合。

讲者补充：攻防是同一件事的两面。越能理解攻击者需要什么条件，越能设计有效防护。

> English recap: Privilege and persistence turn incidents into long-term risk; defense needs layers.

### 相关课件图片 / Related Slide Images

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-12.png)
![Slide 11 image](./images/slide-11-13.svg)
![Slide 11 image](./images/slide-11-14.png)
![Slide 11 image](./images/slide-11-15.svg)
![Slide 11 image](./images/slide-11-16.png)
![Slide 11 image](./images/slide-11-17.svg)
![Slide 11 image](./images/slide-11-18.png)
![Slide 11 image](./images/slide-11-19.svg)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-20.png)

### 第 13 页配图 / Slide 13 Images

![Slide 13 image](./images/slide-13-21.jpeg)
![Slide 13 image](./images/slide-13-22.jpeg)
![Slide 13 image](./images/slide-13-23.jpeg)
![Slide 13 image](./images/slide-13-24.jpeg)

## 4. 收束与复盘 / Wrap-up

本课的重点不是学会越界攻击，而是形成结构化复盘能力：目标是什么、路径是什么、证据在哪里、防线如何改进。

讲者补充：任何实操都必须限定在社团靶场、个人虚拟机或明确授权范围内。

> English recap: The ethical boundary is part of the technical lesson.

## 课堂练习 / Practice

- 用表格列出攻击链每一步对应的防御措施
- 选择一个漏洞案例并写出前提条件
- 说明为什么授权范围比工具本身更重要
