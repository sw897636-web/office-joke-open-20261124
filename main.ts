// Office Joke Open — make.fun entry
// Writes one single-line office joke to /output/entry.txt.
// Deterministic: same text on every run, no network, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I typed 'per my last email' and instantly felt the kind of power that should require a license and a background check.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
