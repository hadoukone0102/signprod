import type { Metadata } from "next";
import LegalPageView from "@/features/legal/views/legal-page.view";

export const metadata: Metadata = {
  title: "Conditions générales de vente | SignProd",
  description: "CGV applicables aux produits et prestations SignProd.",
};

export default function Page() {
  return <LegalPageView slug="cgv" />;
}
