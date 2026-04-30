export type ProjectKind = "societe" | "dossier";

export interface ProjectRealisation {
  title: string;
  type: string;
  description?: string;
  year?: string;
  image?: string;
}

export interface Project {
  slug: string;
  /**
   * Société (marque) si `kind` est `societe` ;
   * intitulé du dossier thématique si `kind` est `dossier` (ex. enseignes regroupant plusieurs marques).
   */
  client: string;
  shortName: string;
  kind: ProjectKind;
  /** Petite phrase d'accroche affichée sur la carte. */
  tagline: string;
  sector: string;
  location?: string;
  year: string;
  cover: {
    label: string;
    accent: string;
    /** Image de couverture (chemin public, peut contenir des espaces — encoder en URI pour `next/image`). */
    image?: string;
  };
  /** Galerie d'images (chemins publics) */
  gallery?: string[];
  summary: string;
  realisations: ProjectRealisation[];
}

export const PROJECTS: Project[] = [
  // ── Marques (sociétés) — en premier, alignées sur le dossier asset/realisation ──
  {
    slug: "bbr",
    kind: "societe",
    client: "BBR",
    shortName: "BBR",
    tagline: "L'authenticité ivoirienne",
    sector: "Industrie agroalimentaire",
    location: "Abidjan",
    year: "2024 — 2025",
    cover: {
      label: "BB",
      accent: "from-[#0097B2] to-[#006F85]",
      image: ("/asset/realisation/BBR/BBR0.jpeg"),
    },
    gallery: [
      ("/asset/realisation/BBR/BBR1.JPG"),
      ("/asset/realisation/BBR/BBR2.JPG"),
      ("/asset/realisation/BBR/BBR3.JPG"),
      ("/asset/realisation/BBR/BBR4.JPG"),
      ("/asset/realisation/BBR/BBR5.JPG"),
      ("/asset/realisation/BBR/BBR copie 2.png"),
      ("/asset/realisation/BBR/BBR copie 4.png"),
      ("/asset/realisation/BBR/BBR copie 5.png"),
      ("/asset/realisation/BBR/BBR copie 6.png"),
      ("/asset/realisation/BBR/BBR copie 7.png"),
      ("/asset/realisation/BBR/BBR copie 8.png"),
      ("/asset/realisation/BBR/BBR copie 9.png"),
      ("/asset/realisation/BBR/BBR copie 10.png"),
      ("/asset/realisation/BBR/PHOTO-2025-11-05-18-49-45.jpg"),
      ("/asset/realisation/BBR/PHOTO-2025-11-05-18-57-38.jpg"),
    ],
    summary:
      "Programme complet de communication visuelle pour le siège et les sites de production : enseignes lumineuses, signalétique de sécurité et habillage de façades.",
    realisations: [
      { title: "Enseigne lumineuse façade siège", type: "Enseigne LED", year: "2025", description: "Lettres relief rétroéclairées, hauteur 1,80 m, fixées sur ossature aluminium." },
      { title: "Habillage façade entrée principale", type: "Concept façade", year: "2025", description: "Bardage composite Alucobond et lettrage sur 24 mètres linéaires." },
      { title: "Totem d'identification site", type: "Totem extérieur", year: "2025", description: "Totem double face, éclairage LED périphérique." },
      { title: "Signalétique sécurité production", type: "Signalétique intérieure", year: "2024", description: "Plaques d'évacuation, EPI et zones à risques." },
      { title: "Branding salle de pause", type: "Branding intérieur", year: "2024", description: "Habillage mural, vitrophanies et charte graphique." },
    ],
  },
  {
    slug: "ecobank",
    kind: "societe",
    client: "Ecobank",
    shortName: "ECO",
    tagline: "Banque panafricaine",
    sector: "Banque & Finance",
    location: "Abidjan",
    year: "2023 — 2025",
    cover: {
      label: "E",
      accent: "from-[#0a5f3f] to-[#063d2a]",
      image: ("/asset/realisation/ecobank/ECOBANK.png"),
    },
    gallery: [
      ("/asset/realisation/ecobank/ECOBANK.png"),
      ("/asset/realisation/ecobank/ECOBANK copie.png"),
      ("/asset/realisation/ecobank/ECOBANK copie 2.png"),
      ("/asset/realisation/ecobank/ECOBANK copie 3.png"),
      ("/asset/realisation/ecobank/ECOBANK copie 5.png"),
      ("/asset/realisation/ecobank/ECOBANK copie 6.png"),
      ("/asset/realisation/ecobank/ECOBANK copie 7.png"),
    ],
    summary:
      "Déploiement de la signaletique bancaire : enseignes, façades vitrées et dispositifs d'identification sur les agences et espaces d'accueil.",
    realisations: [
      { title: "Enseignes d'agence", type: "Enseigne", year: "2024", description: "Lettrage haute visibilité et intégration de la charte." },
      { title: "Habillage de vitrines", type: "Habillage vitrage", year: "2024" },
      { title: "Signalétique d'orientation", type: "Signalétique", year: "2023" },
    ],
  },
  {
    slug: "diamond-center",
    kind: "societe",
    client: "Diamond Center",
    shortName: "DIA",
    tagline: "Bijouterie & horlogerie",
    sector: "Retail & luxe",
    location: "Abidjan",
    year: "2024",
    cover: {
      label: "DC",
      accent: "from-[#2C3E50] to-[#1a252f]",
      image: ("/asset/realisation/diamond-center/DIAMOND CENTER.png"),
    },
    gallery: [
      ("/asset/realisation/diamond-center/DIAMOND CENTER.png"),
      ("/asset/realisation/diamond-center/DIAMOND CENTER copie.png"),
      ("/asset/realisation/diamond-center/DIAMOND CENTER copie 2.png"),
      ("/asset/realisation/diamond-center/DIAMOND CENTER copie 3.png"),
      ("/asset/realisation/diamond-center/DIAMOND CENTER copie 4.png"),
      ("/asset/realisation/diamond-center/DIAMOND CENTER copie 5.png"),
    ],
    summary:
      "Mise en valeur de l'enseigne : identité en façade, vitrines haut de gamme et atmosphère orientée point de vente premium.",
    realisations: [
      { title: "Enseigne de boutique", type: "Enseigne", year: "2024" },
      { title: "Scénographie vitrines", type: "Habillage vitrage", year: "2024" },
      { title: "Lettrage d'intérieur", type: "Signalétique intérieure", year: "2024" },
    ],
  },
  {
    slug: "core-fitness",
    kind: "societe",
    client: "Core Fitness",
    shortName: "CORE",
    tagline: "Énergie & performance",
    sector: "Salle de sport & fitness",
    location: "Abidjan",
    year: "2024",
    cover: {
      label: "CF",
      accent: "from-[#1abcbc] to-[#0d8a8c]",
      image: ("/asset/realisation/core-fitness/CORE FITNESS.png"),
    },
    gallery: [
      ("/asset/realisation/core-fitness/CORE FITNESS.png"),
      ("/asset/realisation/core-fitness/CORE FITNESS copie.png"),
      ("/asset/realisation/core-fitness/CORE FITNESS copie 2.png"),
      ("/asset/realisation/core-fitness/CORE FITNESS copie 3.png"),
      ("/asset/realisation/core-fitness/CORE FITNESS copie 4.png"),
      ("/asset/realisation/core-fitness/CORE FITNESS copie 5.png"),
    ],
    summary:
      "Branding sportif : enseignes extérieures, habillage murs intérieurs et atmosphère de club alignée sur l'identité dynamique de la salle.",
    realisations: [
      { title: "Enseigne d'établissement", type: "Enseigne", year: "2024" },
      { title: "Espaces cardio & poids", type: "Habillage mural", year: "2024" },
      { title: "Signalétique d'accompagnement", type: "Signalétique", year: "2024" },
    ],
  },

  // ── Dossiers thématiques (regroupement de réalisations pour divers clients) ──
  {
    slug: "enseignes",
    kind: "dossier",
    client: "Enseignes",
    shortName: "ENS",
    tagline: "Diverses marques, mêmes exigences",
    sector: "Enseignes lumineuses (multi-sites)",
    year: "2022 — 2025",
    cover: {
      label: "E",
      accent: "from-[#F5A623] to-[#9a3d0c]",
      image: ("/asset/realisation/enseignes/ENSEIGNES.png"),
    },
    gallery: [
      ("/asset/realisation/enseignes/ENSEIGNES.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 2.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 4.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 5.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 6.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 7.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 8.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 9.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 13.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 15.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 16.png"),
      ("/asset/realisation/enseignes/ENSEIGNES copie 17.png"),
    ],
    summary:
      "Sélection d'enseignes conçues et posées pour différentes enseignes : caissons, lettres relief, boîtiers rétroéclairés en milieu retail et tertiaire.",
    realisations: [
      { title: "Déclinaisons retail & services", type: "Enseigne", year: "2023", description: "Diverses configurations selon cahier des charges de façade." },
      { title: "Points de lumière & rétroéclairage", type: "Haute qualité d'éclairage", year: "2023" },
      { title: "Déploiement multi-enseignes", type: "Acheminement & pose", year: "2022" },
    ],
  },
  {
    slug: "branding-de-vehicule",
    kind: "dossier",
    client: "Branding de véhicule",
    shortName: "VH",
    tagline: "Flottes et véhicules d'affaires",
    sector: "Marquage véhicule",
    year: "2023 — 2025",
    cover: {
      label: "V",
      accent: "from-[#4a5568] to-[#1a202c]",
      image: ("/asset/realisation/branding-de-vehicule/BRANDING VEHICULE.png"),
    },
    gallery: [
      ("/asset/realisation/branding-de-vehicule/BRANDING VEHICULE.png"),
      ("/asset/realisation/branding-de-vehicule/BRANDING VEHICULE copie.png"),
      ("/asset/realisation/branding-de-vehicule/BRANDING VEHICULE copie 2.png"),
      ("/asset/realisation/branding-de-vehicule/BRANDING VEHICULE copie 3.png"),
      ("/asset/realisation/branding-de-vehicule/BRANDING VEHICULE copie 5.png"),
      ("/asset/realisation/branding-de-vehicule/BRANDING VEHICULE copie 6.png"),
      ("/asset/realisation/branding-de-vehicule/BRANDING VEHICULE copie 7.png"),
      ("/asset/realisation/branding-de-vehicule/BRANDING VEHICULE copie 8.png"),
    ],
    summary:
      "Habillages sur mesure de véhicules utilitaires, tourisme et commerciaux : total covering, adhésifs haute performance et cohérence de charte en circulation.",
    realisations: [
      { title: "Déploiement flottes pro", type: "Covering", year: "2024" },
      { title: "Identité de marque mobile", type: "Marquage", year: "2024" },
      { title: "Finitions haute durabilité", type: "Finition", year: "2023" },
    ],
  },
  {
    slug: "chariot-sur-mesure",
    kind: "dossier",
    client: "Chariots sur mesure",
    shortName: "CH",
    tagline: "Roulants & scénographiques",
    sector: "Agencement & sur-mesure",
    year: "2023",
    cover: {
      label: "C",
      accent: "from-[#718096] to-[#2d3748]",
      image: ("/asset/realisation/chariot-sur-mesure/CHARIOT.png"),
    },
    gallery: [
      ("/asset/realisation/chariot-sur-mesure/CHARIOT.png"),
      ("/asset/realisation/chariot-sur-mesure/CHARIOT 2.png"),
      ("/asset/realisation/chariot-sur-mesure/CHARIOT 3.png"),
      ("/asset/realisation/chariot-sur-mesure/CHARIOT 3 copie.png"),
    ],
    summary:
      "Conception et finition d'équipements roulants pour l'exposition et l'événementiel, intégration graphique et prêts à l'emploi en point de vente.",
    realisations: [
      { title: "Structures roulantes sur mesure", type: "Finition atelier", year: "2023" },
      { title: "Intégration graphique 360°", type: "Habillage", year: "2023" },
    ],
  },
  {
    slug: "realisation-3d",
    kind: "dossier",
    client: "Réalisation 3D",
    shortName: "3D",
    tagline: "Mise en scène de projets",
    sector: "Rendu & projection 3D",
    year: "2023 — 2025",
    cover: {
      label: "3D",
      accent: "from-[#4c51bf] to-[#1a1e4d]",
      image: ("/asset/realisation/realisation 3D/3D 1.png"),
    },
    gallery: [
      ("/asset/realisation/realisation 3D/3D 1.png"),
      ("/asset/realisation/realisation 3D/3D 2.png"),
      ("/asset/realisation/realisation 3D/3D 3.png"),
      ("/asset/realisation/realisation 3D/3D 3 copie 2.png"),
      ("/asset/realisation/realisation 3D/3Dl 3 copie.png"),
      ("/asset/realisation/realisation 3D/PHOTO-2025-10-16-16-15-04.jpg"),
      ("/asset/realisation/realisation 3D/PHOTO-2025-12-20-13-13-21.jpg"),
      ("/asset/realisation/realisation 3D/BBR/BBR0.jpeg"),
      ("/asset/realisation/realisation 3D/BBR/BBR1.JPG"),
      ("/asset/realisation/realisation 3D/BBR/BBR2.JPG"),
      ("/asset/realisation/realisation 3D/BBR/BBR3.JPG"),
      ("/asset/realisation/realisation 3D/BBR/BBR4.JPG"),
      ("/asset/realisation/realisation 3D/BBR/BBR5.JPG"),
    ],
    summary:
      "Dossier visuel 3D et perspectives pour validation de projets (projet BBR et plans divers) : projection avant réalisation terrain.",
    realisations: [
      { title: "Perspectives d'ensembles", type: "3D", year: "2024" },
      { title: "Validation préalable chantier", type: "Avant / après", year: "2024" },
    ],
  },
  {
    slug: "revetment-facade",
    kind: "dossier",
    client: "Revêtement de façade",
    shortName: "FÇ",
    tagline: "Habillage extérieur & inox",
    sector: "Bardage, HPL, métal déployé",
    year: "2023 — 2025",
    cover: {
      label: "F",
      accent: "from-[#1a202c] to-[#0d1117]",
      image: ("/asset/realisation/revetment-facade/REVETEMENT HPL OK.png"),
    },
    gallery: [
      ("/asset/realisation/revetment-facade/REVETEMENT HPL.png"),
      ("/asset/realisation/revetment-facade/REVETEMENT HPL OK.png"),
      ("/asset/realisation/revetment-facade/REVETEMENT HPL OK copie.png"),
      ("/asset/realisation/revetment-facade/REVETEMENT HPL OK copie 2.png"),
      ("/asset/realisation/revetment-facade/HOTEL CLARTE.png"),
      ("/asset/realisation/revetment-facade/HOTEL CLARTE copie 2.png"),
      ("/asset/realisation/revetment-facade/METAL DEPLOYE.png"),
      ("/asset/realisation/revetment-facade/METAL DEPLOYE copie.png"),
      ("/asset/realisation/revetment-facade/METAL DEPLOYE copie 2.png"),
    ],
    summary:
      "Finitions de façades hôtelières, bureautique et tertiaire : HPL, métal déployé et mises en œuvre d'étanchéité / aspect architectural.",
    realisations: [
      { title: "HPL et bardages", type: "Bardage", year: "2024" },
      { title: "Hôtels & tertiaire", type: "Façade", year: "2023" },
      { title: "Déploiement métal déployé", type: "Décoratif", year: "2023" },
    ],
  },
  {
    slug: "signaletique-interieure",
    kind: "dossier",
    client: "Signalétique intérieure",
    shortName: "SI",
    tagline: "Orientation claire, ambiance maîtrisée",
    sector: "Signalétique intérieure (multi-sites)",
    year: "2022 — 2025",
    cover: {
      label: "S",
      accent: "from-[#0097B2] to-[#0a1a1f]",
      image: ("/asset/realisation/signaletique-interieure/SIGNALETIQUE 1.png"),
    },
    gallery: [
      ("/asset/realisation/signaletique-interieure/SIGNALETIQUE.png"),
      ("/asset/realisation/signaletique-interieure/SIGNALETIQUE 1.png"),
      ("/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie.png"),
      ("/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 2.png"),
      ("/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 3.png"),
      ("/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 4.png"),
      ("/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 5.png"),
      ("/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 6.png"),
    ],
    summary:
      "Divers environnements : bureaux, lobbies et parcours visiteur — plaques, directionnels, pictogrammique et intégration propre aux volumes.",
    realisations: [
      { title: "Parcours d'accueil", type: "Signalétique", year: "2024" },
      { title: "Identité d'étages", type: "Pictogrammique", year: "2023" },
      { title: "Cohérence d'ensembles", type: "Charte d'espace", year: "2022" },
    ],
  },
];

export const SECTORS = Array.from(new Set(PROJECTS.map((p) => p.sector)));
