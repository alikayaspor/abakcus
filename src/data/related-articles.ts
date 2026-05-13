import type { CuratedArticle, CuratedArticleSource } from "./articles-curated";
import { curatedArticles, toCuratedArticleWithSpan } from "./articles-curated";

/** How many related cards to show under each article (minimum target). */
export const RELATED_READ_MORE_COUNT = 6;

/** Routes that exist today — avoid 404s in “Read more” */
export const publishedArticleSlugs = new Set<string>([  "mymind",
  "fry-universe",
  "seeing-theory",
  "magritte-blank-signature",
  "al-jaghmini-astronomy-manuscript",
  "erich-dieckmann-metal-tube-chair",
  "feynman-math-education",  "feynman-technique",
  "sudoku-mathematics",
  "unit-circle",
  "fibonacci-shelf",
  "billingsley-euclid",
  "rambo-fox",
  "maxwell-warsaw",
  "indiana-pi-bill",
  "zurich-notebook",
  "geometry-behind-pringles",
  "pinocchio",
  "taming-the-garden",
  "mit-1869",
  "inkala-sudoku",
  "dinara-kasko-kinetic-tarts",
  "cymatics-nigel-stanford",
  "river-runner",
  "barbara-iweins-katalog",
  "killed-by-google",
  "marilyn-vos-savant",
  "alejandro-guijarro-momentum",
  "penrose-journal",
  "specimens-fancy-turning",
  "sqrt2-irrational",
  "snelson-needle-tower",
  "17-best-math-youtube-channels-to-study-mathematics",
  "25-beautiful-math-documentaries-to-love-math",
  "24-beautiful-physics-poster-designs-that-inspire-you",
  "0999-equals-1",
  "rafael-araujo-geometrical-masterpieces",
  "kung-fu-motion-visualization",
  "feynman-ode-to-a-flower",
  "okazaki-matchstick",
  "rushmore-1998",
  "stand-and-deliver",
  "owl-silent-flight",
  "mushroom-color-atlas",
  "yuki-kawae",
  "trinity",
  "introduction-to-mathematical-philosophy",
  "islamic-geometric-patterns-eric-broug",
  "oliver-byrne-euclid",
  "pasta-by-design",
  "geometry-of-pasta",
  "the-art-and-science-of-ernst-haeckel",
  "when-einstein-walked-with-godel",
  "fractal-geometry-of-nature",
  "lifelong-kindergarten",
  "surely-youre-joking-mr-feynman",
  "how-smart-machines-think",
  "infinite-powers",
  "your-name-in-landsat",
  "bambu-lab-p2s",
  "calculus-made-easy",
  "good-will-hunting",
  "literature-clock",
  "author-clock",
]);

/**
 * Preferred order for “related” by current article (up to six others).
 * Base order when reading X: all others, newest-first in the list below minus X.
 */
const RELATED_ORDER: Record<string, string[]> = {
  "mymind": [
    "literature-clock",
    "river-runner",
    "barbara-iweins-katalog",
    "killed-by-google",
    "mushroom-color-atlas",
    "seeing-theory",
  ],
  "author-clock": [
    "literature-clock",
    "bambu-lab-p2s",
    "hagoromo-chalk",
    "billingsley-euclid",
    "barbara-iweins-katalog",
    "killed-by-google",
  ],
  "literature-clock": [
    "author-clock",
    "calculus-made-easy",
    "seeing-theory",
    "billingsley-euclid",
    "river-runner",
    "barbara-iweins-katalog",
  ],
  "good-will-hunting": [
    "stand-and-deliver",
    "feynman-math-education",
    "mit-1869",
    "feynman-technique",
    "calculus-made-easy",
    "marilyn-vos-savant",
  ],
  "calculus-made-easy": [
    "infinite-powers",
    "feynman-math-education",
    "billingsley-euclid",
    "seeing-theory",
    "feynman-technique",
    "unit-circle",
  ],
  "your-name-in-landsat": [
    "river-runner",
    "seeing-theory",
    "fry-universe",
    "mushroom-color-atlas",
    "barbara-iweins-katalog",
    "killed-by-google",
  ],
  "fry-universe": [
    "river-runner",
    "seeing-theory",
    "barbara-iweins-katalog",
    "killed-by-google",
    "mushroom-color-atlas",
    "your-name-in-landsat",
  ],
  "seeing-theory": [
    "river-runner",
    "fry-universe",
    "barbara-iweins-katalog",
    "killed-by-google",
    "mushroom-color-atlas",
    "your-name-in-landsat",
  ],
  "magritte-blank-signature": [
    "alejandro-guijarro-momentum",
    "pinocchio",
    "specimens-fancy-turning",
    "billingsley-euclid",
    "dinara-kasko-kinetic-tarts",
    "geometry-behind-pringles",
  ],
  "al-jaghmini-astronomy-manuscript": [
    "zurich-notebook",
    "billingsley-euclid",
    "alejandro-guijarro-momentum",
    "feynman-math-education",
    "penrose-journal",
    "mit-1869",
  ],
  "erich-dieckmann-metal-tube-chair": [
    "specimens-fancy-turning",
    "fibonacci-shelf",
    "geometry-behind-pringles",
    "billingsley-euclid",
    "alejandro-guijarro-momentum",
    "dinara-kasko-kinetic-tarts",
  ],
  "feynman-math-education": [
    "feynman-technique",
    "mit-1869",
    "indiana-pi-bill",
    "marilyn-vos-savant",
    "sudoku-mathematics",
    "0999-equals-1",
  ],
  "feynman-technique": [
    "feynman-math-education",
    "sudoku-mathematics",
    "mit-1869",
    "billingsley-euclid",
    "unit-circle",
    "pinocchio",
  ],
  "sudoku-mathematics": [
    "feynman-technique",
    "inkala-sudoku",
    "mit-1869",
    "unit-circle",
    "billingsley-euclid",
    "pinocchio",
  ],
  "inkala-sudoku": [
    "sudoku-mathematics",
    "mit-1869",
    "zurich-notebook",
    "geometry-behind-pringles",
    "pinocchio",
    "fibonacci-shelf",
  ],
  "mit-1869": [
    "feynman-technique",
    "sudoku-mathematics",
    "inkala-sudoku",
    "indiana-pi-bill",
    "billingsley-euclid",
    "unit-circle",
  ],
  "taming-the-garden": [
    "rambo-fox",
    "pinocchio",
    "zurich-notebook",
    "geometry-behind-pringles",
    "fibonacci-shelf",
    "indiana-pi-bill",
  ],
  "pinocchio": [
    "feynman-technique",
    "sudoku-mathematics",
    "geometry-behind-pringles",
    "indiana-pi-bill",
    "unit-circle",
    "zurich-notebook",
  ],
  "unit-circle": [
    "feynman-technique",
    "sudoku-mathematics",
    "pinocchio",
    "geometry-behind-pringles",
    "zurich-notebook",
    "indiana-pi-bill",
  ],
  "fibonacci-shelf": [
    "feynman-technique",
    "sudoku-mathematics",
    "pinocchio",
    "geometry-behind-pringles",
    "zurich-notebook",
    "indiana-pi-bill",
  ],
  "billingsley-euclid": [
    "feynman-technique",
    "sudoku-mathematics",
    "mit-1869",
    "geometry-behind-pringles",
    "zurich-notebook",
    "indiana-pi-bill",
  ],
  "rambo-fox": [
    "taming-the-garden",
    "geometry-behind-pringles",
    "zurich-notebook",
    "indiana-pi-bill",
    "maxwell-warsaw",
    "fibonacci-shelf",
  ],
  "maxwell-warsaw": [
    "geometry-behind-pringles",
    "zurich-notebook",
    "indiana-pi-bill",
    "rambo-fox",
    "fibonacci-shelf",
    "unit-circle",
  ],
  "indiana-pi-bill": [
    "feynman-technique",
    "sudoku-mathematics",
    "mit-1869",
    "inkala-sudoku",
    "pinocchio",
    "geometry-behind-pringles",
  ],
  "zurich-notebook": [
    "pinocchio",
    "geometry-behind-pringles",
    "indiana-pi-bill",
    "maxwell-warsaw",
    "fibonacci-shelf",
    "billingsley-euclid",
  ],
  "geometry-behind-pringles": [
    "dinara-kasko-kinetic-tarts",
    "pinocchio",
    "fibonacci-shelf",
    "indiana-pi-bill",
    "maxwell-warsaw",
    "billingsley-euclid",
  ],
  "dinara-kasko-kinetic-tarts": [
    "geometry-behind-pringles",
    "fibonacci-shelf",
    "billingsley-euclid",
    "pinocchio",
    "maxwell-warsaw",
    "zurich-notebook",
  ],
  "cymatics-nigel-stanford": [
    "taming-the-garden",
    "geometry-behind-pringles",
    "fibonacci-shelf",
    "unit-circle",
    "maxwell-warsaw",
    "billingsley-euclid",
  ],
  "river-runner": [
    "seeing-theory",
    "fry-universe",
    "barbara-iweins-katalog",
    "killed-by-google",
    "mushroom-color-atlas",
    "your-name-in-landsat",
  ],
  "barbara-iweins-katalog": [
    "river-runner",
    "seeing-theory",
    "fry-universe",
    "killed-by-google",
    "mushroom-color-atlas",
    "your-name-in-landsat",
  ],
  "killed-by-google": [
    "river-runner",
    "barbara-iweins-katalog",
    "seeing-theory",
    "fry-universe",
    "mushroom-color-atlas",
    "your-name-in-landsat",
  ],
  "marilyn-vos-savant": [
    "sudoku-mathematics",
    "inkala-sudoku",
    "indiana-pi-bill",
    "mit-1869",
    "feynman-technique",
    "billingsley-euclid",
  ],
  "alejandro-guijarro-momentum": [
    "billingsley-euclid",
    "mit-1869",
    "dinara-kasko-kinetic-tarts",
    "zurich-notebook",
    "feynman-technique",
    "cymatics-nigel-stanford",
  ],
  "specimens-fancy-turning": [
    "billingsley-euclid",
    "geometry-behind-pringles",
    "dinara-kasko-kinetic-tarts",
    "fibonacci-shelf",
    "indiana-pi-bill",
    "zurich-notebook",
  ],
  "sqrt2-irrational": [
    "billingsley-euclid",
    "feynman-technique",
    "mit-1869",
    "indiana-pi-bill",
    "sudoku-mathematics",
    "inkala-sudoku",
  ],
  "snelson-needle-tower": [
    "specimens-fancy-turning",
    "geometry-behind-pringles",
    "billingsley-euclid",
    "dinara-kasko-kinetic-tarts",
    "cymatics-nigel-stanford",
    "alejandro-guijarro-momentum",
  ],
  "17-best-math-youtube-channels-to-study-mathematics": [
    "feynman-technique",
    "sudoku-mathematics",
    "unit-circle",
    "sqrt2-irrational",
    "mit-1869",
    "inkala-sudoku",
  ],
  "25-beautiful-math-documentaries-to-love-math": [
    "feynman-technique",
    "marilyn-vos-savant",
    "penrose-journal",
    "sqrt2-irrational",
    "inkala-sudoku",
    "specimens-fancy-turning",
  ],
  "24-beautiful-physics-poster-designs-that-inspire-you": [
    "alejandro-guijarro-momentum",
    "feynman-technique",
    "geometry-behind-pringles",
    "cymatics-nigel-stanford",
    "25-beautiful-math-documentaries-to-love-math",
    "sqrt2-irrational",
  ],
  "0999-equals-1": [
    "sqrt2-irrational",
    "feynman-technique",
    "billingsley-euclid",
    "indiana-pi-bill",
    "sudoku-mathematics",
    "mit-1869",
  ],
  "rafael-araujo-geometrical-masterpieces": [
    "alejandro-guijarro-momentum",
    "billingsley-euclid",
    "specimens-fancy-turning",
    "fibonacci-shelf",
    "24-beautiful-physics-poster-designs-that-inspire-you",
    "dinara-kasko-kinetic-tarts",
  ],
  "kung-fu-motion-visualization": [
    "cymatics-nigel-stanford",
    "taming-the-garden",
    "alejandro-guijarro-momentum",
    "geometry-behind-pringles",
    "dinara-kasko-kinetic-tarts",
    "roberto-carlos-free-kick",
  ],
  "los-cronocrimenes": [
    "taming-the-garden",
    "cymatics-nigel-stanford",
    "kung-fu-motion-visualization",
    "pinocchio",
    "zurich-notebook",
    "feynman-technique",
  ],
  "feynman-ode-to-a-flower": [
    "feynman-technique",
    "feynman-math-education",
    "cymatics-nigel-stanford",
    "taming-the-garden",
    "alejandro-guijarro-momentum",
    "billingsley-euclid",
  ],
  "okazaki-matchstick": [
    "cymatics-nigel-stanford",
    "dinara-kasko-kinetic-tarts",
    "taming-the-garden",
    "feynman-ode-to-a-flower",
    "alejandro-guijarro-momentum",
    "geometry-behind-pringles",
  ],
  "rushmore-1998": [
    "feynman-math-education",
    "feynman-technique",
    "los-cronocrimenes",
    "taming-the-garden",
    "alejandro-guijarro-momentum",
    "marilyn-vos-savant",
  ],
  "owl-silent-flight": [
    "cymatics-nigel-stanford",
    "feynman-math-education",
    "geometry-behind-pringles",
    "alejandro-guijarro-momentum",
    "okazaki-matchstick",
    "feynman-ode-to-a-flower",
  ],
  "mushroom-color-atlas": [
    "barbara-iweins-katalog",
    "river-runner",
    "seeing-theory",
    "fry-universe",
    "killed-by-google",
    "your-name-in-landsat",
  ],
  "trinity": [
    "yuki-kawae",
    "cymatics-nigel-stanford",
    "feynman-ode-to-a-flower",
    "okazaki-matchstick",
    "barbara-iweins-katalog",
    "river-runner",
  ],
  "yuki-kawae": [
    "okazaki-matchstick",
    "taming-the-garden",
    "dinara-kasko-kinetic-tarts",
    "cymatics-nigel-stanford",
    "feynman-ode-to-a-flower",
    "specimens-fancy-turning",
  ],
  "introduction-to-mathematical-philosophy": [
    "sqrt2-irrational",
    "0999-equals-1",
    "feynman-technique",
    "billingsley-euclid",
    "mit-1869",
    "sudoku-mathematics",
  ],
  "pi-books-list": [
    "indiana-pi-bill",
    "unit-circle",
    "sqrt2-irrational",
    "0999-equals-1",
    "billingsley-euclid",
    "feynman-technique",
  ],
  "how-smart-machines-think": [
    "feynman-technique",
    "feynman-math-education",
    "surely-youre-joking-mr-feynman",
    "seeing-theory",
    "lifelong-kindergarten",
    "when-einstein-walked-with-godel",
  ],
  "infinite-powers": [
    "calculus-made-easy",
    "feynman-technique",
    "feynman-math-education",
    "surely-youre-joking-mr-feynman",
    "when-einstein-walked-with-godel",
    "unit-circle",
  ],
};

export function getRelatedArticles(currentSlug: string): CuratedArticle[] {
  const current = curatedArticles.find((a) => a.slug === currentSlug);
  const currentHref = current?.href ?? "";

  // Determine category from the current page's href prefix
  const isBook = currentHref.startsWith("/books/");
  const isVideo = currentHref.startsWith("/videos/");
  const isTool = currentHref.startsWith("/tools/");

  const pool = curatedArticles.filter((a) => {
    if (a.slug === currentSlug) return false;
    if (!publishedArticleSlugs.has(a.slug)) return false;
    if (isBook) return a.href.startsWith("/books/");
    if (isVideo) return a.href.startsWith("/videos/");
    if (isTool) return a.href.startsWith("/tools/");
    // Articles: exclude tools, books, videos
    return (
      !a.href.startsWith("/tools/") &&
      !a.href.startsWith("/books/") &&
      !a.href.startsWith("/videos/")
    );
  });

  const preferred = RELATED_ORDER[currentSlug] ?? [];
  const out: CuratedArticle[] = [];
  const seen = new Set<string>();

  for (const slug of preferred) {
    const item = pool.find((a) => a.slug === slug);
    if (item && !seen.has(item.slug)) {
      out.push(toCuratedArticleWithSpan(item));
      seen.add(item.slug);
    }
  }

  for (const item of pool) {
    if (!seen.has(item.slug) && out.length < RELATED_READ_MORE_COUNT) {
      out.push(toCuratedArticleWithSpan(item));
      seen.add(item.slug);
    }
  }

  return out.slice(0, RELATED_READ_MORE_COUNT);
}

/** All published article routes (no tools), newest first — for `/articles` index. */
export function getPublishedArticlesForListing(): CuratedArticleSource[] {
  return [...curatedArticles]
    .filter(
      (a) =>
        publishedArticleSlugs.has(a.slug) &&
        !a.href.startsWith("/tools/") &&
        !a.href.startsWith("/videos/") &&
        !a.href.startsWith("/books/"),
    )
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

/** All published tool routes, newest first — for `/tools` index. */
export function getPublishedToolsForListing(): CuratedArticleSource[] {
  return [...curatedArticles]
    .filter((a) => publishedArticleSlugs.has(a.slug) && a.href.startsWith("/tools/"))
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}
