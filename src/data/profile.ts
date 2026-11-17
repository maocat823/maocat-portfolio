/**
 * 站点个人信息（单一数据源）
 * 数据来自 GitHub 公开资料（github.com/maocat823）：姓名、简介、学校、头像与社交链接。
 * 换内容只需要改这里，Header / Hero / About / Contact / Footer 会一起更新。
 */

/** 页内导航链接 */
export interface NavLink {
  label: string;
  href: string;
}

/** 社交 / 联系方式链接 */
export interface SocialLink {
  label: string;
  href: string;
}

/** 就读学校（可选） */
export interface School {
  name: string;
  url: string;
}

/** 个人信息 */
export interface Profile {
  name: string;
  role: string;
  /** 一句话定位，显示在首屏大标题下方 */
  tagline: string;
  /** 首屏简介（2~3 行以内，保持首屏留白） */
  intro: string;
  /** 关于我页面的详细介绍，按段落展示 */
  bio: string[];
  /** 就读学校；留空则不显示 */
  school?: School;
  location: string;
  /** 公开邮箱；留空时「联系我」区域会以第一个社交链接作为主按钮 */
  email?: string;
  /** 头像图片地址；留空时用「渐变圆环 + 名字首字」占位 */
  avatarUrl?: string;
  navLinks: NavLink[];
  socials: SocialLink[];
}

export const profile: Profile = {
  name: "Junzhong Mao",
  role: "学生 · Web 开发者",
  tagline: "学习、造东西、分享代码。",
  intro:
    "长沙工业学院计算机科学与技术在读，日常用 React + TypeScript 写网页和工具应用，也写 C 语言练习、参与开源项目。喜欢把想法做成能跑起来的东西。",
  bio: [
    "我是 Junzhong Mao（MaoCat），长沙工业学院计算机科学与技术专业的在读学生。平时主要写前端，用 React、TypeScript 和 Tailwind CSS 做应用，最近在完成个人作品集和番茄钟之后，又用 React 19 + Zustand + date-fns 做出了进阶版待办事项管理应用。",
    "除了前端开发，我也在扎实推进 C 语言的基础练习，并活跃在 Minecraft 服务端与周边开源生态中——不仅自己搭站和配置服务，也给群服互通机器人 UniBot 等开源项目提交过 Docker 部署与健康检查相关的 PR。",
    "我的 GitHub 简介是「Learning, building, and sharing code」，也确实是这样：边学边做，从需求与技术设计文档到代码落地，再把成果分享到 GitHub 上。欢迎交流或者一起做点东西。",
  ],
  school: {
    name: "长沙工业学院",
    url: "https://www.ccsut.edu.cn/",
  },
  location: "中国",
  avatarUrl: "/avatar.jpg",
  navLinks: [
    { label: "关于", href: "#about" },
    { label: "项目", href: "#projects" },
    { label: "联系", href: "#contact" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/maocat823" },
    { label: "Bilibili", href: "https://space.bilibili.com/695116963" },
  ],
};
