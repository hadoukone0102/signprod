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
        title="Cinq expertises"
        highlight="intégrées en atelier"
        description="De l’enseigne à la façade, en passant par la signalétique et l’impression grand format : une équipe, un cahier des charges, des visuels pour chaque métier. Parcourez la présentation ci-dessous puis accédez au détail de chaque domaine."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Notre Savoir-Faire" },
        ]}
      />

      {/* Accès rapide (ancres) */}
      <section className="border-b border-slate-200/80 bg-slate-50/90">
        <div className="container py-6">
          <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[3px] text-slate-500">
            Accès direct
          </p>
          <nav
            aria-label="Expertises"
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
          >
            {SAVOIR_FAIRE.map((item) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-[#0a1628] shadow-sm transition hover:border-[#0097B2] hover:text-[#0097B2]"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Présentation : une section par expertise, visuel + texte */}
      <div className="bg-white">
        {SAVOIR_FAIRE.map((item, index) => {
          const Icon = item.icon;
          const reverse = index % 2 === 1;
          const preview = item.features.slice(0, 3);

          return (
            <section
              key={item.slug}
              id={item.slug}
              className="scroll-mt-24 border-b border-slate-100 last:border-b-0"
            >
              <div className="container py-14 md:py-20 lg:py-24">
                <ScrollReveal>
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                    {/* Bloc visuel */}
                    <div
                      className={`relative min-h-0 ${reverse ? "lg:order-2 lg:pl-4" : "lg:pr-4"}`}
                    >
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/80 shadow-lg shadow-slate-200/40">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0a1628]/20 to-transparent"
                          aria-hidden
                        />
                        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-[#0097B2] shadow-md ring-1 ring-slate-200/60">
                          <Icon className="h-6 w-6" strokeWidth={1.75} />
                        </div>
                      </div>
                    </div>

                    {/* Texte */}
                    <div className={reverse ? "lg:order-1" : ""}>
                      <span className="inline-flex items-baseline gap-2 font-mono text-4xl font-light leading-none text-[#0097B2]/30 md:text-5xl">
                        {String(index + 1).padStart(2, "0")}
                        <span
                          className="block h-px w-8 bg-[#1abcbc]/60 md:inline md:w-10"
                          aria-hidden
                        />
                      </span>
                      <h2
                        className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-tight text-[#0a1628] md:text-4xl lg:text-[2.4rem]"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {item.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-slate-600">
                        {item.shortDesc}
                      </p>
                      <ul className="mt-6 space-y-2.5">
                        {preview.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-slate-700"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0097B2]"
                              aria-hidden
                            />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      {item.applications.length > 0 && (
                        <p className="mt-6 text-xs text-slate-500">
                          <span className="font-semibold uppercase tracking-wider text-slate-400">
                            Secteurs
                          </span>{" "}
                          : {item.applications.slice(0, 5).join(" · ")}
                        </p>
                      )}
                      <Link
                        href={item.href}
                        className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#0097B2] transition hover:gap-3"
                      >
                        Lire le détail
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* Méthodologie */}
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
