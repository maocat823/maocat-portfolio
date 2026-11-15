/**
 * 站点个人信息（单一数据源）
 * Header / Hero / Contact / Footer 复用同一份数据，替换为真实信息时只需改这里。
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
  /** 头像图片地址；留空时用「渐变圆环 + 名字首字」占位 */
  avatarUrl?: string;
  location: string;
  email: string;
  navLinks: NavLink[];
  socials: SocialLink[];
}

export const profile: Profile = {
  name: "你的名字",
  role: "前端开发者",
  tagline: "用简洁的代码，做流畅的体验。",
  intro:
    "我做 Web 前端与全栈开发，擅长把设计稿变成有细节、能上线的界面，也习惯用工程化手段让项目长期可维护。",
  bio: [
    "你好，我是一名专注 Web 前端与全栈开发的工程师，喜欢把复杂的需求拆成清晰、可维护的代码。",
    "平时关注界面交互、性能优化与工程化实践，也乐于把学习过程沉淀成项目与文章。",
  ],
  location: "中国 · 上海",
  email: "hello@example.com",
  navLinks: [
    { label: "关于", href: "#about" },
    { label: "项目", href: "#projects" },
    { label: "联系", href: "#contact" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "邮箱", href: "mailto:hello@example.com" },
  ],
};
