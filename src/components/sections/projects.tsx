"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { ProjectPreview } from "@/src/components/projects/project-preview";
import { Section } from "@/src/components/ui/section";
import { projects } from "@/src/data/projects";
import { useHydrated } from "@/src/hooks/use-hydrated";

export function ProjectsSection() {
  const hydrated = useHydrated();
  const shouldReduceMotion = useReducedMotion();
  const animate = hydrated && !shouldReduceMotion;

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Work framed like products, not just repos."
      description="The strongest signal on a portfolio is whether the projects feel scoped, useful, and thoughtfully presented. These are the ones that best represent how I think."
    >
      <div className="space-y-14 md:space-y-18">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={animate ? { opacity: 0, y: 24 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.48, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="section-rule pt-8 md:pt-10"
          >
            <div className="grid gap-8 xl:grid-cols-[86px_minmax(0,0.9fr)_minmax(320px,0.95fr)] xl:items-start">
              <div className="hidden xl:block">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  0{index + 1}
                </p>
              </div>

              <div className={index % 2 === 1 ? "xl:order-2" : undefined}>
                <div className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                      {project.category}
                    </p>
                    <div className="space-y-2">
                      <h3 className="font-display text-[clamp(2.1rem,4vw,3.6rem)] leading-[0.94] tracking-[-0.045em] text-[var(--text)]">
                        {project.title}
                      </h3>
                      <p className="max-w-xl text-lg leading-8 text-[var(--text-soft)]">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">{project.summary}</p>
                </div>

                <div className="mt-7 grid gap-5 border-t border-[var(--line)] pt-5 md:grid-cols-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">Challenge</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">Approach</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.approach}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">Why it matters</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.impact}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--text-muted)]">
                  <span>{project.stack.join(" · ")}</span>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-5 text-sm">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--text)] transition-colors duration-150 hover:text-white"
                  >
                    Case study
                    <span className="text-[var(--accent)]">→</span>
                  </Link>
                  <Link
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--text-soft)] transition-colors duration-150 hover:text-[var(--text)]"
                  >
                    GitHub
                    <span className="text-[var(--accent)]">↗</span>
                  </Link>
                  {project.links.demo ? (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--text-soft)] transition-colors duration-150 hover:text-[var(--text)]"
                    >
                      Live preview
                      <span className="text-[var(--accent)]">↗</span>
                    </Link>
                  ) : null}
                </div>
              </div>

              <ProjectPreview project={project} className={index % 2 === 1 ? "xl:order-1" : undefined} />
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
