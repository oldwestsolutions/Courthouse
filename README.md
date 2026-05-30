# courthouse.legal

The public homepage for **Courthouse** — a structured legal intake and attorney attention-allocation marketplace. Clients submit legal issues through a guided intake flow; verified attorneys subscribe to a feed of pre-structured case opportunities.

This repository serves **two domains** from a single Next.js deployment:

| Domain | Purpose |
|---|---|
| [courthouse.legal](https://courthouse.legal) | Public legal intake marketplace |
| [courthouse.it.com](https://courthouse.it.com) | Internal IT service desk & support portal |

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — design system via CSS custom properties in `app/globals.css`
- **Framer Motion** — animations and scroll reveals
- **@vercel/analytics** — page analytics on Vercel
- **Playfair Display** + **DM Sans** via `next/font`

## Getting started

```bash
npm install
npm run dev
```

- **Legal site:** [http://localhost:3000](http://localhost:3000)
- **IT portal (local):** [http://localhost:3000/it](http://localhost:3000/it)

In production, `middleware.ts` routes each domain automatically — `courthouse.it.com` serves the IT portal at `/`, and visiting `/it` on `courthouse.legal` redirects to the IT domain.

## Project structure

```
app/
  layout.tsx              # Root layout — fonts, analytics, legal metadata
  page.tsx                # courthouse.legal homepage
  it/
    layout.tsx            # courthouse.it.com metadata
    page.tsx              # IT support portal homepage
middleware.ts             # Host-based domain routing
components/
  courthouse/             # Legal site sections
  courthouse-it/          # IT portal sections
lib/
  domains.ts              # Domain constants & host detection
  courthouse-data.ts      # Legal copy & mock data
  courthouse-it-data.ts   # IT copy & mock data
  animations.ts           # Shared Framer Motion variants
types/
  courthouse.ts           # Legal TypeScript interfaces
  courthouse-it.ts        # IT TypeScript interfaces
```

## Vercel deployment

1. Connect this repo to a Vercel project.
2. Add both domains in **Project Settings → Domains:**
   - `courthouse.legal`
   - `courthouse.it.com`
3. Deploy — middleware handles routing with no extra configuration.

## Disclaimer

Courthouse is a structured legal intake and attorney matching system. It does not provide legal advice and does not create attorney-client relationships.
