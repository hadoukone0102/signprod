import {
  Building2,
  Lightbulb,
  Signpost,
  Flag,
  PaintBucket,
  Car,
  LayoutGrid,
  Printer,
  Store,
  Sparkles,
  Fuel,
  Box,
  type LucideIcon,
} from "lucide-react";

export interface ProduitItem {
  slug: string;
  href: string;
  icon: LucideIcon;
  category: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  image: string;
  /** Visuels complémentaires (fiche détail uniquement) */
  gallery?: string[];
}

/**
 * Stands en tête, puis les autres familles de produits.
 */
export const PRODUITS: ProduitItem[] = [
  {
    slug: "stands-sur-mesure",
    href: "/produits/stands-sur-mesure",
    icon: LayoutGrid,
    category: "Point de vente",
    title: "Stands sur mesure",
    shortDesc: "Faites de votre stand un véritable levier d’attraction.",
    longDesc:
      "Conception, design et fabrication de stands qui attirent, marquent et engagent vos visiteurs.",
    highlights: [
      "Design 3D personnalisé",
      "Fabrication sur mesure en atelier",
      "Installation clé en main",
    ],
    image: "/asset/produit/standsurmesur.png",
    gallery: [
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION.png",
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION copie.png",
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION copie 2.png",
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION copie 4.png",
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION copie 5.png",
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION copie 6.png",
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION copie 7.png",
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION copie 9.png",
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION copie 10.png",
      "/asset/realisation/stand-d-exposition/STAND D'EXPOSITION copie 11.png",
    ],
  },
  {
    slug: "kakemono",
    href: "/produits/kakemono",
    icon: Store,
    category: "PLV & salon",
    title: "Stands événementiel",
    shortDesc:
      "Kakémono, roll-up et murs nomades : visibilité sur salon, foire ou tournée, sans lourd agencement.",
    longDesc:
      "Pour une présence temporaire — salon professionnel, foire, roadshow ou animation en magasin — nous proposons des kits légers et démontables : roll-ups, kakémonos, murs d’image tendus, caissons portables. Priorité à la logistique (transport, montage rapide) et aux visuels interchangeables d’une date à l’autre, sans confondre avec les linéaires et stands fixes du point de vente.",
    highlights: [
      "Encombrement et poids maîtrisés pour le déplacement",
      "Installation et démontage courts sur site",
      "Visuels modulables selon l’événement ou la campagne",
    ],
    image: "/asset/produit/standevenementiel.jpg",
  },
  {
    slug: "revetement-facades",
    href: "/produits/revetement",
    icon: Building2,
    category: "Façades",
    title: "Revêtement de Façades",
    shortDesc: "Bardage, HPL, métal déployé : habillage durable et soigné.",
    longDesc:
      "Habillages de façades tertiaire, hôtels et bâtiments d’envergure : finitions HPL, composites, métal déployé. Étude des contraintes climatiques et cahier des charges locaux, pose en atelier et suivi de chantier.",
    highlights: [
      "Bardage et sous-face technique",
      "Finitions RAL, aspect bois ou métal",
      "Cohérence avec la signalétique d’enseigne",
    ],
    image: "/asset/produit/revetement1.jpg",
  },
  {
    slug: "enseignes-led",
    href: "/produits/enseignes-led",
    icon: Lightbulb,
    category: "Lumineux",
    title: "Enseignes Lumineuses",
    shortDesc: "LED, caissons, lettres relief : visibilité maximale, jour et nuit.",
    longDesc:
      "Enseignes LED, lettres volume, caissons et néon flexible, pour retail, hôtels et bâtiments professionnels. Faible consommation, longue durée de vie, respect de la charte graphique.",
    highlights: [
      "Gammes encastrées, relief ou plein cadre",
      "Finitions adaptées intérieur / extérieur",
      "Garanties pièces et main-d’œuvre sur demande",
    ],
    image: "/asset/produit/enseigne.png",
  },
  {
    slug: "signaletique-routiere",
    href: "/produits/signaletique-routiere",
    icon: Signpost,
    category: "Parcours",
    title: "Signalétique",
    shortDesc: "Orientation, information et repérage, intérieur comme extérieur.",
    longDesc:
      "Signalétique bâtiments, bureaux, hôtels et commerces : repères, directionnels, pictogrammes, plans. Solutions durables et lisibles, y compris domaine routier et accès quand le projet l’exige.",
    highlights: [
      "Pictogrammique, plaques, totems d’accès",
      "Cohabitation avec l’agencement et la décoration",
      "Normes d’accès et de visibilité prises en compte",
    ],
    image: "/asset/realisation/signaletique-interieure/SIGNALETIQUE.png",
    gallery: [
      "/asset/realisation/signaletique-interieure/SIGNALETIQUE.png",
      "/asset/realisation/signaletique-interieure/SIGNALETIQUE 1.png",
      "/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie.png",
      "/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 2.png",
      "/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 3.png",
      "/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 4.png",
      "/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 5.png",
      "/asset/realisation/signaletique-interieure/SIGNALETIQUE 1 copie 6.png",
    ],
  },
  {
    slug: "totems",
    href: "/produits/totems",
    icon: Flag,
    category: "Extérieur",
    title: "Totem",
    shortDesc: "Repères d’accès, identité bâtiment, drapeaux et haute visibilité.",
    longDesc:
      "Totems publicitaires, pylônes, mâts et drapeaux. Structure acier ou aluminium, éclairage option, dimensions et visuels sur mesure. Étude d’implantation et cadrage avec votre site.",
    highlights: [
      "Hauteurs et sections adaptées",
      "Simple ou double face, option lumineuse",
      "Ancrages et contraintes météo dimensionnés",
    ],
    image: "/asset/produit/totem.png",
  },
  {
    slug: "impression-3d-foam",
    href: "/produits/impression-3d-foam",
    icon: Box,
    category: "Volume & relief",
    title: "Impression 3D foam",
    shortDesc:
      "Lettres et logos en mousse rigide : relief, légèreté et impact visuel intérieur ou vitrine.",
    longDesc:
      "Découpe et mise en forme de panneaux foam (XPS, PVC expansé équivalent) pour lettres bloc, logos relief, décors scéniques ou signalétique décorative. Finitions peinture ou cover, formats sur cote, pose en atelier.",
    highlights: [
      "Relief fort pour enseigne, stand ou événement",
      "Poids maîtrisé, fixations adaptées murs et suspensions",
      "Couleurs et formes sur plan ou fichier vectoriel",
    ],
    image: "/asset/produit/enseigne.png",
  },
  {
    slug: "baches",
    href: "/produits/baches",
    icon: Printer,
    category: "Impression",
    title: "Impression grand format",
    shortDesc: "Bâches, banderoles, visuels en impression large gamme de supports.",
    longDesc:
      "Bâches PVC, micro-perforés, bannières, affiches grand format outdoor et indoor. Finitions œillets, ourlets, encres UV et usage intensif.",
    highlights: [
      "Large plage de grammages",
      "Formats sur mesure",
      "Livraison roulé ou prêt à poser",
    ],
    image: "/asset/produit/impressiongrandformat.jpg",
  },
  {
    slug: "branding-vehicules",
    href: "/produits/branding-vehicules",
    icon: Car,
    category: "Flotte",
    title: "Branding véhicule",
    shortDesc: "Adhésifs, covering et flotte alignée sur votre charte.",
    longDesc:
      "Habillages utilitaires, flottes commerciales, covering partiel ou total. Adhésifs haute performance et pose pour tenue en extérieur.",
    highlights: [
      "Déclinaison charte sur tous modèles",
      "Finitions mat, satin ou brillance ciblée",
      "Délais d’exécution adaptés à l’opération",
    ],
    image: "/asset/produit/brandingvehicule.jpg",
  },
  {
    slug: "vitrines",
    href: "/produits/vitrines",
    icon: PaintBucket,
    category: "Espaces",
    title: "Agencement et décoration",
    shortDesc: "Aménagement, vitrines, habillages d’espace, identité d’intérieur.",
    longDesc:
      "Finitions murales, agencement, vitrines, zones d’accueil. Coordination des matériaux, couleurs et adhésifs haute finition pour un parcours client clair et valorisant.",
    highlights: [
      "Finitions adaptées trafic et lumière",
      "Habillages modulables et entretien maîtrisé",
      "Cohérence enseigne / bâtiment",
    ],
    image: "/asset/produit/agence et decorations.png",
  },
  {
    slug: "cover-style",
    href: "/produits/cover-style",
    icon: Sparkles,
    category: "Finition",
    title: "Cover Style",
    shortDesc: "Habillages soignés, finitions type « cover » sur mesure.",
    longDesc:
      "Finitions cover : habillages d’ensembles, de surfaces ou de supports d’exposition, avec rendu maîtrisé et durabilité adaptée au site.",
    highlights: [
      "Déclinaison matières et couleurs (RAL / nuancier)",
      "Cohabitation adhésifs & structure",
      "Réalisation atelier et sur site",
    ],
    image: "/asset/produit/coverstyle.png",
  },
  {
    slug: "stations-services",
    href: "/produits/stations-services",
    icon: Fuel,
    category: "Métier",
    title: "Stations services",
    shortDesc: "Signalétique, identité et dispositifs adaptés au réseau station.",
    longDesc:
      "Accompagnement signalétique, totems, habillage pompes, accroches marque, contraintes de circulation. Déploiement monosite ou réseau.",
    highlights: [
      "Repères, zones, offres, restrictions",
      "Cohabitation législation & marque",
      "Déploiement multi-sites",
    ],
    image: "/asset/produit/stationservice.png",
  },
];
