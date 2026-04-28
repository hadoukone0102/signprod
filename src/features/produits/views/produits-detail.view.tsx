import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import { PRODUITS } from "../data/produits.data";

export interface ProduitsDetailViewProps {
  slug: string;
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

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2
                className="text-2xl font-black uppercase leading-tight tracking-tight text-[#0a1628] md:text-3xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Description du produit
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600 md:text-base">
                {item.longDesc}
              </p>

              <h3
                className="mt-10 text-xl font-bold uppercase tracking-tight text-[#0a1628]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Points forts
              </h3>
              <ul className="mt-4 space-y-3">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 border-l-2 border-[#0097B2] bg-[#F8FAFC] p-4 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0097B2]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="overflow-hidden border border-slate-200">
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#F4F7FA] to-white">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-[#0097B2] shadow-md">
                    <Icon className="h-14 w-14" strokeWidth={1.2} />
                  </div>
                </div>
                <div className="bg-[#0a1628] p-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#1abcbc]">
                    {item.category}
                  </span>
                  <h3
                    className="mt-1 text-2xl font-bold uppercase tracking-tight"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Demandez votre devis personnalisé sous 24h.
                  </p>
                  <div className="mt-5 flex flex-col gap-2">
                    <Link
                      href="/devis"
                      className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#1abcbc] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#0a1628] transition hover:bg-[#22d8d8]"
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
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FA] py-16 md:py-20">
        <div className="container">
          <h2
            className="text-2xl font-black uppercase tracking-tight text-[#0a1628] md:text-3xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Vous aimerez aussi
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => {
              const OIcon = o.icon;
              return (
                <Link
                  key={o.slug}
                  href={o.href}
                  className="group flex flex-col border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#0097B2] hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-[rgba(0,151,178,0.1)] text-[#0097B2] transition-colors group-hover:bg-[#0097B2] group-hover:text-white">
                    <OIcon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <span className="mt-4 text-[10px] font-bold uppercase tracking-[2px] text-[#0097B2]">
                    {o.category}
                  </span>
                  <h3
                    className="mt-1 text-lg font-bold uppercase leading-tight tracking-tight text-[#0a1628]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {o.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{o.shortDesc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
