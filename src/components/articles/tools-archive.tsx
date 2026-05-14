import Image from "next/image";
import Link from "next/link";
import type { CuratedArticleSource } from "@/data/articles-curated";
import { getPublishedToolsForListing } from "@/data/related-articles";
import { SiteFooter } from "@/components/home/site-footer";

function formatListDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function ToolArchiveCard({
  article,
  priority,
}: {
  article: CuratedArticleSource;
  priority?: boolean;
}) {
  const { title, dek, href, image, pageColor, publishedAt } = article;
  const dateLabel = formatListDate(publishedAt);

  return (
    <li className="h-full">
      <article className="h-full">
        <Link
          href={href}
          prefetch={false}
          className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] bg-white/95 shadow-[var(--shadow-soft)] outline-none transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:border-[var(--line)] hover:shadow-[var(--shadow-card)] focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2"
        >
          {/* brand ribbon */}
          <div
            className="h-1.5 w-full shrink-0 bg-gradient-to-r from-[var(--pastel-sky)] via-[var(--pastel-lime)] to-[var(--pastel-peach)] opacity-[0.92]"
            aria-hidden
          />

          <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
            <div
              className="relative aspect-[3/2] w-full overflow-hidden rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
              style={{
                backgroundColor: `color-mix(in srgb, #ffffff 72%, ${pageColor})`,
              }}
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                priority={priority}
              />
            </div>

            {dateLabel ? (
              <p className="mt-5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                {dateLabel}
              </p>
            ) : null}

            <h2 className="mt-2 font-serif text-[1.2rem] font-semibold leading-[1.28] tracking-[-0.02em] text-[var(--ink)] sm:text-[1.3rem] sm:leading-[1.25]">
              {title}
            </h2>

            <p className="mt-3 flex-1 font-sans text-[0.97rem] leading-[1.7] text-[var(--ink-muted)] sm:text-[1.02rem] sm:leading-[1.72]">
              <span className="line-clamp-7">{dek}</span>
            </p>

            <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[var(--ink)] opacity-90 transition-transform duration-300 group-hover:translate-x-0.5">
              Open
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </Link>
      </article>
    </li>
  );
}

export function ToolsArchive() {
  const items = getPublishedToolsForListing();

  return (
    <>
      <main className="border-b border-[var(--line-soft)] bg-transparent">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pb-24 pt-12 sm:pb-28 sm:pt-14 md:pt-16">
          <nav
            className="mb-12 text-center text-sm text-[var(--ink-muted)] md:mb-14"
            aria-label="Section"
          >
            <Link
              href="/"
              className="font-sans underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline"
            >
              Home
            </Link>
            <span className="mx-2.5 text-[var(--line)]" aria-hidden>
              ·
            </span>
            <span className="font-sans font-medium text-[var(--ink)]">Tools</span>
          </nav>

          <header className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
            <h1 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-medium tracking-[-0.03em] text-[var(--ink)]">
              Tools
            </h1>
            <p className="mx-auto mt-6 max-w-lg font-serif text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
              Handpicked apps, sites, and interactive experiences from the open
              web — useful, odd, and worth bookmarking.
            </p>
            <div
              className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-[var(--line)] to-transparent"
              aria-hidden
            />
          </header>

          {items.length === 0 ? (
            <p className="text-center font-sans text-[var(--ink-muted)]">
              Nothing published yet. Check back soon.
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
              {items.map((tool, i) => (
                <ToolArchiveCard
                  key={tool.slug}
                  article={tool}
                  priority={i < 3}
                />
              ))}
            </ul>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
