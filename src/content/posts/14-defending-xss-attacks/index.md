---
title: "14 防御跨站脚本(XSS)攻击 / Defending Against Cross-Site Scripting (XSS)"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-04-22
description: "防御 XSS 课程把重点放在输出上下文、编码、CSP 和安全开发习惯上。XSS 防御不是简单删除 `<script>`，而是系统性管理不可信内容。 / Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content."
tags: ["XSS", "CSP", "Output Encoding", "Frontend Security", "Web Defense", "Secure Coding"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-04-22

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

## 导读

防御 XSS 课程把重点放在输出上下文、编码、CSP 和安全开发习惯上。XSS 防御不是简单删除 `<script>`，而是系统性管理不可信内容。

## 学习目标

- 理解三类 XSS 的触发位置
- 掌握输出编码和 CSP 的作用
- 形成前端安全开发习惯

## 1. XSS 的攻击原理

XSS 的共同点是不可信内容进入浏览器执行环境。反射型、存储型和 DOM 型的区别在于输入流向和触发位置。

讲者补充：过滤输入只能降低风险，关键仍是按输出上下文编码。

> 小旁白：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 4 页：攻击原理

- 跨站脚本攻击（
- XSS, Cross-Site Scripting
- ）是一种常见的
- 安全漏洞，攻击者可将恶意脚本注入到网页中，在其他用户浏览时执行，从而窃取敏感信息或控制用户会话。
- XSS 主要分为反射型、存储型和

#### 第 5 页：三种

- XSS 恶意脚本通过
- URL 参数传递并立即在响应中执行。
- $query = $_GET['search'];
- echo "Search results for: " . $query; //
- 未过滤直接输出
- 若未转义，浏览器会执行
- XSS 恶意脚本被存储在数据库等持久化介质中，其他用户访问时触发。 示例：
- $comment = $_POST['comment'];
- saveCommentToDatabase
- ($comment);
- echo "Comment: " . $comment; //
- 未转义直接输出
- 所有访问该评论的用户都会执行脚本。
- XSS 访问含恶意参数的

## 2. 防御概览

防御包括 HTML 转义、属性编码、URL 编码、避免危险 API、模板自动转义、CSP 和 Cookie 安全属性。

讲者补充：不同上下文不能共用同一套编码函数。HTML 文本、属性、脚本和 URL 都要分开看。

> 小旁白：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 7 页：防御概览

- SQL 数据库去除所有恶意
- 是否受到污染
- 包括在评论内容，而不是读取
- 很久以前有一个充满好奇心的人，但我认为你远比他更有好奇心，因为你正在倒着看这些字

## 3. 代码示例与复盘

通过代码示例可以看到：安全渲染应该让用户内容保持“数据”身份，而不是变成 HTML 或 JavaScript。

讲者补充：修复 XSS 后要测试正常文本、特殊符号、链接、富文本等边界输入。

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 9 页：市场数据分析

```sql
查看有多少条受影响
SELECT id, content FROM comments WHERE content LIKE '%<script>alert%';
标签替换为空）
UPDATE comments SET content = REPLACE(content, '<script>', '');
UPDATE comments SET content = REPLACE(content, '</script>', ‘');
/apache2/conf-available/
Header set Content-Security-Policy "script-
'self' https: 'unsafe-inline' 'unsafe-eval'; object-
Content-Security-Policy
/nginx/sites-available/
Content-Security-Policy "script-
```

#### 第 11 页：工作不足之处

- /8.1/cli/php.ini #
- restart php8.1-fpm #
- /8.1/apache2/php.ini #
- cli/php.ini
- session.cookie_httponly
- session.cookie_secure
- 如果网站全站
- HTTPS 你的数据库用户名

## 课堂练习

- 比较反射型、存储型和 DOM 型 XSS
- 为评论区设计 XSS 防御方案
- 解释 CSP 为什么不是唯一防线

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

## Overview

Defending XSS requires output-context encoding, CSP, secure rendering, and careful handling of untrusted content.

## Learning Goals

- Explain the main workflow behind Defending Against Cross-Site Scripting (XSS).
- Use XSS, CSP, Output Encoding to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. How XSS works

XSS is untrusted content reaching browser execution contexts.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

## 2. Defense overview

Encoding must match the output context.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## 3. Code examples and review

Keep user content as data, not executable markup.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## Practice

- Summarize the main workflow of Defending Against Cross-Site Scripting (XSS) in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
