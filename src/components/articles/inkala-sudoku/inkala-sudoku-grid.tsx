"use client";

/** Arto Inkala's 2012 "world's hardest" Sudoku — 23 givens (0 = empty). */
const PUZZLE: number[][] = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 9, 0, 2, 0, 0],
  [0, 5, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 4, 5, 7, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 6, 8],
  [0, 0, 8, 5, 0, 0, 0, 1, 0],
  [0, 9, 0, 0, 0, 0, 4, 0, 0],
];

export function InkalaSudokuGrid() {
  return (
    <div className="my-10 overflow-hidden rounded-[var(--radius-card)] border border-[var(--line)] shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_35%,white)] px-4 py-2.5 sm:px-5">
        <span className="font-mono text-[0.52rem] uppercase leading-snug tracking-[0.14em] text-[var(--ink-muted)]">
          Arto Inkala&apos;s hardest Sudoku · 2012 · 23 given cells
        </span>
        <a
          href="https://www.sudokuwiki.org/Arto_Inkala_Sudoku"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-[0.52rem] tracking-[0.08em] text-[var(--ink-muted)] underline decoration-[var(--line)] underline-offset-2 transition-colors hover:text-[var(--ink)]"
        >
          Try online →
        </a>
      </div>
      <div className="flex justify-center bg-[color-mix(in_srgb,var(--pastel-peach)_22%,white)] px-4 py-6 sm:px-6 sm:py-8">
        <div
          className="grid w-full max-w-[400px] grid-cols-9 border-2 border-[var(--ink)]"
          role="img"
          aria-label="Sudoku grid: 9 by 9 cells, 23 cells filled with given digits"
        >
          {PUZZLE.map((row, r) =>
            row.map((val, c) => {
              const thickRight = c === 2 || c === 5;
              const thickBottom = r === 2 || r === 5;
              const given = val !== 0;
              return (
                <div
                  key={`${r}-${c}`}
                  className={[
                    "flex aspect-square items-center justify-center border-[0.5px] border-[var(--line)] font-mono text-[clamp(0.7rem,2.8vw,1.05rem)] tabular-nums text-[var(--ink)]",
                    given
                      ? "bg-[color-mix(in_srgb,var(--pastel-peach)_18%,white)] font-medium"
                      : "bg-[color-mix(in_srgb,var(--pastel-peach)_8%,white)]",
                    thickRight ? "border-r-2 border-r-[var(--ink-muted)]" : "",
                    thickBottom ? "border-b-2 border-b-[var(--ink-muted)]" : "",
                  ].join(" ")}
                >
                  {given ? val : ""}
                </div>
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
}
