import Link from "next/link";
import SalonGallery from "./salon-gallery";

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
          <source
            media="(max-width: 700px)"
            srcSet="/hair-legance-3d-cover.png"
          />
          <img
            className="animated-cover-image"
            src="/hair-legance-3d-cover.png"
            alt="Hair Legance Hair, Nail and Lash Salon"
          />
        </picture>
      </section>

      <section className="intro-section">
        <p className="eyebrow">
          HAIR, NAIL & LASH SALON · TRICHARDT
        </p>
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

      <SalonGallery />

      <section className="home-booking-callout">
        <div>
          <p className="eyebrow">READY TO VISIT US?</p>
          <h2>Choose a treatment and reserve your time.</h2>
        </div>
        <Link className="primary-button" href="/booking">
          Book now
        </Link>
      </section>

      <section
        className="salon-faq"
        id="faq"
        aria-labelledby="salon-faq-title"
      >
        <div className="section-heading">
          <p className="eyebrow">BEFORE YOUR VISIT</p>
          <h2 id="salon-faq-title">
            A little guidance before you book.
          </h2>
          <p>
            Answers to the questions you may have about your appointment.
          </p>
        </div>

        <div className="salon-faq-list">
          <details>
            <summary>How do I request an appointment?</summary>
            <div className="salon-faq-answer">
              <p>
                Choose your service, then complete the{" "}
                <Link href="/booking">appointment request form</Link>{" "}
                with your contact details, preferred date and time. You can
                also add notes for the salon.
              </p>
            </div>
          </details>

          <details>
            <summary>When is my appointment confirmed?</summary>
            <div className="salon-faq-answer">
              <p>
                The success message means we have received your request.
                Your appointment is confirmed after the salon contacts you
                and agrees on the details. Submitting the form does not
                confirm your appointment automatically.
              </p>
            </div>
          </details>

          <details>
            <summary>Can I pay at the salon?</summary>
            <div className="salon-faq-answer">
              <p>
                Yes, you can select “Pay at the salon” when requesting your
                appointment. You can also ask the salon to confirm the
                payment method with you. No payment is taken through the
                appointment request form.
              </p>
            </div>
          </details>

          <details>
            <summary>Why can prices and treatment times vary?</summary>
            <div className="salon-faq-answer">
              <p>
                Prices and durations depend on the service, your chosen
                style, hair length and the work needed. The booking summary
                shows advertised prices and estimated durations. Please
                confirm the final details with the salon before your
                treatment.
              </p>
            </div>
          </details>

          <details>
            <summary>How do I change my appointment?</summary>
            <div className="salon-faq-answer">
              <p>
                Please{" "}
                <a
                  href="https://wa.me/27730754203"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact us on WhatsApp
                </a>{" "}
                as soon as possible. Include your name, appointment date
                and the change you would like to make. The salon will
                confirm whether your preferred alternative is available.
              </p>
            </div>
          </details>

          <details>
            <summary>
              Where is the salon, and when are you open?
            </summary>
            <div className="salon-faq-answer">
              <p>
                Find us at Shop No. 30, Terra Nova Shopping Centre,
                Trichardt. Our opening hours are Monday to Sunday,
                08:30–17:00. Appointments must fit within the salon’s
                available hours.
              </p>
            </div>
          </details>
        </div>

        <p className="salon-faq-contact">
          Have another question?{" "}
          <a
            href="https://wa.me/27730754203"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with us on WhatsApp.
          </a>
        </p>
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
            Monday-Sunday
            <br />
            08:30-17:00
          </p>

          <p>
            <strong>WhatsApp</strong>
            <br />
            073 075 4203
          </p>

          <p>
            <strong>Address</strong>
            <br />
            Shop No. 30, Terra Nova Shopping Centre, Trichardt
          </p>

          <div className="salon-contact-actions">
            <a
              className="salon-contact-button"
              href="https://www.google.com/maps/dir/?api=1&destination=Hair%20Legance%20Salon%2C%20Trichardt&destination_place_id=ChIJRSusOggT6x4R_DrKaHcgFeQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Hair Legance Salon on Google Maps (opens in a new tab)"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
              Get directions
            </a>

            <a
              className="salon-contact-button salon-contact-button-outline"
              href="tel:+27730754203"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m7 3 3 5-2 2c1.3 2.8 3.2 4.7 6 6l2-2 5 3c-.4 3-2.3 4.5-5.5 3.5C9.4 18.6 5.4 14.6 3.5 8.5 2.5 5.3 4 3.4 7 3Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
              Call the salon
            </a>
          </div>
        </div>
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