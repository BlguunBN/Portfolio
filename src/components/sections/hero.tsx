"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ButtonLink } from "@/src/components/ui/button-link";
import { profile } from "@/src/data/profile";
import { useHydrated } from "@/src/hooks/use-hydrated";

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
        className="max-w-5xl"
      >
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <p className="section-kicker">Bilguuntugs</p>
            <p className="max-w-xl text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Computer Science student · Product-oriented builder · Open to internships
            </p>
          </div>

          <div className="space-y-6">
            <h1 className="font-display text-[clamp(3.9rem,9.5vw,8rem)] leading-[0.86] tracking-[-0.055em] text-[var(--text)]">
              Software that feels
              <span className="block pl-[0.08em]">considered, not assembled.</span>
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[var(--text-soft)] md:text-[1.3rem] md:leading-9">
              {profile.headline}
            </p>

            <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
              I care about products where interface, workflow, and implementation feel coherent.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects">View work</ButtonLink>
            <ButtonLink href="#profile" variant="secondary">
              Profile
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
      </motion.div>
    </section>
  );
}
