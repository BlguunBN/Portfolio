 "use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useEffect, useState } from "react";

type TiltCardProps = {
  children: ReactNode;
  maxTilt?: number;
  className?: string;
};

export function TiltCard({ children, maxTilt = 8, className }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!media.matches) {
      setEnabled(true);
    }

    const listener = (event: MediaQueryListEvent) => {
      setEnabled(!event.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, []);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]),
    {
      stiffness: 220,
      damping: 20,
      mass: 0.8,
    },
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]),
    {
      stiffness: 220,
      damping: 20,
      mass: 0.8,
    },
  );

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!enabled) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;

    x.set(relX);
    y.set(relY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={
        enabled
          ? {
              rotateX,
              rotateY,
              transformPerspective: 900,
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

