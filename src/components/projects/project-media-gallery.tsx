"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import type { ProjectMediaItem } from "@/src/data/projects";

type ProjectMediaGalleryProps = {
  items: ProjectMediaItem[];
};

function AssetFallback({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={`${alt}. Asset coming soon.`}
      className="flex h-full min-h-52 w-full items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-center"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Asset coming soon</p>
        <p className="mt-2 text-sm text-white/60">This media will be replaced during final handoff.</p>
      </div>
    </div>
  );
}

export function ProjectMediaGallery({ items }: ProjectMediaGalleryProps) {
  const [failedAssets, setFailedAssets] = useState<Record<string, true>>({});

  const safeItems = useMemo(() => items ?? [], [items]);

  if (safeItems.length === 0) {
    return <AssetFallback alt="Project media" />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {safeItems.map((item) => {
        const failed = Boolean(failedAssets[item.src]);

        return (
          <div key={item.src} className="relative overflow-hidden rounded-2xl">
            {failed ? (
              <AssetFallback alt={item.alt} />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={1600}
                height={900}
                className="h-full w-full rounded-2xl object-cover"
                onError={() => {
                  setFailedAssets((current) => ({ ...current, [item.src]: true }));
                }}
                unoptimized={item.type === "gif"}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
