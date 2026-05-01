/** Map legacy HTML diagram colors → site + diagram tokens (globals: .unit-circle-article) */

export function normalizeUnitCircleSvg(svg: string): string {
  let s = svg
    .replace(/\swidth="[^"]*"/g, "")
    .replace(/\sheight="[^"]*"/g, "")
    .replace(
      /<svg/,
      '<svg class="mx-auto block h-auto w-full max-w-full" preserveAspectRatio="xMidYMid meet"',
    );

  /* Table “dark” header row → same tint system as θ row (pastel-aware via parent) */
  s = s.replace(
    /<rect x="18" y="15" width="454" height="52" fill="#1a1714"\/>/g,
    '<rect x="18" y="15" width="454" height="52" fill="var(--uc-table-header)" stroke="var(--line)" stroke-width="1" />',
  );
  s = s.replace(
    /<rect x="18" y="15" width="474" height="52" fill="#1a1714"\/>/g,
    '<rect x="18" y="15" width="474" height="52" fill="var(--uc-table-header)" stroke="var(--line)" stroke-width="1" />',
  );

  const pairs: [RegExp, string][] = [
    [/#1a1714/gi, "var(--ink)"],
    [/#212324/gi, "var(--ink)"],
    [/#7a7065/gi, "var(--ink-muted)"],
    [/#676767/gi, "var(--ink-muted)"],
    [/#d9d0c4/gi, "var(--line)"],
    [/#e8e2d8/gi, "var(--line)"],
    [/#dadce0/gi, "var(--line)"],
    /* Cream header row in tables → tinted band (sweet, not stark) */
    [/#f5f1eb/gi, "var(--uc-table-header)"],
    [/#fafafa/gi, "var(--tonal)"],
    [/#ffffff/gi, "var(--uc-paper)"],
    [/#2a4a7f/gi, "var(--uc-sin)"],
    [/#b5401c/gi, "var(--uc-cos)"],
    [/#c4962a/gi, "var(--ink-muted)"],
    [/#1f7a6e/gi, "var(--uc-mint)"],
    [/#c4612a/gi, "var(--uc-warm)"],
    [/#7ab0e8/gi, "var(--uc-sin-soft)"],
    [/#e8906a/gi, "var(--uc-cos-soft)"],
    [
      /font-family="EB Garamond, serif"/g,
      'font-family="var(--font-serif), ui-serif, Georgia, serif"',
    ],
    [
      /font-family="Playfair Display, serif"/g,
      'font-family="var(--font-serif), ui-serif, Georgia, serif"',
    ],
    [
      /font-family='EB Garamond, serif'/g,
      "font-family='var(--font-serif), ui-serif, Georgia, serif'",
    ],
  ];

  for (const [re, rep] of pairs) s = s.replace(re, rep);

  /* Raw SVG uses fill="white" — map to soft paper */
  s = s.replace(/fill="white"/gi, 'fill="var(--uc-paper)"');

  return s;
}
