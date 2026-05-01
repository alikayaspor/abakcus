"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Cta() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="relative z-10 bg-[#E3F0D2] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left: form */}
          <div className="flex flex-col justify-center">
            <p className="font-serif text-sm font-semibold tracking-wide text-[var(--ink)]">
              Join the newsletter
            </p>
            <h2 className="font-serif mt-3 text-[clamp(1.5rem,3.8vw,2.35rem)] font-normal leading-[1.2] tracking-tight text-[var(--ink)]">
              Abakcus, but delivered. Subscribe to{" "}
              <em className="not-italic font-semibold">Beyond Euclid</em>.
            </h2>
            <p className="font-serif mt-4 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              One email a week—handpicked by Ali.
            </p>

            {sent ? (
              <p
                className="font-serif mt-8 rounded-2xl border border-[var(--ink)]/15 bg-white/70 px-5 py-4 text-[var(--ink)]"
                role="status"
              >
                Thanks — you&apos;re on the list. We&apos;ll wire this up to a
                real inbox soon; for now, your interest means a lot.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex max-w-xl flex-col gap-3"
                noValidate
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="cta-first">
                    First name
                  </label>
                  <input
                    id="cta-first"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="First name"
                    className="w-full rounded-full border border-[var(--ink)]/20 bg-white px-4 py-3.5 text-sm text-[var(--ink)] outline-none ring-0 placeholder:text-[var(--ink-muted)] focus:border-[var(--ink)]"
                  />
                  <label className="sr-only" htmlFor="cta-last">
                    Last name
                  </label>
                  <input
                    id="cta-last"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last name"
                    className="w-full rounded-full border border-[var(--ink)]/20 bg-white px-4 py-3.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink-muted)] focus:border-[var(--ink)]"
                  />
                </div>
                <label className="sr-only" htmlFor="cta-email">
                  Email
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Your email address"
                  className="w-full rounded-full border border-[var(--ink)]/20 bg-white px-4 py-3.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink-muted)] focus:border-[var(--ink)]"
                />
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="btn btn-primary min-h-[2.75rem] w-full rounded-full px-8 sm:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: sample issue card — contrasting panel */}
          <div className="flex flex-col justify-center">
            <Link
              href="/newsletter/sample"
              className="group flex h-full min-h-[280px] flex-col overflow-hidden rounded-[var(--radius-card)] bg-[#FFD8CC] shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] sm:min-h-[320px] lg:min-h-0"
            >
              <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden sm:aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80"
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:1024px) 100vw, 45vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    Latest sample
                  </p>
                  <p className="font-serif mt-2 text-lg font-semibold leading-snug text-[var(--ink)] sm:text-xl">
                    Beyond Euclid — issue zero
                  </p>
                  <p className="font-serif mt-3 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                    A taste of the letter: odd links, one honest note on
                    infinity, and a puzzle you can finish in bed.
                  </p>
                </div>
                <span className="font-serif text-sm font-semibold text-[var(--ink)] underline decoration-[var(--ink)]/30 underline-offset-4 transition group-hover:decoration-[var(--ink)]">
                  Read sample newsletter →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
