import Image from "next/image";
import Link from "next/link";
import { getQuestionsSorted } from "@/data/questions-picks";

/** Homepage strip for the Questions content type — sits above Tools. */
export function HomeQuestions() {
  const items = getQuestionsSorted();
  if (items.length === 0) return null;

  const featured = items[0]!;

  return (
    <section
      id="questions"
      className="relative z-10 overflow-hidden border-t border-[var(--line-soft)] py-14 md:py-20"
      aria-labelledby="home-questions-heading"
    >
      {/* Soft wash + subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color-mix(in_srgb,var(--pastel-lavender)_35%,white)] via-[color-mix(in_srgb,var(--pastel-rose)_22%,white)] to-[color-mix(in_srgb,var(--pastel-peach)_28%,white)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[color-mix(in_srgb,var(--pastel-sky)_40%,transparent)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--pastel-lime)_35%,transparent)] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-[var(--ink-muted)]">
            Sorular
          </p>
          <h2
            id="home-questions-heading"
            className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight text-[var(--ink)]"
          >
            Questions worth a pause.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
            Tiny puzzles and gentle brain-twists — each one fits in a coffee
            break. No grades; just the fun of figuring it out.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Link
            href={featured.href}
            className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-white/60 bg-white/80 shadow-[var(--shadow-card)] backdrop-blur-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(0,0,0,0.18)] sm:flex-row"
          >
            <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:w-[min(46%,280px)] sm:min-h-[220px] md:min-h-[240px]">
              <Image
                src={featured.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width:640px) 100vw, 280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80 sm:bg-gradient-to-r" />
              <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/50 bg-white/90 px-3 py-1 font-sans text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[var(--ink)] shadow-sm backdrop-blur-sm">
                Question {String(featured.number).padStart(2, "0")}
              </span>
            </div>

            <div
              className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8 md:p-10"
              style={{
                background: `linear-gradient(135deg, color-mix(in srgb, ${featured.pageColor} 55%, white) 0%, white 70%)`,
              }}
            >
              <span className="w-fit rounded-full border border-[var(--line-soft)] bg-white/70 px-3 py-1 font-sans text-[0.7rem] text-[var(--ink-muted)]">
                {featured.tag}
              </span>
              <div>
                <p className="font-serif text-xl font-semibold leading-snug text-[var(--ink)] sm:text-2xl">
                  {featured.title}
                </p>
                <p className="mt-2 font-serif text-base leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                  {featured.dek}
                </p>
              </div>
              <span className="mt-1 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[var(--ink)] transition-transform group-hover:translate-x-0.5">
                Open question
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </div>
          </Link>

          <div className="mt-6 flex justify-center">
            <Link
              href="/questions"
              className="text-sm font-medium text-[var(--ink-muted)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline"
            >
              All questions
              <span aria-hidden className="ml-1 inline-block">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
