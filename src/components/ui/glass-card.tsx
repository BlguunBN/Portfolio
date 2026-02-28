import clsx from "clsx";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function GlassCard({ children, className, interactive = false }: GlassCardProps) {
  return (
    <div
      className={clsx(
        "glass-panel rounded-2xl p-6 transition-all duration-300",
        interactive && "hover:-translate-y-0.5 hover:border-[#9a6cff]/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
