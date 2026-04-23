import clsx from "clsx";

import type { ProjectRecord } from "@/src/data/projects";

type ProjectPreviewProps = {
  project: ProjectRecord;
  className?: string;
};

const previewTone: Record<ProjectRecord["theme"], string> = {
  bronze: "from-[rgba(210,160,112,0.12)] to-[rgba(255,255,255,0.03)]",
  ember: "from-[rgba(196,116,96,0.14)] to-[rgba(255,255,255,0.03)]",
  sky: "from-[rgba(107,146,202,0.14)] to-[rgba(255,255,255,0.03)]",
};

const previewLine: Record<ProjectRecord["theme"], string> = {
  bronze: "bg-[rgba(210,160,112,0.58)]",
  ember: "bg-[rgba(196,116,96,0.58)]",
  sky: "bg-[rgba(107,146,202,0.58)]",
};

function WindowFrame({
  project,
  children,
  className,
}: {
  project: ProjectRecord;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-[18px] border border-[var(--line-strong)] bg-[var(--surface)] shadow-[0_18px_48px_rgba(0,0,0,0.24)]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-[var(--line)] bg-black/20 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/11" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/8" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)]">{project.title}</p>
      </div>
      <div className={clsx("bg-gradient-to-br p-4 md:p-5", previewTone[project.theme])}>{children}</div>
    </div>
  );
}

function StudyFlowPreview({ project }: { project: ProjectRecord }) {
  return (
    <WindowFrame project={project}>
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.88fr]">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {["Tasks", "Focus", "Notes"].map((label) => (
              <div key={label} className="rounded-[14px] border border-[var(--line)] bg-black/15 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">{label}</p>
                <div className="mt-5 h-1.5 rounded-full bg-white/8" />
              </div>
            ))}
          </div>
          <div className="rounded-[16px] border border-[var(--line)] bg-black/12 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[var(--text)]">Study dashboard</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Daily flow</p>
            </div>
            <div className="mt-4 space-y-3">
              {[78, 62, 44].map((width, index) => (
                <div key={index} className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <span className={clsx("h-1.5 w-1.5 rounded-full", previewLine[project.theme])} />
                  <div className="h-2 rounded-full bg-white/8">
                    <div className={clsx("h-full rounded-full", previewLine[project.theme])} style={{ width: `${width}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[16px] border border-[var(--line)] bg-black/12 p-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Focus block</p>
            <div className="mt-6 flex justify-center">
              <div className="flex h-30 w-30 items-center justify-center rounded-full border border-[var(--line)]">
                <div className="text-center">
                  <p className="text-2xl font-medium text-[var(--text)]">25:00</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Session</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[16px] border border-[var(--line)] bg-black/12 p-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Deadlines</p>
            <div className="mt-4 space-y-2">
              {["Database report", "Systems quiz", "Presentation draft"].map((item, index) => (
                <div key={item} className="flex items-center justify-between border-b border-[var(--line)] pb-2 last:border-b-0 last:pb-0">
                  <span className="text-sm text-[var(--text-soft)]">{item}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">0{index + 2}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

function MessageReplyPreview({ project }: { project: ProjectRecord }) {
  return (
    <WindowFrame project={project}>
      <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[16px] border border-[var(--line)] bg-black/12 p-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Inbox</p>
          <div className="mt-4 space-y-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="border-b border-[var(--line)] pb-3 last:border-b-0 last:pb-0">
                <div className="mb-2 flex items-center gap-2">
                  <span className={clsx("h-1.5 w-1.5 rounded-full", previewLine[project.theme])} />
                  <div className="h-2 w-18 rounded-full bg-white/10" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-white/8" />
                  <div className="h-2 w-4/5 rounded-full bg-white/8" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[16px] border border-[var(--line)] bg-black/12 p-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Draft</p>
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded-full bg-white/8" />
              <div className="h-2 w-10/12 rounded-full bg-white/8" />
              <div className="h-2 w-4/5 rounded-full bg-white/8" />
            </div>
          </div>
          <div className="rounded-[16px] border border-[var(--line)] bg-[rgba(255,255,255,0.04)] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Suggested reply</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Editable</p>
            </div>
            <div className="mt-4 space-y-2">
              <div className={clsx("h-2 rounded-full", previewLine[project.theme])} />
              <div className="h-2 w-11/12 rounded-full bg-white/20" />
              <div className="h-2 w-4/5 rounded-full bg-white/16" />
            </div>
            <div className="mt-6 flex items-center gap-5 text-[11px] uppercase tracking-[0.18em] text-[var(--text-soft)]">
              <span>Send</span>
              <span>Edit</span>
              <span>Retry</span>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

function ApodPreview({ project }: { project: ProjectRecord }) {
  return (
    <WindowFrame project={project}>
      <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[16px] border border-[var(--line)] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.22),transparent_16%),linear-gradient(180deg,rgba(62,88,123,0.78),rgba(10,15,24,0.92))] p-4">
          <div className="h-52 rounded-[12px] border border-white/10 bg-[radial-gradient(circle_at_24%_65%,rgba(255,255,255,0.2),transparent_5%),radial-gradient(circle_at_68%_38%,rgba(255,255,255,0.16),transparent_4%),linear-gradient(180deg,rgba(4,8,17,0.08),rgba(2,5,11,0.34))]" />
          <div className="mt-4 space-y-2">
            <p className="text-sm text-[var(--text)]">Astronomy Picture of the Day</p>
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-white/12" />
              <div className="h-2 w-9/12 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[16px] border border-[var(--line)] bg-black/12 p-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Date navigation</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {["2026", "Feb 21", "Archive", "Today"].map((item) => (
                <div key={item} className="border-b border-[var(--line)] pb-2 text-sm text-[var(--text-soft)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[16px] border border-[var(--line)] bg-black/12 p-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Reading rhythm</p>
            <div className="mt-4 space-y-2">
              {[92, 82, 66, 74].map((width, index) => (
                <div key={index} className="h-2 rounded-full bg-white/8">
                  <div className={clsx("h-full rounded-full", previewLine[project.theme])} style={{ width: `${width}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

export function ProjectPreview({ project, className }: ProjectPreviewProps) {
  return (
    <div className={className}>
      {project.slug === "study-flow" ? <StudyFlowPreview project={project} /> : null}
      {project.slug === "message-reply" ? <MessageReplyPreview project={project} /> : null}
      {project.slug === "astronomy-apod" ? <ApodPreview project={project} /> : null}
    </div>
  );
}
