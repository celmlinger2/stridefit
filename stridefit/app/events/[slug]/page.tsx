import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EVENTS, findEvent } from "@/lib/events";

const SITE = "https://stridefitapp.com";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) return {};
  const description = `${event.name} — ${event.dateLabel} in ${event.city}. Distances: ${event.distances.join(", ")}. Current entry: ${event.priceSummary}. Start times, walker policy, packet pickup and course notes, verified ${event.lastVerified}.`;
  return {
    title: `${event.name}: Date, Entry Price, Course & Beginner Guide`,
    description,
    alternates: { canonical: `/events/${slug}` },
    openGraph: { title: event.name, description },
  };
}

function Fact({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-sand p-5">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">
        {label}
      </p>
      <div className="mt-2 leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) notFound();

  const others = EVENTS.filter((e) => e.slug !== slug).sort((a, b) =>
    a.dateISO.localeCompare(b.dateISO)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: event.name,
    startDate: event.dateISO,
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: event.location,
    },
    organizer: { "@type": "Organization", name: event.organizer },
    url: `${SITE}/events/${event.slug}`,
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Link
          href="/events"
          className="text-sm font-semibold text-brand-600 underline"
        >
          ← All events
        </Link>

        <p className="eyebrow mt-6">
          {event.city} · {event.distances.join(" & ")}
        </p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          {event.name}
        </h1>
        <p className="mt-4 text-sm text-muted">
          By the <strong className="text-ink">Stride Team</strong> · Details
          verified {event.lastVerified} against the organizer&apos;s
          official pages
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-navy-900 px-4 py-1.5 text-sm font-semibold text-white">
            {event.dateLabel}
          </span>
          <span className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-ink">
            {event.priceSummary}
          </span>
          <span className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-ink">
            Organizer: {event.organizer}
          </span>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-muted">
          {event.beginnerTake}
        </p>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <Fact label="Date & start times">
            <strong className="text-ink">{event.dateLabel}</strong>
            <br />
            {event.startTimes}
          </Fact>
          <Fact label="Location">{event.location}</Fact>
          <Fact label="Distances">{event.distances.join(" · ")}</Fact>
          <Fact label="Entry price">
            <ul className="space-y-1">
              {event.prices.map((p) => (
                <li key={p.label}>
                  <strong className="text-ink">{p.label}:</strong> {p.price}
                  {p.note ? (
                    <span className="text-muted"> — {p.note}</span>
                  ) : null}
                </li>
              ))}
            </ul>
            {event.nextIncrease && (
              <p className="mt-2 text-sm">{event.nextIncrease}</p>
            )}
          </Fact>
        </section>

        <section className="mt-8 space-y-4">
          <Fact label="What's included">
            <ul className="list-disc space-y-1 pl-5">
              {event.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Fact>
          <Fact label="Walkers & time limits">{event.walkers}</Fact>
          <Fact label="Packet pickup">{event.packetPickup}</Fact>
          <Fact label="The course">{event.course}</Fact>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-brand-500 px-6 py-3 font-bold text-white hover:bg-brand-600"
          >
            Register on the official site
          </a>
          <a
            href={event.officialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border border-line bg-white px-6 py-3 font-bold text-ink hover:bg-sand"
          >
            Organizer&apos;s website
          </a>
        </div>
        <p className="mt-3 text-sm text-muted">
          Registration happens on the organizer&apos;s platform, not on
          Stride — prices and details above were checked on{" "}
          {event.lastVerified}, and entry fees step up as race day
          approaches, so confirm the current price there before you pay.
        </p>

        <section className="mt-10 rounded-3xl bg-sand p-6 sm:p-8">
          <h2 className="font-display text-3xl uppercase tracking-wide text-ink">
            Train for this one
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            {event.planFit.copy}
          </p>
          <p className="mt-3">
            <Link
              href={event.planFit.href}
              className="font-semibold text-brand-600 hover:underline"
            >
              {event.planFit.label} →
            </Link>{" "}
            ·{" "}
            <Link
              href="/how-to-choose-your-first-5k-or-10k"
              className="font-semibold text-brand-600 hover:underline"
            >
              How to choose your first 5K or 10K
            </Link>{" "}
            ·{" "}
            <Link
              href="/calculators/pace"
              className="font-semibold text-brand-600 hover:underline"
            >
              Pace calculator
            </Link>
          </p>
        </section>

        <div className="mt-10 rounded-3xl bg-navy-900 p-8 text-center">
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

        {others.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
              More verified races
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {others.map((e) => (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="group rounded-2xl border border-line bg-white p-5 hover:shadow-md"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">
                    {e.dateLabel}
                  </p>
                  <p className="mt-1 font-display text-2xl uppercase tracking-wide text-ink group-hover:underline">
                    {e.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {e.city} · {e.distances.join(" & ")} · {e.priceSummary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <p className="mt-12 rounded-xl bg-sand p-4 text-xs leading-relaxed text-muted">
          Event details are summarized from the organizer&apos;s official
          pages and verified on the date shown; the organizer&apos;s pages
          are the final word and can change. General fitness information
          only — not medical advice.
        </p>
      </main>
      <Footer />
    </div>
  );
}
