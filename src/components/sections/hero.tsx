"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ButtonLink } from "@/src/components/ui/button-link";
import { profile } from "@/src/data/profile";
import { useHydrated } from "@/src/hooks/use-hydrated";

const sidebarNotes = [
  { label: "Now", value: "Studying CS and refining product judgment through shipped software." },
  { label: "Looking for", value: "Internships and teams where I can contribute to real product work." },
  { label: "Bias", value: "Interfaces that feel clear, deliberate, and useful without explanation." },
];

export function HeroSection() {
  const hydrated = useHydrated();
  const shouldReduceMotion = useReducedMotion();
  const animate = hydrated && !shouldReduceMotion;

  return (
    <section id="top" className="min-h-[calc(100vh-6rem)] pt-8 md:pt-12">
      <motion.div
        initial={animate ? { opacity: 0, y: 24 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-10 xl:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.58fr)] xl:items-end"
      >
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <p className="section-kicker">Bilguuntugs</p>
            <p className="max-w-xl text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Computer Science student · Product-oriented builder · Available for internships and thoughtful collaboration
            </p>
          </div>

          <div className="max-w-5xl space-y-6">
            <h1 className="font-display text-[clamp(3.9rem,9.5vw,8rem)] leading-[0.86] tracking-[-0.055em] text-[var(--text)]">
              Software that feels
              <span className="block pl-[0.08em]">considered, not assembled.</span>
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[var(--text-soft)] md:text-[1.3rem] md:leading-9">
              {profile.headline}
            </p>

            <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
              I am interested in the point where product thinking, interface judgment, and software implementation meet. The goal is not just to ship features. It is to make the work feel coherent.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects">View selected work</ButtonLink>
            <ButtonLink href="#profile" variant="secondary">
              Read the profile
            </ButtonLink>
            <a
              href="https://github.com/BlguunBN"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text)]"
            >
              GitHub
              <span className="text-[var(--accent)]">↗</span>
            </a>
          </div>

          <div className="section-rule grid gap-4 pt-5 md:grid-cols-3 md:gap-6">
            {profile.currentFocus.map((item, index) => (
              <div key={item} className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">0{index + 1}</p>
                <p className="max-w-sm text-sm leading-7 text-[var(--text-soft)]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="xl:pb-3">
          <div className="section-rule space-y-6 pt-5">
            <p className="max-w-xs font-display text-[2rem] leading-[1.02] tracking-[-0.035em] text-[var(--text)]">
              Building practical software with sharper product taste.
            </p>

            <div className="space-y-5">
              {sidebarNotes.map((item) => (
                <div key={item.label} className="grid gap-2 border-b border-[var(--line)] pb-4 last:border-b-0 last:pb-0">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">{item.label}</p>
                  <p className="text-sm leading-7 text-[var(--text-soft)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </motion.div>
    </section>
  );
}
