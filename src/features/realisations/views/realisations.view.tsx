"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react";
import PageHero from "@/shared/components/page-hero.component";
import Modal from "@/shared/components/modal.component";
import { SITE_PROJECTS_LIVRES_SHORT } from "@/shared/constants/site-stats";
import type { Project } from "../data/projects.data";

/** Chemins publics avec espaces → URI valide pour `next/image`. */
function publicImageSrc(path: string) {
  return encodeURI(path);
}

type TypeFilter = "tous" | "societe" | "thematique";

export interface RealisationsViewProps {
  projects: Project[];
}

export default function RealisationsView({ projects }: RealisationsViewProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("tous");

  const countSocietes = useMemo(
    () => projects.filter((p) => p.kind === "societe").length,
    [projects],
  );
  const projectsToShow = useMemo(() => {
    if (typeFilter === "societe")
      return projects.filter((p) => p.kind === "societe");
    if (typeFilter === "thematique")
      return projects.filter((p) => p.kind === "dossier");
    const marques = projects.filter((p) => p.kind === "societe");
    const thematique = projects.filter((p) => p.kind === "dossier");
    return [...marques, ...thematique];
  }, [typeFilter, projects]);

  const totalRealisations = useMemo(
    () => projects.reduce((acc, p) => acc + p.realisations.length, 0),
    [projects],
  );

  const countDossiers = useMemo(
    () => projects.filter((p) => p.kind === "dossier").length,
    [projects],
  );

  /** Visuels uniques par référence (couverture + galerie, sans doublon). */
  const totalVisuels = useMemo(
    () =>
      projects.reduce((acc, p) => {
        const urls = new Set<string>();
        if (p.cover.image) urls.add(p.cover.image);
        for (const u of p.gallery ?? []) urls.add(u);
        return acc + urls.size;
      }, 0),
    [projects],
  );

  return (
    <div>
      <PageHero
        eyebrow="Nos réalisations"
        title="Nos clients,"
        highlight="leurs projets."
        description={`${SITE_PROJECTS_LIVRES_SHORT} (chiffre cohérent avec l’accueil). Cette galerie : ${countSocietes} marques partenaires, ${countDossiers} dossiers thématiques, ${totalRealisations} prestations illustrées, ${totalVisuels} visuels. Cliquez sur un aperçu pour découvrir le détail des prestations.`}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Nos Réalisations" },
        ]}
      />

      {/* ── Filtres ── */}
      <section className="bg-white pt-16 md:pt-20">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[10px] font-medium uppercase tracking-[3px] text-[#14202C]/50">
              Affichage
            </span>
            {(
              [
                ["Tous", "tous" as const],
                ["Sociétés", "societe" as const],
                ["Thématique", "thematique" as const],
              ] as const
            ).map(([label, value]) => (
              <button
                key={value}
                type="button"
                onClick={() => setTypeFilter(value)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-[1.5px] transition ${
                  typeFilter === value
                    ? "bg-[#14202C] text-white"
                    : "border border-[#14202C]/15 bg-white text-[#14202C]/70 hover:border-[#0097B2] hover:text-[#0097B2]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-12">
        <div className="grid grid-cols-1 gap-px bg-[#0F1A24] sm:grid-cols-2 lg:grid-cols-3">
          {projectsToShow.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              onOpen={() => setActiveProject(p)}
            />
          ))}
        </div>

        {projectsToShow.length === 0 && (
          <div className="container">
            <p className="mt-10 text-center text-sm text-[#14202C]/60">
              Aucun projet pour ce filtre pour le moment.
            </p>
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0F1A24] py-20 text-white md:py-24">
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <p className="text-3xl font-light leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                Et si votre projet
                <br />
                était notre prochaine{" "}
                <span className="font-bold italic text-[#1abcbc]">réussite</span>&nbsp;?
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
              <Link
                href="/devis"
                className="group inline-flex items-baseline gap-3 text-lg font-light text-white md:text-xl"
              >
                <span className="border-b border-[#1abcbc] pb-1 group-hover:border-white">
                  Demander un devis
                </span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="text-xs font-medium uppercase tracking-[3px] text-white/60 transition hover:text-white"
              >
                ou nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── POPUP : détails du projet ── */}
      <Modal
        open={activeProject !== null}
        onClose={() => setActiveProject(null)}
        ariaLabel={activeProject ? `Réalisations pour ${activeProject.client}` : undefined}
        maxWidth="5xl"
      >
        {activeProject && <ProjectModalContent project={activeProject} />}
      </Modal>
    </div>
  );
}

/* ───────────────── Carte projet (style portfolio plein cadre) ───────────────── */

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hasImage = Boolean(project.cover.image);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Voir les réalisations pour ${project.client}`}
      className="group relative block aspect-[4/5] w-full overflow-hidden bg-[#0F1A24] text-white"
    >
      {/* Image ou fallback dégradé + monogramme */}
      {hasImage ? (
        <Image
          src={publicImageSrc(project.cover.image as string)}
          alt={`${project.client} — réalisation SignProd`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${project.cover.accent}`}>
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 36px,#fff 36px,#fff 37px),repeating-linear-gradient(90deg,transparent,transparent 36px,#fff 36px,#fff 37px)",
            }}
          />
          <span
            className="absolute inset-0 flex items-center justify-center text-[10rem] font-light leading-none tracking-tight text-white/15"
            aria-hidden
          >
            {project.cover.label}
          </span>
        </div>
      )}

      {/* Voile sombre renforcé pour assurer la lisibilité du texte blanc
          quelle que soit l'image dessous (clair, contrasté, etc.) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/85 transition-opacity duration-500 group-hover:opacity-90" />
      {/* Vignette radiale qui assombrit légèrement le centre, là où sont les titres */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 65%)",
        }}
        aria-hidden
      />

      {/* Contenu centré */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-10 text-center md:px-8">
        {/* Étiquette client / dossier */}
        <div className="mb-7">
          {project.kind === "dossier" && (
            <span
              className="mb-1 block text-[10px] font-semibold uppercase tracking-[3px] text-[#1abcbc]/95"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              Dossier thématique
            </span>
          )}
          <span
            className="text-xs font-bold uppercase tracking-[4px] text-white"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.65)" }}
          >
            {project.client}
          </span>
          <span
            className="mx-auto mt-2 block h-[2px] w-7 bg-[#1abcbc]"
            aria-hidden
          />
        </div>

        {/* CTA bouton */}
        <span className="mt-7 inline-flex items-center justify-center bg-[#0097B2] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[3px] text-white shadow-lg transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:bg-[#00b4d4]">
          Voir plus
        </span>

        {/* Métadonnées discrètes en bas */}
        <div
          className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[2px] text-white/85 md:bottom-6 md:left-8 md:right-8"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <Layers className="h-3 w-3" strokeWidth={2} />
            {project.realisations.length} réalisation{project.realisations.length > 1 ? "s" : ""}
          </span>
          <span>{project.year}</span>
        </div>
      </div>
    </button>
  );
}

/* ───────────────── Contenu du popup ───────────────── */

function ProjectModalContent({ project }: { project: Project }) {
  const allImages = useMemo(() => {
    const raw = [
      ...(project.cover.image ? [project.cover.image] : []),
      ...(project.gallery ?? []),
    ];
    const seen = new Set<string>();
    return raw.filter((u) => (seen.has(u) ? false : (seen.add(u), true)));
  }, [project]);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    setActiveImage(allImages[0] ?? null);
  }, [project.slug, allImages]);

  return (
    <div>
      {/* Visuel : image entière (pas de rognage type cover sur hauteur fixe) + infos sous l’image */}
      <div className="bg-[#0F1A24]">
        <div className="flex min-h-[200px] w-full items-center justify-center px-3 py-4 md:min-h-[240px] md:px-8 md:py-6">
          {activeImage ? (
            <Image
              src={publicImageSrc(activeImage)}
              alt={`${project.client} — visuel principal`}
              width={1920}
              height={1200}
              className="h-auto max-h-[min(52vh,520px)] w-full max-w-full object-contain object-center"
              sizes="(min-width: 1280px) 1024px, 100vw"
            />
          ) : (
            <div
              className={`flex h-[200px] w-full max-w-3xl items-center justify-center bg-gradient-to-br ${project.cover.accent} md:h-64`}
            >
              <span className="text-8xl font-light text-white/20 md:text-[8rem]" aria-hidden>
                {project.cover.label}
              </span>
            </div>
          )}
        </div>

        <div className="px-6 pb-6 pt-1 text-white md:px-10">
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-[#1abcbc]" aria-hidden />
            <span className="text-[10px] font-medium uppercase tracking-[3px] text-white/80">
              {project.kind === "dossier" ? "Dossier thématique" : "Marque"}
            </span>
          </span>
          <h2 className="mt-2 text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
            {project.client}
          </h2>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5" />
              {project.sector}
            </span>
            {project.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {project.location}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {project.year}
            </span>
          </div>
        </div>
      </div>

      {/* Galerie miniatures */}
      {allImages.length > 1 && (
        <div className="border-b border-[#14202C]/10 bg-[#F4F0E8] px-6 py-4 md:px-10">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {allImages.map((img) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(img)}
                aria-label={`Voir l'image ${img}`}
                className={`relative aspect-[4/3] h-16 flex-shrink-0 overflow-hidden border-2 transition md:h-20 ${
                  activeImage === img
                    ? "border-[#0097B2]"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={publicImageSrc(img)}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Body */}
      <div className="px-6 py-8 md:px-10 md:py-10">
        <p className="max-w-2xl text-base leading-[1.7] text-[#14202C]/80 md:text-lg">
          {project.summary}
        </p>

        <div className="mt-8 flex items-baseline justify-between border-t border-[#14202C]/10 pt-6">
          <h3 className="text-xs font-medium uppercase tracking-[3px] text-[#0097B2]">
            Détail des réalisations
          </h3>
          <span className="text-xs text-[#14202C]/50">
            {project.realisations.length} prestation{project.realisations.length > 1 ? "s" : ""}
          </span>
        </div>

        <ul className="mt-2">
          {project.realisations.map((r, i) => (
            <li
              key={`${r.title}-${i}`}
              className="grid grid-cols-12 items-baseline gap-3 border-b border-[#14202C]/10 py-5 last:border-b-0"
            >
              <span className="col-span-2 text-lg font-light tabular-nums text-[#14202C]/30 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 md:col-span-7">
                <h4 className="text-base font-medium text-[#14202C] md:text-lg">
                  {r.title}
                </h4>
                {r.description && (
                  <p className="mt-1 text-sm leading-relaxed text-[#14202C]/65">
                    {r.description}
                  </p>
                )}
              </div>
              <div className="col-start-3 col-end-13 flex items-center gap-3 text-xs text-[#14202C]/60 md:col-start-9 md:col-end-13 md:justify-end">
                <span className="inline-flex items-center gap-1 bg-[#F4F0E8] px-2 py-1 font-medium uppercase tracking-[1.5px] text-[#14202C]/70">
                  {r.type}
                </span>
                {r.year && <span className="tabular-nums">{r.year}</span>}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-stretch gap-3 border-t border-[#14202C]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#14202C]/60">
            Vous avez un projet similaire&nbsp;?
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center gap-2 bg-[#0097B2] px-6 py-3 text-xs font-medium uppercase tracking-[2px] text-white transition hover:bg-[#006F85]"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
