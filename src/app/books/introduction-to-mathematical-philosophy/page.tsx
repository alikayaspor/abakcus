import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

const COVER =
  "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Introduction%20to%20Mathematical%20Philosophy%20by%20Bertrand%20Russell.png";

const LOGIC_BLUE = "#3a4a5c";
const LOGIC_BLUE_DIM = "#2a3747";
const DARK = "#1c1a14";
const DARK_SURFACE = "#252218";

export const metadata: Metadata = {
  title: "Introduction to Mathematical Philosophy — Bertrand Russell",
  description:
    "Written in Brixton Prison in 1918, Russell's Introduction to Mathematical Philosophy asks what the number 3 actually is — and answers with 208 pages of surprising clarity.",
  openGraph: {
    title: "Introduction to Mathematical Philosophy — Bertrand Russell",
    description:
      "Written in Brixton Prison in 1918. What is the number 3? Russell takes 208 pages and a cell to answer it.",
    images: [{ url: COVER, width: 800, height: 1200, alt: "Introduction to Mathematical Philosophy — Bertrand Russell" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction to Mathematical Philosophy — Bertrand Russell",
    description:
      "Six months in Brixton Prison. Four hours of writing per day. The result: the clearest introduction to the foundations of mathematics ever written.",
    images: [COVER],
  },
  alternates: {
    canonical: "/books/introduction-to-mathematical-philosophy",
  },
};

export default function IntroductionToMathematicalPhilosophyPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden pb-0" style={{ background: DARK }}>
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${LOGIC_BLUE_DIM} 0%, ${DARK} 100%)`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 text-center md:flex-row md:gap-16 md:py-28 md:text-left">
            {/* Cover */}
            <div className="w-48 shrink-0 sm:w-60 md:w-64">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.85)]"
                style={{ aspectRatio: "2/3" }}
              >
                <Image
                  src={COVER}
                  alt="Introduction to Mathematical Philosophy — Bertrand Russell, 1919"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 192px, 256px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p
                className="font-mono text-[0.68rem] uppercase tracking-[0.22em]"
                style={{ color: "#8a9ab0" }}
              >
                Book Review &nbsp;·&nbsp; 1919 &nbsp;·&nbsp; George Allen &amp; Unwin
              </p>
              <h1 className="mt-5 font-serif text-[clamp(1.8rem,5.5vw,3.8rem)] font-medium leading-[1.08] tracking-tight text-[#f0ebe0]">
                <em>Introduction to<br />Mathematical<br /></em>
                <em style={{ color: "#8a9ab0" }}>Philosophy</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed" style={{ color: "rgba(180,170,155,0.6)" }}>
                Written in a prison cell. Published to last a century.
              </p>
              <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.15em]" style={{ color: "#4a4840" }}>
                Bertrand Russell &nbsp;/&nbsp; 208 pages &nbsp;/&nbsp; 1918–1919
              </p>
              <a
                href="https://amzn.to/3OVytSM"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-opacity duration-200 hover:opacity-85"
                style={{ background: LOGIC_BLUE, color: "#e8e2d8" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── ARTICLE ── */}
      <div className="uc-page-bg pb-16">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link href="/" className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline">
            ← Back to home
          </Link>
        </div>

        <article
          className="mx-auto max-w-[720px] px-[var(--page-pad)] pb-20 pt-14 text-[var(--ink)]"
          itemScope
          itemType="https://schema.org/Review"
        >
          <meta itemProp="itemReviewed" content="Introduction to Mathematical Philosophy by Bertrand Russell" />
          <meta itemProp="author" content="Abakcus" />

          {/* ── META ROW ── */}
          <div className="mb-10 grid grid-cols-2 gap-0 border border-[var(--line)] sm:grid-cols-3">
            {[
              { label: "Author", value: "Bertrand Russell" },
              { label: "Published", value: "1919" },
              { label: "Written", value: "Brixton Prison, 1918" },
              { label: "Pages", value: "208" },
              { label: "Genre", value: "Philosophy / Mathematics" },
              { label: "Publisher", value: "George Allen & Unwin" },
            ].map(({ label, value }) => (
              <div key={label} className="border-b border-r border-[var(--line)] px-4 py-3 last:border-b-0">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">{label}</p>
                <p className="mt-0.5 font-serif text-[0.95rem] italic text-[var(--ink-muted)]">{value}</p>
              </div>
            ))}
          </div>

          {/* ── DROP-CAP ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
              style={{ color: LOGIC_BLUE }}
              aria-hidden="true"
            >
              I
            </span>
            n 1918, Bertrand Russell was convicted of making statements likely to undermine
            military recruitment. The sentence was six months in Brixton Prison. He divided
            his days into three equal parts: four hours of writing, four hours of reading
            philosophy, four hours of reading everything else. Before the end of May — his
            first month inside — he had all but completed the manuscript of this book.
            <em> Introduction to Mathematical Philosophy</em> is what happens when one of the
            sharpest minds of the twentieth century is given a cell, a desk, and nothing
            urgent to do.
          </p>

          {/* ── PRISON DISPATCH ── */}
          <div className="my-10 overflow-hidden border border-[var(--line)]">
            <div
              className="flex flex-wrap items-baseline justify-between gap-2 px-6 py-4"
              style={{ background: DARK }}
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em]" style={{ color: "rgba(200,184,154,0.55)" }}>
                Prisoner No. 2917 — Brixton Prison, 1918
              </span>
              <span className="font-mono text-[0.6rem] tracking-[0.08em]" style={{ color: "rgba(200,184,154,0.3)" }}>
                Russell on his sentence
              </span>
            </div>
            <div className="bg-[#eee9e0] px-7 py-6">
              <p className="font-serif text-[0.97rem] italic leading-[1.75] text-[var(--ink-muted)]">
                &ldquo;I found prison in many ways quite agreeable. I had no engagements, no difficult
                decisions to make, no fear of callers, no interruptions to my work. I read
                enormously; I wrote a book… I was rather interested in my fellow-prisoners,
                who seemed to me in no way morally inferior to the rest of the population,
                though they were on the whole slightly below the usual level of intelligence
                as was shown by their having been caught.&rdquo;
              </p>
            </div>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The book&apos;s stated purpose is to make accessible the ideas Russell had developed
            with Alfred North Whitehead in <em>Principia Mathematica</em> — three dense volumes
            of symbolic logic that had appeared between 1910 and 1913 and were read, in full,
            by approximately no one. <em>Introduction to Mathematical Philosophy</em> is the
            translation of that project into prose a non-specialist could follow. Russell
            claimed it required no prior knowledge of mathematics. This is technically true
            and slightly misleading, in the way that saying swimming requires no prior
            knowledge of water is technically true.
          </p>

          {/* ── SIDEBAR NOTE ── */}
          <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
            <span className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: LOGIC_BLUE }}>
              —
            </span>
            <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
              Wittgenstein was completing the <em>Tractatus Logico-Philosophicus</em> at roughly
              the same time, as a prisoner of war in Italy. Two of the twentieth century&apos;s
              foundational texts in logic, written simultaneously, by men behind different sets of bars.
            </p>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            What Russell is actually doing in this book is asking a question most people
            never think to ask: what is the number 3? Not three apples, not the symbol 3,
            not the word — the number itself. What kind of thing is it? Where does it live?
            If all the apples in the world disappeared, would 3 still exist? His answer,
            built carefully over eighteen chapters, is that numbers are not things you
            discover in the world but logical constructions — definitions that work with
            perfect consistency and require nothing outside of pure logic to justify them.
            This is the doctrine of logicism, and Russell defends it with the patience of
            someone who has nothing else scheduled for the afternoon.
          </p>

          {/* ── PULL QUOTE 1 ── */}
          <blockquote className="my-10 border-l-[3px] py-1 pl-6" style={{ borderColor: LOGIC_BLUE }}>
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              &ldquo;Very few people are prepared with a definition of what is meant by
              &lsquo;number,&rsquo; or &lsquo;0,&rsquo; or &lsquo;1.&rsquo; It is not very difficult
              to see that, starting from 0, any other of the natural numbers can be reached —
              but we shall have to define what we mean by &lsquo;adding 1,&rsquo; and what we
              mean by &lsquo;repeated.&rsquo;&rdquo;
            </p>
            <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
              Bertrand Russell — Introduction to Mathematical Philosophy, Chapter I
            </cite>
          </blockquote>

          {/* ── DIVIDER ── */}
          <div className="clear-both my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">§</span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The book&apos;s most famous chapter is not about numbers. It is about descriptions —
            specifically, Russell&apos;s &ldquo;theory of descriptions,&rdquo; which addresses sentences
            like &ldquo;The present King of France is bald.&rdquo; France has no king. The sentence
            is neither true nor false in any obvious way. Before Russell, this was a headache
            philosophers managed by shrugging. After Russell, it became a precise logical problem
            with a precise logical solution: the sentence contains a hidden existential claim that
            can be unpacked and evaluated. The bald king turns out to be a grammatical illusion,
            not a metaphysical problem. This is the kind of move Russell makes throughout the book —
            taking something that seems puzzling or irreducibly vague and showing that the puzzle
            is in the language, not in the world.
          </p>

          {/* ── INSET: Russell's Paradox ── */}
          <div className="my-10 border border-[var(--line)] bg-[#eee9e0] px-8 py-7">
            <p className="mb-3.5 font-mono text-[0.62rem] uppercase tracking-[0.15em]" style={{ color: "#8a8078" }}>
              On Russell&apos;s Paradox — The Wound That Produced the Book
            </p>
            <p className="mb-4 text-[0.97rem] leading-[1.75] text-[var(--ink-muted)]">
              In 1901, Russell discovered that a set of all sets that do not contain
              themselves as members both must and cannot contain itself. This paradox
              threatened to collapse Frege&apos;s entire logical program — the project of
              grounding all of mathematics in pure logic. Russell spent the next decade
              trying to repair the damage. <em>Principia Mathematica</em> was the repair.
              This book is the explanation of why the repair was necessary.
            </p>
            <p className="text-[0.97rem] leading-[1.75] text-[var(--ink-muted)]">
              The paradox is not resolved in these pages so much as circumnavigated.
              Russell builds an elaborate theory of types — a hierarchy of logical
              categories that prevents the dangerous self-reference from arising in
              the first place. It works. Whether it is ultimately satisfying is a
              question Russell leaves open, with a candor that is one of the book&apos;s
              more disarming qualities.
            </p>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Russell&apos;s prose is a category of its own. He was, unusually for a technical
            philosopher, also a brilliant writer — he won the Nobel Prize in Literature in
            1950, not for this book but for his popular essays, and the quality of his
            sentence-making is visible even here, where the subject matter is not exactly
            designed for elegance. He explains the concept of infinity, for instance, by
            pointing out that the natural numbers have a peculiar property: there are as
            many even numbers as there are natural numbers, because you can put them into
            perfect one-to-one correspondence. The even numbers are a proper subset
            of the natural numbers, and yet there are exactly as many of them. This is
            not a paradox, Russell says. It is the definition of infinity — a set that
            can be matched exactly with one of its own proper subsets. The explanation
            takes two paragraphs and requires no equations. It is the same instinct that
            drives the proofs in{" "}
            <ArticleProseLink href="/articles/sqrt2-irrational" className="article-euclid-link">
              the oldest arguments in mathematics
            </ArticleProseLink>
            {" "}— start only from what you know, and say exactly what follows.
          </p>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Who is this book for? Russell said it was for people with limited mathematical
            knowledge and no experience with formal logic. This is honest about the entry
            point but optimistic about the ascent. The early chapters — on natural numbers,
            series, ordinals — are genuinely accessible. The later chapters on propositional
            functions and classes are not difficult so much as unfamiliar, requiring a kind
            of mental gear-change that some readers find exhilarating and others find
            exhausting. The book rewards patience in the way that technical books written
            by naturally gifted explicators always do: the difficulty is real, but so is
            the payoff. If you have already encountered the questions Russell is asking
            in{" "}
            <ArticleProseLink href="/articles/0999-equals-1" className="article-euclid-link">
              debates about whether definitions create or discover mathematical objects
            </ArticleProseLink>
            , this book will feel like the argument you were circling but could never quite locate.
          </p>

          {/* ── PULL QUOTE 2 ── */}
          <blockquote className="my-10 border-l-[3px] py-1 pl-6" style={{ borderColor: LOGIC_BLUE }}>
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              &ldquo;Logic is concerned with the real world just as truly as zoology, though
              with its more abstract and general features.&rdquo;
            </p>
            <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
              Bertrand Russell — Introduction to Mathematical Philosophy
            </cite>
          </blockquote>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            What the book permanently installs in a careful reader is a kind of
            suspicion — not the anxious kind, but the productive kind. A suspicion
            that the words we use most confidently (&ldquo;number,&rdquo; &ldquo;infinity,&rdquo;
            &ldquo;class,&rdquo; &ldquo;existence&rdquo;) are doing much more work than we give
            them credit for, and that the work they are doing is worth examining. Russell
            examines it slowly, from a cell in Brixton, with a four-hour daily writing schedule
            and no interruptions. The result is a book that has been in continuous print for
            over a century. It turns out that being arrested for opposing the war was,
            intellectually speaking, the best thing that ever happened to the foundations
            of mathematics.
          </p>

          {/* ── AMAZON CTA ── */}
          <div className="mt-12 flex items-center gap-5 border-t border-[var(--line)] pt-10">
            <div className="w-16 shrink-0 overflow-hidden rounded" style={{ aspectRatio: "2/3" }}>
              <Image
                src={COVER}
                alt="Introduction to Mathematical Philosophy book cover"
                width={64}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                Introduction to Mathematical Philosophy
              </p>
              <p className="mt-1 font-serif text-sm italic text-[var(--ink-muted)]">Bertrand Russell — 1919</p>
              <a
                href="https://amzn.to/3OVytSM"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-colors"
                style={{ color: LOGIC_BLUE }}
              >
                View on Amazon →
              </a>
            </div>
          </div>
        </article>

        <div className="mx-auto max-w-[720px] px-[var(--page-pad)] pb-4">
          <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
            If Russell&apos;s obsession with what numbers actually are has you
            curious about π specifically,{" "}
            <ArticleProseLink href="/book-lists/books-about-pi" className="underline underline-offset-2 hover:text-[var(--ink)]">
              six books approach it from equally unruly angles
            </ArticleProseLink>
            {" — "}history, transcendence, category theory, and one very
            ill-advised Indiana bill.
          </p>
        </div>
        <ArticleReadMore currentSlug="introduction-to-mathematical-philosophy" />
      </div>
    </>
  );
}
