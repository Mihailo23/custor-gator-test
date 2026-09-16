# custor-gator-test

Vite+ React playground for the Pitch quote card.

`@gator/elements` is declared as `github:Mihailo23/gator-elements` in `package.json`, but that install currently lacks `src/` (and `dist/`) because the `files: ["dist", "src"]` commit on the `gator-elements` origin hasn't been pushed yet; `pnpm-lock.yaml`/`node_modules` here are installed via the sibling `file:../gator-elements` until that lands, then `pnpm install` should be re-run to pick up the GitHub source.
