---
title: "01 网络世界如何暴露秘密 / How the Web Exposes Secrets"
author: "2024届 Bob Gong / Class of 2024 Bob Gong"
published: 2026-10-15
description: "网页上没有显示的内容，真的没人能看到吗？本文从浏览器、请求与响应出发，通过三个本地 Flag 实验解释前端泄密、Base64 编码和服务器端鉴权。 / If a page does not display something, can nobody see it? Three local flag challenges explain front-end exposure, Base64 encoding, and server-side authorization."
image: "./images/cover.png"
tags: ["Web Security", "Browser DevTools", "Access Control", "Beginner"]
category: "2026.9-2027.6课件-S2扬帆 / 2026.9-2027.6 Slides S2 Set Sail"
draft: false
---

:::section{.lang-zh}

**原 PPT 日期：** 2026-10-15

> 此文由 Codex 根据 Bob Gong 的课件改编。

假设社团做了一个成员名单网页。页面上没有“成员名单”按钮，也没有任何可见文字，但名单其实已经写进 HTML，只是被 CSS 隐藏了。普通访客看不到它，这份名单安全吗？

答案通常是：**不安全。** 浏览器要显示网页，服务器就得先把 HTML、CSS、JavaScript 和其他资源发送到用户的电脑。只要秘密已经进入响应，用户就能通过源代码、开发者工具或网络记录把它找出来。`display: none` 可以藏住界面元素，却不能代替权限控制。

这篇文章会带你完成三个只在自己电脑上运行的小实验。我们不扫描公网网站，也不接触真实账号。目标是弄清一条很重要的安全原则：**不要把不该让用户得到的数据发送给浏览器。**

## 网络安全究竟保护什么

分析安全问题时，可以先看三个目标：

- **机密性（Confidentiality）**：只有获得授权的人才能读取数据。例如，成员名单只能让社团管理员查看。
- **完整性（Integrity）**：数据没有被未授权地修改。例如，文章内容和下载文件没有被偷偷替换。
- **可用性（Availability）**：需要使用服务时，它能够正常响应。例如，网站不会因为一次故障就长时间无法访问。

这三个目标常被合称为 CIA 三要素。安全设计并不是把网站锁得越死越好，而是在阻止越权访问的同时，让正常用户顺利完成任务。

## 用四个词描述一个安全问题

遇到“这安全吗”之类的问题时，可以把它拆成四部分：

| 概念 | 要问的问题 | 成员名单示例 |
| --- | --- | --- |
| 资产 | 我们要保护什么？ | 姓名、联系方式、账号信息 |
| 威胁 | 什么人或事件可能造成损害？ | 未授权访客读取名单 |
| 漏洞 | 系统哪里存在薄弱之处？ | 服务器把完整名单发给所有访客 |
| 风险 | 发生的可能性和后果有多大？ | 隐私泄露、骚扰或账号攻击 |

“网页上看不见”只描述了界面状态，并没有说明服务器是否进行了权限检查。真正的安全边界通常在服务器端。

## 先约定实验边界

安全技术必须在明确授权的范围内使用。本教程允许你检查自己的设备和课程提供的本地页面。不要扫描校园网、同学设备或陌生网站，不要尝试真实账号密码，也不要下载或传播他人的隐私数据。

如果意外发现真实网站的问题，先停止继续验证，保存必要且不包含敏感信息的证据，再通过网站公开的安全联系渠道报告。不要为了“证明漏洞存在”而扩大影响。

## 浏览器拿到网页时发生了什么

在地址栏输入 URL 后，浏览器向服务器发送请求。服务器检查请求，并返回状态码、响应头和正文。一个最简单的过程大致如下：

```text
浏览器：GET /index.html
服务器：200 OK
服务器：返回 HTML 正文
```

浏览器随后可能继续请求 CSS、JavaScript、图片或接口数据。开发者工具因此能看到很多信息：

- **Elements / 元素**：浏览器当前使用的页面结构
- **View Source / 查看源代码**：服务器最初返回的 HTML
- **Sources / 源代码**：浏览器下载的 JavaScript、CSS 等文件
- **Network / 网络**：每个请求的地址、状态码、响应头和返回内容
- **Application / 应用**：Cookie、本地存储等浏览器数据

这些工具本来就是 Web 开发和调试的一部分。它们也说明了一件事：凡是发到浏览器里的内容，都应该假设用户能够查看。

## 搭建只属于你的本地实验环境

把课程靶场解压到一个单独目录，在该目录打开终端。命令示例里的提示符不需要输入。

macOS 或 Linux：

```bash
python3 -m http.server 8000
```

Windows：

```powershell
py -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

`localhost` 代表当前这台电脑，`8000` 是本地服务监听的端口。终端需要保持打开，实验结束后按 `Ctrl+C` 停止服务。

## Flag 01：HTML 注释并不保密

网页开发者经常用注释记录说明。注释不会显示在页面正文里，但仍然属于 HTML 的一部分。

```html
<body>
  <h1>图灵社成员页</h1>
  <!-- flag{html_is_visible} -->
</body>
```

在页面中右键选择“查看网页源代码”，搜索 `flag{`，就能找到这段注释。它提醒我们：密码、内部地址、调试信息和个人数据都不应该留在 HTML 注释中。

## Flag 02：前端 JavaScript 会送到用户手里

下面的变量即使没有显示在页面上，也会随着脚本一起下载：

```javascript
const clubCode = "flag{javascript_is_visible}";
console.log("页面加载完成");
```

打开开发者工具，在 Sources 面板查看脚本，或者直接搜索 `clubCode`。压缩、混淆和拆分文件只能增加阅读成本，不能让前端代码变成真正的秘密。API 密钥、数据库密码、管理员口令和私有令牌都不应该写进浏览器端代码。

## Flag 03：Base64 只是换了一种写法

有时一段文字看起来像乱码：

```text
ZmxhZ3tlbmNvZGluZ19pc19ub3RfZW5jcnlwdGlvbn0=
```

把它当作 Base64 解码后，会得到：

```text
flag{encoding_is_not_encryption}
```

Base64 是编码，不是加密。它的用途是让二进制数据更方便地放进文本协议，任何知道格式的人都能还原内容。真正的加密需要密钥，并且还要正确处理密钥保存、传输和权限边界。

## 正确修复：让服务器决定是否发送数据

有问题的设计通常先把秘密发送给浏览器，再用 CSS、JavaScript、注释或编码隐藏。用户拿到数据后，隐藏方法迟早会被绕过。

正确的流程应当由服务器执行：

1. 浏览器请求受保护的数据。
2. 服务器确认用户身份，并检查该用户是否拥有所需权限。
3. 有权限时，服务器只返回完成任务所需的数据。
4. 没有权限时，服务器返回 `401 Unauthorized` 或 `403 Forbidden`，并且不发送敏感正文。

身份验证回答“你是谁”，授权回答“你能做什么”。仅仅登录成功，并不代表用户可以读取系统中的所有数据。

## 给每次实验留下一份可复盘记录

找到 Flag 只是开始。真正有价值的部分，是解释它为什么会泄露，以及应该在哪里修复。每次实验可以记录：

```text
发现位置：
使用工具：
发现内容：
泄露原因：
修复方法：
```

最后再问自己三个问题：隐藏元素和权限控制有什么区别？哪一种前端泄露最容易被忽略？发现真实漏洞后，怎样在不扩大影响的前提下报告？能够回答这些问题，你就完成了网络安全第一课最重要的部分。

:::

:::section{.lang-en}

**Original PPT date:** 2026-10-15

> Codex adapted this article from Bob Gong's course slides.

Imagine that a club stores its member list on a web page. There is no visible link or text, but the names are already present in the HTML and hidden with CSS. Is the list safe because an ordinary visitor cannot see it?

Usually, no. A browser can render a page only after the server sends its HTML, CSS, JavaScript, and other resources to the user's computer. Once secret data reaches the browser, the user can inspect the source, developer tools, or network responses to recover it. `display: none` changes the interface; it does not enforce authorization.

This article uses three small challenges that run only on your own computer. The main rule is simple: **do not send data to the browser unless the user is allowed to receive it.**

## What does cybersecurity protect?

The CIA triad gives us three useful goals:

- **Confidentiality:** only authorized people can read the data.
- **Integrity:** nobody can change the data without permission.
- **Availability:** authorized users can reach the service when they need it.

Security is a balance. A system must block unauthorized access while remaining usable for legitimate users.

## Four words for describing a security problem

| Concept | Question | Member-list example |
| --- | --- | --- |
| Asset | What needs protection? | Names, contact details, and accounts |
| Threat | Who or what could cause harm? | An unauthorized visitor reading the list |
| Vulnerability | What weakness makes that possible? | The server sends the full list to everyone |
| Risk | How likely and harmful is the outcome? | Privacy loss, harassment, or account attacks |

The phrase “not visible on the page” describes the interface. It says nothing about whether the server checked permission.

## Stay inside the authorization boundary

Use security tools only on your own device, the local course lab, or another target whose owner has clearly granted permission. Do not scan the school network, another student's device, a real account, or an unfamiliar website.

If you unexpectedly find a problem on a real service, stop testing. Preserve only the minimum evidence needed to explain the issue, avoid collecting personal data, and use the site's published security contact.

## What happens when a browser opens a page?

The browser sends a request to a web server. The server checks it and returns a status code, headers, and a response body.

```text
Browser: GET /index.html
Server: 200 OK
Server: HTML response body
```

The browser may then request CSS, JavaScript, images, and API data. Developer tools expose this normal exchange:

- **Elements** shows the current document structure.
- **View Source** shows the original HTML response.
- **Sources** contains downloaded scripts and style sheets.
- **Network** records requests, status codes, headers, and responses.
- **Application** contains cookies and browser storage.

Assume that users can inspect anything delivered to their browser.

## Start a local lab

Extract the course lab into its own directory and open a terminal in that directory. Do not type a shell prompt symbol shown in an example.

On macOS or Linux:

```bash
python3 -m http.server 8000
```

On Windows:

```powershell
py -m http.server 8000
```

Open `http://localhost:8000` in a browser. Here, `localhost` means this computer and `8000` is the listening port. Keep the terminal open, and press `Ctrl+C` when the lab is over.

## Flag 01: HTML comments are visible

Comments do not appear in the rendered page, but they remain part of the HTML response.

```html
<body>
  <h1>Turing Club member page</h1>
  <!-- flag{html_is_visible} -->
</body>
```

Open View Source and search for `flag{`. Never leave passwords, private URLs, debug details, or personal data in HTML comments.

## Flag 02: the browser receives front-end JavaScript

This value reaches the user's computer even when the page never displays it:

```javascript
const clubCode = "flag{javascript_is_visible}";
console.log("Page loaded");
```

Open Sources and search for `clubCode`. Minification and obfuscation may slow a reader down, but they do not turn client-side code into a secret. Database passwords, private tokens, and administrative credentials do not belong in browser code.

## Flag 03: Base64 is an encoding

The following text looks unfamiliar:

```text
ZmxhZ3tlbmNvZGluZ19pc19ub3RfZW5jcnlwdGlvbn0=
```

Base64 decoding produces:

```text
flag{encoding_is_not_encryption}
```

Base64 changes how data is represented. It does not require a key, so anyone can decode it. Encryption requires a key and a design that protects that key.

## The correct fix belongs on the server

A weak design sends the secret first and then hides it with CSS, JavaScript, comments, or encoding. Once the browser has the data, the user can recover it.

A protected request should work differently:

1. The browser requests the protected resource.
2. The server verifies the user's identity and permission.
3. An authorized user receives only the data needed for the task.
4. An unauthorized user receives `401 Unauthorized` or `403 Forbidden`, without the sensitive body.

Authentication answers “Who are you?” Authorization answers “What are you allowed to do?” A signed-in user does not automatically have access to every record.

## Record more than the flag

For each challenge, write down where you found the data, which tool revealed it, why the exposure happened, and how the server should prevent it. A good lab note explains the security boundary instead of stopping at the answer.

Before you finish, answer three questions: How is hiding an element different from enforcing permission? Which kind of front-end exposure is easiest to overlook? How should you report a real vulnerability without increasing its impact?

:::
