import Link from "next/link";

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hair Legance Salon",
  alternateName: ["Hair Legance", "hair-legance-salon.vercel.app"],
  url: "https://hair-legance-salon.vercel.app/",
};

export default function Home() {
  return (
    <main>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteStructuredData),
  }}
/>

      <header className="site-header">
        <Link className="brand" href="/">
          Hair Legance
        </Link>

        <nav>
          <Link href="#services">Services</Link>
          <Link href="/hair-services">Hair</Link>
          <Link href="/nail-services">Nails</Link>
          <Link href="/lash-services">Lashes</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <Link className="header-button" href="/booking">
          Book now
        </Link>
      </header>

      <section className="responsive-hero" id="home">
        <picture>
          <source media="(max-width: 700px)" srcSet="/hair-legance-heritage.png" />

          <img
            src="/hair-legance-heritage.png"
            alt="Hair Legance Hair, Nail and Lash Salon"
          />
        </picture>
      </section>

      <section className="intro-section">
        <p className="eyebrow">HAIR, NAIL & LASH SALON · TRICHARDT</p>
        <h1>Beauty, handled with care.</h1>

        <p>
          Professional hair, nail and lash treatments in a welcoming and elegant
          salon.
        </p>

        <Link className="primary-button" href="/booking">
          Book your appointment
        </Link>
      </section>

      <section className="category-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">OUR SERVICES</p>
          <h2>What would you like to book?</h2>
          <p>
            Select a service category to view the available treatments and
            prices.
          </p>
        </div>

        <div className="category-grid">
          <article className="category-card hair-category">
            <div className="category-overlay">
              <span className="category-letter">H</span>
              <p className="eyebrow">HAIR LEGANCE</p>
              <h3>Hair Services</h3>

              <p>
                Explore braids, protective hairstyles, relaxers, treatments and
                hair-care extras.
              </p>

              <Link className="category-button" href="/hair-services">
                View hair services
              </Link>
            </div>
          </article>

          <article className="category-card nail-category">
            <div className="category-overlay">
              <span className="category-letter">N</span>
              <p className="eyebrow">HAIR LEGANCE</p>
              <h3>Nail Services</h3>

              <p>
                Explore manicures, pedicures, French nails, cat-eye designs and
                nail care.
              </p>

              <Link className="category-button" href="/nail-services">
                View nail services
              </Link>
            </div>
          </article>

          <article className="category-card lash-category">
            <div className="category-overlay">
              <span className="category-letter">L</span>
              <p className="eyebrow">HAIR LEGANCE</p>
              <h3>Lash Services</h3>

              <p>
                Explore cluster lashes, individual lash extensions and eyebrow
                tinting.
              </p>

              <Link className="category-button" href="/lash-services">
                View lash services
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="home-booking-callout">
        <div>
          <p className="eyebrow">READY TO VISIT US?</p>
          <h2>Choose a treatment and reserve your time.</h2>
        </div>

        <Link className="primary-button" href="/booking">
          Book now
        </Link>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">VISIT HAIR LEGANCE</p>
          <h2>We would love to welcome you.</h2>
        </div>

        <div className="contact-details">
          <p>
            <strong>Opening hours</strong>
            <br />
            Monday-Saturday
            <br />
            09:00-17:00
          </p>

          <p>
            <strong>WhatsApp</strong>
            <br />
            073 075 4203
          </p>

          <p>
            <strong>Address</strong>
            <br />
            Shop No. 3, Terra Nova Shopping Centre, Trichardt
          </p>
        </div>
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