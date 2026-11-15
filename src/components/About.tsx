import { useMemo } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/profile";
import { skills } from "../data/skills";

/**
 * 关于我：详细介绍 + 技能列表（PRD 核心功能 2）。
 * 技能按 category 分组渲染，数据结构见 src/data/skills.ts。
 */
export default function About() {
  // 按分类聚合技能，只在数据不变时计算一次
  const groupedSkills = useMemo(() => {
    const groups = new Map<string, string[]>();

    for (const skill of skills) {
      const names = groups.get(skill.category) ?? [];
      names.push(skill.name);
      groups.set(skill.category, names);
    }

    return [...groups.entries()];
  }, []);

  return (
    <section id="about" className="scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">关于我</h2>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.05} className="space-y-4">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            {/* 所在地与就读学校：来自 profile.ts，学校为空时自动隐藏 */}
            <div className="space-y-1 text-sm text-muted">
              <p>
                所在地区：<span className="text-ink">{profile.location}</span>
              </p>
              {profile.school && (
                <p>
                  就读于{" "}
                  <a
                    href={profile.school.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-to"
                  >
                    {profile.school.name}
                  </a>
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-sm font-semibold tracking-widest text-muted uppercase">
              技能
            </h3>

            <dl className="mt-6 space-y-6">
              {groupedSkills.map(([category, names]) => (
                <div key={category}>
                  <dt className="text-sm font-medium">{category}</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {names.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-white/10 bg-panel px-3 py-1 text-xs text-muted"
                      >
                        {name}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
