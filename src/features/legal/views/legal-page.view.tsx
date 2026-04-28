import { notFound } from "next/navigation";
import PageHero from "@/shared/components/page-hero.component";
import { LEGAL_PAGES } from "../data/legal.data";

export interface LegalPageViewProps {
  slug: string;
}

export default function LegalPageView({ slug }: LegalPageViewProps) {
  const data = LEGAL_PAGES[slug];
  if (!data) notFound();

  return (
    <div>
      <PageHero
        eyebrow="Informations légales"
        title={data.title}
        highlight={data.highlight}
        description={data.description}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: data.title + (data.highlight ? ` ${data.highlight}` : "") },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-10">
            <p className="border-l-2 border-[#0097B2] bg-[#F8FAFC] p-4 text-xs uppercase tracking-[2px] text-slate-500">
              Dernière mise à jour : Avril 2026
            </p>

            {data.sections.map((s) => (
              <article key={s.title}>
                <h2
                  className="text-xl font-bold uppercase tracking-tight text-[#0a1628] md:text-2xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.title}
                </h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-600">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
