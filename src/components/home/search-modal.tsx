"use client";

import { curatedArticles } from "@/data/articles-curated";
import { booksFeatured, booksShelf } from "@/data/books-picks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type SearchResult = {
  slug: string;
  title: string;
  dek: string;
  href: string;
  category: string;
};

function getCategory(href: string): string {
  if (href.startsWith("/videos/")) return "Video";
  if (href.startsWith("/tools/")) return "Tool";
  if (href.startsWith("/books/")) return "Book";
  if (href.startsWith("/book-lists/")) return "Book list";
  return "Article";
}

function toResult(a: {
  slug: string;
  title: string;
  dek: string;
  href: string;
}): SearchResult {
  return {
    slug: a.slug,
    title: a.title,
    dek: a.dek,
    href: a.href,
    category: getCategory(a.href),
  };
}

const seen = new Set<string>();
const ALL_ITEMS: SearchResult[] = [
  ...curatedArticles,
  booksFeatured,
  ...booksShelf,
]
  .map(toResult)
  .filter((r) => {
    if (seen.has(r.slug)) return false;
    seen.add(r.slug);
    return true;
  });

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function scoreItem(item: SearchResult, rawQuery: string): number {
  const q = normalize(rawQuery);
  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return 0;

  const title = normalize(item.title);
  const dek = normalize(item.dek);
  const category = normalize(item.category);

  let s = 0;
  if (title.includes(q)) s += 12;
  if (dek.includes(q)) s += 5;

  for (const token of tokens) {
    if (token.length < 2) continue;
    if (title.includes(token)) s += 4;
    if (dek.includes(token)) s += 2;
    if (category.includes(token)) s += 1;
  }
  return s;
}

function search(query: string): SearchResult[] {
  if (!query.trim()) return [];
  return ALL_ITEMS.map((item) => ({ item, s: scoreItem(item, query) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 7)
    .map(({ item }) => item);
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const CATEGORY_COLORS: Record<string, string> = {
  Article: "var(--pastel-lavender)",
  Video: "var(--pastel-rose)",
  Tool: "var(--pastel-sky)",
  Book: "var(--pastel-peach)",
  "Book list": "var(--pastel-lime)",
};

export function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const results = search(query);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, results.length - 1));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === "Enter" && results[activeIdx]) {
        e.preventDefault();
        router.push(results[activeIdx].href);
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, results, activeIdx, router]);

  // Scroll active item into view
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const active = list.children[activeIdx] as HTMLElement | undefined;
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIdx]);

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[70] cursor-default border-0 bg-[var(--ink)]/25 p-0 backdrop-blur-[3px]"
        aria-label="Close search"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="fixed left-1/2 top-[max(4.5rem,env(safe-area-inset-top,0px)_+_4.5rem)] z-[71] w-[min(92vw,40rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--line-soft)] bg-white shadow-[0_32px_80px_-24px_rgba(33,35,36,0.32)]"
      >
        {/* Input row */}
        <div className="flex items-center gap-3 px-4 py-3.5">
          <IconSearch className="shrink-0 text-[var(--ink-muted)]" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, tools, videos, books…"
            className="min-w-0 flex-1 bg-transparent text-[0.9375rem] text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="shrink-0 rounded-full p-1.5 text-[var(--ink-muted)] transition-colors hover:bg-[var(--tonal)] hover:text-[var(--ink)]"
              aria-label="Clear"
            >
              <IconClose />
            </button>
          ) : (
            <kbd className="hidden shrink-0 select-none rounded border border-[var(--line)] px-1.5 py-0.5 font-mono text-[0.6rem] text-[var(--ink-muted)] sm:block">
              ESC
            </kbd>
          )}
        </div>

        <div className="h-px bg-[var(--line-soft)]" />

        {/* Results */}
        {results.length > 0 && (
          <ul
            ref={listRef}
            className="max-h-[min(60vh,26rem)] overflow-y-auto overscroll-contain py-1.5"
          >
            {results.map((r, i) => {
              const isActive = i === activeIdx;
              const dotColor = CATEGORY_COLORS[r.category] ?? "var(--pastel-lavender)";
              return (
                <li key={r.slug}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                      isActive ? "bg-[var(--tonal)]" : "hover:bg-[var(--tonal)]"
                    }`}
                  >
                    <span
                      className="mt-[0.35rem] size-2 shrink-0 rounded-full"
                      style={{ background: dotColor }}
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                          {r.category}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[0.875rem] font-medium leading-snug text-[var(--ink)]">
                        {r.title}
                      </p>
                      <p className="mt-0.5 line-clamp-1 text-[0.775rem] leading-snug text-[var(--ink-muted)]">
                        {r.dek}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {query.trim() && results.length === 0 && (
          <div className="px-5 py-7 text-center">
            <p className="text-[0.875rem] text-[var(--ink-muted)]">
              No results for{" "}
              <span className="font-medium text-[var(--ink)]">
                &ldquo;{query}&rdquo;
              </span>
            </p>
          </div>
        )}

        {!query && (
          <div className="px-5 py-4">
            <p className="text-[0.775rem] text-[var(--ink-muted)]">
              Try{" "}
              {["Feynman", "geometry", "Sudoku", "Penrose", "video"].map(
                (hint, idx) => (
                  <button
                    key={hint}
                    type="button"
                    onClick={() => setQuery(hint)}
                    className="cursor-pointer underline underline-offset-2 hover:text-[var(--ink)]"
                  >
                    {hint}
                    {idx < 4 ? ", " : ""}
                  </button>
                ),
              )}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 border-t border-[var(--line-soft)] px-4 py-2">
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
            ↑↓ navigate · ↵ open · esc close
          </span>
        </div>
      </div>
    </>
  );
}
