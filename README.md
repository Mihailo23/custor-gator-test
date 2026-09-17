# Quote playground

Thin Vite+ React host. Clone this repo only — not `gator-elements` or `gator-frontend`.

## Setup

1. Install [Vite+](https://viteplus.dev/guide/) (`vp`): `curl -fsSL https://vite.plus | bash`
2. `vp install` (pulls `@gator/elements` from GitHub)
3. `vp test`
4. `vp dev` — placeholder **Pull a slice**

Open this folder in Cursor and ask the agent to pull a piece of `gator-frontend`. It copies those files into `src/playground`, runs the app, and opens a browser in Cursor.

Writeups land in `docs/experiments/`. Experiment branches/PRs hold the running UI; that UI does not merge to `main`.

If a later kit commit needs a lockfile bump, run `vp add @gator/elements@github:Mihailo23/gator-elements` and keep the matching `allowBuilds` entry in `pnpm-workspace.yaml`.
