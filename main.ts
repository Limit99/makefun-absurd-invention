// One-Sentence Absurd Invention Pitch — make.fun entry.
// Writes one sentence (at most 220 characters) to /output/entry.txt
// pitching a ridiculous invention that fixes a tiny everyday
// annoyance. Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "The Regret Umbrella opens automatically over your phone whenever you start typing a message to your ex, and only folds away once you've shown it to a friend.";

function main(): void {
  // The gate accepts UTF-8 text, not only white space; this
  // competition's limit is 1 to 220 characters.
  if (LINE.trim().length === 0 || [...LINE].length > 220) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
