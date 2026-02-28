"use client";

import { useEffect, useRef } from "react";

export function CursorEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let x = mouseX;
    let y = mouseY;
    const onMove = (e: MouseEvent | PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      x += (mouseX - x) * 0.16;
      y += (mouseY - y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(animate);
    };

    const magnetics = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic='true']"));

    const handlers = magnetics.map((el) => {
      const onMagMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        el.style.transform = `translate(${relX * 0.12}px, ${relY * 0.12}px)`;
      };

      const onMagLeave = () => {
        el.style.transform = "translate(0px, 0px)";
      };

      el.style.transition = "transform 220ms ease";
      el.addEventListener("mousemove", onMagMove);
      el.addEventListener("mouseleave", onMagLeave);

      return { el, onMagMove, onMagLeave };
    });

    window.addEventListener("pointermove", onMove as EventListener, { passive: true });
    window.addEventListener("mousemove", onMove as EventListener, { passive: true });
    document.addEventListener("mousemove", onMove as EventListener, { passive: true });
    let raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove as EventListener);
      window.removeEventListener("mousemove", onMove as EventListener);
      document.removeEventListener("mousemove", onMove as EventListener);
      handlers.forEach(({ el, onMagMove, onMagLeave }) => {
        el.removeEventListener("mousemove", onMagMove);
        el.removeEventListener("mouseleave", onMagLeave);
        el.style.transform = "";
        el.style.transition = "";
      });
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[60] h-28 w-28 rounded-full bg-[#a777ff]/20 blur-2xl"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[61] h-2.5 w-2.5 rounded-full bg-[#d9c1ff]"
        aria-hidden="true"
      />
    </>
  );
}
