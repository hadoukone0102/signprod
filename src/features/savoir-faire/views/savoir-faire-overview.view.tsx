import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import ScrollReveal from "@/shared/components/scroll-reveal";
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

      {/* ── Grille des expertises (image-driven) ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <ScrollReveal stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SAVOIR_FAIRE.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group relative flex flex-col overflow-hidden bg-[#0a1628] text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image de fond avec zoom au hover */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Overlay sombre permanent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />

                    {/* Pastille icône cyan en haut-gauche */}
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#0097B2] text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Contenu textuel */}
                  <div className="flex flex-1 flex-col p-7">
                    <h3
                      className="text-2xl font-bold uppercase leading-tight tracking-tight text-white"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                      {item.shortDesc}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#1abcbc] transition-all group-hover:gap-3">
                      En savoir plus <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Barre cyan au hover (en bas) */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-[#1abcbc] transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden
                  />
                </Link>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Méthodologie ── */}
      <section className="bg-[#F4F7FA] py-14 md:py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal variant="fade-right">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#0097B2]">
                <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
                Méthodologie
              </span>
              <h2
                className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight text-[#0a1628] md:text-4xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Un accompagnement{" "}
                <span className="text-[#0097B2]">de bout en bout</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Nos équipes vous accompagnent à chaque étape : étude du besoin,
                conception graphique, fabrication en atelier, pose sur site et
                service après-vente. Un seul interlocuteur, du brief à la livraison.
              </p>
              <Link
                href="/devis"
                className="mt-8 inline-flex items-center gap-2 rounded-[2px] bg-[#0097B2] px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-white transition hover:gap-3 hover:bg-[#00b4d4]"
              >
                Démarrer mon projet <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={150}>
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
                    className="flex items-start gap-3 border-l-2 border-[#0097B2] bg-white p-4 text-sm text-slate-700 shadow-sm transition hover:translate-x-1 hover:shadow-md"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0097B2]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
