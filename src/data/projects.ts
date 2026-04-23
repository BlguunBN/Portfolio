export type ProjectMediaType = "image" | "gif";

export type ProjectTheme = "bronze" | "ember" | "sky";

export interface ProjectMediaItem {
  src: string;
  alt: string;
  type: ProjectMediaType;
}

export interface CaseStudyDecision {
  title: string;
  detail: string;
}

export interface CaseStudyStep {
  title: string;
  detail: string;
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
  timeframe: string;
  scope: string;
  team: string;
  context: string;
  goals: string[];
  constraints: string[];
  process: CaseStudyStep[];
  decisions: CaseStudyDecision[];
  outcomes: string[];
  learnings: string[];
  nextSteps: string[];
}

export const projects: ProjectRecord[] = [
  {
    slug: "study-flow",
    title: "Study Flow",
    oneLiner:
      "A full-stack productivity dashboard for study sessions, notes, tasks, and deadlines in one calm workspace.",
    tagline: "A student workflow product instead of a pile of disconnected tools.",
    summary:
      "Study Flow combines a Pomodoro timer, note-taking, task management, deadline tracking, and an AI assistant panel into one product. The goal was to make studying feel more continuous and less fragmented.",
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
    timeframe: "Multi-feature student product build",
    scope: "Interface design, product structure, app architecture",
    team: "Solo project",
    context:
      "I wanted to build the kind of study product I would actually want to use myself. Most student tools solve one narrow job well but force the user to keep context-switching between multiple apps.",
    goals: [
      "Keep planning, focus, and execution inside one coherent product",
      "Reduce the friction of switching between notes, tasks, and timers",
      "Make the interface feel calm enough for repeated daily use",
    ],
    constraints: [
      "The app had to support several workflows without becoming visually noisy",
      "The product needed clear state handling because multiple features live in one dashboard",
      "As a solo build, the scope had to stay practical enough to ship incrementally",
    ],
    process: [
      {
        title: "Define the workflow first",
        detail:
          "Before thinking about screens, I framed the product around a simple loop: plan the work, focus on it, capture notes, and track what is next. That gave the app a stronger product spine than a typical dashboard clone.",
      },
      {
        title: "Organize the interface by mode, not by feature list",
        detail:
          "Instead of presenting everything as equal widgets, I grouped the interface around what the student is trying to do in the moment. That made the dashboard easier to scan and reduced the feeling of visual clutter.",
      },
      {
        title: "Build the full-stack shape around product behavior",
        detail:
          "The backend, state, and UI all had to support one continuous workspace, so I kept the architecture aligned with the product flow rather than treating frontend and data as separate concerns.",
      },
    ],
    decisions: [
      {
        title: "One dashboard, multiple jobs",
        detail:
          "I intentionally kept timer, tasks, deadlines, notes, and AI support in one place. The product value comes from reducing context switching, so separating them into unrelated views would weaken the core idea.",
      },
      {
        title: "AI as support, not spectacle",
        detail:
          "The assistant panel is there to help the student stay in flow, not to dominate the interface. I treated it like an embedded tool inside the workspace instead of the headline feature.",
      },
      {
        title: "Calm visual hierarchy over heavy decoration",
        detail:
          "A study tool is something people should be able to live in for a while, so I prioritized readability, pacing, and structure over visual novelty.",
      },
    ],
    outcomes: [
      "The project became a stronger example of end-to-end product thinking than a typical CRUD app",
      "It gave me a practical way to think through how multiple features can still feel like one product",
      "It now stands as my clearest example of combining interface design with full-stack delivery",
    ],
    learnings: [
      "The more features a product includes, the more disciplined the hierarchy has to be",
      "Useful AI features work better when they are embedded in the workflow instead of staged as magic",
      "Product coherence comes from what you choose not to emphasize as much as what you add",
    ],
    nextSteps: [
      "Add stronger visual progress tracking across study plans and sessions",
      "Refine the AI panel around narrower study-specific support tasks",
      "Introduce richer responsive behavior so the dashboard feels equally intentional on smaller screens",
    ],
  },
  {
    slug: "message-reply",
    title: "Message Reply",
    oneLiner:
      "An AI-assisted reply tool designed to reduce repetitive rewriting while keeping the response usable and on-voice.",
    tagline: "A faster response workflow without flattening personality.",
    summary:
      "Message Reply focuses on one narrow but common problem: rewriting similar replies again and again. The product is intentionally small, with the experience centered on speed, clarity, and editability.",
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
    timeframe: "Narrow-scope mobile product concept",
    scope: "Workflow framing, Android interface, response generation flow",
    team: "Solo project",
    context:
      "I noticed how much communication friction comes from answering the same kinds of messages over and over. I wanted to explore a lighter AI product that solves one clear problem without trying to be everything.",
    goals: [
      "Make the value obvious in a few seconds",
      "Keep the user in control of the final wording",
      "Avoid the feeling of a bloated AI wrapper around a simple task",
    ],
    constraints: [
      "The product had to stay lightweight enough to feel useful immediately",
      "The suggestions needed to feel assistive rather than generic or over-produced",
      "The interaction had to work on mobile without becoming input-heavy",
    ],
    process: [
      {
        title: "Strip the product down to one flow",
        detail:
          "The product only works if it is faster than manual rewriting, so I reduced the experience to a simple sequence: input, generate, review, adjust, send.",
      },
      {
        title: "Design for editable output",
        detail:
          "I did not want the suggestions to feel too polished or detached from the user's own language. The interaction is built around giving the user something usable, not something final.",
      },
      {
        title: "Treat AI as a narrow interface layer",
        detail:
          "The product framing stays intentionally modest. Instead of building around AI spectacle, I framed it around the practical reduction of repetitive effort.",
      },
    ],
    decisions: [
      {
        title: "Single-purpose product framing",
        detail:
          "I kept the product tightly focused on reply generation instead of letting it sprawl into messaging analytics, inbox management, or multi-tool automation. The narrowness makes the value clearer.",
      },
      {
        title: "Output should invite editing",
        detail:
          "The suggestions are positioned as drafts, not perfect responses. That preserves the user's voice and makes the product feel more trustworthy.",
      },
      {
        title: "Fast mobile interaction over feature depth",
        detail:
          "Because the product lives on Android, speed and friction mattered more than adding secondary controls or configuration options.",
      },
    ],
    outcomes: [
      "The project became a useful study in focused AI product design",
      "It clarified how small AI tools can feel more credible when they stay narrow",
      "It gave me a concrete mobile example of balancing automation and user control",
    ],
    learnings: [
      "A tight workflow can make a simple AI product feel stronger than a feature-heavy one",
      "Trust in AI UX often comes from making the user feel like the editor, not the passenger",
      "For mobile tools, friction matters as much as intelligence",
    ],
    nextSteps: [
      "Add tone and intent controls that still preserve speed",
      "Improve draft comparison so users can evaluate alternatives more clearly",
      "Test richer onboarding around example use cases without over-explaining the product",
    ],
  },
  {
    slug: "astronomy-apod",
    title: "Astronomy APOD Explorer",
    oneLiner:
      "A cleaner way to browse NASA's Astronomy Picture of the Day archive through date-based exploration and calmer presentation.",
    tagline: "An editorial interface for a dense public archive.",
    summary:
      "Astronomy APOD Explorer rethinks how a rich archive is browsed. Instead of forcing the user through a dated experience, it reframes the content with calmer hierarchy, clearer navigation, and more editorial pacing.",
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
    timeframe: "Focused frontend redesign project",
    scope: "Interface design, content hierarchy, exploration flow",
    team: "Solo project",
    context:
      "NASA's APOD archive has great content but a browsing experience that feels more archival than approachable. I wanted to see what happens if the interface treats the material like something worth slowly exploring.",
    goals: [
      "Make archive browsing feel simpler and more inviting",
      "Keep the imagery as the focal point of the experience",
      "Use motion and layout to support reading rather than distract from it",
    ],
    constraints: [
      "The archive content and structure were fixed by the API source",
      "The interface needed to remain lightweight and readable around image-heavy content",
      "The product had to balance exploration with restraint instead of becoming overly decorative",
    ],
    process: [
      {
        title: "Treat the content like editorial material",
        detail:
          "The key move was to stop thinking of the project as an API viewer and instead treat it like an exploration experience around a single featured item and its surrounding metadata.",
      },
      {
        title: "Simplify navigation around date selection",
        detail:
          "Because the archive is inherently time-based, I used date browsing as the primary interaction anchor. That keeps the product legible and avoids adding unnecessary interface complexity.",
      },
      {
        title: "Use motion to reinforce focus",
        detail:
          "The animation choices stay subtle because the imagery already has enough emotional weight. Motion is there to support transitions and orientation, not to become the main event.",
      },
    ],
    decisions: [
      {
        title: "One item at a time",
        detail:
          "The archive works better when one piece of content is given room to breathe. I centered the interface around the current selection rather than trying to show too much at once.",
      },
      {
        title: "Editorial hierarchy over dashboard UI",
        detail:
          "This project needed reading rhythm more than widget logic, so I used stronger content framing and calmer typography instead of typical app-style modules.",
      },
      {
        title: "Restrained visual treatment",
        detail:
          "Because the content is already visually rich, the interface needed to stay quiet. The product becomes better when the UI supports discovery without competing for attention.",
      },
    ],
    outcomes: [
      "The project became a useful example of redesigning an information space rather than inventing a product from scratch",
      "It strengthened my understanding of how content framing changes perceived usability",
      "It gave me a project that is more about hierarchy and pacing than feature complexity",
    ],
    learnings: [
      "Interface tone matters a lot when the content itself carries most of the emotion",
      "Exploration products need clarity more than novelty",
      "A calmer UI can make an archive feel significantly more approachable",
    ],
    nextSteps: [
      "Add saved dates or lightweight collection behavior for repeat exploration",
      "Refine mobile reading and image presentation for long descriptions",
      "Introduce more contextual archive navigation without losing the single-item focus",
    ],
  },
];

export const projectsBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<
  string,
  ProjectRecord
>;
