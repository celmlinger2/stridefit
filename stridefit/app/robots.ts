import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stridefitapp.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app/", "/login", "/signup"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
