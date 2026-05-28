"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { timelineEntries } from "@/src/data/home-content";
import { profile } from "@/src/data/profile";
import { projects } from "@/src/data/projects";

function ArrowRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" suppressHydrationWarning>
      <path d="M2 6.5h9M6.5 2 11 6.5 6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" suppressHydrationWarning>
      <path d="M2 9 9 2M9 2H4M9 2v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" suppressHydrationWarning>
      <path d="M2 4l4.5 3.5L11 4M2 4h9v6H2V4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PortfolioHome() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduceMotion) {
      revealNodes.forEach((node) => node.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const canvas = document.getElementById("bg-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const accent = [79, 142, 247] as const;
    const particleCount = 88;
    const connectDistance = 145;
    const mouseRadius = 120;
    const mouseForce = 0.018;
    const mouse = { x: -9999, y: -9999 };

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: Math.random() * 0.44 - 0.22,
      vy: Math.random() * 0.44 - 0.22,
      r: 1.2 + Math.random() * 1.2,
      opacity: 0.35 + Math.random() * 0.4,
    }));

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const vignette = context.createRadialGradient(width * 0.28, height * 0.28, 0, width * 0.28, height * 0.28, Math.max(width, height) * 0.75);
      vignette.addColorStop(0, "rgba(11,13,18,0)");
      vignette.addColorStop(1, "rgba(11,13,18,0.55)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);

      for (const particle of particles) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius && distance > 0) {
          const force = (1 - distance / mouseRadius) * mouseForce;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > 0.55) {
          particle.vx = (particle.vx / speed) * 0.55;
          particle.vy = (particle.vy / speed) * 0.55;
        }

        particle.vx *= 0.998;
        particle.vy *= 0.998;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      }

      for (let index = 0; index < particles.length; index += 1) {
        for (let innerIndex = index + 1; innerIndex < particles.length; innerIndex += 1) {
          const current = particles[index];
          const next = particles[innerIndex];
          const dx = current.x - next.x;
          const dy = current.y - next.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            const alpha = (1 - distance / connectDistance) * 0.18;
            context.beginPath();
            context.moveTo(current.x, current.y);
            context.lineTo(next.x, next.y);
            context.strokeStyle = `rgba(${accent[0]},${accent[1]},${accent[2]},${alpha})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(${accent[0]},${accent[1]},${accent[2]},${particle.opacity})`;
        context.fill();
      }

      frame = window.requestAnimationFrame(draw);
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches[0]) {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
      }
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="portfolio-shell">
      <canvas id="bg-canvas" aria-hidden="true" />

      <header className={`portfolio-nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="home-wrap portfolio-nav__inner">
          <a href="#top" className="portfolio-mark" aria-label="Back to top">
            B<span>.</span>
          </a>
          <ul className="portfolio-nav__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Work</a>
            </li>
            <li>
              <a href="#skills">Stack</a>
            </li>
            <li>
              <a href="#experience">Background</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>

      <main id="top">
        <section id="hero" className="portfolio-hero">
          <div className="hero-inner">
            <p className="hero-step hero-eyebrow">{"// Available for internships · 2026"}</p>
            <h1 className="hero-step hero-name">Bilguuntugs</h1>
            <p className="hero-step hero-role">Software developer · AI-focused builder · product-oriented engineer</p>
            <p className="hero-step hero-quote">&quot;Software that feels considered, not assembled.&quot;</p>
            <div className="hero-step hero-actions">
              <a href="#projects" className="portfolio-btn portfolio-btn--fill">
                View work
                <ArrowRightIcon />
              </a>
              <a href="https://github.com/BlguunBN" target="_blank" rel="noopener noreferrer" className="portfolio-btn portfolio-btn--outline">
                GitHub
                <ArrowUpRightIcon />
              </a>
              <a href="#contact" className="portfolio-btn portfolio-btn--outline">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="hero-scroll-line" />
            <span className="hero-scroll-label">Scroll</span>
          </div>
        </section>

        <section id="about" className="home-section">
          <div className="home-wrap">
            <p className="section-tag reveal" data-reveal>
              About
            </p>
            <div className="about-grid">
              <div className="about-body reveal delay-1" data-reveal>
                <p>
                  I&apos;m a second-year <strong>Computer Science student</strong> with an AI emphasis who cares about the structure behind the screen: not just whether software works, but whether the workflow and interface feel coherent.
                </p>
                <p>
                  {profile.about} {profile.mission}
                </p>
                <p>
                  {profile.supportingIntro} Right now I&apos;m looking for environments where I can ship useful work, sharpen judgment, and keep raising the bar on product quality.
                </p>
              </div>

              <div className="about-cards reveal delay-3" data-reveal>
                <div className="info-card">
                  <p className="info-card__label">Currently interested in</p>
                  <ul className="interest-list">
                    {profile.currentlyLearning.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-card">
                  <p className="info-card__label">Open to</p>
                  <p>
                    <span className="accent-text">{profile.openTo[0]}</span> · {profile.openTo.slice(1).join(" · ")}
                  </p>
                </div>

                <div className="info-card">
                  <p className="info-card__label">Based in</p>
                  <p>{profile.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="home-section">
          <div className="home-wrap">
            <p className="section-tag reveal" data-reveal>
              Work
            </p>
            <h2 className="section-title reveal delay-1" data-reveal>
              Selected projects
            </h2>
            <p className="section-sub reveal delay-2" data-reveal>
              The projects that best represent how I think about product framing, interface quality, and end-to-end implementation.
            </p>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article key={project.slug} className={`project-card reveal delay-${Math.min(index + 1, 4)}`} data-reveal>
                  <div className="project-card__number">{`0${index + 1}`}</div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.oneLiner}</p>
                  <div className="tech-row">
                    {project.stack.slice(0, 5).map((item) => (
                      <span key={item} className="tech-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <Link href={`/projects/${project.slug}`} className="project-link">
                      Case study
                      <ArrowRightIcon />
                    </Link>
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="project-link project-link--muted">
                      GitHub
                      <ArrowUpRightIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="home-section">
          <div className="home-wrap">
            <p className="section-tag reveal" data-reveal>
              Stack
            </p>
            <h2 className="section-title reveal delay-1" data-reveal>
              Skills &amp; tools
            </h2>
            <p className="section-sub reveal delay-2" data-reveal>
              The technologies I reach for most often, plus the areas I&apos;m deliberately deepening.
            </p>

            <div className="skills-grid">
              {profile.skills.map((group, index) => (
                <article key={group.title} className={`skill-group reveal delay-${Math.min(index + 1, 4)}`} data-reveal>
                  <div className="skill-group__name">{group.title}</div>
                  <p className="skill-group__summary">{group.summary}</p>
                  <div className="skill-rows">
                    {group.items.map((item) => (
                      <div key={item} className="skill-row">
                        <div className="skill-pip" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="home-section">
          <div className="home-wrap">
            <p className="section-tag reveal" data-reveal>
              Background
            </p>
            <h2 className="section-title reveal delay-1" data-reveal>
              Education &amp; direction
            </h2>

            <div className="timeline">
              {timelineEntries.map((entry, index) => (
                <article key={entry.title} className={`timeline-item reveal delay-${Math.min(index + 1, 4)}`} data-reveal>
                  <div className="timeline-item__dot-col">
                    <div className="timeline-item__dot" />
                  </div>
                  <div>
                    <p className="timeline-item__date">{entry.period}</p>
                    <h3 className="timeline-item__title">{entry.title}</h3>
                    <p className="timeline-item__org">{entry.org}</p>
                    <p className="timeline-item__body">{entry.body}</p>
                    <div className="timeline-item__tags">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="timeline-item__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="home-section">
          <div className="home-wrap">
            <div className="contact-layout">
              <div className="contact-left">
                <p className="section-tag reveal" data-reveal>
                  Contact
                </p>
                <h2 className="contact-headline reveal delay-1" data-reveal>
                  Send me a message.
                </h2>
                <p className="contact-sub reveal delay-2" data-reveal>
                  {profile.contactNote} Reach out through the links below.
                </p>
                <div className="contact-btns reveal delay-3" data-reveal>
                  <a href="mailto:Bilguuntugs8888@gmail.com" className="portfolio-btn portfolio-btn--outline">
                    Email instead
                    <MailIcon />
                  </a>
                  <a href="https://github.com/BlguunBN" target="_blank" rel="noopener noreferrer" className="portfolio-btn portfolio-btn--outline">
                    GitHub
                  </a>
                  <a href="#projects" className="portfolio-btn portfolio-btn--outline">
                    View work
                  </a>
                </div>
                <p className="contact-direct reveal delay-4" data-reveal>
                  Direct email: <a href="mailto:Bilguuntugs8888@gmail.com">Bilguuntugs8888@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <div className="home-wrap portfolio-footer__inner">
          <span className="portfolio-footer__copy">© {new Date().getFullYear()} Bilguuntugs</span>
          <div className="portfolio-footer__links">
            <a href="https://github.com/BlguunBN" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:Bilguuntugs8888@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
