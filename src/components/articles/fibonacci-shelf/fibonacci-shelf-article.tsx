import Image from "next/image";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { fibonacciShelfImages } from "@/data/fibonacci-shelf-images";
import { PASTEL, type PastelId } from "@/data/pastel-palette";
import { FibonacciBars } from "./fibonacci-bars";

function ShelfFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: PastelId;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4 ${className ?? "my-10"}`}
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/55 sm:aspect-[3/2]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, min(680px, 90vw)"
            priority={priority}
          />
        </div>
      </ArticleImageLightbox>
      {caption ? (
        <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function NestedRectanglesDiagram() {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4"
      style={{ backgroundColor: PASTEL.peach }}
    >
      <p className="mb-4 text-center font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
        Cross-section — nested Fibonacci rectangles
      </p>
      <div className="overflow-x-auto rounded-xl bg-white/55 p-4 sm:p-6">
        <svg
          className="mx-auto block w-full max-w-[580px]"
          viewBox="0 0 580 300"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <rect
            x="40"
            y="20"
            width="500"
            height="260"
            className="fill-[var(--ink)] stroke-[var(--ink)]"
            fillOpacity="0.04"
            strokeWidth="0.8"
          />
          <rect
            x="40"
            y="97.5"
            width="312.5"
            height="162.5"
            className="fill-[var(--ink)] stroke-[var(--ink)]"
            fillOpacity="0.04"
            strokeWidth="0.8"
          />
          <rect
            x="40"
            y="148"
            width="187.5"
            height="112"
            className="fill-[var(--ink)] stroke-[var(--ink)]"
            fillOpacity="0.04"
            strokeWidth="0.8"
          />
          <rect
            x="40"
            y="178"
            width="125"
            height="82"
            className="fill-[var(--ink)] stroke-[var(--ink)]"
            fillOpacity="0.04"
            strokeWidth="0.8"
          />
          <rect
            x="40"
            y="193"
            width="62.5"
            height="67"
            className="fill-[var(--ink)] stroke-[var(--ink)]"
            fillOpacity="0.04"
            strokeWidth="0.8"
          />
          <rect
            x="40"
            y="218"
            width="62.5"
            height="42"
            className="fill-[var(--ink)] stroke-[var(--ink)]"
            fillOpacity="0.04"
            strokeWidth="0.8"
          />
          <text
            x="297"
            y="15"
            fill="var(--ink-muted)"
            style={{ fontSize: 10, fontFamily: "ui-monospace, monospace" }}
          >
            8
          </text>
          <text
            x="188"
            y="93"
            fill="var(--ink-muted)"
            style={{ fontSize: 10, fontFamily: "ui-monospace, monospace" }}
          >
            5
          </text>
          <text
            x="115"
            y="144"
            fill="var(--ink-muted)"
            style={{ fontSize: 10, fontFamily: "ui-monospace, monospace" }}
          >
            3
          </text>
          <text
            x="78"
            y="174"
            fill="var(--ink-muted)"
            style={{ fontSize: 10, fontFamily: "ui-monospace, monospace" }}
          >
            2
          </text>
          <text
            x="55"
            y="189"
            fill="var(--ink-muted)"
            style={{ fontSize: 10, fontFamily: "ui-monospace, monospace" }}
          >
            1
          </text>
          <text
            x="55"
            y="214"
            fill="var(--ink-muted)"
            style={{ fontSize: 10, fontFamily: "ui-monospace, monospace" }}
          >
            1
          </text>
          <line
            x1="545"
            y1="20"
            x2="545"
            y2="280"
            className="stroke-[var(--line)]"
            strokeWidth="0.5"
          />
          <line
            x1="540"
            y1="20"
            x2="550"
            y2="20"
            className="stroke-[var(--line)]"
            strokeWidth="0.5"
          />
          <line
            x1="540"
            y1="280"
            x2="550"
            y2="280"
            className="stroke-[var(--line)]"
            strokeWidth="0.5"
          />
          <text
            x="558"
            y="155"
            fill="var(--ink-muted)"
            style={{ fontSize: 10, fontFamily: "ui-monospace, monospace" }}
            textAnchor="start"
          >
            φ → 1.618
          </text>
        </svg>
      </div>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        Nested rectangles — each inner step follows the sequence.
      </figcaption>
    </figure>
  );
}

export function FibonacciShelfArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Design · Mathematics · Object study
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--ink)]">
            A shelf built on a sequence
          </h1>
          <p className="mx-auto mt-5 max-w-[34rem] text-lg leading-relaxed text-[var(--ink-muted)] sm:mt-6 sm:text-xl">
            Six modular rectangles in anodized aluminum — sized by Fibonacci,
            nothing else.
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[680px] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            Peng Wang took six aluminum rectangles, sized them by the Fibonacci
            sequence, and made them modular. That&apos;s the whole concept — and
            it&apos;s enough.
          </p>

          <ShelfFigure
            src={fibonacciShelfImages.hero}
            alt="Fibonacci Shelf by Peng Wang in a living space"
            caption="Reconfigure, stack, repeat — tinkering as upkeep."
            priority
            pastel="peach"
          />

          <section data-uc-section className="mt-14">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              The sequence
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Bars that match the numbers
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              1, 1, 2, 3, 5, 8, 13 — each number the sum of the two before it.
              The bars below represent the first six terms, scaled
              proportionally:
            </p>

            <FibonacciBars />

            <ShelfFigure
              src={fibonacciShelfImages.afterSequence}
              alt="Fibonacci Shelf detail showing proportional aluminum modules"
              caption="Modules scaled like the terms they echo."
              pastel="sky"
            />

            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              As the numbers grow, their ratio converges toward roughly 1.618
              — the Golden Ratio. Whether that number is objectively beautiful
              or just numerologically flattering is an open debate. The shelf
              doesn&apos;t settle it, but it does benefit from it.
            </p>
          </section>

          <section data-uc-section className="mt-16">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              The object
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Six compartments, infinite arrangements
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              Six modular compartments in anodized aluminum. They can be
              stacked and reconfigured in many combinations. From the side, the
              structure nearly disappears — a few thin lines. From the front,
              nested rectangles receding inward, each a precise Fibonacci step
              smaller than the last.
            </p>

            <ShelfFigure
              src={fibonacciShelfImages.objectStudy}
              alt="Fibonacci Shelf viewed from the front, nested rectangles"
              caption="Front view — nested rectangles, each step smaller than the last."
              pastel="lime"
            />

            <NestedRectanglesDiagram />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
              <ShelfFigure
                src={fibonacciShelfImages.detailA}
                alt="Fibonacci Shelf aluminum detail"
                caption="Anodized surfaces — geometry without ornament."
                pastel="rose"
                className="my-6 sm:my-8"
              />
              <ShelfFigure
                src={fibonacciShelfImages.detailB}
                alt="Fibonacci Shelf profile and thin lines"
                caption="From the side — almost nothing but line."
                pastel="lavender"
                className="my-6 sm:my-8"
              />
            </div>

            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              The material is restrained: no wood grain, no color, no ornament.
              The geometry does the work. That&apos;s either disciplined or a
              little cold, depending on your taste — but it&apos;s never fussy.
            </p>
          </section>

          <blockquote className="my-8 border-l-[3px] border-[var(--line)] py-1 pl-6 font-serif text-lg italic leading-relaxed text-[var(--ink-muted)]">
            Furniture that&apos;s actually about something is rare. Usually
            it&apos;s just furniture.
          </blockquote>

          <section data-uc-section className="mt-16">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              What it is and isn&apos;t
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Storage is not the point
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              The shelf won&apos;t hold many books. It&apos;s not a storage
              solution. What it is, functionally, is a rearrangeable object —
              the compartments stack and recombine into different configurations.
              That modularity turns maintenance into something closer to
              tinkering.
            </p>

            <ShelfFigure
              src={fibonacciShelfImages.closing}
              alt="The Fibonacci Shelf by Peng Wang — modular aluminum compartments"
              caption="The Fibonacci Shelf — anodized aluminum, nested by the sequence."
              pastel="peach"
            />

            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              And unlike most conversation pieces, the conversation it starts is
              about something real: a sequence that shows up in sunflower seeds,
              nautilus shells, and now your living room. Whether you find that
              poetic or just interesting is up to you. Either way, it&apos;s a
              decent trick for six rectangles of aluminum.
            </p>
          </section>
        </article>

        <footer className="border-t border-[var(--line-soft)] px-[var(--page-pad)] py-10 text-center font-sans text-sm tracking-[0.12em] text-[var(--ink-muted)]">
          Design · Mathematics · Object study — Fibonacci Shelf, Peng Wang
        </footer>
      </div>
    </UnitCircleSectionReveal>
  );
}
