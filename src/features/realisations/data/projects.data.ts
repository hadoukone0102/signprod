export interface ProjectRealisation {
  title: string;
  type: string;
  description?: string;
  year?: string;
  image?: string;
}

export interface Project {
  slug: string;
  client: string;
  shortName: string;
  /** Petite phrase d'accroche éditoriale affichée sur la carte (ex: "Orange est là") */
  tagline: string;
  sector: string;
  location?: string;
  year: string;
  cover: {
    label: string;
    accent: string;
    /** Image de couverture (chemin public). Si absent → dégradé + monogramme. */
    image?: string;
  };
  /** Galerie d'images facultative montrée dans le popup */
  gallery?: string[];
  summary: string;
  realisations: ProjectRealisation[];
}

export const PROJECTS: Project[] = [
  {
    slug: "bbr",
    client: "BBR",
    shortName: "BBR",
    tagline: "L'authenticité ivoirienne",
    sector: "Industrie agroalimentaire",
    location: "Abidjan",
    year: "2024 — 2025",
    cover: {
      label: "BBR",
      accent: "from-[#0097B2] to-[#006F85]",
      image: "/asset/realisation/BBR/BBR0.jpeg",
    },
    gallery: [
      "/asset/realisation/BBR/BBR1.JPG",
      "/asset/realisation/BBR/BBR2.JPG",
      "/asset/realisation/BBR/BBR3.JPG",
      "/asset/realisation/BBR/BBR4.JPG",
      "/asset/realisation/BBR/BBR5.JPG",
    ],
    summary:
      "Programme complet de communication visuelle pour le siège et les sites de production : enseignes lumineuses, signalétique de sécurité et habillage de façades.",
    realisations: [
      { title: "Enseigne lumineuse façade siège", type: "Enseigne LED", year: "2025", description: "Lettres reliefs rétroéclairées, hauteur 1,80 m, fixées sur ossature aluminium." },
      { title: "Habillage façade entrée principale", type: "Concept façade", year: "2025", description: "Bardage composite Alucobond et lettrage sur 24 mètres linéaires." },
      { title: "Totem d'identification site", type: "Totem extérieur", year: "2025", description: "Totem double face de 6 mètres, éclairage LED périphérique." },
      { title: "Signalétique sécurité production", type: "Signalétique intérieure", year: "2024", description: "Plus de 120 plaques d'évacuation, EPI et zones à risques." },
      { title: "Branding salle de pause", type: "Branding intérieur", year: "2024", description: "Habillage mural, vitrophanies et fresque graphique." },
    ],
  },
  {
    slug: "orange-ci",
    client: "Orange",
    shortName: "Orange",
    tagline: "Orange est là",
    sector: "Télécommunications",
    location: "Plateau, Cocody, Yopougon",
    year: "2023 — 2025",
    cover: { label: "OR", accent: "from-[#F5A623] to-[#D17C00]" },
    summary:
      "Déploiement multi-sites de la nouvelle identité visuelle Orange : enseignes boutiques, signalétique intérieure et habillage de vitrines.",
    realisations: [
      { title: "Enseignes boutiques (8 agences)", type: "Enseigne LED", year: "2025", description: "Renouvellement complet du parc d'enseignes lumineuses." },
      { title: "Vitrines saisonnières", type: "Adhésifs vitrines", year: "2025", description: "Quatre rotations annuelles d'habillage vitrine sur l'ensemble du réseau." },
      { title: "Signalétique d'orientation interne", type: "Signalétique intérieure", year: "2024", description: "Plaques de bureau, panneaux directionnels et numérotation d'étages." },
      { title: "Totems entrée d'agences", type: "Totem extérieur", year: "2024" },
      { title: "Branding espace VIP", type: "Branding intérieur", year: "2023" },
    ],
  },
  {
    slug: "nsia-banque",
    client: "NSIA Banque",
    shortName: "NSIA",
    tagline: "La banque, l'évidence",
    sector: "Banque & Finance",
    location: "Plateau",
    year: "2024",
    cover: { label: "NS", accent: "from-[#1A2B3C] to-[#0a1628]" },
    summary:
      "Refonte de la signalétique du siège social et de cinq agences pilotes dans le cadre du repositionnement de marque.",
    realisations: [
      { title: "Signalétique extérieure siège", type: "Signalétique extérieure", year: "2024", description: "Totems, panneaux directionnels parking et accueil." },
      { title: "Lettrage façade", type: "Lettres relief", year: "2024", description: "Lettres aluminium brossé de 80 cm de hauteur." },
      { title: "Signalétique d'agences pilotes", type: "Signalétique intérieure", year: "2024" },
      { title: "Plaques professionnelles", type: "Plaques", year: "2024" },
    ],
  },
  {
    slug: "pharmacie-cocody",
    client: "Pharmacie de Cocody",
    shortName: "PHARMA",
    tagline: "Le réflexe santé",
    sector: "Santé",
    location: "Cocody II Plateaux",
    year: "2025",
    cover: { label: "RX", accent: "from-[#1abcbc] to-[#0a8a8a]" },
    summary:
      "Croix de pharmacie animée, enseigne caisson lumineux et signalétique d'orientation pour la nouvelle officine.",
    realisations: [
      { title: "Croix pharmacie LED animée", type: "Enseigne LED", year: "2025", description: "Croix double face 100×100 cm, animations programmables." },
      { title: "Caisson lumineux drapeau", type: "Enseigne LED", year: "2025" },
      { title: "Vitrophanies thématiques", type: "Adhésifs vitrines", year: "2025", description: "Quatre déclinaisons saisonnières." },
      { title: "Signalétique intérieure", type: "Signalétique intérieure", year: "2025" },
    ],
  },
  {
    slug: "groupe-hotelier",
    client: "Groupe hôtelier",
    shortName: "HOTEL",
    tagline: "L'art de recevoir",
    sector: "Hôtellerie & Tourisme",
    location: "Plateau",
    year: "2024",
    cover: { label: "HT", accent: "from-[#243448] to-[#0F1A24]" },
    summary:
      "Signalétique complète de l'hôtel rénové : extérieur, lobby, étages, salles de réunion et restaurant.",
    realisations: [
      { title: "Enseigne façade et toiture", type: "Enseigne LED", year: "2024", description: "Lettrage rétroéclairé sur deux façades et logo en relief sur toit." },
      { title: "Plaques chambre numérotées", type: "Signalétique intérieure", year: "2024", description: "180 plaques chambres en aluminium gravé." },
      { title: "Signalétique salles de réunion", type: "Signalétique intérieure", year: "2024" },
      { title: "Totem entrée parking", type: "Totem extérieur", year: "2024" },
      { title: "Habillage mural restaurant", type: "Branding intérieur", year: "2024" },
      { title: "Signalétique d'évacuation", type: "Signalétique sécurité", year: "2024" },
    ],
  },
  {
    slug: "concession-auto",
    client: "Concession auto",
    shortName: "AUTO",
    tagline: "Conduire l'exception",
    sector: "Automobile",
    location: "Marcory",
    year: "2024",
    cover: { label: "AU", accent: "from-[#0097B2] to-[#14202C]" },
    summary:
      "Habillage façade et signalétique extérieure pour le nouveau showroom : totems, panneaux et lettrage façade.",
    realisations: [
      { title: "Lettrage façade showroom", type: "Lettres relief", year: "2024", description: "Lettres en inox brossé montées sur entretoises." },
      { title: "Totem d'identification", type: "Totem extérieur", year: "2024" },
      { title: "Panneaux directionnels parking", type: "Signalétique extérieure", year: "2024" },
      { title: "Vitrophanies showroom", type: "Adhésifs vitrines", year: "2024" },
    ],
  },
];

export const SECTORS = Array.from(new Set(PROJECTS.map((p) => p.sector)));
