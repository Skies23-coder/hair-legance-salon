"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  { file: "long-curls.jpeg", title: "Long curls", category: "Hair" },
  { file: "pink-french-tips.jpeg", title: "Pink French tips", category: "Nails" },
  { file: "braided-ponytail.jpeg", title: "Braided ponytail", category: "Hair" },
  { file: "heart-cornrows.jpeg", title: "Heart-pattern cornrows", category: "Hair" },
  { file: "green-shimmer-nails.jpeg", title: "Green shimmer nails", category: "Nails" },
  { file: "braided-double-buns.jpeg", title: "Braided double buns", category: "Hair" },
];

export default function SalonGallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof photos)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = photos.filter((photo) => filter === "All" || photo.category === filter);

  useEffect(() => {
    const element = dialog.current;
    if (!selected || !element) return;
    element.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previous;
    };
  }, [selected]);

  return (
    <section className="salon-gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">CREATED AT HAIR LEGANCE</p>
        <h2 id="gallery-title">Our work. Your inspiration.</h2>
        <p>Explore real hairstyles and nail designs created in our salon.</p>
      </div>
      <div className="salon-gallery-filters" role="group" aria-label="Filter salon work">
        {["All", "Hair", "Nails"].map((category) => (
          <button type="button" key={category} aria-pressed={filter === category}
            onClick={() => setFilter(category)}>{category}</button>
        ))}
      </div>
      <p className="salon-gallery-count" role="status">{visible.length} photos · Tap a photo to take a closer look</p>
      <div className="salon-gallery-grid">
        {visible.map((photo) => (
          <button className="salon-gallery-card" type="button" key={photo.file}
            onClick={() => setSelected(photo)} aria-label={`Enlarge ${photo.title}`}>
            <span className="salon-gallery-photo">
              <Image src={`/gallery/${photo.file}`} alt={`${photo.title} created at Hair Legance Salon`}
                fill sizes="(max-width: 600px) 88vw, (max-width: 1000px) 44vw, 29vw" />
              <span className="salon-gallery-enlarge" aria-hidden="true">View photo ↗</span>
            </span>
            <span className="salon-gallery-caption"><span>{photo.category}</span><strong>{photo.title}</strong></span>
          </button>
        ))}
      </div>
      <dialog ref={dialog} className="salon-gallery-dialog" aria-labelledby="gallery-photo-title"
        onCancel={() => setSelected(null)} onClose={() => setSelected(null)}>
        {selected && (
          <div className="salon-gallery-viewer">
            <div className="salon-gallery-viewer-bar">
              <h3 id="gallery-photo-title">{selected.title}</h3>
              <button type="button" autoFocus onClick={() => setSelected(null)}>Close ×</button>
            </div>
            <div className="salon-gallery-full-photo">
              <Image src={`/gallery/${selected.file}`} alt={`${selected.title} created at Hair Legance Salon`}
                fill sizes="(max-width: 900px) 92vw, 900px" />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
