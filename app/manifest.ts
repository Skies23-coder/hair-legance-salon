import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hair Legance Salon",
    short_name: "Hair Legance",
    description: "Book hair and nail appointments with Hair Legance.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0a0a",
    theme_color: "#0b0a0a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
