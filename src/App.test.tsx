import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import App from "./App.js";

const isExperiment = existsSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "playground/entry.tsx"),
);

describe.skipIf(isExperiment)("App", () => {
  it("tells you to pull a slice", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Pull a slice" })).toBeInTheDocument();
  });
});
