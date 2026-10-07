"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState } from "react";

type Service = { name: string; description: string; price: string; image: string };
type Group = { title: string; description: string; services: Service[] };

function normalize(value: string) {
  return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}

export default function ServiceSearch({ groups, placeholder }: { groups: Group[]; placeholder: string }) {
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const id = useId();
  const words = normalize(query).split(" ").filter(Boolean);
  const filtered = groups.map(group => ({
    ...group,
    services: group.services.filter(service => {
      const text = normalize(service.name + " " + service.description + " " + group.title);
      return words.every(word => text.includes(word));
    }),
  })).filter(group => group.services.length > 0);
  const count = filtered.reduce((total, group) => total + group.services.length, 0);
  function clear() { setQuery(""); input.current?.focus(); }

  return (
    <div className="service-search-area">
      <div className="service-search-controls">
        <label htmlFor={id}>Find your service</label>
        <div className="service-search-input-row">
          <input
            ref={input}
            id={id}
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder={placeholder}
            aria-describedby={id + "-results"}
          />
          {query && <button type="button" onClick={clear}>Clear</button>}
        </div>
        <p id={id + "-results"} role="status" aria-live="polite" aria-atomic="true">
          {count} {count === 1 ? "service" : "services"}{query.trim() ? " found" : " available"}
        </p>
      </div>

      {count === 0 && (
        <div className="service-search-empty">
          <h3>No matching services</h3>
          <p>Try a different name or clear your search to see all services.</p>
          <button type="button" onClick={clear}>Show all services</button>
        </div>
      )}

      {filtered.map((group, index) => (
        <section className={group.title ? "service-group" : undefined} key={group.title || index}>
          {group.title && <div className="service-group-heading">
            <p className="eyebrow">HAIR LEGANCE</p>
            <h2>{group.title}</h2>
            <p>{group.description}</p>
          </div>}
          <div className="detailed-service-grid">
            {group.services.map(service => (
              <article className="detailed-service-card" key={service.name}>
                <div className="service-card-content">
                  <div className="service-card-copy">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <Image className="service-card-photo" src={service.image}
                    alt={service.name + " service illustration"} width={100} height={100}
                    sizes="(max-width: 700px) 76px, 100px" />
                </div>
                <div className="service-card-bottom">
                  <strong>{service.price}</strong>
                  <Link className="small-book-button" href={`/booking?service=${encodeURIComponent(service.name)}`}>
                    Book now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
