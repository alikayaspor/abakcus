"use client";

import { type ReactNode, useCallback, useState } from "react";

export function ClockwiseAntReveal({ children }: { children: ReactNode }) {
  const [shown, setShown] = useState(false);
  const reveal = useCallback(() => setShown(true), []);

  return (
    <div className="my-10 overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-peach)_35%,white)] px-4 py-3 sm:px-5">
        <span className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          Solution
        </span>
        <button
          type="button"
          onClick={reveal}
          disabled={shown}
          className="shrink-0 rounded-full border border-[var(--line)] bg-white/80 px-3 py-1.5 font-sans text-[0.58rem] font-medium uppercase tracking-[0.1em] text-[var(--ink)] transition-colors hover:border-[var(--ink-muted)] hover:bg-white disabled:cursor-default disabled:opacity-40"
        >
          {shown ? "Shown" : "Show solution"}
        </button>
      </div>
      <div className="relative bg-[color-mix(in_srgb,var(--pastel-sky)_18%,white)] px-4 py-6 sm:px-6 sm:py-8">
        <div
          className={`transition-[filter] duration-500 ease-out ${
            shown ? "" : "blur-md select-none pointer-events-none"
          }`}
        >
          {children}
        </div>
        {!shown ? (
          <button
            type="button"
            onClick={reveal}
            aria-label="Reveal solution"
            className="absolute inset-0 flex cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          >
            <span className="rounded-full border border-[var(--line)] bg-white/95 px-4 py-2 font-sans text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[var(--ink-muted)] shadow-sm backdrop-blur-sm">
              Tap to reveal
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
