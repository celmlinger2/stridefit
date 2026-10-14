import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Stride — Diet Tracking, Workouts & Cardio in One Free App",
  description:
    "Track what you eat, plan workouts, and log runs, walks, and cardio events. Stride is free and simple enough for beginners, powerful enough for athletes.",
};

const pillars = [
  {
    title: "Nutrition",
    emoji: "🥗",
    copy: "Log meals in seconds with calories and macros. Simple targets for beginners, detailed splits for athletes.",
    href: "/how-to-track-macros",
    cta: "See how tracking works",
  },
  {
    title: "Workouts",
    emoji: "🏋️",
    copy: "Follow guided routines or build your own. Progressive overload tracking grows with you from day one to advanced.",
    href: "/beginner-5k-training-plan",
    cta: "See a sample plan",
  },
  {
    title: "Cardio & Events",
    emoji: "🏃",
    copy: "Log runs, walks, and cardio sessions — or import GPX/TCX files from Strava and Garmin. Train for races and challenges.",
    href: "/beginners-guide-to-running-walking",
    cta: "Read the running guide",
  },
];

const steps = [
  {
    title: "Set your targets",
    copy: "Calories, macros, and training goals tailored to your level — beginner to advanced.",
  },
  {
    title: "Log in seconds",
    copy: "Quick food search, one-tap workout logging, and run imports that pre-fill your cardio entries.",
  },
  {
    title: "Stay consistent",
    copy: "Streaks, gentle nudges, and weekly wellness tips keep motivation up without the noise.",
  },
];

const guides = [
  {
    href: "/beginners-guide-to-running-walking",
    title: "Beginner's Guide to Running and Walking",
    copy: "The walk-run method, a realistic first-week plan, and the consistency system that keeps beginners going.",
  },
  {
    href: "/beginner-5k-training-plan",
    title: "8-Week Beginner 5K Training Plan",
    copy: "Three walk-run sessions a week, from your first intervals to race day — no experience needed.",
  },
  {
    href: "/how-to-track-macros",
    title: "How to Track Macros",
    copy: "Set protein, carb, and fat targets and log food without it taking over your life.",
  },
  {
    href: "/calories-to-lose-weight",
    title: "How Many Calories Should I Eat to Lose Weight?",
    copy: "Find your real calorie target: estimate maintenance, pick a deficit, adjust from the trend.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
          <p className="eyebrow inline-block rounded-full bg-brand-100 px-4 py-1.5">
            Free forever · No credit card
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-6xl uppercase leading-[0.95] tracking-wide text-ink sm:text-7xl">
            Your entire fitness journey,{" "}
            <span className="text-brand-500">in one place</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Track your diet, crush workouts, and log every run, walk, and cardio
            session. Simple enough for beginners — advanced enough for athletes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/signup" className="btn-primary px-8 py-3 text-base">
              Start tracking free
            </Link>
            <Link href="/calculators/tdee" className="btn-secondary px-8 py-3 text-base">
              Try a free calculator
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 text-sm font-medium text-muted">
            <span>🥗 Nutrition</span>
            <span>🏋️ Workouts</span>
            <span>🏃 Cardio events</span>
            <span>💚 Wellness tips</span>
          </div>

          {/* App preview — sample data, built in code */}
          <div className="mx-auto mt-12 max-w-3xl text-left">
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xl">
              <div className="flex items-center justify-between bg-navy-800 px-5 py-3">
                <span className="font-display text-lg tracking-wide text-white">
                  STRIDE<span className="text-brand-500">.</span>
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cream">
                  App preview
                </span>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-5">
                <div className="sm:col-span-3">
                  <p className="eyebrow !text-[11px]">Calories today</p>
                  <p className="mt-1 font-display text-4xl tracking-wide text-ink">
                    1,240 <span className="text-lg text-muted">/ 2,000 kcal</span>
                  </p>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-sand">
                    <div className="h-full w-[62%] rounded-full bg-brand-500" />
                  </div>
                  <p className="mt-2 text-xs text-muted">62% of daily target</p>
                  <div className="mt-5">
                    <p className="eyebrow !text-[11px]">This week</p>
                    <div className="mt-2 flex h-16 items-end gap-2">
                      {[35, 60, 25, 80, 45, 90, 50].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-t-md ${i === 5 ? "bg-brand-500" : "bg-navy-800"}`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="mt-1 flex justify-between font-mono text-[10px] text-muted">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-cream p-4 sm:col-span-2">
                  <p className="eyebrow !text-[11px]">Workout of the day</p>
                  <p className="mt-2 font-display text-2xl uppercase leading-none tracking-wide text-ink">
                    Full-body reset
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted">
                    <li>Push-ups × 12</li>
                    <li>Squats × 15</li>
                    <li>Plank · 45 sec</li>
                  </ul>
                  <span className="mt-4 inline-block rounded-full bg-brand-500 px-4 py-2 text-xs font-bold text-white">
                    Start workout
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted">
              Your dashboard — log a meal, a workout, or a walk in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow text-center">The method</p>
        <h2 className="mt-3 text-center font-display text-5xl uppercase tracking-wide text-ink">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Three pillars, one dashboard. Start with what matters most and grow
          into the rest.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="card flex flex-col">
              <span className="text-4xl">{p.emoji}</span>
              <h3 className="mt-4 text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.copy}
              </p>
              <Link
                href={p.href}
                className="mt-4 text-sm font-bold text-brand-600 hover:text-brand-700"
              >
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="eyebrow text-center">How it works</p>
          <h2 className="mt-3 text-center font-display text-5xl uppercase tracking-wide text-ink">
            How Stride works
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-base font-black text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free tools (SEO) */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow text-center">Free to start · No credit card</p>
        <h2 className="mt-3 text-center font-display text-5xl uppercase tracking-wide text-ink">
          Free fitness calculators
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          No signup needed. The same tools our members use every day.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { href: "/calculators/tdee", title: "TDEE Calculator", copy: "Find your daily calorie needs for cutting, maintaining, or bulking." },
            { href: "/calculators/macros", title: "Macro Calculator", copy: "Dial in protein, carbs, and fat for your goal and body weight." },
            { href: "/calculators/pace", title: "Pace Calculator", copy: "Convert race times to training paces for running and cardio." },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card transition hover:shadow-md">
              <h3 className="text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.copy}</p>
              <span className="mt-4 inline-block text-sm font-bold text-brand-600">
                Use it free →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides (SEO) */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="eyebrow text-center">Learn</p>
          <h2 className="mt-3 text-center font-display text-5xl uppercase tracking-wide text-ink">
            Training guides
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Practical, beginner-friendly plans written by runners, for runners.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {guides.map((g) => (
              <Link key={g.href} href={g.href} className="card transition hover:shadow-md">
                <h3 className="text-lg font-bold text-ink">{g.title}</h3>
                <p className="mt-2 text-sm text-muted">{g.copy}</p>
                <span className="mt-4 inline-block text-sm font-bold text-brand-600">
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <EmailCapture />
      </section>

      <Footer />
    </div>
  );
}
