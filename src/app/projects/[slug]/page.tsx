import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectMediaGallery } from "@/src/components/projects/project-media-gallery";
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
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-8 md:px-10 md:py-10">
      <Link href="/" className="text-sm text-sky-300 hover:text-sky-200">
        ← Back to portfolio
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-white">{project.title}</h1>
        <p className="text-muted mt-2">{project.oneLiner}</p>
      </header>

      <section className="mt-8">
        <ProjectMediaGallery items={project.media} />
      </section>
    </main>
  );
}
