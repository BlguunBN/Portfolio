"use client";

import { motion } from "framer-motion";
import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/data/profile";

export function EducationSection() {
  return (
    <Section id="education" title="Education" subtitle="My current academic foundation in computer science and AI.">
      <div className="relative pl-6">
        <div className="absolute top-0 bottom-0 left-1.5 w-px bg-gradient-to-b from-[#8f5bff]/70 via-[#ff4d7e]/35 to-transparent" />

        {profile.education.map((item, idx) => (
          <motion.article
            key={`${item.school}-${idx}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="relative mb-8 last:mb-0"
          >
            <span className="absolute -left-[1.05rem] top-1.5 h-3 w-3 rounded-full border border-[#ffd2e1]/70 bg-[#8f5bff] shadow-[0_0_18px_rgba(143,91,255,0.75)]" />
            <p className="text-xs tracking-[0.18em] uppercase text-[#d8bbff]">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-[#f4eeff]">{item.degree}</h3>
            <p className="mt-1 text-sm text-[#cfc6ea]">{item.school}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-[#bab4d4]">
              {item.focus.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#ff4d7e]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
