"use client";

import { useState } from "react";

export function BillingsleyPrismDemo() {
  const [risen, setRisen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setRisen((r) => !r)}
      className="relative my-10 w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--line)] bg-[var(--tonal)] px-6 py-8 text-center transition-colors hover:bg-[color-mix(in_srgb,var(--tonal)_70%,white)]"
    >
      <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        Book XI, Proposition 12 — open the flap
      </p>
      <div className="mt-4 flex justify-center">
        <svg
          className={`origin-bottom transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            risen
              ? "translate-y-0 scale-y-100 opacity-100"
              : "translate-y-8 scale-y-[0.12] opacity-0"
          }`}
          width="120"
          height="100"
          viewBox="0 0 120 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <polygon
            points="60,5 10,90 110,90"
            fill="none"
            stroke="#212324"
            strokeWidth="1.2"
          />
          <polygon
            points="60,5 10,90 65,60"
            fill="#ede6d8"
            stroke="#212324"
            strokeWidth="1.2"
          />
          <polygon
            points="60,5 110,90 65,60"
            fill="#e4e6f2"
            stroke="#212324"
            strokeWidth="1.2"
          />
          <line
            x1="65"
            y1="60"
            x2="10"
            y2="90"
            stroke="#212324"
            strokeWidth="0.8"
            strokeDasharray="4,3"
          />
          <line
            x1="65"
            y1="60"
            x2="110"
            y2="90"
            stroke="#212324"
            strokeWidth="0.8"
          />
          <text
            x="60"
            y="98"
            textAnchor="middle"
            fill="#676767"
            style={{ fontFamily: "ui-monospace, monospace", fontSize: 8 }}
          >
            tetrahedron
          </text>
        </svg>
      </div>
      <p className="mt-3 font-sans text-[0.62rem] text-[var(--ink-muted)]">
        {risen ? "Click to fold back" : "Click to lift"}
      </p>
    </button>
  );
}
