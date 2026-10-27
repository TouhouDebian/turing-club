---
title: "01 Windows基础：别急着点管理员运行 / Windows Basics: Before You Run as Administrator"
author: "2023届 Simon Li / Class of 2023 Simon Li"
published: 2025-09-17
description: "文件找不到，命令跑不通，明明是自己的电脑却提示拒绝访问？从一个练习文件夹开始，弄清 Windows 的路径、CMD、账户权限和注册表。 / Missing files, failed commands, and access denied on your own computer? Use a practice folder to explore Windows paths, CMD, account permissions, and the registry."
image: "./images/slide-02-07.jpeg"
tags: ["Windows", "CMD", "Permissions", "Registry"]
category: "2025.9-2026.6课件-S1启程 / 2025.9–2026.6 Slides – S1 Start"
draft: false
---

:::section{.lang-zh}

> 此文为codex改编往年课件而成

“拒绝访问。”

明明是自己的电脑，Windows 却不让你动一个文件，很难不想右键来一句“以管理员身份运行”。有时候确实管用，有时候只是把问题藏得更深了。

这篇先不碰复杂工具。找一个空文件夹，试着用命令行写几行字，再看看系统到底凭什么决定你能不能修改它。等到下次报错，至少不用只剩下重启和祈祷。

## 黑色窗口也有不同的“语言”

按 `Win + R`，输入 `cmd`，回车。普通权限打开就行。

下面的命令都在 **CMD（命令提示符）** 中运行。Windows Terminal 是承载命令行会话的终端应用，里面可以开 CMD，也可以开 PowerShell；窗口颜色一样，不代表语法一样。把 CMD 的例子直接粘到 PowerShell 里，结果可能不同。

窗口里可能有这样一段提示：

```text
C:\Users\learner>
```

它在告诉你当前位置。`learner` 是示例用户名，末尾的 `>` 是提示符，不需要跟着输入。下面的代码块只写要输入的命令。

先问问自己在哪：

```bat
cd
echo %USERPROFILE%
```

`cd` 不带参数时显示当前目录；`%USERPROFILE%` 通常展开为当前用户的个人目录。不必把别人截图里的 `C:\Users\learner` 硬套到自己的电脑上。

## 文件没丢，可能只是走错了地方

Windows 常用盘符组织路径，比如 `C:\Users\learner\notes.txt`。开头的 `C:` 指定驱动器，反斜杠 `\` 分隔目录；这是一个完整的绝对路径。

而 `notes.txt`、`archive\notes.txt` 是相对路径，要从当前目录出发解释。同一条命令换个目录执行，碰到的就可能是另一个文件。这件事比背十个命令都实用。

```bat
cd ..
cd \
cd /d "%USERPROFILE%"
```

`..` 是上一层，`\` 是当前盘的根目录，`/d` 可以把驱动器和目录一起切换。路径里有空格时，给它加上英文双引号是个好习惯。[微软的 cd 文档](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd)说明了跨盘切换的区别。

普通 Windows 目录通常不区分文件名大小写，但并非永远如此。WSL 和启用大小写敏感标志的目录就是需要留意的情况。写路径时仍按实际名称来，别把习惯当成所有环境的规则。[大小写敏感性说明](https://learn.microsoft.com/en-us/windows/wsl/case-sensitivity)里有这些例外。

### 那几个眼熟的系统目录

以常见的 x64 Windows 为例，认个大概就够用：

| 路径 | 通常放什么 |
| --- | --- |
| `C:\Users` | 各用户的个人目录 |
| `C:\Program Files` | 通常安装 64 位应用 |
| `C:\Program Files (x86)` | 通常安装 32 位应用 |
| `C:\Windows\System32` | 本机 64 位系统组件 |
| `C:\Windows\SysWOW64` | 为兼容 32 位应用保留的组件 |

对，`System32` 里可能是 64 位组件，`SysWOW64` 里反而放 32 位组件。名字容易让人猜反，这是兼容历史留下来的安排。32 位程序访问某些系统路径时还可能发生重定向，细节见[微软的文件系统重定向说明](https://learn.microsoft.com/en-us/windows/win32/winprog64/file-system-redirector)。

知道它们做什么，不代表要进去整理。拿系统目录练习移动和删除，容易把“学会命令”变成“学会重装”。

## 用一个文件夹，串起常用命令

回到个人目录，创建专门的练习空间。**如果已经有同名文件夹，先停下，换个没有用过的名字，并同步替换下面的路径。** 不要让练习覆盖原有文件。

```bat
mkdir "%USERPROFILE%\turing-windows-lab"
cd /d "%USERPROFILE%\turing-windows-lab"
```

接下来一行一行执行，不用管理员权限。只在这个新目录里操作。

```bat
echo hello> notes.txt
echo Windows basics>> notes.txt
type notes.txt
```

应该能看到两行文字：

```text
hello
Windows basics
```

`echo` 输出文字，`type` 显示文本文件内容。这里最需要看清的是那两个箭头：`>` 把输出写进文件，已有内容会被覆盖；`>>` 在末尾追加。少打一个符号，昨天的笔记就可能只剩今天这一句。

文件名带空格时可以这样读：`type "class notes.txt"`。至于照片、程序或其他二进制文件，就别用 `type` 硬看了，满屏乱码不是什么隐藏剧情。

### 改名、复制和移动，不是一回事

```bat
copy notes.txt notes-copy.txt
ren notes-copy.txt backup.txt
mkdir archive
move backup.txt archive\
tree /f
```

执行完，原来的 `notes.txt` 还在当前目录，复制出来的那份变成了 `archive\backup.txt`。`copy` 留下原件，`ren` 改名，`move` 改位置。`tree /f` 会把目录和文件一起列成树，适合检查自己到底把东西放哪了。

找文件与找内容也要分开：

```bat
dir /a
dir /s /b *.txt
find "hello" notes.txt
type notes.txt | find "hello"
more notes.txt
```

`dir /a` 把隐藏、系统属性的项目也列出来；`dir /s /b *.txt` 从当前目录往下找文本文件，并输出简洁路径。`find` 在文件内容里找字符串。管道符 `|` 则把左边命令的输出交给右边处理。文件内容很长时，`more` 可以分屏看。

**隐藏不等于加密。** 一个文件只是没有出现在默认列表里，和别人有没有权限读它，没有直接画等号。[dir 的参数说明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/dir)可以留着需要时查，不必一口气全背下来。

想了解另一个命令，可以试 `help`、`help copy` 或 `dir /?`。`cls` 只是清屏，不会删除刚创建的文件；`exit` 才是退出当前 CMD 会话。

### 删除命令，慢一点学也不吃亏

在练习目录里另做一份可丢弃的副本：

```bat
copy notes.txt disposable.txt
del disposable.txt
mkdir empty-test
rmdir empty-test
```

`del` 删除指定文件，普通 `rmdir` 删除空目录。不要指望这些操作都能像资源管理器那样去回收站找回来。

你可能在教程里看过 `/s` 和 `/q`。对 `rmdir` 来说，前者会连目录里的内容一起删除，后者在配合前者时取消确认。省一次确认，不值得拿整个目录赌。这里不需要它们；具体含义可以查 [rmdir 文档](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/rmdir)。

## “我是谁”和“我能做什么”是两件事

文件管理熟悉以后，再看身份：

```bat
whoami
whoami /groups
whoami /priv
hostname
systeminfo
```

`whoami` 显示当前身份；后两个参数分别查看组和特权。`hostname` 是计算机名，`systeminfo` 则给出系统版本等信息。做实验记录时，版本和执行身份往往比窗口截图的颜色更重要。

这些输出来自你的电脑，不会与别人的截图完全相同。对外分享前检查用户名、主机名和组织等信息，不必把整台电脑的“自我介绍”原封不动贴上网。

还可以用 `net user` 查看本机用户，用 `net localgroup` 查看本地组。账户名、组名可能受语言和配置影响，不要因为没有一个叫 `learner` 的用户就觉得系统坏了。

**Administrator、Administrators 和 SYSTEM 不是三个可以随便替换的名字。** Administrator 通常指内置管理员账户，Administrators 是管理员组；SYSTEM 则是 Windows 用于运行某些服务的高权限身份，并不是 Administrator 的别名。微软的 [LocalSystem 说明](https://learn.microsoft.com/en-us/windows/win32/services/localsystem-account)介绍了这种服务账户。

即使你的账户属于管理员组，平时启动的程序也未必已经提升权限。UAC 会把需要提升权限的操作单独处理，具体提示取决于账户和策略。弹窗不是让你条件反射地点“是”，而是提醒你：这个程序正在要求更大的操作范围。[UAC 的工作方式](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works)可以解释这个差别。

## 权限不是一句“我是管理员”就能讲完的

回到刚才的练习目录，只查看权限，不修改：

```bat
icacls notes.txt
```

在 NTFS 文件系统上，文件和目录可以带有访问控制规则。DACL 是这类规则的列表，ACE 是其中的一条记录，描述某个用户或组被允许或拒绝哪些访问。它不是“用户名单”那么简单。

`icacls` 输出里的缩写，可以先认这几个：

| 标记 | 含义 |
| --- | --- |
| `F` | 完全控制 |
| `M` | 修改 |
| `RX` | 读取和执行 |
| `R` | 读取 |
| `W` | 写入 |
| `D` | 删除 |
| `(I)` | 这条规则继承自父对象 |

`(I)(F)` 因此表示继承来的完全控制规则。实际输出里可能还有适用于子文件或子目录的标志，按[微软的 icacls 文档](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls)逐个对照即可。

想象一个共享作业目录：有的人只需要看题目，有的人需要提交文件，维护者才需要调整权限。把“能读取”“能修改”“能改变授权”分开，比直接给所有人完全控制更符合实际需要。

遇到 `Access is denied`，先核对路径、当前身份和对象的权限，也看看文件是否被占用或受其他保护。不能把所有错误都归成“没开管理员”。某些限制即使提升权限也不会自动消失，更不该靠给整个盘开放权限来解决。

`icacls` 也能改授权，但今天先学会读。别对系统目录练习递归授权，更别为了试试 `/deny` 把自己锁在文件外面。

## 注册表不是一个神秘的加速按钮

注册表保存着不少系统与应用配置。它看上去像目录树，但里面的节点叫**键**，键下面还可以有子键和值；值有名称、类型和数据。

认清几个常见入口就够开始观察：

| 缩写 | 主要用途 |
| --- | --- |
| `HKCU` | 当前用户的配置 |
| `HKLM` | 机器范围的配置 |
| `HKU` | 已加载用户配置的集合 |
| `HKCR` | 文件关联和组件注册等信息的合并视图 |
| `HKCC` | 当前硬件配置相关信息 |

这些入口不是五份完全互不相干的文件夹。注册表数据由不同配置单元及其文件支持，视图之间也有关系。[微软的注册表说明](https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users)有更完整的介绍。

先用只读命令看看当前用户的桌面配置：

```bat
reg query "HKCU\Control Panel\Desktop"
reg /?
```

`reg query` 是查询，不会因为执行了它就修改设置。`regedit` 则会打开图形编辑器；能打开，不代表应该随手删键。网上一句“删除这个就能提速”，解释不了它影响什么，就不值得拿日常系统试。

上篇提到的 SAM、SYSTEM 等配置单元也不是一张随便打开就能读出全部明文密码的表。账户验证数据受权限和其他机制保护，哈希与明文更不是一回事。

今天能读懂一个路径、知道查询和修改的区别，就已经够用了。

下次程序又说“拒绝访问”，先停半秒：它在动哪个文件，以谁的身份运行，想要什么权限？能把问题问具体，比反复点管理员运行更接近答案。

:::

:::section{.lang-en}

> This article was adapted by Codex from previous course slides.

“Access is denied.”

It is your computer, yet Windows refuses to let you change a file. Running the program as administrator can feel like the obvious answer. Sometimes it helps. Sometimes it just hides the question you should have asked.

Leave the specialized tools aside for now. Make a practice folder, write a little text from the command line, and look at how Windows decides whether you may change it. That gives you more to work with next time than a reboot and crossed fingers.

## Similar windows, different languages

Press `Win + R`, enter `cmd`, and press Enter. Open it with ordinary permissions.

All commands below use **CMD, the Command Prompt**. Windows Terminal is a terminal application that can host CMD or PowerShell sessions. Similar window colors do not mean identical syntax; pasting a CMD example into PowerShell may produce a different result.

A prompt might look like this:

```text
C:\Users\learner>
```

It shows your current location. `learner` is an example account, and the trailing `>` belongs to the prompt. Do not type either as part of a command. The following blocks contain only what you enter.

Ask where you are:

```bat
cd
echo %USERPROFILE%
```

With no argument, `cd` displays the current directory. `%USERPROFILE%` normally expands to your user profile directory. You do not need to reproduce someone else's `C:\Users\learner` path.

## The file may be fine. Check your location

Windows commonly organizes paths using drive letters. In `C:\Users\learner\notes.txt`, `C:` names the drive and backslashes separate the directories. This is an absolute path.

`notes.txt` and `archive\notes.txt` are relative paths, interpreted from your current directory. Run the same command somewhere else and it may address a different file. That distinction is more useful than memorizing ten commands.

```bat
cd ..
cd \
cd /d "%USERPROFILE%"
```

`..` means the parent directory, `\` means the current drive's root, and `/d` changes drive and directory together. Quoting paths is a useful habit, especially when they contain spaces. Microsoft's [cd documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd) explains cross-drive navigation.

Ordinary Windows directories usually treat filename case as insignificant, but exceptions exist, including WSL and directories with case sensitivity enabled. Preserve the actual spelling instead of assuming every environment behaves alike. See Microsoft's [case sensitivity guidance](https://learn.microsoft.com/en-us/windows/wsl/case-sensitivity).

### Familiar system directories

On a typical x64 Windows installation:

| Path | Usual purpose |
| --- | --- |
| `C:\Users` | User profile directories |
| `C:\Program Files` | Usually 64-bit applications |
| `C:\Program Files (x86)` | Usually 32-bit applications |
| `C:\Windows\System32` | Native 64-bit system components |
| `C:\Windows\SysWOW64` | Components supporting 32-bit applications |

Yes, those last two names are easy to guess backward. They reflect compatibility history. Some system-path accesses by 32-bit programs can also be redirected; Microsoft's [file system redirector explanation](https://learn.microsoft.com/en-us/windows/win32/winprog64/file-system-redirector) describes that behavior.

Understanding a directory does not make it a good practice target. Moving and deleting files inside Windows itself can turn a lesson in commands into a lesson in reinstalling the system.

## A practice folder is enough

Create a dedicated folder in your profile. **If that name already exists, stop and choose an unused name, replacing the paths below to match.** Do not overwrite existing files for an exercise.

```bat
mkdir "%USERPROFILE%\turing-windows-lab"
cd /d "%USERPROFILE%\turing-windows-lab"
```

Run the following commands one line at a time, without administrator privileges, inside that new directory.

```bat
echo hello> notes.txt
echo Windows basics>> notes.txt
type notes.txt
```

You should see:

```text
hello
Windows basics
```

`echo` outputs text and `type` displays a text file. Watch the redirection symbols: `>` writes output to a file, replacing existing content; `>>` appends. One missing character can reduce yesterday's notes to today's sentence.

For a filename containing spaces, use `type "class notes.txt"`. Do not expect `type` to make a photograph or executable readable. A screen full of binary data is not a hidden message.

### Copying, renaming, and moving

```bat
copy notes.txt notes-copy.txt
ren notes-copy.txt backup.txt
mkdir archive
move backup.txt archive\
tree /f
```

The original `notes.txt` stays in place. Its copy becomes `archive\backup.txt`. `copy` preserves the source, `ren` changes the name, and `move` changes the location. `tree /f` displays directories and files together so you can check the result.

Finding a file and searching its contents are different operations:

```bat
dir /a
dir /s /b *.txt
find "hello" notes.txt
type notes.txt | find "hello"
more notes.txt
```

`dir /a` includes hidden and system entries. `dir /s /b *.txt` searches beneath the current directory and lists matching paths. `find` searches text inside a file; the pipe, `|`, passes one command's output to another. `more` displays long text a screen at a time.

**Hidden is not encrypted.** Being absent from the default listing does not establish who can read a file. Keep the [dir reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/dir) handy rather than memorizing every switch.

Try `help`, `help copy`, or `dir /?` when exploring a command. `cls` clears the screen, not your files. `exit` ends the current CMD session.

### Take your time with deletion

Make a disposable copy inside the practice directory:

```bat
copy notes.txt disposable.txt
del disposable.txt
mkdir empty-test
rmdir empty-test
```

`del` deletes the named file; plain `rmdir` removes an empty directory. Do not assume these operations send items to the Recycle Bin.

You may encounter `/s` and `/q` in tutorials. With `rmdir`, the former includes the directory's contents, while the latter suppresses confirmation when used with it. Saving a confirmation is not worth risking the wrong directory. Neither is needed here; the [rmdir reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/rmdir) explains them.

## Your identity and your permissions are different questions

Now look at the account running the commands:

```bat
whoami
whoami /groups
whoami /priv
hostname
systeminfo
```

`whoami` displays your identity; its switches show groups and privileges. `hostname` gives the computer name, while `systeminfo` reports information such as the operating system version. Those details matter more in a lab record than the terminal's color.

Your output will differ from a tutorial screenshot. Before sharing it, check for account names, computer names, and organizational information. A public troubleshooting post does not need your computer's entire introduction.

`net user` lists local accounts and `net localgroup` lists local groups. Names can vary with language and configuration. A missing account named `learner` does not mean anything is broken.

**Administrator, Administrators, and SYSTEM are not interchangeable.** Administrator commonly refers to the built-in administrator account; Administrators is a group. SYSTEM is a highly privileged identity used by certain Windows services, not another name for Administrator. Microsoft's [LocalSystem documentation](https://learn.microsoft.com/en-us/windows/win32/services/localsystem-account) describes the service account.

Membership in the administrator group also does not mean every program is already elevated. UAC handles elevation separately, with prompts depending on account and policy. A prompt is a reason to consider the requested access, not a reflex test for clicking Yes. See [how UAC works](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works).

## Permissions need more than “I'm the administrator”

Return to the practice directory and inspect, without changing, the file's permissions:

```bat
icacls notes.txt
```

On NTFS, files and directories can carry access-control rules. A DACL is a list of those rules. An ACE is an entry describing access allowed or denied to a user or group, rather than merely naming that identity.

These markers help decode the output:

| Marker | Meaning |
| --- | --- |
| `F` | Full control |
| `M` | Modify |
| `RX` | Read and execute |
| `R` | Read |
| `W` | Write |
| `D` | Delete |
| `(I)` | Inherited from a parent object |

`(I)(F)` therefore marks an inherited full-control rule. Other flags can describe inheritance to child files or directories; consult the [icacls reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls) for those.

Think of a shared coursework directory. Some people need to read the assignment, others need to submit files, and maintainers may need to adjust access. Separating those jobs makes more sense than giving everyone full control.

For `Access is denied`, check the path, current identity, and object's permissions. Consider file locks and other protection mechanisms too. Not every error means “you forgot to run as administrator,” and elevation does not automatically remove every restriction. Opening permissions across an entire drive is not a sensible shortcut.

`icacls` can change permissions as well, but reading them is enough for today. Do not experiment with recursive grants on system directories or lock yourself out merely to try a deny rule.

## The registry is not a performance button

The registry stores many Windows and application settings. It resembles a directory tree, but its nodes are called **keys**. Keys can contain subkeys and values; values have names, types, and data.

Recognize a few common entry points:

| Abbreviation | Main purpose |
| --- | --- |
| `HKCU` | Current user's configuration |
| `HKLM` | Machine-wide configuration |
| `HKU` | Loaded user profiles |
| `HKCR` | A merged view for file associations and component registration |
| `HKCC` | Current hardware-profile information |

These are not five unrelated folders. Different hives and files support registry data, and some views relate to others. Microsoft's [registry overview](https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users) explains those relationships.

Start with a read-only query of the current user's desktop settings:

```bat
reg query "HKCU\Control Panel\Desktop"
reg /?
```

`reg query` reads; running it does not change the setting. `regedit` opens the graphical editor, but access to an editor is not a reason to delete keys. A tip claiming that deleting something will “speed up Windows” should explain its effect before you trust it with your everyday system.

The SAM and SYSTEM hives mentioned in the previous article are not an open table containing every plaintext password. Authentication data has access protections, and a hash is not plaintext.

Understanding a path and distinguishing inspection from modification is enough for a useful start.

When the next program says “access denied,” pause for half a second. Which file is it touching, under which identity, and what access does it need? Those questions get you closer to an answer than repeatedly clicking Run as administrator.

:::
