"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Chip } from "@/src/components/ui/chip";
import { GlassCard } from "@/src/components/ui/glass-card";
import { Section } from "@/src/components/ui/section";
import { projects } from "@/src/data/projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selected projects where I solved real problems with practical engineering decisions."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <GlassCard interactive className="h-full">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted mt-2 text-sm">{project.oneLiner}</p>
              <p className="text-muted mt-4 text-sm leading-relaxed">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm">
                <Link href={project.links.repo} className="text-[#d8bbff] hover:text-[#ff8fb2]">
                  View code
                </Link>
                {project.links.demo !== "#" ? (
                  <Link href={project.links.demo} className="text-[#d8bbff] hover:text-[#ff8fb2]">
                    Live preview
                  </Link>
                ) : null}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

