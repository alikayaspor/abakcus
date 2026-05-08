import Image from "next/image";
import Link from "next/link";
import { UnitCircleThumbnailSvg } from "@/components/home/unit-circle-thumbnail-svg";
import { getRelatedArticles } from "@/data/related-articles";

export function ArticleReadMore({ currentSlug }: { currentSlug: string }) {
  const items = getRelatedArticles(currentSlug);

  if (items.length === 0) return null;

  return (
    <section
      className="border-t border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-lavender)_18%,var(--tonal))]"
      aria-labelledby="read-more-heading"
    >
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] py-12 md:py-16">
        <div className="mb-8 text-center">
          <div
            className="mb-3 flex items-center justify-center gap-3"
            aria-hidden
          >
            <span className="h-px w-8 bg-[var(--line)] sm:w-12" />
            <span className="text-[0.85rem] leading-none text-[var(--ink-muted)]">
              ✦
            </span>
            <span
              id="read-more-heading"
              className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[var(--ink-muted)]"
            >
              Read more
            </span>
            <span className="text-[0.85rem] leading-none text-[var(--ink-muted)]">
              ✦
            </span>
            <span className="h-px w-8 bg-[var(--line)] sm:w-12" />
          </div>
          <p className="font-serif text-lg text-[var(--ink)] sm:text-xl">
            Keep wandering
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[var(--ink-muted)]">
            A few more pieces in the same spirit — math, design, and slow
            attention.
          </p>
        </div>

        <ul
          className={`mx-auto grid gap-4 sm:gap-5 ${
            items.length === 1
              ? "max-w-md grid-cols-1"
              : "max-w-[min(72rem,100%)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {items.map((article) => (
            <li key={article.slug} className="flex">
              <Link
                href={article.href}
                className="group flex h-full w-full gap-4 overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] bg-white/90 p-3 pr-4 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--ink)]/10 hover:shadow-[var(--shadow-card)] sm:gap-5 sm:p-4"
              >
                <div
                  className="relative h-[5.25rem] w-[5.25rem] shrink-0 overflow-hidden rounded-xl sm:h-[5.75rem] sm:w-[5.75rem]"
                  style={{ backgroundColor: article.pageColor }}
                >
                  {article.slug === "unit-circle" ? (
                    <div className="absolute inset-0 flex min-h-0 items-center justify-center p-1">
                      <UnitCircleThumbnailSvg className="transition-transform duration-500 group-hover:scale-[1.05]" />
                    </div>
                  ) : article.image.endsWith(".svg") ? (
                    <img
                      src={article.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="92px"
                    />
                  )}
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-start gap-1">
                  <p className="font-serif text-base font-semibold leading-snug text-[var(--ink)] sm:text-[1.05rem]">
                    {article.title}
                  </p>
                  <p className="line-clamp-3 font-serif text-sm leading-snug text-[var(--ink-muted)] sm:text-[0.95rem]">
                    {article.dek}
                  </p>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1 font-sans text-xs font-medium text-[var(--ink-muted)] transition-colors group-hover:text-[var(--ink)]">
                    Open
                    <span
                      className="inline-block transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
