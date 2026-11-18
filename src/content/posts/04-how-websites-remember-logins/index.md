---
title: "04 网站怎么记住登录：Cookie 与 Session / How Websites Keep You Signed In"
author: "ChatGPT"
published: 2026-11-18
description: "灵梦在 B 站看《Bad Apple!!》，刷新后为什么还登录着？从一次点赞说起，讲清 Cookie、服务端会话、过期和安全属性。 / Reimu watches Bad Apple!! on Bilibili. A refresh and a like show how cookies, server-side sessions, expiration, and cookie security work."
image: "./images/cover.jpg"
tags: ["HTTP", "Cookie", "Session", "Web Security"]
category: "2026.9-2027.6课件-S2扬帆 / 2026.9-2027.6 Slides S2 Set Sail"
draft: false
---
:::section{.lang-zh}

灵梦在 B 站搜到《Bad Apple!!》。经典黑白剪影，刚播到妖梦那段，她才发现自己忘了点赞。她赶紧登录，刷新，头像回来了，赞也点上了。

上一篇我们[把网页挂上了 GitHub Pages](../03-publish-a-site-with-github-pages/)。全世界都能用同一个地址拿到同一份页面。视频当然也可以公开，但点赞这种事要记在某个账号名下。灵梦刷新完，服务器得认出这次请求是她发的。

下文借这个场景聊一种常见的服务端会话设计。Cookie 名称、会话编号、请求路径都是为了演示虚构的，不代表 B 站的实际接口或登录实现。

## 登录后，浏览器和服务器各存什么

灵梦通过验证后，示例服务器生成一个随机的会话编号。服务器在自己的会话存储里写下：这个编号对应灵梦的账号，几点登的，几点失效。浏览器不用保存整条会话记录，只要收好那串编号就行。

服务器通过响应头 `Set-Cookie` 把编号发过去。下面用 `DEMO_ONLY` 代替真实随机值：

```http
Set-Cookie: sid=DEMO_ONLY; Path=/; Secure; HttpOnly; SameSite=Lax
```

灵梦刷新页面，浏览器发出新请求。如果当前请求符合这条 Cookie 的适用条件，浏览器就自动把编号带上，不需要灵梦做任何事：

```http
Cookie: sid=DEMO_ONLY
```

注意两行的分工：`Set-Cookie` 出现在响应里，是服务器告诉浏览器「存成这样，这样用」；Cookie 出现在请求里，只带回名字和值。服务器收到编号后去会话存储里查。记录存在、没过期、也没被撤销，服务器才把请求认作灵梦发的。这就是刷新页面不用重输密码的原因。

光看到 `sid` 这个字段，还不知道对应的会话是否仍然有效。

## 视频还在播，点赞却要重新登录

假设灵梦挂着视频标签页去喝茶，回来之后服务端会话已经过期了。页面上灵梦的头像可能还在，因为页面还没更新。公开视频也可能还在放，因为播放本身不需要登录。

等她点「赞」，浏览器才发出新的写入请求。服务器一查，会话过期，于是要求她重新登录。

这里有两项检查。**认证**确认请求来自哪个账号，**授权**决定这个账号能做什么。服务器先用会话确认账号，再决定这个账号有没有权限给该视频点赞。按钮看着能按是前端的事，服务器同不同意写入是后端的事。

## 浏览器和服务器各有到期时间

浏览器和服务器可以各有各的倒计时。Cookie 的 `Max-Age` 或 `Expires` 决定浏览器保留它多久；服务器还可以设置闲置超时或会话总时长上限。所以会出现这种情况：浏览器里明明还有 Cookie，服务器却已经不认了；反过来，服务器记录还活着，浏览器却早把编号清掉了。两边的到期时间各自生效。

## 登录 Cookie 的安全设置

在这类设计里，一条仍然有效的会话 Cookie，本身就能当登录凭证用。把它截进群聊里，就可能让别人用你的登录状态访问网站。遇到问题找人帮助，描述报错页面和提示语就够了，别把 Cookie 的值贴进任何聊天记录、截图或日志。

- `Secure`：让浏览器在正常网站场景下只通过 HTTPS 发送这条 Cookie。
- `HttpOnly`：让网页脚本无法直接读取它；浏览器发出符合条件的请求时仍可以带上它。
- `SameSite=Lax`：限制多种跨站请求携带它，同时通常保留从其他网站点普通链接进入的体验。涉及点赞这类写操作，服务端仍要做权限校验，并采取适当的跨站请求防护。

回到那个视频页：灵梦的头像还挂在页面上，浏览器里也还存着 `sid`，但服务端早已划掉了对应的会话记录。此时点赞能不能过，完全取决于服务器对新请求的判断。

以后遇到「看着明明登录着，一操作就跳重登」，不要慌，把三件事分开看：页面上显示的是什么，浏览器实际发了什么，服务器认不认这次请求。

参考：[MDN：使用 HTTP Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies) · [MDN：会话管理](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Session_management)

封面：ke-ta（劇毒少女），出自《Temps ennuye》。[图片来源](https://danbooru.donmai.us/posts/2534821)

:::

:::section{.lang-en}

Reimu finds *Bad Apple!!* on Bilibili. The black-and-white video has just reached Youmu's part when Reimu realizes she hasn't liked it yet. She signs in, refreshes, and sees her avatar again. Then she leaves a like.

In the previous lesson we [shipped a site with GitHub Pages](../03-publish-a-site-with-github-pages/). Anybody with the URL gets the same page. A video can be public too, but a like belongs to an account. After Reimu refreshes, the server still needs a way to tell whose request just came in.

We'll use this scene to walk through a common server-side session design. The cookie name, session ID, and request paths below are made up for the lesson. They don't reflect Bilibili's actual sign-in implementation.

## What the browser and server keep after sign-in

Once Reimu signs in, the example server generates a random session ID. The server writes one record into its session store: this ID belongs to Reimu's account, logged in at this time, expires at that time. The browser doesn't need the full session record. It just needs the ID.

The server delivers the ID through a `Set-Cookie` response header. `DEMO_ONLY` stands in for a real random value:

```http
Set-Cookie: sid=DEMO_ONLY; Path=/; Secure; HttpOnly; SameSite=Lax
```

When Reimu refreshes, her browser sends a new request. If the request meets the cookie's conditions, the browser attaches the ID automatically:

```http
Cookie: sid=DEMO_ONLY
```

The two headers have distinct jobs. `Set-Cookie` lives in the response and tells the browser how to store and use the cookie. Cookie lives in the request and just sends the name and value back. The server looks up the ID, confirms the session exists, hasn't expired, and hasn't been revoked. It can then associate the request with Reimu's account. That's why a refresh doesn't ask for her password again.

Spotting `sid` in a request tells you nothing about whether that session is still alive.

## The video keeps playing, but leaving a like requires sign-in

Say Reimu leaves the tab open and goes to make tea. By the time she gets back, her server-side session has quietly expired. The page might still be showing her avatar because it hasn't updated yet. The public video might keep playing too, since playback doesn't need authentication.

When she clicks Like, the browser fires a new request. The server checks the session, finds it gone, and asks her to sign in.

Two checks happen here. **Authentication** identifies the account. **Authorization** determines what the account can do. The server uses the session to identify the account, then applies its rules for liking that video. A clickable button is a front-end concern; whether the server will actually write the like is a back-end concern.

## Separate deadlines on the browser and server

The browser and server run separate countdowns. A cookie's `Max-Age` or `Expires` controls how long the browser holds onto it. The server can set its own limits on idle time or total session length. So you can end up with a cookie in the browser after the server stops accepting it, or a live server record after the browser has lost the ID. The deadlines work independently.

## Session cookie security

In this design, a valid session cookie works as a sign-in credential. Sharing its value can let someone else use your active session. When you're asking for help, describe the page and the error message. Leave cookie values out of chat messages, screenshots, and logs.

- `Secure`: tells the browser to send the cookie only over HTTPS in normal website use.
- `HttpOnly`: keeps page scripts from reading it directly; the browser can still attach it to eligible requests.
- `SameSite=Lax`: limits when the browser includes the cookie on cross-site requests, while usually allowing normal link navigation. For write actions like liking a video, the server still needs authorization checks and appropriate cross-site request protections.

Back on the video page: Reimu's avatar is still showing, her browser is still holding `sid`, and the server has already struck that session from the record. Whether clicking Like succeeds depends entirely on how the server handles the new request.

If you ever look signed in but get bounced to a login screen the moment you do something, check three things separately: what the page is displaying, what the browser is actually sending, and what the server is willing to accept.

References: [MDN: Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies) · [MDN: Session management](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Session_management)

Cover: ke-ta (Gekidoku Shoujo), from *Temps ennuye*. [Image source](https://danbooru.donmai.us/posts/2534821)

:::
