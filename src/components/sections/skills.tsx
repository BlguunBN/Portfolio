"use client";

import { motion } from "framer-motion";
import { Chip } from "@/src/components/ui/chip";
import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/data/profile";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="My core engineering toolkit across product UI, backend logic, and delivery workflow."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {profile.skills.map((group, idx) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="rounded-2xl border border-[#9a6cff]/22 bg-[#1d1d1d]/80 p-5"
          >
            <p className="text-[11px] tracking-[0.14em] uppercase text-[#cdb8f1]">Core Stack</p>
            <h3 className="mt-2 text-lg font-semibold text-[#f0e9ff]">{group.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#b8afca]">{group.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
