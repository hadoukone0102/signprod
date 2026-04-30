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
      { label: "Revêtement de Façades", href: "/savoir-faire/facades", desc: "Bardage, HPL" },
      { label: "Enseignes Lumineuses", href: "/produits/enseignes-led", desc: "LED, caissons" },
      { label: "Signalétique", href: "/produits/signaletique-routiere", desc: "Parcours, accès" },
      { label: "Totems et Drapeaux", href: "/produits/totems", desc: "Haute visibilité" },
      { label: "Agencement et Décoration", href: "/produits/vitrines", desc: "Espaces, vitrines" },
      { label: "Branding Véhicules", href: "/devis", desc: "Flottes, covering" },
      { label: "Display", href: "/devis", desc: "PLV, linéaires" },
      { label: "Impression Grand format", href: "/produits/baches", desc: "Bâches, banderoles" },
      { label: "Stands et PLV", href: "/produits/kakemono", desc: "Salons, roll-up" },
      { label: "Cover Style", href: "/contact", desc: "Finitions cover" },
      { label: "Stations Services", href: "/contact", desc: "Réseau station" },
    ],
  },
  { label: "Nos Réalisations", href: "/realisations" },
  { label: "Demande de Devis", href: "/devis" },
  { label: "Nous Contacter", href: "/contact" },
];