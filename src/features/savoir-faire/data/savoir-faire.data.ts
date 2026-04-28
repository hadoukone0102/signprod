import {
  Lightbulb,
  Building2,
  MapPin,
  Printer,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface SavoirFaireItem {
  slug: string;
  href: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  applications: string[];
}

export const SAVOIR_FAIRE: SavoirFaireItem[] = [
  {
    slug: "enseignes",
    href: "/savoir-faire/enseignes",
    icon: Lightbulb,
    title: "Enseignes lumineuses",
    shortDesc: "LED, néon, caissons rétroéclairés et lettres relief.",
    longDesc:
      "Conception et fabrication d'enseignes lumineuses sur mesure pour donner une identité visuelle forte à votre commerce ou entreprise. De la lettre découpée rétroéclairée au caisson lumineux double face, nous maîtrisons l'ensemble des techniques.",
    features: [
      "Lettres relief LED haute luminosité",
      "Caissons lumineux simple ou double face",
      "Néon LED flexible nouvelle génération",
      "Habillage de devanture complet",
      "Étude photométrique préalable",
      "Garantie pièces et main-d'œuvre",
    ],
    applications: ["Commerces", "Restaurants", "Hôtels", "Pharmacies", "Stations-service"],
  },
  {
    slug: "signaletique-interieure",
    href: "/savoir-faire/signaletique-interieure",
    icon: MapPin,
    title: "Signalétique intérieure",
    shortDesc: "Bureaux, commerces, hôtels, espaces accueil.",
    longDesc:
      "Signalétique d'orientation, d'identification et de sécurité pour vos espaces intérieurs. Nous concevons une signalétique cohérente avec votre charte graphique pour faciliter le parcours de vos visiteurs et collaborateurs.",
    features: [
      "Plaques de porte et d'identification",
      "Panneaux directionnels",
      "Numérotation d'étages et de bureaux",
      "Signalétique évacuation et sécurité",
      "Vitrophanies dépolies",
      "Pictogrammes et marquage au sol",
    ],
    applications: ["Bureaux", "Hôtels", "Cliniques", "Centres commerciaux", "Administrations"],
  },
  {
    slug: "signaletique-exterieure",
    href: "/savoir-faire/signaletique-exterieure",
    icon: MapPin,
    title: "Signalétique extérieure",
    shortDesc: "Panneaux, totem, pylônes, signalisation urbaine.",
    longDesc:
      "Solutions de signalétique extérieure résistantes aux intempéries et conçues pour une visibilité optimale. Du totem d'entrée de site aux panneaux directionnels, nous fabriquons des supports durables et conformes.",
    features: [
      "Totems et pylônes publicitaires",
      "Panneaux directionnels et d'identification",
      "Mâts porte-drapeaux",
      "Signalisation de chantier",
      "Habillage de clôture",
      "Matériaux résistants UV et corrosion",
    ],
    applications: ["Sites industriels", "Centres commerciaux", "Stations-service", "Lotissements", "Collectivités"],
  },
  {
    slug: "impression",
    href: "/savoir-faire/impression",
    icon: Printer,
    title: "Impression grand format",
    shortDesc: "Bâches, visuels, adhésifs, vinyles haute résolution.",
    longDesc:
      "Impression numérique grand format en haute définition sur tous types de supports : bâches PVC, vinyles adhésifs, papier blueback, toiles tendues. Idéal pour vos campagnes publicitaires et événements.",
    features: [
      "Impression jusqu'à 5m de laisse",
      "Encres écosolvant et latex",
      "Bâches micro-perforées",
      "Adhésifs vitrines monomère et polymère",
      "Découpe vectorielle et lamination",
      "Délais courts pour vos urgences",
    ],
    applications: ["Affichage urbain", "Événementiel", "Salons & stands", "Habillage véhicules", "Décoration murale"],
  },
  {
    slug: "facades",
    href: "/savoir-faire/facades",
    icon: Building2,
    title: "Concept façade",
    shortDesc: "Habillage, revêtement et identité de façade.",
    longDesc:
      "Études et réalisations de concepts façade pour transformer l'apparence de votre bâtiment et marquer votre identité de marque. Bardages, panneaux composites, lettres reliefs : nous coordonnons l'ensemble du projet.",
    features: [
      "Étude technique et 3D préalable",
      "Bardage aluminium et composite (Alucobond, Dibond)",
      "Habillage acrylique et plexiglas",
      "Lettres reliefs grand format",
      "Coordination avec architectes et bureaux d'études",
      "Pose en hauteur sécurisée (nacelles, échafaudages)",
    ],
    applications: ["Sièges sociaux", "Centres commerciaux", "Banques", "Concessions automobiles", "Hôtels"],
  },
];

export const EXPERTISE_PILLARS = [
  {
    icon: Layers,
    title: "Conception",
    desc: "Direction artistique, maquettes et validation client.",
  },
  {
    icon: Layers,
    title: "Fabrication",
    desc: "Production sur mesure dans nos ateliers.",
  },
  {
    icon: Layers,
    title: "Pose & SAV",
    desc: "Installation soignée et maintenance sur site.",
  },
];
