---
title: "Cynthia Li 蜜罐 / Honeypots"
author: "2024届 Cynthia Li / Class of 2024 Cynthia Li"
published: 2026-01-21
description: "蜜罐课程从主动防御角度介绍如何用诱饵系统收集威胁情报。它把传统蜜罐、IoT 蜜罐、云蜜罐、AI 自适应防御和未来趋势连接起来。 / This honeypot lesson explains deception-based active defense, from traditional systems to IoT, cloud, AI, and future trends."
tags: ["Honeypot", "Threat Intelligence", "Deception", "Active Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-01-21

> 此文为codex改编往年课件而成

## 先把地图点亮

如果你是第一次接触这个主题，不用先背一堆名词。先抓住一个小问题：它解决什么麻烦？输入从哪里来？最后能留下什么证据？

蜜罐课程从主动防御角度介绍如何用诱饵系统收集威胁情报。它把传统蜜罐、IoT 蜜罐、云蜜罐、AI 自适应防御和未来趋势连接起来。

下面按“概念 -> 例子 -> 可操作的小任务”的顺序拆开。读完不一定立刻变成高手，但至少能知道下一步该点亮哪块地图。

## 你会学到

- 理解蜜罐的定义和价值
- 区分不同交互程度和部署类型
- 认识 AI 与蜜罐结合的机会和风险

## 1. 蜜罐为什么是主动防御

蜜罐的价值来自攻击者交互。合法用户通常不会访问诱饵资源，因此蜜罐流量信噪比高，适合发现扫描、攻击工具和行为链。

蜜罐不是替代防火墙，而是补充威胁感知能力。

> 小提示：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

![图示 1](./images/slide-02-04.png)

## 2. 分类与交互程度

物理、虚拟、生产型、研究型、低交互、高交互和混合蜜罐各有取舍。交互越深，情报越丰富，风险和维护成本也越高。

这里要特别强调隔离和监控，否则高交互蜜罐可能变成攻击跳板。

> 小提示：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

![图示 1](./images/slide-04-07.png)

## 3. AI、IoT 与分布式蜜网

AI 可以帮助蜜罐识别异常、动态调整诱饵特征，IoT 和云场景则扩大了部署范围。分布式蜜网能从多个区域收集趋势。

AI 不是魔法，模型解释性、对抗样本和资源消耗仍是现实挑战。

> 小提示：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

![图示 1](./images/slide-07-11.png)

## 4. 历史、挑战与未来

从早期诱捕实践到 AI 驱动系统，蜜罐一直在攻防博弈中演进。未来方向包括自适应欺骗、量子安全和更大规模的协同情报。

部署蜜罐还要考虑法律、隐私和组织流程，不只是技术搭建。

> 小提示：这一步像看关卡小地图：确认边界、资源和出口，再开始操作会稳很多。

## 动手小任务

- 比较低交互和高交互蜜罐
- 设计一个 IoT 蜜罐要模拟的协议
- 列出蜜罐部署的三个风险控制点

:::

:::section{.lang-en}

**Original PPT date:** 2026-01-21

> This article was adapted by Codex from previous course slides.

## Overview

If this topic is new to you, do not start by memorizing every term. First ask a smaller question: what problem does it solve, where does input enter, and what evidence can we observe?

This honeypot lesson explains deception-based active defense, from traditional systems to IoT, cloud, AI, and future trends.

The article follows a simple path: idea, example, and a small task you can reproduce safely.

## Learning Goals

- Explain the main workflow behind Honeypots.
- Use Honeypot, Threat Intelligence, Deception to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Why honeypots are active defense

Honeypots create high-signal interaction data for threat intelligence.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Errors are not the villain; they usually point at the layer that does not match.

![Illustration 1](./images/slide-02-04.png)

## 2. Types and interaction levels

More interaction means richer intelligence but higher risk.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

![Illustration 1](./images/slide-04-07.png)

## 3. AI, IoT, and distributed honeynets

AI improves adaptation but introduces explainability and adversarial risks.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Do not rush the special move: draw input, processing, and output first.

![Illustration 1](./images/slide-07-11.png)

## 4. History, challenges, and future

Honeypots combine technology, law, privacy, and operations.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Treat this like checking the minimap before a stage: scope, resources, and exits matter.

## Practice

- Summarize the main workflow of Honeypots in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
