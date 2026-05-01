import type { ReactNode } from "react";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const HERO_IMAGE =
  "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Killed%20by%20Google.png";

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
    <div
      className="my-8 flex flex-wrap items-center justify-between gap-4 border-l-4 px-5 py-5"
      style={{
        borderColor: "#8a2218",
        backgroundColor: "color-mix(in srgb, #f7e8e6 30%, white)",
      }}
    >
      <div>
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
          Killed by Google — Visualized
        </p>
        <p className="mt-0.5 font-serif text-[0.92rem] italic text-[var(--ink-muted)]">
          299 discontinued products, chronological order, with context.
        </p>
      </div>
      <a
        href="https://sheets.works/killed-by-google"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 border border-[#8a2218] px-5 py-2.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#8a2218] transition-colors hover:bg-[#8a2218] hover:text-white"
      >
        View the Visualization →
      </a>
    </div>
  );
}

function StatsPanel() {
  return (
    <div className="my-10 border-b border-t border-[var(--line)] py-6">
      <p className="mb-6 font-sans text-[0.58rem] uppercase tracking-[0.28em] text-[var(--ink-muted)]">
        The numbers
      </p>
      <div className="grid grid-cols-3 divide-x divide-[var(--line)]">
        <div className="pr-4">
          <span className="block font-serif text-[2.2rem] font-medium leading-none text-[var(--ink)]">
            299
          </span>
          <span className="mt-2 block font-sans text-[0.58rem] uppercase leading-relaxed tracking-[0.08em] text-[var(--ink-muted)]">
            products retired
            <br />
            since 2006
          </span>
        </div>
        <div className="px-4">
          <span className="block font-serif text-[2.2rem] font-medium leading-none text-[var(--ink)]">
            5.2y
          </span>
          <span className="mt-2 block font-sans text-[0.58rem] uppercase leading-relaxed tracking-[0.08em] text-[var(--ink-muted)]">
            average product
            <br />
            lifespan
          </span>
        </div>
        <div className="pl-4">
          <span
            className="block font-serif text-[2.2rem] font-medium leading-none"
            style={{ color: "#8a2218" }}
          >
            37
          </span>
          <span className="mt-2 block font-sans text-[0.58rem] uppercase leading-relaxed tracking-[0.08em] text-[var(--ink-muted)]">
            retired in 2019
            <br />
            alone — the record
          </span>
        </div>
      </div>
    </div>
  );
}

type BarRowData = {
  year: number;
  count: number;
  spike?: boolean;
  annotation?: string;
};

const BAR_DATA: BarRowData[] = [
  { year: 2006, count: 4 },
  { year: 2007, count: 4 },
  { year: 2008, count: 7 },
  { year: 2009, count: 10 },
  { year: 2010, count: 6 },
  { year: 2011, count: 26, spike: true, annotation: "← Larry Page returns" },
  { year: 2012, count: 23, spike: true },
  { year: 2013, count: 13 },
  { year: 2014, count: 12 },
  { year: 2015, count: 14 },
  { year: 2016, count: 21 },
  { year: 2017, count: 11 },
  { year: 2018, count: 15 },
  { year: 2019, count: 37, spike: true, annotation: "← Sundar's \"year of focus\"" },
  { year: 2020, count: 25 },
  { year: 2021, count: 32 },
  { year: 2022, count: 15 },
  { year: 2023, count: 14 },
  { year: 2024, count: 8 },
  { year: 2025, count: 1 },
];

const MAX_COUNT = 37;

function BarChart() {
  return (
    <div className="my-6 space-y-1.5">
      {BAR_DATA.map(({ year, count, spike, annotation }) => {
        const pct = (count / MAX_COUNT) * 100;
        return (
          <div key={year} className="flex items-center gap-2">
            <span className="w-8 shrink-0 text-right font-mono text-[0.56rem] text-[var(--ink-muted)]">
              {year}
            </span>
            <div className="relative h-3 flex-1 bg-[var(--pastel-peach,#ede6d8)]">
              <div
                className="h-full transition-all"
                style={{
                  width: `${pct}%`,
                  backgroundColor: spike ? "#c4392a" : "#b5956a",
                  opacity: spike ? 0.9 : 0.55,
                }}
              />
            </div>
            <span
              className="w-5 shrink-0 font-mono text-[0.58rem] font-medium"
              style={{ color: spike ? "#8a2218" : "var(--ink-muted)" }}
            >
              {count}
            </span>
            {annotation && (
              <span
                className="hidden whitespace-nowrap font-mono text-[0.52rem] uppercase tracking-[0.06em] sm:block"
                style={{ color: "#8a2218" }}
              >
                {annotation}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function HeroImage() {
  return (
    <figure
      className="my-8 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL.rose }}
    >
      <ArticleImageLightbox
        src={HERO_IMAGE}
        alt="Killed by Google — visualization of 299 discontinued Google products"
      >
        <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Killed by Google — visualization of 299 discontinued Google products"
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        killedbygoogle.com and sheets.works — every product, every date, in order.
      </figcaption>
    </figure>
  );
}

export function KilledByGoogleArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        {/* Header */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Data · Technology · Visualization · 2006 – 2026
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[var(--ink)]">
            299 Products.
            <br />
            One Graveyard.
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Google has been discontinuing products since 2006. The pattern is
            not random — it never is.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            There is a website called{" "}
            <a
              href="https://killedbygoogle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[var(--line)] text-inherit hover:border-current"
            >
              killedbygoogle.com
            </a>
            . It lists every product, service, and hardware device that Google
            has shipped and subsequently discontinued since 2006. As of today
            the count stands at 299. The average lifespan of a Google product:
            5.2 years. Long enough to build a habit. Short enough to break it
            without warning.
          </p>

          <section data-uc-section className="mt-10">
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              A data visualization published by sheets.works takes this dataset
              and does something useful with it: it plots the retirements
              against time, annotates the spikes, and tells the story underneath
              the numbers. That story turns out to have a very specific shape —
              the kind that becomes obvious only once someone{" "}
              <ArticleProseLink href="/tools/river-runner">
                makes the data visible
              </ArticleProseLink>
              .
            </p>

            <CtaBlock />
            <StatsPanel />
          </section>

          {/* Hero image — close to the title */}
          <HeroImage />

          <section data-uc-section className="mt-14">
            <SectionHead title="Retirements by Year" />
            <p className="mb-6 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The data has two obvious anomalies. In every other year, Google
              retires a median of 13 products — maintenance-level churn. Then
              there are 2011–2012, and then 2019. Together these three years
              account for 86 of the 299 retirements, nearly 29% of the total,
              compressed into 36 months out of 240.
            </p>
            <BarChart />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="April 2011: More Wood Behind Fewer Arrows" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Larry Page returned as CEO on April 4, 2011. Three months later,
              on the Q2 earnings call, he said it plainly:{" "}
              <em>more wood behind fewer arrows.</em> Aardvark — a social search
              startup acquired for $50 million — shut down. Google Buzz wound
              down. Google Notebook was retired. By the end of 2012, 49 products
              had been discontinued in what engineers called the great refocus.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Google Reader — which at the time had around 30 million active
              users — was gone. Google Health was gone. iGoogle was gone. Google
              Video was gone. The acqui-hire became the era&apos;s mechanism:
              buy a company, absorb the engineers, close the product. Sparrow,
              the most beloved Mac email client of its era, ended active
              development within months of acquisition. Google Wave, promoted as
              the future of communication, was abandoned less than three months
              after its public launch.
            </p>

            <PullQuote cite="Larry Page, Q2 2011 Earnings Call, July 14, 2011">
              &ldquo;More wood behind fewer arrows.&rdquo;
            </PullQuote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="2019: The Year of Focus" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Sundar Pichai&apos;s 2019 produced 37 shutdowns in twelve months
              — more than any other year before or since. In March 2019 alone,
              Google published a cluster of shutdown notices covering Inbox,
              Allo, Hangouts on Air, and Google+. Then hardware: Daydream, the
              VR platform. Google Clips, the AI camera. Chromecast Audio —
              discontinued. Then infrastructure: goo.gl, the URL shortener that
              thousands of developers had built workflows around; Google Cloud
              Messaging; Google Fusion Tables, which had become the data
              visualization tool of choice for journalists.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Where Page&apos;s refocus was drawn out over two years, Pichai&apos;s
              arrived in a wave. Both spikes were deliberate. Both had a phrase
              attached. What changed between them was the scale: Page was
              pruning experiments; Pichai was retiring products that people
              actually used every day. The quiet side of this is what{" "}
              <ArticleProseLink href="/tools/barbara-iweins-katalog">
                Barbara Iweins discovered in her own inventory
              </ArticleProseLink>{" "}
              — most things accumulate without anyone deciding they should.
            </p>

            <PullQuote cite="sheets.works">
              Most of them wound down on a normal Tuesday.
            </PullQuote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="What the Visualization Shows" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The visualization presents all 299 products in chronological order
              and then narrows to the two corporate moments that explain the
              shape of the timeline. The bar chart is the key artifact: fourteen
              years of roughly stable attrition interrupted twice by the same
              pattern, a new executive&apos;s first act of discipline translated
              directly into a list of shutdowns.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The ending note is dry and accurate. Google currently maintains at
              least five separate ways to send a message: Google Chat, Google
              Meet, Google Messages, Google Voice, and Gmail Chat. By the next
              refocus, some will join this list. The visualization does not
              pretend to know which ones. It simply observes that the pattern
              has run twice, and leaves the inference to the reader — the same
              move{" "}
              <ArticleProseLink href="/articles/feynman-technique">
                Feynman described as the only honest way to know if you
                understand something
              </ArticleProseLink>
              .
            </p>
          </section>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
