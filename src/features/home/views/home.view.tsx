import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  Award,
  Users,
} from "lucide-react";
import BannierView from "@/shared/components/bannier.component";
import ScrollReveal from "@/shared/components/scroll-reveal";
import { HOME_HERO_STATS } from "@/shared/constants/site-stats";

/** Bloc « Réalisation à la une — BBR » : `1.png` en une principale, puis `2.png`, puis coup de projecteur complémentaire. */
const BBR_HOME_IMAGES = [
  { src: "/asset/realisation/BBR/1.png", alt: "Réalisation BBR — vue principale" },
  { src: "/asset/realisation/BBR/2.png", alt: "Réalisation BBR — détail" },
  { src: "/asset/realisation/BBR/BBR0.jpeg", alt: "Réalisation BBR — site et façade" },
] as const;

const SERVICES = [
  {
    title: "Stands sur mesure",
    desc: "Faites de votre stand un véritable levier d’attraction. Conception, design et fabrication qui attirent, marquent et engagent.",
    image: "/asset/produit/standsurmesur.png",
    href: "/produits/stands-sur-mesure",
  },
  {
    title: "Enseignes lumineuses",
    desc: "LED, néon, caissons rétroéclairés et lettres relief.",
    image: "/asset/produit/enseigne.png",
    href: "/savoir-faire/enseignes",
  },
  {
    title: "Signalétique",
    desc: "Intérieure, extérieure, totems et orientation.",
    image: "/asset/produit/signaletique.jpg?v=20260430",
    href: "/savoir-faire/signaletique",
  },
  {
    title: "Habillage de façade",
    desc: "Concept façade, bardage et lettres relief.",
    image: "/asset/produit/revetement1.jpg",
    href: "/produits/revetement",
  },
  {
    title: "Impression grand format",
    desc: "Bâches, vinyles, adhésifs haute définition.",
    image: "/asset/produit/impressiongrandformat.jpg",
    href: "/savoir-faire/impression",
  },
  {
    title: "Habillage véhicule",
    desc: "Covering, marquage et flotte d'entreprise.",
    image: "/asset/produit/brandingvehicule.jpg",
    href: "/produits",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Étude & conception",
    desc: "Brief, direction artistique, maquettes 2D/3D et bon à tirer.",
  },
  {
    n: "02",
    title: "Fabrication",
    desc: "Production sur mesure dans nos ateliers à Abidjan.",
  },
  {
    n: "03",
    title: "Pose & livraison",
    desc: "Installation soignée par nos équipes qualifiées.",
  },
  {
    n: "04",
    title: "SAV & maintenance",
    desc: "Suivi long terme et maintenance sur site.",
  },
];

const WHY_US = [
  { icon: Sparkles, label: "100% sur mesure" },
  { icon: Award, label: "Finition premium" },
  { icon: Clock, label: "Délais respectés" },
  { icon: Users, label: "Suivi dédié" },
  { icon: ShieldCheck, label: "Garantie produit" },
  { icon: CheckCircle2, label: "Pose certifiée" },
];

export default function HomeView() {
  return (
    <div className="flex flex-col">
      <BannierView />

      {/* ─────────────────────────────────────────
          BANDEAU CHIFFRES — séparateur visuel
      ───────────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container">
          <ScrollReveal
            stagger
            className="grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-4"
          >
            {HOME_HERO_STATS.map((s) => (
              <div key={s.label} className="px-6 py-6 text-center md:py-9">
                <p className="text-3xl font-bold tracking-tight text-[#0097B2] md:text-4xl lg:text-5xl">
                  {s.num}
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[2px] text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PRÉSENTATION — split image + texte
      ───────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-16">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* ─── Image avec effets décoratifs ─── */}
            <ScrollReveal variant="fade-right" className="relative lg:col-span-6">
              <div className="group relative">
                {/* Cadre cyan décoratif décalé en arrière-plan */}
                <div
                  className="pointer-events-none absolute -left-4 -top-4 h-full w-full border-2 border-[#0097B2] transition-all duration-500 ease-out group-hover:-left-6 group-hover:-top-6 md:-left-6 md:-top-6 md:group-hover:-left-8 md:group-hover:-top-8"
                  aria-hidden
                />
                {/* Bloc cyan plein en arrière, en bas à droite */}
                <div
                  className="pointer-events-none absolute -bottom-5 -right-5 h-32 w-32 bg-[#0097B2]/15 transition-all duration-500 ease-out group-hover:-bottom-7 group-hover:-right-7 md:-bottom-6 md:-right-6 md:h-40 md:w-40"
                  aria-hidden
                />

                {/* Image principale */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100 shadow-2xl">
                  <Image
                    src="/asset/slide/slider02.jpg"
                    alt="Atelier SignProd — fabrication d'enseignes et signalétique sur mesure"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover grayscale-[35%] transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />

                  {/* Overlay dégradé subtil pour la profondeur */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0F1A24]/30 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Badge "DEPUIS 2014" flottant en haut-gauche */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 bg-white/95 px-3.5 py-2 backdrop-blur md:left-6 md:top-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0097B2]" aria-hidden />
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#14202C]">
                      Depuis 2014
                    </span>
                  </div>
                </div>

                {/* Pastille cyan "10+ ans" en bas à droite, par-dessus l'image */}
                <div className="absolute -bottom-6 right-6 z-10 bg-[#0097B2] p-5 text-white shadow-xl transition-transform duration-500 group-hover:scale-105 md:-bottom-8 md:right-8 md:p-6 lg:p-7">
                  <p className="text-3xl font-bold leading-none md:text-4xl lg:text-5xl">
                    10
                    <span className="text-[#1abcbc]">+</span>
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[2px] text-white/85">
                    Années d&apos;expertise
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* ─── Bloc texte ─── */}
            <ScrollReveal
              variant="fade-left"
              delay={150}
              className="lg:col-span-6 lg:pl-6"
            >
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#0097B2]">
                <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
                Qui sommes-nous
              </p>
              <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-[#14202C] md:text-4xl lg:text-[2.75rem]">
                Une entreprise spécialisée en{" "}
                <span className="text-[#0097B2]">communication visuelle</span>.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 md:text-[17px]">
                <p>
                  SignProd conçoit, fabrique, installe et pose des supports de
                  communication visuelle pour les entreprises, commerces, institutions
                  et marques.
                </p>
                <p>
                  De la conception graphique à la pose finale, nous accompagnons
                  nos clients avec des solutions modernes, durables et sur mesure
                  qui transforment leurs idées en réalisations concrètes et impactantes.
                </p>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
                {WHY_US.slice(0, 4).map((w) => {
                  const Icon = w.icon;
                  return (
                    <li
                      key={w.label}
                      className="flex items-center gap-3 text-sm font-medium text-[#14202C]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0097B2]/10 text-[#0097B2]">
                        <Icon className="h-4 w-4" strokeWidth={2.2} />
                      </span>
                      {w.label}
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/savoir-faire"
                className="mt-8 inline-flex items-center gap-2 bg-[#0097B2] px-7 py-3.5 text-xs font-bold uppercase tracking-[2px] text-white transition hover:bg-[#006F85] hover:gap-3"
              >
                Notre savoir-faire
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          NOS SERVICES — grille images
      ───────────────────────────────────────── */}
      <section className="bg-[#F4F7FA] py-10 md:py-16">
        <div className="container">
          <ScrollReveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#0097B2]">
                <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
                Nos expertises
              </p>
              <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-[#14202C] md:text-4xl lg:text-[2.75rem]">
                Une expertise complète,
                <br />
                <span className="text-[#0097B2]">de la conception à la pose</span>.
              </h2>
            </div>
            <Link
              href="/savoir-faire"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#14202C] transition hover:gap-3 hover:text-[#0097B2]"
            >
              Voir tout le savoir-faire
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative block overflow-hidden bg-[#0F1A24] shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A24]/95 via-[#0F1A24]/50 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {s.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2px] text-[#1abcbc] transition-all group-hover:gap-3">
                    Découvrir
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          NOTRE PROCESSUS — 4 étapes visuelles
      ───────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-16">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#0097B2]">
              <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
              Notre processus
              <span className="h-px w-8 bg-[#0097B2]" aria-hidden />
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-[#14202C] md:text-4xl lg:text-[2.75rem]">
              Un accompagnement{" "}
              <span className="text-[#0097B2]">de bout en bout</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              Quatre étapes claires, un seul interlocuteur. De votre brief à la maintenance,
              SignProd vous garantit qualité, transparence et délais maîtrisés.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="mt-8 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="group relative bg-white p-6 transition-colors hover:bg-[#F4F7FA] md:p-8"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-5xl font-bold leading-none text-[#0097B2]/15 transition-colors group-hover:text-[#0097B2]/30 md:text-6xl">
                    {s.n}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[2px] text-slate-400">
                    Étape {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-[#14202C] md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                  {s.desc}
                </p>
                {/* Liaison entre étapes */}
                {i < STEPS.length - 1 && (
                  <span className="absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 translate-x-1/2 bg-[#0097B2]/30 lg:block" />
                )}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          RÉALISATION À LA UNE — BBR
      ───────────────────────────────────────── */}
      <section className="bg-[#0F1A24] py-10 text-white md:py-16">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <ScrollReveal variant="fade-right" className="lg:col-span-5">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#1abcbc]">
                <span className="h-px w-8 bg-[#1abcbc]" aria-hidden />
                Réalisation à la une
              </p>
              <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-[2.6rem]">
                BBR,
                <br />
                <span className="text-[#1abcbc]">l&apos;authenticité ivoirienne</span>.
              </h2>
              <p className="mt-8 text-base leading-relaxed text-white/75 md:text-[17px]">
                Programme complet de communication visuelle pour le siège et les sites de
                production : enseignes lumineuses, signalétique de sécurité et habillage
                de façades. Plus de <strong className="text-white">5 prestations</strong>{" "}
                livrées sur deux ans.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-white/10 py-5">
                <div>
                  <p className="text-2xl font-bold text-[#1abcbc]">2024</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[2px] text-white/50">
                    Démarrage
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1abcbc]">5+</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[2px] text-white/50">
                    Prestations
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1abcbc]">24m</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[2px] text-white/50">
                    De façade
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/realisations"
                  className="inline-flex items-center gap-2 bg-[#1abcbc] px-7 py-3.5 text-xs font-bold uppercase tracking-[2px] text-[#0F1A24] transition hover:gap-3 hover:bg-[#22d8d8]"
                >
                  Voir toutes les réalisations
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 border border-white/30 px-7 py-3.5 text-xs font-bold uppercase tracking-[2px] text-white transition hover:border-white hover:bg-white/10"
                >
                  Démarrer mon projet
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                <div className="relative col-span-12 aspect-[4/3] overflow-hidden md:col-span-8 md:row-span-2 md:aspect-auto">
                  <Image
                    src={BBR_HOME_IMAGES[0].src}
                    alt={BBR_HOME_IMAGES[0].alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative col-span-6 aspect-square overflow-hidden md:col-span-4">
                  <Image
                    src={BBR_HOME_IMAGES[1].src}
                    alt={BBR_HOME_IMAGES[1].alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative col-span-6 aspect-square overflow-hidden md:col-span-4">
                  <Image
                    src={BBR_HOME_IMAGES[2].src}
                    alt={BBR_HOME_IMAGES[2].alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          POURQUOI NOUS — bandeau de garanties
      ───────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <div className="container">
          <ScrollReveal stagger className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {WHY_US.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.label}
                  className="group flex flex-col items-center gap-3 border border-slate-200 bg-white p-4 text-center transition-all hover:-translate-y-1 hover:border-[#0097B2] hover:shadow-md md:p-5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0097B2]/10 text-[#0097B2] transition-colors group-hover:bg-[#0097B2] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[1.5px] text-[#14202C]">
                    {w.label}
                  </span>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CTA FINAL — image background
      ───────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#0F1A24] py-14 text-white md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/asset/slide/slider04.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A24] via-[#0F1A24]/85 to-[#0F1A24]/40" />
        </div>

        <div className="container relative z-10">
          <ScrollReveal variant="zoom-in" className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#1abcbc]">
              <span className="h-px w-8 bg-[#1abcbc]" aria-hidden />
              Démarrons votre projet
            </p>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Votre visibilité,
              <br />
              <span className="text-[#1abcbc]">notre signature</span>.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Recevez une étude personnalisée et un devis sous 24h. Aucune obligation,
              juste l&apos;avis d&apos;experts qui font ce métier depuis plus de 10 ans.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 bg-[#0097B2] px-7 py-3.5 text-xs font-bold uppercase tracking-[2px] text-white shadow-lg transition hover:bg-[#00BCD4] hover:shadow-xl"
              >
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-white/80 transition hover:text-white"
              >
                ou nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
