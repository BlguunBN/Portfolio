export type ProjectMediaType = "image" | "gif";

export type ProjectTheme = "bronze" | "ember" | "sky";

export interface ProjectMediaItem {
  src: string;
  alt: string;
  type: ProjectMediaType;
}

export interface ProjectRecord {
  slug: string;
  title: string;
  oneLiner: string;
  tagline: string;
  summary: string;
  category: string;
  role: string;
  challenge: string;
  approach: string;
  impact: string;
  highlights: string[];
  theme: ProjectTheme;
  stack: string[];
  links: {
    repo: string;
    demo?: string;
  };
  media: ProjectMediaItem[];
}

export const projects: ProjectRecord[] = [
  {
    slug: "study-flow",
    title: "Study Flow",
    oneLiner:
      "A full-stack productivity dashboard for study sessions, notes, tasks, and deadlines in one calm workspace.",
    tagline: "A student workflow product instead of a pile of disconnected tools.",
    summary:
      "Study Flow combines a Pomodoro timer, note-taking, task management, deadline tracking, and an AI assistant panel into a single product. It is the kind of tool I wished existed when I was studying.",
    category: "Student productivity platform",
    role: "Product design, frontend, backend",
    challenge:
      "Students constantly switch between timers, notes apps, task lists, and reminders, which makes studying feel more fragmented than it should.",
    approach:
      "I combined planning, focus, and execution into one dashboard so the workflow feels continuous instead of scattered.",
    impact:
      "This project best represents how I think across product scope, UI structure, and full-stack implementation at the same time.",
    highlights: [
      "Unified dashboard for sessions, tasks, deadlines, and notes",
      "Full-stack architecture shaped around one continuous workflow",
      "AI assistant panel designed as in-context support instead of a gimmick",
    ],
    theme: "bronze",
    stack: ["Next.js", "TypeScript", "Prisma", "Zustand", "Tailwind CSS", "SQLite"],
    links: {
      repo: "https://github.com/BlguunBN/Study_Flow_app",
    },
    media: [],
  },
  {
    slug: "message-reply",
    title: "Message Reply",
    oneLiner:
      "An AI-assisted reply tool designed to reduce repetitive rewriting while keeping the response usable and on-voice.",
    tagline: "A faster response workflow without flattening personality.",
    summary:
      "I built Message Reply after noticing how much time repetitive communication wastes. You drop in a rough note and get back a usable response that is ready to send or easy to refine.",
    category: "AI-assisted communication tool",
    role: "Product thinking, Android UI, interaction flow",
    challenge:
      "A lot of daily messaging is repetitive, but manual rewriting still takes attention and time every single time.",
    approach:
      "I focused the experience around a quick input-to-suggestion flow so the value shows up immediately and the interface stays lightweight.",
    impact:
      "This project shows how I think about AI as workflow support: useful, focused, and respectful of the user's own voice.",
    highlights: [
      "Android interaction flow built around speed and low friction",
      "Suggestions designed to feel editable instead of overly automated",
      "Strong example of product thinking applied to a narrow everyday problem",
    ],
    theme: "ember",
    stack: ["Kotlin", "Android", "Gradle", "AI-assisted UX"],
    links: {
      repo: "https://github.com/BlguunBN/Message_reply",
    },
    media: [],
  },
  {
    slug: "astronomy-apod",
    title: "Astronomy APOD Explorer",
    oneLiner:
      "A cleaner way to browse NASA's Astronomy Picture of the Day archive through date-based exploration and calmer presentation.",
    tagline: "An editorial interface for a dense public archive.",
    summary:
      "NASA's APOD archive goes back decades, but the official site makes casual browsing harder than it needs to be. I built a more focused viewer so the content becomes the experience instead of the interface getting in the way.",
    category: "Editorial content explorer",
    role: "Interface design, frontend engineering, motion",
    challenge:
      "The source archive is rich, but the browsing experience feels dated and makes discovery less inviting than the content deserves.",
    approach:
      "I simplified the flow around date selection, stronger content framing, and restrained motion so the imagery stays central.",
    impact:
      "This project shows my interest in turning dense or awkward information spaces into interfaces that feel much easier to explore.",
    highlights: [
      "Date-based navigation for a long-running archive",
      "Calmer presentation around a single piece of content",
      "Motion used to support focus instead of compete with it",
    ],
    theme: "sky",
    stack: ["React", "TypeScript", "NASA APOD API", "Framer Motion"],
    links: {
      repo: "https://github.com/BlguunBN/astronomy-apod",
    },
    media: [],
  },
];

export const projectsBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<
  string,
  ProjectRecord
>;
