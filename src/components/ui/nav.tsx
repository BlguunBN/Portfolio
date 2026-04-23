"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { useHydrated } from "@/src/hooks/use-hydrated";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "profile", label: "Profile" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const hydrated = useHydrated();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-18% 0px -68% 0px" },
    );

    for (const item of NAV_ITEMS) {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, [hydrated]);

  return (
    <header className="sticky top-0 z-40 pt-4">
      <nav
        className={clsx(
          "section-rule flex flex-col gap-4 border-b pb-4 pt-2 transition-[background-color,border-color,backdrop-filter] duration-250 lg:flex-row lg:items-end lg:justify-between",
          scrolled ? "border-[var(--line)] bg-[rgba(10,13,16,0.82)] backdrop-blur-xl" : "border-transparent",
        )}
      >
        <a href="#top" className="flex items-end justify-between gap-4">
          <span>
            <span className="block text-sm font-medium tracking-[-0.01em] text-[var(--text)]">Bilguuntugs</span>
            <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              CS student / product builder
            </span>
          </span>
        </a>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-end lg:gap-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={clsx(
                  "border-b pb-1.5 transition-colors duration-150",
                  activeSection === id
                    ? "border-[var(--accent)] text-[var(--text)]"
                    : "border-transparent hover:text-[var(--text-soft)]",
                )}
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-[12px] border border-[var(--line)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--text)] transition-[border-color,color,background-color] duration-150 hover:border-[var(--line-strong)] hover:bg-white/[0.03] hover:text-white lg:self-auto"
          >
            Contact
            <span className="text-[var(--accent)]">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
