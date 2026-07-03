---
title: "Cynthia Li 蜜罐 / Honeypots"
published: 2026-01-21
description: "蜜罐课程从主动防御角度介绍如何用诱饵系统收集威胁情报。它把传统蜜罐、IoT 蜜罐、云蜜罐、AI 自适应防御和未来趋势连接起来。 / This honeypot lesson explains deception-based active defense, from traditional systems to IoT, cloud, AI, and future trends."
tags: ["Honeypot", "Threat Intelligence", "Deception", "IoT Security", "AI Security", "Active Defense"]
category: "Club Course"
draft: false
---

:::section{.lang-zh}

**作者：** 2024届 Cynthia Li

**原 PPT 日期：** 2026-01-21

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

蜜罐课程从主动防御角度介绍如何用诱饵系统收集威胁情报。它把传统蜜罐、IoT 蜜罐、云蜜罐、AI 自适应防御和未来趋势连接起来。

## 学习目标

- 理解蜜罐的定义和价值
- 区分不同交互程度和部署类型
- 认识 AI 与蜜罐结合的机会和风险

## 1. 蜜罐为什么是主动防御

蜜罐的价值来自攻击者交互。合法用户通常不会访问诱饵资源，因此蜜罐流量信噪比高，适合发现扫描、攻击工具和行为链。

讲者补充：蜜罐不是替代防火墙，而是补充威胁感知能力。

### 相关图片

![课程相关截图 1](./images/slide-01-02.png)
![课程相关截图 2](./images/slide-02-04.png)

## 2. 分类与交互程度

物理、虚拟、生产型、研究型、低交互、高交互和混合蜜罐各有取舍。交互越深，情报越丰富，风险和维护成本也越高。

讲者补充：课堂上要特别强调隔离和监控，否则高交互蜜罐可能变成攻击跳板。

### 相关图片

![课程相关截图 1](./images/slide-04-07.png)

## 3. AI、IoT 与分布式蜜网

AI 可以帮助蜜罐识别异常、动态调整诱饵特征，IoT 和云场景则扩大了部署范围。分布式蜜网能从多个区域收集趋势。

讲者补充：AI 不是魔法，模型解释性、对抗样本和资源消耗仍是现实挑战。

### 相关图片

![课程相关截图 1](./images/slide-06-09.png)
![课程相关截图 2](./images/slide-07-11.png)
![课程相关截图 3](./images/slide-08-13.png)

## 4. 历史、挑战与未来

从早期诱捕实践到 AI 驱动系统，蜜罐一直在攻防博弈中演进。未来方向包括自适应欺骗、量子安全和更大规模的协同情报。

讲者补充：部署蜜罐还要考虑法律、隐私和组织流程，不只是技术搭建。

### 相关图片

![课程相关截图 1](./images/slide-12-24.png)

## 课堂练习

- 比较低交互和高交互蜜罐
- 设计一个 IoT 蜜罐要模拟的协议
- 列出蜜罐部署的三个风险控制点

:::

:::section{.lang-en}

**Author:** Class of 2024 Cynthia Li

**Original PPT date:** 2026-01-21

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

This honeypot lesson explains deception-based active defense, from traditional systems to IoT, cloud, AI, and future trends.

## Learning Goals

- Understand the core ideas of Honeypots.
- Connect Honeypot, Threat Intelligence, Deception to practical security work.
- Practice only in authorized, repeatable lab environments.

## 1. Why honeypots are active defense

Honeypots create high-signal interaction data for threat intelligence.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-01-02.png)
![Course-related screenshot 2](./images/slide-02-04.png)

## 2. Types and interaction levels

More interaction means richer intelligence but higher risk.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-04-07.png)

## 3. AI, IoT, and distributed honeynets

AI improves adaptation but introduces explainability and adversarial risks.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-06-09.png)
![Course-related screenshot 2](./images/slide-07-11.png)
![Course-related screenshot 3](./images/slide-08-13.png)

## 4. History, challenges, and future

Honeypots combine technology, law, privacy, and operations.

Read this section as a workflow, not as a tool list. Identify the input, the system boundary, the command or protocol involved, and the evidence that proves the result.

### Related Images

![Course-related screenshot 1](./images/slide-12-24.png)

## Practice

- Summarize the main workflow of Honeypots in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
