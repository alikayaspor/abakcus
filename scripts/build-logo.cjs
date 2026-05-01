/**
 * Builds public/abakcus-logo.png from public/abakcus-wordmark.svg (optional).
 * Do not run if you already placed a custom abakcus-logo.png in public/ — it will be overwritten.
 *
 *   npm run build:logo
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const svgPath = path.join(__dirname, "../public/abakcus-wordmark.svg");
const outPath = path.join(__dirname, "../public/abakcus-logo.png");

const svg = fs.readFileSync(svgPath);

sharp(svg)
  .resize(520, null, { withoutEnlargement: true })
  .png()
  .toFile(outPath)
  .then(() => {
    console.log("Wrote", outPath);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
