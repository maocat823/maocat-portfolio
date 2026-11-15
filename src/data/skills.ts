/**
 * 技能数据（PRD：关于我页面展示技能列表）
 * 按分类存放，方便在界面上分组渲染。
 */

/** 单项技能 */
export interface Skill {
  /** 技能名称 */
  name: string;
  /** 所属分类，用于分组展示 */
  category: string;
}

export const skills: Skill[] = [
  // 前端
  { name: "React", category: "前端" },
  { name: "TypeScript", category: "前端" },
  { name: "Tailwind CSS", category: "前端" },
  { name: "Vite", category: "前端" },
  { name: "HTML / CSS", category: "前端" },
  // 后端
  { name: "Node.js", category: "后端" },
  { name: "Express", category: "后端" },
  { name: "REST API", category: "后端" },
  // 工程化与协作
  { name: "Git", category: "工程化" },
  { name: "ESLint / Prettier", category: "工程化" },
  { name: "Vitest", category: "工程化" },
];
