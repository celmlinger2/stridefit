import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "StrideFit — Diet Tracking, Workouts & Cardio in One Free App",
  description:
    "Track what you eat, plan workouts, and log runs, walks, and cardio events. StrideFit is free and simple enough for beginners, powerful enough for athletes.",
};

const pillars = [
  {
    title: "Nutrition",
    emoji: "🥗",
    copy: "Log meals in seconds with calories and macros. Simple targets for beginners, detailed splits for athletes.",
    href: "/signup",
    cta: "Track your diet",
  },
  {
    title: "Workouts",
    emoji: "🏋️",
    copy: "Follow guided routines or build your own. Progressive overload tracking grows with you from day one to advanced.",
    href: "/signup",
    cta: "Build workouts",
  },
  {
    title: "Cardio & Events",
    emoji: "🏃",
    copy: "Log runs, walks, and cardio sessions — or import GPX/TCX files from Strava and Garmin. Train for races and challenges.",
    href: "/signup",
    cta: "Log cardio",
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
            How StrideFit works
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

      {/* Email capture */}
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <EmailCapture />
      </section>

      <Footer />
    </div>
  );
}
