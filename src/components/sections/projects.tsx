"use client";

import { useMemo, useRef, useState, type WheelEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Chip } from "@/src/components/ui/chip";
import { GlassCard } from "@/src/components/ui/glass-card";
import { Section } from "@/src/components/ui/section";
import { projects } from "@/src/data/projects";

const PAGE_SIZE = 2;
const WHEEL_TRIGGER = 56;
const WHEEL_LOCK_MS = 300;
const SWIPE_TRIGGER = 72;
const SWIPE_VELOCITY_FACTOR = 0.16;

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [page, setPage] = useState(0);
  const wheelCarry = useRef(0);
  const wheelLockUntil = useRef(0);

  const pages = useMemo(
    () =>
      Array.from({ length: Math.ceil(projects.length / PAGE_SIZE) }, (_, i) =>
        projects.slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE),
      ),
    [],
  );

  const totalPages = pages.length;

  function clampPage(nextPage: number) {
    return Math.min(totalPages - 1, Math.max(0, nextPage));
  }

  function goTo(nextPage: number) {
    setPage(clampPage(nextPage));
  }

  function goBy(delta: number) {
    setPage((currentPage) => clampPage(currentPage + delta));
  }

  function handleHorizontalWheel(event: WheelEvent<HTMLDivElement>) {
    if (shouldReduceMotion || totalPages < 2) return;
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;

    event.preventDefault();
    const now = performance.now();
    if (now < wheelLockUntil.current) return;

    wheelCarry.current += event.deltaX;
    if (Math.abs(wheelCarry.current) < WHEEL_TRIGGER) return;

    const direction = wheelCarry.current > 0 ? 1 : -1;
    wheelCarry.current = 0;
    wheelLockUntil.current = now + WHEEL_LOCK_MS;
    goBy(direction);
  }

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selected projects where I solved real problems with practical engineering decisions."
    >
      <div className="relative overflow-hidden" onWheel={handleHorizontalWheel}>
        <motion.div
          className="flex items-stretch"
          animate={{ x: `${-page * 100}%` }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 240, damping: 30, mass: 0.7 }
          }
          drag={shouldReduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={shouldReduceMotion ? 0 : 0.1}
          dragMomentum={false}
          onDragEnd={(_, info) => {
            const swipe = info.offset.x + info.velocity.x * SWIPE_VELOCITY_FACTOR;
            if (swipe < -SWIPE_TRIGGER) goBy(1);
            else if (swipe > SWIPE_TRIGGER) goBy(-1);
          }}
          style={{ cursor: shouldReduceMotion ? "default" : "grab" }}
        >
          {pages.map((pageProjects, pageIndex) => (
            <div key={pageIndex} className="w-full shrink-0">
              <div className="grid gap-4 md:grid-cols-2">
                {pageProjects.map((project) => (
                  <motion.div
                    key={project.slug}
                    {...(shouldReduceMotion ? {} : { whileHover: { y: -4 } })}
                  >
                    <GlassCard interactive className="h-full min-h-[22rem] select-none">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted mt-2 text-sm">{project.oneLiner}</p>
                      <p className="text-muted mt-4 text-sm leading-relaxed">{project.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <Chip key={item}>{item}</Chip>
                        ))}
                      </div>
                      <div className="mt-5 flex gap-4 text-sm">
                        <Link
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d8bbff] hover:text-[#ff8fb2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6cff] rounded-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View code
                        </Link>
                        {project.links.demo !== "#" ? (
                          <Link
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#d8bbff] hover:text-[#ff8fb2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6cff] rounded-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live preview
                          </Link>
                        ) : null}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-5">
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            aria-label="Previous projects"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#9a6cff]/40 text-[#d8bbff] transition-colors hover:border-[#9a6cff] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {"<"}
          </button>

          <div className="flex gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page ? "w-6 bg-[#9a6cff]" : "w-2 bg-[#9a6cff]/30 hover:bg-[#9a6cff]/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages - 1}
            aria-label="Next projects"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#9a6cff]/40 text-[#d8bbff] transition-colors hover:border-[#9a6cff] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {">"}
          </button>
        </div>
      </div>
    </Section>
  );
}
