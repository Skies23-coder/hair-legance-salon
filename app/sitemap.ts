import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const websiteUrl =
    "https://hair-legance-salon-lmgwg5rqm-skies23-coder.vercel.app";

  return [
    {
      url: websiteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${websiteUrl}/hair-services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${websiteUrl}/nail-services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${websiteUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}