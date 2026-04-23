import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-8 md:space-y-12">
      <div className="section-rule grid gap-6 pt-6 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-end md:pt-8">
        <div className="space-y-3">
          <p className="section-kicker">{eyebrow}</p>
          <h2 className="max-w-xl font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.94] tracking-[-0.04em] text-[var(--text)]">
            {title}
          </h2>
        </div>

        {description ? (
          <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-lg">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
