"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SiteHeader } from "@/components/home/site-header";

const PUZZLE_DATA = [
  [4,0,6,3,8,0,0,2,0],
  [5,0,3,7,0,4,0,0,0],
  [0,0,0,9,0,0,8,4,3],
  [2,3,0,0,1,0,9,0,0],
  [0,4,0,0,0,0,5,7,1],
  [0,5,0,6,4,7,0,0,0],
  [9,0,1,4,0,8,3,0,0],
  [0,6,4,0,0,0,0,0,7],
  [8,0,5,1,0,3,0,9,2]
];

const COLORS = ['#8b3a2a','#b8860b','#2a5a3a','#2a3a7a','#6b2a6b','#1a5a5a','#5a4a1a','#4a1a1a','#1a1a5a'];

function computeSolution(board: number[][]): number[][] {
  const b = board.map(r => [...r]);
  const ok = (r: number, c: number, n: number): boolean => {
    for(let i=0;i<9;i++) if(b[r][i]===n||b[i][c]===n) return false;
    const br=Math.floor(r/3)*3, bc=Math.floor(c/3)*3;
    for(let i=0;i<3;i++) for(let j=0;j<3;j++) if(b[br+i][bc+j]===n) return false;
    return true;
  };
  const go = (): boolean => {
    for(let r=0;r<9;r++) for(let c=0;c<9;c++){
      if(!b[r][c]){
        for(let n=1;n<=9;n++) if(ok(r,c,n)){ b[r][c]=n; if(go()) return true; b[r][c]=0; }
        return false;
      }
    }
    return true;
  };
  go();
  return b;
}

export function SudokuMathematicsArticle() {
  const [solution, setSolution] = useState<number[][] | null>(null);
  const [solvedCells, setSolvedCells] = useState<boolean[][]>(PUZZLE_DATA.map(r => r.map(v => v === 0)));
  const [userColors, setUserColors] = useState<(string | null)[][]>(PUZZLE_DATA.map(row => row.map(v => v ? COLORS[v-1] : null)));
  const [activeColor, setActiveColor] = useState(COLORS[0]);

  useEffect(() => {
    const sol = computeSolution(PUZZLE_DATA.map(r=>[...r]));
    setSolution(sol);
  }, []);

  const solvePuzzle = () => {
    setSolvedCells(prev => {
      const newSolved = prev.map(r => [...r]);
      let delay = 0;
      for(let r=0; r<9; r++) {
        for(let c=0; c<9; c++) {
          if(prev[r][c] && !newSolved[r][c] && solution) {
            setTimeout(() => {
              setSolvedCells(s => {
                const updated = s.map(row => [...row]);
                updated[r] = [...updated[r]];
                updated[r][c] = false;
                return updated;
              });
            }, delay);
            delay += 28;
          }
        }
      }
      return newSolved;
    });
  };

  const handleColorClick = (color: string) => {
    setActiveColor(color);
  };

  const handleCellClick = (r: number, c: number) => {
    if(PUZZLE_DATA[r][c] !== 0) return;

    const digit = COLORS.indexOf(activeColor) + 1;
    let conflict = false;

    for(let i=0; i<9; i++) {
      if(userColors[r][i] === activeColor || userColors[i][c] === activeColor) {
        conflict = true;
      }
      const br=Math.floor(r/3)*3, bc=Math.floor(c/3)*3;
      if(userColors[br + (i%3)][bc + Math.floor(i/3)] === activeColor) {
        conflict = true;
      }
    }

    if(conflict) {
      alert(`Conflict — an adjacent cell already holds digit ${digit}. Sudoku rule violated.`);
      return;
    }

    const newColors = userColors.map(row => [...row]);
    newColors[r] = [...newColors[r]];
    newColors[r][c] = activeColor;
    setUserColors(newColors);
  };

  return (
    <>
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/articles"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← All articles
          </Link>
        </div>

        <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">
          {/* Hero */}
          <div className="mb-12 pb-8 border-b border-[var(--line)]">
            <p className="mb-5 font-sans text-xs uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
              Mathematics · Combinatorics · Algorithms
            </p>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              The Mathematics of Sudoku
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] font-serif italic">
              On counting, solving, and seeing a puzzle as a graph
            </p>
          </div>

          {/* Featured Image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img
              src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20Mathematics%20of%20Sudoku.png"
              alt="The Mathematics of Sudoku"
              className="w-full h-auto"
            />
          </figure>

          {/* Table of Contents */}
          <nav className="mb-12 bg-[var(--tonal)] border-l-4 border-[var(--line)] p-6 rounded">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)] mb-4">
              Contents
            </h3>
            <ol className="space-y-2 font-sans text-sm text-[var(--ink-muted)] list-decimal list-inside">
              <li><a href="#counting" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">Counting Sudokus</a></li>
              <li><a href="#clues" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">How Many Clues?</a></li>
              <li><a href="#algo1" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">Solving Algorithms — Backtracking</a></li>
              <li><a href="#algo2" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">Crook&apos;s Pencil-and-Paper Algorithm</a></li>
              <li><a href="#graphs" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">Sudokus as Graphs</a></li>
            </ol>
          </nav>

          {/* Intro */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Take a 9×9 grid. Fill it so that every row, every column, and every bold-bordered 3×3 box contains each of the digits 1 through 9 exactly once. The rule is that simple. And yet the mathematics hiding inside that rule can occupy you for weeks.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              We are not here to learn how to beat the person next to you on the subway — though we will pick up some powerful techniques along the way. The real questions are mathematical: how many distinct completed grids are there? What is the minimum number of given clues that guarantees a unique solution? Can a human being, armed only with pencil and paper, solve any Sudoku puzzle whatsoever?
            </p>

            {/* Main Sudoku Grid */}
            <div className="my-10 flex justify-center">
              <div className="overflow-x-auto">
                <table className="border-collapse font-mono text-sm bg-white shadow-lg">
                  <tbody>
                    {PUZZLE_DATA.map((row, r) => (
                      <tr key={r} className={r % 3 === 2 ? "border-b-4 border-b-[var(--ink)]" : ""}>
                        {row.map((val, c) => {
                          const isSolved = solution && solvedCells[r][c] && !val;
                          return (
                            <td
                              key={`${r}-${c}`}
                              className={`
                                w-10 h-10 text-center border border-gray-300 cursor-pointer
                                ${c % 3 === 2 ? "border-r-4 border-r-[var(--ink)]" : ""}
                                ${r === 0 ? "border-t-4 border-t-[var(--ink)]" : ""}
                                ${c === 0 ? "border-l-4 border-l-[var(--ink)]" : ""}
                                ${val ? "bg-white text-[var(--ink)] font-semibold" : "bg-gray-50 hover:bg-gray-100"}
                                ${isSolved ? "text-[var(--ink)] font-semibold animate-pulse" : ""}
                              `}
                            >
                              {val && <span className="text-[var(--ink-muted)]">{val}</span>}
                              {isSolved && solution && <span className="text-[var(--ink)]">{solution[r][c]}</span>}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center text-sm text-[var(--ink-muted)] space-y-1">
              <p className="font-mono text-xs uppercase tracking-widest">Sample puzzle from the introduction</p>
              <button
                onClick={solvePuzzle}
                className="inline-block text-[var(--ink)] underline hover:text-[var(--ink-muted)] transition font-mono text-xs uppercase tracking-wider"
              >
                Solve it →
              </button>
            </div>
          </section>

          {/* §1: Counting */}
          <section className="mb-16" id="counting">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              <span className="block font-sans text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)] mb-2">§ 1</span>
              Counting Sudokus
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              In how many distinct ways can an empty 9×9 Sudoku grid be completed? Start with a rough ceiling. Each of the 81 cells can hold at most 9 digits, so the total number of ways to fill the grid — ignoring every constraint — is at most 9⁸¹, approximately 2 × 10⁷⁷. That is astronomically large and hopelessly loose.
            </p>

            <div className="my-10 text-center">
              <div className="text-[var(--ink-muted)] font-sans text-xs uppercase tracking-[0.14em] mb-3">First upper bound</div>
              <div className="font-serif text-4xl font-bold text-[var(--ink)]">
                9⁸¹ ≈ 2 × 10⁷⁷
              </div>
              <p className="mt-2 font-sans text-xs text-[var(--ink-muted)]">Comparable to atoms in the observable universe</p>
            </div>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Now apply the row constraint: filling left to right, the first cell of each row has 9 options, the second has 8, and so on down to 1. Each row contributes 9! = 362,880 arrangements, and nine independent rows give (9!)⁹ ≈ 1.1 × 10⁵⁰. Still enormous, but fifty orders of magnitude tighter.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              We can do the same for columns and boxes. For columns, the more rows already filled above a cell, the fewer unused digits remain in that column. For boxes, each 3×3 block depletes its options in the same 9–8–7–…–1 pattern as you work through its nine cells. Drawing the per-cell maxima for each constraint separately makes the argument concrete.
            </p>

            {/* Three individual constraint tables */}
            <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
              <figure>
                <div className="flex justify-center">
                  <table className="border-collapse bg-white" style={{fontSize:"10px"}}>
                    <tbody>
                      {Array.from({length:9},(_,r) => (
                        <tr key={r}>
                          {[9,8,7,6,5,4,3,2,1].map((v, c) => (
                            <td key={c} className={`w-6 h-6 text-center border border-gray-200 text-[var(--ink)] ${r%3===2?"border-b border-b-[var(--ink)]":""} ${c%3===2?"border-r border-r-[var(--ink)]":""} ${r===0?"border-t border-t-[var(--ink)]":""} ${c===0?"border-l border-l-[var(--ink)]": ""}`}
                              style={{background:`rgba(42,90,58,${0.03+(v/9)*0.22})`}}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <figcaption className="text-center font-mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest mt-2">Row constraint</figcaption>
              </figure>

              <figure>
                <div className="flex justify-center">
                  <table className="border-collapse bg-white" style={{fontSize:"10px"}}>
                    <tbody>
                      {Array.from({length:9},(_,r) => (
                        <tr key={r}>
                          {Array.from({length:9},() => 9-r).map((v, c) => (
                            <td key={c} className={`w-6 h-6 text-center border border-gray-200 text-[var(--ink)] ${r%3===2?"border-b border-b-[var(--ink)]":""} ${c%3===2?"border-r border-r-[var(--ink)]":""} ${r===0?"border-t border-t-[var(--ink)]":""} ${c===0?"border-l border-l-[var(--ink)]": ""}`}
                              style={{background:`rgba(42,58,122,${0.03+(v/9)*0.22})`}}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <figcaption className="text-center font-mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest mt-2">Column constraint</figcaption>
              </figure>

              <figure>
                <div className="flex justify-center">
                  <table className="border-collapse bg-white" style={{fontSize:"10px"}}>
                    <tbody>
                      {[[9,8,7,9,8,7,9,8,7],[6,5,4,6,5,4,6,5,4],[3,2,1,3,2,1,3,2,1],[9,8,7,9,8,7,9,8,7],[6,5,4,6,5,4,6,5,4],[3,2,1,3,2,1,3,2,1],[9,8,7,9,8,7,9,8,7],[6,5,4,6,5,4,6,5,4],[3,2,1,3,2,1,3,2,1]].map((row, r) => (
                        <tr key={r}>
                          {row.map((v, c) => (
                            <td key={c} className={`w-6 h-6 text-center border border-gray-200 text-[var(--ink)] ${r%3===2?"border-b border-b-[var(--ink)]":""} ${c%3===2?"border-r border-r-[var(--ink)]":""} ${r===0?"border-t border-t-[var(--ink)]":""} ${c===0?"border-l border-l-[var(--ink)]": ""}`}
                              style={{background:`rgba(107,42,107,${0.03+(v/9)*0.22})`}}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <figcaption className="text-center font-mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest mt-2">Box constraint</figcaption>
              </figure>
            </div>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              For each cell, the actual number of viable choices cannot exceed any one of these three figures — it is bounded by all three simultaneously. Taking the cell-by-cell minimum across the three tables gives the tightest ceiling we can derive from independent constraints. Multiplying all 81 of those minima together yields approximately 1.5 × 10³¹.
            </p>

            {/* Combined minimum table */}
            <div className="my-10">
              <p className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mb-3">Combined minimum — choices per cell</p>
              <div className="overflow-x-auto flex justify-center">
                <table className="border-collapse font-mono text-xs bg-white">
                  <tbody>
                    {[
                      [9,8,7,6,5,4,3,2,1],
                      [6,5,4,6,5,4,3,2,1],
                      [3,2,1,3,2,1,3,2,1],
                      [6,6,6,6,5,4,3,2,1],
                      [5,5,4,5,5,4,3,2,1],
                      [3,2,1,3,2,1,3,2,1],
                      [3,3,3,3,3,3,3,2,1],
                      [2,2,2,2,2,2,2,2,1],
                      [1,1,1,1,1,1,1,1,1]
                    ].map((row, r) => (
                      <tr key={r} className={r % 3 === 2 ? "border-b border-b-[var(--ink)]" : ""}>
                        {row.map((v, c) => {
                          const heat = v / 9;
                          return (
                            <td
                              key={`${r}-${c}`}
                              className={`
                                w-9 h-9 text-center border border-gray-200 text-[var(--ink)]
                                ${c % 3 === 2 ? "border-r border-r-[var(--ink)]" : ""}
                                ${r === 0 ? "border-t border-t-[var(--ink)]" : ""}
                                ${c === 0 ? "border-l border-l-[var(--ink)]" : ""}
                                ${v === 1 ? "font-semibold" : ""}
                              `}
                              style={{ background: `rgba(139,58,42,${0.04 + heat * 0.28})` }}
                            >
                              {v}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mb-8">
              Product of all 81 entries ≈ 1.5 × 10³¹
            </p>

            <div className="my-10 bg-[var(--tonal)] border-l-4 border-[var(--ink)] p-6 rounded">
              <strong className="block text-[var(--ink)] font-serif text-base mb-2">
                The Exact Count (Felgenhauer &amp; Jarvis, 2005)
              </strong>
              <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed">
                Using a C++ brute-force program, Bertram Felgenhauer and Frazer Jarvis determined that the exact number of completed 9×9 Sudoku grids is <strong className="text-[var(--ink)]">6,670,903,752,021,072,936,960</strong> — approximately 6.7 × 10²¹. Our best hand-computed upper bound was still a billion times larger.
              </p>
            </div>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The gap between our upper bound and the true count arises because for each cell we used only <em>one</em> constraint at a time. In reality, the row, column, and box constraints interact — and their combined effect eliminates far more possibilities than any single constraint alone.
            </p>
          </section>

          {/* §2: Clues */}
          <section className="mb-16" id="clues">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              <span className="block font-sans text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)] mb-2">§ 2</span>
              How Many Clues?
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A friend hands you a hand-crafted Sudoku puzzle. After staring at it for a while, you start to wonder: does it even have a solution? And if it does, is that solution unique? The answer to both questions is, in general, very hard to determine without a computer.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Uniqueness</h3>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Perhaps surprisingly, a 9×9 Sudoku with only four empty cells need not have a unique solution. Here is a concrete demonstration: two rows with four blanks arranged in a 2×2 pattern across two boxes.
            </p>

            {/* Non-uniqueness example: two valid completions */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {([
                { label: "Solution A", rows: [[3,4,1,2,7,6,5,9,8],[5,6,2,1,8,9,3,4,7]] },
                { label: "Solution B", rows: [[3,4,2,1,7,6,5,9,8],[5,6,1,2,8,9,3,4,7]] }
              ] as {label:string, rows:number[][]}[]).map(({label, rows}) => (
                <figure key={label}>
                  <div className="flex justify-center">
                    <table className="border-collapse font-mono text-xs bg-white border-2 border-[var(--ink)]">
                      <tbody>
                        {rows.map((row, r) => (
                          <tr key={r}>
                            {row.map((v, c) => {
                              const isSwapped = c === 2 || c === 3;
                              return (
                                <td key={c}
                                  className={`w-7 h-7 text-center border border-gray-300 font-semibold text-xs
                                    ${c%3===2?"border-r-2 border-r-[var(--ink)]":""}
                                    ${c===0?"border-l-2 border-l-[var(--ink)]":""}
                                    ${r===0?"border-t-2 border-t-[var(--ink)]":"border-t border-t-gray-300"}
                                    ${r===rows.length-1?"border-b-2 border-b-[var(--ink)]":""}`}
                                  style={{
                                    background: isSwapped ? "#D4E0EC" : "white",
                                    color: isSwapped ? "#2a3a7a" : "var(--ink)"
                                  }}>
                                  {v}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <figcaption className="text-center font-mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest mt-2">{label}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mb-8 text-sm text-[var(--ink-muted)] font-sans italic text-center">
              The highlighted cells are the four blanks. Swapping 1↔2 in those positions satisfies every row, column, and box constraint in both arrangements.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              On the other hand, any solvable Sudoku with at most three empty cells is guaranteed to have exactly one solution. The argument is clean: among three empty cells, at least one must be the sole blank in its row or column. Since the other eight entries are fixed, that cell is forced.
            </p>

            <div className="my-10 bg-[var(--tonal)] border-l-4 border-[var(--ink)] p-6 rounded">
              <strong className="block text-[var(--ink)] font-serif text-base mb-2">
                The 17-Clue Conjecture
              </strong>
              <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed">
                The minimum number of filled cells needed to guarantee a unique solution to a 9×9 Sudoku is conjectured to be <strong className="text-[var(--ink)]">17</strong>. Puzzles with exactly 17 clues and unique solutions have been found, and an extensive computer search makes it highly unlikely that a uniquely solvable puzzle with 16 or fewer clues exists.
              </p>
            </div>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Existence</h3>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Can we decide systematically whether a given partial grid has at least one completion? Yes — but it often requires a great deal of work. The algorithms in the next sections provide exactly this: a method guaranteed to find a solution if one exists, or to certify that none does.
            </p>
          </section>

          {/* §3: Simple Algorithm */}
          <section className="mb-16" id="algo1">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              <span className="block font-sans text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)] mb-2">§ 3</span>
              Solving Algorithms — Backtracking
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              An algorithm must terminate. &ldquo;Stare at it and try things&rdquo; does not qualify — you might never finish. A proper Sudoku-solving algorithm must always halt and report: either a solution, or a proof that none exists.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">The Simple Algorithm</h3>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The counting argument suggests a direct approach: list the empty cells in order, try digits 1 through 9 for each, backtrack when you hit a dead end. Simple in description; exhaustive by nature.
            </p>

            <div className="my-10 bg-[var(--ink)] text-[var(--tonal)] border-l-4 border-[var(--ink-muted)] p-6 rounded font-mono text-sm">
              <div className="text-[var(--ink-muted)] text-xs uppercase tracking-[0.22em] mb-4 pb-3 border-b border-[var(--ink-muted)]">Simple Solving Algorithm</div>
              <div className="space-y-3 leading-relaxed">
                <div><span className="text-[var(--ink-muted)] font-semibold">1.</span> Enumerate all empty cells in typewriter order (left to right, top to bottom).</div>
                <div><span className="text-[var(--ink-muted)] font-semibold">2.</span> Set the first cell as the <em>current cell</em>.</div>
                <div><span className="text-[var(--ink-muted)] font-semibold">3.</span> Enter 1 in the current cell. If this violates the Sudoku condition, try 2, then 3, and so on, until:
                  <div className="ml-6 mt-2 text-[var(--ink-muted)]">
                    <div>a. The entry does not violate — proceed.</div>
                    <div>b. You have tried 9 and still have a violation — backtrack.</div>
                  </div>
                </div>
                <div><span className="text-[var(--ink-muted)] font-semibold">4.</span> If this was the last cell, the puzzle is solved. Otherwise, advance to the next cell and repeat.</div>
              </div>
            </div>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This algorithm is correct: if a solution exists, systematic backtracking will find it. In practice, though, it is slow. A MATLAB implementation runs at roughly human speed on most puzzles, and sometimes far slower. Executing this on paper is nearly impossible; the volume of entries and erasures is prohibitive. Something better is needed.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Two Human-Friendly Techniques</h3>

            <p className="mb-4 text-base leading-relaxed text-[var(--ink)] sm:text-lg font-semibold">
              <strong className="text-[var(--ink)]">Candidate-Checking:</strong> Scan each empty cell and list all digits that could legally go there given the filled cells in its row, column, and box. If only one candidate remains, write it in. Cycle through all empty cells; repeat whenever you place a digit.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg font-semibold">
              <strong className="text-[var(--ink)]">Place-Finding:</strong> For each digit 1–9, examine each row, column, and box: if that digit can be placed in exactly one empty cell within the unit, place it. Once a full sweep yields nothing new, this method is exhausted.
            </p>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Alternating between these two techniques solves the majority of newspaper and magazine puzzles efficiently. But genuinely hard Sudokus can stump both methods simultaneously. A more powerful tool is needed.
            </p>
          </section>

          {/* §4: Crook's Algorithm */}
          <section className="mb-16" id="algo2">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              <span className="block font-sans text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)] mb-2">§ 4</span>
              Crook&apos;s Pencil-and-Paper Algorithm
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              James Crook, professor emeritus of Computer Science at Winthrop University, published a pencil-and-paper algorithm in 2009 capable of solving <em>any</em> Sudoku puzzle. It weaves together backtracking, candidate-checking, place-finding, and the concept of <em>preemptive sets</em> — a clever structure that eliminates candidates in bulk.
            </p>

            <div className="my-8 bg-[var(--tonal)] border-t-4 border-[var(--ink)] p-6 rounded">
              <strong className="block text-[var(--ink)] font-serif text-base mb-2">Definition — Mark-up</strong>
              <p className="font-sans text-sm text-[var(--ink)] leading-relaxed">
                The <em>mark-up</em> of an empty cell is the set of digits that may legally occupy it, given the entries already present in that cell&apos;s row, column, and box.
              </p>
            </div>

            {/* Mark-up visualization */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              <div>
                <p className="font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mb-3">A marked-up 3×3 box</p>
                <table className="border-collapse bg-white border-2 border-[var(--ink)]">
                  <tbody>
                    {([[2,9,5],[[4,7],3,1],[8,[4,7],6]] as (number|number[])[][]).map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => {
                          const isArr = Array.isArray(cell);
                          return (
                            <td key={c} className="w-14 h-14 border border-gray-300 relative"
                              style={{background: isArr ? "#EDE6D8" : "white"}}>
                              {isArr ? (
                                <span className="absolute top-1 right-1 font-mono leading-tight text-[#6b5a45]" style={{fontSize:"9px"}}>
                                  {(cell as number[]).join(",")}
                                </span>
                              ) : (
                                <span className="absolute inset-0 flex items-center justify-center font-serif text-lg font-semibold text-[var(--ink)]">
                                  {cell as number}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pt-2">
                <p className="text-base leading-relaxed text-[var(--ink)] mb-3">
                  The two peach cells can each only hold <strong>4 or 7</strong> — every other digit already appears elsewhere in this box. Their mark-ups are identical: <code className="font-mono text-sm bg-[var(--tonal)] px-1">{"{ 4, 7 }"}</code>.
                </p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  We don&apos;t yet know <em>which</em> cell gets 4 and which gets 7 — but we know with certainty that 4 and 7 are confined to those two cells. That is a preemptive pair, and it is enough to eliminate 4 and 7 from all other cells sharing the same row, column, or box.
                </p>
              </div>
            </div>

            <div className="my-8 bg-[var(--tonal)] border-t-4 border-[var(--ink)] p-6 rounded">
              <strong className="block text-[var(--ink)] font-serif text-base mb-2">Definition — Preemptive Set</strong>
              <p className="font-sans text-sm text-[var(--ink)] leading-relaxed">
                A <em>preemptive set</em> is a collection of <em>m</em> digits (2 ≤ m ≤ 8) together with <em>m</em> cells such that no digit outside the collection can occupy any of those cells.
              </p>
            </div>

            <div className="my-8 bg-[var(--tonal)] border-t-4 border-[var(--ink)] p-6 rounded">
              <strong className="block text-[var(--ink)] font-serif text-base mb-2">Theorem — Occupancy Theorem</strong>
              <p className="font-sans text-sm text-[var(--ink)] leading-relaxed">
                If a preemptive set lies entirely within a single row, column, or box, then no digit belonging to the set can appear outside the set in that row, column, or box.
              </p>
            </div>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The occupancy theorem is the key: once a preemptive set is found, its digits can be crossed out of the mark-ups of every other cell in the same unit. This often cascades — eliminations trigger placements, which reveal new preemptive sets, which enable further eliminations.
            </p>

            <div className="my-10 bg-[var(--ink)] text-[var(--tonal)] border-l-4 border-[var(--ink-muted)] p-6 rounded font-mono text-sm">
              <div className="text-[var(--ink-muted)] text-xs uppercase tracking-[0.22em] mb-4 pb-3 border-b border-[var(--ink-muted)]">Crook&apos;s Algorithm</div>
              <div className="space-y-3 leading-relaxed">
                <div><span className="text-[var(--ink-muted)] font-semibold">1.</span> Apply candidate-checking and place-finding alternately until neither makes progress.</div>
                <div><span className="text-[var(--ink-muted)] font-semibold">2.</span> Mark up all remaining empty cells.</div>
                <div><span className="text-[var(--ink-muted)] font-semibold">3.</span> Search each row, column, and box for preemptive sets. Apply the occupancy theorem. Return to step 1 if mark-ups changed.</div>
                <div><span className="text-[var(--ink-muted)] font-semibold">4.</span> Check: solved? Condition violated? Neither? Continue to step 5.</div>
                <div><span className="text-[var(--ink-muted)] font-semibold">5.</span> Choose an empty cell; enter a digit from its mark-up. Assign a color to this choice; log it on a separate sheet.</div>
                <div><span className="text-[var(--ink-muted)] font-semibold">6.</span> Continue with preemptive sets using the current color. Stop when solved, condition violated, or a mark-up is empty.</div>
                <div><span className="text-[var(--ink-muted)] font-semibold">7.</span> If empty mark-up: the guess was wrong. Erase everything in this color. If mark-up is still non-empty, return to step 5. Otherwise, erase the previous color and repeat.</div>
              </div>
            </div>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The color-coding system is how backtracking is managed on paper. Each speculative branch receives a different pen; an incorrect branch is erased completely. In practice, copying the board to a fresh sheet before each guess is more convenient than erasing.
            </p>
          </section>

          {/* §5: Graphs */}
          <section className="mb-16" id="graphs">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              <span className="block font-sans text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)] mb-2">§ 5</span>
              Sudokus as Graphs
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Graph theory was not invented for Sudoku — it predates the puzzle by centuries. Euler laid its foundations in 1735 with the Königsberg Bridge problem. Today, graph algorithms power GPS routing, power-grid design, and network flow optimization. Sudoku turns out to be a natural inhabitant of this ancient landscape.
            </p>

            <div className="my-8 bg-[var(--tonal)] border-t-4 border-[var(--ink)] p-6 rounded">
              <strong className="block text-[var(--ink)] font-serif text-base mb-2">Definition — Graph</strong>
              <p className="font-sans text-sm text-[var(--ink)] leading-relaxed">
                A <em>graph</em> is a collection of points called <em>vertices</em>, together with lines connecting some pairs of them, called <em>edges</em>.
              </p>
            </div>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Encoding a Sudoku as a Graph</h3>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Assign one vertex to each of the 81 cells. Connect two vertices with an edge whenever their cells share a row, column, or box — that is, whenever the two cells cannot hold the same digit. Now assign a color to each digit 1–9. Filling in the Sudoku correctly is exactly equivalent to coloring the vertices of this graph so that no two adjacent vertices share a color. This is the <em>graph coloring problem</em>.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The power of this representation is the centuries of graph-theoretic knowledge it unlocks. In 2007, Herzberg and Murty developed a method — using <em>chromatic polynomials</em> — to count the number of valid colorings of a partially colored graph. Since a Sudoku puzzle is exactly that, their result immediately tells us how many solutions a given puzzle has, without any special Sudoku-specific analysis.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Famous Problems in Graph Theory</h3>

            <div className="space-y-4">
              <div className="bg-[var(--tonal)] border-l-4 border-[var(--line)] p-4 rounded">
                <strong className="block text-[var(--ink)] font-serif mb-2">The Chinese Postman Problem</strong>
                <p className="font-sans text-sm text-[var(--ink-muted)]">Find the shortest closed walk through a graph that traverses every edge at least once. A mail carrier wants to cover every street and return to the post office with minimal distance.</p>
              </div>

              <div className="bg-[var(--tonal)] border-l-4 border-[var(--line)] p-4 rounded">
                <strong className="block text-[var(--ink)] font-serif mb-2">The Shortest Path Problem</strong>
                <p className="font-sans text-sm text-[var(--ink-muted)]">Find the minimum-weight path between two vertices. Every GPS navigation system solves this millions of times per second using algorithms like Dijkstra&apos;s or A*.</p>
              </div>

              <div className="bg-[var(--tonal)] border-l-4 border-[var(--line)] p-4 rounded">
                <strong className="block text-[var(--ink)] font-serif mb-2">The Traveling Salesman Problem</strong>
                <p className="font-sans text-sm text-[var(--ink-muted)]">Find the shortest tour visiting every vertex exactly once and returning home. Known to be NP-hard, it appears in logistics, circuit design, and genome sequencing.</p>
              </div>

              <div className="bg-[var(--tonal)] border-l-4 border-[var(--line)] p-4 rounded">
                <strong className="block text-[var(--ink)] font-serif mb-2">The Max-Flow Min-Cut Theorem</strong>
                <p className="font-sans text-sm text-[var(--ink-muted)]">The maximum flow between two nodes equals the minimum capacity of any cut separating them. Used in traffic routing, data networks, and supply chain optimization.</p>
              </div>
            </div>
          </section>

          {/* Interactive Demo */}
          <section className="mb-16 bg-[var(--tonal)] border border-[var(--line)] p-8 rounded">
            <h3 className="mb-3 font-serif text-lg font-semibold text-[var(--ink)]">
              Interactive — Graph Coloring on a Sudoku
            </h3>
            <p className="mb-6 text-base text-[var(--ink-muted)]">
              Select a color (= a digit), then click an empty cell. Adjacent cells — same row, column, or box — cannot share a color. Try to violate the rule and see what happens.
            </p>

            {/* Color Palette */}
            <div className="flex gap-2 flex-wrap mb-6">
              {COLORS.map((color, i) => (
                <button
                  key={i}
                  onClick={() => handleColorClick(color)}
                  className={`
                    w-8 h-8 rounded-full border-2 transition transform
                    ${activeColor === color ? "border-[var(--ink)] scale-125" : "border-transparent hover:scale-110"}
                  `}
                  style={{ backgroundColor: color }}
                  title={`Digit ${i + 1}`}
                >
                  <span className="text-white text-xs font-semibold flex items-center justify-center h-full">
                    {i + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Demo Grid */}
            <div className="flex justify-center mb-6 overflow-x-auto">
              <table className="border-collapse font-mono text-xs bg-white">
                <tbody>
                  {PUZZLE_DATA.map((row, r) => (
                    <tr key={r}>
                      {row.map((val, c) => {
                        const isLocked = val !== 0;
                        const cellColor = userColors[r][c];
                        return (
                          <td
                            key={`d-${r}-${c}`}
                            onClick={() => !isLocked && handleCellClick(r, c)}
                            className={`
                              w-10 h-10 text-center border border-gray-300 text-xs font-semibold
                              ${r % 3 === 2 ? "border-b-2" : ""} ${c % 3 === 2 ? "border-r-2" : ""}
                              ${r === 0 ? "border-t-2" : ""} ${c === 0 ? "border-l-2" : ""}
                              ${isLocked ? "cursor-default" : "cursor-pointer hover:opacity-80"}
                              transition
                            `}
                            style={{
                              backgroundColor: isLocked ? COLORS[val - 1] : cellColor || "#f9f6f0",
                              color: isLocked || cellColor ? "white" : "#1a1612",
                              borderColor: "#999"
                            }}
                          >
                            {isLocked ? val : cellColor ? COLORS.indexOf(cellColor) + 1 : ""}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-mono text-xs text-[var(--ink-muted)] text-center">
              Choose a color above, then click an empty cell.
            </p>
          </section>

          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A solver who masters Crook&apos;s algorithm gains something more than solved puzzles: the certainty that no Sudoku can defeat them, provided they are willing to be systematic. But the richer reward is the view from outside the puzzle — the glimpse of combinatorics, algorithmic thinking, and graph theory that the humble 9×9 grid opens up. These are not niche mathematical curiosities. They are the foundations of modern computing.
            </p>
            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg italic">
              Euler would have enjoyed this.
            </p>
          </section>

          {/* Sources */}
          <div className="mt-16 pt-8 border-t border-[var(--line)]">
            <h3 className="mb-4 font-sans text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Sources &amp; References
            </h3>
            <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed space-y-2">
              <span className="block">
                Cornell Mathematics Explorers&apos; Club (2009) · <em>The Mathematics of Sudoku</em> · P. Meerkamp
              </span>
              <span className="block">
                Felgenhauer, B. &amp; Jarvis, F. (2005) · <a href="https://www.bertramfelgenhauer.de/sudoku/felgenhauer_jarvis_first_release.pdf" target="_blank" rel="noopener" className="text-[var(--ink)] underline">
                  Enumerating possible Sudoku grids
                </a>
              </span>
              <span className="block">
                Crook, J. F. (2009) · <em>A Pencil-and-Paper Algorithm for Solving Sudoku Puzzles</em> · <a href="https://www.ams.org/journals/notices/200904/tx090400460p.pdf" target="_blank" rel="noopener" className="text-[var(--ink)] underline">
                  Notices of the AMS
                </a>
              </span>
            </p>
          </div>
        </article>

        <ArticleReadMore currentSlug="sudoku-mathematics" />
      </div>
    </>
  );
}
