import { LogoImage } from "@/components/logo-image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[var(--line-soft)] bg-white pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto flex max-w-[var(--page-max)] flex-col gap-8 px-[var(--page-pad)] py-10 sm:py-12 md:flex-row md:items-end md:justify-between">
        <div className="text-center md:text-left">
          <LogoImage variant="footer" className="mx-auto opacity-95 md:mx-0" />
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[var(--ink-muted)] md:mx-0">
            Curated math, science, education, and design — unexpected and
            unhurried.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-6 text-sm sm:gap-x-12 md:justify-end">
          <div className="flex min-w-[8rem] flex-col gap-2 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink-muted)]">
              Elsewhere
            </span>
            <a
              href="/newsletter"
              className="inline-flex min-h-[44px] items-center justify-center text-[var(--ink)] hover:underline md:min-h-0 md:justify-start"
            >
              Newsletter
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--line-soft)] px-4 py-6 text-center text-xs leading-relaxed text-[var(--ink-muted)]">
        © {new Date().getFullYear()} Abakcus · Curated with care.
      </div>
    </footer>
  );
}
