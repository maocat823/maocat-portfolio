import Reveal from "./Reveal";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

/**
 * 项目截图区：固定 16:9，保证网格里所有卡片高度一致。
 * 有 image 时懒加载真图；没有时用「窗口条 + 网格底纹」的占位图，避免出现破图。
 */
function ProjectCover({ project }: { project: Project }) {
  // 真实截图：外层定比例，图片铺满裁切，悬停轻微放大
  if (project.image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-panel">
        <img
          src={project.image}
          alt={`${project.name} 的项目截图`}
          loading="lazy"
          decoding="async"
          /* 显式宽高 + aspect-video，避免图片加载时布局跳动 */
          width={640}
          height={360}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  // 占位截图：渐变底 + 网格 + 顶部窗口条，看起来像一块待填的截图
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-linear-to-br from-accent-from/30 via-accent-via/10 to-accent-to/30">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* 仿窗口标题栏，暗示这里是截图位 */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 flex items-center gap-1.5 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 h-2 w-20 rounded-full bg-white/10" />
      </div>

      <div className="relative grid h-full place-items-center">
        <span className="text-gradient text-lg font-semibold tracking-wide">{project.name}</span>
      </div>

      {/* 底部渐隐到卡片底色，避免渐变被一条直线切断 */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-panel/90 to-transparent"
      />
    </div>
  );
}

/** 单个项目卡片：截图、标题、描述、技术栈标签、项目链接 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel transition-colors duration-300 hover:border-white/25"
    >
      {/* 悬停时沿卡片上沿滑过的渐变高光，比整卡发光更克制 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-accent-via/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <ProjectCover project={project} />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 id={`${project.id}-title`} className="text-lg font-semibold tracking-tight">
          {project.name}
        </h3>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        {/* 技术栈标签 */}
        <ul className="flex flex-wrap gap-2" aria-label={`${project.name} 使用的技术栈`}>
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted transition-colors group-hover:border-white/15"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* 项目链接：mt-auto 把这一行压到卡片底部，保证多张卡片对齐 */}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gradient hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-to"
            >
              在线演示 <span aria-hidden="true">→</span>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-to"
            >
              源码 <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * 项目展示：卡片列表（PRD 核心功能 3）。
 * 数据来自 src/data/projects.ts，新增项目只需往数组里追加一条。
 */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">项目</h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              挑几个能代表我做事方式的作品，从界面细节到工程化取舍。
            </p>
          </div>
          <p className="text-sm text-muted">{projects.length} 个项目</p>
        </Reveal>

        {/* 两列网格：小屏单列，卡片高度自动对齐 */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
