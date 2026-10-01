# Independent website collection

Each site lives in `dist/sites/<slug>/` with its own HTML, CSS, JavaScript, and eventual assets. The portfolio catalog remains at `/projects.html`; sites use relative internal paths so a future Netlify host rewrite can serve any one of them from a dedicated subdomain. The routes are usable without configuring DNS.

The current sites are responsive front-end builds with business-specific content and useful local interactions. Persistent accounts, bookings, payments, inventory, and staff tools belong to later development phases and must not be implied by a demo control.

| Brand | Route | Design direction | Current browser workflows | Full-stack development path |
| --- | --- | --- | --- | --- |
| Slow Morning House | `/sites/slow-morning/` | Centered hotel postcard, airy Fraunces typography, soft blue architectural arches and framed stay planner | Compare room details and sample stay totals, including breakfast | Room inventory, date pricing, reservations, guest requests |
| Good Neighbour Homes | `/sites/good-neighbour/` | Clear Manrope wayfinding, blue and white property portal, prominent search tools and rounded listing cards | Filter illustrative listings, save homes, use map view, and compare a shortlist | Listing CMS, geosearch, saved alerts, viewing pipeline |
| Root Ritual | `/sites/root-ritual/` | Centred boutique campaign, collection-first product gallery, fine botanical typography and an ingredient notebook | Explore three oils and match a hair-care routine to a product | Catalogue, cart, subscriptions, inventory, editorial CMS |
| The Sunday Table | `/sites/sunday-table/` | Sturdy bistro typography, tomato red, gingham details and printed menu rows | Filter a seasonal menu, build a local pickup basket, and explore a table-for-two plan | Menu CMS, table capacity, timed orders, kitchen queue |
| Good Form Barbers | `/sites/good-form/` | Charcoal shop canvas, geometric Space Grotesk type, rose accents, precise service rails | Explore service prices, choose barber and sample slot, and read style-specific aftercare | Staff calendars, deposits, cancellation rules, reminders |
| Kindred Vet | `/sites/kindred-vet/` | Compact care-planning portal, side index, rounded warm panels, a private notebook and supporting pet illustrations | Choose a visit reason and prepare a private, downloadable visit note | Pet profiles, appointment requests, staff roles, reminders |
| Honest Grain | `/sites/honest-grain/` | Measured furniture specimen sheets, walnut material studies, upright Newsreader and monospaced specifications | Explore furniture specifications, configure a piece, and copy a design brief | Product options, quote logic, file uploads, order tracking |
| One More Plate | `/sites/one-more-plate/` | Community screenprint and taped noticeboard composition, Archivo Black display, cobalt, marigold and coral | Explore a sample meal menu and build a local volunteer-shift plan | Shift capacity, volunteer roles, events, donations |
| Small Hours Theatre | `/sites/small-hours/` | Programme-first typographic playbill, horizontal production-date rail, dominant poster and perforated seating ticket | Select a performance date, review production notes, and preview seating | Show CMS, seat holds, checkout, ticket validation |
| First Whistle Academy | `/sites/first-whistle/` | Condensed athletic typography, tactical pitch diagrams, scoreboard graphics, navy and chartreuse | Compare age-group programmes and sample schedules; prepare with a first-session kit checklist | Trial slots, guardian/player accounts, enrolment, attendance, news |

The full-stack build order starts with First Whistle Academy's trial and enrolment flow, then continues through the remaining sites one by one. A site is marked as a live demo only when its stated primary workflow actually works. Independent frontend-build provenance stays visible on each site.

Previous project URLs redirect permanently to the current brand routes through `dist/_redirects`.
