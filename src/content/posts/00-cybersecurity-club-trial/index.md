---
title: "00 网络安全社体验课：从自己的网站开始 / Cybersecurity Club Trial Lesson: Start with Your Own Website"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-09-11
description: "把一份 HTML 变成自己的主页，再顺着登录按钮看看密码去了哪里。聊聊网站、凭证和虚拟机，也试着弄明白：学网络安全，到底是在学什么？ / Turn an HTML file into a homepage, then follow a login button to see where passwords go. A practical introduction to websites, credentials, and a lab you can safely reset."
image: "./images/slide-10-46.jpeg"
tags: ["Cybersecurity", "Web Development", "Authentication", "Virtual Machines"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

> 此文为codex改编往年课件而成

提到网络安全，你脑子里会不会已经出现黑底终端、飞快滚动的字符，还有一句“我进去了”？

先把电影暂停一下。对刚入门的人来说，做一个自己的网页，可能比下载一堆名字很酷的工具更有意思。你改了标题，刷新，浏览器真的变了；再给它加个登录框，问题也跟着来了：密码交给谁了？服务器凭什么相信你？

这节体验课就从这里开始。网站搭起来并不算结束，能说清它为什么这样工作，才有继续折腾的余地。

## 让浏览器显示你写的东西

不用急着买服务器。新建一个文本文件，把下面的内容放进去，保存为 `index.html`。留意扩展名，别让它悄悄变成 `index.html.txt`。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>我的第一张主页</title>
  </head>
  <body>
    <h1>你好，这里是我的网站</h1>
    <p>今天先让它跑起来，配色明天再纠结。</p>
  </body>
</html>
```

双击文件，用浏览器打开。能看到这两行文字，就已经有了一张最简单的网页。

试着把 `<h1>` 里的话改成自己的名字，再刷新。`<title>` 改的是浏览器标签页上的标题，`<h1>` 改的是页面里的一级标题，二者不是一回事。HTML 负责描述内容的结构；配色和排版通常交给 CSS，交互逻辑可以交给 JavaScript。想继续拆解标签，可以看 [MDN 的 HTML 入门](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)。

此时地址栏一般以 `file://` 开头。浏览器读的是你电脑上的文件，朋友还不能通过一个公开网址访问它。把“我能打开”和“别人能访问”分开，后面的建站过程就好理解了。

### 从本地文件到一个网址

要让别人通过网址打开它，常见的做法是准备托管空间、绑定域名、上传主页，再配置证书。先别被几个新名词劝退，它们各管一件事。

**主机是放网站的地方，域名是别人找它时用的名字。** 在常见建站流程中，你要把域名的 DNS 记录指向托管服务，并在服务端登记这个域名。只改其中一边，访问时就可能找错地方，或者落到默认页面。

上传时也不是把文件拖到任意目录就行。要放进站点配置指定的根目录；课上的例子是 `wwwroot`，别的服务可能叫 `public_html`，也可能由平台自动管理。`index.html` 常被用作默认首页，所以访问目录时不必再手动输入文件名。

这套流程理解了，再选托管方式。只展示文字和图片的静态主页，不必为了“像个网站”而专门买一个能跑 PHP 的主机。需要运行 PHP 和数据库的示例，则要确认环境支持它们。服务器有了，不代表什么代码都能直接扔进去跑。

如果打开后出现的还是默认欢迎页，不妨查查上传位置、首页文件名，以及当前域名绑定的是哪个站点。报错没有那么神秘，只是浏览器没替你把原因说清楚。

### HTTPS 不是“网站无敌”的开关

建站教程里常说的“SSL 证书”，今天通常对应的是 TLS。配置正确的 HTTPS 可以保护浏览器与服务端之间的传输，并让浏览器验证所连接的域名身份；它不负责替你检查后端代码。[OWASP 的 TLS 说明](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)介绍了这部分边界。

登录表单通过 HTTPS 发送，和数据库有没有明文存密码，是两件事。一个用了 HTTPS 的网站，照样可能写错权限判断。

所以别把地址栏里的安全提示当通关动画。

## 加一个登录框，事情就没那么简单了

一张静态主页只需要把内容展示出来。注册和登录不同：页面得把输入交给服务端，服务端再处理账户数据。

不妨考虑一个小功能：用户注册后能够登录，并看到自己的注册时间。表面上只是多了几个输入框，背后却已经有了一次完整的数据往返：

```text
浏览器提交表单
    → 后端检查输入、处理账户信息
    → 按权限访问数据库
    → 把结果交回浏览器
```

可以把注册理解为“建立一份账户记录”。登录则要核对身份，并建立后续请求能够使用的登录状态。它不是从数据库里读出一个名字就算成功，更不是把密码查出来发回网页。

用户提交的内容，在服务端检查之前，都只是一份输入。

比如一个表单字段写着 `role=admin`，并不意味着提交者就该获得管理员权限。把浏览器里的按钮藏起来也不算权限控制：真正做决定的是后端。想想游戏客户端能不能自己给自己发毕业装备，就容易理解为什么不能直接相信这些字段了。

### 密码不该作为明文留在数据库里

“不存原密码，那怎么判断我输得对不对？”

靠密码校验值。哈希不是把密码藏起来、以后再解开，而是把输入经过计算后得到一个用于核对的值。登录时再验证新输入是否与记录匹配。实际密码存储应使用专门的密码哈希方案，而不是自己拼一个“看起来加密了”的算法。

PHP 提供了配套接口：[password_hash](https://www.php.net/manual/en/function.password-hash.php) 和 [password_verify](https://www.php.net/manual/en/function.password-verify.php)。下面只演示两个接口的关系，**不是完整的注册登录程序**：

```php
<?php
$password = 'only-a-demo-password';

// 注册时：把返回的校验值保存到数据库，不保存原密码。
$storedHash = password_hash($password, PASSWORD_DEFAULT);

// 登录时：用用户本次输入的密码核对已经保存的校验值。
$matches = password_verify($password, $storedHash);
```

真实网站还要处理数据库查询、权限、会话和错误响应。这里没有这些部分，别把这几行当成能直接上线的账户系统。密码存储原则可以接着看 [OWASP 的密码存储指南](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)。

## 电脑有开机密码，为什么还要担心凭证泄露

做完网站，再回头看自己的电脑，会发现问题有点熟悉：Windows 也得确认“你是谁”，也得保存或使用某些身份验证材料。

用户名像账户的名字，不是秘密。密码哈希和登录过程中使用的凭证，则需要认真保护。磁盘上保存的数据，与登录后在内存中使用的数据，也不能混为一谈。

Mimikatz 就是一款用于研究 Windows 身份验证的安全工具，也会被用于窃取凭证。看它的演示时，应该追问的是：**这一步已经拿到了什么权限？正在访问哪类数据？系统为什么允许，或者为什么拦住了？**

这和“输入一个命令，就能破解任意电脑”差得很远。演示若已经取得管理员权限，前提就变了：它讨论的是高权限失守后凭证还面临什么风险，不是在证明开机密码毫无用处。

还有两个容易看岔的地方。

拿到哈希不等于拿到明文。所谓“解密网站”往往是在查已有记录或尝试候选密码，并不是把单向哈希直接倒着算回来。不要把自己的真实密码、哈希或账户资料交给这类服务测试。

工具读内存失败，也不能简单归结成“某个 Windows 版本永远不行”。系统配置和保护机制都会影响结果。微软的 [LSA 保护说明](https://support.microsoft.com/en-us/windows/security/windows-security/device-security-in-the-windows-security-app)与 [Credential Guard 文档](https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/how-it-works)介绍了限制凭证访问的不同机制，后者会利用基于虚拟化的安全来隔离部分敏感数据。

读到这里，没有必要为了复现旧演示去关闭杀毒软件、削弱凭证保护，或者在日常电脑里处理真实账户数据。先理解保护的是谁、挡住的是什么，比让工具强行显示一页结果更有收获。

## 给练习留一个能重来的地方

网页写坏了，改回来就好。操作系统的分区、账户和安全配置弄错了，可没那么轻松。

这也是体验课要讲虚拟机的原因。宿主机是你平时使用的电脑，虚拟机里的系统叫客户机。它像是在现有电脑里再准备一套实验环境，可以单独分配资源，也方便保存状态。

| 选择 | 适合做什么 | 要提前想清楚的事 |
| --- | --- | --- |
| 虚拟机 | 课程练习、比较配置、出错后回滚 | 和宿主机共享资源；共享目录、剪贴板与网络会影响隔离程度 |
| 直接装在实体机上 | 需要直接访问硬件或把它作为主要系统 | 分区和引导操作可能影响原有系统，必须先做好备份 |

课件给 Kali 虚拟机列出的参考分配是 **2 个 CPU 核心、4 GB 内存和 30 GB 磁盘**。把它当作当时课堂的起点，不是适合所有版本、所有电脑的保证。镜像要求、安装的软件和宿主机剩余资源，都要一起考虑。把内存全分给虚拟机，宿主机可不会因此更努力地工作。

Mac 也能用虚拟机，不过要看处理器架构。Apple Silicon 使用 ARM 架构，不能把面向 Intel/AMD 的 x86 镜像当成可直接虚拟化运行的同一种东西。按硬件选择镜像和虚拟化工具，遇到问题对照 [Kali 官方虚拟化文档](https://www.kali.org/docs/virtualization/)，不要因为教程里有“Mac”就照着点到底。

开始系统实验前，建一个干净快照，记下系统版本和网络设置。练习使用专门的测试账户，不放真实资料。虚拟机提供了方便重来的条件，**快照不等于独立备份，虚拟机也不是绝对安全的隔离箱**。共享文件夹里放着作业，实验就仍可能碰到作业。

测试对象也得讲清楚：用自己的环境，或者明确获准的靶场。能访问到一个网站，不代表它愿意陪你做实验。

## 暂时不会，很正常

体验课安排的摸底是 17 道单选题、10 分钟，用来了解大家的起点，不是拿分数决定谁能留在社团。不会网络、没写过 Python，甚至连虚拟机都还没装起来，都不妨碍从这里开始。

后面的操作系统、脚本和网络课程，会把今天碰到的问题逐渐拆开。工具可以慢慢学，做记录的习惯现在就能养成：改了什么，期望看到什么，实际出现了什么。

想动手的话，就从那张 `index.html` 开始。改一段文字，刷新看看；再试着解释它为什么只能在本地打开，怎样才能变成一个别人也能访问的网址。

当你开始问“这一步为什么能成功”，网络安全就已经不只是黑底终端了。

:::

:::section{.lang-en}

> This article was adapted by Codex from previous course slides.

Say “cybersecurity” and it is easy to picture a dark terminal, scrolling text, and someone announcing, “I'm in.”

Pause the movie for a moment. Building your own webpage can be a better introduction than downloading a collection of impressive-looking tools. Change a heading, refresh, and something you wrote appears in the browser. Add a login form and the questions get more interesting. Where does the password go? Why should a server believe you?

That is where this trial lesson begins. Getting a site to work is satisfying. Understanding why it works gives you something to investigate next.

## Put something of your own in the browser

You do not need to buy a server yet. Create a text file, paste in the following HTML, and save it as `index.html`. Check that the editor has not quietly named it `index.html.txt`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My first homepage</title>
  </head>
  <body>
    <h1>Hello, this is my website</h1>
    <p>Get it working today. Worry about the colors tomorrow.</p>
  </body>
</html>
```

Open the file in a browser. If you can see the heading and paragraph, you have a small webpage already.

Replace the heading with your name and refresh. The `<title>` element controls the browser tab's title; `<h1>` is the main heading inside the page. HTML describes the content's structure. CSS usually handles its appearance, while JavaScript can supply interactive behavior. [MDN's HTML introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) is a useful place to explore the tags.

The address will usually start with `file://`. Your browser is reading a file on your computer, not a public website. A friend cannot visit it through a public URL yet. Keeping those two situations separate makes deployment much easier to understand.

### Give the page an address

To make the page accessible through a URL, a common workflow uses hosting, a domain, an uploaded homepage, and a certificate. Each has a fairly ordinary job.

**Hosting is where the site lives; the domain is the name people use to find it.** A typical setup needs DNS records pointing toward the hosting service and a matching domain configuration at that service. Configure only one side and you may reach the wrong place or see a default page.

Files also need to go into the configured website root. The lesson used `wwwroot`; another host might use `public_html` or manage the location for you. Servers commonly treat `index.html` as the directory's default page, so visitors do not need to type its filename.

Choose hosting after deciding what the site needs to run. A static page of text and images does not require PHP hosting just to qualify as a website. A PHP and database exercise does need an environment that supports those components. Owning a server does not make every kind of code executable there.

Still seeing the welcome page? Check the upload directory, the homepage filename, and which site the domain is bound to. An error usually has a concrete cause, even when the browser is not helpful about explaining it.

### HTTPS does not make the whole site secure

Tutorials often call this an SSL certificate; TLS is the modern term. Correctly configured HTTPS protects data in transit and lets the browser authenticate the domain it connects to. It does not audit the application. [OWASP's TLS guidance](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) explains that scope.

Sending a password over HTTPS and storing it safely are separate jobs. A site using HTTPS can still get its permission checks wrong.

The browser's security indicator is not an end-of-level reward.

## A login form changes the problem

A static homepage displays content. Registration and login ask the server to process input and deal with account data.

Consider a small feature: users can register, log in, and view their registration time. A few fields on the page hide a whole round trip:

```text
Browser submits a form
    → Backend checks input and handles account information
    → Database access follows the application's permissions
    → A response returns to the browser
```

Registration creates an account record. Login verifies identity and establishes a state that later requests can use. Reading a name from a database is not enough, and returning the stored password to the browser is not the goal.

Until the server has checked it, submitted data is just input.

Suppose a form sends `role=admin`. That does not entitle its sender to administrator access. Hiding an administrative button is not a permission check either: the backend has to enforce the decision. Think of a game client awarding itself the best equipment. You would not want the server to accept that claim at face value.

### The database should not keep the original password

How can a site check a password without keeping a readable copy?

It keeps a password verifier. Hashing is not hiding a password so it can be decrypted later; it produces a value against which a later input can be checked. Use a password hashing scheme rather than inventing something that merely looks encrypted.

PHP supplies [password_hash](https://www.php.net/manual/en/function.password-hash.php) and [password_verify](https://www.php.net/manual/en/function.password-verify.php) for that purpose. This example shows their relationship, **not a complete registration or login system**:

```php
<?php
$password = 'only-a-demo-password';

// Registration: store this verifier, not the original password.
$storedHash = password_hash($password, PASSWORD_DEFAULT);

// Login: verify the submitted password against the saved value.
$matches = password_verify($password, $storedHash);
```

A real application still needs database handling, authorization, sessions, and error responses. Those pieces are absent here; this is not a deployable account system. [OWASP's password storage guide](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) covers the storage principles in more depth.

## Why worry about credentials if the computer has a password?

Look back at your computer and the question begins to feel familiar. Windows also needs to decide who you are and use authentication material to do it.

A username identifies an account; it is not a secret. Password hashes and other credentials need protection. Data kept on disk and authentication material used in memory are not interchangeable categories either.

Mimikatz is a security tool used to study Windows authentication, and it is also used for credential theft. When watching a demonstration, the useful questions are: **what permissions does this operation already have, which data is it accessing, and why does the system allow or block it?**

That is a long way from “one command opens any computer.” If a demonstration already has administrator access, its starting conditions matter. It is examining credential risks after a powerful account has been compromised, not proving that a login password serves no purpose.

Two details deserve a slower look.

Possessing a hash is not the same as possessing the plaintext password. Services advertised as hash “decryption” generally look for known matches or try candidate passwords; they do not simply reverse a one-way function. Do not submit real passwords, account details, or password hashes to test them.

A failed memory-reading attempt also does not establish that a particular Windows version always blocks every such attempt. Configuration and protection mechanisms affect the result. Microsoft's [LSA protection explanation](https://support.microsoft.com/en-us/windows/security/windows-security/device-security-in-the-windows-security-app) and [Credential Guard documentation](https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/how-it-works) describe different safeguards. Credential Guard uses virtualization-based security to isolate some sensitive authentication data.

There is no need to disable antivirus, weaken credential protection, or experiment on real accounts just to reproduce an old demonstration. Understanding what was protected, and why access failed, is more useful than forcing a tool to print a result.

## Leave yourself somewhere to start again

A broken webpage is easy to edit. A mistake involving disk partitions, accounts, or system security can be harder to undo.

That is why virtual machines belong in this lesson. Your everyday computer is the host; the system inside a VM is the guest. It gives you a separate environment with allocated resources and convenient ways to save its state.

| Choice | Useful for | Things to consider |
| --- | --- | --- |
| Virtual machine | Course exercises, comparing settings, rolling back changes | It shares host resources; shared folders, clipboard integration, and networking affect isolation |
| Installing directly on hardware | Direct hardware access or using it as the main system | Partitioning and boot changes can affect the existing installation; back up before changing them |

The slides suggested **2 CPU cores, 4 GB RAM, and 30 GB disk space** for the classroom Kali VM. Treat those as the original exercise's starting allocation, not a guarantee for every release or computer. Image requirements, installed software, and the host's remaining resources all matter. Giving every spare resource to the guest will not make the host work harder on your behalf.

Macs can run VMs too, but processor architecture matters. Apple Silicon uses ARM; an x86 image intended for Intel or AMD is not an interchangeable image for native virtualization. Match the image and virtualization software to the hardware, using [Kali's official virtualization documentation](https://www.kali.org/docs/virtualization/) rather than following a tutorial merely because it mentions “Mac.”

Before system experiments, take a clean snapshot and record the system version and network settings. Use dedicated test accounts without personal data. **A snapshot is not an independent backup, and a VM is not a perfectly sealed container.** If a shared folder contains your coursework, the experiment may still have access to it.

Be clear about the target too: your own environment or a lab you have explicit permission to test. Being able to reach a website is not permission to experiment on it.

## Not knowing yet is fine

The trial lesson included 17 multiple-choice questions with a ten-minute limit. It was a starting-point check, not a score-based decision about who could stay in the club. Not knowing networking, never having written Python, or getting stuck on VM setup does not disqualify anyone from beginning.

Later sessions on operating systems, scripting, and networks can unpack the questions introduced here. The tools can wait their turn. Keeping a record can start now: what changed, what you expected, and what actually happened.

For something to try today, return to `index.html`. Change a line, refresh, and explain why the page is local. What would need to change for a friend to visit it through a URL?

Once you start asking why an operation works, cybersecurity becomes more than a dark terminal.

:::
