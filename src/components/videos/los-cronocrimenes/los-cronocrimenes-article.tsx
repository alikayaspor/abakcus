import Image from "next/image";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

const POSTER =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Los-Cronocrimenes.jpg";

const ACCENT = "#7db88a";
const ACCENT_DIM = "#4a7c5f";
const DARK = "#0d1a10";
const DARK_SURFACE = "#111f14";

function MetaCell({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 px-4 py-3 border-r border-white/[0.07] last:border-r-0">
      <span
        className="font-mono text-[0.55rem] uppercase tracking-[0.18em]"
        style={{ color: "rgba(180,210,185,0.45)" }}
      >
        {label}
      </span>
      <span className="font-serif text-[0.9rem] italic" style={{ color: "rgba(240,248,242,0.82)" }}>
        {value}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="my-12 flex items-center gap-4">
      <span className="h-px flex-1 bg-[var(--line)]" />
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em]" style={{ color: ACCENT_DIM }}>§</span>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}

export function LosCronocrimenesArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── CINEMATIC HERO ── */}
      <header
        className="relative overflow-hidden pb-0"
        style={{ background: DARK }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 60% 50%, ${DARK} 0%, #050a06 100%)`,
            opacity: 0.9,
          }}
        />

        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-16 text-center md:flex-row md:items-start md:gap-16 md:py-24 md:text-left">

            {/* Poster */}
            <div className="w-44 shrink-0 sm:w-56 md:w-64">
              <div
                className="relative overflow-hidden rounded-sm"
                style={{
                  aspectRatio: "2/3",
                  boxShadow: "0 40px 100px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(125,184,138,0.12)",
                }}
              >
                <Image
                  src={POSTER}
                  alt="Los Cronocrímenes (Timecrimes) — Nacho Vigalondo, 2007"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 176px, 256px"
                />
              </div>
            </div>

            {/* Title block */}
            <div className="max-w-xl">
              <p
                className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
                style={{ color: ACCENT }}
              >
                Film &nbsp;·&nbsp; Movie &nbsp;·&nbsp; 2007 &nbsp;·&nbsp; Spain
              </p>

              <h1 className="mt-4 font-serif text-[clamp(2.2rem,7vw,4.5rem)] font-medium leading-[1.0] tracking-tight text-[#f2f7f3] italic">
                Los Crono&shy;crímenes
              </h1>

              <p
                className="mt-3 font-mono text-[0.75rem] tracking-[0.06em]"
                style={{ color: "rgba(180,210,185,0.5)" }}
              >
                Timecrimes
              </p>

              <p
                className="mt-5 font-serif text-base italic leading-relaxed sm:text-lg"
                style={{ color: "rgba(200,225,205,0.65)" }}
              >
                Dir. Nacho Vigalondo — a single hour, a single man, an airtight trap.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.imdb.com/title/tt0480669/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-80"
                  style={{
                    background: ACCENT_DIM,
                    color: "#f2f7f3",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View on IMDb
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── META STRIP ── */}
        <div
          className="relative z-10 border-t"
          style={{
            background: DARK_SURFACE,
            borderColor: "rgba(125,184,138,0.1)",
          }}
        >
          <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
            <div className="grid grid-cols-2 divide-x sm:grid-cols-4"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <MetaCell label="Country" value="Spain" />
              <MetaCell label="Runtime" value="92 min" />
              <MetaCell label="IMDb" value="7.1 / 10" />
              <MetaCell label="Budget" value="$2.6M" />
            </div>
          </div>
        </div>

        {/* ── TRAILER ── */}
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pb-10 pt-6">
          <div className="overflow-hidden rounded-lg" style={{ boxShadow: "0 24px 60px -12px rgba(0,0,0,0.7)" }}>
            <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/3XuWoe9NSic"
                title="Los Cronocrímenes (Timecrimes) — trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(180,210,185,0.7)" }}
          >
            Timecrimes — official trailer, 2007
          </p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article
        className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-16 pb-24"
        itemScope
        itemType="https://schema.org/Review"
      >
        <meta itemProp="itemReviewed" content="Los Cronocrímenes (Timecrimes) directed by Nacho Vigalondo" />
        <meta itemProp="author" content="Abakcus" />

        {/* Eyebrow */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{ background: "color-mix(in srgb, var(--pastel-lime) 55%, white)", color: ACCENT_DIM }}
          >
            Film
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{ background: "color-mix(in srgb, var(--pastel-lime) 55%, white)", color: ACCENT_DIM }}
          >
            Movie
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Time Travel &nbsp;·&nbsp; Nacho Vigalondo &nbsp;·&nbsp; 2007
          </span>
        </div>

        {/* ── DROP-CAP OPEN ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: ACCENT_DIM }}
            aria-hidden="true"
          >
            T
          </span>
          he time machine in this film looks like a bathtub filled with white liquid.
          There are no glowing panels, no countdown clocks, no dramatic hum of fictional
          physics. A nervous man in the Spanish countryside climbs in because someone
          told him it was a safe place to hide — and that is the whole catastrophe,
          already in motion before you realize it has started.
        </p>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <em>Los Cronocrímenes</em> is a 2007 Spanish thriller written and directed by Nacho Vigalondo,
          who also plays a small supporting role with the kind of bewildered energy that suits the
          film perfectly. It stars Karra Elejalde as Héctor, a middle-aged man renovating a house
          with his wife when an afternoon of idle curiosity — binoculars, a forest, a woman undressing
          in the distance — sets off an hour-long causal loop from which there is, structurally
          speaking, no escape. The loop is not a device. It is the sentence Héctor has already
          been handed before the film begins.
        </p>

        {/* ── PULL QUOTE 1 ── */}
        <blockquote
          className="my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: ACCENT_DIM }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;In this film, there are no accidents — even if causes have a funny way of following their effects.&rdquo;
          </p>
          <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
            Projected Figures
          </cite>
        </blockquote>

        {/* ── SIDEBAR NOTE ── */}
        <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
          <span
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: ACCENT_DIM }}
          >
            —
          </span>
          <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
            Vigalondo has cited Alan Moore and Dave Gibbons&apos;s one-off comic strip
            &ldquo;Chronocops&rdquo; (2000 AD, 1983) as the film&apos;s biggest influence.
            The budget was $2.6 million. It was shot almost entirely in Cantabria,
            near Vigalondo&apos;s birthplace.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The film earns its reputation not through complexity but through precision. Most
          time-travel films ask the audience to track multiple timelines, multiple characters,
          multiple paradoxes. Vigalondo does something harder: he gives you a single timeline,
          a single ordinary man, and a single hour — and then shows you, methodically, how that
          one hour contains everything. There are only four speaking parts. The locations fit
          on a sketch map drawn on a napkin. The plot is airtight in the way that a trap is
          airtight — the kind of airtight that{" "}
          <ArticleProseLink href="/articles/marilyn-vos-savant" className="article-euclid-link">
            the Monty Hall problem
          </ArticleProseLink>{" "}
          is airtight: you can feel the walls before you can name what sealed them.
        </p>

        {/* ── DIVIDER ── */}
        <div className="clear-both">
          <Divider />
        </div>

        {/* ── STRUCTURE INSET ── */}
        <div
          className="my-10 border-l-4 border border-[var(--line)] px-7 py-6 sm:px-8 sm:py-7"
          style={{
            borderLeftColor: ACCENT_DIM,
            background: "color-mix(in srgb, var(--pastel-lime) 22%, white)",
          }}
        >
          <p
            className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
            style={{ color: ACCENT_DIM }}
          >
            The Structure
          </p>
          <p className="mb-4 font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            Héctor-1 watches the forest. He investigates. He is attacked by a man with a pink
            bandage wrapped around his head. He flees. He hides in the machine. He emerges as
            Héctor-2, one hour in the past, and watches Héctor-1 in the forest.
          </p>
          <p className="font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            At some point, he must become the man with the pink bandage. He must be both
            the pursuer and the pursued, both the cause and the effect. The film never
            cheats this logic. Every scene you watched in the first act returns, slightly
            shifted, in the second —{" "}
            <em className="text-[var(--ink)]">and you understand, rewatching, that it was already the second act.</em>
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          What makes <em>Los Cronocrímenes</em> genuinely interesting — rather than merely clever —
          is what it&apos;s actually about underneath the mechanism. A. A. Dowd, reviewing for
          The A.V. Club, read it as an allegory for adultery: a man whose eye strays, who
          follows his curiosity into the woods, and who then spends the rest of the film
          performing increasingly desperate damage control, each attempt to fix the situation
          making it worse, until the original transgression has metastasized into something
          that cannot be named out loud. You don&apos;t need to accept that reading to feel its
          weight. Héctor is not a hero or a villain. He is a person who made one small
          choice and then had to live inside it, replicated.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The inevitable comparison is to Shane Carruth&apos;s <em>Primer</em> (2004), another
          low-budget time-travel film built on rigorous internal logic. But where <em>Primer</em>{" "}
          rewards obsessive diagramming and multiple rewatches with increasingly granular
          revelations, <em>Timecrimes</em> is comprehensible on a single sitting and unsettling
          on all subsequent ones. The mechanism is not the mystery. The mystery is Héctor
          standing at the window at the end, looking out at the same forest, and the question
          of whether anything has actually changed — or whether he has simply been
          returned to the beginning of the loop with new information and the same hands.
        </p>

        <Divider />

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Vigalondo made this film on a shoestring, in a countryside that looks like it
          costs nothing to film in, with a cast small enough to fit in a single car.
          None of that is visible in the result. The cinematography by Flavio Martínez
          Labiano — Alex de la Iglesia&apos;s regular photographer — gives the Spanish hills
          a texture that feels like latent menace: too quiet, too green, too still. The
          score by Eugenio Mira is sparse and slightly wrong in the way that scores in
          films about inevitability should be slightly wrong.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <em>Los Cronocrímenes</em> holds a 90% approval rating on Rotten Tomatoes. It was the
          closing film of the Sitges Film Festival in 2007. At various points a David Cronenberg
          remake was announced and then went quiet. It remains a film that is easy to describe,
          difficult to explain, and impossible to fully shake — much like{" "}
          <ArticleProseLink href="/videos/taming-the-garden" className="article-euclid-link">
            Salomé Jashi&apos;s <em>Taming the Garden</em>
          </ArticleProseLink>
          , but colder and faster and with no trees. Which is, for a film about
          a man who cannot escape his own past, exactly the right way to leave an audience.
        </p>

        {/* ── VERDICT ── */}
        <div
          className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{ background: "color-mix(in srgb, var(--pastel-lime) 18%, white)" }}
        >
          <span className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest" style={{ color: ACCENT_DIM }}>
            ★★★★★
          </span>
          <div>
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              In short
            </p>
            <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
              Ninety-two minutes. Four characters. One hour, looped. Once is not enough — but the second
              watch is a different film entirely.
            </p>
          </div>
        </div>

        {/* ── FOOTER NOTE ── */}
        <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
          <a
            href="https://www.imdb.com/title/tt0480669/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[var(--ink)]"
          >
            <em>Los Cronocrímenes</em> (Timecrimes)
          </a>
          &nbsp;·&nbsp; Dir. Nacho Vigalondo &nbsp;·&nbsp; Spain, 2007
          &nbsp;·&nbsp; abakcus.com
        </p>
      </article>
    </div>
  );
}
