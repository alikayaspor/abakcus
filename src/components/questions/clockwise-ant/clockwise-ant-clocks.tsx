import { PASTEL } from "@/data/pastel-palette";

/** Three clock-face moments — styled like other editorial figures (Pringles / unit circle). */
export function ClockwiseAntClocks() {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] shadow-[var(--shadow-soft)]"
      style={{ backgroundColor: PASTEL.peach }}
    >
      <div className="flex items-center justify-between gap-2 border-b border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-sky)_32%,white)] px-4 py-2.5 sm:px-5">
        <span className="font-sans text-[0.56rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          Three moments on the clock face
        </span>
        <span className="hidden font-sans text-[0.52rem] uppercase tracking-[0.08em] text-[var(--ink-muted)] opacity-70 sm:inline">
          ant = • · hand = line
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-3 py-8 sm:gap-8 sm:px-5 sm:py-10">
        <ClockSvg1 />
        <ClockSvg2 />
        <ClockSvg3 />
      </div>
      <figcaption className="border-t border-[var(--line-soft)] px-4 py-3 text-center font-serif text-sm italic text-[var(--ink-muted)]">
        Start, first meeting, departure — same puzzle, three snapshots.
      </figcaption>
    </figure>
  );
}

function ClockSvg1() {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="150" height="150" viewBox="0 0 150 150" aria-hidden className="max-h-[150px] w-auto">
        <defs>
          <marker
            id="caMk1"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path
              d="M1 1L7 4L1 7"
              fill="none"
              stroke="#45403a"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>
        <circle cx="75" cy="75" r="68" fill="white" stroke="var(--line)" strokeWidth="1" />
        <g stroke="var(--ink-muted)" strokeWidth="1" opacity="0.85">
          <line x1="75" y1="10" x2="75" y2="18" />
          <line x1="109" y1="19" x2="105" y2="26" />
          <line x1="133" y1="44" x2="127" y2="48" />
          <line x1="140" y1="75" x2="132" y2="75" />
          <line x1="133" y1="106" x2="127" y2="102" />
          <line x1="109" y1="131" x2="105" y2="124" />
          <line x1="75" y1="140" x2="75" y2="132" />
          <line x1="41" y1="131" x2="45" y2="124" />
          <line x1="17" y1="106" x2="23" y2="102" />
          <line x1="10" y1="75" x2="18" y2="75" />
          <line x1="17" y1="44" x2="23" y2="48" />
          <line x1="41" y1="19" x2="45" y2="26" />
        </g>
        <text x="75" y="26" textAnchor="middle" fill="#676767" fontSize="10">
          12
        </text>
        <text x="75" y="132" textAnchor="middle" fill="#676767" fontSize="10">
          6
        </text>
        <text x="140" y="79" textAnchor="middle" fill="#676767" fontSize="10">
          3
        </text>
        <text x="12" y="79" textAnchor="middle" fill="#676767" fontSize="10">
          9
        </text>
        <line
          x1="75"
          y1="75"
          x2="75"
          y2="18"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="75" cy="75" r="3" fill="var(--ink)" />
        <circle cx="75" cy="143" r="4.5" fill="var(--ink-muted)" />
        <line x1="72" y1="142" x2="68" y2="146" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <line x1="78" y1="142" x2="82" y2="146" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <line x1="71" y1="140" x2="67" y2="137" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <line x1="79" y1="140" x2="83" y2="137" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <path
          d="M 58 128 A 40 40 0 0 0 40 90"
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth="1"
          strokeDasharray="3 2"
          markerEnd="url(#caMk1)"
        />
      </svg>
      <span className="font-sans text-[0.58rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
        t = 0 min · start
      </span>
    </div>
  );
}

function ClockSvg2() {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="150" height="150" viewBox="0 0 150 150" aria-hidden className="max-h-[150px] w-auto">
        <defs>
          <marker
            id="caMk2"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path
              d="M1 1L7 4L1 7"
              fill="none"
              stroke="#45403a"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>
        <circle cx="75" cy="75" r="68" fill="white" stroke="var(--line)" strokeWidth="1" />
        <g stroke="var(--ink-muted)" strokeWidth="1" opacity="0.85">
          <line x1="75" y1="10" x2="75" y2="18" />
          <line x1="109" y1="19" x2="105" y2="26" />
          <line x1="133" y1="44" x2="127" y2="48" />
          <line x1="140" y1="75" x2="132" y2="75" />
          <line x1="133" y1="106" x2="127" y2="102" />
          <line x1="109" y1="131" x2="105" y2="124" />
          <line x1="75" y1="140" x2="75" y2="132" />
          <line x1="41" y1="131" x2="45" y2="124" />
          <line x1="17" y1="106" x2="23" y2="102" />
          <line x1="10" y1="75" x2="18" y2="75" />
          <line x1="17" y1="44" x2="23" y2="48" />
          <line x1="41" y1="19" x2="45" y2="26" />
        </g>
        <text x="75" y="26" textAnchor="middle" fill="#676767" fontSize="10">
          12
        </text>
        <text x="75" y="132" textAnchor="middle" fill="#676767" fontSize="10">
          6
        </text>
        <text x="140" y="79" textAnchor="middle" fill="#676767" fontSize="10">
          3
        </text>
        <text x="12" y="79" textAnchor="middle" fill="#676767" fontSize="10">
          9
        </text>
        <line
          x1="75"
          y1="75"
          x2="121"
          y2="41"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="75" cy="75" r="3" fill="var(--ink)" />
        <circle cx="121" cy="41" r="4.5" fill="var(--ink-muted)" />
        <line x1="118" y1="40" x2="114" y2="36" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <line x1="124" y1="40" x2="128" y2="36" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <line x1="117" y1="43" x2="113" y2="47" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <line x1="125" y1="43" x2="129" y2="47" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <circle
          cx="121"
          cy="41"
          r="10"
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          opacity="0.5"
        />
        <path
          d="M 130 55 A 40 40 0 0 1 140 90"
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth="1"
          strokeDasharray="3 2"
          markerEnd="url(#caMk2)"
        />
      </svg>
      <span className="font-sans text-[0.58rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
        t = 9 min · 1st meeting
      </span>
    </div>
  );
}

function ClockSvg3() {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="150" height="150" viewBox="0 0 150 150" aria-hidden className="max-h-[150px] w-auto">
        <defs>
          <marker
            id="caMk3"
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path
              d="M1 1L7 4L1 7"
              fill="none"
              stroke="#45403a"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>
        <circle cx="75" cy="75" r="68" fill="white" stroke="var(--line)" strokeWidth="1" />
        <g stroke="var(--ink-muted)" strokeWidth="1" opacity="0.85">
          <line x1="75" y1="10" x2="75" y2="18" />
          <line x1="109" y1="19" x2="105" y2="26" />
          <line x1="133" y1="44" x2="127" y2="48" />
          <line x1="140" y1="75" x2="132" y2="75" />
          <line x1="133" y1="106" x2="127" y2="102" />
          <line x1="109" y1="131" x2="105" y2="124" />
          <line x1="75" y1="140" x2="75" y2="132" />
          <line x1="41" y1="131" x2="45" y2="124" />
          <line x1="17" y1="106" x2="23" y2="102" />
          <line x1="10" y1="75" x2="18" y2="75" />
          <line x1="17" y1="44" x2="23" y2="48" />
          <line x1="41" y1="19" x2="45" y2="26" />
        </g>
        <text x="75" y="26" textAnchor="middle" fill="#676767" fontSize="10">
          12
        </text>
        <text x="75" y="132" textAnchor="middle" fill="#676767" fontSize="10">
          6
        </text>
        <text x="140" y="79" textAnchor="middle" fill="#676767" fontSize="10">
          3
        </text>
        <text x="12" y="79" textAnchor="middle" fill="#676767" fontSize="10">
          9
        </text>
        <line
          x1="75"
          y1="75"
          x2="42"
          y2="29"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="75" cy="75" r="3" fill="var(--ink)" />
        <circle cx="42" cy="29" r="4.5" fill="var(--ink-muted)" />
        <line x1="39" y1="28" x2="35" y2="24" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <line x1="45" y1="28" x2="49" y2="24" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <line x1="38" y1="31" x2="34" y2="35" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <line x1="46" y1="31" x2="50" y2="35" stroke="var(--ink-muted)" strokeWidth="0.8" />
        <circle
          cx="42"
          cy="29"
          r="10"
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          opacity="0.5"
        />
        <line
          x1="42"
          y1="29"
          x2="22"
          y2="12"
          stroke="var(--ink-muted)"
          strokeWidth="1"
          strokeDasharray="2 2"
          markerEnd="url(#caMk3)"
        />
      </svg>
      <span className="font-sans text-[0.58rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
        t = 54 min · departs
      </span>
    </div>
  );
}
