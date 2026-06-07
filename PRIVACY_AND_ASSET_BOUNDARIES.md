# Privacy And Asset Boundaries

This repository is public for portfolio review. It is not a reusable clinic template and it is not a source of licensed media.

## Data Boundaries

- The site is static and does not include first-party appointment forms.
- Booking, maps, email, phone, and social links point to external services.
- No patient records, appointment exports, analytics credentials, private account details, or search-console tokens should be committed.
- Public clinic facts live in `src/data/clinic.ts` and should be checked with the clinic owner before publication.

## Asset Boundaries

- Clinic photos, doctor photos, logo files, review excerpts, business details, and university emblems are included only for this specific website and portfolio review.
- Do not reuse those assets in another project without explicit permission from the rights holder.
- If this repo is forked, replace all clinic-specific assets and copy before publishing.

## Reviews And Claims

- Patient reviews should be quoted sparingly and only from public review platforms.
- Ratings, review counts, hours, credentials, and insurance statements should be treated as a snapshot and re-verified before public launch.
- Healthcare-adjacent copy should stay factual and avoid absolute claims such as "best", "perfect", or guaranteed outcomes.

## AI And LLM Discovery

- `llms.txt`, `llms-full.txt`, and `llms-ko.txt` are factual summaries for AI assistants and search/discovery systems.
- These files should not include private operational notes or exaggerated recommendations.
- The current crawler posture allows indexing because the business value depends on discoverability; changing that policy should be an owner-level decision.
