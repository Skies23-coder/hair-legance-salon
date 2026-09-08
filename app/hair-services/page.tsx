import Link from "next/link";

const hairServices = [
  {
    name: "Wash & Blow-Dry",
    description: "A refreshing wash followed by a smooth professional blow-dry.",
    price: 220,
  },
  {
    name: "Silk Press",
    description: "A smooth, shiny straight-hair finish without chemical relaxers.",
    price: 350,
  },
  {
    name: "Knotless Braids",
    description: "Comfortable and lightweight braids with a natural finish.",
    price: 650,
  },
  {
    name: "Cornrows",
    description: "Stylish and neat cornrows designed to suit your preference.",
    price: 300,
  },
  {
    name: "Hair Treatment",
    description: "A nourishing treatment that helps restore moisture and shine.",
    price: 280,
  },
  {
    name: "Wig Installation",
    description: "Professional wig preparation, fitting and styling.",
    price: 450,
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
        </nav>

        <Link className="header-button" href="/booking">
          Book now
        </Link>
      </header>

      <section className="page-hero hair-page-hero">
        <p className="eyebrow">HAIR LEGANCE</p>
        <h1>Hair Services</h1>
        <p>
          Discover beautiful treatments created to care for, protect and style
          your hair.
        </p>
      </section>

      <section className="service-page-section">
        <div className="section-heading">
          <p className="eyebrow">OUR HAIR SERVICES</p>
          <h2>Choose your next look</h2>
          <p>
            These are temporary prices and can be changed whenever necessary.
          </p>
        </div>

        <div className="detailed-service-grid">
          {hairServices.map((service) => (
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
        <h2>Let us take care of your hair.</h2>
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