import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

const CANONICAL = "https://abakcus.com/gadgets/chocolate-planets";
const OG_IMAGE =
  "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Martins%20Chocolatier%20Luxury%20Chocolate%20Planets.webp";

export const metadata: Metadata = {
  title: "Martin's Chocolatier Luxury Chocolate Planets — Abakcus",
  description:
    "Nine handmade Belgian chocolate truffles, each one a planet. Mercury through Neptune, plus the Sun — and Pluto still nowhere to be found.",
  authors: [{ name: "Ali Kaya" }],
  alternates: { canonical: "/gadgets/chocolate-planets" },
  keywords: [
    "Martin's Chocolatier Chocolate Planets",
    "chocolate planets gift",
    "solar system chocolate",
    "Belgian chocolate truffle gift",
    "space lover chocolate gift",
    "science gift chocolate",
    "planet shaped chocolates",
    "9 planet chocolate truffles",
    "astronomy chocolate box",
    "unique science gift",
  ],
  openGraph: {
    title: "Martin's Chocolatier Luxury Chocolate Planets",
    description:
      "Nine handmade Belgian chocolate truffles, each one a planet. Mercury through Neptune, plus the Sun — and Pluto still nowhere to be found.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-05-07",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Martin's Chocolatier Luxury Chocolate Planets — box open with nine planet truffles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin's Chocolatier Luxury Chocolate Planets",
    description:
      "Nine handmade Belgian chocolate truffles in orbital order. Jupiter is the largest chocolate in the box. Some details are not overthought.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Martin's Chocolatier Luxury Chocolate Planets",
  description:
    "Nine handmade Belgian chocolate truffles, each one a planet. Mercury through Neptune plus the Sun, each with its own filling, arranged in orbital order.",
  image: OG_IMAGE,
  brand: {
    "@type": "Brand",
    name: "Martin's Chocolatier",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.amazon.co.uk/Martins-Chocolatier-Chocolate-Planets/dp/B07H8JF6B3",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Martin's Chocolatier",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.2",
    reviewCount: "2177",
  },
  sku: "B07H8JF6B3",
  gtin: "B07H8JF6B3",
};

const PLANETS = [
  { symbol: "☀", name: "Sun", flavor: "Orange Cream", color: "#e89820" },
  { symbol: "☿", name: "Mercury", flavor: "Chilli Cherry Ganache", color: "#7a7268" },
  { symbol: "♀", name: "Venus", flavor: "Peachy Cream", color: "#c4a850" },
  { symbol: "♁", name: "Earth", flavor: "Praline Cream", color: "#2060a0" },
  { symbol: "♂", name: "Mars", flavor: "Caramel Salt", color: "#a84030" },
  { symbol: "♃", name: "Jupiter", flavor: "Praline", color: "#b89060" },
  { symbol: "♄", name: "Saturn", flavor: "Mocha Cream", color: "#c0a860" },
  { symbol: "♅", name: "Uranus", flavor: "Blueberry Ganache", color: "#50a8b8" },
  { symbol: "♆", name: "Neptune", flavor: "Toffee Caramel", color: "#2840a0" },
];

export default function ChocolatePlanetsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="grid grid-cols-1 overflow-hidden md:grid-cols-[1fr_44%]">
        {/* LEFT — deep space text panel */}
        <div className="flex items-center bg-[#0d0f1a] px-[clamp(1.5rem,6vw,4rem)] py-16 md:py-24">
          <div className="w-full max-w-lg">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
              Gadgets &amp; Gear &nbsp;·&nbsp; Science &amp; Space
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2.2rem,5.5vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#f5f0e8]">
              Martin&apos;s Chocolatier
              <br />
              Chocolate Planets
            </h1>
            <p className="mt-5 max-w-sm font-serif text-[1.05rem] italic leading-relaxed text-white/45">
              Nine handmade Belgian truffles. Eight planets plus the Sun.
              Zero Pluto.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.58rem] uppercase tracking-[0.14em]">
              <span className="text-[#c8922a]">9 Planets</span>
              <span className="text-white/20">+</span>
              <span className="text-[#7a6aaa]">Belgian Chocolate</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">107 g</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">Zero Pluto</span>
            </div>
            <a
              href="https://www.amazon.co.uk/Martins-Chocolatier-Chocolate-Planets/dp/B07H8JF6B3?th=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c8922a] px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0d0f1a] transition-opacity hover:opacity-85"
            >
              Buy on Amazon ↗
            </a>
          </div>
        </div>
        {/* RIGHT — image fills panel edge-to-edge */}
        <div className="relative min-h-[260px] overflow-hidden md:min-h-0">
          <Image
            src={OG_IMAGE}
            alt="Martin's Chocolatier Chocolate Planets — box open showing nine planet truffles in orbital order"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width:768px) 100vw, 44vw"
          />
        </div>
      </header>

      {/* ── ARTICLE ── */}
      <div className="uc-page-bg pb-16">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        <article className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-14 pb-20 text-[var(--ink)]">

          {/* ── OPENING ── */}
          <p className="mb-14 border-b border-[var(--line)] pb-14 font-serif text-[1.45rem] italic leading-[1.55] text-[var(--ink)] sm:text-[1.6rem]">
            Pluto is not in this box. It was demoted in 2006 and
            Martin&apos;s Chocolatier has chosen not to revisit that decision.
          </p>

          {/* ── INTRO PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            What you get instead is the Sun — generously reclassified as a
            bonus, so nobody feels cheated — plus every planet from Mercury to
            Neptune, each one a handmade Belgian truffle, each with its own
            filling, arranged in order of distance from whatever star your desk
            lamp is standing in for today.
          </p>

          {/* ── PLANET FLAVOR STRIP ── */}
          <div className="mb-10 overflow-hidden rounded-xl border border-[var(--line)] bg-white">
            <div className="border-b border-[var(--line)] px-6 py-4">
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                Nine truffles, nine fillings
              </p>
            </div>
            <div className="grid grid-cols-1 divide-y divide-[var(--line)] sm:grid-cols-3 sm:divide-y-0">
              {PLANETS.map((p, i) => (
                <div
                  key={p.name}
                  className={`flex items-center gap-3 px-5 py-3 ${
                    i < PLANETS.length - (PLANETS.length % 3 || 3)
                      ? "sm:border-b sm:border-[var(--line)]"
                      : ""
                  }`}
                >
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: p.color }}
                    aria-hidden
                  />
                  <span className="font-serif text-xs text-[var(--ink-muted)]">
                    <span className="font-medium text-[var(--ink)]">{p.name}</span>
                    {" — "}
                    {p.flavor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECOND PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The flavor assignments are, on paper, arbitrary. In practice,
            someone thought about them. Mercury gets Chilli Cherry Ganache —
            the planet closest to a star, scorched and volatile, naturally.
            Mars, ruddy and slightly inhospitable, is Caramel Salt. Neptune,
            the farthest, the coldest, the one that takes 165 years to complete
            a single orbit: Toffee Caramel, slow and dark and stubborn.
            Whether Philip — the Westminster-trained chef who founded the
            company — consciously matched temperament to taste, or whether this
            is all pattern recognition working overtime on a box of chocolate,
            is unclear. The result is the same either way.
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote
            className="my-10 border-l-[3px] py-1 pl-6"
            style={{ borderLeftColor: "#d4a843" }}
          >
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              Jupiter is the largest planet in the solar system. It is also the
              largest chocolate in the box. Some details are not overthought.
            </p>
          </blockquote>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The chocolates are made with 100% Belgian chocolate and finished by
            hand in Nottinghamshire.{" "}
            <ArticleProseLink
              href="/articles/dinara-kasko-kinetic-tarts"
              className="article-euclid-link"
            >
              Chocolate, when treated as a serious material, always ends up
              hand-finished.
            </ArticleProseLink>{" "}
            The box arranges them in orbital order, which means you eat Mercury
            first or you eat Neptune first, depending on how you feel about
            narrative structure. There is a correct answer to this question but
            it isn&apos;t the kind of thing worth arguing about. What is worth
            noting: the Uranus truffle is Blueberry Ganache, and this has been
            quietly funny to everyone who has read the product description since
            at least 2019.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── GIFT PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            As a gift, this requires almost no explanation — you hand someone a
            scale model of the solar system made of chocolate and the thing
            speaks for itself. It works for the science teacher, the space
            obsessive, the person who owns a telescope they never use, and the
            child who spent three months memorizing{" "}
            <ArticleProseLink
              href="/articles/al-jaghmini-astronomy-manuscript"
              className="article-euclid-link"
            >
              planet facts
            </ArticleProseLink>{" "}
            and still brings up Pluto at dinner. It works equally well for
            anyone who simply likes a good truffle and doesn&apos;t need an
            astronomical reason to eat one.
          </p>

          {/* ── CLOSING DARK PANEL ── */}
          <div
            className="my-10 overflow-hidden rounded-xl px-7 py-7 sm:px-8"
            style={{ backgroundColor: "#08090d" }}
          >
            <p
              className="font-serif text-[1.05rem] italic leading-[1.8] sm:text-[1.1rem]"
              style={{ color: "rgba(240,234,216,0.7)" }}
            >
              Nine chocolates. Nine planets. Zero Pluto. One box that is,
              against all reasonable expectation, a completely sensible object
              to exist in the world. The solar system has always been stranger
              than a diagram lets on — which is exactly{" "}
              <ArticleProseLink
                href="/articles/geometry-behind-pringles"
                className="article-euclid-link"
              >
                why it keeps showing up in unexpected places
              </ArticleProseLink>
              .
            </p>
          </div>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex items-start gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span
              className="mt-0.5 shrink-0 rounded-full px-3.5 py-1.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em]"
              style={{ backgroundColor: "#08090d", color: "#d4a843" }}
            >
              Great gift
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                A scale model of the solar system you can eat. Order well in
                advance of summer — Jupiter and Saturn have a documented
                tendency to merge in warm weather.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            <a
              href="https://www.amazon.co.uk/Martins-Chocolatier-Chocolate-Planets/dp/B07H8JF6B3?th=1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--ink)]"
            >
              <em>Martin&apos;s Chocolatier Luxury Chocolate Planets</em>
            </a>
            <br />
            Martin&apos;s Chocolatier &nbsp;·&nbsp; Nottinghamshire, UK
            &nbsp;·&nbsp; 107 g &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
      </div>
    </>
  );
}
