import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Totems & pylônes | SignProd",
  description: "Totems publicitaires et pylônes d'entrée de site pour une visibilité maximale.",
};

export default function Page() {
  return <ProduitsDetailView slug="totems" />;
}
