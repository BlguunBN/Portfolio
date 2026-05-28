"use client";

import clsx from "clsx";
import { useCallback, useRef, type MouseEvent, type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function GlassCard({ children, className, interactive = false }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!interactive || !cardRef.current || !glowRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.background = `radial-gradient(280px circle at ${x}px ${y}px, rgba(154, 108, 255, 0.12), transparent 60%)`;
    },
    [interactive],
  );

  const handleMouseEnter = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }, []);

  return (
    <div
      ref={cardRef}
      className={clsx(
        "glass-panel relative overflow-hidden rounded-2xl p-6 transition-[transform,border-color,background-color,opacity] duration-300",
        interactive && "hover:-translate-y-0.5 hover:border-[#9a6cff]/40",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={interactive ? handleMouseEnter : undefined}
      onMouseLeave={interactive ? handleMouseLeave : undefined}
    >
      {interactive && (
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{ opacity: 0 }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
