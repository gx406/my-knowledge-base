# Table as Search：Agent Harness 与复杂信息搜索 · 学习笔记

## 分享信息

- **分享人**：蓝天（云智能集团 CEO 办公室 AI 应用产品研发部，AI 应用算法）
- **此前经历**：阿里巴巴国际 IB 应用算法团队，专注 agent 研究
- **会议**：ACL 2026 主会接收
- **核心项目**：Table as Search / Table Search
- **业务应用**：AIBD 招商 BD 场景

---

## 核心结论（四要点）

### 1. 问题：Agent 在长程信息搜索中的脆弱性

当前 agent 执行**长程信息搜索**（long-horizon information search）任务时表现脆弱，即使调用 GPT / Gemini Deep Research 等顶级闭源系统，在复杂深宽搜索任务下**成功率不足 40%**。

两个根本原因：
- **信息密度低**——无结构文本承载海量信息，导致中间状态丢失
- **认知负担重**——要求大模型同时承担规划、搜索结果存储、推理、决策三合一任务

### 2. 思路：搜索 = 表格补全

将搜索任务转化为**表格补全（Table Completion / Filling）**任务：
- 已填充单元格 = 已完成的搜索
- 空白单元格 = 待执行的搜索计划
- 表格是高效的信息压缩机制——搜索状态外置到数据库，释放宝贵的上下文窗口

### 3. 方法：Table Search 框架

设计了一套基于表格操作的多智能体框架与 Harness：
- 用一张表格统一表示三类复杂搜索任务：
  - **Deep Search**（深度搜索）
  - **Wide Search**（宽度搜索）
  - **Deep-Wide Search**（深宽搜索）
- 核心机制：SQL 读写工具让 agent 主动探测规划进度，而非被动接收长文本

### 4. 收益：显著且一致的性能提升

| 任务 | 指标 | 提升 |
|---|---|---|
| Deep Search (GAIA) | 准确率 | +9.95% 绝对提升 |
| Wide Search (Column F1) | 准确度 | 显著提升 |
| Deep-Wide Search (招商 BD) | 商家搜索精度 55.9% | 超越 Gemini Deep Research |

---

## 分享内容结构

| 章节 | 内容 |
|---|---|
| 1. 问题 | 从真实业务搜索任务出发，定义痛点 |
| 2. 解决方案 | Table as Search 框架 + Harness 设计 |
| 3. 宏观视角 | Harness 行业演进框架中的定位 |
| 4. 实验验证 | Deep / Wide / Deep-Wide Search 三场景效果 |
| 5. 总结与展望 | Agent Harness 自我进化的终极形态 |

> 重点建议：**第二章和第四章**

---

## 技术方案详解

### 表格作为 Agent 的"外接键盘"

比喻：
- **Context（上下文）= 内存**：容量有限
- **数据库中的表格 = 硬盘**：容量几乎无限制
- **表格 = Agent 的外接键盘**：状态外置，按需读取

### 传统 ReAct Style 的 5 个问题

1. 信息单向延展，容易断片
2. 上下文窗口压力巨大
3. 完全依赖模型脆弱的记忆和上下文管理能力
4. 难以有效表达搜索状态和搜索规划
5. 难以进行状态的切分和合并，难以大规模并行

### Table Search 的 5 大优势

1. 表格初始化 = 规划开始，表格填充完成 = 搜索完成
2. 空白单元格 = pending action / 搜索计划
3. 状态一致性由数据库强制校验，不依赖 agent 记忆
4. 天然支持并行处理
5. **按需读取机制**显著释放上下文空间

---

## 关键机制：按需读取

在 Table Search 中：
- **SQL 查询**：agent 主动探测全局规划进度（而非被动接收长文本）
- **表格操作**：每次新候选实体发现、验证结果、搜索信息填充
- **回溯恢复**：subagent 出错时，main agent 通过获取 session 快速回溯搜索路径

> 例如：找到商家主页但未找到电话 → 生成精准指令重新启动 subagent，避免重复劳动

---

## 实验数据

### Deep Search (GAIA)

相比 baseline 实现 **+14% 绝对提升**。

使用相对较弱的、不具备 thinking 能力的 Claude 模型，**性能已达到当时 SOTA 水平**。

### Wide Search

列维度准确度提升 **+9.1%**。

### Deep-Wide Search (招商 BD benchmark)

通过优化列维度准确性，**+4.7% 绝对提升**，超越 Gemini Deep Research 闭源系统。

---

## 关键发现

### 1. 任务越复杂，Table Search 优势越明显

在 Deep Search 任务中：
- 简单任务：Table Search vs ReAct 差异不显著
- 约束增多、复杂度增加 → **推理跳跃次数增多** → Table Search 优势**持续增大**

### 2. 规模化稳定性更强

| 框架 | 规模化表现 |
|---|---|
| ReAct Style | 随规模扩大出现明显退化 |
| Table Search | 状态外置到数据库，精准度下降更慢，曲线更平稳 |

> 工业意义：可以放心将更复杂、更大规模的任务委托给 Table Search 框架，不用担心在某个临界点突然失控。

### 3. 更少的工具调用 → 更强的性能（反直觉）

- Table Search 的工具调用次数**明显少于** ReAct Multi-Agent
- 但最终结果**更好**

> 原理：更好的结果不是源于更多的工具调用，而是**更精准的搜索策略**。

### 4. Test-time Scaling 更强

- Table Search 的扩展性优于 Multi-Agent ReAct
- ReAct Style 可能出现"采样越多反而越差"的情况
- Table Search **不会出现此问题**，采样量增加 → 效果持续提升

> 工业意义：对效果有更高要求时，可以通过增加采样和推理资源获得更好结果。

### 5. Main Agent 影响力 >> Sub Agent

| 实验 | 效果变化 |
|---|---|
| 固定 Main Agent，Sub Agent 从强模型换到 32B | 几乎不变，甚至准确率提升 |
| 固定 Sub Agent，Main Agent 从强模型换到弱模型 | **断崖式下跌** |

> 结论：**性能瓶颈在 Main Agent 的规划和调度能力**。Sub Agent 模式固定，易被 SFT / RL 训练的自研小模型替代（3B/4B/8B/32B），大幅降低成本和延迟。

---

## 业务应用

### AIBD 招商 BD

- Table Search 已应用于 AIBD 内部业务场景
- 运营同学进行大量测试，反馈积极
- 正持续扩展至更多业务场景

### Micro Deep Researcher

团队在 Table Search 基础上扩展：
- 复杂规则应用的大模型
- Agent 自我记忆机制
- Agent 2.1
- 成果已整合到 "micro deep researcher" 项目中

---

## Agent Harness 演进三阶段

### 阶段 1：Application Harness（当前）

人类专家定制的特定领域 Harness 设计，是当下各业务场景的**最优解**。核心是业务 know-how 和工程抽象的总结与沉淀。

### 阶段 2：Harness Updating（自演进）

Agent 自动分析 session log → 识别失败原因 → 提出 Harness patch。

> 例如：Agent 自我发现某些 query 经常导致错误，总结失败模式，提出进化方向。目前实验中初步结果非常有前景。

### 阶段 3：Auto Research for Harness（终极形态）

Harness = 规则代码 + API 调度系统 + 记忆 + Skill 的抽象集合。

最终可抽象为 **Coding Agent 任务**：
- 人类只需定义业务边界和核心目标
- Harness 实现和优化由 Agent 自主迭代完成

> 我们今天构建的 Table Search，不仅是解决长程搜索痛点的关键工具，更是向**智能体自我进化形态**迈进的过程。

---

## 核心概念对照

| 概念 | 说明 |
|---|---|
| Harness | Agent 的工作平台，包含规则、API、记忆、Skill 等 |
| Table Search | 用表格替代文本承载搜索状态的框架 |
| Main Agent | 负责规划和调度的主智能体 |
| Sub Agent | 负责具体搜索执行的子智能体 |
| Deep Search | 深度信息搜索（单一目标深入挖掘） |
| Wide Search | 宽度信息搜索（多目标并行搜索） |
| Deep-Wide Search | 深宽结合搜索 |
| Test-time Scaling | 推理时增加采样量以提升效果 |

---

## 个人总结

Table Search 的核心洞察非常简洁有力：**把搜索状态从文本外置到结构化表格**，解决了 Agent 长程任务中的三个根本问题——信息密度低、上下文压力、状态管理混乱。

三个最有价值的发现：
1. **任务越复杂优势越大**——说明框架不是在小任务上刷分，而是真正解决复杂性问题
2. **更少工具调用 + 更强结果**——说明好的架构设计比暴力搜索更重要
3. **Main Agent 是关键瓶颈**——指导了资源分配：大模型用在规划，小模型用在执行
