import Link from "next/link";
import { videosPicks, type VideoPick } from "@/data/videos-picks";

function isFilmOrDoc(tag: string) {
  return tag.includes("Film") || tag.includes("Documentary");
}

function VideoCard({ title, dek, tag, href, image, pageColor }: VideoPick) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
      style={{ backgroundColor: pageColor }}
    >
      <div className="m-3 w-[calc(100%-1.5rem)] overflow-hidden rounded-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ aspectRatio: "16/9" }}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 pb-5 pt-1">
        <p className="font-sans text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
          {tag}
        </p>
        <p className="font-serif text-base font-semibold leading-snug text-[var(--ink)] sm:text-lg">
          {title}
        </p>
        <p className="font-serif text-sm leading-relaxed text-[var(--ink-muted)]">{dek}</p>
      </div>
    </Link>
  );
}

function FilmCard(props: VideoPick) {
  const { title, dek, tag, href, image, pageColor } = props;
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
      style={{ backgroundColor: pageColor }}
    >
      <div className="m-3 w-[calc(100%-1.5rem)] overflow-hidden rounded-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ aspectRatio: "2/3" }}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 pb-5 pt-1">
        <p className="font-sans text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
          {tag}
        </p>
        <p className="font-serif text-base font-semibold leading-snug text-[var(--ink)] sm:text-lg">
          {title}
        </p>
        <p className="font-serif text-sm leading-relaxed text-[var(--ink-muted)]">{dek}</p>
      </div>
    </Link>
  );
}

export function HomeVideos() {
  const videos = videosPicks.filter((v) => !isFilmOrDoc(v.tag)).slice(0, 6);
  const films = videosPicks.filter((v) => isFilmOrDoc(v.tag));

  return (
    <section
      id="videos"
      className="relative z-10 overflow-hidden border-t border-[var(--line-soft)] py-16 md:py-24"
      aria-labelledby="home-videos-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color-mix(in_srgb,var(--pastel-sky)_30%,white)] via-white to-[var(--tonal)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">

        {/* ── HEADING ── */}
        <div className="mb-10 text-center md:mb-14">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--ink-muted)]">
            Videos
          </p>
          <h2
            id="home-videos-heading"
            className="mt-4 font-serif text-[clamp(1.6rem,4.2vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-[var(--ink)]"
          >
            Moving pictures worth your time.
          </h2>
          <div className="mt-6">
            <Link
              href="/videos"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-4 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)] transition-colors duration-200 hover:border-[var(--ink-muted)] hover:text-[var(--ink)]"
            >
              View all videos
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
        </div>

        {/* ── ROW 1: Videos (landscape) ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-5">
          {videos.map((v) => (
            <VideoCard key={v.slug} {...v} />
          ))}
        </div>

        {/* ── ROW 2: Films & Documentaries (portrait) ── */}
        {films.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {films.map((v) => (
              <FilmCard key={v.slug} {...v} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
