import type { Metadata } from "next";
import ContactView from "@/features/contact/views/contact.view";

export const metadata: Metadata = {
  title: "Nous Contacter | SignProd",
  description: "Contactez SignProd à Abidjan : coordonnées, formulaire et horaires d'ouverture.",
};

export default function Page() {
  return <ContactView />;
}
