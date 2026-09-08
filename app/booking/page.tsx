"use client";

import Link from "next/link";

const services = [
  { name: "Wash & Blow-Dry", price: 220 },
  { name: "Silk Press", price: 350 },
  { name: "Knotless Braids", price: 650 },
  { name: "Cornrows", price: 300 },
  { name: "Hair Treatment", price: 280 },
  { name: "Wig Installation", price: 450 },
  { name: "Gel Overlay", price: 280 },
  { name: "Acrylic Full Set", price: 420 },
  { name: "Gel Manicure", price: 250 },
  { name: "Classic Pedicure", price: 300 },
  { name: "Nail Art", price: 120 },
  { name: "Acrylic Soak-Off", price: 150 },
];

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

    const selectedService = services.find(
      (service) => service.name === serviceValue
    );

    const message = `
Hello Hair Legance Salon 👋

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${serviceValue}
Price: R${selectedService?.price}
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
        </nav>

        <Link className="header-button" href="/booking">
          Book now
        </Link>
      </header>

      <section className="page-hero booking-page-hero">
        <p className="eyebrow">HAIR LEGANCE</p>
        <h1>Book an Appointment</h1>
        <p>
          Select your treatment, preferred date, time and payment option.
        </p>
      </section>

      <section className="booking-section standalone-booking">
        <div className="booking-information">
          <p className="eyebrow">ONLINE BOOKING</p>
          <h2>Choose your appointment</h2>

          <p>
            Complete the form and send your appointment details directly to
            Hair Legance through WhatsApp.
          </p>

          <div className="business-details">
            <p>
              <strong>Opening hours</strong>
              <br />
              Monday–Saturday
              <br />
              09:00–17:00
            </p>

            <p>
              <strong>Address</strong>
              <br />
              Shop No. 3, Terra Nova Shopping Centre, Trichardt
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
            <select name="service" required>
              <optgroup label="Hair Services">
                {services.slice(0, 6).map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} — R{service.price}
                  </option>
                ))}
              </optgroup>

              <optgroup label="Nail Services">
                {services.slice(6).map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} — R{service.price}
                  </option>
                ))}
              </optgroup>
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
                value="Pay 30% deposit online"
                required
              />
              Pay 30% deposit online
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="Pay full amount online"
              />
              Pay full amount online
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="Pay at the salon"
              />
              Pay at the salon
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