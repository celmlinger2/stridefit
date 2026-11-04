import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EVENTS_SORTED } from "@/lib/events";

export const metadata: Metadata = {
  title: "Beginner-Friendly Races Near Cincinnati: Verified 5K & 10K Events",
  description:
    "Real, source-verified 5K and 10K races near Cincinnati and Northern Kentucky — dates, start times, current entry prices, walker policies, and packet pickup, each checked against the organizer's own page.",
  alternates: {
    canonical: "/events",
  },
};

export default function EventsIndexPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="eyebrow">Race Events</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          Pick a race. Train for it here.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Every event below is a real race, checked against the
          organizer&apos;s own page or official registration listing —
          dates, start times, current prices, walker policies, and packet
          pickup, with the date we verified it on every listing. No
          placeholder events, ever. New to racing? Start with our guide to{" "}
          <Link
            href="/how-to-choose-your-first-5k-or-10k"
            className="font-semibold text-brand-600 hover:underline"
          >
            choosing your first 5K or 10K
          </Link>
          .
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS_SORTED.map((e) => (
            <Link
              key={e.slug}
              href={`/events/${e.slug}`}
              className="group flex flex-col rounded-3xl border border-line bg-white p-6 hover:shadow-md"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">
                {e.dateLabel}
              </p>
              <h2 className="mt-2 font-display text-3xl uppercase leading-tight tracking-wide text-ink group-hover:underline">
                {e.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-muted">
                {e.city} · {e.distances.join(" & ")}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                {e.beginnerTake}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-white">
                  {e.priceSummary}
                </span>
                <span className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold text-ink">
                  Verified {e.lastVerified}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-12 rounded-3xl bg-sand p-6 sm:p-8">
          <h2 className="font-display text-3xl uppercase tracking-wide text-ink">
            How this list works
          </h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-slate-700">
            <li>
              <strong className="text-ink">Verified, then published.</strong>{" "}
              An event only appears here after we&apos;ve checked its
              official page — the same rule we use for everything on Stride.
            </li>
            <li>
              <strong className="text-ink">Prices move.</strong> Entry fees
              step up as race day approaches, so every listing shows the
              current price and the next increase date when the organizer
              publishes one. Always confirm on the official registration
              page before you pay.
            </li>
            <li>
              <strong className="text-ink">Local first.</strong> This first
              batch is Cincinnati and Northern Kentucky — a first race you
              can drive to beats a famous one that needs a hotel.
            </li>
          </ul>
        </section>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Pick the race. We&apos;ll track the training.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Create a free Stride account to log runs, walks, and workouts
            against your race date — plus nutrition and strength in the same
            place. Free forever.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-full bg-brand-500 px-6 py-3 font-bold text-white hover:bg-brand-600"
          >
            Create your free account
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
