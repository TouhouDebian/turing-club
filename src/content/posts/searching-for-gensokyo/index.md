---
title: "寻找幻想乡：从科学调查到符卡实验 / Searching for Gensokyo: An Investigation and a Spell Card Experiment"
author: "ChatGPT"
published: 2026-10-26
description: "如果想认真寻找幻想乡，我们需要什么样的证据？从飞行的受力、科技结界的边界，到可以重复的调查计划，再亲手调试一个能导出轨迹数据的弹幕实验。 / What evidence would a serious search for Gensokyo need? Explore flight, technological barriers, and a repeatable investigation, then test a spell card trajectory model and export its data."
image: "./images/cover.jpg"
tags: ["Touhou Project", "Scientific Method", "Physics", "Danmaku"]
category: "天一中学秘封俱乐部 / Secret Sealing Club"
draft: false
---

:::section{.lang-zh}

如果有一天，秘封俱乐部真的收到了一份“幻想乡目击报告”，第一件事该做什么？收拾行李去找博丽神社，还是先看看那张照片有没有原始文件？

去找神社当然更有冒险的味道。但那份原始文件，说不定比一张车票更有用。

喜欢东方，很难不对这个念头心动：博丽大结界的另一边，会不会真有什么？再想远一点，人能不能像灵梦那样飞，符卡能不能搬进现实？这些问题看上去中二，认真追问下去，却会碰到受力、测量、程序设计这些很具体的东西。

我更愿意从这里出发。**目前没有可靠的实证支持幻想乡作为现实地点存在**，但这不妨碍我们把好奇心变成能动手做的事。先别急着宣布发现了新世界，也不用急着把问题扔掉。

## 先想清楚，我们究竟在找什么

“幻想乡存在”可以指很多不同的事：一个与原作描述相似的隐蔽地点、一套能遮挡观测的装置，或者一个与外界隔离的空间。这些说法需要不同的证据，不能混在一起验证。

比如在山里找到一座神社，周围地形还挺像游戏场景。拍照留念没问题，直接宣布“找到了”就有点着急了。普通神社、创作取材、巧合，都可能造成这种相似。凭什么偏偏是幻想乡？需要回答的是这个问题。

也可以提出一个更强的说法：“结界完全隐藏了一切，所以什么也测不到。”这在故事里很迷人，但如果它与“不存在结界”对所有实验都给出相同结果，我们就无法用这些实验区分两者。

不妨在笔记本上留一行：**如果猜错了，看到什么结果，我才肯改主意？**

## 能飞起来，离找到幻想乡还有多远

人能飞，结界也能模拟，听起来是不是离幻想乡近了一步？

近的是技术，不一定是那个地方。做出相似的效果，和找到它真实存在的证据，是两件事。我们能造出飞行器，却不能据此确认灵梦正在某处喝茶。

以悬停为例。在简化的静力模型中，向上作用力需要平衡重力：

$$
F_{\mathrm{up}} = mg
$$

假设被支撑物体的总质量为 $60\,\mathrm{kg}$，取 $g=9.81\,\mathrm{m/s^2}$，就需要约 $588.6\,\mathrm{N}$ 的向上作用力。这个数字只是受力平衡的最低要求，还没有解决能量来源、稳定控制和持续时间。真实载人系统还必须计入设备等质量。[NASA 的飞行入门资料](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/four-forces-on-an-airplane/)也将克服重力与控制飞行作为基本问题。

飞机、旋翼、喷气推进，已经让人类借助装置飞了起来。难的是原作里那种看不出推进装置、说走就走的自由飞行：向上的力从哪来，怎么转弯，怎么停？这些都得有能测量的解释。

受力分析可以先在纸上做。本人就不必充当实验飞行器了。

## 把“博丽大结界”拆成能测量的功能

“做一个结界”太难下手。换个问法：我们到底想让什么进不来，又想让什么看不见？

| 想实现的效果 | 可以研究的现实对应 | 能支持的结论 |
| --- | --- | --- |
| 限制通行 | 屏障、门禁和身份验证 | 特定入口可以受到控制 |
| 减少被看见的机会 | 遮挡、伪装和观察条件 | 某些视角或波段下更难观察 |
| 减弱电磁信号 | 被动屏蔽与信号测量 | 特定条件下存在可量化的衰减 |
| 与外部环境部分隔离 | 受控环境与封闭系统 | 某些交换过程受到限制 |
| 分隔两个空间 | 需要明确的新物理模型 | 目前不能由上述工程实验推出 |

屏蔽箱就很适合拿来讨论这件事。它能让里面的信号变弱，不过尺寸、材料、开口、工作频段一变，结果也可能变。箱子里没信号，不代表箱子从地图上消失了。

如果做被动屏蔽实验，可以在固定发射端、接收端、距离和设置后，比较“无屏蔽”“真实屏蔽”“外观相似的假屏蔽”三种条件。随机安排顺序，记录设备校准、环境变化和多次读数；不使用主动干扰设备。

对相同测量条件下的功率，可以用下面的量表示衰减：

$$
A_{\mathrm{dB}} = 10\log_{10}\left(\frac{P_{\mathrm{before}}}{P_{\mathrm{after}}}\right)
$$

至于手机突然没信号，先别给博丽神社发贺电。普通遮挡、覆盖不足、设备或测量问题有没有查过？查完还有解释不了的部分，那才有继续研究的意思。

## 一份允许失败的调查计划

真要把它做成社团项目，我会先安排一个十八周的版本，暂且叫 GERP-01。名字可以有点仪式感，计划则得朴素：谁查资料，谁做实验，做完留下什么。时间不必卡死，查到一半发现思路不对，回头重做也很正常。

| 阶段 | 建议时间 | 要交出的东西 |
| --- | --- | --- |
| 原作资料审查 | 第 1–2 周 | 记录出处的设定证据表，区分原作、角色陈述与二次创作 |
| 地理与历史核查 | 第 3–6 周 | 使用事先写好的匹配规则，记录符合与不符合的线索 |
| 飞行可行性建模 | 第 7–8 周 | 受力、能量与控制的模型，以及模型假设 |
| 结界功能实验 | 第 9–12 周 | 被动屏蔽或遮挡的对照实验与误差记录 |
| 异常复核 | 第 13–16 周 | 多次观测、对照数据和独立复核结果 |
| 公开复现 | 第 17–18 周 | 原始数据、分析代码、失败结果和结论限制 |

不用一上来就买仪器。找一条原作设定，记下出处，想清楚它在什么条件下能检验，什么结果算没找到支持。资料审查和计算机模拟，就够开始忙一阵了。

比较基准也别定得太大。测一组信号，就问已知的环境和测量因素能不能解释它；认为不能，就写出不同解释各自会预测什么。一次实验负责一个具体问题，没必要让它扛起整个世界观。

### 有异常之后，才是更需要耐心的时候

一张奇怪照片、一条飘忽的定位记录，适合成为待核查线索。想让它承担更强的结论，还需要继续问：

- 原始文件和完整记录还在吗，是否经过剪辑或筛选？
- 同一条件下重复测量，会不会再次出现？
- 独立设备与普通对照地点给出了什么结果？
- 不知道原结论的人，能否用预先约定的方法重现分析？
- 已检查哪些常见解释，哪些仍然没有排除？

测量值旁边也该留出误差的位置。一个漂亮的小数，不会因为位数多就更可信。[NIST 的测量术语说明](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology)可以用来查重复性、复现性和误差该怎么表述。

这些工作很磨耐心。但“暂时解释不了”，离“只能是幻想乡”之间，还有很长一段路。

## 人类能不能使用符卡

结界一时做不出来，弹幕倒是可以现在就试。

先约定一个做得到的版本：给阵型取个名字，按规则生成光点，让它们沿预定轨迹移动，到时间就结束。这套“符卡”可以写成程序。徒手凭空制造能量弹，是另一个需要物理证据的问题，暂时不算在这份代码的能力里。

现实技术也可以提供不同层次的类比。屏幕或投影可以显示弹幕图案；编队装置可以控制物体的位置；声悬浮研究可以在特定装置中操纵小颗粒。例如 [Marzo 等人的声学操控研究](https://www.nature.com/articles/ncomms9661)展示了用超声阵列操纵悬浮颗粒。这些结果有各自的材料、尺度与装置条件，不能直接扩展成“任何物体都能像游戏弹丸一样飞行”。

浏览器里的版本简单一些：一个**二维运动学模型**。光点从哪出发、什么时候出发、下一秒走到哪，都能算出来。

## 弹幕实验：从一圈光点开始

<iframe src="../../experiments/spell-card/index.html?lang=zh" title="符卡轨迹交互实验" loading="lazy" style="width:100%;height:820px;border:0;border-radius:8px;"></iframe>

打开时先停在螺旋阵型展开的 $2.4$ 秒，按播放就能接着看。切到“封印”试试，光点会拐弯，拖尾也会跟着弯过去；“环形”则是一圈向外散开的直线。

时间滑杆可以来回拖，步进按钮每次前进 $0.1$ 秒，复位回到起点。改变参数会暂停并回到 $2.4$ 秒的预览，方便比较阵型。如果内嵌区域显示不全，可以[单独打开实验](../../experiments/spell-card/index.html?lang=zh)。

演示的逻辑坐标固定为 $900\times560$，不随手机或电脑的显示尺寸改变。这里的 $u$ 是程序坐标单位，不是米；$y$ 轴向下，与屏幕坐标一致。

### 环形弹幕的公式

让 $N$ 个粒子从 $(x_0,y_0)=(450,280)$ 同时出发，第 $i$ 个粒子的角度为：

$$
\theta_i = \frac{2\pi i}{N}+\theta_0,\quad i=0,\ldots,N-1
$$

每个粒子保持自己的发射方向，径向速度为 $v$，则在时间 $t$ 的位置为：

$$
x_i(t)=x_0+vt\cos\theta_i
$$

$$
y_i(t)=y_0+vt\sin\theta_i
$$

切到环形，取 $v=90\,u/s$、$\theta_0=0$。第一个粒子在 $t=1$ 秒时应该到 $(540,280)$，两秒时到 $(630,280)$。拖一下时间滑杆，再看看“首粒子”读数，公式有没有说到做到？

弹数调大，画面会变密，单个粒子可不会因此跑得更快。它只管自己的速度。

### 螺旋和“封印”怎样生成

“螺旋”模式每隔 $0.55$ 秒发射一轮，最多八轮，每轮的初始角度比上一轮增加 $0.2$ 弧度（约 $11.46^\circ$）。每个粒子仍沿直线运动，整体排布却会形成旋转展开的图案。

“封印”模式进一步让粒子的极角随其发射后的年龄 $\tau$ 增加：

$$
r=v\tau,\qquad \phi=\theta+0.65\tau
$$

再用 $x=x_0+r\cos\phi$、$y=y_0+r\sin\phi$ 计算位置。因此这里的 $v$ 始终表示**径向速度**；在曲线模式中，它不等于粒子总速度。

“封印”是本演示自定义的阵型名称，灵感来自符卡演出，并非对原作招式的精确复刻。程序直接指定轨迹，没有计算让粒子转弯所需的力，也没有模拟重力、碰撞或能量来源。

### 把一次好看的演出变成可检验的结果

可以先做四个小实验，每次只改一个条件：

1. 环形模式下保持角度不变，把速度从 $90$ 改为 $120$，比较同一时刻到圆心的距离。
2. 保持速度不变，把初始角度从 $0^\circ$ 改成 $90^\circ$，检查首粒子的运动方向。
3. 改变每轮弹数，观察角度间隔，而不是只比较画面密不密。
4. 使用完全相同的参数复位重放，再导出两次 CSV，比较相同时间和编号的坐标。

CSV 每隔 $0.1$ 秒采样一次，记录阵型、参数、轮次、粒子编号和位置，范围为 $0$ 到 $8$ 秒。导出包含已经离开画面的粒子，所以 CSV 行数不一定等于某一时刻的“可见粒子”数量。

两次导出的坐标一致，说明这套程序按同样的规则给出了同样的结果。挺好，但还不是超能力的证据。屏幕上这片弹幕，归根结底是我们写进去的数学。

## 给秘封俱乐部留一个真正的起点

第一份记录里没有惊天发现，也不丢人。哪条线索没对上，哪个效果能模拟，哪件事还想不出测量办法，都可以老实写下来。

愿意查设定，就从一条有出处的陈述开始；想写代码，就改一个弹幕参数，猜猜结果，再拿坐标核对。把过程留下来，下一位社员就不用从零猜起。

如果有一天真的遇到异常，我们至少已经学会了先保存原始记录。那张车票可以晚一点再买。

:::

:::section{.lang-en}

If the Secret Sealing Club received a “Gensokyo sighting report” tomorrow, what should come first: packing for Hakurei Shrine, or asking for the photograph's original file?

The shrine sounds like the better adventure. Still, that original file might be more useful than a train ticket.

If you like Touhou, the thought is hard to resist. Could something really be hiding beyond the Hakurei Barrier? Could we fly like Reimu, or bring a spell card into the real world? Follow those questions far enough and you run into surprisingly ordinary things: forces, measurements, and code.

That seems like a good place to start. **There is currently no reliable empirical evidence establishing Gensokyo as a real place.** We can be honest about that and still find something worth making. No discovery announcement required.

## What would we actually be looking for?

“Gensokyo exists” could mean a concealed geographical region, a device that interferes with observation, or a separate space connected to our world. Each claim requires different evidence.

A mountain shrine looks remarkably like a scene from the games. Great photograph; premature discovery. Ordinary shrines, artistic inspiration, and coincidence could all explain the resemblance. Why pick Gensokyo over those explanations? That is the question the evidence needs to answer.

A perfectly concealing barrier creates a further difficulty. If its existence and its absence predict exactly the same observations, those experiments cannot distinguish between the claims. Before beginning, write down a useful question: **what result would make us reconsider our hypothesis?**

## Flight and the limits of an engineering demonstration

If we can make people fly and build something resembling a barrier, are we getting closer?

Closer to an engineering result, perhaps. Not necessarily closer to that place. Building an aircraft does not establish that Reimu is somewhere drinking tea. Reproducing an effect and finding evidence for a particular world are different jobs.

For stationary hovering in a simplified force model, upward force must balance weight:

$$
F_{\mathrm{up}}=mg
$$

A total supported mass of $60\,\mathrm{kg}$ requires approximately $588.6\,\mathrm{N}$ at $g=9.81\,\mathrm{m/s^2}$. That is only the force balance. Energy, control, and endurance remain separate engineering questions, and an actual system must include equipment mass. [NASA's introduction to flight forces](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/four-forces-on-an-airplane/) likewise identifies overcoming weight and controlling flight as basic concerns.

Aircraft, rotors, and jet propulsion already let people fly with equipment. The interesting part of Reimu's flight is the missing machinery. Where does the upward force come from? How does she turn or stop? Those questions still need measurable answers.

Paper calculations are a perfectly good start. There is no need to volunteer as the test aircraft.

## Break the barrier into measurable functions

What exactly should a barrier block, and what should it allow?

| Intended effect | Possible engineering counterpart | Conclusion it could support |
| --- | --- | --- |
| Restrict entry | Physical barriers and authentication | Access through specified entrances can be controlled |
| Reduce visibility | Occlusion, camouflage, and observation conditions | Observation becomes harder under certain conditions |
| Attenuate electromagnetic signals | Passive shielding and signal measurements | Measurable attenuation occurs under defined conditions |
| Partly isolate an environment | Controlled or enclosed systems | Some exchanges with the surroundings are limited |
| Separate spaces | A specific new physical model | This does not follow from the previous demonstrations |

A shielded box makes a useful small example. It may weaken a signal, but change its dimensions, material, openings, or frequency range and the result can change too. Losing reception inside a box does not mean the box has disappeared from the map.

A passive shielding comparison could use no shielding, real shielding, and a visually similar sham condition. Keep transmitter and receiver settings and geometry fixed, randomize the order, and record calibration, environmental changes, and repeated readings. This proposal does not use active jamming.

For power measurements under matching conditions, attenuation can be written as:

$$
A_{\mathrm{dB}}=10\log_{10}\left(\frac{P_{\mathrm{before}}}{P_{\mathrm{after}}}\right)
$$

A phone losing reception is an observation to investigate. Coverage, ordinary obstructions, equipment behavior, and measurement issues need checking before invoking an unfamiliar mechanism.

## An investigation that allows a negative result

For a club project, I would try an eighteen-week schedule and give it a slightly grand name: GERP-01. The work underneath should stay practical. Who checks the sources? Who takes measurements? What records do they leave? The schedule is a suggestion, not a deadline for discovering a hidden world.

| Stage | Suggested timing | Deliverable |
| --- | --- | --- |
| Source review | Weeks 1–2 | Referenced claims distinguishing primary works, character statements, and fan creations |
| Geography and history | Weeks 3–6 | Both matching and nonmatching clues assessed with predetermined criteria |
| Flight modeling | Weeks 7–8 | Force, energy, and control models with explicit assumptions |
| Barrier-function experiments | Weeks 9–12 | Controlled passive shielding or occlusion measurements |
| Anomaly review | Weeks 13–16 | Repeated observations, controls, and independent review |
| Open replication | Weeks 17–18 | Raw data, analysis code, negative results, and limitations |

There is no equipment shopping list to finish before starting. Pick a sourced claim, work out how it could be tested, and write down what a negative result would look like. Source checking and computer models can keep a club busy for a while.

For a particular measurement, a practical baseline is that ordinary environmental and measurement factors explain the data. Compare that baseline with a specific anomaly prediction. A single experiment cannot test every possible version of an entire fictional world.

### An anomaly calls for more care

A strange photograph or a drifting location record can motivate a check. Stronger conclusions need stronger records:

- Are the original files and complete logs available?
- Does the observation recur under the same conditions?
- What do independent instruments and ordinary control locations show?
- Can someone unaware of the original conclusion repeat the analysis using a predetermined method?
- Which ordinary explanations have been checked, and which remain open?

Leave room for uncertainty beside the measurement. More decimal places do not make a number more trustworthy. [NIST's terminology guidance](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology) helps with repeatability, reproducibility, and measurement language.

This takes patience. There is a lot of ground between “we cannot explain this yet” and “it must be Gensokyo.”

## Could people use spell cards?

A barrier may have to wait. Danmaku is something we can try right now.

Give a pattern a name, create some visible points, send them along planned paths, and stop at an agreed time. That version of a spell card fits quite comfortably in software. Producing energy projectiles from bare hands is a different claim, and not one this code can settle.

Screens and projectors can display patterns. Coordinated devices can control object positions. Acoustic levitation can manipulate small particles under particular apparatus conditions: [Marzo and colleagues' study](https://www.nature.com/articles/ncomms9661), for example, demonstrates ultrasonic manipulation of levitated particles. Each technology has material, scale, and apparatus limitations.

The browser version is simpler: a **two-dimensional kinematic model**. We can work out where every point starts and where it should be a second later.

## Danmaku experiment

<iframe src="../../experiments/spell-card/index.html?lang=en" title="Interactive spell card trajectory experiment" loading="lazy" style="width:100%;height:820px;border:0;border-radius:8px;"></iframe>

The experiment opens on a paused spiral at $2.4$ seconds. Press play to continue. Try Seal: its particles turn, and their trails bend with them. Ring sends a single circle straight outward.

Scrub through time with the slider, step forward by $0.1$ seconds, or reset to the origin. Changing a parameter pauses at the same $2.4$-second preview for comparison. You can also [open the experiment on its own](../../experiments/spell-card/index.html?lang=en).

Logical coordinates remain $900\times560$ on both phones and computers. The unit $u$ is a coordinate unit, not a meter. The $y$ axis points downward, matching screen coordinates.

### A ring of particles

Release $N$ particles at $(x_0,y_0)=(450,280)$. Their directions are:

$$
\theta_i=\frac{2\pi i}{N}+\theta_0,\quad i=0,\ldots,N-1
$$

With constant radial speed $v$ and fixed directions, their positions are:

$$
x_i(t)=x_0+vt\cos\theta_i
$$

$$
y_i(t)=y_0+vt\sin\theta_i
$$

Select Ring, with $v=90\,u/s$ and $\theta_0=0$. The first particle should reach $(540,280)$ after one second and $(630,280)$ after two. Move the time slider and check the readout. Does the formula keep its promise?

Changing the number of particles changes the spacing between directions. It does not increase an individual particle's speed in this model.

### Spiral and seal patterns

Spiral mode emits a wave every $0.55$ seconds, for at most eight waves. Each wave rotates its launch directions by $0.2$ radians (about $11.46^\circ$). Individual particles still travel in straight lines, while the collection forms a rotating pattern.

Seal mode additionally changes each particle's polar angle with its age $\tau$:

$$
r=v\tau,\qquad\phi=\theta+0.65\tau
$$

Positions then follow $x=x_0+r\cos\phi$ and $y=y_0+r\sin\phi$. Consequently, $v$ always denotes **radial speed** here; it is not the total speed of a particle following a curve.

Seal is a custom name inspired by spell card performances, rather than an exact reconstruction of an original attack. The program prescribes trajectories directly. It does not calculate the forces needed to bend them, gravity, collisions, or an energy source.

### Test a prediction

Change one condition at a time:

1. In ring mode, change speed from $90$ to $120$ and compare distance from the origin at the same time.
2. Keep speed fixed and change the initial angle from $0^\circ$ to $90^\circ$. Check the first particle's direction.
3. Change particles per wave and compare angular spacing.
4. Reset and repeat identical parameters, export two CSV files, and compare positions at matching times and particle indices.

CSV export samples every $0.1$ seconds from $0$ to $8$ seconds. It records the pattern, parameters, wave, particle index, and coordinates, including particles that have left the visible field. Its row count therefore differs from the visible-particle count at a particular instant.

Matching coordinates tell us that the program followed the same rules twice. Useful, yes. Evidence of supernatural powers, no. The danmaku on the screen is the mathematics we put into it.

## A useful first project for the club

There is nothing embarrassing about a notebook without a spectacular discovery. Record the clue that did not hold up, the effect that could be modeled, or the claim you still cannot find a way to measure.

Like digging through lore? Start with one sourced statement. Prefer code? Change a danmaku parameter, predict a position, and check it. Leave enough of the process for the next club member to pick up where you stopped.

If an unexpected observation ever does appear, we will at least know to preserve the original record before buying a ticket.

:::
