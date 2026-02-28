export type ProjectMediaType = "image" | "gif";

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
  stack: string[];
  links: {
    repo: string;
    demo: string;
  };
  media: ProjectMediaItem[];
}

export const projects: ProjectRecord[] = [
  {
    slug: "message-reply",
    title: "Message Reply",
    oneLiner: "I built an AI-assisted reply workflow that turns rough thoughts into clear, usable responses.",
    tagline: "Faster replies, consistent tone, less message fatigue.",
    summary:
      "Message Reply helps me respond faster without losing context or voice. It combines suggestion quality, quick edits, and practical send flows to make daily communication more efficient.",
    stack: ["Kotlin", "Android", "Gradle", "AI-assisted UX"],
    links: {
      repo: "https://github.com/BlguunBN/Message_reply",
      demo: "#",
    },
    media: [
      {
        src: "/projects/message-reply/message-reply-inbox.png",
        alt: "Message Reply inbox overview",
        type: "image",
      },
      {
        src: "/projects/message-reply/message-reply-suggestion.png",
        alt: "Message Reply suggestion panel",
        type: "image",
      },
      {
        src: "/projects/message-reply/message-reply-send-flow.gif",
        alt: "Message Reply send flow animation",
        type: "gif",
      },
    ],
  },
  {
    slug: "astronomy-apod",
    title: "Astronomy APOD Explorer",
    oneLiner: "I created a clean way to explore NASA’s Astronomy Picture of the Day by date.",
    tagline: "Daily space content, designed for clarity and flow.",
    summary:
      "Astronomy APOD Explorer focuses on smooth browsing and readable presentation. I designed it to surface APOD content with strong visual hierarchy, reliable fetching, and minimal friction.",
    stack: ["React", "TypeScript", "NASA APOD API", "Framer Motion"],
    links: {
      repo: "https://github.com/BlguunBN/astronomy-apod",
      demo: "#",
    },
    media: [
      {
        src: "/projects/apod/apod-landing.png",
        alt: "Astronomy APOD landing page",
        type: "image",
      },
      {
        src: "/projects/apod/apod-date-picker.gif",
        alt: "Astronomy APOD date picker interaction",
        type: "gif",
      },
    ],
  },
];

export const projectsBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<
  string,
  ProjectRecord
>;
