import Link from "next/link";

const lashServices = [
  {
    name: "Cluster Lashes",
    description:
      "Beautiful lash clusters applied professionally for a fuller, glamorous look.",
    price: "R180",
  },
  {
    name: "Individual Lashes",
    description:
      "Individual lash extensions carefully applied for a customised finish.",
    price: "R250 - R300",
  },
  {
    name: "Eyebrow Tint",
    description:
      "Professional eyebrow tinting to enhance the shape and colour of your brows.",
    price: "R120",
  },
];

export default function LashServicesPage() {
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

      <section className="page-hero lash-page-hero">
        <p className="eyebrow">HAIR LEGANCE</p>
        <h1>Lash Services</h1>
        <p>
          Enhance your natural beauty with professionally applied lashes and
          beautifully defined brows.
        </p>
      </section>

      <section className="service-page-section">
        <div className="section-heading">
          <p className="eyebrow">OUR LASH SERVICES</p>
          <h2>Choose your perfect look</h2>
          <p>
            Select a lash or eyebrow service designed to complement your style.
          </p>
        </div>

        <div className="detailed-service-grid">
          {lashServices.map((service) => (
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
        <h2>Your perfect lash look starts here.</h2>

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
          <p>Monday-Saturday · 09:00-17:00</p>
          <p>073 075 4203</p>
          <p>Terra Nova Shopping Centre, Trichardt</p>
        </div>
      </footer>
    </main>
  );
}