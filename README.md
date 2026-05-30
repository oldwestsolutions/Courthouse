# courthouse.legal

The public homepage for **Courthouse** — a structured legal intake and attorney attention-allocation marketplace. Clients submit legal issues through a guided intake flow that turns vague legal anxiety into classified, jurisdiction-tagged, urgency-scored case intelligence; verified attorneys subscribe to a feed of pre-structured case opportunities.

The design language blends the gravity of a federal courthouse, the institutional restraint of private-bank software, the spacing and micro-interaction quality of Stripe, and the terminal intelligence of a Bloomberg data feed.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with the full design system defined as CSS custom properties in `app/globals.css`
- **Framer Motion** for all animation and scroll reveals
- **next/font** loading **Playfair Display** (headings) and **DM Sans** (body/UI)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint
```

## Project structure

```
app/
  layout.tsx                # fonts, metadata, viewport, globals import
  page.tsx                  # composes all sections in order
  globals.css               # design tokens, noise texture, base typography
components/courthouse/
  Navigation.tsx            # fixed nav + mobile drawer
  Hero.tsx                  # split hero + live intake form card
  IntakeProcessingOverlay.tsx  # terminal-style "analyze my case" sequence
  HowItWorks.tsx            # three-stage protocol
  WhyCourthouse.tsx         # 2x2 advantage grid
  CaseFeed.tsx              # Bloomberg-style live case intelligence feed
  ForAttorneys.tsx          # enterprise SaaS pitch + feature list
  ComplianceStrip.tsx       # institutional disclaimer strip
  Footer.tsx                # four-column footer
lib/
  animations.ts             # shared Framer Motion variants
  courthouse-data.ts        # all copy, mock cases, attorneys, stats
types/
  courthouse.ts             # Case, Attorney, UrgencyLevel, PracticeArea, etc.
```

## Design system

All colors are referenced exclusively through CSS variables on `:root` (navy scale, gold accents, ivory paper background, urgency colors). A near-imperceptible SVG noise texture is layered on every section via the `.ch-section` utility to give the page the weight of institutional paper.

## Disclaimer

Courthouse is a structured legal intake and attorney matching system. It does not provide legal advice and does not create attorney-client relationships.
