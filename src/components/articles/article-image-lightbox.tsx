"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

type ArticleImageLightboxProps = {
  src: string;
  alt: string;
  /** Optional caption under the image in the lightbox (same as figure caption when set) */
  caption?: string;
  children: React.ReactNode;
};

export function ArticleImageLightbox({
  src,
  alt,
  caption,
  children,
}: ArticleImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [open]);

  const overlay =
    open && mounted ? (
      <div
        className="fixed inset-0 z-[2147483000] overflow-y-auto overflow-x-hidden overscroll-contain bg-[var(--ink)]/45 backdrop-blur-[8px]"
        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
        role="presentation"
        onClick={() => setOpen(false)}
      >
        <div
          className="flex min-h-[100dvh] items-center justify-center p-4 py-10 sm:p-6 sm:py-12"
          onClick={() => setOpen(false)}
        >
          <div
            id={titleId}
            role="dialog"
            aria-modal="true"
            aria-label={alt || "Expanded image"}
            className="relative w-full max-w-[min(92vw,26rem)] rounded-2xl border border-[var(--line-soft)] bg-white p-2 shadow-[var(--shadow-card)] ring-1 ring-black/[0.04] sm:max-w-[min(90vw,32rem)] sm:p-2.5 md:max-w-[min(88vw,36rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -right-1.5 -top-1.5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-white text-lg leading-none text-[var(--ink)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--tonal)] sm:-right-2 sm:-top-2 sm:h-10 sm:w-10"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="overflow-hidden rounded-xl bg-[var(--tonal)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="mx-auto block h-auto max-h-[min(68vh,480px)] w-full object-contain sm:max-h-[min(70vh,520px)]"
                decoding="async"
                draggable={false}
              />
            </div>

            {caption ? (
              <p className="mt-2.5 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink-muted)]">
                {caption}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="sr-only">View larger</span>
        {children}
        <span
          className="pointer-events-none absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)]/20 text-[var(--ink)] shadow-sm backdrop-blur-[2px] transition group-hover:bg-[var(--ink)]/30"
          aria-hidden
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </span>
      </button>

      {mounted && overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}
