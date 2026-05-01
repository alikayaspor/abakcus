/**
 * π book cover illustration — inline SVG for featured carousel.
 * Fonts (EB Garamond, DM Mono) are loaded in root layout as CSS variables.
 */
export function PiBookCoverSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className ? `pi-book-svg ${className}` : "pi-book-svg"}
      viewBox="0 0 680 520"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <style>{`
          .pi-book-svg .garamond { font-family: var(--font-eb-garamond), Georgia, serif; }
          .pi-book-svg .mono { font-family: var(--font-dm-mono), ui-monospace, monospace; }
        `}</style>
        <filter id="pi-book-cover-shadow">
          <feDropShadow
            dx="6"
            dy="8"
            stdDeviation="10"
            floodColor="#16120c"
            floodOpacity="0.28"
          />
        </filter>
      </defs>

      <g filter="url(#pi-book-cover-shadow)">
        <rect
          x="222"
          y="52"
          width="256"
          height="386"
          rx="3"
          fill="#1a1610"
        />
        <rect x="216" y="52" width="28" height="386" rx="2" fill="#111009" />
        <rect x="216" y="52" width="2" height="386" fill="#2a2318" opacity="0.6" />
        <rect x="240" y="48" width="256" height="386" rx="3" fill="#0f0d08" />
        <rect
          x="240"
          y="48"
          width="256"
          height="386"
          rx="3"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.3"
          opacity="0.04"
        />
        <rect
          x="252"
          y="60"
          width="232"
          height="362"
          rx="1"
          fill="none"
          stroke="#c9a96e"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <rect
          x="256"
          y="64"
          width="224"
          height="354"
          rx="1"
          fill="none"
          stroke="#c9a96e"
          strokeWidth="0.3"
          opacity="0.15"
        />
      </g>

      <text
        className="mono"
        x="368"
        y="98"
        textAnchor="middle"
        fill="#c9a96e"
        fontSize="7.5"
        letterSpacing="2"
        opacity="0.35"
      >
        3 . 1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4 6
      </text>
      <text
        className="mono"
        x="368"
        y="112"
        textAnchor="middle"
        fill="#c9a96e"
        fontSize="7.5"
        letterSpacing="2"
        opacity="0.2"
      >
        2 6 4 3 3 8 3 2 7 9 5 0 2 8 8 4 1 9 7 1 6 9
      </text>

      <circle
        cx="368"
        cy="268"
        r="128"
        fill="none"
        stroke="#c9a96e"
        strokeWidth="0.55"
        opacity="0.22"
      />

      <line
        x1="240"
        y1="268"
        x2="496"
        y2="268"
        stroke="#c9a96e"
        strokeWidth="0.5"
        opacity="0.18"
      />
      <line
        x1="240"
        y1="261"
        x2="240"
        y2="275"
        stroke="#c9a96e"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <line
        x1="496"
        y1="261"
        x2="496"
        y2="275"
        stroke="#c9a96e"
        strokeWidth="0.8"
        opacity="0.3"
      />

      <line
        x1="368"
        y1="268"
        x2="459"
        y2="195"
        stroke="#c9a96e"
        strokeWidth="0.4"
        strokeDasharray="2 3"
        opacity="0.2"
      />

      <text
        className="garamond"
        x="368"
        y="312"
        textAnchor="middle"
        fill="#f0e6cc"
        fontSize="148"
        fontWeight="400"
        opacity="0.93"
      >
        π
      </text>

      <text
        className="garamond"
        x="368"
        y="358"
        textAnchor="middle"
        fill="#c9a96e"
        fontSize="14"
        fontStyle="italic"
        opacity="0.5"
      >
        C / d = π
      </text>

      <text
        className="mono"
        x="368"
        y="388"
        textAnchor="middle"
        fill="#c9a96e"
        fontSize="7.5"
        letterSpacing="2"
        opacity="0.22"
      >
        3 9 9 3 7 5 1 0 5 8 2 0 9 7 4 9 4 4 5 9 2 3
      </text>
      <text
        className="mono"
        x="368"
        y="400"
        textAnchor="middle"
        fill="#c9a96e"
        fontSize="7.5"
        letterSpacing="2"
        opacity="0.12"
      >
        0 7 8 1 6 4 0 6 2 8 6 2 0 8 9 9 8 6 2 8 0 3
      </text>

      <text
        className="garamond"
        x="230"
        y="268"
        textAnchor="middle"
        fill="#c9a96e"
        fontSize="11"
        letterSpacing="3"
        opacity="0.5"
        transform="rotate(-90, 230, 268)"
      >
        π
      </text>

      <rect x="496" y="54" width="3" height="378" fill="#e8dfc8" opacity="0.12" />
      <rect x="497" y="54" width="1" height="378" fill="#e8dfc8" opacity="0.08" />
      <rect x="244" y="434" width="252" height="3" rx="1" fill="#e8dfc8" opacity="0.1" />
      <rect x="246" y="437" width="250" height="2" rx="1" fill="#e8dfc8" opacity="0.06" />
    </svg>
  );
}
