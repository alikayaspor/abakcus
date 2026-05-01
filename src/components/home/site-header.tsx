"use client";

import { LogoImage } from "@/components/logo-image";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "#featured", label: "Featured" },
  { href: "#articles-curated", label: "Articles" },
  { href: "#books", label: "Books" },
  { href: "#questions", label: "Questions" },
];

function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function IconMenu({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M0 1h22M0 8h22M0 15h22"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-white/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
        <div className="relative mx-auto flex h-[3.75rem] max-w-[var(--page-max)] items-center pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:h-[4.5rem] md:px-8">
          <button
            type="button"
            className="flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-[var(--ink)] transition-colors hover:bg-[var(--tonal)] active:bg-[var(--tonal)]"
            aria-label="Search (coming soon)"
          >
            <IconSearch />
          </button>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >
            <LogoImage variant="header" priority />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="ml-auto flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-[var(--ink)] transition-colors hover:bg-[var(--tonal)] active:bg-[var(--tonal)]"
            aria-expanded={menuOpen}
            aria-controls="site-nav-drawer"
            aria-label="Open menu"
          >
            <IconMenu />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="site-nav-backdrop-enter fixed inset-0 z-[60] border-0 bg-[var(--ink)]/30 p-0 backdrop-blur-[2px] motion-reduce:animate-none motion-reduce:opacity-100"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="site-nav-drawer"
            className="site-nav-drawer-enter fixed inset-y-0 right-0 z-[61] flex w-[min(78vw,19.5rem)] flex-col rounded-l-[1.25rem] border-l border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-lime)_14%,white)] pt-[env(safe-area-inset-top,0px)] shadow-[-16px_0_48px_-20px_rgba(33,35,36,0.22)] motion-reduce:animate-none motion-reduce:translate-x-0 sm:w-[min(72vw,21rem)] sm:rounded-l-[1.75rem]"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex shrink-0 items-center justify-end gap-2 px-4 pb-2 pt-3 sm:px-5 sm:pt-4">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/85 px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[var(--ink-muted)] shadow-sm transition-colors hover:border-[var(--ink-muted)] hover:text-[var(--ink)]"
                aria-label="Close menu"
              >
                Close
                <IconClose className="text-[var(--ink)]" />
              </button>
            </div>

            <nav
              className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-2 sm:px-6"
              aria-label="Primary"
            >
              <p className="mb-5 font-mono text-[0.55rem] font-normal uppercase tracking-[0.26em] text-[var(--ink-muted)]">
                Explore
              </p>
              <ul className="flex flex-col gap-0.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block min-h-[48px] py-2.5 font-serif text-[clamp(1.35rem,4.8vw,2.05rem)] font-normal leading-[1.12] tracking-[-0.02em] text-[var(--ink)] transition-colors hover:text-[var(--ink-muted)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-[var(--line-soft)] bg-white/40 px-5 py-4 sm:px-6">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 opacity-90 transition-opacity hover:opacity-100"
                aria-label="Abakcus home"
              >
                <LogoImage variant="footer" />
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
