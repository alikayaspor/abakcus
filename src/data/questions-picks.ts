import { PASTEL } from "./pastel-palette";

/** Standalone “question” pieces — puzzles, riddles, one-screen challenges (not articles). */
export type QuestionPick = {
  slug: string;
  /** Display order on /questions and badges (1, 2, …) */
  number: number;
  title: string;
  dek: string;
  href: string;
  image: string;
  pageColor: string;
  /** Short label for cards */
  tag: string;
  publishedAt: string;
};

export const questionsPicks: QuestionPick[] = [
  {
    slug: "clockwise-ant",
    number: 1,
    title: "The clockwise ant",
    dek: "Two meetings on a clock, 45 minutes apart — how long was she on the face?",
    href: "/questions/clockwise-ant",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868c06c76?w=1200&q=80",
    pageColor: PASTEL.peach,
    tag: "Puzzle · 1992",
    publishedAt: "2026-04-12",
  },
];

export function getQuestionsSorted(): QuestionPick[] {
  return [...questionsPicks].sort((a, b) => a.number - b.number);
}
