import type { Metadata } from "next";
import "./globals.css";
import PwaRegister from "./pwa-register";

const websiteUrl =
  "https://hair-legance-salon.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(websiteUrl),

  title: {
    default: "Hair Legance | Hair & Nail Salon in Trichardt",
    template: "%s | Hair Legance",
  },

  description:
    "Book professional hair and nail services at Hair Legance Salon in Trichardt. Open Monday to Saturday from 09:00 to 17:00 at Terra Nova Shopping Centre.",

  keywords: [
    "Hair Legance",
    "hair salon Trichardt",
    "nail salon Trichardt",
    "beauty salon Trichardt",
    "hair services",
    "nail services",
    "salon booking",
    "Terra Nova Shopping Centre",
    "Mpumalanga salon",
  ],

  authors: [{ name: "Hair Legance Salon" }],
  creator: "Hair Legance Salon",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Hair Legance | Hair & Nail Salon in Trichardt",
    description:
      "Professional hair and nail services in Trichardt. Book your appointment online today.",
    url: websiteUrl,
    siteName: "Hair Legance Salon",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/hair-legance-desktop.png",
        width: 1536,
        height: 1024,
        alt: "Hair Legance Hair and Nail Salon",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hair Legance | Hair & Nail Salon",
    description:
      "Professional hair and nail services in Trichardt, Mpumalanga.",
    images: ["/hair-legance-desktop.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body>
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}