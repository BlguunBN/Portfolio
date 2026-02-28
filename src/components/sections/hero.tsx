"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/src/components/ui/button-link";
import { profile } from "@/src/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#9a6cff]/22 bg-black/10 px-6 py-8 backdrop-blur-[2px] md:px-10 md:py-12">

      <div className="grid items-center gap-10 md:grid-cols-[1.25fr_.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="space-y-5"
        >
          <p className="text-sm tracking-[0.2em] text-[#d8bbff] uppercase">Hello, I’m</p>
          <h1 className="text-4xl leading-tight font-bold md:text-6xl">Bilguuntugs.</h1>
          <h2 className="text-3xl leading-tight font-semibold text-[#b7accf] md:text-5xl">
            Product-minded CS Student
          </h2>
          <p className="text-muted max-w-2xl text-base md:text-lg">{profile.mission}</p>

          <div className="flex flex-wrap gap-3 pt-1">
            <ButtonLink href="#projects">View Projects</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Contact Me
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 pt-2">
            {profile.contacts.slice(0, 2).map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-xs text-[#efe7ff] transition hover:border-[#ff4d7e]/60 hover:bg-white/10"
                aria-label={contact.label}
              >
                {contact.short ?? contact.label.slice(0, 1)}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          className="mx-auto w-full max-w-[280px]"
        >
          <div className="overflow-hidden rounded-2xl border border-[#9a6cff]/45 bg-[#1f1f1f] p-2 shadow-[0_0_0_1px_rgba(154,108,255,0.35),0_10px_30px_rgba(30,16,52,0.3)]">
            <div
              className="relative aspect-square rounded-xl bg-[#222222] bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero/frieren.gif')",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
