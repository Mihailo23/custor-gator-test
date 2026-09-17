import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import App from "./App.js";

describe("App", () => {
  it("tells you to pull a slice", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Pull a slice" })).toBeInTheDocument();
  });
});
