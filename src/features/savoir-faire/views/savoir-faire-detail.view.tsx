import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
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

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex h-16 w-16 items-center justify-center rounded-[4px] bg-[rgba(0,151,178,0.1)] text-[#0097B2]">
                <Icon className="h-8 w-8" strokeWidth={1.6} />
              </div>
              <h2
                className="mt-6 text-2xl font-black uppercase leading-tight tracking-tight text-[#0a1628] md:text-3xl"
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
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0097B2]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5">
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

              <div className="mt-6 border border-[#0097B2] bg-[#0a1628] p-6 text-white">
                <h3
                  className="text-xl font-bold uppercase tracking-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Un projet en tête ?
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Recevez une étude personnalisée et un devis sous 24h, sans engagement.
                </p>
                <Link
                  href="/devis"
                  className="mt-5 inline-flex items-center gap-2 rounded-[2px] bg-[#1abcbc] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#0a1628] transition hover:bg-[#22d8d8]"
                >
                  Demander un devis <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FA] py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between">
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
              <ArrowLeft className="h-4 w-4" /> Retour
            </Link>
          </div>

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
                  <h3
                    className="mt-4 text-lg font-bold uppercase leading-tight tracking-tight text-[#0a1628]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {o.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{o.shortDesc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#0097B2]">
                    Découvrir <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
