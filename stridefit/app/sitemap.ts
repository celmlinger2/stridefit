import type { MetadataRoute } from "next";

// Public, indexable pages only. Auth-gated /app/* dashboard routes,
// /login and /signup carry no search value and are excluded (and
// disallowed in robots.ts).

const PUBLIC_PAGES = [
  { route: "", changeFrequency: "daily", priority: 1.0 },
  { route: "/calculators/macros", changeFrequency: "weekly", priority: 0.8 },
  { route: "/calculators/pace", changeFrequency: "weekly", priority: 0.8 },
  { route: "/calculators/tdee", changeFrequency: "weekly", priority: 0.8 },
  {
    route: "/beginners-guide-to-running-walking",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { route: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { route: "/terms", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stridefitapp.com";

  return PUBLIC_PAGES.map((page) => ({
    url: `${siteUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
