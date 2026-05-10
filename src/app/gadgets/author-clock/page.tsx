import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SiteHeader } from "@/components/home/site-header";

const HERO_IMAGE =
  "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Author%20Clock.webp";
const OG_IMAGE =
  "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Author%20Clock.jpg";
const AMAZON_URL = "https://amzn.to/42YexlD";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Author Clock",
  description:
    "A desk clock that tells time through literary quotes. E-paper display, solid white oak housing, brass base. Over 13,000 quotes from more than 2,500 authors across seven centuries of literature.",
  image: OG_IMAGE,
  brand: { "@type": "Brand", name: "Author & Co." },
  offers: {
    "@type": "Offer",
    url: AMAZON_URL,
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Amazon" },
  },
  review: {
    "@type": "Review",
    reviewBody:
      "A desk object with a clear, well-executed concept and deliberate limitations. No backlight, no alarm, no touchscreen — these are a philosophy, not an oversight. Buy it knowing what it is — slow, quiet, literary — and it delivers exactly that.",
    author: { "@type": "Organization", name: "Abakcus" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
};

export const metadata: Metadata = {
  title: "Author Clock Review — A Desk Clock That Tells Time Through Literature",
  description:
    "The Author Clock tells time through literary quotes. E-paper display, solid white oak, brass base. It raised nearly a million dollars on Kickstarter and is sold at the MoMA Design Store.",
  keywords: [
    "Author Clock",
    "Author Clock review",
    "literary clock",
    "e-paper desk clock",
    "Author and Co",
    "book quote clock",
    "MoMA design store clock",
    "Kickstarter clock",
    "Author Clock Vol 1",
    "Author Clock Vol 2",
  ],
  openGraph: {
    title: "Author Clock — A Desk Clock That Tells Time Through Literature",
    description:
      "Every minute of the day, a literary passage containing that minute appears on screen — the time highlighted, the author below it. 13,000 quotes, 2,500 authors. Sold at MoMA.",
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: "Author Clock — literary desk clock with e-paper display" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Author Clock — The Clock That Tells Time Through Books",
    description:
      "It raised nearly a million dollars on Kickstarter. It's sold at MoMA. It has parental controls. All of these things are true.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/gadgets/author-clock",
  },
};

const VERDICT = {
  good: [
    {
      label: "The concept holds up",
      text: "Not a gimmick that wears off. The randomness of the library keeps the clock unpredictable across months of daily use.",
    },
    {
      label: "The materials are honest",
      text: "White oak and brass age better than plastic. The e-paper display looks like paper. The object does what it looks like it does.",
    },
    {
      label: "WiFi updates silently",
      text: "New quotes arrive automatically. The library grows without you doing anything. No subscriptions, no app required.",
    },
  ],
  bad: [
    {
      label: "No backlight",
      text: "Unreadable in a dark room without a nearby lamp. A deliberate design choice — but one that matters if you use it as a bedside clock.",
    },
    {
      label: "E-paper flicker",
      text: "The brief screen-dark between quote refreshes is noticeable if the clock is directly in your line of sight. Less visible from across the room.",
    },
    {
      label: "Not a utility clock",
      text: "If you need to check the time quickly and move on, it's slower than a phone. The clock is not optimized for efficiency.",
    },
  ],
};

export default function AuthorClockPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="grid grid-cols-1 overflow-hidden bg-[#16110a] md:grid-cols-[1fr_44%]">
        {/* LEFT — text panel */}
        <div className="flex items-center bg-[#16110a] px-[clamp(1.5rem,6vw,4rem)] py-16 md:py-24">
          <div className="w-full max-w-lg">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
              Gadgets &amp; Gear &nbsp;·&nbsp; Literature
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2.2rem,5.5vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#f0ede8]">
              Author Clock
            </h1>
            <p className="mt-5 max-w-sm font-serif text-[1.05rem] italic leading-relaxed text-white/45">
              Most clocks tell you where you are in the day. This one tells you
              who else was there.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.58rem] uppercase tracking-[0.14em]">
              <span className="text-[#c9a84c]">E-Paper Display</span>
              <span className="text-white/20">+</span>
              <span className="text-[#a08060]">White Oak &amp; Brass</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">13,000+ Quotes</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">MoMA Design Store</span>
            </div>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#16110a] transition-opacity hover:opacity-85"
            >
              See on Amazon ↗
            </a>
          </div>
        </div>

        {/* RIGHT — product image */}
        <div className="flex items-center justify-center bg-[#16110a] px-4 py-12 md:py-0">
          <Image
            src={HERO_IMAGE}
            alt="Author Clock — literary desk clock with e-paper display, white oak housing and brass base"
            width={960}
            height={960}
            className="h-auto w-full max-w-md object-contain"
            style={{
              maskImage:
                "radial-gradient(ellipse 72% 80% at 55% 50%, black 42%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 72% 80% at 55% 50%, black 42%, transparent 78%)",
            }}
            priority
            sizes="(max-width:768px) 100vw, 44vw"
          />
        </div>
      </header>

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
          <p className="mb-14 border-b border-[var(--line)] pb-14 font-serif text-[1.45rem] italic leading-[1.5] text-[var(--ink)] sm:text-[1.65rem]">
            The Author Clock launched on Kickstarter with a $20,000 goal and
            raised $996,000. That number is not, by itself, an endorsement. But
            it does establish something: a large number of people saw a clock
            that tells time through book quotes and immediately decided they
            needed one in their home. The idea worked before the product existed.
          </p>

          {/* ── STAT ROW ── */}
          <div className="my-10 grid grid-cols-3 divide-x divide-[var(--line)] border-y border-[var(--line)]">
            {[
              { num: "$996K", label: "Raised on Kickstarter from a $20K goal" },
              { num: "13,000+", label: "Literary quotes across 2,500+ authors" },
              { num: "7", label: "Centuries of literature in the database" },
            ].map(({ num, label }) => (
              <div key={num} className="px-4 py-8 text-center">
                <span className="block font-serif text-[2rem] font-bold leading-none text-[#c9a84c] sm:text-[2.4rem]">
                  {num}
                </span>
                <p className="mt-2 font-mono text-[0.54rem] uppercase leading-[1.55] tracking-[0.1em] text-[var(--ink-muted)]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* ── PROSE 1: THE IDEA ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The idea fits in one sentence: every minute of the day, a literary
            passage containing that minute appears on screen — the time
            highlighted in the text, the author and title below it. 1,440
            minutes, over 13,000 quotes; most minutes have several options the
            clock cycles through at random. The screen is e-paper — it looks
            like a printed page, not a screen. No glow. No ticking. No alarm.
            These are not oversights. They are the product's entire personality.
          </p>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The idea itself is not new. Dutch designer Jaap Meijers built a
            desk clock from an e-reader in 2012. Johs Enevoldsen later moved it
            to the web as{" "}
            <Link href="/tools/literature-clock" className="article-euclid-link">
              Literature Clock
            </Link>
            , free and open source. The Author Clock is what happens when the
            same concept is handed to a product team with access to a machinist
            and a supply chain: solid white oak housing, brass base and crown,
            WiFi connectivity, and a retail presence at the MoMA Design Store.
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 border-l-[3px] border-[#c9a84c] py-1 pl-6 font-serif text-[1.15rem] italic leading-[1.5] text-[var(--ink)]">
            Most clocks tell you where you are in the day. This one tells you
            who else was there.
          </blockquote>

          {/* ── PROSE 2: LIVING WITH IT ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            What actually happens when you own this clock is quieter than the
            pitch suggests. You don't read every quote. Most of the time the
            clock sits at the edge of your vision, doing its job: the time is
            there when you look, wrapped in a sentence you weren't expecting.
            Occasionally a glance catches on the sentence. You read the whole
            thing. You notice who wrote it. Once in a while you write down the
            title. This is not a transformative experience. But it is a different
            texture of day than a clock with hands gives you — each time-check a
            small interruption from some character's story rather than a number
            detached from any story at all.
          </p>

          {/* ── META TABLE ── */}
          <div className="my-8 border border-[var(--line)]">
            <div className="px-5 py-3 bg-[#f5ede0]">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                Models
              </span>
            </div>
            <div className="divide-y divide-[var(--line)]">
              <div className="flex flex-wrap gap-x-6 px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#c9a84c] w-16 shrink-0 pt-0.5">Vol. 1</span>
                <span className="font-sans text-sm text-[var(--ink)] leading-relaxed flex-1">Desk or nightstand. Compact. Suits a work surface near books.</span>
              </div>
              <div className="flex flex-wrap gap-x-6 px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#c9a84c] w-16 shrink-0 pt-0.5">Vol. 2</span>
                <span className="font-sans text-sm text-[var(--ink)] leading-relaxed flex-1">Larger. Wall-mountable. Readable from across a room. The product page reads: &ldquo;Large enough to jostle for space with a copy of Anna Karenina.&rdquo;</span>
              </div>
            </div>
          </div>

          {/* ── PROSE 3: WHAT IT DOESN'T DO ── */}
          <h2 className="mb-4 mt-14 font-serif text-2xl font-bold text-[var(--ink)]">
            What It Doesn't Do
          </h2>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            No alarm. No backlight — which means in a dark room, without a lamp
            nearby, you can't read it. The e-paper refresh between quotes
            produces a brief flicker, standard for the technology but noticeable
            if the clock is in direct eyeline. The brass crown navigates settings
            at a deliberate pace. None of these are failures — they are the
            natural properties of the materials and the design priorities. The
            object is optimized for calm, not convenience. If you want to check
            the time quickly and move on, your phone is faster.
          </p>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The parental controls are real and functional. Seven centuries of
            literature contain explicit and violent passages, and the clock lets
            you filter them. The existence of this feature reveals something: the
            curators took the full range of the literary canon seriously enough
            to include difficult material, then built a filter for households
            where that matters. Both decisions seem right.
          </p>

          {/* ── NOTE BLOCK ── */}
          <div className="my-10 border-l-[3px] border-[#c9a84c] py-1 pl-6">
            <p className="mb-2 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[#c9a84c]">
              MoMA
            </p>
            <p className="text-[0.92rem] leading-[1.75] text-[var(--ink-muted)]">
              The MoMA Design Store placement matters as context rather than
              endorsement. MoMA sells objects it considers to have design merit —
              the selection is curatorial, not commercial. Someone with a
              considered view of what design means looked at this clock and found
              the concept well-executed. Whether the concept is one you want
              living on your desk is a separate question.
            </p>
          </div>

          {/* ── PROSE 4: WHO IS IT FOR ── */}
          <h2 className="mb-4 mt-14 font-serif text-2xl font-bold text-[var(--ink)]">
            Who It's For
          </h2>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The honest answer to "who is this for" is narrow but clear. It's for
            someone who reads, who works at a desk, who has a relationship with
            books that goes beyond finishing them — someone for whom a sentence
            from <em>Anna Karenina</em> appearing at 9:47 on a Tuesday morning
            is not an interruption but a small, welcome thing. If that is not
            you, the clock is an expensive object that tells time. If it is,
            it's one of the few things you can buy that changes the ambient
            texture of a room without adding any noise.
          </p>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The Author Clock's e-paper screen has no backlight — a deliberate
            choice. The screen wants to look like a page. That ambition connects
            it to the free alternative:{" "}
            <Link href="/tools/literature-clock" className="article-euclid-link">
              Literature Clock
            </Link>{" "}
            does the same thing in a browser tab at no cost. What the Author
            Clock adds is presence — a physical object on a desk that is there
            even when you're not looking at a screen. Whether that presence is
            worth the price is the only real question.
          </p>

          {/* ── VERDICT ── */}
          <div className="mt-14 border-t-2 border-[#c9a84c] pt-10">
            <p className="mb-4 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-[#c9a84c]">
              Verdict
            </p>
            <p className="mb-8 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
              A desk object with a clear, well-executed concept and deliberate
              limitations. No backlight, no alarm, no touchscreen — these are a
              philosophy, not an oversight. Buy it knowing what it is — slow,
              quiet, literary — and it delivers exactly that.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {VERDICT.good.map((v) => (
                <div
                  key={v.label}
                  className="rounded-xl border border-[var(--line)] bg-white p-5"
                >
                  <p className="mb-2 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-[#c9a84c]">
                    ↑ {v.label}
                  </p>
                  <p className="font-mono text-[0.65rem] leading-[1.6] text-[var(--ink-muted)]">
                    {v.text}
                  </p>
                </div>
              ))}
              {VERDICT.bad.map((v) => (
                <div
                  key={v.label}
                  className="rounded-xl border border-[var(--line)] bg-white p-5"
                >
                  <p className="mb-2 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-[#c83828]">
                    ↓ {v.label}
                  </p>
                  <p className="font-mono text-[0.65rem] leading-[1.6] text-[var(--ink-muted)]">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#16110a] transition-opacity hover:opacity-80"
              >
                See on Amazon ↗
              </a>
            </div>
          </div>

          {/* ── FOOTNOTES ── */}
          <div className="mt-12 border-t border-[var(--line)] pt-6">
            <p className="mb-3 font-mono text-[0.65rem] leading-[1.65] text-[var(--ink-muted)]">
              ¹ The Kickstarter campaign was run by Mechanical Design Labs, which
              later became Author &amp; Co. The campaign asked for $20,000 and
              received nearly $1,000,000 from over 7,000 backers. The product
              shipped.
            </p>
            <p className="font-mono text-[0.65rem] leading-[1.65] text-[var(--ink-muted)]">
              ² Vol. 2 product page: "Large enough to jostle for space with a
              copy of Anna Karenina." That is either the best or the worst
              marketing line depending on your tolerance for this kind of thing.
              It is at minimum accurate.
            </p>
          </div>
        </article>

        <ArticleReadMore currentSlug="author-clock" />
      </div>
    </>
  );
}
