"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/data/profile";
import { useHydrated } from "@/src/hooks/use-hydrated";

export function AboutSection() {
  const hydrated = useHydrated();
  const shouldReduceMotion = useReducedMotion();
  const animate = hydrated && !shouldReduceMotion;

  return (
    <Section
      id="about"
      eyebrow="About"
      title="A builder who cares about the structure behind the screen."
      description="The interesting part of software is not just the code path. It is how the decisions around layout, language, interaction, and implementation combine into something that feels right."
    >
      <motion.div
        initial={animate ? { opacity: 0, y: 18 } : false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
      >
        <div className="space-y-6">
          <p className="max-w-3xl font-display text-[clamp(2rem,3vw,2.85rem)] leading-[1.02] tracking-[-0.04em] text-[var(--text)]">
            {profile.about}
          </p>

          <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-lg">{profile.mission}</p>

          <div className="grid gap-6 pt-2 md:grid-cols-2">
            <div className="section-rule pt-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Currently exploring</p>
              <ul className="mt-4 space-y-3">
                {profile.currentlyLearning.map((item) => (
                  <li key={item} className="text-sm leading-7 text-[var(--text-soft)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="section-rule pt-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Open to</p>
              <ul className="mt-4 space-y-3">
                {profile.openTo.map((item) => (
                  <li key={item} className="text-sm leading-7 text-[var(--text-soft)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-0">
          {profile.principles.map((principle, index) => (
            <div key={principle.title} className="section-rule grid gap-4 py-5 md:grid-cols-[48px_1fr]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">0{index + 1}</p>
              <div>
                <h3 className="font-display text-[1.7rem] leading-[1.02] tracking-[-0.035em] text-[var(--text)]">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--text-soft)]">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
