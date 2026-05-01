import type { PastelId } from "@/data/pastel-palette";
import { UnitCircleFigure } from "./unit-circle-figure";

const th =
  "border-b border-[var(--line)] bg-[var(--uc-table-header)] px-2 py-3 text-center font-serif text-sm font-semibold sm:px-4 sm:text-base";
const td =
  "border-b border-[var(--line)] px-2 py-3 align-middle text-center font-serif text-sm sm:px-4 sm:text-[1.05rem]";
const tdAngle = `${td} text-[var(--ink)]`;
const tdSin = `${td} text-[var(--uc-sin)]`;
const tdCos = `${td} text-[var(--uc-cos)]`;
const tdPlaceholder = `${td} text-[var(--line)] tracking-widest`;

/** Step 1 — empty grid */
export function UnitCircleTableStep1({ pastel }: { pastel: PastelId }) {
  return (
    <UnitCircleFigure pastel={pastel} caption="Step 1 — The skeleton: five angles, two columns, values to come">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse">
          <thead>
            <tr>
              <th className={`${th} font-serif italic text-[var(--ink)]`}>θ</th>
              <th className={`${th} text-[var(--uc-sin)]`}>sin θ</th>
              <th className={`${th} text-[var(--uc-cos)]`}>cos θ</th>
            </tr>
          </thead>
          <tbody>
            {(
              [
                "0",
                "π / 6",
                "π / 4",
                "π / 3",
                "π / 2",
              ] as const
            ).map((angle, i, arr) => (
              <tr key={angle}>
                <td
                  className={
                    i === arr.length - 1
                      ? `${tdAngle} border-b-0`
                      : tdAngle
                  }
                >
                  {angle}
                </td>
                <td
                  className={
                    i === arr.length - 1
                      ? `${tdPlaceholder} border-b-0`
                      : tdPlaceholder
                  }
                >
                  · · ·
                </td>
                <td
                  className={
                    i === arr.length - 1
                      ? `${tdPlaceholder} border-b-0`
                      : tdPlaceholder
                  }
                >
                  · · ·
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UnitCircleFigure>
  );
}

/** Step 2 — denominators */
export function UnitCircleTableStep2({ pastel }: { pastel: PastelId }) {
  return (
    <UnitCircleFigure pastel={pastel} caption="Step 2 — Every cell gets a denominator of 2">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse">
          <thead>
            <tr>
              <th className={`${th} font-serif italic text-[var(--ink)]`}>θ</th>
              <th className={`${th} text-[var(--uc-sin)]`}>sin θ</th>
              <th className={`${th} text-[var(--uc-cos)]`}>cos θ</th>
            </tr>
          </thead>
          <tbody>
            {(
              [
                "0",
                "π / 6",
                "π / 4",
                "π / 3",
                "π / 2",
              ] as const
            ).map((angle, i, arr) => (
              <tr key={angle}>
                <td
                  className={
                    i === arr.length - 1
                      ? `${tdAngle} border-b-0`
                      : tdAngle
                  }
                >
                  {angle}
                </td>
                <td
                  className={
                    i === arr.length - 1 ? `${tdSin} border-b-0` : tdSin
                  }
                >
                  / 2
                </td>
                <td
                  className={
                    i === arr.length - 1 ? `${tdCos} border-b-0` : tdCos
                  }
                >
                  / 2
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UnitCircleFigure>
  );
}

/** Step 3 — √ pattern (replaces broken SVG) */
export function UnitCircleTableStep3({ pastel }: { pastel: PastelId }) {
  return (
    <UnitCircleFigure pastel={pastel} caption="Step 3 — Sine counts up, cosine counts down; everything over 2">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse">
          <thead>
            <tr>
              <th className={`${th} font-serif italic text-[var(--ink)]`}>θ</th>
              <th className={`${th} text-[var(--uc-sin)]`}>sin θ</th>
              <th className={`${th} text-[var(--uc-cos)]`}>cos θ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={tdAngle}>0</td>
              <td className={tdSin}>
                <span className="inline-block">
                  √0<span className="text-[0.85em]">/</span>2
                </span>
              </td>
              <td className={tdCos}>
                <span className="inline-block">
                  √4<span className="text-[0.85em]">/</span>2
                </span>
              </td>
            </tr>
            <tr>
              <td className={tdAngle}>π/6</td>
              <td className={tdSin}>
                √1<span className="text-[0.85em]">/</span>2
              </td>
              <td className={tdCos}>
                √3<span className="text-[0.85em]">/</span>2
              </td>
            </tr>
            <tr>
              <td className={tdAngle}>π/4</td>
              <td className={tdSin}>
                √2<span className="text-[0.85em]">/</span>2
              </td>
              <td className={tdCos}>
                √2<span className="text-[0.85em]">/</span>2
              </td>
            </tr>
            <tr>
              <td className={tdAngle}>π/3</td>
              <td className={tdSin}>
                √3<span className="text-[0.85em]">/</span>2
              </td>
              <td className={tdCos}>
                √1<span className="text-[0.85em]">/</span>2
              </td>
            </tr>
            <tr>
              <td className={`${tdAngle} border-b-0`}>π/2</td>
              <td className={`${tdSin} border-b-0`}>
                √4<span className="text-[0.85em]">/</span>2
              </td>
              <td className={`${tdCos} border-b-0`}>
                √0<span className="text-[0.85em]">/</span>2
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-col justify-between gap-2 border-t border-[var(--line)] pt-3 font-sans text-[0.7rem] text-[var(--ink-muted)] sm:flex-row sm:px-2">
        <p className="text-center sm:flex-1">
          <span className="text-[var(--uc-sin)]">↑</span> counts 0 → 4
        </p>
        <p className="text-center sm:flex-1">
          <span className="text-[var(--uc-cos)]">↓</span> counts 4 → 0
        </p>
      </div>
    </UnitCircleFigure>
  );
}

/** Step 4 — simplified values (replaces broken SVG) */
export function UnitCircleTableStep4({ pastel }: { pastel: PastelId }) {
  return (
    <UnitCircleFigure pastel={pastel} caption="Step 4 — The complete first quadrant, simplified">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse">
          <thead>
            <tr>
              <th className={`${th} font-serif italic text-[var(--ink)]`}>θ</th>
              <th className={`${th} text-[var(--uc-sin)]`}>sin θ</th>
              <th className={`${th} text-[var(--uc-cos)]`}>cos θ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={tdAngle}>0</td>
              <td className={tdSin}>0</td>
              <td className={tdCos}>1</td>
            </tr>
            <tr>
              <td className={tdAngle}>π/6</td>
              <td className={tdSin}>1/2</td>
              <td className={tdCos}>
                √3<span className="text-[0.85em]">/</span>2
              </td>
            </tr>
            <tr>
              <td className={tdAngle}>π/4</td>
              <td className={tdSin}>
                √2<span className="text-[0.85em]">/</span>2
              </td>
              <td className={tdCos}>
                √2<span className="text-[0.85em]">/</span>2
              </td>
            </tr>
            <tr>
              <td className={tdAngle}>π/3</td>
              <td className={tdSin}>
                √3<span className="text-[0.85em]">/</span>2
              </td>
              <td className={tdCos}>1/2</td>
            </tr>
            <tr>
              <td className={`${tdAngle} border-b-0`}>π/2</td>
              <td className={`${tdSin} border-b-0`}>1</td>
              <td className={`${tdCos} border-b-0`}>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </UnitCircleFigure>
  );
}
