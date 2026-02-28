import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {subtitle ? <p className="text-muted mt-2 max-w-2xl">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
