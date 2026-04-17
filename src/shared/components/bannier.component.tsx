"use client";

import { useEffect, useState } from "react";

export default function BannierView() {
  const slides = [
    { image: "/slide/slider01.jpg", title: "Signprod - Communication visuelle" },
    { image: "/slide/slider02.jpg", title: "Enseignes et signaletique" },
    { image: "/slide/slider03.jpg", title: "Conception et pose sur mesure" },
    { image: "/slide/slider04.jpg", title: "Solutions facade et branding" },
    { image: "/slide/slider05.jpg", title: "Impression grand format" },
    { image: "/slide/slider06.jpg", title: "Accompagnement professionnel" },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full overflow-hidden bg-[#0a1628]">
      <div className="relative min-h-[330px] md:min-h-[430px]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,30,0.72)_0%,rgba(8,18,30,0.28)_65%,rgba(8,18,30,0.2)_100%)]" />
          </div>
        ))}

        <button
          type="button"
          onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Slide precedent"
          className="absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white md:inline-flex"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Slide suivant"
          className="absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white md:inline-flex"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Aller au slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide ? "w-8 bg-[#1abcbc]" : "w-2.5 bg-white/65 hover:bg-white/85"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}