import Image from "next/image";
import Link from "next/link";
import {
  INTERNET_TOOLS_CARD_COLOR,
  internetToolsPicks,
} from "@/data/internet-tools-picks";

function ToolCard({
  title,
  dek,
  href,
  image,
}: {
  title: string;
  dek: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group flex h-full min-h-0 flex-col overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_56px_-32px_rgba(0,0,0,0.22)] sm:p-4"
      style={{ backgroundColor: INTERNET_TOOLS_CARD_COLOR }}
    >
      <div className="relative w-full overflow-hidden rounded-lg bg-white/40 aspect-[4/3]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
      </div>
      <div className="mt-3 flex flex-1 flex-col justify-end px-0.5 pb-0.5 text-center">
        <p className="font-sans text-[0.8rem] leading-snug text-[var(--ink)]">
          <span className="font-semibold">{title}</span>
          <span className="text-[var(--ink-muted)]"> — {dek}</span>
        </p>
      </div>
    </Link>
  );
}

export function InternetToolsGrid() {
  return (
    <section
      id="internet-tools"
      className="relative z-10 border-t border-[var(--line-soft)] bg-white py-14 md:py-20"
      aria-labelledby="internet-tools-heading"
    >
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
        <div className="mb-10 text-center md:mb-14">
          <h2
            id="internet-tools-heading"
            className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight text-[var(--ink)]"
          >
            Tools worth the tab.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[var(--ink-muted)] sm:text-lg">
            Handpicked apps, sites, and extensions from the open web — useful,
            odd, and worth bookmarking.
          </p>
          <Link
            href="/tools"
            className="mt-6 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[var(--ink)] underline-offset-4 transition-colors hover:underline"
          >
            View all tools
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6">
          {internetToolsPicks.slice(0, 9).map((item) => (
            <ToolCard
              key={item.slug}
              title={item.title}
              dek={item.dek}
              href={item.href}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
