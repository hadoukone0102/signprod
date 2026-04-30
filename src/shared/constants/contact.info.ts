/**
 * Coordonnées officielles SignProd — source unique pour tout le site.
 * Modifier ici met à jour : header, footer, page contact, devis, mentions légales…
 */
export const CONTACT = {
  company: "SignProd",

  address: {
    /** Affichage en une ligne */
    short: "Abidjan, Marcory-Biétry, Rue du Canal",
    /** Composantes */
    city: "Abidjan",
    district: "Marcory-Biétry",
    street: "Rue du Canal",
    country: "Côte d'Ivoire",
  },

  phone: {
    /** Affichage humain */
    label: "(+225) 27 21 35 35 21",
    /** Format E.164 pour href="tel:" */
    href: "tel:+2252721353521",
    /** Libellé court (ex : top bar) */
    short: "(+225) 27 21 35 35 21",
  },

  /** Second numéro (ex. mobile / permanence) */
  phoneSecondary: {
    label: "(+225) 07 02 25 97 47",
    href: "tel:+2250702259747",
    short: "(+225) 07 02 25 97 47",
  },

  email: {
    label: "infos@signprod.com",
    href: "mailto:infos@signprod.com",
  },

  hours: {
    /** Format compact (header / cartes) */
    compact: ["Lun – Ven : 08h – 12h & 14h – 18h", "Samedi : 08h – 12h"],
    /** Format détaillé (page contact / mentions) */
    full: [
      "Du lundi au vendredi : 08h – 12h00 et 14h – 18h",
      "Le samedi : 08h – 12h00",
    ],
    /** Schema.org / structured data (optionnel) */
    schema: ["Mo-Fr 08:00-12:00,14:00-18:00", "Sa 08:00-12:00"],
  },
} as const;
