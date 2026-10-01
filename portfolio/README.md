# Adrian Enev — portfolio

A standalone portfolio presenting ten business website builds, six earlier software projects and an interface study. Each case study explains the audience, product purpose, work and delivered scope. This project lives in `portfolio/`; the original React portfolio is in `portfolio-old/`. Older review documents use this project's previous local folder name, `portfolio-reimagined`.

## Local preview

Serve `dist/` with `python3 -m http.server 4173 --directory dist` from this folder.

The authored source is static HTML, CSS and JavaScript in `dist/`; no package installation or build step is required. Each business website lives in `dist/sites/<slug>/` with its own styles and interactions. Existing visual identities and browser workflows are preserved.

## Editorial source

[PORTFOLIO_AUDIT.md](PORTFOLIO_AUDIT.md) contains the full audit, individual project recommendations, necessary input flags, global consistency changes and ready-to-paste copy. `portfolio-copy.json` stores the shared copy. Run `python3 scripts/apply_portfolio_copy.py` to render it into the portfolio and regenerate the report.

The business-project order in `portfolio-copy.json` also controls the catalogue and the first three homepage cards. Slow Morning House and Good Neighbour Homes lead with photographic websites; Root Ritual, Kindred Vet and Small Hours Theatre are interspersed at positions 3, 6 and 9.

The ten business brands are represented through independent frontend work and illustrative business data. Delivered interactions run in the browser. Persistent bookings, orders, payments, accounts and staff operations are outside the current scope. Earlier software descriptions follow the existing portfolio summaries; their linked repositories were not audited. The contact action opens the visitor’s email app.

See [SITE_PLAN.md](SITE_PLAN.md) for routes, visual identities, current workflows and possible backend development paths.

Photography is selectively added to seven business previews. All 16 licensed source images are saved under `dist/assets/images/` as responsive WebP variants. `IMAGE_SOURCES.md` records the per-project decisions, original sources, creators and licenses; `image-sources.json` records dimensions, file sizes and crop details. Visitors can reach the same source credits from each affected site's footer. Run `python3 scripts/fetch_photography.py` to restore missing assets and `python3 scripts/apply_photography.py` to regenerate image metadata and credits. The photographic spaces and people illustrate the independent brand concepts.

[DESIGN_DIFFERENTIATION.md](DESIGN_DIFFERENTIATION.md) records the all-project similarity review and the structural redesign of Root Ritual, Kindred Vet and Small Hours. Their native vector previews are under `dist/assets/previews/`, with editable sources in `source-assets/design-previews/`. The redesigns, new display order and photography were published to `https://adrianenev.com` on 30 September 2026 at 19:20:28 UTC in deployment `6abd60f96cf82158e76022b5`. Netlify confirms it is the ready production deployment. Browser visual verification remains unavailable because preview permissions were denied.
