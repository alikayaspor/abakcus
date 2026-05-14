import Link from "next/link";
import { booksFeatured, booksShelf } from "@/data/books-picks";

const allBooks = [booksFeatured, ...booksShelf]
  .sort((a, b) => {
    const aIsList = a.href.startsWith("/book-lists/");
    const bIsList = b.href.startsWith("/book-lists/");
    if (aIsList !== bIsList) return aIsList ? -1 : 1;
    return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
  })
  .slice(0, 8);

function ShelfCard({
  title,
  author,
  dek,
  href,
  image,
  pageColor,
  compact,
}: {
  title: string;
  author: string;
  dek: string;
  href: string;
  image: string;
  pageColor: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={`group flex h-full min-h-0 flex-col overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] ${
        compact ? "p-3 sm:p-4" : "p-4 sm:p-5 md:p-6"
      }`}
      style={{ backgroundColor: pageColor }}
    >
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt=""
          className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "mt-3 gap-1.5" : "mt-5 gap-2"}`}>
        <p
          className={`font-serif leading-snug text-[var(--ink)] ${
            compact
              ? "text-[0.95rem] sm:text-base"
              : "text-lg sm:text-xl md:text-2xl"
          }`}
        >
          <span className="font-semibold">{title}</span>
        </p>
        <p
          className={`font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)] ${
            compact ? "" : "text-[0.7rem]"
          }`}
        >
          {author}
        </p>
        <p
          className={`font-serif leading-relaxed text-[var(--ink-muted)] ${
            compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"
          }`}
        >
          {dek}
        </p>
      </div>
    </Link>
  );
}

export function BooksShelf() {
  return (
    <section
      id="books"
      className="relative z-10 overflow-hidden border-t border-[var(--line-soft)] py-16 md:py-24"
      aria-labelledby="books-shelf-heading"
    >
      {/* Warm paper wash — distinct from adjacent tonal/tools blocks */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color-mix(in_srgb,var(--pastel-peach)_42%,white)] via-white to-[var(--tonal)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
        <div className="mb-10 text-center md:mb-14">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--ink-muted)]">
            Reading list
          </p>
          <h2
            id="books-shelf-heading"
            className="mt-4 font-serif text-[clamp(1.6rem,4.2vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-[var(--ink)]"
          >
            Long reads, bound.
          </h2>
          <div className="mt-6">
            <Link
              href="/books"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-4 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)] transition-colors duration-200 hover:border-[var(--ink-muted)] hover:text-[var(--ink)]"
            >
              View all books
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
            Math, science, and voices that reward slow pages — the shelf we
            steal from between essays.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {allBooks.map((book) => (
            <li key={book.slug}>
              <ShelfCard
                title={book.title}
                author={book.author}
                dek={book.dek}
                href={book.href}
                image={book.image}
                pageColor={book.pageColor}
                compact
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
