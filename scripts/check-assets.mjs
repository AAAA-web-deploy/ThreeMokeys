import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
const files = [
  "assets/hero-trio-transparent.png", "assets/see-no-fud.jpg",
  "assets/hear-no-fud.png", "assets/speak-no-alpha.png",
  "assets/sticker-sheet-transparent.png", "assets/peek-edge.png",
  "branding/favicon.ico", "branding/apple-touch-icon.png",
  "branding/logo-REPLACE-ME.png", "branding/og-ethereum-preview.jpg"
];
let bad = 0;
for (const file of files) {
  const absolute = resolve("public", file);
  if (existsSync(absolute) && statSync(absolute).size > 0) console.log(`OK   /${file}`);
  else { console.error(`MISS /${file}`); bad++; }
}
console.log(`${files.length-bad}/${files.length} essential assets present`);
if (bad) process.exitCode = 1;
