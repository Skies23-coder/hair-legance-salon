import Link from "next/link";

const nailServices = [
  {
    name: "Gel Overlay",
    description: "A smooth and durable gel finish applied to your natural nails.",
    price: 280,
  },
  {
    name: "Acrylic Full Set",
    description: "Beautiful acrylic extensions shaped and styled to your liking.",
    price: 420,
  },
  {
    name: "Gel Manicure",
    description: "Nail shaping, cuticle care and a long-lasting gel colour.",
    price: 250,
  },
  {
    name: "Classic Pedicure",
    description: "Relaxing foot care with nail shaping and a polished finish.",
    price: 300,
  },
  {
    name: "Nail Art",
    description: "Creative nail designs that add personality to your finished set.",
    price: 120,
  },
  {
    name: "Acrylic Soak-Off",
    description: "Safe and careful removal of an existing acrylic nail set.",
    price: 150,
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
            These are temporary prices and can be changed whenever necessary.
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
                <strong>R{service.price}</strong>

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
          <p>Hair & Nail Salon</p>
        </div>

        <div>
          <p>Monday–Saturday · 09:00–17:00</p>
          <p>073 075 4203</p>
          <p>Terra Nova Shopping Centre, Trichardt</p>
        </div>
      </footer>
    </main>
  );
}