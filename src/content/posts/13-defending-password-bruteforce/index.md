---
title: "13 防御密码爆破 / Defending Against Password Brute Force"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2026-04-22
description: "防御密码爆破课程关注认证系统如何抵抗大量猜测。重点不是让密码规则越来越复杂，而是组合限速、锁定、MFA、监控和用户体验。 / Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design."
tags: ["Password Security", "Brute Force", "Authentication", "MFA", "Rate Limiting", "Defense"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-04-22

> 这里不是 PPT 逐页搬运版，而是把课堂主线重新整理成阅读版讲义：能用文字讲清楚的就写成文字；图片只保留终端、结构图、代码、表格和关键截图。

## 导读

防御密码爆破课程关注认证系统如何抵抗大量猜测。重点不是让密码规则越来越复杂，而是组合限速、锁定、MFA、监控和用户体验。

## 学习目标

- 理解爆破攻击的基本条件
- 掌握限速、锁定和 MFA 的作用
- 知道如何监控认证异常

## 1. 爆破攻击如何发生

爆破依赖三个条件：可尝试的入口、可验证的反馈、足够多的尝试次数。防御就是打断其中一个或多个条件。

讲者补充：错误提示不要泄露“用户名存在但密码错”这类可枚举信息。

> 小旁白：如果结论只能靠“感觉”，那还没通关；补一条可复现的命令、截图或日志。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 4 页：攻击原理

- 密码爆破是一种通过系统性尝试所有可能的密码组合来破解密码的攻击方式。其核心思想是利用计算能力和时间，逐一尝试密码，直到找到正确的匹配。密码爆破主要包括以下几种方法：
- 穷举法是最基础的密码爆破方式，通过生成所有可能的密码组合并逐一尝试。例如，对于一个四位数字密码，其可能组合为
- 种。虽然穷举法理论上可以破解任何密码，但随着密码长度和复杂度的增加，破解时间会呈指数级增长。
- 字典式攻击利用预先准备好的密码列表（即“字典”）进行尝试。这种方法适用于人为设置的密码，因为人类倾向于使用易记的密码，如“
- 。相比穷举法，字典式攻击效率更高，但命中率可能较低。
- 彩虹表是一种针对哈希密码的高效破解方法。它通过预先计算明文密码与其哈希值的映射关系，生成哈希链以节省存储空间。彩虹表可以快速破解常见的哈希算法（如
- ）处理的密码效果有限。
- 参考数据：什么是暴力破解？如何防御暴力破解？

#### 第 5 页：攻击原理

- 密码爆破通常会持续很长时间，并且尝试多个密码
- 密码爆破使用脚本，每秒可以发送多次尝试

## 2. 防御手段

常见措施包括登录限速、失败次数锁定、验证码、MFA、强密码策略和泄露密码检测。不同场景需要平衡安全和可用性。

讲者补充：锁定策略要防止被滥用成拒绝服务，例如攻击者故意锁死大量用户。

> 小旁白：报错不是敌人，它通常是在很诚实地告诉你哪一层没对上。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 7 页：防御概览

- 输错密码几次就锁定一段时间。
- 要求用户完成简单的任务才能登录到系统，用户可以轻松完成，但暴力工具无法完成。例如图形验证码、短信等。
- 密码复杂度限制
- 强制用户设置长而复杂的密码，并强制定期更改密码。
- 结合两种不同的认证因素对用户进行认证的方法。例如密码、身份证、安全令牌、指纹、面部识别、地理信息等。

## 3. 代码、日志与维护

认证系统需要记录失败次数、来源、时间、用户代理和风险评分。维护阶段要关注异常峰值、撞库行为和绕过路径。

讲者补充：密码防御不是只靠登录页面，重置密码、注册、API 登录同样要纳入策略。

> 小旁白：工具是技能栏，不是自动胜利按钮；真正的主角仍然是你的判断链。

### PPT 文字要点

> 下面是从原 PPT 可编辑文字层整理出的内容；能写成文字的，就不强行塞截图。

#### 第 9 页：代码示例

```sql
sudo apt update
sudo apt install fail2ban -y
# 创建本地配置文件
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
# 编辑 jail.local，启用 sshd 监狱
sudo sed -i 's/^enabled = false/enabled = true/g' /etc/fail2ban/jail.local
sudo sed -i 's/^port = ssh/port = ssh/g' /etc/fail2ban/jail.local
sudo sed -i 's/^logpath = %(sshd_log)s/logpath = \/var\/log\/auth.log/g' /etc/fail2ban/jail.local
# 可选：调整封禁时间（bantime = 3600），最大重试（maxretry = 3）
# 启动并启用开机自启
sudo systemctl enable fail2ban --now
sudo fail2ban-client status sshd
重置密码与账户
假设账户名为
```

#### 第 11 页：后期维护

```bash
/ssh/
密码策略和登录限制
/common-password
所在行，修改或添加参数：
password requisite pam_pwquality.so retry=3
auth required pam_tally2.so deny=5
配置自动安全更新
apt install unattended-upgrades -y
-reconfigure --priority=low unattended-upgrades
iptables -I INPUT -s 192.168.114.154 -j DROP
iptables -I FORWARD –s 192.168.114.154 -j DROP
```

## 课堂练习

- 设计一个登录限速策略
- 解释 MFA 能防什么、不能防什么
- 列出认证日志中应记录的字段

:::

:::section{.lang-en}

**Original PPT date:** 2026-04-22

> This is not a slide-by-slide dump. It rebuilds the lesson as readable notes: text whenever text is clearer, and visuals only when they explain terminals, diagrams, code, tables, or key evidence.

## Overview

Defending brute force attacks combines rate limiting, lockout, MFA, monitoring, and usable authentication design.

## Learning Goals

- Explain the main workflow behind Defending Against Password Brute Force.
- Use Password Security, Brute Force, Authentication to read commands, traffic, logs, or code with evidence.
- Stay inside authorized lab environments and document each step clearly.

## 1. How brute force works

Brute force needs an entry point, feedback, and many attempts.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: If a conclusion only feels right, it is not cleared yet. Add reproducible evidence.

## 2. Defense controls

Controls must balance security, usability, and abuse resistance.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Errors are not the villain; they usually point at the layer that does not match.

## 3. Code, logs, and maintenance

Authentication defense includes every path that can verify credentials.

Start with the problem, then trace the data, command, or protocol that proves the result. Keep the notes short enough that another club member can reproduce the step in a lab.

> Side note: Tools are skill slots, not an auto-win button. The real protagonist is your reasoning chain.

## Practice

- Summarize the main workflow of Defending Against Password Brute Force in your own words.
- Reproduce one safe observation step and record the evidence.
- Explain one likely risk and one matching defense.

:::
