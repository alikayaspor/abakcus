"use client";

import { useCallback, useEffect, useId, useState } from "react";

const DISMISS_KEY = "abakcus_patreon_nudge_dismissed";
const DELAY_MS = 30_000;
const PATREON_URL = "https://www.patreon.com/alikaya";

export function PatreonNudgeDialog() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore quota / private mode */
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      /* continue */
    }

    const id = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 cursor-default bg-[var(--ink)]/25 backdrop-blur-[2px]"
        onClick={dismiss}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[101] w-full max-w-[22rem] overflow-hidden rounded-2xl border border-[var(--line-soft)] bg-gradient-to-br from-[color-mix(in_srgb,var(--pastel-peach)_55%,white)] via-white to-[color-mix(in_srgb,var(--pastel-lavender)_40%,white)] px-5 py-6 shadow-[0_28px_64px_-28px_rgba(33,35,36,0.35)] sm:max-w-md sm:rounded-[var(--radius-card)] sm:px-7 sm:py-8"
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-[var(--ink-muted)] transition-colors hover:bg-black/[0.06] hover:text-[var(--ink)]"
          aria-label="Dismiss"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <p className="mb-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--ink-muted)]">
          A tiny hello
        </p>
        <h2 id={titleId} className="font-serif text-[1.35rem] font-medium leading-snug text-[var(--ink)] sm:text-2xl">
          Help keep Abakcus gentle & ad-free
        </h2>
        <p className="mt-3 font-serif text-[0.95rem] leading-relaxed text-[var(--ink-muted)] sm:text-base">
          If this corner of the internet has been kind company, even{" "}
          <span className="text-[var(--ink)]">$1/month</span> on Patreon genuinely helps. No pressure — thank you
          for stopping by.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={PATREON_URL}
            onClick={dismiss}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[var(--shadow-soft)] transition-[transform,box-shadow] hover:shadow-md active:scale-[0.98]"
          >
            Support on Patreon
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-[var(--line)] bg-white/60 px-5 py-3 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)] transition-colors hover:border-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            Maybe later
          </button>
        </div>
        <p className="mt-4 text-center font-serif text-xs italic text-[var(--ink-muted)]/90">
          patreon.com/alikaya
        </p>
      </div>
    </div>
  );
}
