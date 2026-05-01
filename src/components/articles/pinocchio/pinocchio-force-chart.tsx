/** Force vs. lies — inline chart from the Pinocchio article layout. */
export function PinocchioForceChart() {
  return (
    <svg
      viewBox="0 0 680 280"
      className="block h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <style>{`
          .pinocchio-chart-mono { font-family: var(--font-abakcus-sans), ui-monospace, monospace; font-size: 8px; }
        `}</style>
      </defs>

      <line x1="80" y1="220" x2="620" y2="220" stroke="var(--line)" strokeWidth="0.5" />
      <line x1="80" y1="180" x2="620" y2="180" stroke="var(--line)" strokeWidth="0.4" strokeDasharray="3 4" />
      <line x1="80" y1="140" x2="620" y2="140" stroke="var(--line)" strokeWidth="0.4" strokeDasharray="3 4" />
      <line x1="80" y1="100" x2="620" y2="100" stroke="var(--line)" strokeWidth="0.4" strokeDasharray="3 4" />
      <line x1="80" y1="60" x2="620" y2="60" stroke="var(--line)" strokeWidth="0.4" strokeDasharray="3 4" />

      <line x1="80" y1="60" x2="620" y2="60" stroke="var(--ink-muted)" strokeWidth="0.8" strokeDasharray="5 3" />
      <text
        className="pinocchio-chart-mono"
        x="624"
        y="63"
        fill="var(--ink-muted)"
        letterSpacing="0.5"
      >
        threshold
      </text>

      <line x1="80" y1="40" x2="80" y2="225" stroke="var(--ink)" strokeWidth="0.8" />
      <line x1="80" y1="220" x2="625" y2="220" stroke="var(--ink)" strokeWidth="0.8" />

      <text className="pinocchio-chart-mono" x="80" y="234" textAnchor="middle" fill="var(--ink-muted)">
        0
      </text>
      <text className="pinocchio-chart-mono" x="121" y="234" textAnchor="middle" fill="var(--ink-muted)">
        1
      </text>
      <text className="pinocchio-chart-mono" x="163" y="234" textAnchor="middle" fill="var(--ink-muted)">
        2
      </text>
      <text className="pinocchio-chart-mono" x="204" y="234" textAnchor="middle" fill="var(--ink-muted)">
        3
      </text>
      <text className="pinocchio-chart-mono" x="245" y="234" textAnchor="middle" fill="var(--ink-muted)">
        4
      </text>
      <text className="pinocchio-chart-mono" x="287" y="234" textAnchor="middle" fill="var(--ink-muted)">
        5
      </text>
      <text className="pinocchio-chart-mono" x="328" y="234" textAnchor="middle" fill="var(--ink-muted)">
        6
      </text>
      <text className="pinocchio-chart-mono" x="369" y="234" textAnchor="middle" fill="var(--ink-muted)">
        7
      </text>
      <text className="pinocchio-chart-mono" x="411" y="234" textAnchor="middle" fill="var(--ink-muted)">
        8
      </text>
      <text className="pinocchio-chart-mono" x="452" y="234" textAnchor="middle" fill="var(--ink-muted)">
        9
      </text>
      <text className="pinocchio-chart-mono" x="493" y="234" textAnchor="middle" fill="var(--ink-muted)">
        10
      </text>
      <text className="pinocchio-chart-mono" x="535" y="234" textAnchor="middle" fill="var(--ink-muted)">
        11
      </text>
      <text className="pinocchio-chart-mono" x="576" y="234" textAnchor="middle" fill="var(--ink-muted)">
        12
      </text>
      <text className="pinocchio-chart-mono" x="617" y="234" textAnchor="middle" fill="var(--ink-muted)">
        13
      </text>

      <text
        className="pinocchio-chart-mono"
        x="350"
        y="248"
        textAnchor="middle"
        fill="var(--ink-muted)"
        letterSpacing="1"
      >
        NUMBER OF LIES
      </text>

      <text className="pinocchio-chart-mono" x="74" y="223" textAnchor="end" fill="var(--ink-muted)">
        0
      </text>
      <text className="pinocchio-chart-mono" x="74" y="183" textAnchor="end" fill="var(--ink-muted)">
        25k
      </text>
      <text className="pinocchio-chart-mono" x="74" y="143" textAnchor="end" fill="var(--ink-muted)">
        50k
      </text>
      <text className="pinocchio-chart-mono" x="74" y="103" textAnchor="end" fill="var(--ink-muted)">
        75k
      </text>
      <text className="pinocchio-chart-mono" x="74" y="63" textAnchor="end" fill="var(--ink-muted)">
        100k
      </text>

      <text
        className="pinocchio-chart-mono"
        x="-140"
        y="20"
        fill="var(--ink-muted)"
        fontSize="7"
        letterSpacing="1"
        transform="rotate(-90)"
        textAnchor="middle"
      >
        FORCE ON NECK (N)
      </text>

      <polyline
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        points="
            80,220
            121,220
            163,220
            204,220
            245,220
            287,219
            328,220
            369,219
            411,215
            452,200
            493,141
            535,97
            576,61
            617,57
          "
      />

      <circle cx="80" cy="220" r="2.5" fill="var(--ink)" opacity="0.5" />
      <circle cx="287" cy="219" r="2.5" fill="var(--ink)" opacity="0.5" />
      <circle cx="493" cy="141" r="2.5" fill="var(--ink)" opacity="0.7" />
      <circle cx="535" cy="97" r="2.5" fill="var(--ink)" opacity="0.85" />
      <circle cx="576" cy="61" r="2.5" fill="var(--ink)" />
      <circle cx="617" cy="57" r="3.5" fill="var(--ink)" />

      <line
        x1="617"
        y1="57"
        x2="617"
        y2="220"
        stroke="var(--ink)"
        strokeWidth="0.5"
        strokeDasharray="2 3"
        opacity="0.4"
      />
      <text className="pinocchio-chart-mono" x="613" y="52" textAnchor="middle" fill="var(--ink)" fontWeight="500">
        lie 13
      </text>
      <text className="pinocchio-chart-mono" x="613" y="42" textAnchor="middle" fill="var(--ink)" fontSize="7.5">
        neck snaps
      </text>
    </svg>
  );
}
