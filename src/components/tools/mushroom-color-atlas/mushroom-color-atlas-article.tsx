import type { ReactNode } from "react";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const HERO_IMAGE =
  "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Mushroom%20Color%20Atlas.webp";

const BOOK_IMAGE =
  "https://m.media-amazon.com/images/I/81x2x2D+IUL._SL1500_.jpg";

/* Dye-mushroom palette — actual colors from the HTML prototype */
const SWATCHES = [
  "#c4a44a", // chanterelle gold
  "#7a5c3a", // porcini brown
  "#8b6b4a", // earth
  "#5c7a4a", // hedgehog green
  "#a07050", // lobster warm
  "#9b8060", // velvet tan
  "#6b5040", // deep spore
  "#c8a870", // golden oyster
  "#8a7060", // bracket brown
  "#b09070", // parchment
  "#7a9060", // lichen grey-green
  "#d4b880", // pale gold
];

const PORCINI = "#7a5c3a";
const GOLD = "#c4a44a";
const GOLD_DIM = "#a0844a";

function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function PullQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote
      className="my-10 border-l-[3px] py-1 pl-6"
      style={{ borderColor: GOLD_DIM }}
    >
      <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
        {children}
      </p>
      {cite && (
        <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
          {cite}
        </cite>
      )}
    </blockquote>
  );
}

function SwatchHero() {
  return (
    <div className="mb-12 overflow-hidden border border-[var(--line)]">
      {/* Main row */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(12, 1fr)", height: "72px" }}>
        {SWATCHES.map((color) => (
          <div key={color} style={{ background: color }} />
        ))}
      </div>
      {/* Dimmed shadow row */}
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(12, 1fr)", height: "32px", filter: "brightness(0.82)" }}
      >
        {SWATCHES.map((color) => (
          <div key={color + "2"} style={{ background: color }} />
        ))}
      </div>
      {/* Footer */}
      <div
        className="flex items-center justify-between px-5 py-3.5 font-mono text-[0.6rem] uppercase tracking-[0.13em]"
        style={{ background: "#1c1a14", color: "rgba(200,184,154,0.5)" }}
      >
        <span>825 colors &nbsp;·&nbsp; 40+ dye mushrooms</span>
        <a
          href="https://mushroomcoloratlas.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
          style={{ color: "rgba(200,184,154,0.75)", borderBottom: "1px solid rgba(200,184,154,0.25)" }}
        >
          Explore the Atlas →
        </a>
      </div>
    </div>
  );
}

function CtaBlock() {
  return (
    <div
      className="my-8 flex flex-wrap items-center justify-between gap-4 border-l-4 px-5 py-5"
      style={{
        borderLeftColor: GOLD_DIM,
        background: "color-mix(in srgb, var(--pastel-peach) 35%, white)",
      }}
    >
      <div>
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
          Mushroom Color Atlas — Julie Beeler
        </p>
        <p className="mt-0.5 font-serif text-[0.92rem] italic text-[var(--ink-muted)]">
          825 colors. 40+ species. Every variable documented.
        </p>
      </div>
      <a
        href="https://mushroomcoloratlas.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 border border-[#a0844a] px-5 py-2.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#a0844a] transition-colors hover:bg-[#a0844a] hover:text-white"
      >
        Open the Atlas →
      </a>
    </div>
  );
}

function BookBlock() {
  return (
    <div
      className="my-10 grid gap-6 border border-[var(--line)] p-6 sm:grid-cols-[140px_1fr] sm:gap-7 sm:p-7"
      style={{ background: "color-mix(in srgb, var(--pastel-peach) 22%, white)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BOOK_IMAGE}
        alt="The Mushroom Color Atlas — book cover"
        className="mx-auto block w-32 border border-[var(--line)] sm:mx-0 sm:w-full"
        style={{ aspectRatio: "2/3", objectFit: "cover" }}
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col justify-center gap-3">
        <p
          className="font-mono text-[0.58rem] uppercase tracking-[0.18em]"
          style={{ color: GOLD_DIM }}
        >
          Companion Book
        </p>
        <p className="font-serif text-[1.05rem] font-medium italic leading-snug text-[var(--ink)]">
          The Mushroom Color Atlas
        </p>
        <p className="font-serif text-[0.88rem] leading-[1.65] text-[var(--ink-muted)]">
          Equal parts art book, field guide, and color distillation workshop.
          500 color swatches, botanical illustrations by Yuli Gates, step-by-step
          dyeing instructions. Published by Chronicle Books.
        </p>
        <a
          href="https://amzn.to/4tDZ2Lp"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block self-start px-5 py-2.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[#f7f3ec] transition-colors"
          style={{ background: PORCINI }}
        >
          View on Amazon →
        </a>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL.peach }}
    >
      <ArticleImageLightbox
        src={HERO_IMAGE}
        alt="Mushroom Color Atlas — dye swatches derived from foraged fungi"
      >
        <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Mushroom Color Atlas — dye swatches derived from foraged fungi"
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        Swatches from the Atlas — each color derived from a specific mushroom, mordant, and fiber combination.
      </figcaption>
    </figure>
  );
}

function MordantInset() {
  const rows: [string, string][] = [
    ["Alum", "Produces warm, clear tones — the baseline mordant for most natural dyeing."],
    ["Iron", "Shifts colors toward grey and olive. Called &ldquo;saddening&rdquo; the dye — an evocative description of what it does."],
    ["Copper", "Enriches and deepens greens. Combines well with lichen-bearing mushrooms."],
    ["Chrome", "Deepens and mutes. Produces the most complex, lightfast results."],
  ];

  return (
    <div
      className="my-10 border-l-4 border border-[var(--line)] px-7 py-6 sm:px-8 sm:py-7"
      style={{
        borderLeftColor: GOLD_DIM,
        background: "color-mix(in srgb, var(--pastel-peach) 22%, white)",
      }}
    >
      <p
        className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
        style={{ color: GOLD_DIM }}
      >
        On Mordants — The Variable Nobody Talks About
      </p>
      <p className="mb-5 font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
        A mordant is a mineral salt that creates a chemical bond between dye and fiber.
        Change the mordant and you change the color — sometimes dramatically.
        The same Dyer&apos;s Polypore mushroom on alum-mordanted wool yields warm ochre.
        On iron-mordanted fiber from the same bath: a deep khaki-green. The Atlas maps all
        of these variations. There is no single &ldquo;mushroom color&rdquo; — there are only conditions.
      </p>
      <div className="grid gap-0 border-t border-[var(--line)] sm:grid-cols-2">
        {rows.map(([name, desc]) => (
          <div key={name} className="border-b border-r border-[var(--line)] px-4 py-4 last:border-r-0 sm:[&:nth-child(2n)]:border-r-0">
            <p className="mb-1 font-serif text-[0.9rem] font-medium italic text-[var(--ink)]">
              {name}
            </p>
            <p
              className="font-serif text-[0.85rem] leading-[1.6] text-[var(--ink-muted)]"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MushroomColorAtlasArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        {/* Header */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Tool · Book · Natural Dye · Julie Beeler · 2021–
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            The Color the Forest Already Had
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            825 colors, 40+ dye mushrooms, and the colors that exist only because
            a specific fungus grew in a specific place at a specific time.
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">

          <SwatchHero />

          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            Somewhere in the gap between &ldquo;mushroom&rdquo; and &ldquo;color&rdquo; lives an assumption
            most people have never had reason to question. Mushrooms are brown, or sometimes
            white, or occasionally an alarming red. They are not, in any obvious way, a
            palette. Julie Beeler spent years disagreeing with that assumption — quietly,
            in the forests of Oregon, in a garage full of dried fungi and pots of warm
            water, producing swatches of wool and silk in colors that have no synthetic
            equivalent.
          </p>

          <HeroImage />

          <section data-uc-section className="mt-10">
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The Mushroom Color Atlas is the record of that disagreement. Launched in 2021
              as an interactive website, it now catalogs over 825 colors derived from more
              than 40 species of dye mushrooms, each filterable by species, mordant, fiber
              type, and pigment chemistry. It is also, quietly,{" "}
              <ArticleProseLink href="/tools/barbara-iweins-katalog" className="article-euclid-link">
                one of the better-designed scientific databases on the web
              </ArticleProseLink>
              : clean enough to be navigated by someone who has never heard the word
              &ldquo;mordant,&rdquo; deep enough to satisfy someone who has been dyeing with fungi
              for decades.
            </p>

            <CtaBlock />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="How It Works" />

            {/* Sidebar note — floated right */}
            <div className="clear-both mb-6 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[210px] sm:px-4 sm:py-4">
              <span
                className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
                style={{ color: GOLD_DIM }}
              >
                —
              </span>
              <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
                Beeler taught herself by studying the work of Miriam Rice, who dedicated
                her life to mushroom color experimentation from the 1970s onward.
                Rice died in 2020 at 96. The Atlas is, among other things, a continuation
                of that tradition.
              </p>
            </div>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The process Beeler documents is older than industry and stranger than it
              sounds. You forage a mushroom — preferably older specimens, which have
              developed more pigment — dry and store it, then steep it in warm water
              like a very particular tea. Into that bath goes natural fiber: wool, silk,
              or linen, pretreated with a mordant. Change the mordant and you change the
              color. Change the pH of the bath and you change it again. The same mushroom,
              processed differently, produces a different outcome. This variability is not
              a flaw. It is the point.
            </p>

            <MordantInset />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="Color as Landscape" />

            <PullQuote cite="Julie Beeler, founder of the Mushroom Color Atlas">
              &ldquo;Color evades language. It&apos;s an experience. And we&apos;re all experiencing it.&rdquo;
            </PullQuote>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              What makes the Atlas more than a craft reference is what it implies about
              color itself. The synthetic dye industry — born in the mid-19th century when
              William Perkin accidentally produced mauveine from coal tar — severed the
              connection between color and place. Before that rupture, a dyer&apos;s palette
              was a map of their landscape: what grew locally, what could be found in
              season, what mineral the local water happened to carry. Color was not chosen
              from a Pantone sheet. It was negotiated with the environment.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This is the same logic that runs through{" "}
              <ArticleProseLink href="/articles/dinara-kasko-kinetic-tarts" className="article-euclid-link">
                Dinara Kasko&apos;s pastry geometry
              </ArticleProseLink>
              {" "}or{" "}
              <ArticleProseLink href="/articles/specimens-fancy-turning" className="article-euclid-link">
                the Victorian fancy-turning catalogues
              </ArticleProseLink>
              : material sets the terms, and the maker works within them. The constraint
              is not a limitation. It is the whole system of meaning.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="The Companion Book" />

            <BookBlock />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The companion book, published by Chronicle Books, distills the same material
              into a physical object that is itself an argument for the project. The decision
              to use black-and-white botanical illustrations alongside full-color swatches
              was deliberate: the mushroom, rendered in ink, steps back so the color can
              step forward. You are not looking at a field guide. You are looking at what
              the mushroom already contained, before anyone thought to ask.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The 826th color in the Atlas — whenever it is added — will come from a
              mushroom that grew somewhere specific, was foraged by someone paying attention,
              and was coaxed into a hue by a set of decisions made with hands and eyes.
              That chain of custody from forest floor to fiber is exactly what synthetic
              processes eliminate, and exactly what the Atlas makes visible again.
            </p>
          </section>

        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
