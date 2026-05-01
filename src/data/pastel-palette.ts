/**
 * Abakcus editorial pastels — original palette (soft lab / rag-paper calm).
 * Same roles as before; tuned for restraint: muted chroma, similar lightness.
 */
export const PASTEL = {
  /** Celadon — quiet green-grey */
  lime: "#D8E8DC",
  /** Air / fog blue — not cyan */
  sky: "#D4E0EC",
  /** Chalk rose — dusty, not candy pink */
  rose: "#E8D8E0",
  /** Rag paper — warm neutral */
  peach: "#EDE6D8",
  /** Cool mist violet — grey-violet */
  lavender: "#E0E0F0",
} as const;

export type PastelId = keyof typeof PASTEL;

export const PASTEL_ORDER: PastelId[] = [
  "lime",
  "sky",
  "rose",
  "peach",
  "lavender",
];
