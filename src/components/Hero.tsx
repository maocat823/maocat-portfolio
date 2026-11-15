import Reveal from "./Reveal";
import { profile } from "../data/profile";

/**
 * 首屏头像：渐变圆环 + 外发光。
 * 有 avatarUrl 时渲染图片（懒加载），否则用名字首字的渐变文字占位。
 */
function Avatar() {
  return (
    <div className="relative shrink-0">
      {/* 外发光：用模糊的渐变色块在深色背景上托出头像 */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-full bg-linear-to-tr from-accent-from/40 via-accent-via/30 to-accent-to/40 blur-2xl"
      />

      {/* 渐变描边：外层铺渐变，内层深色圆把边缘「挖」出来，3px 就是圆环宽度 */}
      <div className="relative grid h-32 w-32 place-items-center rounded-full bg-linear-to-tr from-accent-from via-accent-via to-accent-to p-[3px] sm:h-40 sm:w-40">
        <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-night">
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={`${profile.name} 的头像`}
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-gradient text-4xl font-semibold sm:text-5xl" aria-hidden="true">
              {profile.name.slice(0, 1)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * 首页首屏：大标题 + 简介 + 头像（PRD 核心功能 1）。
 * 桌面端文字在左、头像在右；移动端纵向堆叠并居中对齐。
 */
export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* 背景渐变光斑：纯装饰，不参与布局，也不给读屏软件读 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-accent-from/25 blur-3xl" />
        <div className="absolute top-8 -right-16 h-80 w-80 rounded-full bg-accent-to/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent-via/15 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="flex flex-col items-center gap-14 md:flex-row md:items-center md:justify-between">
          {/* 文案区：大标题 + 一句话定位 + 简介 + 行动按钮 */}
          <Reveal className="max-w-xl text-center md:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-muted">
              {/* 渐变小圆点，复用主题强调色 */}
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-accent-from to-accent-to" />
              {profile.role}
            </p>

            <h1 className="mt-6 text-4xl leading-[1.15] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {/* 前半句绑在一起，窄屏时整句换行，避免把「我是」拆成两行 */}
              <span className="whitespace-nowrap">你好，我是</span>{" "}
              <span className="text-gradient">{profile.name}</span>
            </h1>

            <p className="mt-6 text-lg text-ink/85 sm:text-xl">{profile.tagline}</p>

            {/* 简介：控制在两三行，保持首屏呼吸感 */}
            <p className="mt-4 leading-relaxed text-muted">{profile.intro}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-linear-to-r from-accent-from via-accent-via to-accent-to px-6 py-3 text-sm font-semibold text-night transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-to"
              >
                查看项目
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-to"
              >
                联系我
              </a>
            </div>
          </Reveal>

          {/* 头像区 */}
          <Reveal delay={0.15}>
            <Avatar />
          </Reveal>
        </div>

        {/* 向下滚动提示：可点击，跳转到「关于我」；小屏隐藏以免挤占首屏 */}
        <Reveal delay={0.3} className="hidden justify-center md:flex md:justify-start">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-xs tracking-widest text-muted uppercase transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-to"
          >
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-white/35 motion-safe:animate-bounce"
            >
              ↓
            </span>
            向下了解我
          </a>
        </Reveal>
      </div>
    </section>
  );
}
