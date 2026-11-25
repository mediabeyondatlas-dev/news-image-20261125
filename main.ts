// Entry program for news-image-20261125 ("The World Today", Wednesday 25 November 2026).
// Copies the bundled infographic entry.png to the grader's output directory.
// Standard library only; no network, no randomness: both graded runs write
// the exact same bytes.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));

// Confirm the copy landed as a real PNG before the run ends, so a
// truncated bundle fails loudly here instead of grading a bad image.
const copied = readFileSync(join(outDir, "entry.png"));
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (copied.length === 0 || !copied.subarray(0, 8).equals(pngMagic)) {
  throw new Error("entry.png copy failed: output is not a PNG");
}
