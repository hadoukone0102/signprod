import { NavItem } from "../types/shared.type";

export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Notre Savoir-Faire",
    href: "/savoir-faire",
    children: [
      { label: "Enseignes lumineuses", href: "/savoir-faire/enseignes", desc: "LED, néon, caissons" },
      { label: "Signalétique intérieure", href: "/savoir-faire/signaletique-interieure", desc: "Bureaux, commerces, hôtels" },
      { label: "Signalétique extérieure", href: "/savoir-faire/signaletique-exterieure", desc: "Panneaux, totem, pylônes" },
      { label: "Impression grand format", href: "/savoir-faire/impression", desc: "Bâches, visuels, adhésifs" },
      { label: "Concept façade", href: "/savoir-faire/facades", desc: "Habillage & revêtement" },
    ],
  },
  {
    label: "Nos Produits",
    href: "/produits",
    children: [
      { label: "Enseignes lumineuses", href: "/produits/enseignes-led", desc: "LED, caissons, lettres" },
      { label: "Signalétique", href: "/produits/signaletique-routiere", desc: "Intérieur & extérieur" },
      { label: "Totems & drapeaux", href: "/produits/totems", desc: "Haute visibilité" },
      { label: "Agencement & décoration", href: "/produits/vitrines", desc: "Espaces & vitrines" },
      { label: "Stands & PLV", href: "/produits/kakemono", desc: "Salons, roll-up" },
      { label: "Impression grand format", href: "/produits/baches", desc: "Bâches & banderoles" },
    ],
  },
  { label: "Nos Réalisations", href: "/realisations" },
  { label: "Demande de Devis", href: "/devis" },
  { label: "Nous Contacter", href: "/contact" },
];