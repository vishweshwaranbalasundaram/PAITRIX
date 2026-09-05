# PAYTRIX — Web Prototype

A real Next.js 14 + React + React Three Fiber build of the PAYTRIX hero and
core storytelling sections, with genuine scroll-linked animation (no fake
Framer/GSAP decoration — the 3D core object's rotation, tilt and depth are
driven directly by `window.scrollY` every frame, and the Safety Kernel chain
lights up as a continuous function of scroll position through that section).

## What's real vs. what's a placeholder

This is the **frontend shell only** — it has no backend. All numbers (wallet
balance, prices, trace IDs, the PrNE receipt) are static demo content, not
live data. Per the PAYTRIX master spec, none of this should ever be wired to
show fake payment success — when you connect a real backend, replace the
static content in each component with actual API responses.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling, with PAYTRIX's design tokens in `tailwind.config.ts`
- **@react-three/fiber** + **three.js** for the hero's 3D "Core" object
- **Satoshi** (Fontshare, self-hosted via `@font-face` in `app/globals.css`) for display headlines and body copy
- **IBM Plex Mono** (`next/font/google`) for technical/data labels (trace IDs, amounts, statuses)

### A note on the Satoshi font files

The `@font-face` rules point at Fontshare's CDN (`cdn.fontshare.com`), matching
what the actual Razorpay Buildathon page uses. Two things to know:
- These are protocol-relative URLs (`//cdn.fontshare.com/...`) with signed,
  possibly time-limited tokens in the path — if they ever 404, get fresh
  ones from [fontshare.com/fonts/satoshi](https://www.fontshare.com/fonts/satoshi)
  (free, no signup) and swap the URLs in `globals.css`.
- Satoshi ships only weights 400 (regular), 500 (medium), and 700 (bold) —
  there's no 600. All headings use `font-bold` rather than `font-semibold`
  for this reason; don't reintroduce `font-semibold` on `font-display`/`font-body`
  text or the browser will synthesize a fake bold.
- For production, consider downloading the woff2 files and self-hosting them
  in `public/fonts/` via `next/font/local` instead of the CDN, so the site
  doesn't depend on Fontshare's uptime.


## How the scroll-linking works

- `lib/useScrollProgress.ts` exposes two hooks:
  - `useDocumentScrollProgress(px)` — a 0→1 progress value over the first
    `px` pixels of page scroll, used to drive the hero's 3D core (tilt,
    dolly-back, scale-down) in `components/CoreRings.tsx` via `useFrame`.
  - `useScrollProgress<T>()` — a 0→1 progress value for how far the viewport
    has scrolled through a specific element, used in `components/KernelSection.tsx`
    to light up each safety-check step continuously as you scroll past it.
- Both use **refs, not React state**, for the raw scroll value so the R3F
  render loop can read it every frame without triggering component re-renders.

## Structure

```
app/
  layout.tsx        Root layout, font loading
  page.tsx           Assembles all sections
  globals.css        Base styles, reduced-motion support
components/
  Nav.tsx
  Hero.tsx           R3F Canvas + scroll-linked hero copy
  CoreRings.tsx       The 3D "PAYTRIX Core" object (client-only)
  TabStrip.tsx
  GiantTitle.tsx
  PreviewStrip.tsx
  WalletSection.tsx   Agent Authority / wallet panel
  KernelSection.tsx   Scroll-linked Safety Kernel chain
  OutcomesSection.tsx Safe vs. blocked transaction comparison
  ProofSection.tsx    Proof of Non-Execution receipt
  FinalAndFooter.tsx
lib/
  useScrollProgress.ts
```

## Known items to address before shipping

- `npm audit` currently reports 2 high-severity advisories against Next.js
  14's bundled dependencies (server-side HTTP/PostCSS issues) that are only
  resolved by upgrading to Next 16 — a breaking migration not done here to
  keep the App Router API stable for this prototype. Run `npm audit` and
  plan that upgrade before a production deploy.
- Only the hero + one storytelling flow from the full PAYTRIX spec are built.
  Conversational shopping, the Transaction Universe, Failure Lab, and the
  Immutable Ledger view are not yet implemented.
- No backend integration — see "What's real vs. what's a placeholder" above.
- 3D is not yet capability-gated for low-power/mobile devices (spec section
  29/79) — add a device check and a 2D fallback before relying on this for
  a live demo on unknown hardware.
