import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/">
          Hair Legance
        </Link>

        <nav>
          <Link href="#services">Services</Link>
          <Link href="/hair-services">Hair</Link>
          <Link href="/nail-services">Nails</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <Link className="header-button" href="/booking">
          Book now
        </Link>
      </header>

      <section className="responsive-hero" id="home">
        <picture>
          <source
            media="(max-width: 700px)"
            srcSet="/hair-legance-mobile.png"
          />

          <img
            src="/hair-legance-desktop.png"
            alt="Hair Legance Hair and Nail Salon"
          />
        </picture>
      </section>

      <section className="intro-section">
        <p className="eyebrow">HAIR & NAIL SALON · TRICHARDT</p>
        <h1>Beauty, handled with care.</h1>

        <p>
          Professional hair and nail treatments in a welcoming and elegant
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
                Explore braids, treatments, styling, wig installations and
                more.
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
                Explore acrylic nails, gel treatments, manicures, pedicures and
                nail art.
              </p>

              <Link className="category-button" href="/nail-services">
                View nail services
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
            Monday–Saturday
            <br />
            09:00–17:00
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