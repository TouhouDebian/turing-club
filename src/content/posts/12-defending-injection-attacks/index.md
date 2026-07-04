---
title: "12 防御注入攻击 / Defending Against Injection Attacks"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-04-22
description: "防御注入攻击课程从攻击原理转向修复方法：不要让用户输入直接改变命令、查询或解释器语义。核心防线是参数化、校验、最小权限和持续维护。 / Defending injection means preventing user input from changing query, command, or interpreter semantics."
tags: ["SQL Injection", "Input Validation", "Parameterized Query", "Secure Coding", "Web Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-04-22

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

## 导读

防御注入攻击课程从攻击原理转向修复方法：不要让用户输入直接改变命令、查询或解释器语义。核心防线是参数化、校验、最小权限和持续维护。

## 学习目标

- 理解注入类漏洞的共同结构
- 掌握参数化查询和输入校验思路
- 认识后期维护的重要性

## 1. 注入攻击的共同点

注入的本质是程序把不可信输入当成了语句、命令或结构的一部分。SQL 注入、命令注入、模板注入都可以用这个角度理解。

讲者补充：防御时不要只过滤几个危险字符，因为上下文不同，危险字符也不同。

> 小旁白：看到命令别只复制，顺手问一句：它读了什么、改了什么、留下了什么证据？

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 4 页：攻击原理

- 注入攻击是一类通过将恶意代码插入到应用程序输入中，从而改变原有指令逻辑、执行非预期操作的攻击方式。最常见的是
- SQL 注入，攻击者利用应用未对输入进行充分过滤或参数化处理，将恶意
- SQL 片段嵌入合法查询，使数据库执行未经授权的操作。
- 为什么：应用直接将用户输入拼接到查询语句中，导致输入数据被当作代码执行。例如我们之前讲过的
- SELECT * FROM users WHERE username = ‘$user’ AND password = ‘$pass
- 条件恒为真，可绕过认证。
- 常见类型包括：
- 基于错误的注入：触发数据库错误并从错误信息中提取数据。

### 相关图解

> 这些图是为了辅助理解结构、命令输出或表格关系；装饰图已经尽量排除。

![课程相关截图 1](./images/slide-04-05-square.png)

## 2. 防御概览

有效防御通常包括参数化 API、白名单校验、上下文编码、最小权限、错误信息控制和日志监控。它们互相补位。

讲者补充：参数化不是“把字符串拼得更小心”，而是让数据库明确区分代码和数据。

> 小旁白：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 6 页：防御概览

- 演示文稿是一种实用的工具，可以是演示，演讲，报告等。大部分时间，它们都是在为观众服务。演示文稿是一种实用的工具，可以是演示，演讲，报告等。大部分时间，它们都是在为观众服务。演示文稿是一种实用的工具，可以是演示，演讲，报告等。
- 输入验证和过滤
- 对用户输入进行严格验证，只允许预期的字符（如字母、数字、特定符号），拒绝包含命令分隔符（
- 避免直接执行用户输入
- 不要将用户输入直接传递给系统命令执行函数（如
- 如果必须执行命令，应使用白名单机制，只允许预定义的命令。
- 使用转义参数
- 如果必须将用户输入作为命令参数，使用专门的转义函数：

#### 第 7 页：防御概览

- 例如，如果需要获取当前用户，应使用
- 使用语言内置函数完成操作，减少对系统命令的依赖。
- API ）来检测和阻止包含命令注入特征的请求（如
- 使用正则表达式过滤可疑的输入模式。
- 服务的用户（如
- ）应仅具有必要的最小权限。
- 或高权限账户运行
- 服务，以限制命令执行的影响。

## 3. 代码示例与维护

安全代码不是一次写完就结束。依赖更新、测试用例、代码审查和日志告警能防止旧问题重新出现。

讲者补充：修复后要验证 payload 不再生效，并确认正常业务没有被破坏。

> 小旁白：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 9 页：代码示例

```js
tee -a /etc/
/7.4/apache2/php.ini << 'EOF'
system,exec,shell_exec,passthru,proc_open,popen,pcntl_exec
= /var/www/html
find /var/www -type f -name "*.
chmod
find /var/www -type d -exec
chown
/var/www
设置文件权限
ls cat id
"id:1001,phase:2,deny,status:403,msg:'Command Injection Attempt'"
```

#### 第 11 页：后期维护

```sql
iptables -A INPUT -s 192.168.244.164 -j DROP
iptables -A OUTPUT -d 192.168.244.164 -j DROP
sudo iptables-save > /etc/iptables/rules.v4
apt-get install
apt-get update &&
apt-get upgrade –y #
添加扫描工具
```

## 课堂练习

- 把一段拼接 SQL 改成参数化查询思路
- 列出命令注入的三个防御点
- 写一个修复验证清单

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

## Overview

Defending injection means preventing user input from changing query, command, or interpreter semantics.

## Learning Goals

- Explain the main workflow behind Defending Against Injection Attacks.
- Use SQL Injection, Input Validation, Parameterized Query to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. Common pattern of injection

Injection happens when untrusted data becomes executable structure.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Do not just copy the command. Ask what it reads, what it changes, and what evidence it leaves.

### Related Visuals

> These visuals are kept for structure, command output, or tables; decorative images are intentionally filtered out.

![Course-related screenshot 1](./images/slide-04-05-square.png)

## 2. Defense overview

Parameterized APIs separate code from data.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

## 3. Code examples and maintenance

Fixes require regression tests and verification.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## Practice

- Summarize the main workflow of Defending Against Injection Attacks in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
