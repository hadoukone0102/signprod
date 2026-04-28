import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import ScrollReveal from "@/shared/components/scroll-reveal";
import { SAVOIR_FAIRE } from "../data/savoir-faire.data";

export interface SavoirFaireDetailViewProps {
  slug: string;
}

export default function SavoirFaireDetailView({ slug }: SavoirFaireDetailViewProps) {
  const item = SAVOIR_FAIRE.find((i) => i.slug === slug);
  if (!item) notFound();

  const Icon = item.icon;
  const others = SAVOIR_FAIRE.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow="Notre savoir-faire"
        title={item.title}
        description={item.shortDesc}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Savoir-Faire", href: "/savoir-faire" },
          { label: item.title },
        ]}
      />

      {/* ── Bandeau image héro ── */}
      <section className="bg-white">
        <div className="container -mt-10 md:-mt-14">
          <ScrollReveal variant="fade-up">
            <div className="relative aspect-[16/7] w-full overflow-hidden shadow-xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-[4px] bg-[#0097B2] text-white shadow-lg md:bottom-8 md:left-8 md:h-16 md:w-16">
                <Icon className="h-7 w-7" strokeWidth={1.6} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contenu principal ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Description + features */}
            <ScrollReveal variant="fade-right" className="lg:col-span-7">
              <h2
                className="text-2xl font-black uppercase leading-tight tracking-tight text-[#0a1628] md:text-3xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Notre approche
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600 md:text-base">
                {item.longDesc}
              </p>

              <h3
                className="mt-10 text-xl font-bold uppercase tracking-tight text-[#0a1628]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Ce que nous proposons
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {item.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 border border-slate-200 bg-white p-4 text-sm text-slate-700 transition-all hover:-translate-y-0.5 hover:border-[#0097B2] hover:shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0097B2]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal variant="fade-left" delay={150} as="aside" className="lg:col-span-5">
              <div className="sticky top-24 flex flex-col gap-5">
                {/* Applications */}
                <div className="border border-slate-200 bg-[#F8FAFC] p-6">
                  <h3 className="text-xs font-bold uppercase tracking-[2px] text-[#0097B2]">
                    Applications typiques
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.applications.map((a) => (
                      <li
                        key={a}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Devis */}
                <div className="relative overflow-hidden border border-[#0097B2] bg-[#0a1628] p-6 text-white">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.25)_0%,transparent_70%)]"
                    aria-hidden
                  />
                  <h3
                    className="relative text-xl font-bold uppercase tracking-tight"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Un projet en tête ?
                  </h3>
                  <p className="relative mt-2 text-sm text-white/80">
                    Recevez une étude personnalisée et un devis sous 24h, sans
                    engagement.
                  </p>
                  <Link
                    href="/devis"
                    className="relative mt-5 inline-flex items-center gap-2 rounded-[2px] bg-[#1abcbc] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#0a1628] transition hover:gap-3 hover:bg-[#22d8d8]"
                  >
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Autres expertises ── */}
      <section className="bg-[#F4F7FA] py-14 md:py-20">
        <div className="container">
          <ScrollReveal className="flex items-end justify-between gap-4">
            <h2
              className="text-2xl font-black uppercase tracking-tight text-[#0a1628] md:text-3xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Découvrez nos autres expertises
            </h2>
            <Link
              href="/savoir-faire"
              className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#0097B2] hover:underline md:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" /> Tout voir
            </Link>
          </ScrollReveal>

          <ScrollReveal stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => {
              const OIcon = o.icon;
              return (
                <Link
                  key={o.slug}
                  href={o.href}
                  className="group relative flex flex-col overflow-hidden bg-[#0a1628] text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={o.image}
                      alt={o.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-[4px] bg-[#0097B2] text-white">
                      <OIcon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3
                      className="text-lg font-bold uppercase leading-tight tracking-tight text-white"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {o.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-white/65">{o.shortDesc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#1abcbc] transition-all group-hover:gap-3">
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
