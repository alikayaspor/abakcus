import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

const COVER =
  "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/How%20Smart%20Machines%20Think%20by%20Sean%20Gerrish.jpg";
const CANONICAL = "https://abakcus.com/books/how-smart-machines-think";

export const metadata: Metadata = {
  title: "How Smart Machines Think — Sean Gerrish | Abakcus",
  description:
    "Sean Gerrish wrote this book in 2018. Most of what he called 'smart machines' now qualify as antiques. That makes it more valuable, not less — the foundations he explains are still running inside today's AI.",
  authors: [{ name: "Ali Kaya", url: "https://abakcus.com" }],
  keywords: [
    "How Smart Machines Think",
    "Sean Gerrish",
    "MIT Press",
    "machine learning book",
    "artificial intelligence introduction",
    "deep learning explained",
    "reinforcement learning",
    "recommendation systems",
    "AI for beginners",
    "machine learning history",
    "AlphaGo",
    "Netflix prize",
    "math behind AI",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How Smart Machines Think — Sean Gerrish",
    description:
      "Sean Gerrish wrote this book in 2018. Most of what he called 'smart machines' now qualify as antiques. That makes it more valuable, not less.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-05-08",
    locale: "en_US",
    images: [
      {
        url: COVER,
        width: 800,
        height: 1200,
        alt: "How Smart Machines Think by Sean Gerrish — MIT Press 2018",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Smart Machines Think — Sean Gerrish",
    description:
      "Written in 2018, before ChatGPT. The foundations it explains are still running inside today's models.",
    images: [COVER],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "How Smart Machines Think — Book Review",
  description:
    "Sean Gerrish wrote this book in 2018. Most of what he called 'smart machines' now qualify as antiques. That makes it more valuable, not less.",
  url: CANONICAL,
  datePublished: "2026-05-08",
  author: {
    "@type": "Person",
    name: "Ali Kaya",
    url: "https://abakcus.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Abakcus",
    url: "https://abakcus.com",
  },
  itemReviewed: {
    "@type": "Book",
    name: "How Smart Machines Think",
    author: {
      "@type": "Person",
      name: "Sean Gerrish",
    },
    publisher: {
      "@type": "Organization",
      name: "MIT Press",
    },
    datePublished: "2018",
    numberOfPages: 312,
    isbn: "9780262038836",
    image: COVER,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: 4,
    bestRating: 5,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://abakcus.com" },
      { "@type": "ListItem", position: 2, name: "Books", item: "https://abakcus.com/books" },
      { "@type": "ListItem", position: 3, name: "How Smart Machines Think", item: CANONICAL },
    ],
  },
};

export default function HowSmartMachinesThinkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#0c1824] pb-0">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #060d14 0%, #0c1824 100%)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#4a8cc4 1px, transparent 1px), linear-gradient(90deg, #4a8cc4 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 text-center md:flex-row md:gap-16 md:py-28 md:text-left">
            {/* Cover */}
            <div className="w-52 shrink-0 sm:w-64 md:w-72">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.85)]"
                style={{ aspectRatio: "2/3" }}
              >
                <Image
                  src={COVER}
                  alt="How Smart Machines Think by Sean Gerrish — MIT Press 2018 book cover"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 208px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#4a8cc4]">
                On the Book &nbsp;·&nbsp; 2018 &nbsp;·&nbsp; MIT Press
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2rem,6vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#f0f4f8]">
                Reading a Book<br />About the Future<br />
                <em className="not-italic text-[#4a8cc4]">After the Future Arrived</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#6a8aaa]">
                Most of what this book calls &ldquo;smart machines&rdquo; now qualify as antiques. That makes it more valuable, not less.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#2a3a4a]">
                Sean Gerrish &nbsp;/&nbsp; 312 pages &nbsp;/&nbsp; Google ML engineer &nbsp;/&nbsp; Princeton PhD
              </p>
              <a
                href="https://amzn.to/3QZKbMX"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4a8cc4] px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#060d14] transition-opacity duration-200 hover:opacity-85"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>

        {/* Book meta strip */}
        <div className="relative z-10 border-t border-white/5 bg-white/[0.03]">
          <div className="mx-auto flex max-w-[var(--page-max)] flex-wrap gap-0 divide-x divide-white/5 px-[var(--page-pad)]">
            {[
              { label: "Author", val: "Sean Gerrish" },
              { label: "Publisher", val: "MIT Press" },
              { label: "Year", val: "2018" },
              { label: "Pages", val: "312" },
              { label: "Background", val: "Google ML · Princeton PhD" },
            ].map(({ label, val }) => (
              <div key={label} className="px-5 py-4 first:pl-0">
                <p className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-[#3a5a7a]">
                  {label}
                </p>
                <p className="mt-0.5 font-serif text-[0.88rem] text-[#8aaac4]">
                  {val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── ARTICLE ── */}
      <div className="uc-page-bg pb-16">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/books"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← All books
          </Link>
        </div>

        <article
          className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-14 pb-20 text-[var(--ink)]"
          itemScope
          itemType="https://schema.org/Review"
        >
          <meta itemProp="itemReviewed" content="How Smart Machines Think by Sean Gerrish" />
          <meta itemProp="author" content="Abakcus" />

          {/* ── DROP-CAP INTRO ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] text-[var(--ink)] sm:text-[5.2rem]"
              aria-hidden="true"
            >
              I
            </span>
            n 2018, the year this book came out, the AI headlines looked like this: AlphaGo beat the Go world champion. IBM Watson triumphed on Jeopardy. Netflix had just closed a million-dollar competition for a better recommendation algorithm. Self-driving cars were navigating desert roads in DARPA challenges. These were the frontier events of the moment — the things that came to mind when someone asked what machines could do. Gerrish walked through each one: how it worked, what was underneath, which mathematics made it possible. The book did exactly what it set out to do.
          </p>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Then 2022 arrived. ChatGPT launched. And suddenly all those frontier events started to look like items in an antique shop. The distance between Watson parsing a Jeopardy clue and GPT-4 analyzing a novel is roughly the distance between a horse-drawn cart and a commercial jet. Gerrish&apos;s book did not see this coming. It couldn&apos;t have — nobody did in 2018. But that doesn&apos;t make the book obsolete. Strangely, it does something closer to the opposite.
          </p>

          {/* ── PULL QUOTE 1 ── */}
          <blockquote className="my-10 border-l-[3px] border-[#4a8cc4] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              The foundations Gerrish describes are still running inside today&apos;s models. The building on top just got much taller.
            </p>
          </blockquote>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The deep learning, reinforcement learning, and recommendation systems Gerrish explains are still operating inside current models. Beneath ChatGPT are transformers. Beneath transformers are attention mechanisms. Beneath attention mechanisms are matrix operations. Gerrish explains the first links in this chain clearly. Understand a system that teaches itself to play Atari and you understand reinforcement learning. Understand reinforcement learning and the concept of how a language model gets &ldquo;rewarded&rdquo; during training becomes much less mysterious. The book is structured to build in exactly this order, and the sequencing holds.
          </p>

          {/* ── DIVIDER ── */}
          <div className="clear-both my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The Netflix chapter is a good example of how Gerrish works. In 2006, Netflix offered a million dollars to any team that could improve their recommendation algorithm by ten percent. The competition ran for three years. A winning team eventually claimed the prize — but Netflix had since pivoted to streaming and realized the algorithm couldn&apos;t be deployed in production. Too complex, too slow. A million-dollar solution that never ran. Gerrish uses this story to explain ensemble methods: how hundreds of different algorithms playing the same game together outperform any single one. This is an idea that still applies to how large language models are trained today.
          </p>

          {/* ── SCENE BLOCK ── */}
          <div className="mb-10 overflow-hidden rounded-xl bg-[#0c1824] px-7 py-7 sm:px-8 sm:py-8">
            <p className="mb-4 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/30">
              Teaching a computer by giving it treats
            </p>
            <p className="mb-4 font-serif text-[1.05rem] italic leading-[1.85] text-white/75 sm:text-[1.1rem]">
              How do you teach a computer to play Breakout? You don&apos;t write rules. You give it one instruction: increase the score. The system presses buttons at random. Then it notices that moving the paddle in a certain direction correlates with a higher score. It reinforces that.
            </p>
            <p className="mb-4 font-serif text-[1.05rem] italic leading-[1.85] text-white/75 sm:text-[1.1rem]">
              After thousands of attempts, it discovers strategies no human would think to try — like punching the ball through a gap in the top corner and letting it ricochet endlessly from behind.{" "}
              <span className="text-[#4a8cc4]">Nobody taught it this. It found it.</span>
            </p>
            <p className="font-serif text-[1.05rem] italic leading-[1.85] text-white/50 sm:text-[1.1rem]">
              This is reinforcement learning. And it is still the mechanism underneath how today&apos;s most capable models are shaped after training.
            </p>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            This is a pedagogically efficient example because it makes the abstract definition of reinforcement learning concrete. And that is what Gerrish does throughout: he anchors complex algorithmic ideas to reference points everyone already knows — driving a car, recommending a film, playing a game. Someone with a mathematics PhD can read this book; so can someone with high school math. Both will learn different things. Both will learn something. It shares that quality with the best science writing — the kind that makes you feel like you&apos;re understanding something real,{" "}
            <ArticleProseLink href="/articles/feynman-technique" className="underline underline-offset-2 hover:text-[#4a8cc4]">
              rather than memorizing a name for it
            </ArticleProseLink>.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── PULL QUOTE 2 ── */}
          <blockquote className="my-10 border-l-[3px] border-[#4a8cc4] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              Gerrish&apos;s real achievement isn&apos;t technical accuracy. It&apos;s that a Google engineer chose to explain his own field from the outside rather than from within it.
            </p>
          </blockquote>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The book has a real limitation and it is worth naming: Gerrish never changes register. Every chapter moves through the same rhythm — define the problem, give historical context, explain the technical idea with a simple example, show the result. In the first five chapters this works well. By the tenth it starts to feel like a pattern. The second half of the book isn&apos;t as alive as the first. The Watson chapters in particular lose some of the balance between information, context, and momentum that the earlier sections handle well.
          </p>

          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Still: most introductory books about artificial intelligence are either too technical to finish or too vague to learn from. Gerrish&apos;s book occupies the narrow region between those two failure modes. In 2026, when someone asks how any of this actually works, having read this book is still a reasonable place to start — not because it covers the current state of the field, but because the concepts it explains are the same ones the current state of the field is built on. If you want to understand why{" "}
            <ArticleProseLink href="/books/surely-youre-joking-mr-feynman" className="underline underline-offset-2 hover:text-[#4a8cc4]">
              curiosity is the right attitude toward complex systems
            </ArticleProseLink>
            , Feynman is where you go. If you want to understand what those systems actually do under the hood — this is where you start.
          </p>

          {/* ── FOOTNOTES ── */}
          <div className="my-10 border-t border-[var(--line)] pt-6 space-y-4">
            <p className="font-mono text-[0.65rem] leading-[1.7] text-[var(--ink-muted)]">
              <sup>1</sup> The foreword was written by Kevin Scott, then CTO of Microsoft. He describes the book as &ldquo;the best introduction to AI that shows it isn&apos;t magic.&rdquo; In 2026, that sentence is simultaneously accurate and inadequate — which is itself an interesting place to be.
            </p>
            <p className="font-mono text-[0.65rem] leading-[1.7] text-[var(--ink-muted)]">
              <sup>2</sup> Gerrish devotes considerable space to explaining why StarCraft remains an unsolved problem for AI — too complex, too real-time, too many moving parts. AlphaStar beat professional players the following year. The problem Gerrish called unsolvable got solved while the book was still in print. That is the best footnote in the book, and it isn&apos;t in the book.
            </p>
          </div>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest text-[#4a8cc4]">
              ★★★★☆
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                Written before the world changed, and more useful because of it. The foundations Gerrish explains — reinforcement learning, ensemble methods, recommendation systems — are still the floor every modern AI model stands on.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            Sean Gerrish —{" "}
            <a
              href="https://amzn.to/3QZKbMX"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#4a8cc4]"
            >
              <em>How Smart Machines Think</em>
            </a>
            <br />
            MIT Press, 2018 &nbsp;·&nbsp; 312 pages &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="how-smart-machines-think" />
      </div>
    </>
  );
}
