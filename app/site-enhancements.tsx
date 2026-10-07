"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      ".section-heading, .service-group-heading, .detailed-service-card, .category-card, .service-callout, .home-booking-callout, .booking-information"
    ));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("site-reveal");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    targets.forEach((target) => observer.observe(target));
    const stopMotion = () => {
      if (!preference.matches) return;
      observer.disconnect();
      targets.forEach((target) => target.classList.remove("site-reveal"));
    };
    preference.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", stopMotion);
      targets.forEach((target) => target.classList.remove("site-reveal"));
    };
  }, [pathname]);

  return (
    <a
      className="floating-whatsapp"
      href="https://wa.me/27730754203?text=Hi%20Hair%20Legance%2C%20I%20have%20a%20question%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hair Legance on WhatsApp (opens in a new tab)"
    >
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M27 15.5a11 11 0 0 1-16.4 9.6L5 27l1.8-5.5A11 11 0 1 1 27 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 9.8c-.5-.4-1.3-.2-1.6.4-.7 1.4-.4 3.3.8 5.3 1.4 2.3 3.7 4.3 6.2 5.1 1.3.4 2.6.2 3.2-.6.3-.5.4-1.1 0-1.5l-2.3-1.5c-.4-.2-.8-.2-1.1.2l-.8.9c-1.7-.7-3.1-2-3.8-3.5l.8-.9c.3-.3.4-.7.2-1.1L12 9.8Z" fill="currentColor" />
      </svg>
      <span>WhatsApp us</span>
    </a>
  );
}
