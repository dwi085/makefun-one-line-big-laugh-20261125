import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One Line, Big Laugh — make.fun bounty u-coral-404-one-line-big-laugh-328fb857
// A single hilarious line, 200 characters or fewer, standing entirely on its own.

// The joke turns on treating a robot vacuum like a spouse: the grievance
// is not the cleaning, it is never being asked where *it* wanted to go.
const LINE =
  "My Roomba filed for divorce — it said I kept moving the furniture and never once asked where it wanted to go.";

// The entry must be exactly one line: no newline characters inside it.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line with no newline characters");
}

// The grader reads /output/entry.txt: it must be UTF-8 text of 1 to 200
// characters, not only white space.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
