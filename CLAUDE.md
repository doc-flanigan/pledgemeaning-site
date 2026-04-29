# CLAUDE.md — pledgemeaning.com

## Project Overview
Definition funnel site for people searching "what is a pledge in Star Citizen"
or "what does pledge mean in gaming." Explains SC's unique pledge system (buying
ships = supporting development), then funnels to dayonecitizen.com and referral.

## Quick Reference
```
Referral code:  STAR-GCQJ-N6NC
Enlist URL:     https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
Hub:            https://dayonecitizen.com
Conventions:    E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md
```

## Agentic Build Instructions
Incremental agents. Confirm each before proceeding.

### Agent 1 — Scaffold
- Next.js 14, TypeScript, Tailwind CSS
- Color palette:
    midnight: '#0f1420'
    midnightMid: '#171e2e'
    amber: '#ff9c00'
    amberDark: '#cc7d00'
    cream: '#f5f0e8'
    muted: '#7a8099'
- 12 hero image placeholders
- Confirm dev server

### Agent 2 — Components
- HeroCarousel.tsx (12 slides)
- CTAButton.tsx: "Create Your Account — Get 50,000 UEC Free"
- SecondaryLink.tsx → o7citizen.com
- DefinitionCard.tsx: term + plain definition + example
- Footer.tsx

### Agent 3 — Homepage (/)
  - SEO: title="What Does Pledge Mean in Star Citizen? | pledgemeaning.com"
    description="In Star Citizen, a 'pledge' is a purchase from the RSI store
    that funds game development. Here's everything you need to know."
  - H1: "What Does 'Pledge' Mean in Star Citizen?"
  - Immediate above-fold answer
  - HeroCarousel
  - Sections:
    * "The Quick Answer" — pledge = purchase that funds development
    * "Pledge vs. Buy — What's the Difference?"
    * "What Can You Pledge For?" — ships, packages, gear
    * "Do You Need to Pledge to Play?" — starter packs, free fly
    * "What Is a Starter Package?" — recommended for new players
    * "The Referral Bonus" — use code to maximize first pledge value
    * CTAButton
    * Related terms → dayonecitizen.com/glossary
  - Footer
  Confirm renders.

### Agent 4 — Related Terms Pages
  - /what-is-uec: UEC definition + dayonecitizen.com link
  - /what-is-lti: LTI definition
  - /what-is-ccu: CCU definition
  Each: SEO optimized, CTAButton, internal links

### Agent 5 — SEO & Build
  - Sitemap, robots, OG meta, FAQPage schema
  - npm run build passes

## Color Palette
  --midnight: #0f1420
  --midnight-mid: #171e2e
  --amber: #ff9c00
  --amber-dark: #cc7d00
  --cream: #f5f0e8
  --muted: #7a8099

## Network Conventions
See `E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md` for footer spec,
tone rules, commit convention, tech stack, and agentic build pattern.
