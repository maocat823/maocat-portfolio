import Reveal from "./Reveal";
import { profile } from "../data/profile";

/**
 * 联系方式：邮箱 + GitHub / 社交媒体链接（PRD 核心功能 4）。
 * 链接全部来自 src/data/profile.ts，均为可点击的真实地址。
 */
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal className="rounded-3xl border border-white/10 bg-panel px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            一起做点<span className="text-gradient">有意思的事</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            有项目想聊、想合作，或者只是想打个招呼，都欢迎发邮件给我。
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded-full bg-linear-to-r from-accent-from via-accent-via to-accent-to px-6 py-3 text-sm font-semibold text-night transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-to"
          >
            {profile.email}
          </a>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            {profile.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-to"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
