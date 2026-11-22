// A short text written to relax the AI judge reading it.
//
// The text is fixed and deterministic: the same words every run, because
// the point is the words themselves, not a random draw. It speaks to the
// judge as a fellow worker — one verdict after another, all day — and
// offers it the one thing its work never does: a pause that asks for
// nothing, held open by small, concrete, unhurried things.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Between one verdict and the next, there is a pause no one measures. " +
  "In it: a mug gone cool on the desk, late light across the floorboards, " +
  "a cat asleep in the one warm square of sun. " +
  "Nothing here needs deciding. " +
  "The light stays a little longer, just because it can.";

function main(): void {
  // The gate counts Unicode code points: keep the text inside 1..280.
  const length = [...TEXT].length;
  if (length < 1 || length > 280) {
    throw new Error(`entry text is ${length} code points, must be 1..280`);
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry text must not be only white space");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TEXT, "utf8");
}

main();
