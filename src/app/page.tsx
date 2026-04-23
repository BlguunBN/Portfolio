import { AboutSection } from "@/src/components/sections/about";
import { ContactSection } from "@/src/components/sections/contact";
import { HeroSection } from "@/src/components/sections/hero";
import { ProfileSection } from "@/src/components/sections/profile";
import { ProjectsSection } from "@/src/components/sections/projects";
import { Nav } from "@/src/components/ui/nav";

export default function Home() {
  return (
    <div className="site-shell min-h-screen">
      <Nav />

      <main className="space-y-22 pb-20 md:space-y-30 md:pb-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProfileSection />
        <ContactSection />
      </main>

      <footer className="section-rule py-8 text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
        © {new Date().getFullYear()} Bilguuntugs · Built with Next.js
      </footer>
    </div>
  );
}
