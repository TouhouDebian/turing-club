---
title: "08 攻击技术简介 / Introduction to Attack Techniques"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-12-02
description: "攻击技术简介课用于建立攻防视角：攻击链通常包含信息收集、漏洞利用、权限扩大、维持访问和清理痕迹等环节。学习这些内容的目的，是更好地理解防御重点。 / This lesson introduces attack stages so learners can understand what defenders need to observe and prevent."
tags: ["Attack Techniques", "Reconnaissance", "Exploitation", "Social Engineering", "Vulnerability", "Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-12-02

> 这篇讲义按课堂主线重新梳理：先抓住概念，再看命令、结构图和练习任务。别急着开大招，先把地图点亮。

## 导读

攻击技术简介课用于建立攻防视角：攻击链通常包含信息收集、漏洞利用、权限扩大、维持访问和清理痕迹等环节。学习这些内容的目的，是更好地理解防御重点。

## 学习目标

- 认识常见攻击链阶段
- 理解攻击技术与防御措施的对应关系
- 强化授权实验和安全伦理

## 1. 攻击链不是一个按钮

真实攻击往往不是单个漏洞决定胜负，而是多个小失误被串联：资产暴露、弱口令、错误配置、过期组件和权限边界松动。

讲者补充：学习攻击技术时要同步问防御问题：这个阶段留下什么日志？管理员怎样更早发现？

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

![课程相关截图 1](./images/slide-04-01.jpeg)

## 2. 从侦察到利用

侦察阶段关注目标信息，利用阶段验证某个弱点是否能造成影响。课堂中应强调验证范围，只在授权靶场或实验环境中操作。

讲者补充：不要把“能跑 payload”当作理解。真正要掌握的是前提条件、触发点、影响范围和修复方式。

> 小旁白：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

![课程相关截图 1](./images/slide-07-05.jpeg)

![课程相关截图 2](./images/slide-08-08.jpeg)

## 3. 权限、维持与防御

权限提升和持久化会把一次漏洞变成长期风险。防御侧需要最小权限、补丁管理、日志监控和异常行为检测共同配合。

讲者补充：攻防是同一件事的两面。越能理解攻击者需要什么条件，越能设计有效防护。

> 小旁白：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

![课程相关截图 1](./images/slide-12-20.png)

![课程相关截图 2](./images/slide-13-21.jpeg)

## 4. 收束与复盘

本课的重点不是学会越界攻击，而是形成结构化复盘能力：目标是什么、路径是什么、证据在哪里、防线如何改进。

讲者补充：任何实操都必须限定在社团靶场、个人虚拟机或明确授权范围内。

> 小旁白：看到命令别只复制，顺手问一句：它读了什么、改了什么、留下了什么证据？

## 课堂练习

- 用表格列出攻击链每一步对应的防御措施
- 选择一个漏洞案例并写出前提条件
- 说明为什么授权范围比工具本身更重要

:::

:::section{.lang-en}

**Original PPT date:** 2025-12-02

> These notes follow the lesson path: understand the idea first, then read commands, diagrams, and practice tasks with evidence.

## Overview

This lesson introduces attack stages so learners can understand what defenders need to observe and prevent.

## Learning Goals

- Explain the main workflow behind Introduction to Attack Techniques.
- Use Attack Techniques, Reconnaissance, Exploitation to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. An attack chain is not one button

Attack chains combine small weaknesses. Defenders should map each stage to evidence.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

![Course-related screenshot 1](./images/slide-04-01.jpeg)

## 2. From reconnaissance to exploitation

Exploitation must be scoped and authorized. Understand prerequisites and impact.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not rush the special move: draw input, processing, and output first.

![Course-related screenshot 1](./images/slide-07-05.jpeg)

![Course-related screenshot 2](./images/slide-08-08.jpeg)

## 3. Privilege, persistence, and defense

Privilege and persistence turn incidents into long-term risk; defense needs layers.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

![Course-related screenshot 1](./images/slide-12-20.png)

![Course-related screenshot 2](./images/slide-13-21.jpeg)

## 4. Wrap-up

The ethical boundary is part of the technical lesson.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not just copy the command. Ask what it reads, what it changes, and what evidence it leaves.

## Practice

- Summarize the main workflow of Introduction to Attack Techniques in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
