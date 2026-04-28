import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import { SAVOIR_FAIRE } from "../data/savoir-faire.data";

export default function SavoirFaireOverviewView() {
  return (
    <div>
      <PageHero
        eyebrow="Notre savoir-faire"
        title="Maîtriser chaque étape"
        highlight="de votre projet"
        description="De la conception graphique à la pose finale, SignProd intervient sur l'ensemble des métiers de la communication visuelle."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Notre Savoir-Faire" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SAVOIR_FAIRE.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group flex flex-col border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#0097B2] hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[4px] bg-[rgba(0,151,178,0.1)] text-[#0097B2] transition-colors group-hover:bg-[#0097B2] group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3
                    className="mt-5 text-2xl font-bold uppercase leading-tight tracking-tight text-[#0a1628]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.shortDesc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#0097B2] transition-transform group-hover:translate-x-1">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FA] py-16 md:py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#0097B2]">
                <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
                Méthodologie
              </span>
              <h2
                className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight text-[#0a1628] md:text-4xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Un accompagnement <span className="text-[#0097B2]">de bout en bout</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Nos équipes vous accompagnent à chaque étape : étude du besoin, conception graphique, fabrication en atelier, pose sur site et service après-vente. Un seul interlocuteur, du brief à la livraison.
              </p>
              <Link
                href="/devis"
                className="mt-6 inline-flex items-center gap-2 rounded-[2px] bg-[#0097B2] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#00b4d4]"
              >
                Démarrer mon projet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <ul className="space-y-3">
              {[
                "Étude technique et conseil personnalisé",
                "Maquettes 2D / 3D avant production",
                "Fabrication dans nos ateliers à Abidjan",
                "Pose réalisée par nos équipes qualifiées",
                "Service après-vente et maintenance",
                "Garantie pièces et main-d'œuvre",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 border-l-2 border-[#0097B2] bg-white p-4 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0097B2]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
