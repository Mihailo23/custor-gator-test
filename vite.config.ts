import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";

const root = path.dirname(fileURLToPath(import.meta.url));

function elementsEntry() {
  try {
    const pkg = path.dirname(fileURLToPath(import.meta.resolve("@gator/elements/package.json")));
    return path.join(pkg, "src/index.ts");
  } catch {
    return path.resolve(root, "../gator-elements/src/index.ts");
  }
}

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@gator/elements": elementsEntry(),
    },
    dedupe: ["react", "react-dom"],
  },
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    plugins: ["react", "typescript", "oxc"],
    rules: {
      "react/rules-of-hooks": "error",
      "react/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  plugins: lazyPlugins(() => [react()]),
  test: {
    environment: "jsdom",
    setupFiles: "./src/test-setup.ts",
  },
});
