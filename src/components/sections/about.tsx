"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/src/components/ui/section";
import { useHydrated } from "@/src/hooks/use-hydrated";
import { profile } from "@/src/data/profile";

export function AboutSection() {
  const hydrated = useHydrated();
  const shouldReduceMotion = useReducedMotion();

  const motionProps =
    !hydrated || shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.35 },
          transition: { duration: 0.4 },
        };

  return (
    <Section id="about" title="About" subtitle={`${profile.location} · Building practical software`}>
      <motion.div {...motionProps} className="border-l-2 border-[#8f5bff]/55 pl-5 md:pl-6">
        <p className="text-muted text-base leading-relaxed md:text-lg">{profile.about}</p>
      </motion.div>
    </Section>
  );
}
