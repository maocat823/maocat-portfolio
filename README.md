# 个人作品集 · Junzhong Mao

长沙工业学院在读学生的个人作品集，单页结构，深色主题 + 渐变强调色 + 滚动进场动画。

线上地址：<https://maocat-portfolio.vercel.app>

## 技术栈

| 用途 | 选型 |
| --- | --- |
| 框架 | React 19 + TypeScript |
| 构建 | Vite |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite` 插件，无需 postcss 配置） |
| 动画 | Framer Motion |
| 路由 | 暂未使用（单页锚点导航，需要多页面时再引入 React Router） |

## 常用命令

```bash
npm install       # 安装依赖
npm run dev       # 启动开发服务器（默认 http://localhost:5173）
npm run build     # 类型检查 + 生产构建，产物在 dist/
npm run preview   # 本地预览构建产物
npm run typecheck # 仅做类型检查
```

> 如果 npm 缓存目录不在工作区内（受限环境下会报 `EPERM`），可以指定工作区内的缓存目录：
> `npm install --cache ./.npm-cache`

## 目录结构

```
public/
  avatar.jpg              # 头像（来自 GitHub 头像）
  projects/portfolio.png  # 项目卡片截图
src/
  components/
    Header.tsx    # 固定顶部导航
    Hero.tsx      # 首屏：大标题 + 简介 + 头像
    About.tsx     # 关于我 + 技能列表
    Projects.tsx  # 项目卡片列表
    Contact.tsx   # 联系方式
    Footer.tsx    # 页脚
    Reveal.tsx    # 可复用滚动动画容器
  data/
    profile.ts    # 个人信息、学校、导航、社交链接
    projects.ts   # 项目数据
    skills.ts     # 技能数据
  App.tsx         # 页面组装
  main.tsx        # 应用入口
  index.css       # Tailwind 引入 + 设计令牌
```

## 主题与样式约定

设计令牌集中定义在 `src/index.css` 的 `@theme` 中，通过 Tailwind 工具类使用：

- `bg-night`（#0a0a0a）页面背景、`bg-panel` 卡片背景
- `text-ink`（#ffffff）主文字、`text-muted` 次要文字
- 渐变强调色：`from-accent-from` / `via-accent-via` / `to-accent-to`（紫 → 粉 → 青）
- `.text-gradient` 自定义工具类：渐变文字

新增颜色请先加到 `@theme`，不要在组件里写裸色值。

## 内容维护

站内所有个人内容都来自 `src/data/` 下的三个文件，改这一处全站生效：

- `profile.ts`：姓名、职位、`tagline` / `intro`（首屏文案）、`bio`（关于我段落）、`school`（学校，留空则隐藏）、`avatarUrl`（头像，留空则用渐变首字母占位）、`location`、`email`（留空时「联系我」以第一个社交链接为主按钮）、导航与社交链接
- `projects.ts`：项目列表；`image` 填图片地址即自动懒加载，留空显示渐变占位
- `skills.ts`：技能与分类，按 `category` 自动分组

## 数据来源

站内文字、项目与技术栈根据 GitHub 公开资料（[@maocat823](https://github.com/maocat823)）整理：仓库描述与 README 用于项目介绍，仓库语言统计用于技能清单，头像下载自 GitHub 头像。

## 规范

- 函数式组件 + Hooks，组件保持可复用
- 样式一律使用 Tailwind 工具类
- 代码需带注释，尤其是数据结构和布局意图
- 深色主题、渐变强调色、平滑滚动、移动端优先（`sm:` / `md:` 断点向上适配）
- 图片使用 `loading="lazy"`，链接保证可点击且有可见的键盘焦点样式
