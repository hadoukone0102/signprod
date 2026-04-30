import { NavItem } from "../types/shared.type";

export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Notre Savoir-Faire", href: "/savoir-faire" },
  {
    label: "Nos Produits",
    href: "/produits",
    children: [
      { label: "Stands sur mesure", href: "/produits/stands-sur-mesure", desc: "Présentoirs, display, linéaires" },
      { label: "Stands événementiel", href: "/produits/kakemono", desc: "Salons, roll-up, murs visuels" },
      { label: "Revêtement", href: "/produits/revetement", desc: "Façades, bardage, HPL" },
      { label: "Enseignes", href: "/produits/enseignes-led", desc: "LED, caissons, lettres" },
      { label: "Signalétique", href: "/produits/signaletique-routiere", desc: "Parcours, accès" },
      { label: "Totem", href: "/produits/totems", desc: "Totems, drapeaux" },
      { label: "Impression 3D foam", href: "/produits/impression-3d-foam", desc: "Lettres volume, logos relief" },
      { label: "Impression grand format", href: "/produits/baches", desc: "Bâches, banderoles" },
      { label: "Branding véhicule", href: "/produits/branding-vehicules", desc: "Covering, flotte" },
      { label: "Agencement et décoration", href: "/produits/vitrines", desc: "Vitrines, espaces" },
      { label: "Cover Style", href: "/produits/cover-style", desc: "Finitions cover" },
      { label: "Stations services", href: "/produits/stations-services", desc: "Réseau station" },
    ],
  },
  { label: "Nos Réalisations", href: "/realisations" },
  { label: "Demande de Devis", href: "/devis" },
  { label: "Nous Contacter", href: "/contact" },
];