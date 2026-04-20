import BannierView from "@/shared/components/bannier.component";
import ScrollReveal from "@/shared/components/scroll-reveal";
import {
  Lightbulb,
  Hammer,
  PenTool,
  Truck,
  ShieldCheck,
  Sparkles,
  Quote,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";
import Link from "next/link";

export default function HomeView() {
  const stats = [
    { value: "10+", label: "Annees d'experience" },
    { value: "500+", label: "Projets realises" },
    { value: "24h", label: "Reponse devis" },
    { value: "100%", label: "Sur mesure" },
  ];

  const services = [
    {
      icon: Lightbulb,
      title: "Enseignes lumineuses",
      desc: "Enseignes LED, lettres boitiers, caissons retro-eclaires pour une visibilite jour et nuit.",
    },
    {
      icon: PenTool,
      title: "Signaletique",
      desc: "Signaletique interieure et exterieure, totems, plaques professionnelles et orientation.",
    },
    {
      icon: Sparkles,
      title: "Impression grand format",
      desc: "Banderoles, kakemonos, vitrophanie, habillage vehicule et stand evenementiel.",
    },
    {
      icon: Hammer,
      title: "Habillage facade",
      desc: "Bardage, panneaux composites et concept facade pour donner une identite forte a votre point de vente.",
    },
    {
      icon: Building2,
      title: "Stands & expositions",
      desc: "Conception et fabrication de stands, supports retail et amenagement evenementiel.",
    },
    {
      icon: Truck,
      title: "Pose & maintenance",
      desc: "Installation professionnelle, entretien et maintenance preventive de vos supports.",
    },
  ];

  const realisations = [
    { title: "Projet BBR", image: "/realisation/bbr/BBR0.jpeg", tag: "Habillage & signaletique" },
    { title: "Signaletique corporate", image: "/slide/slider05.jpg", tag: "Tertiaire" },
    { title: "Habillage vitrine", image: "/slide/slider06.jpg", tag: "Retail" },
  ];

  const reasons = [
    { title: "Materiaux premium", desc: "Selection rigoureuse pour des realisations durables et esthetiques." },
    { title: "Equipe experte", desc: "Designers, techniciens et poseurs reunis sous un meme toit." },
    { title: "Delais maitrises", desc: "Une production en atelier avec un suivi clair a chaque etape." },
    { title: "Service complet", desc: "Du conseil a la pose, un interlocuteur unique pour votre projet." },
  ];

  const process = [
    { step: "01", title: "Brief", desc: "Analyse de vos besoins, de votre emplacement et de vos objectifs." },
    { step: "02", title: "Conception", desc: "Proposition graphique et technique adaptee a votre activite." },
    { step: "03", title: "Fabrication", desc: "Production en atelier avec controle qualite sur chaque element." },
    { step: "04", title: "Pose", desc: "Installation professionnelle et verification finale sur site." },
  ];

  const sectors = [
    "Retail et boutiques",
    "Banques et assurances",
    "Hotels et restauration",
    "Immobilier et BTP",
    "Sante et education",
    "Industrie et logistique",
  ];

  return (
    <div className="flex flex-col gap-6 bg-[#F5F8FC] md:gap-10">
      <BannierView />

      {/* QUI SOMMES NOUS */}
      <section className="relative overflow-x-hidden bg-white py-16 md:py-24">
        {/* decorative backdrop */}
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#0097B2]/5 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#FF7A00]/5 blur-3xl" />

        <div className="container relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            {/* TEXT */}
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-[#0097B2]" />
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0097B2]">
                  Qui sommes-nous
                </p>
              </div>

              <h2 className="mt-6 text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-[#0F2235] md:mt-7 md:text-[2.25rem] lg:text-[2.5rem]">
                Fabricant de supports visuels pour{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#0097B2]">stand, boutique</span>
                  <span className="absolute inset-x-0 bottom-1 -z-0 h-2 bg-[#0097B2]/10" />
                </span>{" "}
                et espace professionnel.
              </h2>

              <p className="mt-7 max-w-xl text-[0.95rem] leading-[1.85] text-[#556984] md:mt-8">
                Nous concevons et realisons vos enseignes, solutions de signaletique et supports
                d&apos;impression grand format, pour toutes les exigences d&apos;exposition et de visibilite.
              </p>

              <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4">
                {[
                  { icon: ShieldCheck, label: "Materiaux premium" },
                  { icon: Sparkles, label: "Finition soignee" },
                  { icon: PenTool, label: "Conception sur mesure" },
                  { icon: Truck, label: "Pose & maintenance" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.label}
                      className="flex items-center gap-3 text-[0.9rem] font-medium text-[#1A2B3C]"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E6F6FA] text-[#0097B2]">
                        <Icon className="h-4 w-4" />
                      </span>
                      {item.label}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
                <Link href="/devis" className="btn btn-primary">
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/realisations"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#0F2235] hover:text-[#0097B2]"
                >
                  Voir nos realisations
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D8E4F1] text-[#0F2235] transition-all group-hover:border-[#0097B2] group-hover:bg-[#0097B2] group-hover:text-white">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </div>

            {/* IMAGE + badge — animation à l’entrée dans le viewport au scroll */}
            <ScrollReveal className="relative">
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_-20px_rgba(15,34,53,0.25)]">
                <img
                  src="/slide/slider03.jpg"
                  alt="Atelier Signprod"
                  className="h-[340px] w-full object-cover md:h-[460px] lg:h-[520px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(6,16,26,0.5)_100%)]" />

                <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-center md:inset-x-auto md:bottom-6 md:left-1/2 md:w-max md:max-w-[calc(100%-2rem)] md:-translate-x-1/2">
                  <div className="flex w-full max-w-md items-center gap-3 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 shadow-[0_12px_32px_rgba(15,34,53,0.2)] backdrop-blur-sm sm:gap-4 sm:px-5 sm:py-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F2235] text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
                      10+
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-sm font-semibold text-[#0F2235] sm:text-[0.95rem]">
                        Annees d&apos;experience
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#5A6B82] sm:text-[11px]">
                        Enseignes & signaletique
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F5F8FC] py-16 md:py-24">
        <div className="container">
          <div className="sp-section-head">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0097B2]">
                Nos expertises
              </p>
              <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
            </div>
            <h2 className="sp-section-head__title text-2xl md:text-[2rem]">
              Une offre complete pour votre image de marque.
            </h2>
            <p className="sp-section-head__lead">
              De la conception a la pose, nous gerons l&apos;ensemble de la chaine de production
              pour vous garantir un resultat homogene et professionnel.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-[#DCE6F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0097B2]/40 hover:shadow-[0_18px_36px_rgba(13,24,33,0.10)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F6FA] text-[#0097B2] transition-colors group-hover:bg-[#0097B2] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-base font-semibold text-[#1A2B3C]">{service.title}</h3>
                  <p className="text-[0.9rem] leading-[1.75] text-[#5A6B82]">{service.desc}</p>
                  <Link
                    href="/produits"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#0097B2] hover:text-[#006F85]"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHIFFRES CLES — même structure que « Nos expertises » (centrage + rythme) */}
      <section className="relative overflow-x-hidden bg-[#0B1829] py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #38d5e9 0px, transparent 40%), radial-gradient(circle at 80% 80%, #0097B2 0px, transparent 45%)",
          }}
        />
        <div className="container relative">
          <div className="sp-section-head sp-section-head--kpi">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#7dd3fc]" aria-hidden />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#7dd3fc]">
                Indicateurs cles
              </p>
              <span className="h-px w-8 bg-[#7dd3fc]" aria-hidden />
            </div>
            <h2 className="sp-section-head__title text-2xl md:text-[2rem]">
              Une execution fiable, mesurable et orientee resultat.
            </h2>
            <p className="sp-section-head__lead">
              Des reperes concrets sur notre capacite a repondre vite, livrer en qualite et
              accompagner votre projet de bout en bout.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:mt-20 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-9 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:px-5 sm:py-10 md:gap-4 md:px-6 md:py-11"
              >
                <p className="text-3xl font-bold tabular-nums tracking-tight text-white md:text-[2.35rem]">
                  {stat.value}
                </p>
                <p className="max-w-[14ch] text-[0.8125rem] font-medium uppercase leading-snug tracking-[0.12em] text-white/92 md:max-w-none md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REALISATIONS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0097B2]">Nos realisations</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A2B3C] md:text-[2rem]">
                Des projets concrets qui valorisent votre image.
              </h2>
            </div>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0097B2] hover:text-[#006F85]"
            >
              Voir toutes nos realisations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((item) => (
              <Link
                key={item.title}
                href="/realisations"
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,26,0.05)_30%,rgba(6,16,26,0.78)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#38d5e9]">
                    {item.tag}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-white md:text-lg">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI SIGNPROD */}
      <section className="bg-[#F5F8FC] py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/slide/slider04.jpg"
                alt="Atelier Signprod"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,34,53,0.10)_0%,rgba(15,34,53,0.45)_100%)]" />
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0F2235] shadow">
                <ShieldCheck className="h-4 w-4 text-[#0097B2]" />
                Atelier integre
              </div>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0097B2]">Pourquoi Signprod</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A2B3C] md:text-[2rem]">
                Un partenaire fiable pour votre communication visuelle.
              </h2>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-[#5A6B82]">
                Notre equipe internalise toutes les etapes du projet : conception, fabrication, pose
                et maintenance. Vous beneficiez d&apos;un seul interlocuteur, d&apos;une qualite constante
                et d&apos;un service reactif.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <li
                    key={reason.title}
                    className="flex gap-3 rounded-xl border border-[#DCE6F0] bg-white p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0097B2]" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2B3C]">{reason.title}</p>
                      <p className="mt-1 text-[0.8rem] leading-[1.7] text-[#5A6B82]">{reason.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="sp-section-head">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0097B2]">
                Notre methode
              </p>
              <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
            </div>
            <h2 className="sp-section-head__title text-2xl md:text-[2rem]">
              Un accompagnement simple, rapide et fiable.
            </h2>
            <p className="sp-section-head__lead">
              Du brief a la pose finale, nous suivons une methode claire pour garantir
              qualite, delais et coherence visuelle sur chaque projet.
            </p>
          </div>

          <div className="relative mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <article
                key={item.step}
                className="relative rounded-2xl border border-[#DCE6F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(13,24,33,0.08)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F2235] text-sm font-semibold text-white">
                    {item.step}
                  </span>
                  <span className="hidden h-px flex-1 bg-[#E3EAF2] lg:block" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1A2B3C]">{item.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-[1.75] text-[#5A6B82]">{item.desc}</p>
                {index < process.length - 1 && (
                  <span className="absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-[#0097B2]/30 lg:block" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="bg-[#F5F8FC] py-16 md:py-20">
        <div className="container">
          <div className="sp-section-head">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0097B2]">
                Secteurs accompagnes
              </p>
              <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
            </div>
            <h2 className="sp-section-head__title text-2xl md:text-[2rem]">
              Nous adaptons chaque design a votre activite.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {sectors.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#DCE6F0] bg-white px-4 py-5 text-center text-[0.85rem] font-medium text-[#21354B] transition-colors hover:border-[#0097B2] hover:text-[#0097B2]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMOIGNAGE */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#DCE6F0] bg-[#F8FBFF] px-6 py-10 text-center md:px-12 md:py-14">
            <Quote className="mx-auto h-9 w-9 text-[#0097B2]" />
            <p className="mx-auto mt-8 max-w-[min(52ch,100%)] text-base font-light leading-[1.85] text-[#1A2B3C] md:mt-10 md:text-lg md:leading-[1.8]">
              &laquo; Signprod a su comprendre notre identite et la traduire visuellement avec
              une qualite d&apos;execution remarquable. Equipe reactive, conseils pertinents
              et finitions impeccables. &raquo;
            </p>
            <div className="mt-8 md:mt-10">
              <p className="text-sm font-semibold text-[#1A2B3C]">Direction Marketing</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#5A6B82]">Client retail - Abidjan</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
