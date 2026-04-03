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
      { label: "Enseignes LED", href: "/produits/enseignes-led", desc: "Économiques & durables" },
      { label: "Totems & pylônes", href: "/produits/totems", desc: "Visibilité maximale" },
      { label: "Vitrines & adhésifs", href: "/produits/vitrines", desc: "Décoration & communication" },
      { label: "Kakémono & roll-up", href: "/produits/kakemono", desc: "Stands & événements" },
      { label: "Bâches & banderoles", href: "/produits/baches", desc: "Grand format outdoor" },
      { label: "Signalétique routière", href: "/produits/signaletique-routiere", desc: "Norme & sécurité" },
    ],
  },
  { label: "Nos Réalisations", href: "/realisations" },
  { label: "Demande de Devis", href: "/devis" },
  { label: "Nous Contacter", href: "/contact" },
];