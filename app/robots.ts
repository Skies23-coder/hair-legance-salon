import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const websiteUrl =
    "https://hair-legance-salon-lmgwg5rqm-skies23-coder.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${websiteUrl}/sitemap.xml`,
    host: websiteUrl,
  };
}