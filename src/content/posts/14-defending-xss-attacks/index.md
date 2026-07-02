---
title: "14-防御跨站脚本(XSS)攻击 / Defending Against Cross-Site Scripting (XSS)"
published: 2026-04-22
description: "14-防御跨站脚本(XSS)攻击 / Defending Against Cross-Site Scripting (XSS). 2023届 Simon Li / Class of 2023 Simon Li."
tags: ["Cybersecurity", "Club Course", "Slides"]
category: "Club Course"
draft: false
---

# 14-防御跨站脚本(XSS)攻击

**English title:** Defending Against Cross-Site Scripting (XSS)

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2026-04-22

> 本文由社团课程 PPT 转换而来，保留原幻灯片文字与图片，便于网页阅读。
>
> This article was converted from the club course PowerPoint. Original slide text and images are preserved for web reading.

## 第 1 页 / Slide 1: Simon Li

### 原文 / Original Text

- 时间：2026.04
- 14
- 防御
- -XSS
- 攻击
- TYCy
- bersec

### 图片 / Images

![Slide 1 image](./images/slide-01-01.png)

## 第 2 页 / Slide 2: Contents

### 原文 / Original Text

- 代码示例
- Code Example
- 03
- 后期防御
- Reports
- 04
- 攻击原理
- A
- ttack Theory
- 01
- 防御概览
- How to defense
- 02

### 图片 / Images

![Slide 2 image](./images/slide-02-02.png)

## 第 3 页 / Slide 3: Job description

### 原文 / Original Text

- 01
- 攻击原理

### 图片 / Images

![Slide 3 image](./images/slide-03-03.png)

## 第 4 页 / Slide 4: 攻击原理

### 原文 / Original Text

- 跨站脚本攻击（
- XSS, Cross-Site Scripting
- ）是一种常见的
- Web
- 安全漏洞，攻击者可将恶意脚本注入到网页中，在其他用户浏览时执行，从而窃取敏感信息或控制用户会话。
- XSS
- 主要分为反射型、存储型和
- DOM
- 型三类。
- 介绍

### 图片 / Images

![Slide 4 image](./images/slide-04-04.png)
![Slide 4 image](./images/slide-04-05.jpeg)

## 第 5 页 / Slide 5: 三种

### 原文 / Original Text

- XSS
- 恶意脚本通过
- URL
- 参数传递并立即在响应中执行。
- &lt;?
- php
- \$query = \$_GET['search'];
- echo "Search results for: " . \$query; //
- 未过滤直接输出
- ?&gt;
- 访问后
- 若未转义，浏览器会执行
- alert
- 脚本。
- 反射
- XSS
- 恶意脚本被存储在数据库等持久化介质中，其他用户访问时触发。 示例：
- &lt;?
- php
- \$comment = \$_POST['comment'];
- saveCommentToDatabase
- (\$comment);
- echo "Comment: " . \$comment; //
- 未转义直接输出
- ?&gt;
- 所有访问该评论的用户都会执行脚本。
- 存储
- XSS
- 用户
- ---------&gt;
- 访问含恶意参数的
- URL
- （如
- http://example.com/?id=&lt;script&gt;...
- ）
- ↓
- 前端
- JS -----&gt;
- 通过
- location.search
- 获取参数，并使用
- innerHTML
- 渲染到页面
- ↓
- 浏览器
- ------&gt;
- 解析
- DOM
- ，执行恶意脚本（如窃取
- Cookie
- 、重定向页面）
- DOM
- 型
- XSS
- A
- B
- C

### 图片 / Images

![Slide 5 image](./images/slide-05-06.png)

## 第 6 页 / Slide 6: H

### 原文 / Original Text

- ow to defense
- 02
- 防御概览

### 图片 / Images

![Slide 6 image](./images/slide-06-07.png)

## 第 7 页 / Slide 7: 防御概览

### 原文 / Original Text

- 从
- SQL
- 数据库去除所有恶意
- &lt;script&gt;
- 检查
- javascript
- 是否受到污染
- 将
- script
- 包括在评论内容，而不是读取
- 11%
- 45%
- 14%
- 很久以前有一个充满好奇心的人，但我认为你远比他更有好奇心，因为你正在倒着看这些字
- 19%

### 图片 / Images

![Slide 7 image](./images/slide-07-08.png)
![Slide 7 image](./images/slide-07-09.jpeg)
![Slide 7 image](./images/slide-07-10.svg)
![Slide 7 image](./images/slide-07-11.svg)
![Slide 7 image](./images/slide-07-12.svg)
![Slide 7 image](./images/slide-07-13.png)
![Slide 7 image](./images/slide-07-14.png)
![Slide 7 image](./images/slide-07-15.png)
![Slide 7 image](./images/slide-07-16.png)

## 第 8 页 / Slide 8: Code Example

### 原文 / Original Text

- 03
- 代码示例

### 图片 / Images

![Slide 8 image](./images/slide-08-17.png)

## 第 9 页 / Slide 9: 市场数据分析

### 原文 / Original Text

- USE
- your_database
- ;
- --
- 查看有多少条受影响
- SELECT id, content FROM comments WHERE content LIKE '%&lt;script&gt;alert%';
- --
- 清理（将
- script
- 标签替换为空）
- UPDATE comments SET content = REPLACE(content, '&lt;script&gt;', '');
- UPDATE comments SET content = REPLACE(content, '&lt;/script&gt;', ‘');
- 清理
- SQL
- sudo
- nano /
- etc
- /apache2/conf-available/
- security.conf
- 在末尾添加：
- Header set Content-Security-Policy "script-
- src
- 'self' https: 'unsafe-inline' 'unsafe-eval'; object-
- src
- 'none'; base-
- uri
- 'self’;”
- 重载：
- sudo
- a2enmod headers
- sudo
- systemctl
- reload apache2
- 添加
- Content-Security-Policy
- sudo
- nano /
- etc
- /nginx/sites-available/
- 站点
- .
- conf
- 在
- server{…}
- 添加
- add_header
- Content-Security-Policy "script-
- src
- 'self' https: 'unsafe-inline' 'unsafe-eval'; object-
- src
- 'none'; base-
- uri
- 'self';" always;
- 重载：
- sudo
- nginx -t
- sudo
- systemctl
- reload nginx
- 添加
- Content-Security-Policy
- Apache
- Nginx

### 图片 / Images

![Slide 9 image](./images/slide-09-18.png)
![Slide 9 image](./images/slide-09-19.jpeg)
![Slide 9 image](./images/slide-09-20.jpeg)
![Slide 9 image](./images/slide-09-21.jpeg)

## 第 10 页 / Slide 10: R

### 原文 / Original Text

- eports
- 04
- 后续维护
- 下步工作方向

### 图片 / Images

![Slide 10 image](./images/slide-10-22.png)

## 第 11 页 / Slide 11: 工作不足之处

### 原文 / Original Text

- 01
- sudo
- nano /
- etc
- /
- php
- /8.1/cli/php.ini   #
- 根据你的
- PHP
- 版本修改
- html_errors
- = Off
- sudo
- systemctl
- restart php8.1-fpm   #
- 版本号对应
- 加强环境
- 02
- sudo
- nano /
- etc
- /
- php
- /8.1/apache2/php.ini   #
- 或
- cli/php.ini
- session.cookie_httponly
- = 1
- session.cookie_secure
- = 1   #
- 如果网站全站
- HTTPS
- 设置
- Httponly
- Cookie
- 03
- mysqldump
- -u
- 你的数据库用户名
- -
- p
- 你的数据库名
- &gt; /
- tmp
- /
- backup_before_xss_clean.sql
- 备份数据库（
- Mysql
- ）

### 图片 / Images

![Slide 11 image](./images/slide-11-23.png)

## 第 12 页 / Slide 12: Simon Li

### 原文 / Original Text

- 时间：2026.04
- Thank you
- 谢谢观看
- TYCybersec

### 图片 / Images

![Slide 12 image](./images/slide-12-24.png)
