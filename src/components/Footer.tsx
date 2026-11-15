import { profile } from "../data/profile";

/** 页脚：版权信息 + 返回顶部链接 */
export default function Footer() {
  // 版权年份在构建时（运行时）计算，不用手写
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.name}
        </p>
        <a
          href="#top"
          className="transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-to"
        >
          回到顶部 ↑
        </a>
      </div>
    </footer>
  );
}
