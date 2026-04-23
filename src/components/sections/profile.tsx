"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/data/profile";
import { useHydrated } from "@/src/hooks/use-hydrated";

export function ProfileSection() {
  const hydrated = useHydrated();
  const shouldReduceMotion = useReducedMotion();
  const animate = hydrated && !shouldReduceMotion;
  const education = profile.education[0];

  return (
    <Section
      id="profile"
      eyebrow="Profile"
      title="Still early, but already opinionated about quality."
      description="I am in my second year of Computer Science, but the standard I am aiming for is already clear: useful products, disciplined implementation, and interfaces that feel composed rather than improvised."
    >
      <motion.div
        initial={animate ? { opacity: 0, y: 16 } : false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid gap-10 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
      >
        <div className="space-y-6">
          <div className="section-rule pt-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Education</p>
            <h3 className="mt-4 font-display text-[2.2rem] leading-[0.96] tracking-[-0.045em] text-[var(--text)]">
              {education.degree}
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">{education.school}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">{education.period}</p>
          </div>

          <div className="space-y-0">
            {education.focus.map((item) => (
              <div key={item} className="section-rule py-4 text-sm leading-7 text-[var(--text-soft)]">
                {item}
              </div>
            ))}
          </div>

          <div className="section-rule pt-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Working toward</p>
            <p className="mt-4 max-w-md text-base leading-8 text-[var(--text-soft)]">
              Better judgment across product, interface, and implementation so I can contribute meaningfully to teams that care about craft.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {profile.skills.map((group) => (
            <div key={group.title} className="section-rule grid gap-4 py-5 md:grid-cols-[220px_1fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">{group.title}</p>
              </div>
              <div>
                <p className="text-sm leading-7 text-[var(--text-soft)]">{group.items.join(" · ")}</p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-muted)]">{group.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
