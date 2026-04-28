import type { Metadata } from "next";
import LegalPageView from "@/features/legal/views/legal-page.view";

export const metadata: Metadata = {
  title: "Politique de confidentialité | SignProd",
  description: "Politique de confidentialité et de traitement des données personnelles SignProd.",
};

export default function Page() {
  return <LegalPageView slug="politique-confidentialite" />;
}
