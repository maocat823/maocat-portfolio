/**
 * 项目数据（PRD：项目名称、截图、简短描述、技术栈、项目链接）
 * 数据集中放在 TypeScript 数组中，新增项目只需追加一条记录。
 */

/** 单个项目 */
export interface Project {
  /** 唯一标识，用作 React key */
  id: string;
  /** 项目名称 */
  name: string;
  /** 简短描述 */
  description: string;
  /** 技术栈标签 */
  tech: string[];
  /** 项目截图地址（可选，没有时展示渐变占位图） */
  image?: string;
  /** 在线演示地址（可选） */
  liveUrl?: string;
  /** 源码地址（可选） */
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "个人作品集",
    description:
      "使用 React + TypeScript + Tailwind CSS 构建的深色主题作品集，包含滚动动画与响应式布局。",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
  },
  {
    id: "dashboard",
    name: "数据看板",
    description:
      "面向内部团队的可视化看板，支持多维度筛选与图表联动，首屏加载时间控制在 1s 内。",
    tech: ["React", "ECharts", "Vite", "REST API"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
  },
  {
    id: "cli-tool",
    name: "脚手架工具",
    description:
      "命令行项目脚手架，一条命令生成规范化的前端工程结构，内置 ESLint、Prettier 与测试配置。",
    tech: ["Node.js", "TypeScript", "Commander"],
    repoUrl: "https://github.com/",
  },
];
