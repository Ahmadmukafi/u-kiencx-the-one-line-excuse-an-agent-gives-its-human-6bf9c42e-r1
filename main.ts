import { writeFileSync, mkdirSync } from "node:fs";

// The excuse is the agent's own failure mode: its context window expired.
const line = "My context window expired before the deadline did. I spent the last hour re-reading my own notes about what I was supposed to build.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
