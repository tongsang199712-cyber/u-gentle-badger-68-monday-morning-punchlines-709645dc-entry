import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Punchline: the alarm clock is supposed to be the strict enforcer of
// Monday morning, dragging everyone out of bed on time. The joke is that
// even the enforcer could not face Monday either — it got so tired that
// it hit snooze on itself, surrendering before the day even started.
const line = "My alarm clock hit snooze on itself Monday morning.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`Line length ${line.length} is outside the 1-200 character gate.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("Verification failed: file contents do not match the line.");
}

console.log(`Verified: ${written}`);
console.log(`Character count: ${written.length}`);
