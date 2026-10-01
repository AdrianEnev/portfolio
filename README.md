# Adrian Enev's Portfolios

This repository contains both portfolio projects:

| Project | Source | Stack |
| --- | --- | --- |
| `portfolio` | [`portfolio/`](portfolio/README.md) | Static HTML, CSS and JavaScript |
| `portfolio-old` | [`portfolio-old/`](portfolio-old/README.md) | React, TypeScript and Vite |

## Preview the current portfolio

From the repository root:

```sh
python3 -m http.server 4173 --directory portfolio/dist
```

Open [http://localhost:4173](http://localhost:4173). The current portfolio's `dist/` folder contains its authored source, images and ten individual business websites. No installation or build step is required.

## Preview the old portfolio

```sh
cd portfolio-old
npm ci
npm run dev
```

To build the old portfolio, run `npm run build` from `portfolio-old/`.

## Deployment paths

For the current static portfolio, serve `portfolio/dist` as the web root. For the old React portfolio, use `portfolio-old` as the build base, `npm run build` as the build command, `dist` as the publish directory and `netlify/functions` as the functions directory relative to that base.

Each project includes its own README, assets and configuration. The current project's older review documents use its previous local folder name, `portfolio-reimagined`.
