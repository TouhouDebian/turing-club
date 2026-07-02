---
title: "11-Web渗透 / Web Penetration Testing"
published: 2026-01-26
description: "11-Web渗透 / Web Penetration Testing. 2023届 Simon Li / Class of 2023 Simon Li."
tags: ["Cybersecurity", "Club Course", "Slides"]
category: "Club Course"
draft: false
---

# 11-Web渗透

**English title:** Web Penetration Testing

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2026-01-26

> 本文由社团课程 PPT 转换而来，保留原幻灯片文字与图片，便于网页阅读。
>
> This article was converted from the club course PowerPoint. Original slide text and images are preserved for web reading.

## 第 1 页 / Slide 1: TYC

### 原文 / Original Text

- ybersec
- 11.
- Si
- mon Li
- 时间：2026.01.26
- WEB
- 渗透
- WEB ATTACKATION

### 图片 / Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.svg)
![Slide 1 image](./images/slide-01-03.png)

## 第 2 页 / Slide 2: TYCybersec

### 原文 / Original Text

- 11.
- CONTENT
- 01
- 03
- 02
- 04
- Netcat
- Final Exam 2
- Final Exam 1
- Next,
- 未来网安？
- NC –
- nvlp
- 1234
- 实操题
- MCQ & FRQ
- Future

### 图片 / Images

![Slide 2 image](./images/slide-02-04.png)
![Slide 2 image](./images/slide-02-05.svg)
![Slide 2 image](./images/slide-02-06.png)

## 第 3 页 / Slide 3: TYCybersec

### 原文 / Original Text

- Netcat
- 01
- Tools

### 图片 / Images

![Slide 3 image](./images/slide-03-07.png)
![Slide 3 image](./images/slide-03-08.svg)
![Slide 3 image](./images/slide-03-09.png)

## 第 4 页 / Slide 4: TYCybersec

### 原文 / Original Text

- Netcat
- !
- Overview
- 主要用途
- ①
- netcat
- 简称
- nc
- ，安全界叫它瑞士军刀。
- ncat
- 也会顺便介绍，弥补了
- nc
- 的不足，被叫做
- 21
- 世纪的瑞士军刀。
- nc
- 的基本功能如下：
- 在
- OSCC
- 考试中，只会使用到反弹
- shell
- ，传输文件等，其他的会在
- OSCP, OSEP
- 中使用到
- telnet /
- 获取系统
- banner
- 信息
- 传输文本信息
- 传输文件和目录
- 加密传输文件
- 端口扫描
- 远程控制
- /
- 正方向
- shell
- 流媒体服务器
- 远程克隆硬盘

### 图片 / Images

![Slide 4 image](./images/slide-04-10.png)
![Slide 4 image](./images/slide-04-11.svg)
![Slide 4 image](./images/slide-04-12.png)
![Slide 4 image](./images/slide-04-13.svg)
![Slide 4 image](./images/slide-04-14.png)
![Slide 4 image](./images/slide-04-15.svg)

## 第 5 页 / Slide 5: TYCybersec

### 原文 / Original Text

- Netcat
- 常用参数
- Netcat
- Common Parameter
- -l
- ： 开启监听
- -p
- ：指定端口
- -t
- ： 以
- telnet
- 形式应答
- -e
- ：程序重定向
- -n
- ：以数字形式表示
- ip
- -v
- ：显示执行命令过程
- -z :
- 不进行交互，直接显示结果
- -u
- ：使用
- UDP
- 协议传输
- -w :
- 设置超时时间
- 如果你啥都不会，无脑连接
- :
- 连接机：
- nc
- –
- nvlp
- &lt;
- 端口号
- &gt;
- 被连接机
- :
- nc
- &lt;
- ip
- &gt; &lt;
- 端口号
- &gt;
- 反弹
- shell
- 连接机加一个参数
- -e cmd.exe
- 传文件：
- nc
- &lt;
- 目标
- IP&gt; &lt;
- 端口
- &gt; &lt;
- 文件名
- 验证是否安装：
- nc
- –help
- (PS.
- 一般
- Kali Linux
- 自带
- )

### 图片 / Images

![Slide 5 image](./images/slide-05-16.png)
![Slide 5 image](./images/slide-05-17.svg)

## 第 6 页 / Slide 6: TYCybersec

### 原文 / Original Text

- 例子
- –
- 验证安装
- Example
- 什么，你说你不会安装？↓
- Windows
- 下载安装
- netcat
- (
- nc
- )
- 命令
- _
- netcat
- 下载
- -
- CSDN
- 博客

### 图片 / Images

![Slide 6 image](./images/slide-06-18.png)
![Slide 6 image](./images/slide-06-19.svg)
![Slide 6 image](./images/slide-06-20.png)

## 第 7 页 / Slide 7: TYCybersec

### 原文 / Original Text

- 例子：传输消息

### 图片 / Images

![Slide 7 image](./images/slide-07-21.png)
![Slide 7 image](./images/slide-07-22.svg)
![Slide 7 image](./images/slide-07-23.png)

## 第 8 页 / Slide 8: TYCybersec

### 原文 / Original Text

- 例子：传输文件
- 内容②
- 内容③

### 图片 / Images

![Slide 8 image](./images/slide-08-24.png)
![Slide 8 image](./images/slide-08-25.svg)
![Slide 8 image](./images/slide-08-26.png)
![Slide 8 image](./images/slide-08-27.png)

## 第 9 页 / Slide 9: TYCybersec

### 原文 / Original Text

- 例子：反弹
- shell
- 更多弹
- shell
- 见这个：
- www.revshells.com
- （需要
- VPN
- ）

### 图片 / Images

![Slide 9 image](./images/slide-09-28.png)
![Slide 9 image](./images/slide-09-29.svg)
![Slide 9 image](./images/slide-09-30.png)

## 第 10 页 / Slide 10: TYCybersec

### 原文 / Original Text

- N
- cat
- 简介
- nc
- 也有不足之处，首先就是明文传输，可能会被嗅探。其次对于反向
- shell
- ，如果其他人通过网络扫描发现了这个端口，也就意味着任何人都可以去监听这个端口进行连接，缺乏身份验证功能。
- ncat
- 则弥补了这些缺点，
- ncat
- 不是
- linux
- 系统自带的命令，而是
- nmap
- 中的。
- ncat
- 中很多参数和
- nc
- 一样，其中可以通过
- --
- alow
- 参数来指定允许连接的机器，通过
- --
- ssl
- 进行数据的加密，如下图（左边是服务器，右边是客户端）：

### 图片 / Images

![Slide 10 image](./images/slide-10-31.png)
![Slide 10 image](./images/slide-10-32.svg)
![Slide 10 image](./images/slide-10-33.jpeg)

## 第 11 页 / Slide 11: TYCybersec

### 原文 / Original Text

- Final Exam
- 02
- Part1. MCQ+FRQ

### 图片 / Images

![Slide 11 image](./images/slide-11-34.png)
![Slide 11 image](./images/slide-11-35.svg)
![Slide 11 image](./images/slide-11-36.png)

## 第 12 页 / Slide 12: TYCybersec

### 原文 / Original Text

- 时间
- Part1
- 闭卷考试
- 选择题
- +
- 简答题
- +
- 实操题
- Time Limit
- Style
- Questions
- Part1: 20 min (15 MCQ + 1FRQ, Total: 20 Score)
- Part2: 20 min (1 Question, Total: 15 Score)
- Tips: Part2
- 有两种方法渗透，如果都做出来有
- +5
- 分
- bonus
- 本次渗透测试目标：拿到
- shell

### 图片 / Images

![Slide 12 image](./images/slide-12-37.png)
![Slide 12 image](./images/slide-12-38.svg)
![Slide 12 image](./images/slide-12-39.png)

## 第 13 页 / Slide 13: TYCybersec

### 原文 / Original Text

- Final Exam
- 03
- 实操题

### 图片 / Images

![Slide 13 image](./images/slide-13-40.png)
![Slide 13 image](./images/slide-13-41.svg)
![Slide 13 image](./images/slide-13-42.png)

## 第 14 页 / Slide 14: TYCybersec

### 原文 / Original Text

- 下一步
- ？
- 04
- Next Steps for
- TYCybersec

### 图片 / Images

![Slide 14 image](./images/slide-14-43.png)
![Slide 14 image](./images/slide-14-44.svg)
![Slide 14 image](./images/slide-14-45.png)

## 第 15 页 / Slide 15: 谢谢观看

### 原文 / Original Text

- THANK YOU FOR WATCHING
- TYCybersec
- Si
- mon Li
- 时间：2026.01.26

### 图片 / Images

![Slide 15 image](./images/slide-15-46.png)
![Slide 15 image](./images/slide-15-47.svg)
![Slide 15 image](./images/slide-15-48.png)
