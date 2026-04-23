import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectPreview } from "@/src/components/projects/project-preview";
import { projects, projectsBySlug } from "@/src/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsBySlug[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="site-shell min-h-screen py-8 md:py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text)]"
      >
        <span className="text-[var(--accent)]">←</span>
        Back to portfolio
      </Link>

      <header className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] xl:items-start">
        <div>
          <p className="section-kicker">{project.category}</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-[-0.05em] text-[var(--text)]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-9 text-[var(--text-soft)]">{project.oneLiner}</p>

          <div className="mt-8 grid gap-5 border-t border-[var(--line)] pt-5 md:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">Role</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.role}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">Challenge</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.challenge}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">Outcome</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.impact}</p>
            </div>
          </div>
        </div>

        <ProjectPreview project={project} />
      </header>

      <section className="mt-12 grid gap-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <article className="space-y-6">
          <div className="section-rule pt-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Summary</p>
            <h2 className="mt-4 font-display text-[2.15rem] leading-[0.96] tracking-[-0.04em] text-[var(--text)]">
              {project.tagline}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-soft)]">{project.summary}</p>
          </div>

          <div className="space-y-0">
            {project.highlights.map((item) => (
              <div key={item} className="section-rule py-4 text-sm leading-7 text-[var(--text-soft)]">
                {item}
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-0">
          <div className="section-rule py-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Approach</p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">{project.approach}</p>
          </div>

          <div className="section-rule py-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Stack</p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">{project.stack.join(" · ")}</p>
          </div>

          <div className="section-rule py-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Links</p>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm">
              <Link
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--text)] transition-colors duration-150 hover:text-white"
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
        </div>
      </section>
    </main>
  );
}
