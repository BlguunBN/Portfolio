"use client";

import { motion } from "framer-motion";
import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/data/profile";

function ContactIcon({ label }: { label: string }) {
  const key = label.toLowerCase();

  if (key.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42a3.2 3.2 0 0 0-1.34-1.76c-1.1-.76.08-.75.08-.75a2.53 2.53 0 0 1 1.85 1.24 2.57 2.57 0 0 0 3.5 1 2.56 2.56 0 0 1 .77-1.61c-2.66-.3-5.47-1.33-5.47-5.92a4.63 4.63 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.17s1-.33 3.3 1.23a11.4 11.4 0 0 1 6 0c2.27-1.56 3.29-1.23 3.29-1.23a4.3 4.3 0 0 1 .12 3.17 4.62 4.62 0 0 1 1.23 3.22c0 4.6-2.82 5.62-5.5 5.92a2.87 2.87 0 0 1 .82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (key.includes("telegram")) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M9.04 15.54 8.67 20.7c.53 0 .76-.23 1.03-.5l2.46-2.35 5.1 3.73c.94.52 1.6.24 1.86-.87l3.37-15.8.01-.01c.3-1.4-.5-1.95-1.41-1.61L1.3 10.86C-.06 11.4-.04 12.17 1.08 12.52l5.05 1.58L17.85 6.7c.55-.36 1.06-.16.65.2" />
      </svg>
    );
  }

  // Email fallback icon
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <Section id="contact" title="Contact" subtitle="I’m open to internships, collaboration, and meaningful product work.">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4 }}
        className="border-t border-white/15 pt-5"
      >
        <div className="flex flex-wrap gap-3">
          {profile.contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              data-magnetic="true"
              aria-label={contact.label}
              title={contact.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b084ff]/35 bg-white/[0.04] text-[#efe7ff] transition hover:border-[#ff4d7e]/60 hover:bg-white/10"
            >
              <ContactIcon label={contact.label} />
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
