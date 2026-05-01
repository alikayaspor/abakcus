import Link from "next/link";
import { featuredPicks } from "@/data/featured-picks";
import { PiBookCoverSvg } from "@/components/home/pi-book-cover-svg";
import { Mit1869FeaturedTitlePanel } from "@/components/home/mit-1869-featured-title-panel";

export function FeaturedCarousel() {
  return (
    <section
      id="featured"
      className="relative z-10 pb-6 pt-2 md:pb-10"
      aria-label="Featured editorial picks"
    >
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-[var(--page-pad)] pb-8 pt-2 [-webkit-overflow-scrolling:touch] sm:gap-4 md:gap-6">
        {featuredPicks.map((pick) => (
          <article
            key={pick.slug}
            className="flex w-[min(82vw,18.5rem)] min-w-[min(82vw,18.5rem)] snap-center flex-col shadow-[var(--shadow-card)] sm:w-[min(78vw,20rem)] sm:min-w-[min(78vw,20rem)] md:w-[min(26vw,22rem)] md:min-w-[min(26vw,22rem)]"
          >
            <Link
              href={pick.href}
              className="group flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] p-3 sm:p-4 md:p-5"
              style={{ backgroundColor: pick.pageColor }}
            >
              <div
                className={`relative aspect-[4/5] w-full overflow-hidden rounded-xl ${
                  pick.featuredVisual === "pi-book-cover"
                    ? "bg-[#f0ebe0]"
                    : pick.featuredVisual === "mit-1869"
                      ? "bg-transparent"
                      : "bg-white/30"
                }`}
              >
                {pick.featuredVisual === "pi-book-cover" ? (
                  <div className="absolute inset-0 min-h-0">
                    <PiBookCoverSvg className="block h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                ) : pick.featuredVisual === "mit-1869" ? (
                  <Mit1869FeaturedTitlePanel />
                ) : (
                  <img
                    src={pick.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              <div className="mt-4 flex flex-1 flex-col gap-3 text-left">
                <p className="font-serif text-base leading-snug text-[var(--ink)] md:text-lg">
                  <span className="font-semibold">{pick.title}</span>
                  <span className="text-[var(--ink-muted)]"> — {pick.dek}</span>
                </p>
                <span className="tag-pill mt-auto w-fit border-black/10 bg-white/55">
                  {pick.tag}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
