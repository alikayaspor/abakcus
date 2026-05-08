"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { featuredPicks } from "@/data/featured-picks";
import { PiBookCoverSvg } from "@/components/home/pi-book-cover-svg";
import { Mit1869FeaturedTitlePanel } from "@/components/home/mit-1869-featured-title-panel";

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function FeaturedCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", updateArrows); ro.disconnect(); };
  }, [updateArrows]);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const amount = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section
      id="featured"
      className="relative z-10 pb-6 pt-2 md:pb-10"
      aria-label="Featured editorial picks"
    >
      {/* Left arrow */}
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className={`absolute left-2 top-1/2 z-20 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/90 shadow-[var(--shadow-soft)] text-[var(--ink)] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-[var(--shadow-card)] ${canLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ChevronLeft />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className={`absolute right-2 top-1/2 z-20 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/90 shadow-[var(--shadow-soft)] text-[var(--ink)] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-[var(--shadow-card)] ${canRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ChevronRight />
      </button>

      <div ref={trackRef} className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-[var(--page-pad)] pb-8 pt-2 [-webkit-overflow-scrolling:touch] sm:gap-4 md:gap-6">
        {featuredPicks.map((pick) => (
          <article
            key={pick.slug}
            className="flex w-[min(82vw,18.5rem)] min-w-[min(82vw,18.5rem)] snap-center flex-col shadow-[var(--shadow-card)] sm:w-[min(78vw,20rem)] sm:min-w-[min(78vw,20rem)] md:w-[min(26vw,22rem)] md:min-w-[min(26vw,22rem)]"
          >
            <Link
              href={pick.href}
              className="group flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] p-3 sm:p-4 md:p-5"
              style={{ backgroundColor: pick.pageColor }}
            >
              <div
                className={`relative aspect-[4/5] w-full overflow-hidden rounded-xl ${
                  pick.featuredVisual === "pi-book-cover"
                    ? "bg-[#f0ebe0]"
                    : pick.featuredVisual === "mit-1869"
                      ? "bg-transparent"
                      : "bg-white/30"
                }`}
              >
                {pick.featuredVisual === "pi-book-cover" ? (
                  <div className="absolute inset-0 min-h-0">
                    <PiBookCoverSvg className="block h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                ) : pick.featuredVisual === "mit-1869" ? (
                  <Mit1869FeaturedTitlePanel />
                ) : (
                  <img
                    src={pick.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              <div className="mt-4 flex flex-1 flex-col gap-3 text-left">
                <p className="font-serif text-base leading-snug text-[var(--ink)] md:text-lg">
                  <span className="font-semibold">{pick.title}</span>
                  <span className="text-[var(--ink-muted)]"> — {pick.dek}</span>
                </p>
                <span className="tag-pill mt-auto w-fit border-black/10 bg-white/55">
                  {pick.tag}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
