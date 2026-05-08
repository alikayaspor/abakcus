import Image from "next/image";
import Link from "next/link";
import {
  piBooksEntries,
  piBooksListHero,
  piDigitStrip,
  type PiBookEntry,
} from "@/data/pi-books-list";

/** Matches article section labels (`SectionHead` in longform pieces). */
function BookSectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-5 flex flex-col gap-1 border-b border-[var(--line)] pb-3 sm:flex-row sm:items-baseline sm:gap-4">
      <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {num}
      </span>
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function AsideBlock({
  bookId,
  aside,
}: {
  bookId: string;
  aside: NonNullable<PiBookEntry["aside"]>;
}) {
  const aid = `aside-${bookId}`;
  return (
    <aside
      className="my-6 rounded-xl border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-peach)_48%,white)] px-4 py-3.5 shadow-[var(--shadow-soft)] [&_em]:italic"
      aria-labelledby={aid}
    >
      <p
        id={aid}
        className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]"
      >
        {aside.title}
      </p>
      <p
        className="mt-2 text-base leading-[1.75] text-[var(--ink)] sm:text-[1.05rem] sm:leading-[1.8]"
        dangerouslySetInnerHTML={{ __html: aside.bodyHtml }}
      />
      {aside.trailingLink ? (
        <p className="mt-2 text-base leading-[1.75] text-[var(--ink)] sm:text-[1.05rem] sm:leading-[1.8]">
          (
          <Link
            href={aside.trailingLink.href}
            className="article-euclid-link font-medium"
          >
            {aside.trailingLink.label}
          </Link>
          .)
        </p>
      ) : null}
    </aside>
  );
}

/** Clickable cover — 3D tilt + layered shadow + shine (respects reduced motion). */
function BookCoverLink({
  book,
  priority,
}: {
  book: PiBookEntry;
  priority: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-[11rem] [perspective:min(92vw,880px)] sm:mx-0">
      <a
        href={book.amazonUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        title="Open on Amazon"
        className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label={`${book.title} — open on Amazon`}
      >
        <div
          className="relative aspect-[2/3] w-full origin-center overflow-hidden rounded-xl bg-gradient-to-br from-white/55 to-[color-mix(in_srgb,var(--pastel-sky)_42%,white)] [backface-visibility:hidden] shadow-[0_10px_28px_-8px_rgba(33,35,36,0.38),0_4px_14px_-4px_rgba(33,35,36,0.2),inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ring-black/[0.09] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform [transform-style:preserve-3d] motion-reduce:transition-none motion-reduce:duration-0 group-hover:[transform:translate3d(0,-6px,14px)_rotateX(5deg)_rotateY(-9deg)] group-hover:shadow-[0_26px_52px_-14px_rgba(33,35,36,0.45),0_14px_36px_-12px_rgba(33,35,36,0.32),inset_0_1px_0_rgba(255,255,255,0.65)] motion-reduce:group-hover:[transform:none] motion-reduce:group-hover:shadow-[0_10px_28px_-8px_rgba(33,35,36,0.38),0_4px_14px_-4px_rgba(33,35,36,0.2)] active:scale-[0.98] motion-reduce:active:scale-100"
        >
          <span
            className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-gradient-to-br from-white/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute inset-0 z-[11] rounded-xl bg-gradient-to-t from-black/[0.07] via-transparent to-white/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
            aria-hidden
          />
          <Image
            src={book.coverSrc}
            alt={book.coverAlt}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width:640px) 176px, 176px"
            priority={priority}
          />
        </div>
      </a>
    </div>
  );
}

function BookEntry({ book, priority }: { book: PiBookEntry; priority: boolean }) {
  const sectionNum = book.ordinal.split(/\s+/)[0] ?? book.ordinal;

  return (
    <li className="list-none">
      <article
        id={book.id}
        className="rounded-[var(--radius-card)] border border-[var(--line-soft)] bg-white/65 p-5 shadow-[var(--shadow-soft)] sm:p-6"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-7">
          <div className="mx-auto flex w-full max-w-[11rem] shrink-0 flex-col sm:mx-0 sm:w-[11rem]">
            <BookCoverLink book={book} priority={priority} />
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-[#b8c96a] bg-[#c9d87c] px-3 py-2 font-sans text-[0.72rem] font-semibold tracking-[0.04em] text-[#3a4a12] shadow-[0_1px_3px_rgba(140,160,40,0.15)] transition-all duration-200 hover:bg-[#bdd070] hover:border-[#aabe58] hover:shadow-[0_3px_10px_rgba(140,160,40,0.25)] hover:-translate-y-px active:translate-y-0 active:shadow-none"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="opacity-60">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Get it on Amazon
            </a>
          </div>

          <div className="min-w-0 flex-1">
            <BookSectionHead num={sectionNum} title={book.title} />
            <p className="font-serif text-sm italic leading-relaxed text-[var(--ink-muted)] sm:text-[0.95rem]">
              {book.authorLine}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
              {book.tags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-lavender)_38%,white)] px-2.5 py-1 font-sans text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[var(--ink-muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              {book.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>

            {book.pull ? (
              <blockquote className="my-7 rounded-xl border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-lavender)_32%,white)] px-4 py-4 font-serif text-[1.02rem] italic leading-[1.7] text-[var(--ink)] sm:px-5 sm:text-[1.06rem]">
                {book.pull}
              </blockquote>
            ) : null}

            {book.aside ? <AsideBlock bookId={book.id} aside={book.aside} /> : null}

            <div className="mt-7 flex flex-col gap-2 rounded-xl border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-lime)_36%,white)] px-4 py-3.5 sm:flex-row sm:items-baseline sm:gap-3 sm:px-5">
              <span className="shrink-0 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                Who for
              </span>
              <span className="text-base leading-[1.75] text-[var(--ink)] sm:text-[1.05rem] sm:leading-[1.8]">
                {book.verdict}
              </span>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export function PiBooksList() {
  return (
    <div className="book-list-page unit-circle-article text-[var(--ink)]">
      {/* Hero — same rhythm as longform articles (e.g. Indiana π bill) */}
      <header className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
        <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
          {piBooksListHero.kicker}
        </p>
        <h1 className="font-serif text-[clamp(1.85rem,5vw,2.65rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
          {piBooksListHero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
          {piBooksListHero.sub}
        </p>
        <div
          className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
          aria-hidden
        />
      </header>

      <div className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)]">
        <div
          className="max-w-full overflow-x-hidden rounded-2xl border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-sky)_28%,white)] px-3 py-3 shadow-[var(--shadow-soft)]"
          aria-hidden
        >
          <p className="max-w-full break-all font-mono text-[0.58rem] leading-[1.65] tracking-tight text-[var(--ink-muted)] sm:text-[0.6rem] sm:leading-[1.7]">
            {piDigitStrip}
          </p>
        </div>
      </div>

      <ol className="mx-auto max-w-[min(48rem,100%)] list-none space-y-8 px-[var(--page-pad)] pb-20 pt-10 sm:space-y-10 sm:pb-28 sm:pt-12">
        {piBooksEntries.map((book, i) => (
          <BookEntry key={book.id} book={book} priority={i < 2} />
        ))}
      </ol>
    </div>
  );
}
