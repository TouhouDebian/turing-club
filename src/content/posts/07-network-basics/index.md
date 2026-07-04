---
title: "07 网络基础 / Networking Basics"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-11-17
description: "网络基础课从“送快递”的比喻讲起，把 TCP/IP、常见协议、流量分析和 VPN 串成一张地图。安全学习离不开网络，因为攻击和防御都需要在流量中留下痕迹。 / Networking basics connect TCP/IP, protocols, traffic analysis, and VPN through the idea of delivering packets."
tags: ["Networking", "TCP/IP", "TCP", "UDP", "DNS", "HTTP", "Packet Analysis"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-11-17

> 此文为codex改编往年课件而成

## 先把地图点亮

如果你是第一次接触这个主题，不用先背一堆名词。先抓住一个小问题：它解决什么麻烦？输入从哪里来？最后能留下什么证据？

网络基础课从“送快递”的比喻讲起，把 TCP/IP、常见协议、流量分析和 VPN 串成一张地图。安全学习离不开网络，因为攻击和防御都需要在流量中留下痕迹。

下面按“概念 -> 例子 -> 可操作的小任务”的顺序拆开。读完不一定立刻变成高手，但至少能知道下一步该点亮哪块地图。

## 你会学到

- 理解分层模型和 TCP/IP 的基本作用
- 区分 TCP、UDP 与常见应用层协议
- 知道流量分析能观察到什么

## 1. 网络像送快递

把数据包想成快递，有寄件人、收件人、路线和内容。IP 负责寻址，端口帮助找到应用，协议规定双方如何交流。

比喻不是为了取代细节，而是帮助你在看到抓包时知道每一层大概负责什么。

> 小提示：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

![图示 1](./images/slide-06-02.png)

## 2. TCP、UDP 与应用层协议

TCP 注重可靠连接，UDP 注重轻量快速。DNS、HTTP 等应用层协议建立在这些传输方式之上，决定具体业务如何表达请求和响应。

排查网络问题时先问“连得上吗”，再问“协议说得对吗”。这两个问题分别对应不同层次。

> 小提示：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

![图示 1](./images/slide-08-03.png)

## 3. 流量分析与辅助技术

ARP、DHCP、ICMP、VPN 等技术常出现在排障和安全分析中。流量分析不是偷看内容，而是通过包结构、方向、频率和错误信息理解系统状态。

抓包时要在授权网络中进行，并尽量过滤范围，避免采集无关隐私数据。

> 小提示：先别急着开大招，把输入、处理、输出连成一条线，很多问题会自己露头。

## 动手小任务

- 解释 TCP 和 UDP 的差异
- 抓一次 DNS 查询并标出请求和响应
- 画出访问一个网站时可能经过的协议

:::

:::section{.lang-en}

**Original PPT date:** 2025-11-17

> This article was adapted by Codex from previous course slides.

## Overview

If this topic is new to you, do not start by memorizing every term. First ask a smaller question: what problem does it solve, where does input enter, and what evidence can we observe?

Networking basics connect TCP/IP, protocols, traffic analysis, and VPN through the idea of delivering packets.

The article follows a simple path: idea, example, and a small task you can reproduce safely.

## Learning Goals

- Explain the main workflow behind Networking Basics.
- Use Networking, TCP/IP, TCP to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Networking as delivery

Packets have addresses, routes, ports, and protocol rules.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Errors are not the villain; they usually point at the layer that does not match.

![Illustration 1](./images/slide-06-02.png)

## 2. TCP, UDP, and application protocols

Transport and application protocols answer different questions.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

![Illustration 1](./images/slide-08-03.png)

## 3. Traffic analysis and supporting technologies

Traffic analysis turns packets into evidence while respecting authorization and privacy.

Read it as a small investigation: what enters the system, what changes inside it, and what evidence proves the result?

> Side note: Do not rush the special move: draw input, processing, and output first.

## Practice

- Summarize the main workflow of Networking Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
