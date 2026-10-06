# StrideFit

Fitness & wellness platform — diet tracking, workouts, cardio events, and
wellness tips in one free, beginner-friendly app. Web-first on
**stridefitapp.com**.

Stack: **Next.js 15 (App Router, TypeScript)** · **Tailwind CSS** ·
**Supabase (Postgres + Auth)** · **Vercel** hosting.

## What was scaffolded

**Marketing site (SEO-friendly, server-rendered)**
- `/` — homepage: hero, three pillars (nutrition / workouts / cardio), how-it-works, email capture
- `/calculators/tdee` — working TDEE calculator (Mifflin-St Jeor, metric/imperial)
- `/calculators/macros` — working macro calculator (balanced / high-protein / low-carb)
- `/calculators/pace` — working pace calculator (pace finder + finish-time predictor)
- `/privacy`, `/terms` — draft templates marked **for legal review**, with "not medical advice" disclaimers

**App (protected by middleware, requires login)**
- `/app` — dashboard: streaks, today's calories vs target, last workout/cardio
- `/app/nutrition` — food log with daily totals vs targets, editable targets
- `/app/workouts` — workout templates, freestyle/template workout logging (exercises → sets × reps × weight), history
- `/app/cardio` — manual activity log, **GPX/TCX file import** (client-side parsing of distance/duration, user confirms before saving), events (races/challenges)
- `/app/wellness` — wellness tips feed (static content for the MVP)

**Auth & data**
- `/login`, `/signup` — email/password + Google OAuth via Supabase Auth
- Signup includes a **required health-data consent checkbox**; consent is recorded on the profile
- `supabase/schema.sql` — all tables with Row Level Security: users can only read/write their own rows
- `middleware.ts` — refreshes the Supabase session and redirects unauthenticated users away from `/app/*`

No demo/seed user data is included — empty states guide new users instead.

## 1. Create a free Supabase project

1. Go to [supabase.com](https://supabase.com) → **Start your project** → create an account.
2. **New project** → name it `stridefit` → generate a database password (save it) → pick the region closest to you → **Create new project** (takes ~2 minutes).
3. In the project dashboard, go to **SQL Editor → New query**.
4. Paste the entire contents of `supabase/schema.sql` and click **Run**. You should see "Success. No rows returned."
5. Go to **Project Settings → API** and copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - ⚠️ Never use the `service_role` key in this app.

**Enable Google sign-in (optional but recommended):**
1. Supabase dashboard → **Authentication → Providers → Google** → enable.
2. Follow the linked Google Cloud Console steps to create OAuth credentials.
3. Add authorized redirect: `https://<your-project-ref>.supabase.co/auth/v1/callback`
4. Under **Authentication → URL Configuration**, set **Site URL** to your production URL (e.g. `https://stridefitapp.com`) once deployed; keep `http://localhost:3000` for local dev.

## 2. Environment setup

```bash
cp .env.example .env.local
```

Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from step 1.
`NEXT_PUBLIC_SITE_URL` is used for OAuth redirects — `http://localhost:3000` locally,
your production URL on Vercel.

## 3. Run locally

> `npm install` was intentionally **not** run during scaffolding. Run it once yourself:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Sign up for an account —
you'll be using your real Supabase project.

Other commands: `npm run build` (production build), `npm start` (serve it),
`npm run typecheck` (`tsc --noEmit`).

## 4. Deploy to Vercel

1. Push this folder to a GitHub repo (e.g. `stridefit`).
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No custom build settings needed.
4. Under **Environment Variables**, add the same three variables from `.env.local`
   (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_SITE_URL`
   set to your production URL).
5. **Deploy.** You'll get a `*.vercel.app` URL for staging.

## 5. Point stridefitapp.com at it (DNS)

1. In Vercel: project **Settings → Domains** → add `stridefitapp.com` and `www.stridefitapp.com`.
   Vercel will show the DNS records it expects (usually an `A` record for the apex
   and a `CNAME` for `www`).
2. At your domain registrar (wherever stridefitapp.com is registered):
   - Add the `A` record for `@` (apex) pointing at Vercel's IP (`76.76.21.21`).
   - Add the `CNAME` record for `www` pointing at `cname.vercel-dns.com`.
   - Remove any conflicting old `A`/`CNAME` records for `@`/`www`.
3. Wait for DNS propagation (minutes to a few hours). Vercel auto-provisions HTTPS.
4. Back in Supabase **Authentication → URL Configuration**, set **Site URL** to
   `https://stridefitapp.com` and add it to **Redirect URLs** so Google OAuth and
   email confirmations land on the right domain.

## Project structure

```
stridefit/
├── app/
│   ├── page.tsx                 # marketing homepage
│   ├── login/  signup/          # auth pages (consent checkbox on signup)
│   ├── calculators/tdee|macros|pace/
│   ├── privacy/  terms/          # legal drafts (needs attorney review)
│   ├── app/                     # protected app area
│   │   ├── page.tsx             # dashboard
│   │   ├── nutrition/ workouts/ cardio/ wellness/
│   │   └── layout.tsx           # auth check + AppNav
│   ├── layout.tsx  globals.css
├── components/
│   ├── Navbar.tsx  Footer.tsx  AppNav.tsx  EmailCapture.tsx
│   └── calculators/             # TdeeCalculator, MacroCalculator, PaceCalculator
├── lib/
│   ├── supabase/{client,server,middleware}.ts
│   ├── database.types.ts        # TS types mirroring schema.sql
│   └── gpx.ts                   # GPX/TCX parsing (distance/duration)
├── supabase/schema.sql          # tables + RLS policies
├── middleware.ts                # session refresh + /app/* protection
└── .env.example
```

## Roadmap notes (later phases)

- **Native mobile apps** unlock Apple Health (HealthKit) / Google Fit (Health Connect) auto-sync — intentionally deferred for the MVP.
- **Email capture** (`EmailCapture.tsx`) is UI-only: wire `onSubscribe` to a newsletter provider (ConvertKit/Beehiiv).
- **Privacy/Terms** are drafts: have an attorney finalize before launch.
- Consider `supabase gen types` later to auto-generate `database.types.ts`.
