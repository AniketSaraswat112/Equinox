# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Development server with live reload (HMR) at http://localhost:3000
npm run dev

# Type-check without emitting
npm run lint

# Production build (Vite frontend + esbuild server bundle)
npm run build

# Run the production build
npm start
```

> Set `GEMINI_API_KEY` in a `.env` file (copy `.env.example`) before running.

## Architecture

This is a **full-stack TypeScript SPA** for the Equinox & Co. LLP law firm website. There is no test suite.

### Server (`server.ts`)
An Express server that:
- Mounts Vite as middleware in development (HMR enabled) and serves `dist/` in production
- Exposes two AI-powered API endpoints backed by Google Gemini (`gemini-3.5-flash`):
  - `POST /api/gemini/analyze` — GeM/Procurement dispute analyzer; returns a structured JSON report with fields: `summary`, `strengths`, `legislativeGrounds`, `rebuttals`, `actionSteps`, `notes`
  - `POST /api/gemini/enquiry` — Client intake brief generator; returns a Markdown internal brief for the advocate

### Frontend (`src/`)
A single-page React 19 app. Navigation is **tab-based state** managed in `App.tsx` via `activeTab` — there is no React Router. The active tab value determines which full-page component renders inside an `AnimatePresence`/`motion.div` wrapper (from `motion/react`).

| Tab value | Component |
|---|---|
| `"home"` | Inline JSX in `App.tsx` (Hero, About, Insights, Endorsements, Case History) |
| `"home"` + `selectedArticle` | `ArticlePage` |
| `"partners"` | `PartnersPage` |
| `"engage"` | `EngagePage` → `EnquiryForm` |
| `"practice"` | `PracticePage` |
| `"industries"` | `IndustriesPage` |

`DisputeAnalyzer` is a standalone interactive tool rendered inside `PracticePage` (or a dedicated section) that calls `/api/gemini/analyze`.

### Data & Types (`src/data.ts`, `src/types.ts`)
All static content — practice pillars, GeM spotlight items, recent matters, and article insights — lives in `src/data.ts` as exported constants. TypeScript interfaces for all data shapes are in `src/types.ts`. Updating site content means editing `data.ts`; no CMS is involved.

### Styling
Tailwind CSS v4 via the `@tailwindcss/vite` plugin. Custom design tokens (colors like `ink`, `cream`, `burgundy`, `gold`, `gold-soft`) and font utilities (`font-display`, `font-serif`, `font-mono`) are defined in `src/index.css`. The visual identity is a dark-ink / cream / burgundy / gold palette with an editorial, prestige-law aesthetic.

### Environment
| Variable | Purpose |
|---|---|
| `GEMINI_API_KEY` | Required for both AI endpoints |
| `APP_URL` | Hosting URL (injected by Google AI Studio at runtime) |
| `DISABLE_HMR` | Set `true` to disable Vite HMR and file watching (used by AI Studio agent edits) |
