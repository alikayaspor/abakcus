import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

export const metadata: Metadata = {
  title: "Hagoromo Fulltouch Chalk — The Mathematician's Cult Object",
  description:
    "A Stanford professor once woke at midnight, saw a news alert, and immediately cleared Amazon's entire US stock. It was just chalk. Or was it?",
  openGraph: {
    title: "Hagoromo Fulltouch Chalk — The Mathematician's Cult Object",
    description:
      "A Stanford professor once woke at midnight, saw a news alert, and immediately cleared Amazon's entire US stock. It was just chalk. Or was it?",
    images: [
      {
        url: "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Hagoromo%20Chalk.jpg",
        width: 1200,
        height: 800,
        alt: "Hagoromo Fulltouch Chalk",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hagoromo Fulltouch Chalk — The Mathematician's Cult Object",
    description:
      "A Stanford professor once woke at midnight, saw a news alert, and immediately cleared Amazon's entire US stock. It was just chalk. Or was it?",
    images: [
      "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Hagoromo%20Chalk.jpg",
    ],
  },
  alternates: {
    canonical: "/gadgets/hagoromo-chalk",
  },
};

const TESTIMONIALS = [
  {
    attr: "Dave Bayer — Columbia",
    quote:
      "It's like skiing on fresh powder, or waterskiing at dawn on a calm lake.",
  },
  {
    attr: "David Eisenbud — Berkeley",
    quote:
      "The legend is that it's impossible to write a false theorem using Hagoromo. I think I've disproved that many times.",
  },
  {
    attr: "Satyan Devadoss — Williams",
    quote:
      "With Hagoromo chalk, the mathematics practically writes itself.",
  },
  {
    attr: "Wei Ho — Michigan",
    quote:
      "It writes much more smoothly than any other chalk I have ever used.",
  },
];

const ANATOMY = [
  {
    key: "Coating",
    val: "Thin transparent enamel. Prevents crumbling, eliminates dust, protects the chalk from your hand's moisture.",
  },
  {
    key: "Core",
    val: "Dense calcium carbonate — harder than standard chalk, which means less breakage and a longer-lasting stick.",
  },
  {
    key: "Raw material",
    val: "Imported Japanese sea shells for consistency — a detail that explains the unusually uniform texture.",
  },
  {
    key: "Feel",
    val: "Smooth without slipping. Responsive without dragging. No chalk dust, no residue on your fingers.",
  },
];

const TIMELINE = [
  {
    year: "1932",
    event:
      "Founded as Nihon Chalk Seizosho in Nagoya, Japan. Factory destroyed in WWII, rebuilt in 1947 as Hagoromo Bungu.",
  },
  {
    year: "1990",
    event:
      "Peak production: 90 million sticks a year. American mathematicians begin discovering it — a quiet cult begins to form.",
  },
  {
    year: "2000s",
    event:
      "Word spreads through mathematics departments. Professors start hoarding, rationing, saving it for important lectures only.",
  },
  {
    year: "2015",
    event:
      "Hagoromo Bungu closes. Takayasu Watanabe, ill and without a successor, shuts down production. \u201cChalk apocalypse\u201d — professors clear Amazon overnight.",
  },
  {
    year: "2016",
    event:
      "Korean entrepreneur Shin Hyeong-seok acquires the formula, the machines, and Watanabe\u2019s blessing. Production resumes in South Korea.",
  },
  {
    year: "Today",
    event:
      "Mathematicians who tested the new production: indistinguishable from the original. The chalk endures.",
  },
];

export default function HagoromoChalkPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO — full-bleed photo with overlay ── */}
      <header className="relative min-h-[22rem] overflow-hidden md:min-h-[28rem]">
        {/* background photo */}
        <Image
          src="https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Hagoromo%20Chalk.jpg"
          alt="Hagoromo Fulltouch Chalk"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* dark gradient overlay — left heavy so text is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,18,10,0.92) 0%, rgba(10,18,10,0.75) 50%, rgba(10,18,10,0.25) 100%)",
          }}
        />
        {/* text */}
        <div className="relative z-10 flex h-full min-h-[22rem] items-center px-[clamp(1.5rem,6vw,4rem)] py-16 md:min-h-[28rem] md:py-24">
          <div className="max-w-lg">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
              Gadgets &amp; Gear &nbsp;·&nbsp; Mathematics &amp; Tools
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2.4rem,6.5vw,4.8rem)] font-bold leading-[1.0] tracking-tight text-[#f5f2ec]">
              Hagoromo Fulltouch Chalk
            </h1>
            <p className="mt-5 max-w-md font-serif text-[1.05rem] italic leading-relaxed text-white/45">
              A Stanford professor once woke at midnight, saw a news alert, and
              immediately cleared Amazon&apos;s entire US stock. It was just chalk.
              Or was it?
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/25">
              <span>Sejongmall, South Korea</span>
              <span>/</span>
              <span>Original: Hagoromo Bungu, Nagoya 1932–2015</span>
            </div>
            <a
              href="https://amzn.to/4vNkgrR"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f5f2ec] px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0f1a0f] transition-opacity hover:opacity-80"
            >
              Buy on Amazon ↗
            </a>
          </div>
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
          <p className="mb-6 font-serif text-[1.45rem] italic leading-[1.55] text-[var(--ink)] sm:text-[1.6rem]">
            A Stanford mathematics professor reads in the middle of the night
            that the Japanese company has closed.
          </p>
          <p className="mb-14 border-b border-[var(--line)] pb-14 font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink-muted)] sm:text-[1.3rem]">
            He goes straight to Amazon and buys every remaining box for sale in
            the United States.
          </p>

          {/* ── INTRO PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            It was just chalk. White sticks. The kind of object that disappears
            into the background of a classroom so completely you stop seeing it.
            And yet: mathematicians were hoarding it, rationing it, saving it for
            their most important lectures. Trading it in university corridors like
            something precious.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Because for them, it was. The{" "}
            <ArticleProseLink
              href="/articles/feynman-technique"
              className="article-euclid-link"
            >
              blackboard
            </ArticleProseLink>{" "}
            is not furniture. For a mathematician, it is the primary thinking
            surface — the place where ideas become visible before they become
            permanent. What you hold in your hand when you approach it matters
            more than it should.
          </p>

          {/* ── BLACKBOARD ── */}
          <div className="mb-10 overflow-hidden rounded-xl bg-[#111a11] px-7 py-8 sm:px-9">
            <p className="mb-7 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/25">
              What mathematicians say
            </p>
            <div className="flex flex-col gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.attr} className="flex flex-col gap-1.5 sm:flex-row sm:gap-5">
                  <p className="shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-white/25 sm:w-44 sm:pt-[0.3rem]">
                    {t.attr}
                  </p>
                  <p className="font-serif text-[0.95rem] italic leading-relaxed text-[#f5f2ec]/75 sm:text-[1rem]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECOND PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            So what actually makes it different? The answer is almost
            embarrassingly simple: a coating. Every Hagoromo stick has a thin,
            transparent enamel layer on the outside. That coating stops the chalk
            from crumbling in your hand — no powdering, no dust cloud, no white
            fingers. The stick survives contact with skin. And on the board, the
            sensation is completely unlike any other chalk: smooth, controlled,
            almost velvety. You feel the resistance of the surface without
            fighting it.
          </p>

          {/* ── ANATOMY ── */}
          <div className="mb-10 overflow-hidden rounded-xl border border-[var(--line)] bg-white">
            <div className="border-b border-[var(--line)] px-6 py-4">
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                What&rsquo;s inside — and outside
              </p>
            </div>
            <div className="divide-y divide-[var(--line)]">
              {ANATOMY.map((a) => (
                <div key={a.key} className="flex gap-5 px-6 py-4">
                  <p className="w-28 shrink-0 font-sans text-[0.72rem] font-medium text-[var(--ink)]">
                    {a.key}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                    {a.val}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 border-l-[3px] border-[var(--ink-muted)] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              Mathematicians weren&apos;t hoarding chalk. They were hoarding a
              feeling — the clarity that comes when the right tool meets the
              right moment.
            </p>
          </blockquote>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">§</span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── SECTION HEADER ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">02</span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug text-[var(--ink)] sm:text-[1.15rem]">
              A brief history
            </h2>
          </div>

          {/* ── TIMELINE ── */}
          <div className="mb-10 overflow-hidden rounded-xl border border-[var(--line)]">
            {TIMELINE.map((row, i) => (
              <div
                key={row.year}
                className={`flex gap-5 px-5 py-4 sm:px-6 ${
                  i < TIMELINE.length - 1 ? "border-b border-[var(--line)]" : ""
                } ${i % 2 === 0 ? "bg-white" : "bg-[var(--bg,#faf9f7)]"}`}
              >
                <p className="w-12 shrink-0 font-mono text-[0.72rem] font-medium text-[var(--ink-muted)] pt-[0.2rem]">
                  {row.year}
                </p>
                <p className="font-serif text-[0.95rem] italic leading-relaxed text-[var(--ink)]">
                  {row.event}
                </p>
              </div>
            ))}
          </div>

          {/* ── THIRD PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The story of Hagoromo has one more detail worth noting. When
            Takayasu Watanabe learned that mathematicians on the other side of
            the world were buying enough chalk to last fifteen years — that they
            considered his family&apos;s product irreplaceable — he was genuinely
            astonished. He had no idea. He did not know his chalk had become a
            cult object, a symbol, something people cared about deeply.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            He found out because the orders suddenly stopped making sense.
          </p>

          {/* ── SECOND IMAGE ── */}
          <figure className="mb-10 -mx-[var(--page-pad)]">
            <Image
              src="https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Hagoromo%20Chalk%202.webp"
              alt="Hagoromo Fulltouch Chalk — individual sticks"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <figcaption className="mt-3 px-[var(--page-pad)] text-center font-sans text-xs text-[var(--ink-muted)]">
              The thin enamel coating — invisible, essential.
            </figcaption>
          </figure>

          {/* ── CLOSING QUOTE BOX ── */}
          <div className="my-10 overflow-hidden rounded-xl bg-[#111a11] px-7 py-7 sm:px-8">
            <p className="font-serif text-[1.05rem] italic leading-[1.8] text-[#f5f2ec]/70 sm:text-[1.1rem]">
              Perhaps mathematicians weren&apos;t really hoarding chalk at all.
              Perhaps they were hoarding something else — the moment when you
              stand in front of a{" "}
              <ArticleProseLink
                href="/books/oliver-byrne-euclid"
                className="article-euclid-link"
              >
                blackboard
              </ArticleProseLink>
              , the right tool in your hand, and thought flows from mind to
              surface without resistance. The problem is already there. You just
              need something worthy of writing it down.
            </p>
          </div>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">§</span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── VIDEO ── */}
          <div className="mb-10">
            <div className="overflow-hidden rounded-xl" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/PhNUjg9X4g8"
                title="Hagoromo Fulltouch Chalk — video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex items-start gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="mt-0.5 shrink-0 rounded-full bg-[#0f1a0f] px-3.5 py-1.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#f5f2ec]">
              Essential
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                Not a tool that changes how you think — but one that gets out
                of the way while you do. For anyone who works at a blackboard,
                there is before Hagoromo and after. The difference is quieter
                than you&apos;d expect, and completely impossible to go back from.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            <a
              href="https://amzn.to/4vNkgrR"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--ink)]"
            >
              <em>Hagoromo Fulltouch Chalk</em>
            </a>
            <br />
            Sejongmall, South Korea &nbsp;·&nbsp; Original: Hagoromo Bungu,
            Nagoya 1932–2015 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
      </div>
    </>
  );
}
