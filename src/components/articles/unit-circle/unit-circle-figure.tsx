import type { ReactNode } from "react";
import { PASTEL, type PastelId } from "@/data/pastel-palette";

/** Same chrome as diagram SVGs: pastel frame + frosted inner */
export function UnitCircleFigure({
  pastel,
  caption,
  children,
}: {
  pastel: PastelId;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <div
        className={`uc-diagram-inner pastel-${pastel} rounded-xl bg-white/55 p-3 sm:p-5`}
      >
        {children}
      </div>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        {caption}
      </figcaption>
    </figure>
  );
}
