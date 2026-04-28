import { CONTACT } from "@/shared/constants/contact.info";

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalPageData {
  slug: string;
  title: string;
  highlight?: string;
  description: string;
  sections: LegalSection[];
}

export const LEGAL_PAGES: Record<string, LegalPageData> = {
  "mentions-legales": {
    slug: "mentions-legales",
    title: "Mentions",
    highlight: "légales",
    description:
      "Informations légales relatives à l'éditeur du site, à l'hébergement et aux droits de propriété intellectuelle.",
    sections: [
      {
        title: "Éditeur du site",
        paragraphs: [
          "Le site signprod.com est édité par SignProd, entreprise spécialisée dans la communication visuelle.",
          `Siège social : ${CONTACT.address.short}, ${CONTACT.address.country}.`,
          `Téléphone : ${CONTACT.phone.label} — Email : ${CONTACT.email.label}`,
          `Horaires : ${CONTACT.hours.full.join(" ; ")}.`,
        ],
      },
      {
        title: "Directeur de la publication",
        paragraphs: ["Le directeur de la publication est le représentant légal de SignProd."],
      },
      {
        title: "Hébergement",
        paragraphs: [
          "Le site est hébergé par un prestataire technique professionnel garantissant la disponibilité et la sécurité des données.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        paragraphs: [
          "L'ensemble du contenu présent sur le site (textes, images, vidéos, logos, illustrations, marques) est la propriété exclusive de SignProd ou de ses partenaires.",
          "Toute reproduction, représentation ou diffusion, totale ou partielle, est strictement interdite sans autorisation écrite préalable.",
        ],
      },
      {
        title: "Crédits",
        paragraphs: [
          "Conception et développement : SignProd. Photographies et illustrations : SignProd et partenaires.",
        ],
      },
    ],
  },
  "politique-confidentialite": {
    slug: "politique-confidentialite",
    title: "Politique de",
    highlight: "confidentialité",
    description:
      "Comment nous collectons, utilisons et protégeons vos données personnelles dans le respect de la réglementation en vigueur.",
    sections: [
      {
        title: "Collecte des données",
        paragraphs: [
          "SignProd collecte uniquement les données strictement nécessaires au traitement de vos demandes (devis, contact, prise de rendez-vous).",
          "Les données collectées peuvent inclure : nom, prénom, email, téléphone, raison sociale et description du projet.",
        ],
      },
      {
        title: "Utilisation des données",
        paragraphs: [
          "Vos données sont utilisées exclusivement pour répondre à vos demandes et assurer le suivi de votre projet.",
          "Aucune donnée ne sera transmise à des tiers sans votre consentement explicite, sauf obligation légale.",
        ],
      },
      {
        title: "Conservation des données",
        paragraphs: [
          "Les données sont conservées pour la durée nécessaire à l'accomplissement des finalités énoncées, puis archivées ou supprimées conformément aux obligations légales.",
        ],
      },
      {
        title: "Vos droits",
        paragraphs: [
          "Vous disposez à tout moment d'un droit d'accès, de rectification, de suppression, d'opposition et de portabilité de vos données.",
          `Pour exercer ces droits, contactez-nous à l'adresse ${CONTACT.email.label} en justifiant de votre identité.`,
        ],
      },
      {
        title: "Cookies",
        paragraphs: [
          "Le site utilise des cookies techniques nécessaires à son bon fonctionnement et, le cas échéant, des cookies de mesure d'audience.",
          "Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies.",
        ],
      },
    ],
  },
  cgv: {
    slug: "cgv",
    title: "Conditions générales",
    highlight: "de vente",
    description:
      "Conditions applicables à la vente de produits et de prestations SignProd. Toute commande implique l'acceptation pleine et entière des présentes CGV.",
    sections: [
      {
        title: "1. Objet",
        paragraphs: [
          "Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre SignProd et ses clients pour la fourniture de produits et prestations de communication visuelle.",
        ],
      },
      {
        title: "2. Devis et commande",
        paragraphs: [
          "Tout devis émis par SignProd est valable 30 jours à compter de sa date d'émission, sauf mention contraire.",
          "La commande devient ferme et définitive à réception du devis signé et de l'acompte demandé.",
        ],
      },
      {
        title: "3. Prix et paiement",
        paragraphs: [
          "Les prix sont exprimés en FCFA, hors taxes et hors frais de pose, sauf indication contraire.",
          "Sauf accord particulier, les conditions de paiement sont : 50% à la commande, 50% à la livraison ou à la pose.",
        ],
      },
      {
        title: "4. Délais",
        paragraphs: [
          "Les délais annoncés sont indicatifs et courent à compter de la validation définitive du bon à tirer (BAT) et du paiement de l'acompte.",
          "SignProd s'engage à mettre tout en œuvre pour respecter les délais convenus.",
        ],
      },
      {
        title: "5. Pose et installation",
        paragraphs: [
          "Lorsque la pose est incluse, le client s'engage à mettre à disposition les accès et autorisations nécessaires.",
          "Toute intervention supplémentaire imprévue pourra faire l'objet d'une facturation complémentaire.",
        ],
      },
      {
        title: "6. Garantie",
        paragraphs: [
          "Les produits SignProd bénéficient d'une garantie pièces et main-d'œuvre dont la durée est précisée dans le devis.",
          "Cette garantie ne couvre pas les dégradations résultant d'un usage non conforme ou d'éléments extérieurs.",
        ],
      },
      {
        title: "7. Litiges",
        paragraphs: [
          "Les présentes CGV sont soumises au droit ivoirien. À défaut de règlement amiable, tout litige sera porté devant les juridictions compétentes d'Abidjan.",
        ],
      },
    ],
  },
};
