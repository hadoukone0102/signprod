import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import ScrollReveal from "@/shared/components/scroll-reveal";
import { PRODUITS } from "@/features/produits/data/produits.data";
import { EXPERTISE_PILLARS, SAVOIR_FAIRE } from "../data/savoir-faire.data";

export default function SavoirFaireOverviewView() {
  return (
    <div>
      <PageHero
        eyebrow="Notre savoir-faire"
        title="Cinq expertises"
        description={
          <>
            Une seule équipe. Un seul savoir-faire.{" "}
            <span className="font-bold text-[#1abcbc]">Un contrôle total</span>.
          </>
        }
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Notre Savoir-Faire" },
        ]}
      />

      {/* Socle méthodo — cohérent avec la suite « Méthodologie » */}
      <section className="border-b border-slate-200/80 bg-white">
        <div className="container py-6 md:py-8">
          <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[3px] text-slate-500">
            De la conception à la pose
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {EXPERTISE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex gap-4 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 shadow-sm md:p-5"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0097B2]/12 text-[#0097B2]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-tight text-[#0a1628]">
                      {pillar.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accès gammes produits (aligné menu principal) */}
      <section className="border-b border-slate-200/80 bg-slate-50/90">
        <div className="container py-5 md:py-7">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-slate-500">
              Nos gammes produits
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-[15px]">
              Chaque métier se décline en produits : accédez directement à la fiche qui correspond à votre
              besoin, ou parcourez la{" "}
              <Link href="/produits" className="font-semibold text-[#0097B2] underline-offset-2 hover:underline">
                vue d’ensemble produits
              </Link>
              .
            </p>
          </div>
          <nav
            aria-label="Nos gammes produits"
            className="mx-auto mt-4 flex max-w-5xl flex-wrap items-center justify-center gap-2 md:gap-2.5"
          >
            {PRODUITS.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-left text-xs font-medium text-[#0a1628] shadow-sm transition hover:border-[#0097B2] hover:text-[#0097B2]"
              >
                {p.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Une section par métier */}
      <div className="bg-white">
        {SAVOIR_FAIRE.map((item, index) => {
          const Icon = item.icon;
          const reverse = index % 2 === 1;
          const useCheck = item.featureVariant === "check";

          return (
            <section
              key={item.slug}
              id={item.slug}
              className="scroll-mt-20 border-b border-slate-100 last:border-b-0"
            >
              <div className="container py-9 md:py-12 lg:py-14">
                <ScrollReveal>
                  <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10 xl:gap-12">
                    <div
                      className={`relative min-h-0 ${reverse ? "lg:order-2 lg:pl-4" : "lg:pr-4"}`}
                    >
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/80 shadow-lg shadow-slate-200/40">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          priority={index === 0}
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

                    <div className={reverse ? "lg:order-1" : ""}>
                      <span className="inline-flex items-baseline gap-2 font-mono text-4xl font-light leading-none text-[#0097B2]/30 md:text-5xl">
                        {String(index + 1).padStart(2, "0")}
                        <span
                          className="block h-px w-8 bg-[#1abcbc]/60 md:inline md:w-10"
                          aria-hidden
                        />
                      </span>
                      <h2
                        className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-tight text-[#0a1628] md:text-4xl lg:text-[2.4rem]"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {item.title}
                      </h2>
                      <p className="mt-3 text-lg font-medium leading-relaxed text-slate-800">
                        {item.shortDesc}
                      </p>
                      {item.lead && (
                        <p className="mt-3 text-base leading-relaxed text-slate-600">{item.lead}</p>
                      )}
                      <ul className="mt-5 space-y-2.5">
                        {item.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-slate-700"
                          >
                            {useCheck ? (
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0097B2]"
                                aria-hidden
                              />
                            ) : (
                              <span
                                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0097B2]"
                                aria-hidden
                              />
                            )}
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-sm font-medium italic leading-relaxed text-slate-700">
                        {item.closingLine}
                      </p>
                      {item.applications.length > 0 && (
                        <p className="mt-4 text-xs text-slate-500">
                          <span className="font-semibold uppercase tracking-wider text-slate-400">
                            Secteurs
                          </span>{" "}
                          : {item.applications.join(" · ")}
                        </p>
                      )}
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 rounded-[2px] border border-[#0097B2] bg-[#0097B2] px-5 py-2.5 text-xs font-bold uppercase tracking-[2px] text-white transition hover:gap-3 hover:bg-[#00b4d4]"
                        >
                          Approfondir ce métier
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href={item.relatedProductHref}
                          className="inline-flex items-center gap-2 rounded-[2px] border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[2px] text-[#0a1628] transition hover:border-[#0097B2] hover:text-[#0097B2]"
                        >
                          Voir la gamme produit
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* Méthodologie */}
      <section className="bg-[#F4F7FA] py-10 md:py-14">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
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
                Nos équipes vous accompagnent à chaque étape : étude du besoin, conception graphique,
                fabrication en atelier, pose sur site et service après-vente. Un seul interlocuteur, du
                brief à la livraison.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 rounded-[2px] bg-[#0097B2] px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-white transition hover:gap-3 hover:bg-[#00b4d4]"
                >
                  Démarrer mon projet <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/produits"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-slate-300 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-[#0a1628] transition hover:border-[#0097B2] hover:text-[#0097B2]"
                >
                  Toutes nos gammes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
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
