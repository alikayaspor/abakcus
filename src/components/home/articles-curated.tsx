import Link from "next/link";
import {
  getCuratedArticlesForHomeGrid,
  type CuratedArticle,
} from "@/data/articles-curated";
import { UnitCircleThumbnailSvg } from "@/components/home/unit-circle-thumbnail-svg";

function ArticleCard({
  slug,
  title,
  dek,
  href,
  image,
  pageColor,
  span,
}: CuratedArticle) {
  const isWide = span === "wide";
  const isUnitCircleCard = slug === "unit-circle";

  return (
    <article
      className={
        isWide
          ? "md:col-span-8"
          : "md:col-span-4"
      }
    >
      <Link
        href={href}
        className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] p-4 shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] sm:p-5"
        style={{ backgroundColor: pageColor }}
      >
        <div
          className={`relative w-full overflow-hidden rounded-xl ${
            isWide ? "aspect-[5/3]" : "aspect-[4/5]"
          }`}
        >
          {isUnitCircleCard ? (
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
              <UnitCircleThumbnailSvg className="transition-transform duration-500 group-hover:scale-[1.02]" />
            </div>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <p className="mt-4 text-center font-serif text-sm leading-snug sm:text-base">
          <span className="block font-semibold text-[var(--ink)]">{title}</span>
          <span className="mt-1 block text-[var(--ink-muted)]">{dek}</span>
        </p>
      </Link>
    </article>
  );
}

export function ArticlesCurated() {
  return (
    <section
      id="articles-curated"
      className="relative z-10 bg-white py-16 md:py-24"
      aria-labelledby="articles-curated-heading"
    >
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
        <div className="mb-10 text-center md:mb-14">
          <h2
            id="articles-curated-heading"
            className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight text-[var(--ink)]"
          >
            Good Internet. Just Curated.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-[var(--ink-muted)] sm:text-lg">
            Long reads and sharp essays — science, math, and the web worth
            your attention.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5 lg:gap-6">
          {getCuratedArticlesForHomeGrid().map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link href="/articles" className="btn btn-primary min-w-[10rem]">
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
