import type { ReactNode } from "react";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev";
const HERO_IMAGE = `${R2}/Barbara%20Iweins%20Katalog.png`;
const SECOND_IMAGE = `${R2}/Barbara%20Iweins%20Katalog%202.webp`;

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
    <blockquote className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6">
      <p className="text-lg italic leading-relaxed text-[var(--ink-muted)]">{children}</p>
      {cite && (
        <cite className="mt-2 block font-sans text-[0.6rem] not-italic uppercase tracking-[0.15em] text-[var(--ink-muted)]">
          — {cite}
        </cite>
      )}
    </blockquote>
  );
}

function CtaBlock() {
  return (
    <div className="my-8 flex flex-wrap items-center justify-between gap-4 border-l-4 border-[var(--sepia,#b5956a)] bg-[color-mix(in_srgb,var(--pastel-peach)_35%,white)] px-5 py-5">
      <div>
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
          Katalog — Barbara Iweins
        </p>
        <p className="mt-0.5 font-serif text-[0.92rem] italic text-[var(--ink-muted)]">
          The complete project, book, and exhibition details.
        </p>
      </div>
      <a
        href="https://katalog-barbaraiweins.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 border border-[var(--sepia,#b5956a)] px-5 py-2.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--ink-muted)] transition-colors hover:bg-[var(--sepia,#b5956a)] hover:text-white"
      >
        View the Project →
      </a>
    </div>
  );
}

function StatsPanel() {
  const stats: [string, string][] = [
    ["16%", "of all items in the house are blue — the dominant color, discovered only after counting"],
    ["22%", "of her clothes are black"],
    ["43%", "of bathroom items are made from plastic"],
    ["90%", "of all cables in the house are never used"],
    ["19%", "of her books remain unread"],
    ["1%", "of all 12,795 objects hold genuine sentimental value"],
  ];

  return (
    <div className="my-10 border-t border-[var(--line)] pt-6">
      <p className="mb-6 font-sans text-[0.58rem] uppercase tracking-[0.28em] text-[var(--ink-muted)]">
        Selected findings from the inventory
      </p>
      <div className="grid grid-cols-2 gap-0 sm:grid-cols-3">
        {stats.map(([number, desc]) => (
          <div
            key={number + desc}
            className="border-b border-r border-[var(--line)] px-4 py-5 last:border-r-0 [&:nth-child(2n)]:sm:border-r [&:nth-child(3n)]:border-r-0"
          >
            <span className="block font-serif text-[2rem] font-medium leading-none text-[var(--ink)]">
              {number}
            </span>
            <span className="mt-2 block font-sans text-[0.6rem] leading-relaxed tracking-[0.04em] text-[var(--ink-muted)]">
              {desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <figure
      className="my-8 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL.peach }}
    >
      <ArticleImageLightbox
        src={HERO_IMAGE}
        alt="Barbara Iweins — Katalog, objects photographed individually on neutral grey background"
      >
        <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Barbara Iweins — Katalog, objects photographed individually on neutral grey background"
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        Every object isolated on the same neutral background — a lice comb gets the same treatment as a birth bracelet.
      </figcaption>
    </figure>
  );
}

function SecondImage() {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL.rose }}
    >
      <ArticleImageLightbox
        src={SECOND_IMAGE}
        alt="Barbara Iweins — Katalog grid of objects, the full inventory spread"
      >
        <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SECOND_IMAGE}
            alt="Barbara Iweins — Katalog grid of objects, the full inventory spread"
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        The grid from the 360-page book published by Delpire &amp; Co. — objects ordered by type, repetition becoming taxonomy.
      </figcaption>
    </figure>
  );
}

export function BarbaraIweinsKatalogArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        {/* Header */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Photography · Data · Obsession · Barbara Iweins · 2018–2023
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            12,795 Objects, One Life
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Barbara Iweins photographed every single thing she owns. The
            spreadsheet is the easy part to explain.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            The Belgian photographer Barbara Iweins had moved house eleven
            times. After a divorce in which her ex-husband took nothing, she was
            left alone with all of it. She decided to photograph every single
            item she owned — not to curate, not to select, not to show her best
            side. Every item. Without exception.
          </p>

          {/* Hero image placed immediately after intro — close to the title */}
          <HeroImage />

          <section data-uc-section className="mt-10">
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              What followed was five years of work, averaging fifteen hours a
              week. The result was 12,795 photographs, a 360-page hardcover
              book, a shortlisting for the 2023 Rencontres d&apos;Arles Author
              Book Awards, and a spreadsheet that knows things about Barbara
              Iweins that she did not know about herself before she built it.
            </p>

            <CtaBlock />
            <StatsPanel />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="The Method" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Each object was photographed individually, isolated on a neutral
              light grey background — removed from its drawer, its shelf, its
              context — and classified along four axes: material, color,
              frequency of use (daily to never), and emotional value. The
              photographs are rigorously uniform. Same lighting, same angle,
              same white void. A lice comb gets the same treatment as a hospital
              bracelet from the day she gave birth.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This formal equality is not accidental. Placing everything on the
              same terms makes the sorting — the judgment — happen afterward, in
              the data. The eye is not guided. The camera does not editorialize.
              It is the same instinct that drives{" "}
              <ArticleProseLink href="/articles/billingsley-euclid">
                Byrne&apos;s decision to use color rather than labels in his
                Euclid
              </ArticleProseLink>{" "}
              — strip away convention, and see what the thing actually is.
            </p>

            <PullQuote cite="Barbara Iweins">
              &ldquo;I hoped to say goodbye to many things, but ended up loving
              so much more of my belongings.&rdquo;
            </PullQuote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="What She Found" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The project produced surprises of both kinds. Among the obviously
              funny: she owned six or seven metal lice combs. Each had been
              lost, replaced, found again. The inventory revealed a small
              stockpile of objects she had been continuously losing and
              re-buying without ever realizing it. Ninety percent of her cables
              were never used — packed and unpacked eleven times without
              examination.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Among the quieter revelations: she estimated the total value of
              all 12,795 items at 121,046 euros. Of those objects, she concluded
              that only one percent held genuine sentimental value — the things
              she could not replace. The other 99 percent were, in principle,
              disposable.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This is the number that stays with you. Not the 12,795, not the
              16% blue, not the useless cables. The fact that a person can live
              surrounded by nearly thirteen thousand objects and conclude that
              only about 128 of them actually matter. It is a different kind of
              inventory than what{" "}
              <ArticleProseLink href="/tools/river-runner">
                River Runner does with watersheds
              </ArticleProseLink>{" "}
              — but the underlying move is the same: make everything visible,
              then see what you actually have.
            </p>
          </section>

          <SecondImage />

          <section data-uc-section className="mt-14">
            <SectionHead title="Not Marie Kondo" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Iweins is careful to distinguish what she was doing from the genre
              of minimalist decluttering with which it might superficially
              overlap. She did not throw things away. She did not apply a single
              criterion of joy or utility and discard whatever failed the test.
              She is, by her own description, a neurotic collector, and the
              project did not cure that. The act of isolating each object —
              photographing it, classifying it, placing it on a grey background
              where it had to be seen — produced something closer to the
              opposite: a renewed attachment to the mundane.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              A fridge magnet that has lost its plastic coating but still holds
              a child&apos;s drawing acquires, when looked at directly, an
              importance it was never given while sitting on the fridge. A
              leaking bottle of cough syrup, isolated and lit properly, turns
              out to have aesthetic properties worth preserving. The grid starts
              to resemble taxonomy — scientific illustration, the kind where you
              see forty specimens of the same beetle arranged to show
              morphological variation. Except the subject is a single Belgian
              household, and the variation is biographical.
            </p>

            <PullQuote cite="Barbara Iweins">
              &ldquo;Most of my possessions are more a source of confusion than
              pleasure.&rdquo;
            </PullQuote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="The Real Subject" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Iweins had spent the preceding decade photographing other
              people&apos;s vulnerability. <em>Katalog</em> is the inversion:
              turning the same methodology on herself, using her possessions as
              the material of a self-portrait she could not have composed any
              other way. The timing was not incidental. A divorce, a boyfriend
              who subsequently died, the eleventh move, the opening of the last
              box.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The project began as, in her words, an act of self-preservation —
              something to do every day, a system for organizing her life by
              organizing the objects in it. Bringing order to the material world
              while the personal world was in disorder. The catalogue as therapy.
              The taxonomy as coping. It is the kind of self-imposed system that{" "}
              <ArticleProseLink href="/articles/feynman-technique">
                the Feynman Technique describes from the other side
              </ArticleProseLink>{" "}
              — you do not really understand something until you can lay it out
              completely, piece by piece.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Whether it worked, she is not entirely sure. But the project is
              done. She knows what she owns. She knows which 1% matters. She
              has, she said, identified which objects are valuable.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Now, she added, she can start living.
            </p>
          </section>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
