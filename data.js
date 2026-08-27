// Notes data - add new notes here
const NOTES = [
  {
    id: 'ai-knowledge-base',
    title: 'AI 知识库产品圆桌讨论 · 学习笔记',
    category: 'ai',
    tags: ['AI', '知识库', 'RAG', 'Agent', '知识治理'],
    date: '2026-08-26',
    summary: '整理自一场关于 AI 知识库产品在业务落地中困境与出路的圆桌讨论',
    intro: '【产品经理 · 需求分析与产品定位】学会 RAG 技术选型与知识库产品定位思路，掌握知识治理方法论，理解 AI 知识库在企业落地中的核心困境与出路。',
    file: 'notes/ai-knowledge-base.md'
  },
  {
    id: 'ai-agent-complete',
    title: 'AI Agent 完整学习笔记：从聊天到委托，从 Skill 到 Workflow',
    category: 'ai',
    tags: ['AI', 'Agent', '委托', 'Skill', 'Workflow', '上下文工程', '任务拆解', '工具箱'],
    date: '2026-08-26',
    summary: '从零基础到进阶的完整笔记：委托协作、上下文工程、任务拆解、Skill 沉淀、Workflow 编排、授权管理与实战工具箱',
    intro: '【产品经理 · 产品设计与架构思维】学会 Agent 产品形态全景图，掌握委托协作模式与 Skill 沉淀策略，理解上下文工程、任务拆解和 Workflow 编排的产品设计方法。',
    file: 'notes/ai-agent-complete.md'
  },
  {
    id: 'ai-pm-thinking',
    title: 'AI 产品经理思维升级 · 学习笔记',
    category: 'business',
    tags: ['AI', '产品经理', '多模态', 'MCP', 'Agent', '设计原则'],
    date: '2026-08-26',
    summary: 'AI 时代产品经理的思维升级：七大技术觉醒、AI 产品三种类型、五大设计原则与多模态内容创作',
    intro: '【产品经理 · 技术认知与设计原则】掌握 AI 时代产品经理七大技术觉醒，学会 AI 产品三种分类方式，运用五大设计原则指导多模态内容创作的产品设计。',
    file: 'notes/ai-pm-thinking.md'
  },
  {
    id: 'ai-pm-requirements',
    title: 'AI 产品需求挖掘与实战案例 · 学习笔记',
    category: 'business',
    tags: ['AI', '产品经理', '需求挖掘', '用户旅程', 'AIGC', '数据分析', '电商'],
    date: '2026-08-26',
    summary: '如何识别业务中的 AI 需求：产品经理能力框架、用户旅程地图方法论、AI 数据分析三阶段、电商/广告/线下门店实战案例',
    intro: '【产品经理 · 需求挖掘与用户研究】学会用户旅程地图方法论，掌握 AI 需求识别技巧和产品经理能力框架，通过电商/广告/线下门店案例理解如何在业务中发现 AI 机会。',
    file: 'notes/ai-pm-requirements.md'
  },
  {
    id: 'ai-model-selection',
    title: 'AI 模型选型与评估实战 · 学习笔记',
    category: 'ai',
    tags: ['AI', '模型选型', 'API', '评测', '成本', 'Token', 'TTS'],
    date: '2026-08-26',
    summary: '自研 vs 第三方 API 的成本对比、模型选型四步法（算账→看榜→实测→业务验证）、评测榜单与自建测试集方法论',
    intro: '【产品经理 · 技术决策与成本意识】掌握模型选型四步法（算账→看榜→实测→业务验证），学会自研与第三方 API 的成本对比方法，建立 AI 产品的技术决策框架。',
    file: 'notes/ai-model-selection.md'
  },
  {
    id: 'ai-prototype-tools',
    title: 'AI 原型设计与工具实战 · 学习笔记',
    category: 'ai',
    tags: ['AI', '原型设计', 'Lovable', 'V0', 'Cursor', '竞品分析', 'RPA'],
    date: '2026-08-26',
    summary: 'AI 设计工具全景图、零代码原型搭建（Lovable/V0/Manus）、AI Coding 对前端的影响、竞品数据采集与 RPA 实战',
    intro: '【产品经理 · 原型设计与工具运用】学会使用 Lovable/V0/Manus 零代码搭建产品原型，掌握竞品数据采集与 RPA 实战技巧，理解 AI Coding 对前端开发的影响。',
    file: 'notes/ai-prototype-tools.md'
  },
  {
    id: 'ai-data-analysis',
    title: 'AI + 数据分析实战 · 学习笔记',
    category: 'ai',
    tags: ['AI', '数据分析', 'Chat Excel', '用户标签', '归因分析', 'LTV', '数据平台'],
    date: '2026-08-26',
    summary: '数据分析四大维度、智能数据平台三阶段、AI 内容出海项目实战案例、用户标签体系与快速验证方法论',
    intro: '【产品经理 · 数据分析与数据驱动】掌握数据分析四大维度与智能数据平台三阶段，学会用户标签体系构建，通过 AI 内容出海案例理解数据驱动的产品决策方法。',
    file: 'notes/ai-data-analysis.md'
  },
  {
    id: 'ai-project-business',
    title: 'AI 项目推动与商业思维 · 学习笔记',
    category: 'business',
    tags: ['AI', '项目管理', '商业画布', 'AB测试', '成本收益', '开源', 'TAPD'],
    date: '2026-08-26',
    summary: '项目立项指标定义、燃气客服平台需求定制实战、技术评审要点、AI 风控困境、四个关键反思与商业画布方法论',
    intro: '【产品经理 · 项目管理与商业分析】掌握项目立项方法论与指标定义，学会商业画布分析框架，通过燃气客服平台实战理解需求定制、AB 测试与成本收益分析。',
    file: 'notes/ai-project-business.md'
  },
  {
    id: 'ai-pm-ability-map',
    title: '40k AI 产品经理能力地图',
    category: 'business',
    tags: ['AI', '产品经理', '能力地图', '职业发展', '成长路径'],
    date: '2026-08-27',
    summary: '面向 40k 水平的 AI 产品经理能力模型：基础产品能力、AI 专业能力、业务商业化能力、高阶软能力，附自检清单与转化路径',
    intro: '【产品经理 · 职业发展与能力规划】建立 40k AI 产品经理完整能力框架，通过自检清单定位能力短板，掌握从学习原理到工作产出的转化路径。',
    file: 'notes/ai-pm-ability-map.md'
  },
  {
    id: 'ai-pm-ability-map-v2',
    title: '40k AI 产品经理能力地图（完整版）',
    category: 'business',
    tags: ['AI', '产品经理', '能力地图', '职业发展', '完整版'],
    date: '2026-08-27',
    summary: '不依赖特定笔记的完整能力地图：六大模块、40k/30k/50k 差异对比、自检清单、能力提升路径、可拓展内容',
    intro: '【产品经理 · 职业发展与能力规划】掌握 40k AI 产品经理六大能力模块，通过 30k/40k/50k 差异对比定位自己，获取个性化能力提升路径。',
    file: 'notes/ai-pm-ability-map-v2.md'
  },
  {
    id: 'aigc-product-opportunities',
    title: 'AIGC 产品机会判断 · 学习笔记',
    category: 'business',
    tags: ['AI', 'AIGC', '产品机会', 'PMF', '情感计算', '内容供给', 'Context Trigger'],
    date: '2026-08-27',
    summary: 'AIGC 应用悲观 vs 乐观、值得做的方向（情感中介/内容暴力破解）、不建议做的方向、AI 产品三种价值逻辑、零提示与上下文触发',
    intro: '【产品经理 · 市场洞察与产品策略】掌握 AIGC 产品机会评估框架，学会 PMF 分析与情感计算方向判断，理解 AI 产品三种价值逻辑和上下文触发策略。',
    file: 'notes/aigc-product-opportunities.md'
  },
  {
    id: 'ai-sales-assistant-project',
    title: 'AI 销售助手 · 项目实战演练',
    category: 'business',
    tags: ['AI', '产品经理', '项目实战', '销售助手', 'PRD', 'ROI'],
    date: '2026-08-27',
    summary: '从需求分析到 PRD 的完整项目演练：用户画像、用户旅程地图、MVP 设计、模型选型、Prompt 设计、评测方案、上线计划、ROI 测算',
    intro: '【产品经理 · 项目实战与方案产出】通过 AI 销售助手完整案例，学会从需求分析到 PRD 的全流程，产出可评审的产品方案和商业分析。',
    file: 'notes/ai-sales-assistant-project.md'
  },
  {
    id: 'codelive-skills-quest',
    title: 'Codelive Skills 与 Quest 1.0 实战 · 学习笔记',
    category: 'tech',
    tags: ['AI', 'Skill', 'MCP', 'Quest', 'AI Coding', 'DevOps', '认知债'],
    date: '2026-08-27',
    summary: 'Skill 实战避坑指南、Skill vs MCP vs Command vs Role、Quest 1.0 设计哲学与执行流程、Token 效率法则、用 Skill 重构 DevOps 工作流',
    intro: '【工程师 · AI Coding 与 DevOps】掌握 Skill 实战避坑经验，理解 Skill/MCP/Command/Role 的定位差异，学会用 Skill 重构 DevOps 工作流和 Token 效率优化方法。',
    file: 'notes/codelive-skills-quest.md'
  },
  {
    id: 'table-as-search-agent-harness',
    title: 'Table as Search：Agent Harness 与复杂信息搜索 · 学习笔记',
    category: 'ai',
    tags: ['AI', 'Agent', 'Table Search', 'Harness', 'Deep Research', '多智能体', 'ACL 2026'],
    date: '2026-08-27',
    summary: '用表格替代文本承载搜索状态、Table Search 多智能体框架、三类长程搜索任务统一表征、Harness 自演进三阶段、Main Agent 是关键瓶颈',
    intro: '【算法工程师 · 搜索架构与 Agent 设计】掌握结构化状态管理替代文本承载的核心思路，理解多智能体框架的 Harness 设计，学会 Agent 自演进三阶段规划。',
    file: 'notes/table-as-search-agent-harness.md'
  },
  {
    id: 'qwen-flash-agent-intent',
    title: '千问闪购 Agent 意图识别与多轮对话架构 · 学习笔记',
    category: 'ai',
    tags: ['AI', 'Agent', '意图识别', '多轮对话', 'Planner', 'MCP', 'SFT', '千问'],
    date: '2026-08-27',
    summary: '意图中枢机制、多意图优先级处理、上下文压缩策略、MCP 协议与 A2A 架构、SFT 微调几十万条数据、AI Native 输出优化',
    intro: '【算法工程师 · 对话系统与 Agent 架构】掌握意图识别与多轮对话的工程设计，学会多意图编排与上下文压缩策略，理解 MCP 协议、A2A 架构和 SFT 微调方法论。',
    file: 'notes/qwen-flash-agent-intent.md'
  }
];

const CATEGORIES = [
  { id: 'ai', name: 'AI 与知识库', icon: '🤖' },
  { id: 'tech', name: '技术笔记', icon: '💻' },
  { id: 'business', name: '业务思考', icon: '💡' },
  { id: 'reading', name: '阅读笔记', icon: '📖' },
  { id: 'other', name: '其他', icon: '📝' }
];
