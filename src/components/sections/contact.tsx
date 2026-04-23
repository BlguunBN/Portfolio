"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/data/profile";
import { useHydrated } from "@/src/hooks/use-hydrated";

export function ContactSection() {
  const hydrated = useHydrated();
  const shouldReduceMotion = useReducedMotion();
  const animate = hydrated && !shouldReduceMotion;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="If the work feels aligned, I would be glad to talk."
      description="I am looking for internships, collaborations, and teams that care about thoughtful product work. The easiest paths are below."
    >
      <motion.div
        initial={animate ? { opacity: 0, y: 16 } : false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)]"
      >
        <div className="space-y-6">
          <p className="max-w-3xl font-display text-[clamp(2.1rem,4vw,3.75rem)] leading-[0.96] tracking-[-0.045em] text-[var(--text)]">
            {profile.contactNote}
          </p>
          <p className="max-w-xl text-base leading-8 text-[var(--text-soft)]">{profile.contactLead}</p>
          <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)]">{profile.supportingIntro}</p>
        </div>

        <div className="space-y-0">
          {profile.contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="section-rule block py-5 transition-colors duration-150 hover:text-white"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-lg font-medium tracking-[-0.01em] text-[var(--text)]">{contact.label}</p>
                  <p className="mt-2 max-w-sm text-sm leading-7 text-[var(--text-muted)]">{contact.note}</p>
                </div>
                <span className="mt-1 text-sm text-[var(--accent)]">↗</span>
              </div>
            </a>
          ))}

          <div className="section-rule pt-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Open to</p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{profile.openTo.join(" · ")}</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
