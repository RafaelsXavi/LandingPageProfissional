# PRD — Xavier Tech & Dev Landing Page

## Original Problem Statement
High-converting, modern dark-mode landing page for "Xavier Tech & Dev", a bespoke software development and AI automation agency (pt-BR). Linear/Vercel-inspired aesthetic: #0B0F17 background, #111827 cards, #1F2937 borders, #2563EB electric-blue CTAs with glow, #10B981 emerald live badges. Sections: navbar, hero (badge, H1, sub, CTAs, trust badges, dashboard mockup + WhatsApp AI widget), problems (3 cards), services grid (4 glassmorphic cards), comparison table, security/trust, 4-step process, pricing card (from R$ 5.000 + bonus badge), FAQ accordion (5 items), final CTA + footer, sticky WhatsApp floating button. Award-level motion: masked line-by-line hero reveal, framer-motion scroll reveals, lenis smooth scroll, editorial marquee, subtle parallax/particle hero.

## User Personas
- Brazilian SMB owner (non-technical) losing leads to slow WhatsApp service, drowning in manual spreadsheets, frustrated with generic SaaS subscriptions.
- Operations manager evaluating custom software vs off-the-shelf tools.

## Architecture
- Frontend: Vite + React 19 + TS + Tailwind 4, `motion` (framer-motion), `lenis`, lucide-react, sonner. Components in `src/components/landing/`.
- Backend: FastAPI (`server.py`) + MongoDB (motor). `POST /api/leads` + `GET /api/leads` for diagnostic lead capture.
- WhatsApp links use placeholder number wa.me/5511999999999 (user to replace in `src/lib/site.ts`).

## Implemented (2026-09-04)
- Full landing page with all 10 requested sections in pt-BR
- Kinetic masked line-by-line hero headline reveal, particle-node canvas hero background with mouse interaction, parallax on scroll
- Animated dashboard mockup: live counters, bar chart, simulated WhatsApp AI chat with typing indicator, pulsating "IA Ativa 24/7" badge
- Slow editorial marquee, numbered manifesto chapters (01–07), spotlight-hover glassmorphic solution cards
- Comparison table (generic vs Xavier), security section, 4-step timeline, pricing card with bonus badge
- FAQ accordion (5 items, animated), lead capture form wired to backend with success state + toast
- Floating WhatsApp button with breathing pulse, sticky glass navbar with mobile menu, Lenis momentum scroll with anchor support

## Verified
- POST/GET /api/leads via curl (lead persisted and listed)
- UI e2e: form fill → submit → success state + toast; FAQ open/close; all sections screenshotted

## Backlog
- P0: Replace placeholder WhatsApp number with the real one
- P1: Admin view/page to list captured leads (GET /api/leads already exists)
- P1: Email notification on new lead (e.g. Resend)
- P2: Google Analytics / Meta Pixel, SEO OG image, real client logos/testimonials section
