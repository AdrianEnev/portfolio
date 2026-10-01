# Design differentiation review

30 September 2026. Changes are confined to `portfolio-reimagined`.

## What repeated

The source comparison found more variation in colours, typefaces and illustration than in page composition. Common patterns included a large split headline/art opening, small numbered section bars, evenly padded chapters, three-column cards, large closing calls to action and a choices panel beside a result panel. Different brand names were often riding the same page rhythm.

The seven sites with selected photography already have useful domain-specific character. This pass preserves them and changes the three business sites without photography through structure and content hierarchy. It retains their purpose-built artwork and controls. No unrelated stock photography or new fictional business claims were added.

## Project decisions

| Project | Decision | Reason / resulting design |
| --- | --- | --- |
| First Whistle Academy | Retain | Tactical pitch, age-group selector, kit checklist and training photography make its sports identity recognisable. |
| Good Form Barbers | Retain | Service rails, staff roster, appointment planning, aftercare and the shop interior support a coherent grooming experience. |
| Root Ritual | Redesign | Replaced the split hero and story-first chapters with a centred bottle campaign, open product collection first, compact preference matcher and botanical ingredient notebook. Fine serif typography, generous whitespace and softer controls give it a beauty-boutique rhythm. |
| The Sunday Table | Retain | Printed menu rows, pickup basket, table-planning controls, gingham and shared-food photography give it a restaurant identity. |
| Kindred Vet | Redesign | Replaced the large illustrated marketing opener with a compact care-planning portal. Pet/reason choices are prominent immediately; supporting service panels, a care index, quiet guidance and a private visit notebook carry the experience. |
| Good Neighbour Homes | Retain | Sofia imagery, distinct properties, filters, list/map views, saved homes and comparison make its property-search purpose clear. |
| Small Hours Theatre | Redesign | Its earlier stage illustration had character, but its chapter rhythm still overlapped the collection. The new opening is a large playbill masthead, dated production rail and dominant selected-show poster. Production information leads into a perforated seating ticket; stage artwork becomes a smaller theatre-space interlude. |
| Slow Morning House | Retain | The centred hotel postcard, arched room photography, stay planner and room comparison already provide a distinct hospitality composition. |
| Honest Grain | Retain | Measured furniture specimens, workshop imagery, live configuration sketch and copyable brief form a recognisable workshop/specification surface. |
| One More Plate | Retain | Screenprint colour, taped notices, meal views, food preparation and role/day planning already fit community participation. |
| InfraLock | Retain technical case study | Its product is a backend lookup system. The shared portfolio frame should remain consistent; unrelated marketing UI would invent project evidence. |
| Livepair | Retain software case study | Broadcasting and viewer workflows are described in the existing entry. This pass does not invent screens for a separately linked application. |
| Lunge | Retain mobile case study | The entry describes planning, logging and progress. Authentic mobile evidence would be a separate asset task. |
| Adrian Cuts | Retain earlier website case study | The earlier responsive implementation remains documented; this pass does not redesign its separately linked application. |
| The Original Portfolio | Retain historical case study | The entry explains the earlier portfolio and its development. A common case-study wrapper helps comparison. |
| Algorithmic Research | Retain research case study | The project describes data, backtesting and assumptions. Invented results or decorative dashboards would misrepresent its evidence. |
| Interface Interaction Study | Retain | Its working type/rhythm/motion states already demonstrate inspectable interface variation. |

## Implementation

- Restructured Root Ritual, Kindred Vet and Small Hours HTML and replaced their identity styles. Mobile navigation keeps accurate state and supports Escape and desktop resize.
- Preserved product/routine matching, veterinary guidance and private-note download, theatre production/date selection, production notes, all 32 seats and price totals.
- Preserved notices about illustrative business data and local-only workflows, as well as the portfolio case-study links.
- Updated the three catalogue previews and the homepage's Root Ritual preview with code-native SVG assets reflecting the new compositions. They are labelled vector illustrations, not screenshots.
- Added explicit preview dimensions, decorative accessibility treatment, responsive sizing and reduced-motion handling.
- Updated the case-study descriptions and `SITE_PLAN.md`; the copy renderer supports `data-portfolio-hero` so regeneration preserves the new structures.
- Existing licensed photography and its credits remain unchanged.

## Verification and publication

The homepage and catalogue now start with Slow Morning House and Good Neighbour Homes. The catalogue alternates groups of two photographic websites with Root Ritual, Kindred Vet and Small Hours Theatre at positions 3, 6 and 9; First Whistle Academy closes the collection. The canonical copy source retains this order on regeneration. Source order, case-study links and unchanged microsite assets were checked; repeat regeneration produces identical public files.

Native source checks pass: resolved local links and fragment anchors, unique IDs, correct ARIA targets, balanced HTML nesting, JavaScript selector targets, all 11 JavaScript syntax checks, Python syntax, valid SVG XML, retained image file sizes, responsive breakpoint contracts and `git diff --check`.

The agents also exercised the veterinary guidance/note logic and theatre state transitions in browser-free JavaScript harnesses. These establish state behavior, not rendered layout quality. A tablet cascade issue in Root Ritual's third product card was found and corrected.

Browser permissions explicitly denied access to `http://127.0.0.1:4173`. No alternate browser or rendering workaround was attempted. Desktop/mobile rendering, cropping, keyboard interaction in a real browser and the final visual comparison remain unverified. Browser access was requested from the user.

The user subsequently explicitly requested publication of all latest changes. Published the complete current `dist/` on 30 September 2026 at 19:20:28 UTC to [adrianenev.com](https://adrianenev.com), including the three redesigns, updated previews, new homepage/catalogue order and all photography. Deployment [`6abd60f96cf82158e76022b5`](https://app.netlify.com/projects/adrian-enev-reimagined-2026/deploys/6abd60f96cf82158e76022b5) is confirmed by both the deployment API (`ready`, `production`, no error) and the site API as the site's current published deployment.

Once browser access is available, check the three redesigned sites at 1440, 1024, 768, 390 and 320px. Check product selection and matching, pet/reason guidance, note creation/edit/download, all three shows, seat totals/reset, menus/keyboard focus, FAQs and the portfolio preview sizes. These rendered checks are outstanding; publication does not establish that they passed.
