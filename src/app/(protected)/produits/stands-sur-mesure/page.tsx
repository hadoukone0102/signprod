import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Stands sur mesure & PLV | SignProd",
  description:
    "Stands, présentoirs et linéaires sur mesure pour points de vente et campagnes retail.",
};

export default function Page() {
  return <ProduitsDetailView slug="stands-sur-mesure" />;
}
