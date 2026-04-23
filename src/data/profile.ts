export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  short?: string;
  note?: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  school: string;
  focus: string[];
};

export type Principle = {
  title: string;
  description: string;
};

export type ProofPoint = {
  label: string;
  value: string;
};

export const profile = {
  name: "Bilguuntugs",
  heroLabel: "Available for internships, collaborations, and meaningful product work",
  currentFocus: [
    "Student tools with cleaner workflows",
    "Calm, useful AI interfaces",
    "Practical software with polish",
  ],
  currentlyLearning: [
    "AI product design",
    "System design fundamentals",
    "Cloud deployment workflows",
  ],
  headline:
    "I build practical software with product thinking and a strong eye for clarity.",
  role: "Computer Science Student · Product-Oriented Builder",
  location: "Ulaanbaatar / China",
  about:
    "I tend to start from real problems, repetitive workflows, and clunky communication patterns, then shape software that handles them with clarity.",
  mission:
    "Right now I care most about becoming the kind of builder who can take an idea from rough concept to something real, useful, and polished. Long term, I want to work where AI and product development meet.",
  supportingIntro:
    "I am most energized by products that reduce friction without losing personality. That usually means thinking through the interface, the workflow, and the implementation together instead of treating them as separate steps.",
  contactNote:
    "If you are building something useful, thoughtful, or a little ambitious, I would be glad to talk.",
  contactLead: "Best current way to reach me: GitHub or email.",
  proofPoints: [
    { label: "Current stage", value: "Second-year CS student" },
    { label: "Working style", value: "Product-minded and implementation-heavy" },
    { label: "Looking for", value: "Teams where I can ship meaningful work" },
  ] as ProofPoint[],
  principles: [
    {
      title: "Start from friction",
      description:
        "I look for repetitive, awkward, or overcomplicated workflows first, then design around what would make them feel obvious.",
    },
    {
      title: "Make the interface carry weight",
      description:
        "Good products should explain themselves through hierarchy, pacing, and interaction patterns instead of dense instructions.",
    },
    {
      title: "Build for real use",
      description:
        "I care less about flashy demos and more about whether the product would still feel strong after the fifth or fiftieth use.",
    },
  ] as Principle[],
  openTo: ["Internships", "Collaboration", "Meaningful product work"],
  education: [
    {
      period: "2024 - Present",
      degree: "BSc in Computer Science (Undergraduate)",
      school: "Xi'an Jiaotong-Liverpool University (XJTLU)",
      focus: [
        "Currently in my second year",
        "Studying Computer Science with an AI focus",
      ],
    },
  ] as EducationItem[],
  skills: [
    {
      title: "Interface Systems",
      summary:
        "I design and build interfaces that feel structured, clear, and intentional across desktop and mobile.",
      items: ["React", "Next.js", "TypeScript", "Interaction design"],
    },
    {
      title: "Application Logic",
      summary:
        "I build APIs and data models that stay understandable, reliable, and practical for real product workflows.",
      items: ["Node.js", "REST APIs", "Prisma", "Full-stack product flows"],
    },
    {
      title: "Workflow & Delivery",
      summary:
        "I care about versioning, deployment, and iteration speed because polish is not just visual, it is operational too.",
      items: ["Git/GitHub", "Vercel", "CI fundamentals", "Iteration loops"],
    },
  ] as SkillGroup[],
  contacts: [
    {
      label: "GitHub",
      short: "GH",
      href: "https://github.com/BlguunBN",
      note: "Best place to review projects and current work.",
    },
    {
      label: "Email",
      short: "@",
      href: "mailto:Bilguuntugs8888@gmail.com",
      note: "Direct contact for internships, collaborations, or product roles.",
    },
  ] as ContactLink[],
};
