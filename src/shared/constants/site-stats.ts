/**
 * Chiffres d’entête alignés : bannière d’accueil, bandeau chiffres, page Réalisations.
 * Modifier ici pour tout harmoniser.
 */
export const SITE_KEY_METRICS = {
  projetsLivres: { num: "100+", label: "Projets livrés" },
  anneesExpertise: { num: "10+", label: "Ans d'expertise" },
  delaiDevis: { num: "24h", label: "Délai de devis" },
  surMesure: { num: "100%", label: "Sur mesure" },
} as const;

/** Grille 4 stats sous le hero — page d’accueil */
export const HOME_HERO_STATS = [
  SITE_KEY_METRICS.projetsLivres,
  SITE_KEY_METRICS.anneesExpertise,
  SITE_KEY_METRICS.delaiDevis,
  SITE_KEY_METRICS.surMesure,
] as const;

/**
 * 3 pastilles du 1er slide bannière (mêmes chiffres, libellé délai identique accueil).
 */
export const BANNER_SLIDE1_STATS = [
  SITE_KEY_METRICS.projetsLivres,
  SITE_KEY_METRICS.anneesExpertise,
  SITE_KEY_METRICS.delaiDevis,
] as const;

export const SITE_PROJECTS_LIVRES_SHORT =
  "Plus de 100 projets livrés" as const;
