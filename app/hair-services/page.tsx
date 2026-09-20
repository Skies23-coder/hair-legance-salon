import Link from "next/link";

const hairServiceGroups = [
  {
    title: "Hair Styles",
    description: "Professional protective and everyday styling.",
    services: [
      {
        name: "Straight Back",
        description: "Neat straight-back cornrows styled for a clean finish.",
        price: "R330 - R400",
      },
      {
        name: "Knotless Braids",
        description: "Lightweight knotless braids with a comfortable natural finish.",
        price: "R580 - R800",
      },
      {
        name: "Da-Braids",
        description: "Professionally installed braids with a neat and stylish finish.",
        price: "R450",
      },
      {
        name: "Twist Braids",
        description: "Beautiful protective twists available in different lengths.",
        price: "R530 - R1,050",
      },
      {
        name: "Straight Braids",
        description: "Classic straight braids styled according to your preference.",
        price: "R430 - R500",
      },
      {
        name: "Straight Up",
        description: "Neat upward cornrows finished in a stylish updo.",
        price: "R380 - R450",
      },
      {
        name: "Cornrows",
        description: "Clean and stylish cornrows designed to suit your look.",
        price: "R210 - R230",
      },
      {
        name: "Needle Yarn",
        description: "A neat protective yarn hairstyle created with precision.",
        price: "R230",
      },
      {
        name: "Bonding",
        description: "Professional hair bonding for a polished and secure finish.",
        price: "R330",
      },
      {
        name: "Faux Locks",
        description: "Protective faux locks styled for a beautiful natural appearance.",
        price: "R530",
      },
      {
        name: "Afro Twist",
        description: "Textured Afro twists with a soft and natural finish.",
        price: "R530",
      },
      {
        name: "Pondo",
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
        description: "Premium Mizani relaxing treatment for smooth, manageable hair.",
        price: "R450",
      },
      {
        name: "Dark & Lovely",
        description: "Dark & Lovely relaxer application with professional care.",
        price: "R200",
      },
      {
        name: "Blow Out",
        description: "A professional blow-out for a smooth and polished finish.",
        price: "R170",
      },
      {
        name: "Restore Plus",
        description: "Restore Plus relaxer application for smooth, manageable hair.",
        price: "R170",
      },
      {
        name: "Precise",
        description: "Precise relaxer application completed with professional care.",
        price: "R170",
      },
      {
        name: "Soft & Free",
        description: "Soft & Free relaxer application for a smooth finish.",
        price: "R170",
      },
      {
        name: "Easy Waves",
        description: "Easy Waves treatment for a neat and manageable finish.",
        price: "R170",
      },
      {
        name: "Own Relaxer",
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
        description: "A nourishing Mizani treatment that restores and cares for your hair.",
        price: "R250",
      },
      {
        name: "Pure Royal",
        description: "A professional Pure Royal treatment for healthier-looking hair.",
        price: "R250",
      },
      {
        name: "Other Treatment",
        description: "An alternative professional hair treatment selected for your needs.",
        price: "R170",
      },
      {
        name: "Wash",
        description: "A refreshing and thorough professional hair wash.",
        price: "R60",
      },
      {
        name: "Dye",
        description: "Professional hair-colour application.",
        price: "R150",
      },
      {
        name: "Bleach",
        description: "Professional hair-lightening application.",
        price: "R200",
      },
      {
        name: "Undo",
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