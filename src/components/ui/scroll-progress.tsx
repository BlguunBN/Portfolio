"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { useHydrated } from "@/src/hooks/use-hydrated";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 135,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, rgba(217,156,103,0.9) 0%, rgba(247,214,177,0.95) 100%)",
        boxShadow: "0 0 18px rgba(217, 156, 103, 0.18)",
      }}
    />
  );
}

export function ScrollProgress() {
  const hydrated = useHydrated();
  if (!hydrated) return null;
  return <ScrollProgressBar />;
}
