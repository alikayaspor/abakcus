import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";

export default function NewsletterPage() {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto flex min-h-[min(70vh,32rem)] max-w-lg flex-col justify-center px-[var(--page-pad)] py-16 text-center sm:min-h-[60vh] sm:py-20">
        <h1 className="font-serif text-[clamp(1.75rem,6vw,2.25rem)] tracking-tight text-[var(--ink)]">
          Newsletter
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
          Coming soon — a quiet note when we add something worth your time.
        </p>
        <Link
          href="/"
          className="btn btn-primary mx-auto mt-8 w-full max-w-xs sm:mt-10 sm:w-fit sm:max-w-none"
        >
          Back to home
        </Link>
      </div>
    </>
  );
}
