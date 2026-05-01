import { PASTEL, type PastelId } from "@/data/pastel-palette";
import { normalizeUnitCircleSvg } from "@/lib/unit-circle-svg-normalize";

export function UnitCircleDiagram({
  svg,
  caption,
  pastel,
}: {
  svg: string;
  caption: string;
  pastel: PastelId;
}) {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <div
        className={`uc-diagram-inner pastel-${pastel} overflow-x-auto rounded-xl bg-white/55 p-4 sm:p-6 [-webkit-overflow-scrolling:touch]`}
        dangerouslySetInnerHTML={{ __html: normalizeUnitCircleSvg(svg) }}
      />
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        {caption}
      </figcaption>
    </figure>
  );
}
