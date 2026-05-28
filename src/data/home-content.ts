export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  body: string;
  tags: string[];
};

export type NoteTag = "AI" | "Interface" | "Product";

export type HomeNote = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: NoteTag[];
  body: string[];
};

export const timelineEntries: TimelineEntry[] = [
  {
    period: "2024 - Present",
    title: "BSc Computer Science",
    org: "Xi'an Jiaotong-Liverpool University (XJTLU) · Second year",
    body:
      "AI-emphasis coursework across algorithms, systems, and applied software development. I care about using that foundation to ship real products instead of treating university work and product work as separate tracks.",
    tags: ["AI", "Algorithms", "Systems", "Product dev"],
  },
  {
    period: "2024 - Present",
    title: "Independent builder",
    org: "Self-directed · 3 shipped portfolio projects",
    body:
      "Study Flow, Message Reply, and Astronomy APOD Explorer all started from a specific friction point. The consistent thread is product framing, interface quality, and end-to-end implementation instead of one-off demos.",
    tags: ["Next.js", "React", "Kotlin", "AI integration"],
  },
  {
    period: "Right now",
    title: "Internship-ready product work",
    org: "Open to internships, collaboration, and meaningful product teams",
    body:
      "I am looking for environments where I can contribute across product thinking, interface structure, and disciplined implementation while continuing to deepen AI product and systems knowledge.",
    tags: ["Internships", "Collaboration", "Product thinking"],
  },
];

export const homeNotes: HomeNote[] = [];
