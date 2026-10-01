# Photography review

Completed 30 September 2026. All implementation changes are inside `portfolio-reimagined`.

## Result

Reviewed all 17 portfolio projects and the portfolio's own assets. Replaced selected weak scenes in seven business sites with 16 licensed source photographs, delivered as 32 local responsive WebP files. The files total 3.75 MiB. The largest variant is 339776 bytes.

The complete per-project decisions, original URLs, creators and licenses are in [IMAGE_SOURCES.md](IMAGE_SOURCES.md) and [image-sources.json](image-sources.json). Visitors can also use the photography credits link in each affected site's footer.

Photos illustrate the independent business concepts; they do not claim to depict the fictional businesses' actual properties, meals or teams. The Sofia panorama is authentic city photography. Fitting brand artwork, icons, product illustrations, diagrams and interface visuals were retained.

## Browser verification

Inspected all affected pages at 1440 × 1000 desktop and 390 × 844 phone viewports. Checked loading, image clarity, crop, text contrast and horizontal overflow. All seven sites passed. The public credits page also fits the phone viewport without overflow.

- First Whistle Academy: academy-life card; fixed an inherited cone triangle overlay and cropped the source to preserve the players and coach.
- Good Form Barbers: visit panel; selected an interior with a clear chair focal point at both sizes.
- The Sunday Table: story panel; preserved the legible handwritten caption.
- One More Plate: kitchen panel; hands and produce remain visible in both crops.
- Honest Grain: materials panel; the hand plane and timber remain clear.
- Good Neighbour Homes: Sofia hero, all six listing cards and all six desktop detail dialogs; also checked the hero, first card and dialog on mobile. Area filtering and reset still show the correct cards and photos. Removed stale browser cache references by versioning the changed script and shared photography stylesheet.
- Slow Morning House: hero, all three room cards and the house panel at both sizes. Room comparison controls still work.

The 25 saved screenshots in [review/photography](review/photography) show the final imagery in its surrounding page context. Examples:

| Project | Desktop | Phone |
| --- | --- | --- |
| First Whistle Academy | [Academy life](review/photography/first-whistle-desktop.jpg) | [Academy life](review/photography/first-whistle-mobile.jpg) |
| Good Form Barbers | [Visit](review/photography/good-form-desktop.jpg) | [Visit](review/photography/good-form-mobile.jpg) |
| The Sunday Table | [Story](review/photography/sunday-table-desktop.jpg) | [Story](review/photography/sunday-table-mobile.jpg) |
| One More Plate | [Kitchen](review/photography/one-more-plate-desktop.jpg) | [Kitchen](review/photography/one-more-plate-mobile.jpg) |
| Honest Grain | [Materials](review/photography/honest-grain-desktop.jpg) | [Materials](review/photography/honest-grain-mobile.jpg) |
| Good Neighbour Homes | [Hero](review/photography/good-neighbour-desktop.jpg) · [Listings](review/photography/good-neighbour-listings-desktop.jpg) · [Second row](review/photography/good-neighbour-listings-two-desktop.jpg) · [Dialog](review/photography/good-neighbour-dialog-desktop.jpg) | [Hero](review/photography/good-neighbour-mobile.jpg) · [Listing](review/photography/good-neighbour-listings-mobile.jpg) · [Dialog](review/photography/good-neighbour-dialog-mobile.jpg) |
| Slow Morning House | [Hero](review/photography/slow-morning-desktop.jpg) · [Rooms](review/photography/slow-morning-rooms-desktop.jpg) · [House](review/photography/slow-morning-house-desktop.jpg) | [Hero](review/photography/slow-morning-mobile.jpg) · [Nest](review/photography/slow-morning-rooms-mobile.jpg) · [Garden](review/photography/slow-morning-garden-mobile.jpg) · [Loft](review/photography/slow-morning-loft-mobile.jpg) · [House](review/photography/slow-morning-house-mobile.jpg) |

## Checks

- All 13 HTML pages: local links and image paths, unique IDs and photography metadata passed.
- All 11 JavaScript files passed `node --check`; Python scripts passed syntax parsing.
- All 32 WebP variants have exact intrinsic dimensions matching the source registry and native image markup.
- Photography uses local paths, responsive `srcset`/`sizes`, explicit dimensions, accurate alt text and existing fixed/aspect-ratio frames.
- Metadata/credits generation is idempotent.
- `git diff --check` passed.

This repository authors static files directly in `dist/`; it has no configured package build, test or lint commands. Verification used its actual HTML, JavaScript, Python, local assets and browser behavior. This review was initially completed locally. Production publishing is recorded below.


## Initial production deployment

Published on 30 September 2026 at 18:03:29 UTC after explicit user approval.

- Production: https://adrianenev.com
- Netlify site: `d218d67c-7ca5-4a45-af2f-cd89ea4b1bae`
- Deployment: `6abd4ee9879b5528bc913459`
- Deployment log: https://app.netlify.com/projects/adrian-enev-reimagined-2026/deploys/6abd4ee9879b5528bc913459
- Published the reviewed `portfolio-reimagined/dist` directory, including all 32 WebP assets and the seven updated site implementations.
- Netlify's deployment API confirms state `ready`, the production URL and publication timestamp, with no error message.
- Production browser verification was blocked by browser permissions. Live page/asset hash checks were stopped; they are not claimed as passed. The completed local visual, interaction and asset checks above remain the QA evidence.

## Latest production deployment

Published all latest changes on 30 September 2026 at 19:20:28 UTC after the user explicitly requested upload to adrianenev.com. This includes the three structural redesigns, updated previews, revised project order and all 32 existing WebP assets.

- Production: [adrianenev.com](https://adrianenev.com)
- Deployment: `6abd60f96cf82158e76022b5`
- [Deployment log](https://app.netlify.com/projects/adrian-enev-reimagined-2026/deploys/6abd60f96cf82158e76022b5)
- Netlify's deployment API confirms `ready` in the production context, with no error. Its site API confirms this ID is the currently published deployment for `adrianenev.com`.
- Source verification passed for all 13 HTML pages, local asset/fragment links, project ordering and all 11 JavaScript syntax checks. All 32 photographic variants match registered file sizes and WebP signatures.
- Browser verification of the latest redesigns and production remains unavailable due to the existing permission restriction; it is not claimed as passed.
