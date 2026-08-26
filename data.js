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
    id: 'ai-agent-delegation',
    title: '从聊天到委托：AI Agent 协作入门笔记',
    category: 'ai',
    tags: ['AI', 'Agent', '委托', '协作', '任务拆解', '验收'],
    date: '2026-08-26',
    summary: '怎样把 AI 从聊天工具变成真正的工作搭档：委托、任务拆解、上下文工程与授权管理',
    file: 'notes/ai-agent-delegation.md'
  },
  {
    id: 'ai-agent-skill-workflow',
    title: 'AI Agent 进阶：Skill、Workflow 与实战工具箱',
    category: 'ai',
    tags: ['AI', 'Agent', 'Skill', 'Workflow', 'MCP', '工具箱'],
    date: '2026-08-26',
    summary: '怎样把零散的 AI 使用经验沉淀为可复用的方法，以及日常实用工具箱速查',
    file: 'notes/ai-agent-skill-workflow.md'
  }
];

const CATEGORIES = [
  { id: 'ai', name: 'AI 与知识库', icon: '🤖' },
  { id: 'tech', name: '技术笔记', icon: '💻' },
  { id: 'business', name: '业务思考', icon: '💡' },
  { id: 'reading', name: '阅读笔记', icon: '📖' },
  { id: 'other', name: '其他', icon: '📝' }
];
