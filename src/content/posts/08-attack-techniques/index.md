---
title: "08 攻击技术简介 / Introduction to Attack Techniques"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-12-02
description: "攻击技术简介课用于建立攻防视角：攻击链通常包含信息收集、漏洞利用、权限扩大、维持访问和清理痕迹等环节。学习这些内容的目的，是更好地理解防御重点。 / This lesson introduces attack stages so learners can understand what defenders need to observe and prevent."
image: "./images/slide-04-01.jpeg"
tags: ["Attack Techniques", "Reconnaissance", "Exploitation", "Social Engineering", "Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-12-02

> 此文为codex改编往年课件而成

## 课程简介

攻击技术简介课用于建立攻防视角：攻击链通常包含信息收集、漏洞利用、权限扩大、维持访问和清理痕迹等环节。学习这些内容的目的，是更好地理解防御重点。

## 你会学到

- 认识常见攻击链阶段
- 理解攻击技术与防御措施的对应关系
- 强化授权实验和安全伦理

## 1. 攻击链不是一个按钮

攻击链可能串联多个问题，例如资产暴露、弱口令、错误配置、过期组件和过宽的权限。

学习攻击技术时要同步问防御问题：这个阶段留下什么日志？管理员怎样更早发现？

## 2. 从侦察到利用

侦察阶段关注目标信息，利用阶段验证某个弱点是否能造成影响。课堂中应强调验证范围，只在授权靶场或实验环境中操作。

仅能运行 payload 无法说明已经理解漏洞。复现记录还应包含前提条件、触发点、影响范围和修复方式。

## 3. 权限、维持与防御

权限提升和持久化会把一次漏洞变成长期风险。防御侧需要最小权限、补丁管理、日志监控和异常行为检测共同配合。

攻防是同一件事的两面。越能理解攻击者需要什么条件，越能设计有效防护。

![图示 1](./images/slide-12-20.png)

![图示 2](./images/slide-13-21.jpeg)

## 4. 收束与复盘

本课只在授权环境中进行。复盘需要写清目标、测试路径、证据和防护改进方案。

任何实操都必须限定在社团靶场、个人虚拟机或明确授权范围内。

## 动手小任务

- 用表格列出攻击链每一步对应的防御措施
- 选择一个漏洞案例并写出前提条件
- 说明为什么授权范围比工具本身更重要

:::

:::section{.lang-en}

**Original PPT date:** 2025-12-02

> This article was adapted by Codex from previous course slides.

## Overview

This lesson introduces attack stages so learners can understand what defenders need to observe and prevent.

## 1. An attack chain is not one button

Attack chains combine small weaknesses. Defenders should map each stage to evidence.

## 2. From reconnaissance to exploitation

Exploitation must be scoped and authorized. Understand prerequisites and impact.

## 3. Privilege, persistence, and defense

Privilege and persistence turn incidents into long-term risk; defense needs layers.

![Illustration 1](./images/slide-12-20.png)

![Illustration 2](./images/slide-13-21.jpeg)

## 4. Wrap-up

The ethical boundary is part of the technical lesson.

:::
