const LABELS: Record<string, string> = {
  enseignes: "Enseignes lumineuses",
  facades: "Concept facade",
  signaletique: "Signalétique",
  "stands-sur-mesure": "Stands sur mesure",
  impression: "Impression grand format",
};

type Params = { slug: string };

export default async function SavoirFaireDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const title = LABELS[slug] ?? "Savoir-faire";

  return (
    <div className="bg-[#F6F9FC]">
      <section className="sp-page-hero sp-page-hero--center">
        <div className="container sp-page-hero__inner">
          <p className="sp-kicker">Notre expertise</p>
          <h1 className="sp-title">{title}</h1>
          <p className="sp-lead max-w-3xl">
            Cette page est prete pour presenter le processus, les materiaux,
            les realisations et les recommandations liees a cette expertise.
          </p>
        </div>
      </section>
    </div>
  );
}
