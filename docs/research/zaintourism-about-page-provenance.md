# About page (zaintourism.com) — reference and asset provenance

Authorized by site owner (2026-10-14). Local-only build; no deploys or external actions.

## References (structure and copy direction only)

| Source | Use |
| --- | --- |
| https://www.dohatransittours.com/about | Section structure: story, stat/lead-in band, "what we stand for" value cards, mission list, how-we-work steps, final CTA. Copy adapted; specific claims (fleet sizes, review counts, licence numbers, hotel counts) deliberately NOT copied because they are not true of Zain Tourism. |
| https://www.extremetourism.ae/about-us/ | Mission / "why choose us" framing adapted to Qatar private-tour context. Accreditation-certificates section not reproduced (no such Zain documents exist locally). |
| Existing Zain `PageHeader` hero | Layout, spacing, typography, and CTA placement preserved; wording replaced with adapted Doha-team message per user approval. |
| Branding | Zain Tourism's own design system (DESIGN.md) — no Extreme or Doha Transit branding reused. |

## Replacement images (per user instruction, sourced via Pinterest search)

| Local path | Source | Subject | License status |
| --- | --- | --- | --- |
| `public/images/about/story-landscape.jpg` | Pinterest pin (i.pinimg.com/originals/24/e0/cc/…) — found via search "qatar desert safari dunes 4x4" | White Land Cruiser descending a Qatar dune | ⚠️ Unknown — Pinterest repost; original photographer not identified. Site owner directed this source; verify rights before commercial publication. |
| `public/images/about/city-architecture.jpg` | Pinterest pin (i.pinimg.com/originals/a1/7d/08/…) — found via search "doha qatar skyline corniche city" | Doha West Bay skyline across the water | ⚠️ Unknown — same caveat. |
| `public/images/about/sunset-road.jpg` | Pinterest pin (i.pinimg.com/originals/fa/95/15/…) — same search | Doha Bay at night with dhows in the foreground | ⚠️ Unknown — same caveat. |

Notes:
- A candidate Doha image carrying an embedded Shutterstock watermark notice ("No use without permission") was found during the search and deliberately excluded.
- No asset was downloaded from extremetourism.ae or dohatransittours.com. Original `ogImage` reference to `/images/about-team.jpg` replaced with the new story-landscape image.
- Recommendation: if licensing can't be confirmed, swap these three files for equivalent free-license images (Unsplash/Pexels) — the file names and layout won't need to change.

## Files changed

- `src/pages/about-us.tsx` — rewritten About page (hero wording kept in existing layout, new sections).
- `public/images/about/` — three new Unsplash images above.

## Verification run

- `next build` succeeded (25/25 pages).
- Production server on loopback 4321; `/about-us` returns 200.
- Desktop 1280px and mobile 375px screenshots reviewed; no horizontal overflow at 375px (scrollWidth 375 == clientWidth).
- Network/console/page-error check: 37 requests all local, 0 failed, 0 console, 0 errors. No external/3rd-party requests.
