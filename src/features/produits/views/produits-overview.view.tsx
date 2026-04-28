import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import { PRODUITS } from "../data/produits.data";

export default function ProduitsOverviewView() {
  return (
    <div>
      <PageHero
        eyebrow="Nos produits"
        title="Une gamme complète"
        highlight="pour votre visibilité"
        description="Enseignes, totems, signalétique, impression grand format : SignProd vous propose des produits adaptés à tous vos besoins de communication visuelle."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Nos Produits" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUITS.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.slug}
                  href={p.href}
                  className="group relative flex flex-col overflow-hidden border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-[#0097B2] hover:shadow-lg"
                >
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#F4F7FA] to-white">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#0097B2] shadow-md transition-all group-hover:scale-110 group-hover:bg-[#0097B2] group-hover:text-white">
                      <Icon className="h-9 w-9" strokeWidth={1.4} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#0097B2]">
                      {p.category}
                    </span>
                    <h3
                      className="mt-2 text-2xl font-bold uppercase leading-tight tracking-tight text-[#0a1628]"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.shortDesc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#0097B2] transition-transform group-hover:translate-x-1">
                      Voir le produit <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1628] py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2
                className="text-2xl font-black uppercase tracking-tight text-white md:text-3xl lg:text-4xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Vous ne trouvez pas votre produit ?
              </h2>
              <p className="mt-2 text-sm text-white/70 md:text-base">
                Nous concevons aussi des solutions <span className="text-[#1abcbc]">100% sur mesure</span>. Parlez-nous de votre projet.
              </p>
            </div>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-[2px] bg-[#1abcbc] px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-[#0a1628] transition hover:bg-[#22d8d8]"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
