import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { getQuestionsSorted } from "@/data/questions-picks";

export const metadata: Metadata = {
  title: "Questions",
  description:
    "Short puzzles and riddles — one gentle brain-twist at a time. From Abakcus.",
};

export default function QuestionsIndexPage() {
  const items = getQuestionsSorted();

  return (
    <>
      <SiteHeader />
      <main className="border-b border-[var(--line-soft)] bg-gradient-to-b from-[color-mix(in_srgb,var(--pastel-lavender)_22%,white)] via-white to-[color-mix(in_srgb,var(--pastel-peach)_18%,white)]">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pb-20 pt-8 sm:pb-28 sm:pt-10">
          <nav
            className="mb-10 text-center text-sm text-[var(--ink-muted)] md:mb-12"
            aria-label="Section"
          >
            <Link
              href="/"
              className="font-sans underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline"
            >
              Home
            </Link>
            <span className="mx-2.5 text-[var(--line)]" aria-hidden>
              ·
            </span>
            <span className="font-sans font-medium text-[var(--ink)]">
              Questions
            </span>
          </nav>

          <header className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <p className="mb-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-[var(--ink-muted)]">
              Sorular
            </p>
            <h1 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-medium tracking-[-0.03em] text-[var(--ink)]">
              Questions
            </h1>
            <p className="mx-auto mt-5 max-w-lg font-serif text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
              Small puzzles you can finish before your tea cools — no homework
              energy required.
            </p>
          </header>

          {items.length === 0 ? (
            <p className="text-center font-sans text-[var(--ink-muted)]">
              First question drops soon.
            </p>
          ) : (
            <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8">
              {items.map((q) => (
                <li key={q.slug}>
                  <Link
                    href={q.href}
                    className="group flex overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] bg-white/90 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--ink)]/12 hover:shadow-[var(--shadow-card)]"
                  >
                    <div className="relative aspect-[4/3] w-[min(42%,200px)] shrink-0 sm:w-[min(38%,220px)]">
                      <Image
                        src={q.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="220px"
                      />
                    </div>
                    <div
                      className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-5 sm:p-6"
                      style={{
                        background: `linear-gradient(120deg, color-mix(in srgb, ${q.pageColor} 40%, white), white)`,
                      }}
                    >
                      <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                        Question {String(q.number).padStart(2, "0")}
                      </span>
                      <h2 className="font-serif text-xl font-semibold leading-snug text-[var(--ink)] sm:text-[1.35rem]">
                        {q.title}
                      </h2>
                      <p className="font-serif text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                        {q.dek}
                      </p>
                      <span className="mt-1 font-sans text-sm font-semibold text-[var(--ink)]">
                        Open →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
