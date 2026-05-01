/**
 * Featured carousel — typographic “cover” for MIT 1869 (no scan image).
 */
export function Mit1869FeaturedTitlePanel() {
  return (
    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-xl bg-[var(--ink)] px-4 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] ring-1 ring-black/25 transition-[transform,box-shadow] duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)] sm:px-6 sm:py-10">
      <p className="max-w-[12.5rem] font-serif text-[clamp(1.2rem,4.2vw,1.5rem)] font-medium leading-[1.18] tracking-[-0.02em] text-[#f2efe8] sm:max-w-none">
        <span className="block">MIT&apos;s 1869</span>
        <span className="mt-2 block text-[clamp(1.38rem,4.9vw,1.78rem)] font-normal leading-[1.15]">
          Algebra Entrance Exam
        </span>
      </p>
    </div>
  );
}
