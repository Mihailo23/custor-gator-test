<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Built-in Commands vs Scripts

`vp <name>` runs a built-in command. `vp run <name>` runs a `package.json` script or a `vite.config.ts` task. Scripts cannot overwrite built-ins, so `vp dev` and `vp run dev` may do different things. Check `package.json` and `vite.config.ts` first, and run `vp run <name>` when the project defines a script or task with that name.

## Tool Versions

Run `vp toolchain` to show versions and relationships in the active Vite+
release. Add a tool name to select part of the graph. For example, run
`vp toolchain vite`. Use `--global` to ignore the local `vite-plus` package. Use
`vp why <package>` to show the package-manager dependency graph.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->

# Pull a frontend slice

This repo is a **host**. Clone it only. Do not clone `gator-elements` or `gator-frontend`. Kit installs from `github:Mihailo23/gator-elements`.

When the human wants to throw ideas at a piece of the product:

1. `git checkout -b experiment/<slug>` (slug from the slice, e.g. `quote-form`).
2. Fetch the named component/page from **GitHub** `https://github.com/Mihailo23/gator-frontend` (default branch). Prefer `gh api` or raw file URLs. Do not silently copy `../gator-frontend` unless this machine clearly has that sibling **and** GitHub fetch failed and the human is not on a clone-only machine.
3. Copy the slice plus its **local import closure** (colocated `.module.css`, `./` / `.js` imports) into `src/playground/`. Keep relative imports working. If the closure is huge or unclear, **stop and ask** — do not copy the whole app.
4. Add `src/playground/entry.tsx` that re-exports the slice root, e.g. `export { HomeQuoteForm as default } from "./HomeQuoteForm.js";`
5. Point `src/App.tsx` at it:

```tsx
import Slice from "./playground/entry.js";

export default function App() {
  return <Slice />;
}
```

6. `vp install` if needed. `vp test` (copied tests may run; `src/playground.test.ts` skips when `entry.tsx` exists). `vp dev`.
7. Open the Vite localhost URL in the **Cursor browser** (in-IDE browser tools). Do not assume an external Chrome window.

When they are done:

- Write `docs/experiments/<yyyy-mm-dd>-<slug>.md` with: what was pulled (repo, ref, files), what changed and why, how to run (`vp dev` on this branch), open questions for Mihailo / Wei.
- Open an **experiment PR** (playground UI + writeup). **Do not merge it.** It is for looking at the running idea.
- Land the writeup on `main` with a **docs-only** follow-up PR (no `src/playground/` files, `App.tsx` stays the placeholder).
- Never commit playground UI to `main`. `src/playground/` on `main` is only `.gitkeep`.
