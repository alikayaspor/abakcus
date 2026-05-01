"use client";

import { useId } from "react";

/** Inline SVG for curated / read-more cards — avoids next/img path issues with static SVG. */
export function UnitCircleThumbnailSvg({
  className,
}: {
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const maskId = `uc-minimal-text-gaps-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 680 690"
      preserveAspectRatio="xMidYMid meet"
      className={["block max-h-full w-full shrink-0", className].filter(Boolean).join(" ")}
      aria-hidden
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="680" height="690" fill="white" />
          <rect x="566" y="321.31" width="14.45" height="21" fill="black" rx="2" />
          <rect x="74.91" y="321.31" width="24.09" height="21" fill="black" rx="2" />
          <rect x="344" y="96.31" width="14.45" height="21" fill="black" rx="2" />
          <rect x="344" y="558.31" width="24.09" height="21" fill="black" rx="2" />
          <rect x="536" y="210.25" width="86.19" height="19.58" fill="black" rx="2" />
          <rect x="411.39" y="346.31" width="41.21" height="21" fill="black" rx="2" />
          <rect x="544" y="272.31" width="39.66" height="21" fill="black" rx="2" />
          <rect x="369" y="317.36" width="16.82" height="21.94" fill="black" rx="2" />
          <rect x="261.72" y="626.08" width="156.55" height="16.28" fill="black" rx="2" />
          <rect x="281.88" y="648.08" width="116.25" height="16.28" fill="black" rx="2" />
        </mask>
      </defs>

      <circle
        cx="340"
        cy="340"
        r="220"
        fill="none"
        stroke="#212324"
        strokeWidth="1.6"
        opacity="0.82"
      />
      <line
        x1="340"
        y1="100"
        x2="340"
        y2="580"
        stroke="#212324"
        strokeWidth="0.7"
        opacity="0.18"
      />
      <line
        x1="100"
        y1="340"
        x2="580"
        y2="340"
        stroke="#212324"
        strokeWidth="0.7"
        opacity="0.18"
        mask={`url(#${maskId})`}
      />

      <circle cx="560" cy="340" r="4" fill="#212324" opacity="0.7" />
      <circle cx="120" cy="340" r="4" fill="#212324" opacity="0.7" />
      <circle cx="340" cy="120" r="4" fill="#212324" opacity="0.7" />
      <circle cx="340" cy="560" r="4" fill="#212324" opacity="0.7" />

      <text
        x="570"
        y="337"
        fill="#212324"
        opacity="0.55"
        style={{ fontSize: 15, fontFamily: "Georgia, ui-serif, serif" }}
      >
        1
      </text>
      <text
        x="95"
        y="337"
        textAnchor="end"
        fill="#212324"
        opacity="0.55"
        style={{ fontSize: 15, fontFamily: "Georgia, ui-serif, serif" }}
      >
        -1
      </text>
      <text
        x="348"
        y="112"
        fill="#212324"
        opacity="0.55"
        style={{ fontSize: 15, fontFamily: "Georgia, ui-serif, serif" }}
      >
        1
      </text>
      <text
        x="348"
        y="574"
        fill="#212324"
        opacity="0.55"
        style={{ fontSize: 15, fontFamily: "Georgia, ui-serif, serif" }}
      >
        -1
      </text>

      <line
        x1="340"
        y1="340"
        x2="530.5"
        y2="230"
        stroke="#212324"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
        mask={`url(#${maskId})`}
      />
      <line
        x1="340"
        y1="340"
        x2="530.5"
        y2="340"
        stroke="#4a5f6a"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.88"
      />
      <line
        x1="530.5"
        y1="340"
        x2="530.5"
        y2="230"
        stroke="#7a5c68"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.88"
      />

      <polyline
        points="515,340 515,325 530.5,325"
        fill="none"
        stroke="#212324"
        strokeWidth="0.9"
        opacity="0.35"
      />
      <path
        d="M 366 340 A 26 26 0 0 0 361.3 323.5"
        fill="none"
        stroke="#212324"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="530.5" cy="230" r="5.5" fill="#212324" opacity="0.85" />

      <text
        x="540"
        y="225"
        fill="#212324"
        opacity="0.65"
        style={{
          fontSize: 14,
          fontStyle: "italic",
          fontFamily: "Georgia, ui-serif, serif",
        }}
      >
        (cos θ, sin θ)
      </text>
      <text
        x="432"
        y="362"
        textAnchor="middle"
        fill="#4a5f6a"
        opacity="0.9"
        style={{
          fontSize: 15,
          fontStyle: "italic",
          fontFamily: "Georgia, ui-serif, serif",
        }}
      >
        cos θ
      </text>
      <text
        x="548"
        y="288"
        fill="#7a5c68"
        opacity="0.9"
        style={{
          fontSize: 15,
          fontStyle: "italic",
          fontFamily: "Georgia, ui-serif, serif",
        }}
      >
        sin θ
      </text>
      <text
        x="373"
        y="334"
        fill="#212324"
        opacity="0.5"
        style={{
          fontSize: 16,
          fontStyle: "italic",
          fontFamily: "Georgia, ui-serif, serif",
        }}
      >
        θ
      </text>

      <text
        x="340"
        y="638"
        textAnchor="middle"
        fill="#676767"
        opacity="0.75"
        style={{
          fontSize: 11,
          letterSpacing: 3.5,
          fontFamily: "Georgia, ui-serif, serif",
        }}
      >
        THE UNIT CIRCLE
      </text>
      <line
        x1="248"
        y1="645"
        x2="432"
        y2="645"
        stroke="#676767"
        strokeWidth="0.6"
        opacity="0.35"
      />
      <text
        x="340"
        y="660"
        textAnchor="middle"
        fill="#676767"
        opacity="0.6"
        style={{
          fontSize: 11,
          letterSpacing: 1.5,
          fontStyle: "italic",
          fontFamily: "Georgia, ui-serif, serif",
        }}
      >
        sin²θ + cos²θ = 1
      </text>
    </svg>
  );
}
