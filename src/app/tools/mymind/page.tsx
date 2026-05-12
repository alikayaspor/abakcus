import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "mymind — Save Everything, Organize Nothing",
  description:
    "mymind doesn't want your folders, your tags, or your system. Just save things. It handles the rest. This simple idea turns out to work remarkably well.",
  keywords: [
    "mymind",
    "mymind app",
    "save and organize app",
    "AI bookmarking",
    "personal knowledge management",
    "note taking app",
    "mymind review",
    "digital clutter",
    "serendipity feature",
    "no-folder note app",
  ],
  openGraph: {
    title: "mymind — Save Everything, Organize Nothing",
    description:
      "mymind doesn't want your folders, your tags, or your system. Just save things. It handles the rest. This simple idea turns out to work remarkably well.",
    type: "article",
    images: [
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/MyMind%203.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mymind — Save Everything, Organize Nothing",
    description:
      "mymind doesn't want your folders, your tags, or your system. Just save things. It handles the rest.",
    images: [
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/MyMind%203.webp",
    ],
  },
};

export default function MymindPage() {
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
              App Review · iOS · Android · Web · macOS
            </p>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              Save Everything.<br />Organize Nothing.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] font-serif italic">
              mymind's tagline. A two-word claim. And it actually delivers on it.
            </p>
          </div>

          {/* Meta */}
          <div className="mb-12 pb-8 border-b border-[var(--line)] flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            <span>iOS · Android · Web · macOS · Free trial · $8.99/mo</span>
            <a
              href="https://mymind.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="article-euclid-link"
            >
              mymind.com →
            </a>
          </div>

          {/* App Meta Grid */}
          <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)] border border-[var(--line)]">
            {[
              { label: "Platform", value: "iOS · Android · Web · macOS" },
              { label: "Price", value: "Free trial · $8.99/mo" },
              { label: "Ads", value: "None" },
              { label: "Tracking", value: "None" },
            ].map((item) => (
              <div key={item.label} className="p-4">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-1">
                  {item.label}
                </p>
                <p className="font-serif text-sm text-[var(--ink)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img
              src="https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/MyMind%203.webp"
              alt="mymind app — Save Everything, Organize Nothing"
              className="w-full h-auto"
            />
            <figcaption className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mt-4 px-[var(--page-pad)]">
              mymind — mymind.com
            </figcaption>
          </figure>

          {/* Lead */}
          <p className="mb-12 pb-8 border-b border-[var(--line)] text-lg font-semibold leading-relaxed text-[var(--ink)] sm:text-xl">
            Most note-taking apps try to sell you a system. Folders, tags,
            databases, hierarchies. When the energy to maintain the system runs
            out, you stop opening the app. mymind is the thing that breaks that
            cycle.
          </p>

          {/* Body */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              mymind's core promise is simple: you save, the app organizes. A
              link, an image, a note, a PDF, an Instagram post, a color code —
              whatever you throw at it, mymind takes it, reads the content,
              auto-tags it, and makes it searchable. No folder selection, no tag
              writing, no category assignment. You save. Then you forget. Then
              when you search, it finds.
            </p>

            <blockquote className="my-10 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              &ldquo;You think 'where was that architecture photo I saved six
              months ago?' and type 'concrete staircase.' It appears.&rdquo;
            </blockquote>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This isn't magic — it's AI tagging and visual recognition. But in
              daily use, it feels like magic. Save an image and mymind reads the
              text inside it, analyzes the color palette, identifies the objects.
              Save an article and it extracts the topic, the author, the key
              concepts. Drop in a PDF and it summarizes and tags it. All of this
              happens without you touching anything. Then you search with
              free-form phrases — "minimalist furniture," "blue tones,"
              "Bauhaus," "that thing I read last summer" — and the system finds
              what was sitting in the corner of your memory.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The design deserves its own mention. Opening mymind feels different
              from opening other apps — the screen is clean, quiet, uncluttered.
              Your saves sit on a grid as cards. No ads, no notifications, no
              "have you tried this feature?" pop-ups. The app never pressures you
              to do anything. The team describes this as "personal software," and
              that description is accurate. It stands in sharp contrast to the
              trap of{" "}
              <Link
                href="/tools/killed-by-google"
                className="article-euclid-link"
              >
                products built to serve platforms
              </Link>{" "}
              rather than people.
            </p>
          </section>

          {/* First in-article image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img
              src="https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/MyMind.webp"
              alt="mymind interface — cards grid view"
              className="w-full h-auto"
            />
          </figure>

          {/* Serendipity */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Serendipity
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The most unexpected feature is Serendipity. Pull down on the screen
              and mymind shows you a random old save — a quote from six months
              ago, an image you liked a year back, a tool you saved and forgot.
              The name is well chosen: serendipity is the experience of
              encountering the right thing at an unexpected moment. The logic here
              is that the larger your library grows, the better Serendipity works,
              because the pool it draws from gets richer. mymind doesn't get
              smarter over time — but it gets more yours.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              There's a parallel here with{" "}
              <Link
                href="/tools/literature-clock"
                className="article-euclid-link"
              >
                Literature Clock
              </Link>
              , which surfaces a random passage from world literature at whatever
              time you happen to check it. The logic is the same: a large, curated
              pool of things that matter — revealed not on demand but unexpectedly
              — produces an experience that deliberate search cannot.
            </p>

            <div className="my-8 bg-[#D4E0EC] border-l-4 border-[#4a7fa8] p-6 rounded">
              <strong className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[#4a7fa8] mb-2">
                Top of Mind
              </strong>
              <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed italic">
                The "Top of Mind" feature lets you pin your most important saves
                to the top of your view. For ongoing projects, active research, or
                sources you return to often, it's the most underrated feature in
                the app.
              </p>
            </div>
          </section>

          {/* Second in-article image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img
              src="https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/MyMind%202.webp"
              alt="mymind Serendipity feature — random saves from your library"
              className="w-full h-auto"
            />
          </figure>

          {/* Privacy */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Privacy as a Real Stance
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The privacy stance is serious rather than performative. No ads, no
              tracking, no sharing with third parties. AI analysis of notes runs
              on Amazon Bedrock — content never leaves AWS, never reaches the
              model providers. These details come from a small, independent team
              that chose the subscription model specifically to protect these
              values.
            </p>

            <blockquote className="my-10 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              &ldquo;mymind doesn't use you. You use it. In 2025, that
              distinction is larger than it should have to be.&rdquo;
            </blockquote>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Eight dollars and ninety-nine cents a month. What you get for that:
              an ad-free, tracking-free, quiet space to think. There is a free
              plan, but it's limited. To see what the app actually does, you need
              at least two weeks on the paid plan — the library needs to grow
              before the search starts to feel like recall.
            </p>
          </section>

          {/* Limitations */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              What It Doesn't Do
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The limitations are real and worth naming. mymind is entirely
              personal — no collaboration, no shared spaces, no co-editing. It's
              not designed for long-form writing; notes exist but there's no deep
              text editor. The interface is English only. And some users report
              occasional bugs in the iOS app.
            </p>

            <div className="my-8 border border-[var(--line)]">
              <div className="px-5 py-3 bg-[#D4E0EC]">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                  Limitations
                </span>
              </div>
              <div className="px-5 py-4 flex flex-wrap gap-2">
                {[
                  "No collaboration",
                  "No long-form editor",
                  "English interface only",
                  "Occasional iOS bugs",
                  "Requires paid plan to shine",
                ].map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[9px] uppercase tracking-[0.06em] text-[var(--ink)] border border-[var(--line)] px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              All of that said: mymind is one of the most honest solutions to
              digital clutter available right now. It doesn't pressure you to
              become more organized. It doesn't try to convince you to learn a
              new system. It says "you save, we handle the rest" — and then
              handles it. Many apps make this promise. Very few keep it.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The contrast with most digital tools is worth sitting with. Where
              something like{" "}
              <Link
                href="/tools/river-runner"
                className="article-euclid-link"
              >
                River Runner
              </Link>{" "}
              gives you a single focused question and answers it visually —
              "where does this raindrop go?" — mymind asks nothing of you at all.
              It just receives. Both are tools whose usefulness comes precisely
              from the narrowness of what they ask.
            </p>
          </section>

          {/* Footnotes */}
          <div className="mt-16 pt-8 border-t border-[var(--line)] space-y-4">
            <p className="font-mono text-xs text-[var(--ink-muted)] leading-relaxed">
              <span className="text-[var(--ink)]">¹</span> mymind has Chrome and
              Safari extensions — you save anything from the browser with a single
              click. Without the extension, the app's value is significantly
              reduced. Install it first.
            </p>
            <p className="font-mono text-xs text-[var(--ink-muted)] leading-relaxed">
              <span className="text-[var(--ink)]">²</span> There is a free plan
              but it's limited. To see what the app actually does, you need at
              least two weeks on the paid plan — the library needs to grow before
              the search starts to feel like recall.
            </p>
            <p className="font-mono text-xs text-[var(--ink-muted)] leading-relaxed">
              <span className="text-[var(--ink)]">³</span> mymind is available
              at{" "}
              <a
                href="https://mymind.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                mymind.com
              </a>
              . iOS, Android, Web, and macOS. Free trial available.
            </p>
          </div>
        </article>

        <ArticleReadMore currentSlug="mymind" />
      </div>
    </>
  );
}
