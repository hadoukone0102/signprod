import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import ScrollReveal from "@/shared/components/scroll-reveal";
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

      {/* ── Grille produits ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <ScrollReveal stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUITS.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.slug}
                  href={p.href}
                  className="group relative flex flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#0097B2] hover:shadow-xl"
                >
                  {/* Vraie image produit */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F7FA]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Pastille catégorie */}
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-[2px] bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#0097B2] shadow-sm backdrop-blur">
                      <Icon className="h-3 w-3" strokeWidth={2.2} />
                      {p.category}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3
                      className="text-2xl font-bold uppercase leading-tight tracking-tight text-[#0a1628]"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <div className="mt-2 flex flex-1 flex-col gap-2">
                      <p className="text-sm leading-relaxed text-slate-600">
                        {p.shortDesc}
                      </p>
                      {p.slug === "stands-sur-mesure" && (
                        <p className="text-sm leading-relaxed text-slate-600">
                          {p.longDesc}
                        </p>
                      )}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#0097B2] transition-all group-hover:gap-3">
                      Voir le produit <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Barre cyan en bas au hover */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-[#0097B2] transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden
                  />
                </Link>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Sur mesure ── */}
      <section className="relative isolate overflow-hidden bg-[#0a1628] py-14 text-white md:py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.18)_0%,transparent_70%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.10)_0%,transparent_70%)]"
          aria-hidden
        />

        <div className="container relative">
          <ScrollReveal className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#1abcbc]">
                <span className="h-px w-8 bg-[#1abcbc]" aria-hidden />
                Sur mesure
              </span>
              <h2
                className="mt-3 text-2xl font-black uppercase tracking-tight text-white md:text-3xl lg:text-4xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Vous ne trouvez pas votre produit ?
              </h2>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                Nous concevons aussi des solutions{" "}
                <span className="font-semibold text-[#1abcbc]">
                  100 % sur mesure
                </span>
                . Parlez-nous de votre projet.
              </p>
            </div>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-[2px] bg-[#1abcbc] px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-[#0a1628] transition hover:gap-3 hover:bg-[#22d8d8]"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
