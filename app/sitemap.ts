import type { MetadataRoute } from "next";
import { EXERCISES } from "@/lib/workout-of-the-day";
import { exerciseSlug } from "@/lib/exercise-videos";

// Public, indexable pages only. Auth-gated /app/* dashboard routes,
// /login and /signup carry no search value and are excluded (and
// disallowed in robots.ts).

const PUBLIC_PAGES = [
  { route: "", changeFrequency: "daily", priority: 1.0 },
  { route: "/calculators", changeFrequency: "weekly", priority: 0.8 },
  { route: "/calculators/macros", changeFrequency: "weekly", priority: 0.8 },
  { route: "/calculators/pace", changeFrequency: "weekly", priority: 0.8 },
  { route: "/calculators/tdee", changeFrequency: "weekly", priority: 0.8 },
  {
    route: "/beginners-guide-to-running-walking",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/beginner-5k-training-plan",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/how-to-track-macros",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/guides",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    route: "/strength-training-for-beginners",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/how-to-pace-a-10k",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/what-to-eat-before-and-after-a-run",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/walking-for-weight-management",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/calories-to-lose-weight",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { route: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { route: "/terms", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stridefitapp.com";

  const staticPages = PUBLIC_PAGES.map((page) => ({
    url: `${siteUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const exercisePages = [
    {
      url: `${siteUrl}/exercises`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...EXERCISES.map((e) => ({
      url: `${siteUrl}/exercises/${exerciseSlug(e.name)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticPages, ...exercisePages];
}
