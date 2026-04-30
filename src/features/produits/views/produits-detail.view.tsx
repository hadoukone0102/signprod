import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import ScrollReveal from "@/shared/components/scroll-reveal";
import { PRODUITS } from "../data/produits.data";

export interface ProduitsDetailViewProps {
  slug: string;
}

function publicImageSrc(path: string) {
  return encodeURI(path);
}

export default function ProduitsDetailView({ slug }: ProduitsDetailViewProps) {
  const item = PRODUITS.find((p) => p.slug === slug);
  if (!item) notFound();

  const Icon = item.icon;
  const others = PRODUITS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow={item.category}
        title={item.title}
        description={item.shortDesc}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Produits", href: "/produits" },
          { label: item.title },
        ]}
      />

      {/* ── Contenu principal — image + texte ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
            {/* Texte gauche */}
            <ScrollReveal variant="fade-right" className="lg:col-span-7">
              <h2
                className="text-2xl font-black uppercase leading-tight tracking-tight text-[#0a1628] md:text-3xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Description du produit
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 md:text-base">
                <p>{item.shortDesc}</p>
                {item.longDesc.trim() ? <p>{item.longDesc}</p> : null}
              </div>

              <h3
                className="mt-10 text-xl font-bold uppercase tracking-tight text-[#0a1628]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item.highlightsHeading ?? "Points forts"}
              </h3>
              <ul className="mt-5 space-y-3">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 border-l-2 border-[#0097B2] bg-[#F8FAFC] p-4 text-sm text-slate-700 transition hover:translate-x-1 hover:bg-white hover:shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0097B2]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Carte produit + CTA droite */}
            <ScrollReveal variant="fade-left" delay={150} as="aside" className="lg:col-span-5">
              <div className="sticky top-24 overflow-hidden border border-slate-200 shadow-sm">
                {/* Vraie image produit en haut */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F7FA]">
                  <Image
                    src={publicImageSrc(item.ficheImage ?? item.image)}
                    alt={item.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-[2px] bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#0097B2] shadow-sm backdrop-blur">
                    <Icon className="h-3 w-3" strokeWidth={2.2} />
                    {item.category}
                  </span>
                </div>

                {/* Bloc CTA sombre */}
                <div className="relative isolate overflow-hidden bg-[#0a1628] p-6 text-white">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.25)_0%,transparent_70%)]"
                    aria-hidden
                  />
                  <h3
                    className="text-2xl font-bold uppercase leading-tight tracking-tight text-white"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/75">
                    Demandez votre devis personnalisé sous 24h.
                  </p>
                  <div className="mt-5 flex flex-col gap-2">
                    <Link
                      href="/devis"
                      className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#1abcbc] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#0a1628] transition hover:gap-3 hover:bg-[#22d8d8]"
                    >
                      Demander un devis <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-white/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {item.gallery && item.gallery.length > 0 && (
        <section className="border-t border-slate-100 bg-white py-12 md:py-16">
          <div className="container">
            <h2
              className="text-xl font-black uppercase tracking-tight text-[#0a1628] md:text-2xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Exemples de réalisations
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-[15px]">
              Aperçu de stands et espaces d’exposition confectionnés en atelier.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {item.gallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-[#F4F7FA] shadow-sm"
                >
                  <Image
                    src={publicImageSrc(src)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Vous aimerez aussi ── */}
      <section className="bg-[#F4F7FA] py-14 md:py-20">
        <div className="container">
          <ScrollReveal>
            <h2
              className="text-2xl font-black uppercase tracking-tight text-[#0a1628] md:text-3xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Vous aimerez aussi
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => {
              const OIcon = o.icon;
              return (
                <Link
                  key={o.slug}
                  href={o.href}
                  className="group flex flex-col overflow-hidden border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-[#0097B2] hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F7FA]">
                    <Image
                      src={publicImageSrc(o.image)}
                      alt={o.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-[2px] bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[1.5px] text-[#0097B2] shadow-sm">
                      <OIcon className="h-3 w-3" strokeWidth={2.2} />
                      {o.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3
                      className="text-lg font-bold uppercase leading-tight tracking-tight text-[#0a1628]"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {o.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate-600">{o.shortDesc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#0097B2] transition-all group-hover:gap-3">
                      Découvrir <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
