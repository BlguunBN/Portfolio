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
    let hoveredInteractive = false;
    let pointerDown = false;
    let currentScrollMotion = { ...CURSOR_SCROLL_IDLE };
    let targetScrollMotion = { ...CURSOR_SCROLL_IDLE };
    let currentRingScale = 1;
    let targetRingScale = 1;
    let currentDotScale = 1;
    let targetDotScale = 1;
    let currentRingOpacity = 0.72;
    let targetRingOpacity = 0.72;

    const updateInteractiveState = (target: EventTarget | null) => {
      hoveredInteractive =
        target instanceof Element &&
        Boolean(target.closest("a, button, [data-cursor='interactive']"));
    };

    const onMove = (e: MouseEvent | PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      updateInteractiveState(e.target);
    };

    const onWheel = (e: WheelEvent) => {
      targetScrollMotion = applyScrollImpulse(targetScrollMotion, e.deltaY);
    };

    const onPointerLeave = () => {
      hoveredInteractive = false;
      pointerDown = false;
    };

    const onPointerDown = () => {
      pointerDown = true;
    };

    const onPointerUp = () => {
      pointerDown = false;
    };

    let raf = 0;
    const tick = () => {
      x += (mx - x) * 0.2;
      y += (my - y) * 0.2;
      targetScrollMotion = easeScrollMotion(targetScrollMotion, CURSOR_SCROLL_IDLE, 0.16);
      currentScrollMotion = easeScrollMotion(currentScrollMotion, targetScrollMotion, 0.24);
      targetRingScale = hoveredInteractive ? (pointerDown ? 1.14 : 1.42) : pointerDown ? 0.96 : 1;
      targetDotScale = hoveredInteractive ? (pointerDown ? 0.9 : 0.74) : pointerDown ? 0.94 : 1;
      targetRingOpacity = hoveredInteractive ? 1 : 0.72;
      currentRingScale += (targetRingScale - currentRingScale) * 0.16;
      currentDotScale += (targetDotScale - currentDotScale) * 0.2;
      currentRingOpacity += (targetRingOpacity - currentRingOpacity) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mx}px, ${my + currentScrollMotion.offsetY}px) translate(-50%, -50%) ` +
          `scale(${currentScrollMotion.scaleX * currentDotScale}, ${currentScrollMotion.scaleY * currentDotScale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${currentRingScale})`;
        ringRef.current.style.opacity = `${currentRingOpacity}`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove as EventListener, { passive: true });
    window.addEventListener("mousemove", onMove as EventListener, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mousemove", onMove as EventListener, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove as EventListener);
      window.removeEventListener("mousemove", onMove as EventListener);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
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
        className="pointer-events-none fixed top-0 left-0 z-[80] hidden h-9 w-9 rounded-full border border-[#D4A847]/60 transition-[opacity,border-color] duration-150"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[81] hidden h-2.5 w-2.5 rounded-full bg-[#D4A847]"
        aria-hidden="true"
      />
    </>
  );
}
