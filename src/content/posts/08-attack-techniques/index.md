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

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

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

### 相关图解

> 这些图是为了辅助理解结构、命令输出或表格关系；装饰图已经尽量排除。

![课程相关截图 1](./images/slide-04-01-square.png)

## 2. 从侦察到利用

侦察阶段关注目标信息，利用阶段验证某个弱点是否能造成影响。课堂中应强调验证范围，只在授权靶场或实验环境中操作。

讲者补充：不要把“能跑 payload”当作理解。真正要掌握的是前提条件、触发点、影响范围和修复方式。

> 小旁白：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 6 页：主机发现与端口发现

- 主机发现与端口发现
- 枚举，漏洞发现，利用和利用后
- 向量投放，密码破解，持久化控制
- 被动信息收集

#### 第 9 页：访问控制缺失

- 访问控制缺失
- 访问控制漏洞是最常见的安全问题，可能导致未经授权的用户访问敏感数据或功能。解决方法包括严格的权限验证和路径保护。
- 加密相关的错误可能导致敏感数据泄露或系统被攻破。应确保使用强加密算法并正确管理密钥。
- SQL 注入）通过恶意输入破坏应用逻辑。防护措施包括使用参数化查询和输入验证。
- 设计缺陷可能导致系统无法抵御潜在威胁。应采用威胁建模和安全设计模式。
- 安全配置错误
- 配置错误（如启用调试模式）可能暴露系统漏洞。应定期审查配置并移除不必要的功能。
- 使用含已知漏洞的组件

### 相关图解

> 这些图是为了辅助理解结构、命令输出或表格关系；装饰图已经尽量排除。

![课程相关截图 1](./images/slide-07-05-square.png)
![课程相关截图 2](./images/slide-08-08-square.png)

## 3. 权限、维持与防御

权限提升和持久化会把一次漏洞变成长期风险。防御侧需要最小权限、补丁管理、日志监控和异常行为检测共同配合。

讲者补充：攻防是同一件事的两面。越能理解攻击者需要什么条件，越能设计有效防护。

> 小旁白：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 11 页：逃避检测技术

- 逃避检测技术
- Windows 权限提升（服务路径、服务权限、默认配置）
- 逃避各种安全检测（
- 、防火墙和杀毒软件），高级攻击技术，提高渗透隐身性
- 云渗透策略、技术和程序（比如
- 知己知彼，百战不殆
- 了解对手，提高自身，动手实战，练习练习再练习

### 相关图解

> 这些图是为了辅助理解结构、命令输出或表格关系；装饰图已经尽量排除。

![课程相关截图 1](./images/slide-12-20-square.png)
![课程相关截图 2](./images/slide-13-21-square.png)

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

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

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

### Related Visuals

> These visuals are kept for structure, command output, or tables; decorative images are intentionally filtered out.

![Course-related screenshot 1](./images/slide-04-01-square.png)

## 2. From reconnaissance to exploitation

Exploitation must be scoped and authorized. Understand prerequisites and impact.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not rush the special move: draw input, processing, and output first.

### Related Visuals

> These visuals are kept for structure, command output, or tables; decorative images are intentionally filtered out.

![Course-related screenshot 1](./images/slide-07-05-square.png)
![Course-related screenshot 2](./images/slide-08-08-square.png)

## 3. Privilege, persistence, and defense

Privilege and persistence turn incidents into long-term risk; defense needs layers.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

### Related Visuals

> These visuals are kept for structure, command output, or tables; decorative images are intentionally filtered out.

![Course-related screenshot 1](./images/slide-12-20-square.png)
![Course-related screenshot 2](./images/slide-13-21-square.png)

## 4. Wrap-up

The ethical boundary is part of the technical lesson.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not just copy the command. Ask what it reads, what it changes, and what evidence it leaves.

## Practice

- Summarize the main workflow of Introduction to Attack Techniques in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
