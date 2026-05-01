export function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-[44rem] px-[var(--page-pad)] pb-14 pt-10 text-center sm:pb-16 sm:pt-12 md:pb-20 md:pt-16">
      {/* Soft wash — keeps the block feeling gentle without a heavy card */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(22rem,55vw)] w-[min(100%,26rem)] -translate-x-1/2 -translate-y-[42%] rounded-[50%] bg-[color-mix(in_srgb,var(--pastel-lavender)_32%,transparent)] blur-[64px] opacity-[0.55] sm:opacity-70"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-[min(36rem,100%)]">
        <p className="mb-5 font-mono text-[0.58rem] font-normal uppercase tracking-[0.28em] text-[var(--ink-muted)] sm:mb-6 sm:text-[0.6rem]">
          For curious minds
        </p>
        <h1 className="font-serif text-balance text-[clamp(1.75rem,5.4vw,2.85rem)] font-normal leading-[1.12] tracking-[-0.03em] text-[var(--ink)]">
          The <span className="hero-brush">good</span> side of the{" "}
          <span className="hero-brush hero-brush--alt">internet</span>.
        </h1>
        <div
          className="mx-auto mt-7 h-px w-10 bg-gradient-to-r from-transparent via-[var(--ink)]/25 to-transparent sm:mt-8 sm:w-12"
          aria-hidden
        />
        <p className="mx-auto mt-7 max-w-[28rem] text-pretty font-sans text-[0.9375rem] font-normal leading-[1.8] text-[var(--ink-muted)] sm:mt-8 sm:text-base sm:leading-[1.82]">
          Long reads on mathematics, science, and corners of the web that still
          feel human — picked slowly, written by Ali with a light touch, and
          meant to stick with you after you close the tab.
        </p>
      </div>
    </section>
  );
}
