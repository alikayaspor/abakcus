import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";

export default function NewsletterSamplePage() {
  return (
    <>
      <SiteHeader />
      <article className="mx-auto max-w-2xl px-[var(--page-pad)] py-12 sm:py-16">
        <p className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
          Sample · Beyond Euclid
        </p>
        <h1 className="font-serif mt-3 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-[var(--ink)]">
          Issue zero (preview)
        </h1>
        <p className="font-serif mt-6 text-lg leading-relaxed text-[var(--ink-muted)]">
          This is a standing preview of what subscribers get: one tight email
          a week—tools, essays, and rabbit holes Ali actually opens. The real
          send is coming; for now, enjoy the shape of the thing.
        </p>
        <div className="font-serif mt-10 space-y-6 text-[var(--ink)] leading-relaxed">
          <p>
            <strong>Start here.</strong> A proof that felt like a poem, a map
            of the primes you can hang on a wall, and a browser tab you&apos;ll
            regret closing.
          </p>
          <p>
            <strong>Then wander.</strong> Short lists, long reads, and the
            occasional gadget that belongs on your desk, not in a drawer.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary w-full sm:w-auto">
            Back to home
          </Link>
          <Link href="/newsletter" className="btn btn-ghost w-full sm:w-auto">
            Newsletter hub
          </Link>
        </div>
      </article>
    </>
  );
}
