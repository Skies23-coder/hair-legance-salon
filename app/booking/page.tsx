"use client";

import Link from "next/link";

const serviceGroups = [
  {
    category: "Hair Styles",
    services: [
      { name: "Straight Back", price: "R330 - R400" },
      { name: "Knotless Braids", price: "R580 - R800" },
      { name: "Da-Braids", price: "R450" },
      { name: "Twist Braids", price: "R530 - R1,050" },
      { name: "Straight Braids", price: "R430 - R500" },
      { name: "Straight Up", price: "R380 - R450" },
      { name: "Cornrows", price: "R210 - R230" },
      { name: "Needle Yarn", price: "R230" },
      { name: "Bonding", price: "R330" },
      { name: "Faux Locks", price: "R530" },
      { name: "Afro Twist", price: "R530" },
      { name: "Pondo", price: "R250" },
    ],
  },
  {
    category: "Relaxers",
    services: [
      { name: "Mizani", price: "R450" },
      { name: "Dark & Lovely", price: "R200" },
      { name: "Blow Out", price: "R170" },
      { name: "Restore Plus", price: "R170" },
      { name: "Precise", price: "R170" },
      { name: "Soft & Free", price: "R170" },
      { name: "Easy Waves", price: "R170" },
      { name: "Own Relaxer", price: "R150" },
    ],
  },
  {
    category: "Hair Treatments & Extras",
    services: [
      { name: "Mizani Treatment", price: "R250" },
      { name: "Pure Royal", price: "R250" },
      { name: "Other Treatment", price: "R170" },
      { name: "Wash", price: "R60" },
      { name: "Dye", price: "R150" },
      { name: "Bleach", price: "R200" },
      { name: "Undo", price: "R30 - R50" },
    ],
  },
  {
    category: "Nail Services",
    services: [
      { name: "Manicure", price: "From R280" },
      { name: "Pedicure", price: "From R200" },
      { name: "French Nails", price: "R350" },
      { name: "French + Cat Eye", price: "R400" },
      { name: "Cat Eye", price: "R350" },
      { name: "Soak Off Only", price: "R100" },
      { name: "Buff and Shine", price: "R150" },
    ],
  },
  {
    category: "Lash Services",
    services: [
      { name: "Cluster Lashes", price: "R180" },
      { name: "Individual Lashes", price: "R250 - R300" },
      { name: "Eyebrow Tint", price: "R120" },
    ],
  },
];

const allServices = serviceGroups.flatMap((group) => group.services);

export default function BookingPage() {
  function submitBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const phone = form.get("phone");
    const serviceValue = String(form.get("service"));
    const date = form.get("date");
    const time = form.get("time");
    const payment = form.get("payment");
    const notes = form.get("notes") || "None";

    const selectedService = allServices.find(
      (service) => service.name === serviceValue
    );

    const message = `
Hello Hair Legance Salon 👋

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${serviceValue}
Price: ${selectedService?.price || "Please confirm"}
Date: ${date}
Time: ${time}
Payment choice: ${payment}
Additional notes: ${notes}
    `.trim();

    const whatsappNumber = "27730754203";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

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

      <section className="page-hero booking-page-hero">
        <p className="eyebrow">HAIR LEGANCE</p>
        <h1>Book an Appointment</h1>
        <p>
          Select your treatment, preferred date, time and payment preference.
        </p>
      </section>

      <section className="booking-section standalone-booking">
        <div className="booking-information">
          <p className="eyebrow">ONLINE BOOKING</p>
          <h2>Choose your appointment</h2>

          <p>
            Complete the form and send your appointment request directly to
            Hair Legance through WhatsApp.
          </p>

          <div className="business-details">
            <p>
              <strong>Opening hours</strong>
              <br />
              Monday-Sunday
              <br />
              08:30-17:00
            </p>

            <p>
              <strong>Address</strong>
              <br />
              Shop No. 30, Terra Nova Shopping Centre, Trichardt
            </p>

            <p>
              <strong>WhatsApp</strong>
              <br />
              073 075 4203
            </p>
          </div>
        </div>

        <form className="booking-form" onSubmit={submitBooking}>
          <label>
            Full name
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </label>

          <label>
            Phone number
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </label>

          <label>
            Choose a service
            <select name="service" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>

              {serviceGroups.map((group) => (
                <optgroup key={group.category} label={group.category}>
                  {group.services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name} — {service.price}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>

          <div className="form-row">
            <label>
              Preferred date
              <input type="date" name="date" required />
            </label>

            <label>
              Preferred time
              <input
                type="time"
                name="time"
                min="09:00"
                max="17:00"
                required
              />
            </label>
          </div>

          <fieldset>
            <legend>Choose how you want to pay</legend>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="Pay at the salon"
                required
              />
              Pay at the salon
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="Confirm payment method with the salon"
              />
              Confirm payment method with the salon
            </label>
          </fieldset>

          <label>
            Additional notes
            <textarea
              name="notes"
              rows={4}
              placeholder="Tell the salon anything else it should know"
            />
          </label>

          <button className="whatsapp-button" type="submit">
            Send booking to WhatsApp
          </button>
        </form>
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