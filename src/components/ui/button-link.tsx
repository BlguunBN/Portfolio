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
      data-magnetic="true"
      className={clsx(
        "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-[transform,opacity,filter,background-color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6cff] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        variant === "primary" &&
          "bg-gradient-to-r from-[#d182ff] to-[#9a6cff] text-white shadow-[0_0_0_1px_rgba(154,108,255,0.28),0_8px_22px_rgba(86,55,136,0.3)] hover:-translate-y-0.5 hover:brightness-105",
        variant === "ghost" &&
          "border border-white/20 bg-white/5 text-slate-100 hover:border-[#b58af8]/50 hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
