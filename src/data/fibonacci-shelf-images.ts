/** Cloudflare R2 public bucket — Fibonacci Shelf (Peng Wang) photography */
const BASE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev";

export const fibonacciShelfImages = {
  /** Lead + homepage — in-context / readable at small sizes (was former “closing” shot) */
  hero: `${BASE}/The%20Fibonacci%20Shelf%20by%20Peng%20Wang%206.jpg`,
  afterSequence: `${BASE}/The%20Fibonacci%20Shelf%20by%20Peng%20Wang%202.jpg`,
  objectStudy: `${BASE}/The%20Fibonacci%20Shelf%20by%20Peng%20Wang%203.jpg`,
  detailA: `${BASE}/The%20Fibonacci%20Shelf%20by%20Peng%20Wang%204.jpg`,
  detailB: `${BASE}/The%20Fibonacci%20Shelf%20by%20Peng%20Wang%205.jpg`,
  /** Article closer — product-style frame (former hero) */
  closing: `${BASE}/The%20Fibonacci%20Shelf%20by%20Peng%20Wang.jpg`,
} as const;
