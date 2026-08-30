"use client";

/**
 * Section reveal wrapper (design contract §6): opacity 0→1 + translateY 16px→0
 * over ~400ms, fired once on first viewport entry.
 *
 * First-paint law: SSR HTML renders fully visible. The hidden wait-state is
 * applied via JS only after hydration, and never when the user prefers reduced
 * motion or IntersectionObserver is missing — content can never be stuck hidden.
 */
import { useLayoutEffect, useRef } from "react";

export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    el.classList.add("reveal-wait");
    let done = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !done) {
            done = true;
            el.classList.remove("reveal-wait");
            el.classList.add("reveal-in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
