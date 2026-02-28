import clsx from "clsx";
import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-[#b084ff]/35 bg-white/[0.04] px-3 py-1 text-xs font-medium text-[#e8defd]",
        className,
      )}
    >
      {children}
    </span>
  );
}
