import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EXERCISES, EQUIPMENT_OPTIONS } from "@/lib/workout-of-the-day";
import { exerciseSlug, exerciseMedia } from "@/lib/exercise-videos";

export const metadata: Metadata = {
  title: "Exercise Library: 153 Exercises With Form Videos",
  description:
    "Browse Stride's full exercise library: 153 exercises with a form video, step-by-step instructions, and the standard sets and reps for each — bodyweight, dumbbell, barbell, kettlebell, bands and more.",
  alternates: {
    canonical: "/exercises",
  },
};

const FOCUS_ORDER = ["Push", "Pull", "Legs", "Core", "Conditioning", "Full body"] as const;

const equipmentLabel = (key: string) =>
  EQUIPMENT_OPTIONS.find((o) => o.key === key)?.label ?? key;

export default function ExercisesIndexPage() {
  const byFocus = FOCUS_ORDER.map((focus) => ({
    focus,
    items: EXERCISES.filter((e) => e.focus === focus),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="eyebrow">Exercise Library</p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          How to do it, right
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Every exercise in Stride, with a form video, step-by-step
          instructions, and the standard sets and reps we program for it.{" "}
          {EXERCISES.length} exercises — bodyweight, dumbbells, barbell,
          kettlebell, bands, and more. Pick one, watch the form, then log it
          in your workout.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {byFocus.map((g) => (
            <a
              key={g.focus}
              href={`#${g.focus.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-sand"
            >
              {g.focus} · {g.items.length}
            </a>
          ))}
        </div>

        {byFocus.map((g) => (
          <section
            key={g.focus}
            id={g.focus.toLowerCase().replace(/\s+/g, "-")}
            className="mt-12"
          >
            <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
              {g.focus}
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {g.items.map((e) => {
                const slug = exerciseSlug(e.name);
                const media = exerciseMedia(e.name);
                const thumb =
                  media.kind === "video" ? media.poster : media.images[0].src;
                return (
                  <Link
                    key={slug}
                    href={`/exercises/${slug}`}
                    className="group overflow-hidden rounded-2xl border border-line bg-white hover:shadow-md"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumb}
                      alt={`${e.name} form demonstration`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="p-4">
                      <p className="font-bold leading-snug text-ink group-hover:underline">
                        {e.name}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        {e.equipment.map(equipmentLabel).join(" · ")} — {e.sets}{" "}
                        × {e.reps} {e.unit}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        <div className="mt-14 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Put them to work
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            Every exercise here is in Stride&apos;s workout logger with its
            form video attached. Build your session, tap off your sets, and
            watch the streak grow. Free forever.
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
