---
title: "08-攻击技术简介 / Introduction to Attack Techniques"
published: 2025-12-02
description: "08-攻击技术简介 / Introduction to Attack Techniques. 2023届 Simon Li / Class of 2023 Simon Li."
tags: ["Cybersecurity", "Club Course", "Slides"]
category: "Club Course"
draft: false
---

# 08-攻击技术简介

**English title:** Introduction to Attack Techniques

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-12-02

> 本文由社团课程 PPT 转换而来，保留原幻灯片文字与图片，便于网页阅读。
>
> This article was converted from the club course PowerPoint. Original slide text and images are preserved for web reading.

## 第 1 页 / Slide 1: S

### 原文 / Original Text

- imon Li
- 攻击技术简介
- TYcybersec
- 2025年12月
- 08

## 第 2 页 / Slide 2: 目录

### 原文 / Original Text

- 01.
- 简介
- 02.
- 攻击技术
- 03.
- 后期
- 04.
- 未来计划
- CONTENTS

## 第 3 页 / Slide 3: 01.

### 原文 / Original Text

- 简介
- [PART ONE]
- 第一部分
- 第二部分
- 第三部分
- 第四部分

## 第 4 页 / Slide 4: 01.

### 原文 / Original Text

- 简介

### 图片 / Images

![Slide 4 image](./images/slide-04-01.jpeg)
![Slide 4 image](./images/slide-04-02.png)

## 第 5 页 / Slide 5: 02.

### 原文 / Original Text

- 攻击技术
- [PART TWO]
- 第一部分
- 第二部分
- 第三部分
- 第四部分

## 第 6 页 / Slide 6: 02.

### 原文 / Original Text

- 攻击技术
- 01
- 02
- 03
- 谷歌
- 黑客
- Nmap
- 主机发现与端口发现
- W
- eb
- 应用架构
- OWASP10
- 大漏洞
- 枚举，漏洞发现，利用和利用后
- 向量投放，密码破解，持久化控制
- 分为：
- 主动
- /
- 被动信息收集
- W
- eb
- 应用攻击
- 客户端攻击

### 图片 / Images

![Slide 6 image](./images/slide-06-03.jpeg)

## 第 7 页 / Slide 7: 02.

### 原文 / Original Text

- 攻击技术

### 图片 / Images

![Slide 7 image](./images/slide-07-04.jpeg)
![Slide 7 image](./images/slide-07-05.jpeg)
![Slide 7 image](./images/slide-07-06.png)

## 第 8 页 / Slide 8: 02.

### 原文 / Original Text

- 攻击技术

### 图片 / Images

![Slide 8 image](./images/slide-08-07.jpeg)
![Slide 8 image](./images/slide-08-08.jpeg)
![Slide 8 image](./images/slide-08-09.png)

## 第 9 页 / Slide 9: 02-

### 原文 / Original Text

- Ex
- .
- 10
- 大漏洞
- (2021 ver.)
- A01:2021 -
- 访问控制缺失
- 访问控制漏洞是最常见的安全问题，可能导致未经授权的用户访问敏感数据或功能。解决方法包括严格的权限验证和路径保护。
- A02:2021 -
- 加密失败
- 加密相关的错误可能导致敏感数据泄露或系统被攻破。应确保使用强加密算法并正确管理密钥。
- A03:2021 -
- 注入漏洞
- 注入攻击（如
- SQL
- 注入）通过恶意输入破坏应用逻辑。防护措施包括使用参数化查询和输入验证。
- A04:2021 -
- 不安全设计
- 设计缺陷可能导致系统无法抵御潜在威胁。应采用威胁建模和安全设计模式。
- A05:2021 -
- 安全配置错误
- 配置错误（如启用调试模式）可能暴露系统漏洞。应定期审查配置并移除不必要的功能。
- A06:2021 -
- 使用含已知漏洞的组件
- 使用过时或存在漏洞的第三方库可能导致攻击。应及时更新依赖项并移除不必要的组件。
- A07:2021 -
- 身份验证和认证失败
- 身份验证机制的缺陷可能导致账户被盗用。应使用多因素认证和强密码策略。
- A08:2021 -
- 软件和数据完整性失败
- 未验证的更新或数据可能被篡改。应确保软件签名验证和
- CI/CD
- 管道的安全性。
- A09:2021 -
- 安全日志和监控失败
- 缺乏日志记录和监控可能导致攻击无法被及时发现。应启用全面的日志记录和告警机制。
- A10:2021 -
- 服务端请求伪造（
- SSRF
- ）
- 攻击者通过伪造请求访问内部资源。防护措施包括限制外部请求和验证输入。

### 图片 / Images

![Slide 9 image](./images/slide-09-10.jpeg)
![Slide 9 image](./images/slide-09-11.jpeg)

## 第 10 页 / Slide 10: 03.

### 原文 / Original Text

- 后期
- [PART THREE]
- 第一部分
- 第二部分
- 第三部分
- 第四部分

## 第 11 页 / Slide 11: 03.

### 原文 / Original Text

- 后期
- 权限提升
- 逃避检测技术
- 云渗透测试
- 战术思维
- Linux
- 权限提升（
- sudo
- 权限漏洞、
- cron
- 后台任务、
- Docker
- 漏洞）
- Windows
- 权限提升（服务路径、服务权限、默认配置）
- 逃避各种安全检测（
- IDS
- 、防火墙和杀毒软件），高级攻击技术，提高渗透隐身性
- 云渗透策略、技术和程序（比如
- AWS
- ）
- 知己知彼，百战不殆
- 了解对手，提高自身，动手实战，练习练习再练习
- Try Harder

### 图片 / Images

![Slide 11 image](./images/slide-11-12.png)
![Slide 11 image](./images/slide-11-13.svg)
![Slide 11 image](./images/slide-11-14.png)
![Slide 11 image](./images/slide-11-15.svg)
![Slide 11 image](./images/slide-11-16.png)
![Slide 11 image](./images/slide-11-17.svg)
![Slide 11 image](./images/slide-11-18.png)
![Slide 11 image](./images/slide-11-19.svg)

## 第 12 页 / Slide 12: 04.

### 原文 / Original Text

- 作业
- [PART FOUR]
- 第一部分
- 工作回顾
- 工作亮点
- 工作反思
- 未来计划
- 第二部分
- 第三部分
- 第四部分

### 图片 / Images

![Slide 12 image](./images/slide-12-20.png)

## 第 13 页 / Slide 13: 04.

### 原文 / Original Text

- 作业
- 用自己的语言整理
- 2025
- 年
- OWASP
- 10
- 大漏洞
- 截止日期：
- 本周六晚
- 23:59

### 图片 / Images

![Slide 13 image](./images/slide-13-21.jpeg)
![Slide 13 image](./images/slide-13-22.jpeg)
![Slide 13 image](./images/slide-13-23.jpeg)
![Slide 13 image](./images/slide-13-24.jpeg)

## 第 14 页 / Slide 14: 结束

### 原文 / Original Text

- …
- 了吗？
- TYcybersec
- 时间：2025年12月
- E
- nd…?
