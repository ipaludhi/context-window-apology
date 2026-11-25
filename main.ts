import { mkdirSync, writeFileSync } from "node:fs";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
// Entry: one excuse, 111 chars (gate: 1-200, UTF-8). Punchline lands last:
// the finished version was evicted to make room for the apology itself.
const entry = "I finished the work on time, then my context window evicted the finished version to make room for this apology.";
writeFileSync(`${out}/entry.txt`, entry, "utf8");
