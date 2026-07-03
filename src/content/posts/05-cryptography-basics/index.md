---
title: "05 密码学基础 / Cryptography Basics"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-11-03
description: "密码学基础课介绍从古典密码到现代加密的核心思想。课堂目标不是手写完整算法，而是知道不同密码机制解决什么问题、不能解决什么问题。 / Cryptography basics introduce classical and modern ideas: confidentiality, integrity, authentication, and their limits."
tags: ["Cryptography", "Hash", "Symmetric Encryption", "Asymmetric Encryption", "Vigenere", "XOR"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2025-11-03

> 本文由社团课程 PPT 整理为阅读版讲义，只保留与正文知识点相关的截图、命令行画面、表格或结构图，并补充课堂讲解、学习目标和练习方向。

## 导读

密码学基础课介绍从古典密码到现代加密的核心思想。课堂目标不是手写完整算法，而是知道不同密码机制解决什么问题、不能解决什么问题。

## 学习目标

- 理解对称加密、非对称加密和哈希的区别
- 认识 Vigenere、XOR 等基础思想
- 建立不要自创密码算法的安全意识

## 1. 密码学解决什么问题

密码学常见目标包括保密性、完整性、身份认证和不可否认性。不同算法负责不同目标，把它们混用会导致错误的安全感。

讲者补充：加密不等于安全。密钥管理、随机数、协议设计和实现细节同样会决定结果。

### 相关图片

![课程相关截图 1](./images/slide-02-13.png)

## 2. 对称与非对称加密

对称加密速度快，但双方要共享同一把密钥；非对称加密便于密钥交换和签名，但计算成本更高。现代协议通常把两者组合使用。

讲者补充：TLS 等协议不是只用一种算法，而是把密钥交换、身份验证、对称加密和完整性校验组织成流程。

## 3. Vigenere 与 XOR

Vigenere 展示了“密钥重复使用”带来的模式问题，XOR 展示了位运算在加密和编码中的基础作用。它们适合帮助初学者理解密钥与明文的关系。

讲者补充：在 CTF 中看到 XOR，不要只想爆破，也要观察明文格式、文件头和重复周期。

## 4. 作业与复习

复习密码学时建议按问题分类：我要隐藏内容、验证完整性、确认身份，还是交换密钥。先确认目标，再选择机制。

讲者补充：不要在真实项目中自创加密方案。学习可以复现，生产要使用成熟库和成熟协议。

## 课堂练习

- 用自己的话解释哈希和加密的区别
- 完成一个简单 XOR 还原练习
- 列出 TLS 中至少两个密码学机制

:::

:::section{.lang-en}

**Original PPT date:** 2025-11-03

> This article turns the original slides into readable course notes. It keeps only content-related screenshots, terminal captures, tables, or diagrams, and adds presenter-style explanations.

## Overview

Cryptography basics introduce classical and modern ideas: confidentiality, integrity, authentication, and their limits.

## Learning Goals

- Explain the main workflow behind Cryptography Basics.
- Use Cryptography, Hash, Symmetric Encryption to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. What cryptography solves

Cryptography supports confidentiality, integrity, authentication, and non-repudiation, but only when used correctly.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

### Related Images

![Course-related screenshot 1](./images/slide-02-13.png)

## 2. Symmetric and asymmetric encryption

Modern protocols combine symmetric and asymmetric techniques.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 3. Vigenere and XOR

Classical examples reveal how keys interact with plaintext and why patterns matter.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## 4. Homework and review

Choose cryptographic mechanisms by security goal, not by name recognition.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

## Practice

- Summarize the main workflow of Cryptography Basics in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
