import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleByline from "@/components/ArticleByline";
import { EXERCISES, EQUIPMENT_OPTIONS, type Exercise } from "@/lib/workout-of-the-day";
import { exerciseSlug, exerciseMedia } from "@/lib/exercise-videos";
import { EXERCISE_DETAILS } from "@/lib/exercise-details";

const SITE = "https://www.stridefitapp.com";

function findExercise(slug: string): Exercise | undefined {
  return EXERCISES.find((e) => exerciseSlug(e.name) === slug);
}

const equipmentLabel = (key: string) =>
  EQUIPMENT_OPTIONS.find((o) => o.key === key)?.label ?? key;

export function generateStaticParams() {
  return EXERCISES.map((e) => ({ slug: exerciseSlug(e.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exercise = findExercise(slug);
  if (!exercise) return {};
  const description = `How to do ${exercise.name.toLowerCase()} with proper form: watch the form video, follow the step-by-step instructions, and use the standard ${exercise.sets} sets × ${exercise.reps} ${exercise.unit}. Includes the common mistake to avoid.`;
  return {
    title: `How to Do ${exercise.name}: Form, Video & Instructions`,
    description,
    alternates: { canonical: `/exercises/${slug}` },
    openGraph: { title: `How to Do ${exercise.name}`, description },
  };
}

export default async function ExercisePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exercise = findExercise(slug);
  if (!exercise) notFound();

  const media = exerciseMedia(exercise.name);
  const detail = EXERCISE_DETAILS[slug];
  const related = EXERCISES.filter(
    (e) => e.focus === exercise.focus && e.name !== exercise.name
  ).slice(0, 6);
  const equipmentText = exercise.equipment.map(equipmentLabel).join(", ");

  const jsonLd =
    media.kind === "video"
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: `How to Do ${exercise.name}`,
          description: exercise.instructions,
          thumbnailUrl: [`${SITE}${media.poster}`],
          contentUrl: `${SITE}${media.src}`,
          uploadDate: "2026-10-15",
          publisher: { "@type": "Organization", name: "Stride" },
        }
      : null;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <Link
          href="/exercises"
          className="text-sm font-semibold text-brand-600 underline"
        >
          ← All exercises
        </Link>

        <p className="eyebrow mt-6">
          {exercise.focus} · {equipmentText}
        </p>
        <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl">
          How to do {exercise.name}
        </h1>
        <ArticleByline published="October 2026" readMinutes={2} />

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-navy-900 px-4 py-1.5 text-sm font-semibold text-white">
            Standard: {exercise.sets} sets × {exercise.reps} {exercise.unit}
          </span>
          <span className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-ink">
            Focus: {exercise.focus}
          </span>
          <span className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-ink">
            Equipment: {equipmentText}
          </span>
          {exercise.warmup && (
            <span className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-ink">
              Warm-up friendly
            </span>
          )}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white">
          {media.kind === "video" ? (
            <video
              src={media.src}
              poster={media.poster}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="aspect-video w-full object-cover"
            />
          ) : (
            <div className="grid grid-cols-3 gap-2 p-2">
              {media.images.map((img) => (
                <figure key={img.label}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={`${exercise.name} — ${img.label} position`}
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                  <figcaption className="py-2 text-center text-xs font-bold uppercase tracking-wider text-muted">
                    {img.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>

        <section className="mt-10">
          <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
            How to do it
          </h2>
          {detail ? (
            <ol className="mt-4 space-y-3">
              {detail.steps.map((step, i) => (
                <li key={i} className="flex gap-4 rounded-2xl bg-sand p-4">
                  <span className="font-display text-2xl leading-none text-brand-600">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-ink">{step}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-4 leading-relaxed text-ink">{exercise.instructions}</p>
          )}
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-5">
            <h3 className="font-display text-2xl uppercase tracking-wide text-ink">
              The key cue
            </h3>
            <p className="mt-2 leading-relaxed text-ink">{exercise.instructions}</p>
          </div>
          {detail && (
            <div className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-display text-2xl uppercase tracking-wide text-ink">
                Avoid this mistake
              </h3>
              <p className="mt-2 leading-relaxed text-ink">{detail.mistake}</p>
            </div>
          )}
        </section>

        <div className="mt-10 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide text-white">
            Log it in Stride
          </h2>
          <p className="mx-auto mt-2 max-w-md text-cream/70">
            {exercise.name} is in Stride&apos;s workout library with this form
            video attached to every set you log — {exercise.sets} sets ×{" "}
            {exercise.reps} {exercise.unit} is the standard prescription, ready
            to adjust to you.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-full bg-brand-500 px-6 py-3 font-bold text-white hover:bg-brand-600"
          >
            Create your free account
          </Link>
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-4xl uppercase tracking-wide text-ink">
              More {exercise.focus.toLowerCase()} exercises
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {related.map((e) => {
                const rSlug = exerciseSlug(e.name);
                const rMedia = exerciseMedia(e.name);
                const thumb =
                  rMedia.kind === "video" ? rMedia.poster : rMedia.images[0].src;
                return (
                  <Link
                    key={rSlug}
                    href={`/exercises/${rSlug}`}
                    className="group overflow-hidden rounded-2xl border border-line bg-white hover:shadow-md"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumb}
                      alt={`${e.name} form demonstration`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="p-3">
                      <p className="text-sm font-bold leading-snug text-ink group-hover:underline">
                        {e.name}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <p className="mt-12 rounded-xl bg-sand p-4 text-xs leading-relaxed text-muted">
          General fitness information only — not medical advice. Use a weight
          and range of motion you can control, and stop if something hurts. If
          you&apos;re new to exercise or returning from an injury, check with a
          qualified professional first.
        </p>
      </main>
      <Footer />
    </div>
  );
}
