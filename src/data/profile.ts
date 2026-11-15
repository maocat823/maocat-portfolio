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
    "长沙工业学院在读学生，日常用 React + TypeScript 写网页和小工具，也写 C 语言的基础练习。喜欢把想法做成能跑起来的东西。",
  bio: [
    "我是 Junzhong Mao，长沙工业学院的在读学生。平时主要写前端，用 React、TypeScript 和 Tailwind CSS 做页面，最近把作品集、番茄钟、待办清单这几个练手项目陆续做完了。",
    "除了网页，我也在写 C 语言的基础练习，并关注 Minecraft 服务端生态——GitHub 上有一些相关的仓库和 fork，用来学习和配置。",
    "我的 GitHub 简介是「Learning, building, and sharing code」，也确实是这样：边学边做，再把代码放到 GitHub 上。欢迎交流或者一起做点东西。",
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
  socials: [{ label: "GitHub", href: "https://github.com/maocat823" }],
};
