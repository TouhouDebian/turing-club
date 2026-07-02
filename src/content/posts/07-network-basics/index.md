---
title: "07-网络基础 / Networking Basics"
published: 2025-11-10
description: "07-网络基础 / Networking Basics. 2023届 Simon Li / Class of 2023 Simon Li."
tags: ["Cybersecurity", "Club Course", "Slides"]
category: "Club Course"
draft: false
---

# 07-网络基础

**English title:** Networking Basics

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2025-11-10

> 本文由社团课程 PPT 转换而来，保留原幻灯片文字与图片，便于网页阅读。
>
> This article was converted from the club course PowerPoint. Original slide text and images are preserved for web reading.

## 第 1 页 / Slide 1: TYcybersec

### 原文 / Original Text

- 07
- 网络基础
- I
- nternet essentials
- Simon Li
- 汇报时间丨11/10

## 第 2 页 / Slide 2: 目录

### 原文 / Original Text

- CONTENT
- 01
- 网络模型
- Models of internet
- PAGE 丨 02
- 02
- 网络协议
- I
- nternet protocols
- 03
- 流量分析
- Traffic Analysis

## 第 3 页 / Slide 3: PART ONE

### 原文 / Original Text

- 网络模型
- M
- odels of internet

## 第 4 页 / Slide 4: 网络基础

### 图片 / Images

![Slide 4 image](./images/slide-04-01.png)

## 第 5 页 / Slide 5: 送快递

### 原文 / Original Text

- 7.
- 应用层（
- Application
- ）
- —
- 寄件人与收件人的沟通与服务请求
- 快递场景：寄件人决定要寄东西，填写寄件信息、选择快递服务（如同使用某个应用：邮箱、浏览器、
- FTP
- 等），向快递公司下单，收件人准备接收。
- 网络职责：为用户进程提供网络服务接口（
- HTTP
- 、
- SMTP
- 、
- FTP
- 、
- DNS
- 等）。处理应用数据的生成与使用。
- 示例：你在浏览器中点击“发送表单”，这是应用层开始的请求。
- 6.
- 表示层（
- Presentation
- ）
- —
- 打包与格式化、加密解密
- 快递场景：把物品按规则包装、标注易碎、压缩体积、写上说明或用保密箱封存（如果需要加密），确保收件人能读懂包装上的说明。
- 网络职责：负责数据格式转换、编码
- /
- 解码、压缩
- /
- 解压、加密
- /
- 解密（如
- TLS
- 、字符编码转换等）。
- 示例：对文件进行压缩和加密后再交给快递公司；到达后收件人解压与解密。
- 5.
- 会话层（
- Session
- ）
- —
- 约定交接与通话管理
- 快递场景：寄件人与收件人或快递员之间建立联系（约定送货时间、是否需要签收、现场验货），并在送达过程中维持通话或联络（若出现问题可以中止或重新安排）。
- 网络职责：建立、维护与终止会话（会话管理、同步点、对话控制）。
- 示例：视频会议的会话建立
- /
- 终止，或在大文件传输中设置检查点以便恢复传输。
- 4.
- 传输层（
- Transport
- ）
- —
- 快递的运送保障：分件、可靠投递与重传
- 快递场景：把大件物品拆成若干小包分别运输，快递公司保证每一小包按顺序或按规则送达；若某一小包丢失，会重新补发；还可选择加急或普通服务（不同可靠性与速度）。
- 网络职责：端到端的数据传输、可靠性控制、分段
- /
- 重组、流量控制与错误恢复（如
- TCP
- 、
- UDP
- ）。
- 示例：
- TCP
- 提供确认与重传（可靠），
- UDP
- 则类似不保证重发的廉价快递。
- 3.
- 网络层（
- Network
- ）
- —
- 路线选择与跨区域中转
- 快递场景：决定物品从城市
- A
- 到城市
- B
- 的路线，选择中转中心、航空或陆运，处理跨区、跨国边检、报关等，给包裹打上中转站的标签以便路由。
- 网络职责：寻址与路径选择（路由）、分组转发、跨网段传输（如
- IP
- 、路由协议）。
- 示例：
- IP
- 地址决定包裹的目的地，中间路由器决定包裹从哪个中转站通过。
- 2.
- 数据链路层（
- Data Link
- ）
- —
- 本地派送与错误检测
- 快递场景：在同一小区或同一中转站内的最后搬运（如从快递车到楼道），快递员核对包裹标签、检查是否损坏、在交接单上签字，防止在局部环节丢失或错发。
- 网络职责：在同一网络（物理链路）上可靠传输帧、帧边界、错误检测与纠正（如
- Ethernet
- 、
- MAC
- 地址、
- PPP
- ）。
- 示例：以太网交换机在局域网内转发帧，校验帧的完整性（
- CRC
- ）。
- 1.
- 物理层（
- Physical
- ）
- —
- 实际运输工具与通道
- 快递场景：道路、车辆、快递员的双手、升降设备、搬运带、楼梯等使物品得以从
- A
- 点物理移动到
- B
- 点；货物的尺寸、重量、包装适配运输工具。
- 网络职责：实际的物理媒介和信号传输（电缆、光纤、无线电波、接口标准、电压
- /
- 光信号等）。
- 示例：网线、光纤、
- Wi‑Fi
- 信号、电信基站等负责物理位元的传输。

## 第 6 页 / Slide 6: TCP/IP

### 原文 / Original Text

- 一文彻底搞懂
- OSI
- 七层模型和
- TCP/IP
- 四层模型
- _
- osi
- 网络协议
- -CSDN
- 博客

### 图片 / Images

![Slide 6 image](./images/slide-06-02.png)

## 第 7 页 / Slide 7: PART TWO

### 原文 / Original Text

- 网络协议
- I
- nternet protocols

## 第 8 页 / Slide 8: 网络协议

### 图片 / Images

![Slide 8 image](./images/slide-08-03.png)
![Slide 8 image](./images/slide-08-04.png)

## 第 9 页 / Slide 9: TCP/UDP

### 图片 / Images

![Slide 9 image](./images/slide-09-05.png)

## 第 10 页 / Slide 10: 应用层协议

### 图片 / Images

![Slide 10 image](./images/slide-10-06.png)

## 第 11 页 / Slide 11: PART THREE

### 原文 / Original Text

- 流量分析
- Traffic analysis

## 第 12 页 / Slide 12: 流量分析

### 图片 / Images

![Slide 12 image](./images/slide-12-07.png)

## 第 13 页 / Slide 13: ARP/DHCP/ICMP

### 图片 / Images

![Slide 13 image](./images/slide-13-08.png)
![Slide 13 image](./images/slide-13-09.png)

## 第 14 页 / Slide 14: 其他技术

### 图片 / Images

![Slide 14 image](./images/slide-14-10.png)
![Slide 14 image](./images/slide-14-11.png)

## 第 15 页 / Slide 15: VPN

### 图片 / Images

![Slide 15 image](./images/slide-15-12.png)

## 第 16 页 / Slide 16: TY

### 原文 / Original Text

- cybersec
- THANK YOU FOR LISTENING
- 感谢观看
- Simon Li
- 2025/11/12
