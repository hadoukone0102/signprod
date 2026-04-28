import {
  Lightbulb,
  Flag,
  Square,
  Image as ImageIcon,
  Megaphone,
  TrafficCone,
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
}

export const PRODUITS: ProduitItem[] = [
  {
    slug: "enseignes-led",
    href: "/produits/enseignes-led",
    icon: Lightbulb,
    category: "Enseignes",
    title: "Enseignes LED",
    shortDesc: "Économiques, durables et personnalisables.",
    longDesc:
      "Enseignes lumineuses LED nouvelle génération, idéales pour assurer une visibilité 24h/24 tout en maîtrisant votre consommation énergétique. Plusieurs styles disponibles : lettres relief, caissons, néon flexible.",
    highlights: [
      "Consommation jusqu'à -80% vs néon traditionnel",
      "Durée de vie supérieure à 50 000 heures",
      "Personnalisation totale (forme, couleur, taille)",
      "Garantie 2 ans pièces et main-d'œuvre",
    ],
  },
  {
    slug: "totems",
    href: "/produits/totems",
    icon: Flag,
    category: "Extérieur",
    title: "Totems & pylônes",
    shortDesc: "Visibilité maximale en bord de route.",
    longDesc:
      "Totems publicitaires et pylônes d'entrée de site pour signaler votre présence à grande distance. Conception sur mesure adaptée à votre charte graphique et à votre environnement.",
    highlights: [
      "Hauteurs de 2 à 12 mètres",
      "Simple ou double face, lumineux ou non",
      "Structures acier galvanisé anti-corrosion",
      "Étude technique d'implantation incluse",
    ],
  },
  {
    slug: "vitrines",
    href: "/produits/vitrines",
    icon: Square,
    category: "Vitrines",
    title: "Vitrines & adhésifs",
    shortDesc: "Décoration et communication sur vitre.",
    longDesc:
      "Adhésifs vitrines pour habiller vos devantures, communiquer sur vos offres ou créer un effet dépoli pour préserver votre intimité. Pose réalisée par nos équipes pour une finition impeccable.",
    highlights: [
      "Vinyles monomère, polymère et microperforés",
      "Effets dépoli, paillette ou translucide",
      "Lettres prédécoupées ou impression haute définition",
      "Pose intérieure ou extérieure",
    ],
  },
  {
    slug: "kakemono",
    href: "/produits/kakemono",
    icon: ImageIcon,
    category: "Événementiel",
    title: "Kakémono & roll-up",
    shortDesc: "Stands, salons, événements professionnels.",
    longDesc:
      "Roll-up et kakémonos légers et faciles à transporter pour vos événements, salons et conférences. Système enrouleur compact livré avec sa housse de transport.",
    highlights: [
      "Formats standards 85×200 et 100×200 cm",
      "Impression recto haute définition",
      "Structure aluminium légère",
      "Housse de transport incluse",
    ],
  },
  {
    slug: "baches",
    href: "/produits/baches",
    icon: Megaphone,
    category: "Grand format",
    title: "Bâches & banderoles",
    shortDesc: "Affichage grand format outdoor.",
    longDesc:
      "Bâches PVC enduites grand format pour vos campagnes publicitaires, événements ou habillages d'échafaudages. Disponibles en versions classiques ou micro-perforées (anti-vent).",
    highlights: [
      "Grammages de 440 à 680 g/m²",
      "Œillets et ourlets sur mesure",
      "Bâches micro-perforées (anti-vent, transparence)",
      "Encres résistantes UV",
    ],
  },
  {
    slug: "signaletique-routiere",
    href: "/produits/signaletique-routiere",
    icon: TrafficCone,
    category: "Sécurité",
    title: "Signalétique routière",
    shortDesc: "Conforme aux normes de sécurité.",
    longDesc:
      "Panneaux de signalisation routière, panneaux de chantier et signalisation de sécurité conformes aux normes en vigueur. Films rétroréfléchissants pour une visibilité optimale de jour comme de nuit.",
    highlights: [
      "Films rétroréfléchissants classes 1 et 2",
      "Panneaux conformes aux normes",
      "Supports galvanisés anti-corrosion",
      "Pose et maintenance assurées",
    ],
  },
];
