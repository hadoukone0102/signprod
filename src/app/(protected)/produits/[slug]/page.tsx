const LABELS: Record<string, string> = {
  "enseignes-led": "Enseignes LED",
  totems: "Totems et pylones",
  vitrines: "Vitrines et adhesifs",
  kakemono: "Kakemono et roll-up",
  baches: "Baches et banderoles",
  "signaletique-routiere": "Signaletique routiere",
};

type Params = { slug: string };

export default async function ProduitDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const title = LABELS[slug] ?? "Produit";

  return (
    <div className="bg-[#F6F9FC]">
      <section className="sp-page-hero">
        <div className="container sp-page-hero__inner">
          <p className="sp-kicker">Detail produit</p>
          <h1 className="sp-title">{title}</h1>
          <p className="sp-lead max-w-3xl">
            Cette page est prete pour integrer les visuels, les caracteristiques techniques
            et les options de personnalisation de ce produit.
          </p>
        </div>
      </section>
    </div>
  );
}
