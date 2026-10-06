import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Services in Trichardt",
  description:
    "Explore hair styling, braids and treatments at Hair Legance Salon in Trichardt. View services and request an appointment online.",
  alternates: {
    canonical: "https://hair-legance-salon.vercel.app/hair-services",
  },
};

const hairServiceGroups = [
  {
    title: "Hair Styles",
    description: "Professional protective and everyday styling.",
    services: [
      {
        name: "Straight Back",
        image: "/services/straight-back.png",
        description: "Neat straight-back cornrows styled for a clean finish.",
        price: "R330 - R400",
      },
      {
        name: "Knotless Braids",
        image: "/services/knotless-braids.png",
        description: "Lightweight knotless braids with a comfortable natural finish.",
        price: "R580 - R800",
      },
      {
        name: "Da-Braids",
        image: "/services/da-braids.png",
        description: "Professionally installed braids with a neat and stylish finish.",
        price: "R450",
      },
      {
        name: "Twist Braids",
        image: "/services/twist-braids.png",
        description: "Beautiful protective twists available in different lengths.",
        price: "R530 - R1,050",
      },
      {
        name: "Straight Braids",
        image: "/services/straight-braids.png",
        description: "Classic straight braids styled according to your preference.",
        price: "R430 - R500",
      },
      {
        name: "Straight Up",
        image: "/services/straight-up.png",
        description: "Neat upward cornrows finished in a stylish updo.",
        price: "R380 - R450",
      },
      {
        name: "Cornrows",
        image: "/services/cornrows.png",
        description: "Clean and stylish cornrows designed to suit your look.",
        price: "R210 - R230",
      },
      {
        name: "Needle Yarn",
        image: "/services/needle-yarn.png",
        description: "A neat protective yarn hairstyle created with precision.",
        price: "R230",
      },
      {
        name: "Bonding",
        image: "/services/bonding.png",
        description: "Professional hair bonding for a polished and secure finish.",
        price: "R330",
      },
      {
        name: "Faux Locks",
        image: "/services/faux-locks.png",
        description: "Protective faux locks styled for a beautiful natural appearance.",
        price: "R530",
      },
      {
        name: "Afro Twist",
        image: "/services/afro-twist.png",
        description: "Textured Afro twists with a soft and natural finish.",
        price: "R530",
      },
      {
        name: "Pondo",
        image: "/services/pondo.png",
        description: "A sleek and elegant ponytail hairstyle.",
        price: "R250",
      },
    ],
  },
  {
    title: "Relaxers",
    description: "Professional relaxing and smoothing options.",
    services: [
      {
        name: "Mizani",
        image: "/services/mizani.png",
        description: "Premium Mizani relaxing treatment for smooth, manageable hair.",
        price: "R450",
      },
      {
        name: "Dark & Lovely",
        image: "/services/dark-and-lovely.png",
        description: "Dark & Lovely relaxer application with professional care.",
        price: "R200",
      },
      {
        name: "Blow Out",
        image: "/services/blow-out.png",
        description: "A professional blow-out for a smooth and polished finish.",
        price: "R170",
      },
      {
        name: "Restore Plus",
        image: "/services/restore-plus.png",
        description: "Restore Plus relaxer application for smooth, manageable hair.",
        price: "R170",
      },
      {
        name: "Precise",
        image: "/services/precise.png",
        description: "Precise relaxer application completed with professional care.",
        price: "R170",
      },
      {
        name: "Soft & Free",
        image: "/services/soft-and-free.png",
        description: "Soft & Free relaxer application for a smooth finish.",
        price: "R170",
      },
      {
        name: "Easy Waves",
        image: "/services/easy-waves.png",
        description: "Easy Waves treatment for a neat and manageable finish.",
        price: "R170",
      },
      {
        name: "Own Relaxer",
        image: "/services/own-relaxer.png",
        description: "Bring your preferred relaxer for professional application.",
        price: "R150",
      },
    ],
  },
  {
    title: "Treatments & Extras",
    description: "Additional treatments and hair-care services.",
    services: [
      {
        name: "Mizani Treatment",
        image: "/services/mizani-treatment.png",
        description: "A nourishing Mizani treatment that restores and cares for your hair.",
        price: "R250",
      },
      {
        name: "Pure Royal",
        image: "/services/pure-royal.png",
        description: "A professional Pure Royal treatment for healthier-looking hair.",
        price: "R250",
      },
      {
        name: "Other Treatment",
        image: "/services/other-treatment.png",
        description: "An alternative professional hair treatment selected for your needs.",
        price: "R170",
      },
      {
        name: "Wash",
        image: "/services/wash.png",
        description: "A refreshing and thorough professional hair wash.",
        price: "R60",
      },
      {
        name: "Dye",
        image: "/services/dye.png",
        description: "Professional hair-colour application.",
        price: "R150",
      },
      {
        name: "Bleach",
        image: "/services/bleach.png",
        description: "Professional hair-lightening application.",
        price: "R200",
      },
      {
        name: "Undo",
        image: "/services/undo.png",
        description: "Careful removal of your existing hairstyle.",
        price: "R30 - R50",
      },
    ],
  },
];

export default function HairServicesPage() {
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

      <section className="page-hero hair-page-hero">
        <p className="eyebrow">HAIR LEGANCE</p>
        <h1>Hair Services</h1>
        <p>
          Discover professional styling, relaxing and treatment services created
          to care for and transform your hair.
        </p>
      </section>

      <section className="service-page-section">
        <div className="section-heading">
          <p className="eyebrow">OUR HAIR SERVICES</p>
          <h2>Choose your next look</h2>
          <p>
            Prices may vary according to hair length, size and the selected
            style. Please confirm your final price when booking.
          </p>
        </div>

        {hairServiceGroups.map((group) => (
          <section className="service-group" key={group.title}>
            <div className="service-group-heading">
              <p className="eyebrow">HAIR LEGANCE</p>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>

            <div className="detailed-service-grid">
              {group.services.map((service) => (
                <article
                  className="detailed-service-card"
                  key={service.name}
                >
                  <div className="service-card-content">
                    <div className="service-card-copy">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                    </div>
                    <Image
                      className="service-card-photo"
                      src={service.image}
                      alt={service.name + " service illustration"}
                      width={100}
                      height={100}
                      sizes="(max-width: 700px) 76px, 100px"
                    />
                  </div>

                  <div className="service-card-bottom">
                    <strong>{service.price}</strong>

<Link
  className="small-book-button"
  href={`/booking?service=${encodeURIComponent(service.name)}`}
>
  Book now
</Link>
                    
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="service-callout">
        <p className="eyebrow">READY FOR YOUR APPOINTMENT?</p>
        <h2>Let us take care of your hair.</h2>

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