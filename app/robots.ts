import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const websiteUrl =
    "https://hair-legance-salon.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${websiteUrl}/sitemap.xml`,
    host: websiteUrl,
  };
}