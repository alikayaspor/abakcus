import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Calculus Made Easy — Silvanus P. Thompson's 1910 Book, Free Online",
  description:
    "A calculus book written in 1910, converted to HTML by hand, and offered for free. On Silvanus P. Thompson's book and the volunteer effort that put it online.",
  keywords: [
    "Calculus Made Easy",
    "Silvanus P. Thompson",
    "free calculus book",
    "calculusmadeeasy.org",
    "learn calculus",
    "Project Gutenberg calculus",
    "calculus for beginners",
    "1910 mathematics book",
    "open source textbook",
  ],
  openGraph: {
    title: "Calculus Made Easy — Silvanus P. Thompson's 1910 Book, Free Online",
    description:
      "A calculus book written in 1910, converted to HTML by hand, and offered for free. Thompson's prologue says it plainly: 'What one fool can do, another can.'",
    type: "article",
    images: [
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Calculus%20Made%20Easy.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculus Made Easy — Free Since 1910",
    description:
      "Silvanus P. Thompson's 1910 calculus book, converted to HTML by hand and offered for free at calculusmadeeasy.org.",
    images: [
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Calculus%20Made%20Easy.png",
    ],
  },
};

export default function CalculusMadeEasyPage() {
  return (
    <>
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">
          {/* Hero */}
          <div className="mb-12 pb-8 border-b border-[var(--line)]">
            <p className="mb-5 font-sans text-xs uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
              Free Resource · Mathematics · 1910
            </p>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              Calculus Made Easy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] font-serif italic">
              The prologue says it plainly: "What one fool can do, another can."
              Silvanus P. Thompson wrote that in 1910. The book has never gone
              out of print — and someone converted it to HTML by hand so you can
              read it for free today.
            </p>
          </div>

          {/* Meta */}
          <div className="mb-12 pb-8 border-b border-[var(--line)] flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            <span>Silvanus P. Thompson · 1910</span>
            <a
              href="https://calculusmadeeasy.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="article-euclid-link"
            >
              calculusmadeeasy.org →
            </a>
          </div>

          {/* Featured Image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img
              src="https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Calculus%20Made%20Easy.png"
              alt="Calculus Made Easy — Silvanus P. Thompson, 1910, free at calculusmadeeasy.org"
              className="w-full h-auto"
            />
            <figcaption className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mt-4 px-[var(--page-pad)]">
              Calculus Made Easy — calculusmadeeasy.org
            </figcaption>
          </figure>

          {/* Lead */}
          <p className="mb-12 pb-8 border-b border-[var(--line)] text-lg font-semibold leading-relaxed text-[var(--ink)] sm:text-xl">
            Silvanus P. Thompson wanted to teach calculus without frightening
            anyone. In 1910 he wrote a book with that intention and put this in
            the prologue: "What one fool can do, another can." That is not the
            kind of opening sentence you find in calculus textbooks. Most of them
            are written as though the reader is being evaluated from a distance.
            Thompson did the opposite.
          </p>

          {/* Body */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              <strong>Calculus Made Easy</strong> addresses the reader the way
              you'd expect a thoughtful person to talk to someone who doesn't
              know the subject yet but wants to. The first chapter is titled "To
              Deliver You From The Preliminary Terrors." It explains why symbols
              like <em>dx</em> and <em>dy</em> look so threatening and why they
              shouldn't. Thompson isn't concealing the mathematics — he's placing
              it in front of the reader in the right order. Derivatives,
              integrals, maxima and minima, the geometric meaning of
              differentiation — each one follows from the last. The sequence is
              the argument.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Compare this to the approach{" "}
              <Link
                href="/articles/feynman-math-education"
                className="article-euclid-link"
              >
                Richard Feynman took with physics
              </Link>
              : both men believed that understanding comes before formalism,
              not after it. The instinct to strip a subject down to what it
              actually requires — and no more — is rare in technical writing, and
              it tends to produce books that outlast their authors by a long
              margin.
            </p>

            <blockquote className="my-10 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              &ldquo;Thompson doesn't simplify calculus. He presents it the way
              it actually is — not as a foreign language, but as a continuation
              of things you already know.&rdquo;
            </blockquote>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The chapter titles are a tell. "Simplest Cases." "What to do with
              Constants." "Introducing a Useful Dodge." That is not the language
              of a textbook. That is the language of someone talking to you. The
              mathematician John Baez has written that this is how he learned
              calculus — his uncle gave him a copy. The software developer Zed
              Shaw put it differently: "If you want to understand how to teach
              complexity to others, you must read it." Neither of them describes
              the book as a calculus resource. Both describe it as a resource on
              how to explain things.
            </p>
          </section>

          {/* Three Layers of Volunteer Work */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Three Layers of Volunteer Work
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Thompson died in 1916. After the book left copyright, Project
              Gutenberg archived it as a PDF. Then someone — a small group of
              named contributors and an anonymous proofreading team — converted
              that PDF to HTML by hand, page by page, formula by formula.
              The design was borrowed from Mark Pilgrim's 2009{" "}
              <em>Dive Into HTML5</em>, which was itself released under an open
              license. Three layers of volunteer work stacked on top of one
              another: Thompson's book, Project Gutenberg's archive, and a
              hand-built HTML conversion.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The result is{" "}
              <a
                href="https://calculusmadeeasy.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                calculusmadeeasy.org
              </a>
              . Formulas render correctly in the browser. Navigation between
              chapters is clean. There is no shortage of free calculus resources
              online, but most are either video-based or gated behind a
              registration form. This site asks for neither. A URL and a browser
              are enough.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              It's worth noting the parallel with{" "}
              <Link
                href="/articles/billingsley-euclid"
                className="article-euclid-link"
              >
                Oliver Byrne's 1847 edition of Euclid
              </Link>
              , which replaced every proof with a color diagram for a similar
              reason: to make abstract reasoning approachable before the symbols
              arrive. Both books are over a century old. Both are still being
              read — and, in different ways, still being preserved by people who
              found them useful enough to spend time on.
            </p>

            <div className="my-8 border border-[var(--line)]">
              <div className="px-5 py-3 bg-[#D4E0EC]">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                  What you get
                </span>
              </div>
              <div className="divide-y divide-[var(--line)]">
                {[
                  ["Prologue", '"What one fool can do, another can."'],
                  [
                    "21 Chapters",
                    "From derivatives to integration to maxima and minima",
                  ],
                  [
                    "Epilogue",
                    '"And so we end this work. It was not so hard, was it?"',
                  ],
                  ["Format", "HTML, in the browser, no registration"],
                  ["Cost", "Free"],
                ].map(([label, val]) => (
                  <div key={label} className="flex flex-wrap gap-x-6 px-5 py-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ink-muted)] w-24 shrink-0 pt-0.5">
                      {label}
                    </span>
                    <span className="font-sans text-sm text-[var(--ink)] leading-relaxed">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Thompson's Real Achievement */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              The Real Achievement Is Psychological
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Thompson's achievement isn't primarily pedagogical — it's
              psychological. The place where calculus loses most students isn't
              the symbols; the symbols are actually simple once you know what
              they mean. It loses them in the relationship they form with the
              subject before they've understood any of it. The feeling that this
              isn't for them tends to arrive before the first equation.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Every page of the book is working against that feeling. This is
              also what{" "}
              <Link
                href="/articles/feynman-technique"
                className="article-euclid-link"
              >
                the Feynman Technique
              </Link>{" "}
              isolates — the method of explaining something as if to someone who
              knows nothing, which forces you to identify exactly where your own
              understanding has a gap. Thompson was doing this for calculus in
              1910. The reason the book is still in print is that the problem it
              solves — the psychological barrier more than the technical one —
              has not changed.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The epilogue is short and worth reading. Thompson closes with: "And
              so we end this work. It was not so hard, was it?" He puts that
              sentence at the end, not the beginning. The placement is the point.
              By the time you reach it, you've already done the work — and the
              question is rhetorical because you already know the answer.
            </p>

            <div className="my-8 bg-[#D4E0EC] border-l-4 border-[#4a7fa8] p-6 rounded">
              <strong className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[#4a7fa8] mb-2">
                For context
              </strong>
              <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed italic">
                Thompson was forty-eight when he wrote this book, and already an
                established physicist — he had serious academic work in electrical
                engineering and magnetism. <em>Calculus Made Easy</em> became his
                best-selling book and has never gone out of print. A revised
                edition by Martin Gardner was published in 1998.
              </p>
            </div>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              If you want to see a similar spirit applied to visual mathematics,{" "}
              <Link
                href="/tools/seeing-theory"
                className="article-euclid-link"
              >
                Seeing Theory
              </Link>{" "}
              does for probability and statistics what Thompson does for calculus:
              it removes the obstacle that isn't really mathematical and replaces
              it with something you can look at directly.
            </p>
          </section>

          {/* Source */}
          <div className="mt-16 pt-8 border-t border-[var(--line)]">
            <h3 className="mb-4 font-sans text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Visit
            </h3>
            <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed">
              <strong className="text-[var(--ink)]">Calculus Made Easy</strong>{" "}
              by Silvanus P. Thompson is available at{" "}
              <a
                href="https://calculusmadeeasy.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                calculusmadeeasy.org
              </a>
              . Free to read in the browser. Originally published 1910; revised
              edition by Martin Gardner published 1998.
            </p>
          </div>
        </article>

        <ArticleReadMore currentSlug="calculus-made-easy" />
      </div>
    </>
  );
}
