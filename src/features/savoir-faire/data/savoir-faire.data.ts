import {
  Lightbulb,
  Building2,
  Signpost,
  Printer,
  PenLine,
  Factory,
  Wrench,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

export type SavoirFeatureVariant = "check" | "bullet";

export interface SavoirFaireItem {
  slug: string;
  href: string;
  relatedProductHref: string;
  icon: LucideIcon;
  title: string;
  /** Accroche sous le titre */
  shortDesc: string;
  /** Paragraphe complémentaire (optionnel, ex. concept façade) */
  lead?: string;
  longDesc: string;
  features: string[];
  featureVariant: SavoirFeatureVariant;
  applications: string[];
  /** Phrase de clôture avant la ligne secteurs */
  closingLine: string;
  image: string;
}

export const SAVOIR_FAIRE: SavoirFaireItem[] = [
  {
    slug: "enseignes",
    href: "/savoir-faire/enseignes",
    relatedProductHref: "/produits/enseignes-led",
    icon: Lightbulb,
    title: "Enseignes lumineuses",
    shortDesc: "Faites rayonner votre marque, de jour comme de nuit.",
    longDesc:
      "Votre enseigne est le premier signal de votre identité. Nous concevons et fabriquons des solutions lumineuses à fort impact — lettres relief, caissons premium et néon LED nouvelle génération — pour vous démarquer et rester visible en toute circonstance.",
    features: [
      "Lettres lumineuses sur mesure à fort impact visuel",
      "Caissons premium simple & double face",
      "Néon LED nouvelle génération, design et durable",
    ],
    featureVariant: "bullet",
    closingLine: "Attirez, marquez, dominez votre environnement.",
    applications: ["Commerces", "Restaurants", "Hôtels", "Pharmacies", "Stations-service"],
    image: "/asset/produit/enseigne.png",
  },
  {
    slug: "stands-sur-mesure",
    href: "/savoir-faire/stands-sur-mesure",
    relatedProductHref: "/produits/stands-sur-mesure",
    icon: LayoutGrid,
    title: "Stands sur mesure",
    shortDesc:
      "Des linéaires et îlots qui mettent vos produits en scène — et le parcours d’achat en confiance.",
    longDesc:
      "En point de vente ou en showroom, la présentation fait la différence sur le panier moyen et l’image de marque. Nous concevons des agencements sur mesure — linéaires, îlots, comptoirs, corners et zones mises en avant — puis les réalisons en atelier et les posons sur site : volumes étudiés, matériaux adaptés au public, graphisme et signalétique dans la continuité de votre univers. Le résultat : un espace lisible, valorisant et pensé pour durer — pas un kit jetable réservé au salon.",
    features: [
      "Agencement retail sur cote : linéaires, îlots, comptoirs, zones promo",
      "Habillage graphique, éclairage d’accent et repères de parcours",
      "Fabrication en atelier, pose qualifiée, évolutions possibles selon vos campagnes",
    ],
    featureVariant: "bullet",
    closingLine: "Mieux présenter, c’est mieux vendre — avec un environnement à votre image.",
    applications: ["Retail", "Showrooms", "Grande distribution", "Lancements produit", "Concept stores"],
    image: "/asset/produit/standsurmesur.png",
  },
  {
    slug: "facades",
    href: "/savoir-faire/facades",
    relatedProductHref: "/produits/revetement",
    icon: Building2,
    title: "Concept façade",
    shortDesc: "Transformez votre bâtiment en signature visuelle.",
    lead: "Habillage architectural haut de gamme pour valoriser votre image et attirer l’attention.",
    longDesc:
      "Un bâtiment remarquable renforce la confiance et la mémorisation de marque. Nous pilotons la conception 3D, le choix des matériaux et la mise en œuvre jusqu’à la pose en hauteur, pour une façade à la fois esthétique, durable et adaptée au climat local.",
    features: [
      "Conception 3D & étude technique sur mesure",
      "Façades aluminium, composite ",
      "Solutions esthétiques, durables et adaptées au climat",
    ],
    featureVariant: "check",
    closingLine: "De l’idée à la réalisation, on donne une identité forte à vos espaces.",
    applications: ["Sièges sociaux", "Retail", "Banques", "Concessions", "Hôtels"],
    image: "/asset/produit/revetement1.jpg",
  },
  {
    slug: "signaletique",
    href: "/savoir-faire/signaletique",
    relatedProductHref: "/produits/signaletique-routiere",
    icon: Signpost,
    title: "Signalétique",
    shortDesc: "Orientez, structurez, valorisez.",
    longDesc:
      "Une signalétique lisible et harmonisée avec votre charte fluidifie les parcours et renforce le professionnalisme perçu. Nous couvrons l’intérieur et l’extérieur : totems, panneaux, directionnels et dispositifs de PLV, avec un design clair et cohérent.",
    features: [
      "Signalétique intérieure & extérieure",
      "Totems, panneaux, directionnels, PLV",
      "Design clair, lisible et esthétique",
    ],
    featureVariant: "bullet",
    closingLine: "Une communication visuelle fluide et professionnelle.",
    applications: ["Sites industriels", "Centres commerciaux", "Hôpitaux", "Grands marchés", "Tertiaire"],
    image: "/asset/produit/signaletique.jpg",
  },
  {
    slug: "impression",
    href: "/savoir-faire/impression",
    relatedProductHref: "/produits/baches",
    icon: Printer,
    title: "Impression grand format",
    shortDesc: "Donnez de l’impact à vos visuels.",
    longDesc:
      "L’impression grand format demeure un levier puissant pour la visibilité outdoor, les opérations ponctuelles et l’habillage d’espaces. Nous maîtrisons les workflows couleur, les supports et les finitions pour des rendus nets et durables.",
    features: [
      "Impression haute définition sur tous supports",
      "Bâches, vinyles, adhésifs, panneaux bois, PVC, PCA",
      "Finitions premium et durabilité garantie",
    ],
    featureVariant: "bullet",
    closingLine: "Des visuels qui attirent, renforcent et vendent.",
    applications: [],
    image: "/asset/produit/impressiongrandformat.jpg",
  },
];

export const EXPERTISE_PILLARS = [
  {
    icon: PenLine,
    title: "Conception",
    desc: "Brief, direction artistique, maquettes et validation avant production.",
  },
  {
    icon: Factory,
    title: "Fabrication",
    desc: "Réalisation sur mesure dans nos ateliers à Abidjan.",
  },
  {
    icon: Wrench,
    title: "Pose & SAV",
    desc: "Installation qualifiée, suivi et maintenance sur site.",
  },
];
