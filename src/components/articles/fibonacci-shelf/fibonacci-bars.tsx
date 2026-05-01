"use client";

import { useEffect, useState } from "react";

const fibs = [1, 1, 2, 3, 5, 8];
const maxFib = 8;
const maxHeight = 90;

export function FibonacciBars() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="my-8">
      <div className="flex h-[100px] items-end gap-1 sm:gap-1.5">
        {fibs.map((n, i) => {
          const h = Math.round((n / maxFib) * maxHeight);
          return (
            <div
              key={i}
              className="flex min-w-0 flex-1 flex-col items-stretch gap-2"
              title={`F(${i + 1}) = ${n}`}
            >
              <div
                className="w-full bg-[var(--ink)] transition-[height,opacity] duration-[600ms] ease-out motion-reduce:transition-none"
                style={{
                  height: mounted ? h : 0,
                  opacity: mounted ? 1 : 0,
                  transitionDelay: mounted ? `${i * 80}ms` : "0ms",
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex gap-1 sm:gap-1.5">
        {fibs.map((n, i) => (
          <div
            key={i}
            className="min-w-0 flex-1 text-center font-mono text-[0.58rem] text-[var(--ink-muted)]"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
