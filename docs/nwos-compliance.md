---
id: "NWOS-COMPLIANCE"
title: "STD-015 compliance for numengames-web"
type: documentation
status: active
version: "1.0.0"
created: "2026-09-11T00:00:00Z"
updated: "2026-09-11T00:00:00Z"
author: "ursa"
owner: "oracle"
tags: [compliance, std-015, nwos, admin]
license: "CC-BY-4.0"
registration: exempt
registration_reason: "singular document, not a numbered series"
---

# STD-015 compliance — what is done, and what needs admin rights

`STD-015` lives in `numinia-nwos` and is the source of truth. This file
records where this repository stands against it, measured — not asserted — by
`scripts/audit-nwos.mjs`.

Run it yourself:

```bash
node scripts/audit-nwos.mjs
```

## What the agent could not do

The `ursa-numinia` account has `push` and `maintain` on this repository, and
**not** `admin`. Measured:

```
admin=false  push=true  maintain=true
```

Consequences, precisely:

| Action | Why it is blocked |
| --- | --- |
| Create Actions secrets | `gh secret list` → HTTP 403 |
| Edit the `proteger-main` ruleset | ruleset writes need admin |
| Enable `require_code_owner_review` | same |
| Read Dependabot alerts | `dependabot/alerts` → HTTP 403 |
| Set repository topics | needs admin |

Everything in this table is an Oracle act. The rest was done in the pull
request that introduced this file.

## The six items needing admin

### 1. Three Actions secrets — this is the one that blocks publication

`Settings → Secrets and variables → Actions → New repository secret`

| Secret | Where it comes from |
| --- | --- |
| `PUBLIC_WEB3FORMS_KEY` | the key the current production HTML already serves |
| `CLOUDFLARE_API_TOKEN` | Cloudflare → My Profile → API Tokens → *Edit Cloudflare Workers* template |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare → Workers & Pages → right sidebar |

`deploy.yml` has triggered on every merge to `main` since `59c8087` and has
stopped at the same gate every time: without `PUBLIC_WEB3FORMS_KEY` it
refuses to publish, because a contact form that accepts visitors and silently
discards every submission is worse than no form.

If a secret is wrong the run fails red **without touching production** — the
SHA stamp is validated in `dist` before `wrangler deploy` runs.

### 2. Ruleset: require status checks (`ARC-002`)

`Settings → Rules → proteger-main → Add rule → Require status checks to pass`

- add the `test-and-build` check
- tick **Require branches to be up to date before merging**

Today the ruleset has `pull_request`, `deletion`, `non_fast_forward` and
`required_linear_history` — but **no status check rule**. Two consequences:
CI does not have to be green to merge, and nothing enforces being up to date
with `main`. `numinia-nwos` has this rule with
`strict_required_status_checks_policy: true`; this repository does not.

This is what makes "always be ahead of main" automatic instead of depending
on anyone remembering it.

### 3. Ruleset: require code owner review (`SEC-010`)

`Settings → Rules → proteger-main → Require review from Code Owners`

`.github/CODEOWNERS` now exists and lists Pablo, María and Christian on `*`,
with the Oracle alone on licensing, CI and published copy. GitHub will
**request** their review on every pull request as soon as the file is on
`main`. It will not **require** it until this box is ticked.

Note what the standard actually says: `DEV-007` requires *at least one*
approval, and the ruleset is set to 1. Requiring three reviewers is a
practice, not a written rule — see the note at the end.

### 4. Licence ruling (`AUT-006`, `LIC-002`)

Three sources disagree:

| Source | Says |
| --- | --- |
| `LICENSE` at the root | GPL-3.0 |
| `package.json` | no `license` field at all |
| Source files with SPDX | `AGPL-3.0-only` |
| `LIC-002` of `STD-010` | deployable app → `AGPL-3.0-only` |

`REUSE.toml` now declares what `LIC-002` prescribes. The root `LICENSE` file
still contradicts it, and replacing a licence is an Oracle act — an agent
does not decide the legal regime of a published work.

### 5. Dependabot (`SEC-003`)

15 alerts on `main`: 1 critical, 9 high, 5 moderate. Three pull requests
(#7 astro, #8 vitest, #9 sharp) waiting for approval.

### 6. Repository topics (`TRC-001`)

About has a description and a website, and zero topics.

## Also worth noting

`homepage` in About points to `numengames.com`. The site this repository
deploys is **`numen.games`**. One of the two is wrong.

## On requiring three reviewers

The instruction to put Pablo, María and Christian on every review is recorded
in `CODEOWNERS` and honoured. It is **not** currently a rule of the standard:

- the ruleset requires `required_approving_review_count: 1`
- `required_reviewers` is empty
- no document in `numinia-nwos` names a second or third reviewer
- history: #12–#15 were approved by María alone, #16 and #17 by Pablo alone

By `AUT-063` of `STD-017` — *a rule written in a decision, a mission or a
commit message is not a rule yet; the sentence goes into the document a
reader looks in* — making this binding across the organisation means writing
it into `STD-015`, in `numinia-nwos`, by pull request.
