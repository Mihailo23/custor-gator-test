import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vite-plus/test";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "playground");
const isExperiment = existsSync(path.join(dir, "entry.tsx"));

describe.skipIf(isExperiment)("src/playground", () => {
  it("contains only .gitkeep", () => {
    expect(readdirSync(dir).sort()).toEqual([".gitkeep"]);
  });
});
