import { notFound } from "next/navigation";
import PageHero from "@/shared/components/page-hero.component";
import ScrollReveal from "@/shared/components/scroll-reveal";
import { LEGAL_PAGES } from "../data/legal.data";

export interface LegalPageViewProps {
  slug: string;
}

/* Helper : transforme un titre de section en id sûr pour ancres */
function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function LegalPageView({ slug }: LegalPageViewProps) {
  const data = LEGAL_PAGES[slug];
  if (!data) notFound();

  const fullTitle = `${data.title}${data.highlight ? ` ${data.highlight}` : ""}`;

  return (
    <div>
      <PageHero
        eyebrow="Informations légales"
        title={data.title}
        highlight={data.highlight}
        description={data.description}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: fullTitle },
        ]}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* ── Sommaire latéral (sticky) ── */}
            <aside className="lg:col-span-4 lg:order-last">
              <div className="sticky top-24 space-y-5">
                <ScrollReveal variant="fade-left">
                  <nav
                    aria-label="Sommaire de la page"
                    className="border border-slate-200 bg-[#F8FAFC] p-5"
                  >
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-[#0097B2]">
                      Sommaire
                    </p>
                    <ol className="space-y-2 text-sm">
                      {data.sections.map((s, i) => {
                        const id = slugify(s.title);
                        return (
                          <li key={id}>
                            <a
                              href={`#${id}`}
                              className="group flex items-baseline gap-3 text-slate-600 transition-colors hover:text-[#0097B2]"
                            >
                              <span className="font-mono text-[11px] tabular-nums text-[#0097B2]/60 group-hover:text-[#0097B2]">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="leading-snug">{s.title}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </nav>

                  <p className="border-l-2 border-[#0097B2] bg-[#F8FAFC] p-4 text-xs uppercase tracking-[2px] text-slate-500">
                    Dernière mise à jour : Avril 2026
                  </p>
                </ScrollReveal>
              </div>
            </aside>

            {/* ── Contenu principal ── */}
            <div className="lg:col-span-8">
              <ScrollReveal stagger className="space-y-12">
                {data.sections.map((s, i) => {
                  const id = slugify(s.title);
                  return (
                    <article
                      key={id}
                      id={id}
                      className="scroll-mt-24 border-b border-slate-200 pb-10 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className="font-mono text-2xl font-light text-[#0097B2]/30 tabular-nums"
                          aria-hidden
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2
                          className="text-xl font-bold uppercase leading-tight tracking-tight text-[#0a1628] md:text-2xl"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {s.title}
                        </h2>
                      </div>
                      <div className="mt-4 space-y-3 pl-9 text-[15px] leading-relaxed text-slate-600">
                        {s.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
