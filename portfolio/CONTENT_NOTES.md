# Content map and editorial notes

This redesign draws from the neighboring portfolio checkout as it stood on 26 September 2026. The original files remain untouched.

| New section | Source content |
| --- | --- |
| Hero and About | `src/routes/Home.tsx`, `src/components/About/BentoIntro.tsx`, `src/components/About/JourneyTimeline.tsx` |
| Selected work | `src/data/projects.ts`, `src/components/Projects/ProjectRoadmap.tsx` |
| Experiments and earlier work | `src/components/Projects/{CryptoTradingSystem,InfraLock,Livepair,Lunge,AdrianCuts,Portfolio,ProjectRoadmap}.tsx` |
| Toolkit | `src/components/About/TechStackGrid.tsx` |
| Recognition | `src/components/Achievements/TrophyHall.tsx` and the Cambridge exam PDF |
| Contact | `src/components/Contact/ConnectPortal.tsx` |

## Editorial choices

- The active contact page uses **enevbuis@gmail.com**. The old README lists a different address, so the redesign follows the current contact page.
- The ten business websites are independent frontend builds. Their company categories, audiences, commercial purpose and working browser workflows are explicit; operating business data remains illustrative.
- Earlier software work appears under **Applications & technical systems**, with individual product goals, roles and outcomes. These items do not inherit client attribution from the ten business builds.
- The 2025 HSSI award is described as an Excellent Performance certificate and medal. The old wording also calls it equivalent to first place; the redesign avoids that ambiguous claim.
- The Cambridge English result is linked to the statement already in the source portfolio.
- The old contact form depends on a Netlify function. This standalone redesign uses a direct email link so the contact action works on static hosting.

The visual approach draws on the linked video’s goal-driven hierarchy, bold typography, mouse-reactive introduction, and scroll motion, but uses its own layout, content order, colors, and project treatment.


## 30 September 2026 editorial audit

All auditing and edits for this pass took place in `portfolio-reimagined`. The local business HTML, JavaScript, styles and identity files support the delivered workflow descriptions. Earlier software claims use this checkout’s existing summaries; external repositories were not inspected. The historical source map above records the redesign’s origin.

The complete report is [PORTFOLIO_AUDIT.md](PORTFOLIO_AUDIT.md). Canonical card text is shared between homepage and catalog through `portfolio-copy.json`. Each public case study includes company/product, customer, problem, offering and operating model, goal, role, work, solution and outcome. Necessary missing facts stay in the report rather than public-facing copy.

Independent provenance remains visible, sample-data qualifications stay beside planning controls, and outcomes describe implemented capabilities rather than unmeasured business impact. The 2018–22 journey wording now describes programming foundations rather than conflicting with the recorded 2026 graduation.
