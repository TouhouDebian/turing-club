---
title: "05 密码学基础 / Cryptography Basics"
published: 2025-11-03
description: "密码学基础课介绍从古典密码到现代加密的核心思想。课堂目标不是手写完整算法，而是知道不同密码机制解决什么问题、不能解决什么问题。 / Cryptography basics introduce classical and modern ideas: confidentiality, integrity, authentication, and their limits."
tags: ["Cryptography", "Hash", "Symmetric Encryption", "Asymmetric Encryption", "Vigenere", "XOR"]
category: "Club Course"
draft: false
---

# 05 密码学基础

**English title:** Cryptography Basics

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-11-03

**关键词 / Keywords:** #Cryptography #Hash #Symmetric-Encryption #Asymmetric-Encryption #Vigenere #XOR

> 本文由社团课程 PPT 整理为阅读版讲义：保留原课件图片，并补充课堂讲解、学习目标和练习方向。
>
> This article turns the original slides into readable course notes while preserving slide images and adding presenter-style explanations.

## 导读 / Overview

密码学基础课介绍从古典密码到现代加密的核心思想。课堂目标不是手写完整算法，而是知道不同密码机制解决什么问题、不能解决什么问题。

> English overview: Cryptography basics introduce classical and modern ideas: confidentiality, integrity, authentication, and their limits.

## 学习目标 / Learning Goals

- 理解对称加密、非对称加密和哈希的区别
- 认识 Vigenere、XOR 等基础思想
- 建立不要自创密码算法的安全意识

## 1. 密码学解决什么问题 / What cryptography solves

密码学常见目标包括保密性、完整性、身份认证和不可否认性。不同算法负责不同目标，把它们混用会导致错误的安全感。

讲者补充：加密不等于安全。密钥管理、随机数、协议设计和实现细节同样会决定结果。

> English recap: Cryptography supports confidentiality, integrity, authentication, and non-repudiation, but only when used correctly.

### 相关课件图片 / Related Slide Images

### 第 1 页配图 / Slide 1 Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.png)
![Slide 1 image](./images/slide-01-03.png)
![Slide 1 image](./images/slide-01-04.png)
![Slide 1 image](./images/slide-01-05.png)
![Slide 1 image](./images/slide-01-06.svg)
![Slide 1 image](./images/slide-01-07.png)
![Slide 1 image](./images/slide-01-08.svg)
![Slide 1 image](./images/slide-01-09.png)
![Slide 1 image](./images/slide-01-10.svg)

### 第 2 页配图 / Slide 2 Images

![Slide 2 image](./images/slide-02-11.png)
![Slide 2 image](./images/slide-02-12.png)
![Slide 2 image](./images/slide-02-13.png)
![Slide 2 image](./images/slide-02-14.png)

### 第 3 页配图 / Slide 3 Images

![Slide 3 image](./images/slide-03-15.png)
![Slide 3 image](./images/slide-03-16.png)
![Slide 3 image](./images/slide-03-17.png)
![Slide 3 image](./images/slide-03-18.png)
![Slide 3 image](./images/slide-03-19.png)
![Slide 3 image](./images/slide-03-20.png)
![Slide 3 image](./images/slide-03-21.svg)

### 第 4 页配图 / Slide 4 Images

![Slide 4 image](./images/slide-04-22.png)
![Slide 4 image](./images/slide-04-23.svg)
![Slide 4 image](./images/slide-04-24.png)
![Slide 4 image](./images/slide-04-25.svg)
![Slide 4 image](./images/slide-04-26.png)

## 2. 对称与非对称加密 / Symmetric and asymmetric encryption

对称加密速度快，但双方要共享同一把密钥；非对称加密便于密钥交换和签名，但计算成本更高。现代协议通常把两者组合使用。

讲者补充：TLS 等协议不是只用一种算法，而是把密钥交换、身份验证、对称加密和完整性校验组织成流程。

> English recap: Modern protocols combine symmetric and asymmetric techniques.

### 相关课件图片 / Related Slide Images

### 第 5 页配图 / Slide 5 Images

![Slide 5 image](./images/slide-05-27.png)
![Slide 5 image](./images/slide-05-28.png)
![Slide 5 image](./images/slide-05-29.png)
![Slide 5 image](./images/slide-05-30.png)
![Slide 5 image](./images/slide-05-31.png)
![Slide 5 image](./images/slide-05-32.png)
![Slide 5 image](./images/slide-05-33.svg)
![Slide 5 image](./images/slide-05-34.png)
![Slide 5 image](./images/slide-05-35.png)

### 第 6 页配图 / Slide 6 Images

![Slide 6 image](./images/slide-06-36.png)
![Slide 6 image](./images/slide-06-37.svg)
![Slide 6 image](./images/slide-06-38.png)
![Slide 6 image](./images/slide-06-39.svg)
![Slide 6 image](./images/slide-06-40.png)

### 第 7 页配图 / Slide 7 Images

![Slide 7 image](./images/slide-07-41.jpeg)
![Slide 7 image](./images/slide-07-42.png)
![Slide 7 image](./images/slide-07-43.svg)
![Slide 7 image](./images/slide-07-44.png)
![Slide 7 image](./images/slide-07-45.svg)
![Slide 7 image](./images/slide-07-46.png)

## 3. Vigenere 与 XOR / Vigenere and XOR

Vigenere 展示了“密钥重复使用”带来的模式问题，XOR 展示了位运算在加密和编码中的基础作用。它们适合帮助初学者理解密钥与明文的关系。

讲者补充：在 CTF 中看到 XOR，不要只想爆破，也要观察明文格式、文件头和重复周期。

> English recap: Classical examples reveal how keys interact with plaintext and why patterns matter.

### 相关课件图片 / Related Slide Images

### 第 8 页配图 / Slide 8 Images

![Slide 8 image](./images/slide-08-47.png)
![Slide 8 image](./images/slide-08-48.png)
![Slide 8 image](./images/slide-08-49.png)
![Slide 8 image](./images/slide-08-50.png)
![Slide 8 image](./images/slide-08-51.png)
![Slide 8 image](./images/slide-08-52.png)
![Slide 8 image](./images/slide-08-53.svg)

### 第 9 页配图 / Slide 9 Images

![Slide 9 image](./images/slide-09-54.png)
![Slide 9 image](./images/slide-09-55.svg)
![Slide 9 image](./images/slide-09-56.png)
![Slide 9 image](./images/slide-09-57.svg)
![Slide 9 image](./images/slide-09-58.png)
![Slide 9 image](./images/slide-09-59.svg)
![Slide 9 image](./images/slide-09-60.png)

### 第 10 页配图 / Slide 10 Images

![Slide 10 image](./images/slide-10-61.jpeg)
![Slide 10 image](./images/slide-10-62.png)
![Slide 10 image](./images/slide-10-63.svg)
![Slide 10 image](./images/slide-10-64.png)
![Slide 10 image](./images/slide-10-65.svg)
![Slide 10 image](./images/slide-10-66.png)
![Slide 10 image](./images/slide-10-67.png)

### 第 11 页配图 / Slide 11 Images

![Slide 11 image](./images/slide-11-68.png)
![Slide 11 image](./images/slide-11-69.png)
![Slide 11 image](./images/slide-11-70.png)
![Slide 11 image](./images/slide-11-71.png)
![Slide 11 image](./images/slide-11-72.png)
![Slide 11 image](./images/slide-11-73.png)
![Slide 11 image](./images/slide-11-74.svg)

### 第 12 页配图 / Slide 12 Images

![Slide 12 image](./images/slide-12-75.png)
![Slide 12 image](./images/slide-12-76.svg)
![Slide 12 image](./images/slide-12-77.png)
![Slide 12 image](./images/slide-12-78.svg)
![Slide 12 image](./images/slide-12-79.jpeg)
![Slide 12 image](./images/slide-12-80.jpeg)
![Slide 12 image](./images/slide-12-81.jpeg)
![Slide 12 image](./images/slide-12-82.png)

### 第 13 页配图 / Slide 13 Images

![Slide 13 image](./images/slide-13-83.jpeg)
![Slide 13 image](./images/slide-13-84.jpeg)
![Slide 13 image](./images/slide-13-85.jpeg)
![Slide 13 image](./images/slide-13-86.png)
![Slide 13 image](./images/slide-13-87.svg)
![Slide 13 image](./images/slide-13-88.png)
![Slide 13 image](./images/slide-13-89.svg)
![Slide 13 image](./images/slide-13-90.png)
![Slide 13 image](./images/slide-13-91.png)
![Slide 13 image](./images/slide-13-92.png)

### 第 14 页配图 / Slide 14 Images

![Slide 14 image](./images/slide-14-93.png)
![Slide 14 image](./images/slide-14-94.svg)
![Slide 14 image](./images/slide-14-95.png)
![Slide 14 image](./images/slide-14-96.svg)
![Slide 14 image](./images/slide-14-97.jpeg)
![Slide 14 image](./images/slide-14-98.jpeg)
![Slide 14 image](./images/slide-14-99.jpeg)
![Slide 14 image](./images/slide-14-100.jpeg)
![Slide 14 image](./images/slide-14-101.png)
![Slide 14 image](./images/slide-14-102.png)
![Slide 14 image](./images/slide-14-103.png)

## 4. 作业与复习 / Homework and review

复习密码学时建议按问题分类：我要隐藏内容、验证完整性、确认身份，还是交换密钥。先确认目标，再选择机制。

讲者补充：不要在真实项目中自创加密方案。学习可以复现，生产要使用成熟库和成熟协议。

> English recap: Choose cryptographic mechanisms by security goal, not by name recognition.

### 相关课件图片 / Related Slide Images

### 第 15 页配图 / Slide 15 Images

![Slide 15 image](./images/slide-15-104.png)
![Slide 15 image](./images/slide-15-105.png)
![Slide 15 image](./images/slide-15-106.png)
![Slide 15 image](./images/slide-15-107.png)
![Slide 15 image](./images/slide-15-108.png)
![Slide 15 image](./images/slide-15-109.png)
![Slide 15 image](./images/slide-15-110.svg)

### 第 16 页配图 / Slide 16 Images

![Slide 16 image](./images/slide-16-111.jpeg)
![Slide 16 image](./images/slide-16-112.png)
![Slide 16 image](./images/slide-16-113.svg)
![Slide 16 image](./images/slide-16-114.png)
![Slide 16 image](./images/slide-16-115.svg)

### 第 17 页配图 / Slide 17 Images

![Slide 17 image](./images/slide-17-116.png)
![Slide 17 image](./images/slide-17-117.png)
![Slide 17 image](./images/slide-17-118.png)
![Slide 17 image](./images/slide-17-119.png)
![Slide 17 image](./images/slide-17-120.png)
![Slide 17 image](./images/slide-17-121.svg)
![Slide 17 image](./images/slide-17-122.png)
![Slide 17 image](./images/slide-17-123.svg)
![Slide 17 image](./images/slide-17-124.png)
![Slide 17 image](./images/slide-17-125.svg)

## 课堂练习 / Practice

- 用自己的话解释哈希和加密的区别
- 完成一个简单 XOR 还原练习
- 列出 TLS 中至少两个密码学机制
