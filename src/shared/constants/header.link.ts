import { NavItem } from "../types/shared.type";

export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Notre Savoir-Faire", href: "/savoir-faire" },
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