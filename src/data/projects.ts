/**
 * 项目数据（PRD：项目名称、截图、简短描述、技术栈、项目链接）
 * 内容来自 GitHub 公开仓库（github.com/maocat823），说明文字按其 README 与仓库描述整理。
 * 新增项目只需往数组里追加一条。
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
      "深色主题的单页作品集，React 19 + Tailwind CSS v4 实现渐变强调色、滚动进场动画与移动端适配——这页就是它本身。",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    image: "/projects/portfolio.png",
    liveUrl: "https://maocat-portfolio.vercel.app",
    repoUrl: "https://github.com/maocat823/maocat-portfolio",
  },
  {
    id: "todo-advanced",
    name: "待办事项管理（进阶版）",
    description:
      "基于 React 19 + Zustand 5 构建的进阶待办应用，支持分类与优先级管理、多条件交集筛选、实时模糊搜索、全局统计看板，以及基于 date-fns 的逾期提醒与 LocalStorage 容错持久化。",
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS", "date-fns", "Vite"],
    liveUrl: "https://to-do-lemonfate.vercel.app",
    repoUrl: "https://github.com/maocat823/To-Do",
  },
  {
    id: "pomodoro",
    name: "番茄钟",
    description:
      "简洁的番茄钟计时器，帮助你保持专注、高效工作；React 18 + TypeScript 管理计时与状态切换，界面用 Tailwind CSS 搭配 lucide 图标。",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/maocat823/Pomodoro-Timer",
  },
  {
    id: "todo-list",
    name: "待办清单（原生 JS 版）",
    description:
      "早期用原生 JavaScript 写的轻量待办应用，支持优先级、编辑与筛选，数据保存在浏览器 localStorage 里；后续在此基础上重构出了 React 进阶版。",
    tech: ["JavaScript", "HTML", "CSS", "Vite"],
    repoUrl: "https://github.com/maocat823/Todo-List",
  },
  {
    id: "birthday-card",
    name: "星空生日贺卡",
    description:
      "一封藏在星空、粉笔字和 3D 粒子蛋糕里的生日祝福，基于 React 19 + TanStack Start，用 Radix UI 与 Tailwind CSS 搭界面。",
    tech: ["React", "TanStack Start", "Radix UI", "Tailwind CSS"],
    repoUrl: "https://github.com/maocat823/starry-2329-birthday-card",
  },
  {
    id: "lemonfate",
    name: "Lemonfate 服务器官网",
    description:
      "为 Minecraft 服务器 Lemonfate 做的宣传站点，纯 HTML / CSS / JavaScript 页面，部署在 Vercel 上。",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lemonfate-web.vercel.app",
    repoUrl: "https://github.com/maocat823/Lemonfate-Web",
  },
  {
    id: "learning",
    name: "C 语言练习",
    description:
      "大一期间的 C 语言练习合集，从基础语法到小程序，按阶段整理，用来记录学习过程。",
    tech: ["C"],
    repoUrl: "https://github.com/maocat823/learning",
  },
];
