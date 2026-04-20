const EXPERTISES = [
  "Enseignes lumineuses",
  "Signaletique interieure",
  "Signaletique exterieure",
  "Impression grand format",
  "Concept facade",
  "Maintenance et mise a jour",
];

const SAVOIR_FAIRE_IMAGES = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1400&q=80",
];

export default function SavoirFairePage() {
  return (
    <div className="bg-[#F6F9FC]">
      <section className="sp-page-hero sp-page-hero--center">
        <div className="container sp-page-hero__inner">
          <p className="sp-kicker">Notre Savoir-Faire</p>
          <h1 className="sp-title max-w-4xl">Des solutions pensees pour rendre votre marque visible.</h1>
          <p className="sp-lead max-w-3xl">
            Nous combinons creativite, expertise technique et exigence de fabrication pour
            livrer des projets de communication visuelle performants.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISES.map((item) => (
            <article key={item} className="rounded-2xl border border-[#D9E5F2] bg-white p-7 shadow-[0_6px_18px_rgba(13,24,33,0.05)]">
              <h2 className="text-xl font-bold text-[#1A2B3C]">{item}</h2>
              <p className="mt-2 text-sm leading-7 text-[#5B6D83]">
                Etude, design, production et pose avec un seul interlocuteur.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2">
          {SAVOIR_FAIRE_IMAGES.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-3xl border border-[#D8E4F1]">
              <img
                src={image}
                alt={`Exemple savoir-faire ${index + 1}`}
                className="h-64 w-full object-cover md:h-80"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
