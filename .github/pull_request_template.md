## What

<!-- One or two sentences. What changes, in plain language. -->

## Why

<!-- The reason. If it fixes something, what was broken and how it showed. -->

## How to verify

<!-- Commands and expected output, so a reviewer can reproduce it. -->

```bash
pnpm install --frozen-lockfile
pnpm exec astro check
pnpm test
pnpm build
```

## Definition of Done

<!-- TRC-002. Tick what applies; strike through what genuinely does not. -->

- [ ] Branch is **up to date with `main`** (linear history is enforced)
- [ ] `astro check` — 0 errors, 0 warnings
- [ ] `pnpm test` green
- [ ] `pnpm build` green
- [ ] Verified through the **Worker** (`npx wrangler dev --local`), not only `pnpm dev`
- [ ] Reviewed **visually** if it changes anything the visitor sees
- [ ] New files carry `SPDX-License-Identifier` per `STD-010`
- [ ] Conventional commit message explaining *why*
- [ ] No secret, token or key in the diff

## Evidence

<!-- Screenshot, command output, or a link to the run. A claim without
     evidence is a hypothesis. -->

## What this does not cover

<!-- TRC-007 applied to review: state what you did NOT check, so the
     reviewer knows where the blind spot is. -->
