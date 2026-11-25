// Monday Morning Punchlines — entry program (Node 22, no dependencies).
//
// The joke: "My alarm clock hit snooze on itself Monday morning."
// Craft: the alarm clock is Monday morning's enforcer — the thing that drags
// you out of bed. The turn flips the roles: the enforcer itself is too tired
// to face Monday, so it snoozes *itself*. The punchline lands on the last two
// words ("on itself"), the setup is one short sentence, and the image is fresh
// rather than another "Mondays are bad" complaint. No trailing newline is
// written on purpose: the gate counts the file's characters, so every byte
// should be the joke itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE = "My alarm clock hit snooze on itself Monday morning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read it back and verify: the file must be exactly the joke, 1-200 chars,
// a single line, no trailing newline, and not whitespace-only.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters, must be 1-200`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be exactly one line");
}
if (JOKE.endsWith("\n")) {
  throw new Error("joke must not end with a newline");
}
