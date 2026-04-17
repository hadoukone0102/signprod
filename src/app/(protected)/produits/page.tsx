const PRODUITS = [
  {
    name: "Revetement de facades",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Enseignes lumineuses",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Signaletique",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Totems et drapeaux",
    image:
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Agencement et decoration",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Display et marquage de vehicule",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Impression grand format",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Stands et PLV",
    image:
      "https://images.unsplash.com/photo-1505236732171-72a5b19c4981?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Cover style",
    image:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Stations services",
    image:
      "https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProduitsPage() {
  return (
    <div className="bg-[#F6F9FC]">
      <section className="sp-page-hero">
        <div className="container sp-page-hero__inner">
          <p className="sp-kicker">Nos Produits</p>
          <h1 className="sp-title max-w-4xl">Faites votre choix parmi nos solutions de communication visuelle.</h1>
          <p className="sp-lead max-w-3xl">
            Nous concevons et fabriquons des produits durables et adaptes a votre image de marque,
            de l&apos;enseigne lumineuse au stand evenementiel.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Enseignes", "Signaletique", "Impression", "Totems", "Display", "Habillage"].map((chip) => (
              <span key={chip} className="rounded-full border border-[#D9E4EF] bg-white px-4 py-2 text-sm text-[#334B61]">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUITS.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-2xl border border-[#D9E5F2] bg-white shadow-[0_6px_18px_rgba(13,24,33,0.06)]"
            >
              <img src={item.image} alt={item.name} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0097B2]">Produit Signprod</p>
                <h2 className="mt-2 text-xl font-bold text-[#1A2B3C]">{item.name}</h2>
                <p className="mt-2 text-sm leading-7 text-[#5E6F85]">
                  Solution sur mesure avec etude, fabrication et pose professionnelle.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
