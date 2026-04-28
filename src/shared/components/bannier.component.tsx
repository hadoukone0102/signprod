"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONTACT } from "@/shared/constants/contact.info";

/* ─────────────────────────────────────────
   SLIDES — modifier / ajouter ici
   Le fond, les glows et les category cards
   restent STATIQUES. Seul ce contenu glisse.
───────────────────────────────────────── */
type HeroStat = { num: string; label: string };
type HeroCta = { label: string; href: string };

interface HeroSlide {
  eyebrow: string;
  title: string;        // partie blanche
  highlight: string;    // partie cyan (ligne suivante)
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  stats: HeroStat[];
}

const SLIDES: HeroSlide[] = [
  {
    eyebrow: "Expert en communication visuelle",
    title: "Votre enseigne,",
    highlight: "notre signature.",
    description:
      "Conception, fabrication et pose de solutions d'enseigne et de signalétique sur mesure à Abidjan.",
    primaryCta: { label: "Demander un devis gratuit", href: "/devis" },
    secondaryCta: { label: "Nous appeler", href: CONTACT.phone.href },
    stats: [
      { num: "+500", label: "Projets réalisés" },
      { num: "24h", label: "Délai de devis" },
      { num: "10+", label: "Années d'expertise" },
    ],
  },
  {
    eyebrow: "Nos savoir-faire",
    title: "5 expertises,",
    highlight: "1 seul interlocuteur.",
    description:
      "Enseignes lumineuses, signalétique, façades, impression grand format et habillage véhicule — tout est intégré dans nos ateliers à Abidjan.",
    primaryCta: { label: "Voir nos savoir-faire", href: "/savoir-faire" },
    secondaryCta: { label: "Nos produits", href: "/produits" },
    stats: [
      { num: "5", label: "Domaines clés" },
      { num: "100%", label: "Sur mesure" },
      { num: "24h", label: "Délai de devis" },
    ],
  },
  {
    eyebrow: "Réalisation à la une",
    title: "BBR,",
    highlight: "l'authenticité ivoirienne.",
    description:
      "Programme complet de communication visuelle pour le siège et les sites de production : enseignes lumineuses, signalétique de sécurité et habillage de façades.",
    primaryCta: { label: "Voir les réalisations", href: "/realisations" },
    secondaryCta: { label: "Démarrer un projet", href: "/devis" },
    stats: [
      { num: "5+", label: "Prestations livrées" },
      { num: "24m", label: "De façade" },
      { num: "2024", label: "Démarrage" },
    ],
  },
];

const SLIDE_INTERVAL_MS = 7000;

export default function BannierView() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = SLIDES.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Auto-rotation, pause au hover */
  useEffect(() => {
    if (paused || total <= 1) return;
    intervalRef.current = setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, SLIDE_INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, total]);

  /* Respect des préférences utilisateur (motion sickness) */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPaused(true);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#0a1628]">
      {/* ── HERO (slider sur fond statique) ── */}
      <div
        className="relative flex min-h-[560px] flex-col justify-end"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background pattern (statique) */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,#2ac4c4 60px,#2ac4c4 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#2ac4c4 60px,#2ac4c4 61px)",
          }}
          aria-hidden
        />

        {/* Glows accents (statiques) */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.18)_0%,transparent_70%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.10)_0%,transparent_70%)]"
          aria-hidden
        />

        {/* ── SLIDES (texte gauche) ── */}
        <div
          className="relative z-10 max-w-4xl px-8 pb-12 pt-20 md:px-12"
          aria-roledescription="carousel"
          aria-label="Présentation SignProd"
        >
          {/* Wrapper qui réserve l'espace du plus grand slide */}
          <div className="relative">
            {SLIDES.map((slide, i) => {
              const isActive = i === active;
              return (
                <article
                  key={i}
                  aria-hidden={!isActive}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} sur ${total}`}
                  className={`${
                    isActive
                      ? "relative opacity-100 translate-y-0"
                      : "pointer-events-none absolute inset-0 opacity-0 translate-y-3"
                  } transition-all duration-700 ease-out`}
                >
                  {/* Eyebrow */}
                  <div className="mb-6 inline-flex items-center gap-2 rounded-[2px] border border-[rgba(26,188,188,0.4)] bg-[rgba(26,188,188,0.15)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#1abcbc]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1abcbc]" />
                    {slide.eyebrow}
                  </div>

                  {/* Title */}
                  <h1
                    className="mb-4 font-black uppercase leading-none tracking-tight text-white"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "clamp(42px, 6vw, 72px)",
                    }}
                  >
                    {slide.title}
                    <br />
                    <span className="text-[#1abcbc]">{slide.highlight}</span>
                  </h1>

                  {/* Description */}
                  <p className="mb-9 max-w-xl text-[17px] leading-relaxed text-white/65">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={slide.primaryCta.href}
                      className="rounded-[2px] bg-[#1abcbc] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0a1628] transition-colors hover:bg-[#22d8d8]"
                    >
                      {slide.primaryCta.label}
                    </Link>
                    <Link
                      href={slide.secondaryCta.href}
                      className="flex items-center gap-2 rounded-[2px] border border-white/35 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/70"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1 .36 1.97.72 2.9a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.93.36 1.9.6 2.9.72A2 2 0 0122 16.92z" />
                      </svg>
                      {slide.secondaryCta.label}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ── Dots de navigation ── */}
          <div
            className="mt-10 flex items-center gap-3"
            role="tablist"
            aria-label="Sélection du slide"
          >
            {SLIDES.map((_, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Aller au slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`relative h-[2px] overflow-hidden rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-12 bg-white/15"
                      : "w-6 bg-white/15 hover:bg-white/30"
                  }`}
                >
                  {isActive && (
                    <span
                      key={`fill-${active}-${paused}`}
                      className="absolute inset-0 origin-left bg-[#1abcbc]"
                      style={{
                        animation: paused
                          ? "none"
                          : `sp-hero-progress ${SLIDE_INTERVAL_MS}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              );
            })}
            <span className="ml-2 font-mono text-[11px] tabular-nums text-white/40">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ── Stats — desktop only, change aussi avec le slide ── */}
        <div
          className="absolute bottom-12 right-12 z-10 hidden flex-col items-end gap-5 lg:flex"
          aria-live="polite"
        >
          {SLIDES[active].stats.map((s, i) => (
            <div key={`${active}-${i}`} className="text-right sp-hero-stat">
              <div
                className="text-[40px] font-black leading-none text-[#1abcbc]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {s.num}
              </div>
              <div className="text-[10px] uppercase tracking-[1.5px] text-white/45">
                {s.label}
              </div>
              {i < SLIDES[active].stats.length - 1 && (
                <div className="ml-auto mt-5 h-px w-10 bg-white/15" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORY CARDS (statiques) ── */}
      <div className="grid grid-cols-2 border-t border-[rgba(26,188,188,0.2)] md:grid-cols-4">
        {[
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1abcbc" strokeWidth={1.8} strokeLinecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            ),
            label: "Intérieur & Extérieur",
            title: "Enseignes\nLumineuses",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1abcbc" strokeWidth={1.8} strokeLinecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ),
            label: "Façade & Identité",
            title: "Concept\nFaçade",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1abcbc" strokeWidth={1.8} strokeLinecap="round">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
              </svg>
            ),
            label: "Grand Format",
            title: "Impression &\nSignalétique",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1abcbc" strokeWidth={1.8} strokeLinecap="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            ),
            label: "LED & Rétroéclairé",
            title: "Totems &\nPylônes",
          },
        ].map((cat, i) => (
          <div
            key={i}
            className="group relative flex cursor-pointer flex-col gap-2 overflow-hidden border-r border-[rgba(26,188,188,0.1)] bg-[#0d1f35] p-6 transition-colors last:border-r-0 hover:bg-[#102233] md:p-7"
          >
            <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-[#1abcbc] transition-transform duration-300 group-hover:scale-x-100" />

            <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-[4px] bg-[rgba(26,188,188,0.12)]">
              {cat.icon}
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#1abcbc]">
              {cat.label}
            </span>
            <span
              className="whitespace-pre-line font-black uppercase leading-tight text-white"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "18px",
              }}
            >
              {cat.title}
            </span>
            <span className="mt-1 text-lg text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#1abcbc]">
              →
            </span>
          </div>
        ))}
      </div>

      {/* Animation locale */}
      <style jsx>{`
        @keyframes sp-hero-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .sp-hero-stat {
          animation: sp-hero-stat-in 600ms ease-out both;
        }
        @keyframes sp-hero-stat-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
