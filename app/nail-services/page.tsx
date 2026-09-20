import Link from "next/link";

const nailServices = [
  {
    name: "Manicure",
    description:
      "Professional hand and nail care finished according to your chosen style.",
    price: "From R280",
  },
  {
    name: "Pedicure",
    description:
      "Relaxing foot and nail care with a beautiful, polished finish.",
    price: "From R200",
  },
  {
    name: "French Nails",
    description:
      "A timeless French nail set with clean, elegant tips.",
    price: "R350",
  },
  {
    name: "French + Cat Eye",
    description:
      "A stylish combination of French tips and a shimmering cat-eye effect.",
    price: "R400",
  },
  {
    name: "Cat Eye",
    description:
      "A striking magnetic cat-eye nail design with a beautiful reflective finish.",
    price: "R350",
  },
  {
    name: "Soak Off Only",
    description:
      "Safe and careful removal of your existing nail product.",
    price: "R100",
  },
  {
    name: "Buff and Shine",
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

        <div className="detailed-service-grid">
          {nailServices.map((service) => (
            <article className="detailed-service-card" key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>

              <div className="service-card-bottom">
                <strong>{service.price}</strong>

                <Link className="small-book-button" href="/booking">
                  Book now
                </Link>
              </div>
            </article>
          ))}
        </div>
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