// Exercise tutorial media.
//
// Every exercise in the library has a silent looping form video at
// /videos/<slug>.mp4 (poster at /videos/posters/<slug>.jpg), except
// "Lunges" and "Bear crawl", which have illustrated start/middle/end
// breakdowns under /videos/illustrations/ instead.

export function exerciseSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/['\u2019]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const ILLUSTRATED_SLUGS = new Set(["lunges", "bear-crawl"]);

export type ExerciseMedia =
  | { kind: "video"; src: string; poster: string }
  | { kind: "illustrations"; images: { label: string; src: string }[] };

export function exerciseMedia(name: string): ExerciseMedia {
  const slug = exerciseSlug(name);
  if (ILLUSTRATED_SLUGS.has(slug)) {
    return {
      kind: "illustrations",
      images: ["start", "middle", "end"].map((phase) => ({
        label: phase[0].toUpperCase() + phase.slice(1),
        src: `/videos/illustrations/${slug}-${phase}.webp`,
      })),
    };
  }
  return {
    kind: "video",
    src: `/videos/${slug}.mp4`,
    poster: `/videos/posters/${slug}.jpg`,
  };
}
