import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";

const CANONICAL = "https://abakcus.com/about";

export const metadata: Metadata = {
  title: "About Ali Kaya — The Person Behind Abakcus",
  description:
    "Meet Ali Kaya, the mathematician and curator behind Abakcus — a hand-picked collection of the best math, science, and education resources on the internet. No ads, ever.",
  authors: [{ name: "Ali Kaya", url: "https://abakcus.com/about" }],
  keywords: [
    "Ali Kaya",
    "Abakcus",
    "math curator",
    "mathematics blog",
    "science resources",
    "curated math",
    "math education",
    "about Abakcus",
    "who made Abakcus",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "About Ali Kaya — The Person Behind Abakcus",
    description:
      "Meet Ali Kaya, the mathematician and curator behind Abakcus — a hand-picked collection of the best math, science, and education resources on the internet. No ads, ever.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "About Ali Kaya — The Person Behind Abakcus",
    description:
      "Meet Ali Kaya, the mathematician and curator behind Abakcus. Hand-picked math & science resources. No ads, ever.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Abakcus",
    description:
      "Abakcus is a hand-curated collection of the best mathematics and science resources on the internet, built by Ali Kaya.",
    url: CANONICAL,
    mainEntity: {
      "@type": "Person",
      name: "Ali Kaya",
      url: "https://abakcus.com",
      email: "ali@abakcus.com",
      jobTitle: "Math Curator & Writer",
      sameAs: ["https://www.patreon.com/abakcus"],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://abakcus.com" },
        { "@type": "ListItem", position: 2, name: "About", item: CANONICAL },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abakcus",
    url: "https://abakcus.com",
    description:
      "Curated math, science, education, and design — unexpected and unhurried.",
    author: {
      "@type": "Person",
      name: "Ali Kaya",
    },
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }}
      />
      <div className="uc-page-bg min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Back link */}
          <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
            <Link
              href="/"
              className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
            >
              ← Home
            </Link>
          </div>

          <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">
            {/* Header */}
            <header className="mb-14 pb-10 border-b border-[var(--line)]">
              <p className="mb-5 font-sans text-xs uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
                The story behind the site
              </p>
              <h1 className="font-serif text-[clamp(2rem,6vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.025em] text-[var(--ink)]">
                Who is behind Abakcus?
              </h1>
              <p className="mt-6 font-serif text-lg leading-relaxed text-[var(--ink-muted)] italic">
                A drop of curiosity in an ocean of information — and why that drop still matters.
              </p>
            </header>

            {/* Body */}
            <div className="font-serif text-[1.0625rem] leading-[1.85] text-[var(--ink)] [&>p]:mb-7 [&>p:last-child]:mb-0">
              <p>
                This is{" "}
                <strong className="font-semibold">Ali</strong> — bespectacled,
                mustachioed father, math blogger, soccer player, and occasional
                consultant for global math and science startups. I am utterly
                proud to share this dream project with you.
              </p>

              <p>
                I have a dream: that one day, everyone will love mathematics.
                Not just tolerate it, or survive it, but genuinely love it. To
                work toward that, I spent years writing about mathematics on
                Medium — trying to show people a different perspective, the
                beautiful and the strange, the human and the playful. Every
                article was a small attempt to say:{" "}
                <em>look at this, isn&apos;t this wonderful?</em>
              </p>

              <p>
                But writing articles alone felt insufficient. The internet is
                like an ocean — vast, mostly beautiful, occasionally
                bewildering. Newton once said,{" "}
                <em>
                  &ldquo;What we know is a drop, what we don&apos;t know is an
                  ocean.&rdquo;
                </em>{" "}
                Rather than adding more noise to the waves, I wanted to make
                our drop utterly valuable.
              </p>

              {/* Pull quote */}
              <blockquote className="my-12 border-l-2 border-[var(--ink)]/20 pl-7 pr-4 not-italic">
                <p className="mb-0 font-serif text-[1.15rem] leading-[1.7] text-[var(--ink-muted)]">
                  &ldquo;What we know is a drop, what we don&apos;t know is an
                  ocean. Why don&apos;t we make our drop utterly valuable?&rdquo;
                </p>
                <footer className="mt-4 font-sans text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  — Isaac Newton (and the spirit of Abakcus)
                </footer>
              </blockquote>

              <p>
                That&apos;s what Abakcus is. A carefully tended collection of
                the best articles, books, videos, tools, and projects about
                mathematics and science — picked slowly, kept honest, and meant
                to spark genuine curiosity. We believe that learning new things
                is one of the surest paths to happiness, and we think a
                well-curated corner of the internet can make a lot of people
                happier.
              </p>

              <p>
                On Abakcus you can search and discover resources you
                didn&apos;t know you were looking for. We update the collection
                continuously — not chasing trends, but looking for things with
                staying power. The kind of link you bookmark and actually return
                to.
              </p>

              <p>
                I wish I could sit down with every single person in this
                community and share a cup of tea. Until that day — I hope you
                enjoy what we&apos;ve built here.
              </p>
            </div>

            {/* Divider */}
            <div
              className="my-14 h-px w-full bg-gradient-to-r from-transparent via-[var(--ink)]/15 to-transparent"
              aria-hidden
            />

            {/* No ads + Patreon */}
            <section className="rounded-2xl bg-[color-mix(in_srgb,var(--pastel-peach)_35%,white)] border border-[var(--line-soft)] px-8 py-9">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-3">
                No ads. Ever.
              </p>
              <p className="font-serif text-xl leading-snug text-[var(--ink)] mb-4">
                You will never see those obnoxious, cluttered ads on Abakcus.
              </p>
              <p className="font-serif text-[1.0625rem] leading-[1.8] text-[var(--ink-muted)] mb-7">
                I want to keep this site clean, honest, and ad-free — always. If Abakcus brings you any joy and you&apos;d like to support it, even $1 a month on Patreon would make me genuinely happy. Consider it buying me a cup of tea. ☕
              </p>
              <a
                href="https://www.patreon.com/abakcus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-[var(--ink)]/80"
              >
                Support on Patreon
                <span aria-hidden>→</span>
              </a>
            </section>

            {/* Divider */}
            <div
              className="my-14 h-px w-full bg-gradient-to-r from-transparent via-[var(--ink)]/15 to-transparent"
              aria-hidden
            />

            {/* What you'll find */}
            <section aria-labelledby="what-youll-find">
              <h2
                id="what-youll-find"
                className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-8"
              >
                What you&apos;ll find on Abakcus
              </h2>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { label: "Articles", href: "/articles" },
                  { label: "Books", href: "/books" },
                  { label: "Videos", href: "/videos" },
                  { label: "Tools", href: "/tools" },
                  { label: "Gadgets", href: "/gadgets" },
                  { label: "Newsletter", href: "/newsletter" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-white/70 px-4 py-3.5 text-sm font-sans text-[var(--ink)] transition-colors hover:border-[var(--ink)]/30 hover:bg-white"
                    >
                      {label}
                      <span className="text-[var(--ink-muted)]" aria-hidden>
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Divider */}
            <div
              className="my-14 h-px w-full bg-gradient-to-r from-transparent via-[var(--ink)]/15 to-transparent"
              aria-hidden
            />

            {/* Contact nudge */}
            <section className="rounded-2xl bg-[color-mix(in_srgb,var(--pastel-lavender)_30%,white)] border border-[var(--line-soft)] px-8 py-9 text-center">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-3">
                Get in touch
              </p>
              <p className="font-serif text-xl leading-snug text-[var(--ink)] mb-6">
                Found something worth adding to Abakcus?
              </p>
              <a
                href="mailto:ali@abakcus.com"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/20 bg-white px-6 py-3 font-sans text-sm text-[var(--ink)] transition-colors hover:border-[var(--ink)]/40 hover:bg-[var(--ink)] hover:text-white"
              >
                ali@abakcus.com
              </a>
            </section>
          </article>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
