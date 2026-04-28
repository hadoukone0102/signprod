import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Enseignes LED | SignProd",
  description: "Enseignes lumineuses LED économiques, durables et personnalisables.",
};

export default function Page() {
  return <ProduitsDetailView slug="enseignes-led" />;
}
