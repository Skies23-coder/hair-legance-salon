"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";


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
  
    const [selectedService, setSelectedService] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const requestId = useRef<string | null>(null);
  const inFlight = useRef(false);
  const confirmationDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = confirmationDialog.current;
    if (!success || !dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [success]);

  useEffect(() => {
    const serviceFromUrl = new URLSearchParams(window.location.search).get(
      "service"
    );

    const serviceExists = allServices.some(
      (service) => service.name === serviceFromUrl
    );

    if (serviceFromUrl && serviceExists) {
      setSelectedService(serviceFromUrl);
    }
  }, []);

  async function submitBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const element = event.currentTarget;
    const form = new FormData(element);
    requestId.current ??= crypto.randomUUID();
    inFlight.current = true;
    setSending(true);
    setError("");
    setSuccess(false);
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId: requestId.current,
          name: String(form.get("name") || ""), phone: String(form.get("phone") || ""),
          service: String(form.get("service") || ""), date: String(form.get("date") || ""),
          time: String(form.get("time") || ""), payment: String(form.get("payment") || ""),
          notes: String(form.get("notes") || ""), website: String(form.get("website") || "") }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Booking could not be saved.");
      setSuccess(true);
      element.reset();
      setSelectedService("");
      requestId.current = null;
    } catch (error) {
      setError(error instanceof Error ? error.message : "Could not send your request. Please try again.");
    } finally {
      inFlight.current = false;
      setSending(false);
    }
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
            Hair Legance. We will contact you to confirm your appointment.
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
          {error && <p role="alert" style={{ color: "#ffb4b4" }}>{error}</p>}

          <div hidden aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
          <fieldset disabled={sending} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
          <label>
            Full name
            <input
              type="text"
              name="name" maxLength={100}
              placeholder="Enter your full name"
              required
            />
          </label>

          <label>
            Phone number
            <input
              type="tel"
              name="phone" maxLength={30}
              placeholder="Enter your phone number"
              required
            />
          </label>

          <label>
            Choose a service
            <select
  name="service"
  value={selectedService}
  onChange={(event) => setSelectedService(event.target.value)}
  required
>
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
              name="notes" maxLength={1000}
              rows={4}
              placeholder="Tell the salon anything else it should know"
            />
          </label>

          <button className="whatsapp-button" type="submit">
            {sending ? "Sending request…" : "Request appointment"}
          </button>
        </fieldset>
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
      <dialog
        ref={confirmationDialog}
        className="booking-confirmation"
        aria-labelledby="booking-confirmation-title"
        aria-describedby="booking-confirmation-description booking-confirmation-note"
        onCancel={() => setSuccess(false)}
        onClose={() => setSuccess(false)}
      >
        {success && <div className="booking-confirmation-content">
          <div className="booking-confirmation-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="29" />
              <path d="M18 33l9 9 19-20" />
            </svg>
          </div>
          <p className="booking-confirmation-brand">HAIR LEGANCE</p>
          <h2 id="booking-confirmation-title">Appointment request received</h2>
          <p id="booking-confirmation-description">
            Thank you for choosing Hair Legance. We’ll contact you soon to confirm your appointment.
          </p>
          <p id="booking-confirmation-note" className="booking-confirmation-note">
            Your appointment is awaiting confirmation. No payment has been taken.
          </p>
          <button type="button" autoFocus onClick={() => setSuccess(false)}>
            Done
          </button>
        </div>}
      </dialog>
    </main>
  );
}