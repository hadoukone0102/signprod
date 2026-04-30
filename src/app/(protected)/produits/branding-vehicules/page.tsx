import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Branding véhicule & covering | SignProd",
  description:
    "Habillage et covering de véhicules utilitaires et flottes : adhésifs haute tenue, charte graphique.",
};

export default function Page() {
  return <ProduitsDetailView slug="branding-vehicules" />;
}
