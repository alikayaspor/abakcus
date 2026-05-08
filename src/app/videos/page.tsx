import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { videosPicks } from "@/data/videos-picks";

export const metadata: Metadata = {
  title: "Videos — Abakcus",
  description:
    "Films, documentaries, and short videos on mathematics, science, and the ideas worth watching twice.",
  alternates: {
    canonical: "/videos",
  },
};

const PASTEL_BORDERS = [
  "var(--pastel-sky)",
  "var(--pastel-rose)",
  "var(--pastel-lime)",
  "var(--pastel-peach)",
  "var(--pastel-lavender)",
];

const isFilmOrDoc = (tag: string) =>
  tag.toLowerCase().includes("film") ||
  tag.toLowerCase().includes("documentary");

function FilmCard({ pick, index }: { pick: (typeof videosPicks)[number]; index: number }) {
  const borderColor = PASTEL_BORDERS[index % PASTEL_BORDERS.length];
  return (
    <Link
      href={pick.href}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
      style={{ border: `2px solid ${borderColor}` }}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "2/3" }}>
        <Image
          src={pick.image}
          alt={pick.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:640px) 48vw, (max-width:1024px) 25vw, 20vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
          {pick.tag}
        </p>
        <p className="font-serif text-[0.92rem] font-semibold leading-snug text-[var(--ink)]">
          {pick.title}
        </p>
        <p className="mt-0.5 font-serif text-[0.82rem] leading-relaxed text-[var(--ink-muted)]">
          {pick.dek}
        </p>
      </div>
    </Link>
  );
}

function VideoCard({ pick, index }: { pick: (typeof videosPicks)[number]; index: number }) {
  const borderColor = PASTEL_BORDERS[index % PASTEL_BORDERS.length];
  return (
    <Link
      href={pick.href}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
      style={{ border: `2px solid ${borderColor}` }}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          src={pick.image}
          alt={pick.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
          {pick.tag}
        </p>
        <p className="font-serif text-[0.95rem] font-semibold leading-snug text-[var(--ink)] sm:text-base">
          {pick.title}
        </p>
        <p className="mt-0.5 font-serif text-sm leading-relaxed text-[var(--ink-muted)]">
          {pick.dek}
        </p>
      </div>
    </Link>
  );
}

export default function VideosPage() {
  const films = videosPicks.filter((p) => isFilmOrDoc(p.tag));
  const videos = videosPicks.filter((p) => !isFilmOrDoc(p.tag));

  return (
    <>
      <SiteHeader />

      <main>
        {/* ── PAGE HEADER ── */}
        <header className="border-b border-[var(--line-soft)] bg-[var(--tonal)] py-14 md:py-20">
          <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] text-center">
            <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--ink-muted)]">
              Watch list
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.15] tracking-tight text-[var(--ink)]">
              Worth watching twice.
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-serif text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              Films, documentaries, and short videos on mathematics, science,
              and the ideas that stay with you.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[var(--page-max)] divide-y divide-[var(--line-soft)] px-[var(--page-pad)] py-16 md:py-24">

          {/* ── FILMS & DOCUMENTARIES ── */}
          {films.length > 0 && (
            <section className="pb-16 md:pb-20">
              <header className="mb-8 md:mb-10">
                <h2 className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-normal tracking-tight text-[var(--ink)]">
                  Films &amp; Documentaries
                </h2>
                <p className="mt-1.5 font-serif text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                  Feature films and documentary films worth watching carefully.
                </p>
              </header>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
                {films.map((pick, i) => (
                  <li key={pick.slug}>
                    <FilmCard pick={pick} index={i} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── VIDEOS ── */}
          {videos.length > 0 && (
            <section className="pt-16 md:pt-20">
              <header className="mb-8 md:mb-10">
                <h2 className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-normal tracking-tight text-[var(--ink)]">
                  Videos
                </h2>
                <p className="mt-1.5 font-serif text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                  Short films, visualizations, and experiments worth returning
                  to.
                </p>
              </header>
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {videos.map((pick, i) => (
                  <li key={pick.slug}>
                    <VideoCard pick={pick} index={i} />
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
