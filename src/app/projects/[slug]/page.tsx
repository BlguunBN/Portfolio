import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectPreview } from "@/src/components/projects/project-preview";
import { projects, projectsBySlug } from "@/src/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">{children}</p>;
}

function DividerSection({
  label,
  title,
  children,
}: {
  label: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section-rule pt-6 md:pt-7">
      <SectionLabel>{label}</SectionLabel>
      {title ? (
        <h2 className="mt-4 max-w-3xl font-display text-[2rem] leading-[0.96] tracking-[-0.04em] text-[var(--text)] md:text-[2.35rem]">
          {title}
        </h2>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

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

      <header className="mt-8 grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.88fr)] xl:items-start">
        <div>
          <SectionLabel>{project.category}</SectionLabel>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,5.9rem)] leading-[0.9] tracking-[-0.05em] text-[var(--text)]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-9 text-[var(--text-soft)]">{project.oneLiner}</p>

          <div className="mt-8 grid gap-5 border-t border-[var(--line)] pt-5 md:grid-cols-3">
            <div>
              <SectionLabel>Role</SectionLabel>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.role}</p>
            </div>
            <div>
              <SectionLabel>Scope</SectionLabel>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.scope}</p>
            </div>
            <div>
              <SectionLabel>Context</SectionLabel>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.team}</p>
            </div>
          </div>
        </div>

        <ProjectPreview project={project} />
      </header>

      <div className="mt-14 grid gap-12 xl:grid-cols-[minmax(0,1.02fr)_minmax(300px,0.7fr)]">
        <div className="space-y-10">
          <DividerSection label="Overview" title={project.tagline}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
              <div className="space-y-4">
                <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-lg">{project.summary}</p>
                <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-lg">{project.context}</p>
              </div>
              <div className="space-y-0">
                <div className="border-b border-[var(--line)] pb-4">
                  <SectionLabel>Timeframe</SectionLabel>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.timeframe}</p>
                </div>
                <div className="border-b border-[var(--line)] py-4">
                  <SectionLabel>Challenge</SectionLabel>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.challenge}</p>
                </div>
                <div className="pt-4">
                  <SectionLabel>Product angle</SectionLabel>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{project.impact}</p>
                </div>
              </div>
            </div>
          </DividerSection>

          <DividerSection label="Goals">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <SectionLabel>What I wanted to achieve</SectionLabel>
                <div className="mt-4 space-y-0">
                  {project.goals.map((item) => (
                    <div key={item} className="border-b border-[var(--line)] py-3 text-sm leading-7 text-[var(--text-soft)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>Constraints</SectionLabel>
                <div className="mt-4 space-y-0">
                  {project.constraints.map((item) => (
                    <div key={item} className="border-b border-[var(--line)] py-3 text-sm leading-7 text-[var(--text-soft)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DividerSection>

          <DividerSection label="Process" title="How the project took shape">
            <div className="space-y-0">
              {project.process.map((step, index) => (
                <div key={step.title} className="grid gap-4 border-b border-[var(--line)] py-5 md:grid-cols-[58px_1fr]">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">0{index + 1}</p>
                  <div>
                    <h3 className="font-display text-[1.55rem] leading-[1.02] tracking-[-0.03em] text-[var(--text)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-8 text-[var(--text-soft)] md:text-base">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </DividerSection>

          <DividerSection label="Decisions" title="Product and interface calls that shaped the result">
            <div className="grid gap-5">
              {project.decisions.map((decision) => (
                <article key={decision.title} className="grid gap-3 border-b border-[var(--line)] pb-5 last:border-b-0 last:pb-0">
                  <h3 className="font-display text-[1.45rem] leading-[1.04] tracking-[-0.03em] text-[var(--text)]">
                    {decision.title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-8 text-[var(--text-soft)] md:text-base">{decision.detail}</p>
                </article>
              ))}
            </div>
          </DividerSection>
        </div>

        <aside className="space-y-10">
          <DividerSection label="Highlights">
            <div className="space-y-0">
              {project.highlights.map((item) => (
                <div key={item} className="border-b border-[var(--line)] py-3 text-sm leading-7 text-[var(--text-soft)]">
                  {item}
                </div>
              ))}
            </div>
          </DividerSection>

          <DividerSection label="Stack">
            <p className="text-sm leading-8 text-[var(--text-soft)]">{project.stack.join(" · ")}</p>
          </DividerSection>

          <DividerSection label="Outcome">
            <div className="space-y-0">
              {project.outcomes.map((item) => (
                <div key={item} className="border-b border-[var(--line)] py-3 text-sm leading-7 text-[var(--text-soft)]">
                  {item}
                </div>
              ))}
            </div>
          </DividerSection>

          <DividerSection label="What I learned">
            <div className="space-y-0">
              {project.learnings.map((item) => (
                <div key={item} className="border-b border-[var(--line)] py-3 text-sm leading-7 text-[var(--text-soft)]">
                  {item}
                </div>
              ))}
            </div>
          </DividerSection>

          <DividerSection label="Next">
            <div className="space-y-0">
              {project.nextSteps.map((item) => (
                <div key={item} className="border-b border-[var(--line)] py-3 text-sm leading-7 text-[var(--text-soft)]">
                  {item}
                </div>
              ))}
            </div>
          </DividerSection>

          <DividerSection label="Links">
            <div className="flex flex-wrap items-center gap-5 text-sm">
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
          </DividerSection>
        </aside>
      </div>
    </main>
  );
}
