import ServiceSearch from "../service-search";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nail Services in Trichardt",
  description:
    "Explore manicures, pedicures, gel and acrylic nails at Hair Legance Salon in Trichardt. View services and request an appointment online.",
  alternates: {
    canonical: "https://hair-legance-salon.vercel.app/nail-services",
  },
};

const nailServices = [
  {
    name: "Manicure",
        image: "/services/manicure.png",
    description:
      "Professional hand and nail care finished according to your chosen style.",
    price: "From R280",
  },
  {
    name: "Pedicure",
        image: "/services/pedicure.png",
    description:
      "Relaxing foot and nail care with a beautiful, polished finish.",
    price: "From R200",
  },
  {
    name: "French Nails",
        image: "/services/french-nails.png",
    description:
      "A timeless French nail set with clean, elegant tips.",
    price: "R350",
  },
  {
    name: "French + Cat Eye",
        image: "/services/french-cat-eye.png",
    description:
      "A stylish combination of French tips and a shimmering cat-eye effect.",
    price: "R400",
  },
  {
    name: "Cat Eye",
        image: "/services/cat-eye.png",
    description:
      "A striking magnetic cat-eye nail design with a beautiful reflective finish.",
    price: "R350",
  },
  {
    name: "Soak Off Only",
        image: "/services/soak-off-only.png",
    description:
      "Safe and careful removal of your existing nail product.",
    price: "R100",
  },
  {
    name: "Buff and Shine",
        image: "/services/buff-and-shine.png",
    description:
      "Natural nails are shaped, gently buffed and polished for a healthy shine.",
    price: "R150",
  },
];

export default function NailServicesPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/">
          Hair Legance
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/hair-services">Hair</Link>
          <Link href="/nail-services">Nails</Link>
          <Link href="/lash-services">Lashes</Link>
        </nav>

        <Link className="header-button" href="/booking">
          Book now
        </Link>
      </header>

      <section className="page-hero nail-page-hero">
        <p className="eyebrow">HAIR LEGANCE</p>
        <h1>Nail Services</h1>
        <p>
          Treat your hands and feet to beautiful, carefully finished nail
          treatments.
        </p>
      </section>

      <section className="service-page-section">
        <div className="section-heading">
          <p className="eyebrow">OUR NAIL SERVICES</p>
          <h2>Choose your perfect set</h2>
          <p>
            Choose from our professional nail-care treatments and beautiful
            finishes.
          </p>
        </div>

        <ServiceSearch groups={[{ title: "", description: "", services: nailServices }]} placeholder="Search manicure, French nails or cat eye…" />
      </section>

      <section className="service-callout">
        <p className="eyebrow">READY FOR YOUR APPOINTMENT?</p>
        <h2>Beautiful nails start here.</h2>

        <Link className="primary-button" href="/booking">
          Book your appointment
        </Link>
      </section>

      <footer>
        <div>
          <h2>Hair Legance</h2>
          <p>Hair, Nail & Lash Salon</p>
        </div>

        <div>
          <p>Monday-Sunday · 08:30-17:00</p>
          <p>073 075 4203</p>
          <p>Terra Nova Shopping Centre, Trichardt</p>
        </div>
      </footer>
    </main>
  );
}