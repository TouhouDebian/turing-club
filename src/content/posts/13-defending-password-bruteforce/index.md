---
title: "13-防御密码爆破 / Defending Against Password Brute Force"
published: 2026-04-22
description: "13-防御密码爆破 / Defending Against Password Brute Force. 2023届 Simon Li / Class of 2023 Simon Li."
tags: ["Cybersecurity", "Club Course", "Slides"]
category: "Club Course"
draft: false
---

# 13-防御密码爆破

**English title:** Defending Against Password Brute Force

**作者 / Author:** 2023届 Simon Li / Class of 2023 Simon Li

**原 PPT 日期 / Original PPT date:** 2026-04-22

> 本文由社团课程 PPT 转换而来，保留原幻灯片文字与图片，便于网页阅读。
>
> This article was converted from the club course PowerPoint. Original slide text and images are preserved for web reading.

## 第 1 页 / Slide 1: 防御

### 原文 / Original Text

- -
- 密码爆破
- 13
- Password EXECUTION
- S
- imon Li

### 图片 / Images

![Slide 1 image](./images/slide-01-01.png)
![Slide 1 image](./images/slide-01-02.png)
![Slide 1 image](./images/slide-01-03.png)
![Slide 1 image](./images/slide-01-04.png)
![Slide 1 image](./images/slide-01-05.svg)

## 第 2 页 / Slide 2: 目录

### 原文 / Original Text

- CONTENTS
- PART ONE
- 1
- 攻击原理
- PART TWO
- 2
- 防御概览
- PART THREE
- 3
- 代码示例
- PART FOUR
- 4
- 后期维护

### 图片 / Images

![Slide 2 image](./images/slide-02-06.png)
![Slide 2 image](./images/slide-02-07.png)
![Slide 2 image](./images/slide-02-08.png)
![Slide 2 image](./images/slide-02-09.svg)
![Slide 2 image](./images/slide-02-10.png)

## 第 3 页 / Slide 3: PART ONE

### 原文 / Original Text

- 01
- 攻击原理
- Attack theory

### 图片 / Images

![Slide 3 image](./images/slide-03-11.png)
![Slide 3 image](./images/slide-03-12.png)
![Slide 3 image](./images/slide-03-13.png)
![Slide 3 image](./images/slide-03-14.png)
![Slide 3 image](./images/slide-03-15.svg)

## 第 4 页 / Slide 4: 攻击原理

### 原文 / Original Text

- 01
- 密码爆破
- 密码爆破是一种通过系统性尝试所有可能的密码组合来破解密码的攻击方式。其核心思想是利用计算能力和时间，逐一尝试密码，直到找到正确的匹配。密码爆破主要包括以下几种方法：
- 3
- 种方法
- 穷举法是最基础的密码爆破方式，通过生成所有可能的密码组合并逐一尝试。例如，对于一个四位数字密码，其可能组合为
- 0000
- 到
- 9999
- ，共计
- 10000
- 种。虽然穷举法理论上可以破解任何密码，但随着密码长度和复杂度的增加，破解时间会呈指数级增长。
- 字典式攻击利用预先准备好的密码列表（即“字典”）进行尝试。这种方法适用于人为设置的密码，因为人类倾向于使用易记的密码，如“
- 123456”
- 或“
- password”
- 。相比穷举法，字典式攻击效率更高，但命中率可能较低。
- 彩虹表是一种针对哈希密码的高效破解方法。它通过预先计算明文密码与其哈希值的映射关系，生成哈希链以节省存储空间。彩虹表可以快速破解常见的哈希算法（如
- MD5
- 、
- SHA1
- 等），但对加盐（
- salt
- ）处理的密码效果有限。
- 参考数据：什么是暴力破解？如何防御暴力破解？

### 图片 / Images

![Slide 4 image](./images/slide-04-16.png)
![Slide 4 image](./images/slide-04-17.png)
![Slide 4 image](./images/slide-04-18.png)
![Slide 4 image](./images/slide-04-19.png)
![Slide 4 image](./images/slide-04-20.svg)

## 第 5 页 / Slide 5: 攻击原理

### 原文 / Original Text

- 01
- 多次尝试
- 密码爆破通常会持续很长时间，并且尝试多个密码
- 间隔极短
- 密码爆破使用脚本，每秒可以发送多次尝试

### 图片 / Images

![Slide 5 image](./images/slide-05-21.png)
![Slide 5 image](./images/slide-05-22.png)
![Slide 5 image](./images/slide-05-23.png)
![Slide 5 image](./images/slide-05-24.png)
![Slide 5 image](./images/slide-05-25.svg)
![Slide 5 image](./images/slide-05-26.svg)
![Slide 5 image](./images/slide-05-27.png)
![Slide 5 image](./images/slide-05-28.jpeg)
![Slide 5 image](./images/slide-05-29.jpeg)

## 第 6 页 / Slide 6: PART TWO

### 原文 / Original Text

- 02
- 防御概览
- WORK PROGRESS

### 图片 / Images

![Slide 6 image](./images/slide-06-30.png)
![Slide 6 image](./images/slide-06-31.png)
![Slide 6 image](./images/slide-06-32.png)
![Slide 6 image](./images/slide-06-33.png)
![Slide 6 image](./images/slide-06-34.svg)

## 第 7 页 / Slide 7: 防御概览

### 原文 / Original Text

- 02
- 锁定策略
- 输错密码几次就锁定一段时间。
- 验证码技术
- 要求用户完成简单的任务才能登录到系统，用户可以轻松完成，但暴力工具无法完成。例如图形验证码、短信等。
- 密码复杂度限制
- 强制用户设置长而复杂的密码，并强制定期更改密码。
- 结合两种不同的认证因素对用户进行认证的方法。例如密码、身份证、安全令牌、指纹、面部识别、地理信息等。
- 双因子认证

### 图片 / Images

![Slide 7 image](./images/slide-07-35.png)
![Slide 7 image](./images/slide-07-36.png)
![Slide 7 image](./images/slide-07-37.png)
![Slide 7 image](./images/slide-07-38.png)
![Slide 7 image](./images/slide-07-39.svg)
![Slide 7 image](./images/slide-07-40.jpeg)

## 第 8 页 / Slide 8: PART THREE

### 原文 / Original Text

- 03
- 代码示例
- CODE EXAMPLE

### 图片 / Images

![Slide 8 image](./images/slide-08-41.png)
![Slide 8 image](./images/slide-08-42.png)
![Slide 8 image](./images/slide-08-43.png)
![Slide 8 image](./images/slide-08-44.png)
![Slide 8 image](./images/slide-08-45.svg)

## 第 9 页 / Slide 9: 代码示例

### 原文 / Original Text

- 03
- 安装并配置
- Fail2ban
- sudo apt update
- sudo apt install fail2ban -y
- # 创建本地配置文件
- sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
- # 编辑 jail.local，启用 sshd 监狱
- sudo sed -i 's/^enabled = false/enabled = true/g' /etc/fail2ban/jail.local
- sudo sed -i 's/^port    = ssh/port    = ssh/g' /etc/fail2ban/jail.local
- sudo sed -i 's/^logpath = %(sshd_log)s/logpath = \\/var\\/log\\/auth.log/g' /etc/fail2ban/jail.local
- # 可选：调整封禁时间（bantime = 3600），最大重试（maxretry = 3）
- # 启动并启用开机自启
- sudo systemctl enable fail2ban --now
- # 查看状态
- sudo fail2ban-client status sshd
- 重置密码与账户
- (
- 假设账户名为
- victim)
- sudo passwd
- victim
- # 然后输入一个高强度新密码
- #
- 查看被攻击账户的
- authorized_keys
- sudo
- cat /home/victim/.ssh/
- authorized_keys
- #
- 如果该账户是
- root
- ，
- 则查看
- /
- root/.ssh/
- authorized_keys
- #
- 检查计划任务
- sudo
- crontab -u victim -l
- sudo
- cat /var/spool/
- cron
- /crontabs/victim
- #
- 检查系统级计划任务
- sudo
- cat /etc/crontab
- ls -la /etc/
- cron.d
- /
- #
- 检查可疑进程（高
- CPU
- 、
- 隐藏名称、网络连接）
- ps
- auxf
- | grep -v "\\[" | sort -nrk3,3 | head -20
- sudo
- netstat -
- tunlp
- #
- 或者
- ss -
- tunlp

### 图片 / Images

![Slide 9 image](./images/slide-09-46.png)
![Slide 9 image](./images/slide-09-47.png)
![Slide 9 image](./images/slide-09-48.png)
![Slide 9 image](./images/slide-09-49.png)
![Slide 9 image](./images/slide-09-50.svg)

## 第 10 页 / Slide 10: PART FOUR

### 原文 / Original Text

- 04
- 后期维护
- REPORTS

### 图片 / Images

![Slide 10 image](./images/slide-10-51.png)
![Slide 10 image](./images/slide-10-52.png)
![Slide 10 image](./images/slide-10-53.png)
![Slide 10 image](./images/slide-10-54.png)
![Slide 10 image](./images/slide-10-55.svg)

## 第 11 页 / Slide 11: 后期维护

### 原文 / Original Text

- 04
- 修改
- SSH
- sudo
- nano /
- etc
- /ssh/
- sshd_config
- 配置
- PAM
- 密码策略和登录限制
- sudo
- nano /
- etc
- /
- pam.d
- /common-password
- 找到
- pam_pwquality.so
- 所在行，修改或添加参数：
- password requisite pam_pwquality.so retry=3
- minlen
- =12
- dcredit
- =-1
- ucredit
- =-1
- lcredit
- =-1
- ocredit
- =-1
- auth required pam_tally2.so deny=5
- onerr
- =fail
- unlock_time
- =300
- 配置自动安全更新
- sudo
- apt install unattended-upgrades -y
- sudo
- dpkg
- -reconfigure --priority=low unattended-upgrades
- 阻断此
- IP
- sudo
- iptables -I INPUT -s 192.168.114.154 -j DROP
- sudo
- iptables -I FORWARD –s 192.168.114.154 -j DROP
- sudo
- netfilter
- -persistent save

### 图片 / Images

![Slide 11 image](./images/slide-11-56.png)
![Slide 11 image](./images/slide-11-57.png)
![Slide 11 image](./images/slide-11-58.png)
![Slide 11 image](./images/slide-11-59.png)
![Slide 11 image](./images/slide-11-60.svg)
![Slide 11 image](./images/slide-11-61.png)

## 第 12 页 / Slide 12: 感谢您的观看

### 原文 / Original Text

- 13
- thanks for watching
- Simon Li

### 图片 / Images

![Slide 12 image](./images/slide-12-62.png)
![Slide 12 image](./images/slide-12-63.png)
![Slide 12 image](./images/slide-12-64.png)
![Slide 12 image](./images/slide-12-65.png)
![Slide 12 image](./images/slide-12-66.svg)
