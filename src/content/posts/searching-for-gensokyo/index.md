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

这篇文章从一场关于“如何证实幻想乡存在”的[对话](https://chatgpt.com/share/6adf0d32-67c8-83ee-afbe-de163771aeca)开始。问题一路发展：人类能不能飞行？科技能不能实现博丽大结界？既然这样，我们能不能发射弹幕、使用符卡？

这些问题很适合成为社团研究的起点。我们可以保留幻想的吸引力，同时给调查加上一条约定：**结论可以令人期待，证据必须经得起检查。** 目前没有可靠的实证支持幻想乡作为现实地点存在；下面提出的是研究方案与工程模型，不是一份已经发现幻想乡的报告。

## 先想清楚，我们究竟在找什么

“幻想乡存在”可以指很多不同的事：一个与原作描述相似的隐蔽地点、一套能遮挡观测的装置，或者一个与外界隔离的空间。这些说法需要不同的证据，不能混在一起验证。

比如，我们在山里找到一座神社，周围的地形很像游戏里的场景。它首先说明的是地理或文化上的相似。要进一步认为它就是幻想乡，还得解释为什么普通神社、创作取材和巧合不足以解释这些特征。

也可以提出一个更强的说法：“结界完全隐藏了一切，所以什么也测不到。”这在故事里很迷人，但如果它与“不存在结界”对所有实验都给出相同结果，我们就无法用这些实验区分两者。

因此，调查开始前需要写下一个问题：**如果我们的猜测错了，什么结果会让我们承认它错了？**

## 能飞起来，离找到幻想乡还有多远

对话提出了一条很直观的思路：如果人类可以飞行，结界也能用科技模拟，那么幻想乡是不是就更有可能存在？

这里有两项需要分别完成的工作。一项是研究某种效果如何实现，另一项是调查那个世界是否真实存在。造出一种相似效果，可以帮助我们了解技术边界，但不能单独确认某个地点或人物的存在。

以悬停为例。在简化的静力模型中，向上作用力需要平衡重力：

$$
F_{\mathrm{up}} = mg
$$

假设被支撑物体的总质量为 $60\,\mathrm{kg}$，取 $g=9.81\,\mathrm{m/s^2}$，就需要约 $588.6\,\mathrm{N}$ 的向上作用力。这个数字只是受力平衡的最低要求，还没有解决能量来源、稳定控制和持续时间。真实载人系统还必须计入设备等质量。[NASA 的飞行入门资料](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/four-forces-on-an-airplane/)也将克服重力与控制飞行作为基本问题。

飞机、旋翼和喷气推进说明人类可以借助装置飞行。原作中那种没有明显推进装置的自由飞行，则还需要具体、可测量的作用机制。我们可以先做受力分析和模拟，不必把自己当成待测试的飞行器。

## 把“博丽大结界”拆成能测量的功能

一个词越宏大，越值得拆开。结界究竟要阻止什么，又要允许什么？

| 想实现的效果 | 可以研究的现实对应 | 能支持的结论 |
| --- | --- | --- |
| 限制通行 | 屏障、门禁和身份验证 | 特定入口可以受到控制 |
| 减少被看见的机会 | 遮挡、伪装和观察条件 | 某些视角或波段下更难观察 |
| 减弱电磁信号 | 被动屏蔽与信号测量 | 特定条件下存在可量化的衰减 |
| 与外部环境部分隔离 | 受控环境与封闭系统 | 某些交换过程受到限制 |
| 分隔两个空间 | 需要明确的新物理模型 | 目前不能由上述工程实验推出 |

一个屏蔽箱可以让里面的信号变弱，但它的尺寸、材料、开口和工作频段都会影响结果。它不会自动把一片地理区域从世界上移走。

如果做被动屏蔽实验，可以在固定发射端、接收端、距离和设置后，比较“无屏蔽”“真实屏蔽”“外观相似的假屏蔽”三种条件。随机安排顺序，记录设备校准、环境变化和多次读数；不使用主动干扰设备。

对相同测量条件下的功率，可以用下面的量表示衰减：

$$
A_{\mathrm{dB}} = 10\log_{10}\left(\frac{P_{\mathrm{before}}}{P_{\mathrm{after}}}\right)
$$

手机偶尔失去信号，距离“发现结界”还很远。先检查普通的遮挡、覆盖、设备和测量问题，才知道是否真的留下了需要解释的现象。

## 一份允许失败的调查计划

原对话给出了 GERP-01，即“幻想乡存在性调查计划”。下面保留它的六阶段思路，把时间视为社团可调整的建议排期。

| 阶段 | 建议时间 | 要交出的东西 |
| --- | --- | --- |
| 原作资料审查 | 第 1–2 周 | 记录出处的设定证据表，区分原作、角色陈述与二次创作 |
| 地理与历史核查 | 第 3–6 周 | 使用事先写好的匹配规则，记录符合与不符合的线索 |
| 飞行可行性建模 | 第 7–8 周 | 受力、能量与控制的模型，以及模型假设 |
| 结界功能实验 | 第 9–12 周 | 被动屏蔽或遮挡的对照实验与误差记录 |
| 异常复核 | 第 13–16 周 | 多次观测、对照数据和独立复核结果 |
| 公开复现 | 第 17–18 周 | 原始数据、分析代码、失败结果和结论限制 |

先从零成本的资料审查与计算机模拟做起就很好。每条线索都写明“在什么条件下能检验”“什么结果算没有支持”，比先购买一堆仪器更有用。

对于某一组测量，可以把“数据由已知环境与测量因素解释”作为比较基准，再提出具体的异常预测。这比把“整个幻想乡不存在”当作一次实验的零假设更容易操作。实验测量的是指定现象，不可能一次包办整个世界观。

### 有异常之后，才是更需要耐心的时候

一张奇怪照片、一条飘忽的定位记录，适合成为待核查线索。想让它承担更强的结论，还需要继续问：

- 原始文件和完整记录还在吗，是否经过剪辑或筛选？
- 同一条件下重复测量，会不会再次出现？
- 独立设备与普通对照地点给出了什么结果？
- 不知道原结论的人，能否用预先约定的方法重现分析？
- 已检查哪些常见解释，哪些仍然没有排除？

测量还应报告不确定性，而不只给一个漂亮数值。关于重复性、复现性与误差表述，可以参考 [NIST 的测量术语说明](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology)。完成这些程序会提高证据质量，却不会自动给异常贴上“幻想乡制造”的标签。

## 人类能不能使用符卡

聊到这里，调查终于走进了最适合动手的一部分：让一组可见光点按照规则出现，形成命名的阵型，并在固定条件下开始和结束。

如果把“符卡”定义为这样一套预设的视觉与控制规则，我们可以在程序中实现它。至于徒手凭空制造能量弹、让光球作为独立物体缓慢移动，则需要另外的物理证据。

现实技术也可以提供不同层次的类比。屏幕或投影可以显示弹幕图案；编队装置可以控制物体的位置；声悬浮研究可以在特定装置中操纵小颗粒。例如 [Marzo 等人的声学操控研究](https://www.nature.com/articles/ncomms9661)展示了用超声阵列操纵悬浮颗粒。这些结果有各自的材料、尺度与装置条件，不能直接扩展成“任何物体都能像游戏弹丸一样飞行”。

下面先用浏览器实现最容易检查的版本：一个**二维运动学模型**。

## 弹幕实验：从一圈光点开始

<iframe src="../../experiments/spell-card/index.html?lang=zh" title="符卡轨迹交互实验" loading="lazy" style="width:100%;height:820px;border:0;border-radius:8px;"></iframe>

如果内嵌区域无法显示，可以[单独打开弹幕实验](../../experiments/spell-card/index.html?lang=zh)。点击播放，观察粒子运动；暂停后可以用步进按钮每次前进 $0.1$ 秒，复位会回到起点。改变参数也会暂停并复位，便于比较不同设置。

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

取默认的 $v=90\,u/s$、$\theta_0=0$，第一个粒子在 $t=1$ 秒时应当位于 $(540,280)$，在 $t=2$ 秒时位于 $(630,280)$。可以暂停后逐步推进，比较下方的“首粒子”读数。

注意，改变粒子数量只改变方向之间的间隔；在这个模型里，同一速度下的单个粒子不会因此跑得更快。

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

相同参数与时间会产生相同坐标，支持的是程序模型的确定性。屏幕上的画面变化展示了我们写下的运动规律；它不会测出自然界是否存在超能力。这个区别，就是整篇调查计划一直在守住的结论边界。

## 给秘封俱乐部留一个真正的起点

第一份研究成果不一定要写“发现了什么”。也可以写清楚：排除了哪些线索、什么效果能模拟、哪一项仍然缺少测量办法。

先找一条原作陈述，记录出处；再给它设计一个可能失败的检验。或者从上面的弹幕实验开始，改一个参数，提出预测，再用导出的坐标检查预测。这样的工作既保留了探索未知的乐趣，也能让下一位社员接着做下去。

如果有一天真的遇到异常，我们至少已经学会了先保存原始记录。那张车票可以晚一点再买。

:::

:::section{.lang-en}

If the Secret Sealing Club received a “Gensokyo sighting report” tomorrow, what should come first: packing for Hakurei Shrine, or asking for the photograph's original file?

This article began with a [conversation about establishing whether Gensokyo exists](https://chatgpt.com/share/6adf0d32-67c8-83ee-afbe-de163771aeca). The questions developed into human flight, a technological Hakurei Barrier, an investigation plan, and finally danmaku and spell cards.

They make engaging research prompts, provided that conclusions remain accountable to evidence. There is currently no reliable empirical evidence establishing Gensokyo as a real place. What follows is a proposed investigation and a set of engineering models, rather than a report of a discovery.

## What would we actually be looking for?

“Gensokyo exists” could mean a concealed geographical region, a device that interferes with observation, or a separate space connected to our world. Each claim requires different evidence.

A shrine surrounded by scenery resembling the games first establishes a cultural or geographical similarity. Calling it Gensokyo requires evidence that distinguishes that interpretation from an ordinary shrine, artistic inspiration, or coincidence.

A perfectly concealing barrier creates a further difficulty. If its existence and its absence predict exactly the same observations, those experiments cannot distinguish between the claims. Before beginning, write down a useful question: **what result would make us reconsider our hypothesis?**

## Flight and the limits of an engineering demonstration

The conversation suggested starting with human flight and technological barriers. Reproducing an effect can reveal what engineering permits. Establishing that a particular place or person exists requires additional evidence.

For stationary hovering in a simplified force model, upward force must balance weight:

$$
F_{\mathrm{up}}=mg
$$

A total supported mass of $60\,\mathrm{kg}$ requires approximately $588.6\,\mathrm{N}$ at $g=9.81\,\mathrm{m/s^2}$. That is only the force balance. Energy, control, and endurance remain separate engineering questions, and an actual system must include equipment mass. [NASA's introduction to flight forces](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/four-forces-on-an-airplane/) likewise identifies overcoming weight and controlling flight as basic concerns.

Aircraft, rotors, and jet propulsion show that people can fly using equipment. Flight without an apparent propulsion mechanism would still need a measurable physical explanation. Force analysis and simulation are sensible starting points.

## Break the barrier into measurable functions

What exactly should a barrier block, and what should it allow?

| Intended effect | Possible engineering counterpart | Conclusion it could support |
| --- | --- | --- |
| Restrict entry | Physical barriers and authentication | Access through specified entrances can be controlled |
| Reduce visibility | Occlusion, camouflage, and observation conditions | Observation becomes harder under certain conditions |
| Attenuate electromagnetic signals | Passive shielding and signal measurements | Measurable attenuation occurs under defined conditions |
| Partly isolate an environment | Controlled or enclosed systems | Some exchanges with the surroundings are limited |
| Separate spaces | A specific new physical model | This does not follow from the previous demonstrations |

A shielded enclosure may weaken signals, but its dimensions, material, openings, and frequency range matter. Such a result does not remove a geographical region from the world.

A passive shielding comparison could use no shielding, real shielding, and a visually similar sham condition. Keep transmitter and receiver settings and geometry fixed, randomize the order, and record calibration, environmental changes, and repeated readings. This proposal does not use active jamming.

For power measurements under matching conditions, attenuation can be written as:

$$
A_{\mathrm{dB}}=10\log_{10}\left(\frac{P_{\mathrm{before}}}{P_{\mathrm{after}}}\right)
$$

A phone losing reception is an observation to investigate. Coverage, ordinary obstructions, equipment behavior, and measurement issues need checking before invoking an unfamiliar mechanism.

## An investigation that allows a negative result

The original conversation proposed GERP-01, a Gensokyo existence investigation. Its six-stage structure can serve as an adjustable club schedule:

| Stage | Suggested timing | Deliverable |
| --- | --- | --- |
| Source review | Weeks 1–2 | Referenced claims distinguishing primary works, character statements, and fan creations |
| Geography and history | Weeks 3–6 | Both matching and nonmatching clues assessed with predetermined criteria |
| Flight modeling | Weeks 7–8 | Force, energy, and control models with explicit assumptions |
| Barrier-function experiments | Weeks 9–12 | Controlled passive shielding or occlusion measurements |
| Anomaly review | Weeks 13–16 | Repeated observations, controls, and independent review |
| Open replication | Weeks 17–18 | Raw data, analysis code, negative results, and limitations |

Source review and computer modeling can begin without buying equipment. For each claim, specify how to test it and what would count as a result that does not support it.

For a particular measurement, a practical baseline is that ordinary environmental and measurement factors explain the data. Compare that baseline with a specific anomaly prediction. A single experiment cannot test every possible version of an entire fictional world.

### An anomaly calls for more care

A strange photograph or a drifting location record can motivate a check. Stronger conclusions need stronger records:

- Are the original files and complete logs available?
- Does the observation recur under the same conditions?
- What do independent instruments and ordinary control locations show?
- Can someone unaware of the original conclusion repeat the analysis using a predetermined method?
- Which ordinary explanations have been checked, and which remain open?

Report uncertainty alongside measurements. [NIST's terminology guidance](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology) is a useful reference for repeatability, reproducibility, and measurement language. Completing these procedures improves the evidence without automatically assigning an anomaly to Gensokyo.

## Could people use spell cards?

Define a spell card operationally as a named visual pattern with a trigger, a set of trajectories, a duration, and an ending condition. We can implement those rules in software. Creating independent energy projectiles without equipment would require different physical evidence.

Screens and projectors can display patterns. Coordinated devices can control object positions. Acoustic levitation can manipulate small particles under particular apparatus conditions: [Marzo and colleagues' study](https://www.nature.com/articles/ncomms9661), for example, demonstrates ultrasonic manipulation of levitated particles. Each technology has material, scale, and apparatus limitations.

Our experiment begins with a more directly inspectable object: a **two-dimensional kinematic model** in the browser.

## Danmaku experiment

<iframe src="../../experiments/spell-card/index.html?lang=en" title="Interactive spell card trajectory experiment" loading="lazy" style="width:100%;height:820px;border:0;border-radius:8px;"></iframe>

You can also [open the experiment on its own](../../experiments/spell-card/index.html?lang=en). Play starts motion. Pause freezes it, step advances $0.1$ seconds, and reset returns to the origin. Changing a parameter pauses and resets the experiment so comparisons begin from the same state.

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

At the default $v=90\,u/s$ and $\theta_0=0$, the first particle should be at $(540,280)$ after one second and $(630,280)$ after two seconds. Use pause and step to compare the first-particle readout with those predictions.

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

Matching parameters and times produce matching coordinates. This demonstrates the determinism of the model. It does not measure whether supernatural abilities exist in nature. The distinction is the same one that guides the investigation throughout this article.

## A useful first project for the club

An initial report can explain which clues failed, which effects can be modeled, and which claims still lack a measurement method.

Choose one statement from a primary work, record its source, and propose a test that could fail. Alternatively, start with the simulation: change one parameter, predict a position, and check the exported data. Another club member should be able to understand the work and continue it.

If an unexpected observation ever does appear, we will at least know to preserve the original record before buying a ticket.

:::
