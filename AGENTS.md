# Agent Notes

This repo is a public portfolio artifact for a real clinic website. Keep changes modest, factual, and easy to review.

## Commands

```sh
npm ci
npm run dev
npm run check
npm run build
npm run verify:dist
```

Use `npm run verify` before considering a change ready.

## Conventions

- Keep public clinic facts in `src/data/clinic.ts`.
- Use content collections for procedure/page copy.
- Keep English and Korean routes equivalent unless there is a clear product reason.
- Prefer factual healthcare-adjacent copy over superlatives.
- Do not add patient data, credentials, private account notes, or internal owner instructions.
- Treat photos, logos, emblems, review excerpts, and clinic-specific copy as restricted assets.

## AI Workflow Boundary

Coding agents may help inspect, refactor, and verify the project. They should not invent clinic facts, credentials, patient outcomes, metrics, or review counts.
