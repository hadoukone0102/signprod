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
}

/**
 * Ordre et intitulés alignés sur la gamme SignProd.
 */
export const PRODUITS: ProduitItem[] = [
  {
    slug: "revetement-facades",
    href: "/savoir-faire/facades",
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
    image: "/asset/produit/signaletique.jpg",
  },
  {
    slug: "totems",
    href: "/produits/totems",
    icon: Flag,
    category: "Extérieur",
    title: "Totems et Drapeaux",
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
    slug: "vitrines",
    href: "/produits/vitrines",
    icon: PaintBucket,
    category: "Espaces",
    title: "Agencement et Décoration",
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
    slug: "branding-vehicules",
    href: "/devis",
    icon: Car,
    category: "Flotte",
    title: "Branding Véhicules",
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
    slug: "display",
    href: "/devis",
    icon: LayoutGrid,
    category: "Point de vente",
    title: "Display",
    shortDesc: "Présentation produit, comptoirs, linéaires et PLV en point de vente.",
    longDesc:
      "Stands, présentoirs, linéaires et mises en scène retail. Mise en forme, second signal visuel, solutions réutilisables selon vos campagnes.",
    highlights: [
      "Configurations modulaires",
      "Transport et montage simplifié",
      "Adaptation à l’espace alloué",
    ],
    image: "/asset/produit/display.png",
  },
  {
    slug: "baches",
    href: "/produits/baches",
    icon: Printer,
    category: "Impression",
    title: "Impression Grand format",
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
    slug: "kakemono",
    href: "/produits/kakemono",
    icon: Store,
    category: "PLV & salon",
    title: "Stands et PLV",
    shortDesc: "Roll-up, murs visuels, solutions légères pour salon et temporaire.",
    longDesc:
      "Kakémono, roll-up, murs d’image, PLV légère pour commerces, salons, roadshows. Accessoires de transport et montage rapide.",
    highlights: [
      "Structures aluminium ou textile tendu",
      "Housses de transport",
      "Compatibilité stand / hall",
    ],
    image: "/asset/produit/standplv.png",
  },
  {
    slug: "cover-style",
    href: "/contact",
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
    href: "/contact",
    icon: Fuel,
    category: "Métier",
    title: "Stations Services",
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
