"use client";

import { useEffect, useRef } from "react";

/** Subtle scroll reveal for editorial sections (matches prior IntersectionObserver behavior) */
export function UnitCircleSectionReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const sections = root.querySelectorAll("[data-uc-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("uc-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
