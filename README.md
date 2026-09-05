# PAYTRIX — Web Prototype

## What this is

A real Next.js 14 + React + TypeScript build of the PAYTRIX site with a
**Razorpay-style, full-screen, section-by-section scroll experience** —
each major section is one full viewport, and the browser snaps to the
next one as you scroll or trackpad-swipe. This is done with native CSS
`scroll-snap` (`scroll-snap-type: y mandatory` on `<html>`, `snap-start`
on each section) — no 3D, no scroll-hijacking JS library, no
React Three Fiber. It's the same robust technique many production sites
use for this effect, works with mouse wheel/trackpad/touch out of the box,
and degrades gracefully (respects `prefers-reduced-motion` by disabling
the forced snap).

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
- **Tailwind CSS** for styling and its built-in scroll-snap utilities (`snap-y`, `snap-start`, etc.)
- **Satoshi** (Fontshare, self-hosted via `@font-face` in `app/globals.css`) for display headlines and body copy
- **IBM Plex Mono** (`next/font/google`) for technical/data labels (trace IDs, amounts, statuses)
- No 3D library, no animation library — plain CSS + one small `IntersectionObserver` for the Safety Kernel chain's fade-in

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


## How the scroll-snap works

- `app/globals.css` sets `scroll-snap-type: y mandatory` on `<html>`, and
  turns it off entirely under `prefers-reduced-motion: reduce`.
- Each full-screen section (`Hero`, `IntroSlide`, `WalletSection`,
  `KernelSection`, `OutcomesSection`, `ProofSection`, `FinalAndFooter`) has
  `min-h-screen snap-start` — the browser snaps its top edge to the
  viewport top as you scroll.
- `Nav` is `fixed` at a locked `h-16` (64px). `TabStrip` is `sticky top-16`
  — it is **not** one of the snap slides, so it doesn't interrupt the
  section-by-section snapping; it just stays pinned under the nav as the
  slides scroll past beneath it, the same way the Razorpay page's tab bar
  behaves.
- The Safety Kernel chain (`KernelSection.tsx`) still uses a standard
  one-time `IntersectionObserver` to fade its 8 steps in with a stagger
  when the section comes into view — the ordinary pattern most sites use,
  not a continuous scroll-linked animation.

## Structure

```
app/
  layout.tsx        Root layout, font loading
  page.tsx           Assembles the slide sequence
  globals.css        Base styles, scroll-snap, Satoshi @font-face, reduced-motion
components/
  Nav.tsx             Fixed top nav
  TabStrip.tsx        Sticky section tabs (not a slide)
  Hero.tsx            Slide 1 — CSS/SVG hero, no 3D
  IntroSlide.tsx      Slide 2 — giant title + preview tiles
  WalletSection.tsx   Slide 3 (#shop) — Agent Authority / wallet panel
  KernelSection.tsx   Slide 4 (#kernel) — Safety Kernel chain, fade-in on view
  OutcomesSection.tsx Slide 5 (#outcomes) — Safe vs. blocked comparison
  ProofSection.tsx    Slide 6 (#proof) — Proof of Non-Execution receipt
  FinalAndFooter.tsx  Slide 7 — Final CTA + footer
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
- On mobile, `snap-y mandatory` can feel a little abrupt on very short
  viewports (e.g. landscape phones) if a section's content is taller than
  the screen — worth testing on real devices and switching mandatory to
  `snap-y proximity` if it feels too aggressive there.
