import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Vitrines & adhésifs | SignProd",
  description: "Adhésifs vitrines, vitrophanies dépolies et lettres prédécoupées.",
};

export default function Page() {
  return <ProduitsDetailView slug="vitrines" />;
}
