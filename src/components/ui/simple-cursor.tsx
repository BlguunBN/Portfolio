"use client";

import { useEffect, useRef } from "react";
import {
  CURSOR_SCROLL_IDLE,
  applyScrollImpulse,
  easeScrollMotion,
} from "@/src/components/ui/simple-cursor-scroll-motion";

export function SimpleCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || touch) return;

    const dotElement = dotRef.current;
    const ringElement = ringRef.current;

    if (dotElement) dotElement.style.display = "block";
    if (ringElement) ringElement.style.display = "block";
    document.body.classList.add("custom-cursor-active");
    document.body.style.cursor = "none";

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let x = mx;
    let y = my;
    let currentScrollMotion = { ...CURSOR_SCROLL_IDLE };
    let targetScrollMotion = { ...CURSOR_SCROLL_IDLE };

    const onMove = (e: MouseEvent | PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onWheel = (e: WheelEvent) => {
      targetScrollMotion = applyScrollImpulse(targetScrollMotion, e.deltaY);
    };

    let raf = 0;
    const tick = () => {
      x += (mx - x) * 0.2;
      y += (my - y) * 0.2;
      targetScrollMotion = easeScrollMotion(targetScrollMotion, CURSOR_SCROLL_IDLE, 0.16);
      currentScrollMotion = easeScrollMotion(currentScrollMotion, targetScrollMotion, 0.24);

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mx}px, ${my + currentScrollMotion.offsetY}px) translate(-50%, -50%) ` +
          `scale(${currentScrollMotion.scaleX}, ${currentScrollMotion.scaleY})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove as EventListener, { passive: true });
    window.addEventListener("mousemove", onMove as EventListener, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    document.addEventListener("mousemove", onMove as EventListener, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove as EventListener);
      window.removeEventListener("mousemove", onMove as EventListener);
      window.removeEventListener("wheel", onWheel);
      document.removeEventListener("mousemove", onMove as EventListener);
      document.body.classList.remove("custom-cursor-active");
      document.body.style.cursor = "auto";
      if (dotElement) dotElement.style.display = "none";
      if (ringElement) ringElement.style.display = "none";
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[80] hidden h-9 w-9 rounded-full border border-[#b58af8]/90"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[81] hidden h-3 w-3 rounded-full bg-[#e7d6ff]"
        aria-hidden="true"
      />
    </>
  );
}
