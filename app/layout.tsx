import type { Metadata } from "next";
import "./globals.css";
import PwaRegister from "./pwa-register";

const websiteUrl = "https://hair-legance-salon.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(websiteUrl),

  applicationName: "Hair Legance Salon",

  title: {
    default: "Hair Legance Salon | Hair, Nail & Lash Salon in Trichardt",
    template: "%s | Hair Legance Salon",
  },

  description:
    "Book professional hair, nail and lash services at Hair Legance Salon in Trichardt. Open Monday to Saturday from 09:00 to 17:00 at Terra Nova Shopping Centre.",

  keywords: [
    "Hair Legance Salon",
    "Hair Legance",
    "hair salon Trichardt",
    "nail salon Trichardt",
    "lash services Trichardt",
    "beauty salon Trichardt",
    "hair services",
    "nail services",
    "salon booking",
    "Terra Nova Shopping Centre",
    "Mpumalanga salon",
  ],

  authors: [{ name: "Hair Legance Salon" }],
  creator: "Hair Legance Salon",
  publisher: "Hair Legance Salon",

  verification: {
    google: "DNDjhwaQKrRi-2JEY-ZsCxnsWvkbyzwPfh1vTmsZ24s",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Hair Legance Salon | Hair, Nail & Lash Salon in Trichardt",
    description:
      "Professional hair, nail and lash services in Trichardt. Book your appointment online today.",
    url: websiteUrl,
    siteName: "Hair Legance Salon",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Hair Legance Salon logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hair Legance Salon | Hair, Nail & Lash Salon",
    description:
      "Professional hair, nail and lash services in Trichardt, Mpumalanga.",
    images: ["/icon-512.png"],
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