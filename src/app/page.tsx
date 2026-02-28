import { AboutSection } from "@/src/components/sections/about";
import { ContactSection } from "@/src/components/sections/contact";
import { EducationSection } from "@/src/components/sections/education";
import { HeroSection } from "@/src/components/sections/hero";
import { ProjectsSection } from "@/src/components/sections/projects";
import { SkillsSection } from "@/src/components/sections/skills";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl px-6 py-8 md:px-10 md:py-10">
      <header className="sticky top-4 z-10 mb-10 md:mb-14">
        <nav className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-xl md:px-5">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold tracking-tight text-white">2nd</span>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#9f93c5] md:block">
              portfolio
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-[#d8cff8] transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="space-y-16 md:space-y-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <footer className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-[#9f93c5] md:mt-20">
        © {new Date().getFullYear()} Bilguuntugs (2nd). Built with Next.js.
      </footer>
    </div>
  );
}
