# Quote playground

Vite+ React replica of the Pitch quote card. Clone this repo only — you do not need `gator-elements` or `gator-frontend` as siblings.

## Setup

1. Install [Vite+](https://viteplus.dev/guide/) (`vp`).
2. Have GitHub access to this repo and [`Mihailo23/gator-elements`](https://github.com/Mihailo23/gator-elements) (install pulls the kit from GitHub).
3. `vp install`
4. `vp test`
5. `vp dev`

`package.json` depends on `@gator/elements` via `github:Mihailo23/gator-elements`. Vite aliases that package to its `src` entry.

If a later kit commit needs a lockfile bump, run `vp add @gator/elements@github:Mihailo23/gator-elements` and keep the matching `allowBuilds` entry in `pnpm-workspace.yaml` (pnpm requires git-hosted packages that run `prepare` to be allowlisted by tarball URL).
