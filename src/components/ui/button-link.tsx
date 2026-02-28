import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200",
        variant === "primary" &&
          "bg-gradient-to-r from-[#ff4d7e] to-[#8f5bff] text-white shadow-[0_0_0_1px_rgba(255,95,143,0.35),0_8px_28px_rgba(143,91,255,0.35)] hover:-translate-y-0.5 hover:brightness-110",
        variant === "ghost" &&
          "border border-white/20 bg-white/5 text-slate-100 hover:border-[#ff4d7e]/50 hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
