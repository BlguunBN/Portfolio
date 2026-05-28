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

export const homeNotes: HomeNote[] = [
  {
    slug: "start-with-friction",
    title: "Start with the friction, not the feature list",
    date: "Working note",
    readTime: "2 min read",
    excerpt:
      "The most useful product ideas usually begin with repetitive, awkward moments in someone's workflow, not with a technology looking for a job.",
    tags: ["Product"],
    body: [
      "I usually begin by looking for where attention gets wasted: too many tabs, too many repeated steps, too much context switching, or too much explanation required just to complete a basic task.",
      "That is the reason Study Flow became one workspace instead of several loosely connected tools. The value was not another timer or another note editor. The value was removing the seam between them.",
      "If the starting point is clear friction, the product decisions become much easier. You can judge features by whether they reduce that friction or just decorate around it.",
    ],
  },
  {
    slug: "interfaces-carry-weight",
    title: "The interface should carry part of the explanation",
    date: "Working note",
    readTime: "3 min read",
    excerpt:
      "Good interfaces reduce the amount of instruction a product needs. Hierarchy, pacing, and interaction patterns should do real explanatory work.",
    tags: ["Interface"],
    body: [
      "I care a lot about the space between something that technically works and something that immediately feels understandable. That gap is usually decided by layout, language, density, and sequencing rather than by pure implementation detail.",
      "When the hierarchy is right, the product feels calmer because the user does not need to decode the interface before they can use it. That matters as much as the logic behind the screen.",
      "This is also why I like redesign projects. They make it obvious that usability is often a framing problem before it is a feature problem.",
    ],
  },
  {
    slug: "ai-in-context",
    title: "AI is strongest when it stays inside the workflow",
    date: "Working note",
    readTime: "2 min read",
    excerpt:
      "The AI products I care about most are the ones where the model helps a user move through a task, not the ones where the model becomes the entire spectacle.",
    tags: ["AI", "Product"],
    body: [
      "I am interested in AI that acts like a useful layer inside a real workflow: drafting, clarifying, summarizing, reducing repetitive effort, or helping someone stay in flow.",
      "That is the approach behind Message Reply and the assistant panel in Study Flow. The goal is not to replace the person in the loop. The goal is to remove low-value repetition while keeping the output editable and usable.",
      "For me, trustworthy AI UX comes from restraint. The model should support judgment, not try to perform it theatrically.",
    ],
  },
];
