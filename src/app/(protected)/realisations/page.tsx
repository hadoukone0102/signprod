"use client";

import { useState } from "react";

const BBR_IMAGES = [
  "/realisation/bbr/BBR0.jpeg",
  "/realisation/bbr/BBR1.JPG",
  "/realisation/bbr/BBR2.JPG",
  "/realisation/bbr/BBR3.JPG",
  "/realisation/bbr/BBR4.JPG",
  "/realisation/bbr/BBR5.JPG",
];

const REALISATIONS = [
  {
    title: "Projet BBR - Habillage & signaletique",
    badge: "Projet BBR",
    image: BBR_IMAGES[0],
    desc: "Realisation BBR avec habillage visuel, signaletique et finitions premium.",
    isBbr: true,
  },
  {
    title: "Facade retail et enseigne LED",
    badge: "Facade retail",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    desc: "Projet livre avec suivi qualite, respect des delais et finition premium.",
  },
  {
    title: "Signaletique corporate multi-sites",
    badge: "Signaletique corporate",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    desc: "Projet livre avec suivi qualite, respect des delais et finition premium.",
  },
  {
    title: "Habillage vitrine et marquage vehicule",
    badge: "Habillage vitrine",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
    desc: "Projet livre avec suivi qualite, respect des delais et finition premium.",
  },
  {
    title: "Totem exterieur et pylone",
    badge: "Totem exterieur",
    image:
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1200&q=80",
    desc: "Projet livre avec suivi qualite, respect des delais et finition premium.",
  },
  {
    title: "Stand evenementiel et PLV",
    badge: "Stand & PLV",
    image:
      "https://images.unsplash.com/photo-1505236732171-72a5b19c4981?auto=format&fit=crop&w=1200&q=80",
    desc: "Projet livre avec suivi qualite, respect des delais et finition premium.",
  },
  {
    title: "Parcours client et signaletique interieure",
    badge: "Signaletique interieure",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    desc: "Projet livre avec suivi qualite, respect des delais et finition premium.",
  },
];

export default function RealisationsPage() {
  const [isBbrModalOpen, setIsBbrModalOpen] = useState(false);
  const [activeBbrImage, setActiveBbrImage] = useState(BBR_IMAGES[0]);

  return (
    <div className="bg-[#F6F9FC]">
      <section className="sp-page-hero">
        <div className="container sp-page-hero__inner">
          <p className="sp-kicker">Nos Realisations</p>
          <h1 className="sp-title">Des projets concrets qui valorisent votre image.</h1>
          <p className="sp-lead max-w-3xl">
            Une selection de projets livres avec un niveau de finition professionnel,
            dans des contextes retail, corporate et evenementiels.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REALISATIONS.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-[#D8E4F1] bg-white p-0 shadow-[0_6px_18px_rgba(13,24,33,0.06)]">
              {item.isBbr ? (
                <button
                  type="button"
                  onClick={() => {
                    setActiveBbrImage(BBR_IMAGES[0]);
                    setIsBbrModalOpen(true);
                  }}
                  className="group relative block w-full cursor-zoom-in overflow-hidden"
                  aria-label="Ouvrir la galerie du projet BBR"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,26,0.06)_15%,rgba(6,16,26,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center p-5 md:p-7">
                    <span className="inline-flex h-12 w-[210px] items-center justify-center rounded-full border border-[#53cde2] bg-[#0097B2] px-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white whitespace-nowrap overflow-hidden text-ellipsis shadow-[0_12px_26px_rgba(11,25,37,0.32)] transition-all duration-300 group-hover:bg-[#00a5c4] group-hover:scale-[1.02] md:h-14 md:w-[240px]">
                      {item.badge}
                    </span>
                  </div>
                </button>
              ) : (
                <div className="group relative block w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,26,0.06)_15%,rgba(6,16,26,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center p-5 md:p-7">
                    <span className="inline-flex h-12 w-[210px] items-center justify-center rounded-full border border-[#53cde2] bg-[#0097B2] px-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white whitespace-nowrap overflow-hidden text-ellipsis shadow-[0_12px_26px_rgba(11,25,37,0.32)] transition-all duration-300 group-hover:bg-[#00a5c4] group-hover:scale-[1.02] md:h-14 md:w-[240px]">
                      {item.badge}
                    </span>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {isBbrModalOpen && (
        <div className="fixed inset-0 z-[320] flex items-center justify-center bg-black/80 px-4 py-6">
          <div className="w-full max-w-3xl rounded-2xl border border-white/15 bg-[#0f1f31] p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between gap-3 px-1 md:px-2">
              <h3 className="text-lg font-bold text-white md:text-xl">Projet BBR - Galerie photos</h3>
              <button
                type="button"
                onClick={() => setIsBbrModalOpen(false)}
                className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white hover:bg-white/10"
              >
                Fermer
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 mx-1 md:mx-2">
              <img src={activeBbrImage} alt="Projet BBR" className="h-[200px] w-full object-cover md:h-[360px]" />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 px-1 md:grid-cols-6 md:px-2">
              {BBR_IMAGES.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveBbrImage(image)}
                  className={`overflow-hidden rounded-lg border ${
                    image === activeBbrImage ? "border-[#38d5e9]" : "border-white/15"
                  }`}
                >
                  <img src={image} alt="Miniature BBR" className="h-12 w-full object-cover md:h-14" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
