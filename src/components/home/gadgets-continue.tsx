"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gadgetsPicks } from "@/data/gadgets-picks";

function IconChevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      {dir === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

export function GadgetsContinue() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.min(el.clientWidth * 0.75, 360) * direction;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section
      id="gadgets"
      className="relative z-10 border-t border-[var(--line-soft)] bg-[var(--tonal)] py-14 md:py-20"
      aria-labelledby="gadgets-continue-heading"
    >
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
        <div className="mb-10 text-center md:mb-14">
          <h2
            id="gadgets-continue-heading"
            className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight text-[var(--ink)]"
          >
            Small wonders. Big clicks.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-[var(--ink-muted)] sm:text-lg">
            Curated gadgets from the web — clever, useful, and a little fun,
            handpicked for your attention.
          </p>
        </div>

        <div
          ref={scrollerRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] sm:gap-4 md:gap-6"
        >
          {gadgetsPicks.map((item) => (
            <article
              key={item.slug}
              className="flex w-[min(82vw,18.5rem)] min-w-[min(82vw,18.5rem)] snap-center flex-col shadow-[var(--shadow-card)] sm:w-[min(78vw,20rem)] sm:min-w-[min(78vw,20rem)] md:w-[min(26vw,22rem)] md:min-w-[min(26vw,22rem)]"
            >
              <Link
                href={item.href}
                className="group flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] p-3 sm:p-4 md:p-5"
                style={{ backgroundColor: item.pageColor }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/35">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:640px) 82vw, (max-width:768px) 78vw, 22rem"
                  />
                </div>
                <div className="mt-4 flex flex-1 flex-col gap-2 text-left">
                  <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                    {item.readPercent}% read
                  </p>
                  <p className="font-serif text-base leading-snug text-[var(--ink)] md:text-[1.05rem]">
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-[var(--ink-muted)]"> — {item.dek}</span>
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] shadow-[var(--shadow-soft)] transition-[transform,background-color] hover:bg-[var(--tonal)] active:scale-[0.98]"
            onClick={() => scroll(-1)}
            aria-label="Previous gadgets"
          >
            <IconChevron dir="left" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] shadow-[var(--shadow-soft)] transition-[transform,background-color] hover:bg-[var(--tonal)] active:scale-[0.98]"
            onClick={() => scroll(1)}
            aria-label="Next gadgets"
          >
            <IconChevron dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
