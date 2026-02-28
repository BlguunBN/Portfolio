"use client";

import { motion } from "framer-motion";
import { Chip } from "@/src/components/ui/chip";
import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/data/profile";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I use to build, ship, and iterate quickly.">
      <div className="space-y-6">
        {profile.skills.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="border-b border-white/10 pb-5"
          >
            <h3 className="text-lg font-semibold text-[#efe7ff]">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
