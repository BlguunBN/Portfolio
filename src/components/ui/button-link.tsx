import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-[14px] border px-4 py-3 text-sm font-medium tracking-[-0.01em] transition-[transform,background-color,border-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
        variant === "primary" &&
          "border-[var(--line-strong)] bg-[var(--text)] text-[var(--bg)] hover:-translate-y-0.5 hover:bg-white",
        variant === "secondary" &&
          "border-[var(--line)] bg-transparent text-[var(--text-soft)] hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:text-[var(--text)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
