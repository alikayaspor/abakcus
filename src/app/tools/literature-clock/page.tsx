import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Literature%20Clock.png";

export const metadata: Metadata = {
  title: "Literature Clock — A Literary Quote for Every Minute of the Day",
  description:
    "It's 2:47. Tolstoy already wrote that minute. Literature Clock matches all 1,440 minutes of the day to a passage from world literature. Free, open source, and endlessly readable.",
  keywords: [
    "Literature Clock",
    "literary clock",
    "Johs Enevoldsen",
    "book quotes by time",
    "literature time",
    "Author Clock",
    "reading clock",
    "open source clock",
    "free literary tool",
    "literature-clock.jenevoldsen.com",
  ],
  openGraph: {
    title: "Literature Clock — A Literary Quote for Every Minute of the Day",
    description:
      "Open the site and find a sentence from world literature containing the current time — the hour highlighted, the book and author below it. A minute later, a different book.",
    type: "article",
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Literature Clock — Every Minute Has a Book",
    description:
      "1,440 minutes in a day. Literature Clock matches each one to a passage from world literature. Free and open source.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/tools/literature-clock",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Literature Clock",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://literature-clock.jenevoldsen.com/",
  author: { "@type": "Person", name: "Johs Enevoldsen" },
  description:
    "A free website that matches all 1,440 minutes of the day to a passage from world literature, sourced from an open community-maintained CSV database.",
};

export default function LiteratureClockPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              Free Tool · Literature · Open Source
            </p>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              Literature Clock
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] font-serif italic">
              There are 1,440 minutes in a day. Someone has matched each of them
              to a passage from world literature. Open the site and you find out
              it's 2:47 — because Tolstoy already wrote that minute.
            </p>
          </div>

          {/* Meta */}
          <div className="mb-12 pb-8 border-b border-[var(--line)] flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            <span>Johs Enevoldsen · Free · Open Source</span>
            <a
              href="https://literature-clock.jenevoldsen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="article-euclid-link"
            >
              literature-clock.jenevoldsen.com →
            </a>
          </div>

          {/* Featured Image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img
              src={OG_IMAGE}
              alt="Literature Clock — a literary quote for every minute of the day"
              className="w-full h-auto"
            />
            <figcaption className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mt-4 px-[var(--page-pad)]">
              Literature Clock — literature-clock.jenevoldsen.com
            </figcaption>
          </figure>

          {/* Lead */}
          <p className="mb-12 pb-8 border-b border-[var(--line)] text-lg font-semibold leading-relaxed text-[var(--ink)] sm:text-xl">
            Open the site and you find a sentence from world literature
            containing the current time — the hour highlighted, the book and
            author below it. A minute later, a different book, a different
            sentence. The one after that, another. It works as a clock, but what
            it's actually doing is something else: showing how writers have used
            time.
          </p>

          {/* Body */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              That sounds like a small distinction. It isn't. When a novelist
              writes "it was three o'clock," the sentence rarely just tells you
              the time — it anchors a scene, signals a wait, frames a turning
              point. Virginia Woolf marks the hour differently than Hemingway
              does. Chekhov's three o'clock feels different from Fitzgerald's.
              Literature Clock lays this out minute by minute. Look at it once
              and it's a curiosity. Leave it open for an hour and you've read an
              accidental anthology.
            </p>

            <blockquote className="my-10 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              What appears at 3:00? Maybe Macbeth. Maybe a Kafka character
              waking up. Maybe a train passing through the middle of the night.
            </blockquote>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The more interesting question is this: how many minutes of the day
              has some writer already named? Midnight is overrepresented — there
              are many quotes. Five in the morning, very few. Three in the
              afternoon, surprisingly many. This distribution isn't random; it
              says something unintentional about which hours carry weight in the
              imagination and which ones writers let pass unmarked. Some minutes
              have multiple matching quotes and the site picks one at random.
              Some minutes have none — the display goes blank. Those gaps say
              something too.
            </p>
          </section>

          {/* Lineage */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Three Generations of One Idea
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The project has a clear lineage. Dutch designer Jaap Meijers built
              a real desk clock from an e-reader in 2012 — a physical object
              that displayed a literary quote and changed it every minute.{" "}
              <em>The Guardian</em> noticed and moved the idea to the web. Johs
              Enevoldsen built his own version and put it on GitHub. The quotes
              live in a CSV file; each row maps a minute to a book to an author.
              The database grows through community contributions — anyone can add
              a quote. At every step in this chain, someone spent their own time
              connecting minutes to literature.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This is the same spirit behind{" "}
              <Link
                href="/tools/calculus-made-easy"
                className="article-euclid-link"
              >
                Calculus Made Easy
              </Link>
              — Thompson's 1910 book converted to HTML by volunteers — and
              behind{" "}
              <Link
                href="/tools/seeing-theory"
                className="article-euclid-link"
              >
                Seeing Theory
              </Link>
              : people spending real time making something they found valuable
              available to anyone with a browser.
            </p>

            <div className="my-8 border border-[var(--line)]">
              <div className="px-5 py-3 bg-[#D4E0EC]">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                  Lineage
                </span>
              </div>
              <div className="divide-y divide-[var(--line)]">
                {[
                  ["2012", "Jaap Meijers builds a desk clock from an e-reader. Physical object, literary quotes, one per minute."],
                  ["2012–", "The Guardian puts the idea on the web. A browser tab that tells time through books."],
                  ["Ongoing", "Johs Enevoldsen's open-source version at literature-clock.jenevoldsen.com. Community-maintained CSV. Free and on GitHub."],
                  ["Now", "The Author Clock: solid oak, brass base, e-paper display. 13,000+ quotes, 2,500+ authors. Sold at the MoMA Design Store."],
                ].map(([year, desc]) => (
                  <div key={year} className="flex flex-wrap gap-x-6 px-5 py-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ink-muted)] w-20 shrink-0 pt-0.5">
                      {year}
                    </span>
                    <span className="font-sans text-sm text-[var(--ink)] leading-relaxed flex-1">
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The Clock */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              The Clock — 2010
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Literature Clock makes most sense alongside Christian Marclay's
              video installation <em>The Clock</em>. In 2010, Marclay edited a
              24-hour film from thousands of clips drawn from world cinema —
              each clip showing or stating the exact time at which it was
              screened. Watched in a theater, the film and the clock outside are
              always synchronized. Marclay won the Turner Prize for it.
              Literature Clock is the same idea pressed onto paper: cinema
              replaced by books, a major installation replaced by a single
              browser tab.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Both ask the same question: what happens if, instead of numbers,
              we use the people who lived inside time to tell it? Not indicators
              but sentences. Not a dial but a voice. The distance between time
              as an objective fact and time as a felt weight — Literature Clock
              measures that distance once a minute, with a quote.
            </p>

            <div className="my-8 bg-[#D4E0EC] border-l-4 border-[#4a7fa8] p-6 rounded">
              <strong className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[#4a7fa8] mb-2">
                On the database
              </strong>
              <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed italic">
                The quotes are stored in a public CSV file on GitHub. Each row
                contains the time, the highlighted phrase, the surrounding
                passage, the book title, and the author. Anyone can submit a
                pull request to add a missing minute. Enevoldsen's site also
                includes an option to skip quotes marked NSFW — the existence of
                that option implies something about what happens in literature at
                certain hours.
              </p>
            </div>
          </section>

          {/* Physical Object */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              The Physical Object
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              When an idea works, someone will eventually try to sell it. The
              Literature Clock idea followed that path. It became a real desk
              clock called the <em>Author Clock</em> — solid white oak housing,
              brass base, e-paper display. The kind of screen that looks like
              paper, doesn't glare, doesn't strain the eyes. Over 13,000 quotes,
              more than 2,500 authors, seven centuries of literature. The quote
              changes with each minute — or you can adjust the interval: every
              five minutes, every half hour, every hour. It connects to WiFi and
              new quotes arrive automatically. It's sold at the MoMA Design
              Store. That last detail says something about where the object has
              positioned itself.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The difference between the free website and the physical object is
              this: one appears when you check the time, the other sits on your
              desk continuously. In the second case, the book is there even when
              you're not looking. The Author Clock's e-paper screen has no
              backlight — a deliberate choice. The screen wants to look like a
              page. The ambition running through all three generations of this
              idea is the same: make literature present in ordinary time, not
              just in reading time.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This is a different kind of encounter with books than the one{" "}
              <Link
                href="/articles/billingsley-euclid"
                className="article-euclid-link"
              >
                Oliver Byrne's 1847 Euclid
              </Link>{" "}
              offers — that book asks you to sit down and work. Literature Clock
              asks nothing. It just runs. The reading happens peripherally, in
              the margin of whatever else you're doing. Some minutes you'll
              notice it. Most minutes you won't.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-4 mb-12 flex flex-wrap gap-4">
            <a
              href="https://literature-clock.jenevoldsen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] bg-[var(--ink)] text-white px-6 py-3 hover:opacity-80 transition-opacity"
            >
              Open Literature Clock →
            </a>
            <a
              href="https://amzn.to/4nE4pIB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] border border-[var(--line)] text-[var(--ink-muted)] px-6 py-3 hover:border-[var(--ink)] hover:text-[var(--ink)] transition-colors"
            >
              Author Clock on Amazon →
            </a>
          </div>

          {/* Source */}
          <div className="mt-8 pt-8 border-t border-[var(--line)]">
            <h3 className="mb-4 font-sans text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Visit
            </h3>
            <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed">
              <strong className="text-[var(--ink)]">Literature Clock</strong> by
              Johs Enevoldsen is free and open source at{" "}
              <a
                href="https://literature-clock.jenevoldsen.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                literature-clock.jenevoldsen.com
              </a>
              . The source code and quote database are on{" "}
              <a
                href="https://github.com/JohannesNE/literature-clock"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                GitHub
              </a>
              . Original concept by Jaap Meijers, 2012.
            </p>
          </div>
        </article>

        <ArticleReadMore currentSlug="literature-clock" />
      </div>
    </>
  );
}
