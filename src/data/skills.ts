/**
 * 技能数据（PRD：关于我页面展示技能列表）
 * 只列 GitHub 仓库里实际用过的技术，避免写成一份「什么都会」的清单。
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
  { name: "JavaScript", category: "前端" },
  { name: "Tailwind CSS", category: "前端" },
  { name: "HTML / CSS", category: "前端" },
  // 工程化与部署
  { name: "Vite", category: "工程化" },
  { name: "Git / GitHub", category: "工程化" },
  { name: "Vercel", category: "工程化" },
  // 编程基础
  { name: "C", category: "编程基础" },
];
