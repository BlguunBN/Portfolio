export type SkillGroup = {
  title: string;
  summary: string;
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
  currentlyLearning: ["AI product design", "System design fundamentals", "Cloud deployment workflows"],
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
      summary: "I build responsive interfaces with clean hierarchy and fast user flows.",
      items: ["React", "Next.js"],
    },
    {
      title: "Backend & Data",
      summary: "I design practical APIs and data models for reliable product behavior.",
      items: ["Node.js", "REST APIs", "Prisma"],
    },
    {
      title: "Workflow & Delivery",
      summary: "I ship with version control, automation, and deployment-focused habits.",
      items: ["Git/GitHub", "OpenClaw", "Vercel", "CI fundamentals"],
    },
  ] as SkillGroup[],
  contacts: [
    { label: "GitHub", short: "GH", href: "https://github.com/BlguunBN" },
    { label: "Email", short: "@", href: "mailto:bilguuntugs@example.com" },
    { label: "Telegram", short: "TG", href: "https://t.me/" },
  ] as ContactLink[],
};
