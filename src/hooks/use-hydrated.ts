"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns `false` during SSR and hydration, `true` after hydration completes.
 * Uses `useSyncExternalStore` so React schedules a synchronous re-render
 * right after hydration — no flash, no mismatch.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
