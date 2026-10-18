// Static validation without importing TypeScript. Useful before editing a Cursor build.
import { readFileSync } from "node:fs";
const src = readFileSync("config/site.ts", "utf8");
for (const key of ["contractAddress", "headerLogoPath", "supply", "x:", "telegram:", "hero:", "stickers:"]) {
  if (!src.includes(key)) { console.error(`Missing configuration key: ${key}`); process.exitCode = 1; }
}
if (src.includes('contractAddress: "0xfd062a13c1bdcda93184b3dce79963f362647777"')) {
  console.error("The original BSC CA must NOT be used as the Ethereum CA."); process.exitCode = 1;
}
console.log("Site config structure checked. CA and external community links may intentionally be empty.");
