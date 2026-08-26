// Notes data - add new notes here
const NOTES = [
  {
    id: 'ai-knowledge-base',
    title: 'AI 知识库产品圆桌讨论 · 学习笔记',
    category: 'ai',
    tags: ['AI', '知识库', 'RAG', 'Agent', '知识治理'],
    date: '2026-08-26',
    summary: '整理自一场关于 AI 知识库产品在业务落地中困境与出路的圆桌讨论',
    file: 'notes/ai-knowledge-base.md'
  },
  {
    id: 'ai-agent-complete',
    title: 'AI Agent 完整学习笔记：从聊天到委托，从 Skill 到 Workflow',
    category: 'ai',
    tags: ['AI', 'Agent', '委托', 'Skill', 'Workflow', '上下文工程', '任务拆解', '工具箱'],
    date: '2026-08-26',
    summary: '从零基础到进阶的完整笔记：委托协作、上下文工程、任务拆解、Skill 沉淀、Workflow 编排、授权管理与实战工具箱',
    file: 'notes/ai-agent-complete.md'
  },
  {
    id: 'ai-pm-thinking',
    title: 'AI 产品经理思维升级 · 学习笔记',
    category: 'business',
    tags: ['AI', '产品经理', '多模态', 'MCP', 'Agent', '设计原则'],
    date: '2026-08-26',
    summary: 'AI 时代产品经理的思维升级：七大技术觉醒、AI 产品三种类型、五大设计原则与多模态内容创作',
    file: 'notes/ai-pm-thinking.md'
  },
  {
    id: 'ai-pm-requirements',
    title: 'AI 产品需求挖掘与实战案例 · 学习笔记',
    category: 'business',
    tags: ['AI', '产品经理', '需求挖掘', '用户旅程', 'AIGC', '数据分析', '电商'],
    date: '2026-08-26',
    summary: '如何识别业务中的 AI 需求：产品经理能力框架、用户旅程地图方法论、AI 数据分析三阶段、电商/广告/线下门店实战案例',
    file: 'notes/ai-pm-requirements.md'
  }
];

const CATEGORIES = [
  { id: 'ai', name: 'AI 与知识库', icon: '🤖' },
  { id: 'tech', name: '技术笔记', icon: '💻' },
  { id: 'business', name: '业务思考', icon: '💡' },
  { id: 'reading', name: '阅读笔记', icon: '📖' },
  { id: 'other', name: '其他', icon: '📝' }
];
