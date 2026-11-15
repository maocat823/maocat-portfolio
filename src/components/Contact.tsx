import Reveal from "./Reveal";
import { profile } from "../data/profile";

/**
 * 联系方式（PRD 核心功能 4）。
 * 有公开邮箱时用邮箱做主按钮；没有时退回第一个社交链接（GitHub），
 * 剩下的链接列在下方，避免同一个地址重复出现两次。
 */
export default function Contact() {
  const primary = profile.email
    ? { label: profile.email, href: `mailto:${profile.email}`, external: false }
    : profile.socials.length > 0
      ? {
          label: `在 ${profile.socials[0].label} 上找我`,
          href: profile.socials[0].href,
          external: true,
        }
      : null;

  const others = primary
    ? profile.socials.filter((social) => social.href !== primary.href)
    : profile.socials;

  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal className="rounded-3xl border border-white/10 bg-panel px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            一起做点<span className="text-gradient">有意思的事</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            有项目想聊、想合作，或者只是想打个招呼，都欢迎联系我。
          </p>

          {primary && (
            <a
              href={primary.href}
              {...(primary.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="mt-8 inline-block rounded-full bg-linear-to-r from-accent-from via-accent-via to-accent-to px-6 py-3 text-sm font-semibold text-night transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-to"
            >
              {primary.label}
            </a>
          )}

          {others.length > 0 && (
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              {others.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-to"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* 邮箱未公开时说明一下，避免访客在页面上找不到邮件入口而疑惑 */}
          {!profile.email && (
            <p className="mt-8 text-xs text-muted">
              邮箱暂未公开，GitHub 私信或开 Issue 都能找到我。
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
