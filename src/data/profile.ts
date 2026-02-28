export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  short?: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  school: string;
  focus: string[];
};

export const profile = {
  name: "Bilguuntugs",
  headline: "Hi, I’m Bilguuntugs (2nd) — I build practical software with a product mindset.",
  role: "Computer Science Student · Product-Oriented Builder",
  location: "Ulaanbaatar → China",
  about:
    "I enjoy turning real-world friction into clean software experiences. My work usually starts with everyday problems like repetitive messaging and manual workflows, then evolves into practical tools with clear UX and reliable architecture.",
  mission:
    "Right now, I’m focused on building useful products end-to-end, sharpening my engineering fundamentals, and growing into an AI-focused software engineer.",
  education: [
    {
      period: "2024 — Present",
      degree: "BSc in Computer Science (Undergraduate)",
      school: "Xi’an Jiaotong–Liverpool University (XJTLU)",
      focus: [
        "Currently in my second year",
        "Studying Computer Science with an AI focus",
      ],
    },
  ] as EducationItem[],
  skills: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend & Data",
      items: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Firebase"],
    },
    {
      title: "Workflow & Delivery",
      items: ["Git/GitHub", "OpenClaw", "Vercel", "CI fundamentals"],
    },
  ] as SkillGroup[],
  contacts: [
    { label: "GitHub", short: "GH", href: "https://github.com/BlguunBN" },
    { label: "Email", short: "@", href: "mailto:bilguuntugs@example.com" },
    { label: "Telegram", short: "TG", href: "https://t.me/" },
  ] as ContactLink[],
};
