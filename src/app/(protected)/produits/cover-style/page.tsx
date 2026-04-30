import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Cover Style & finitions sur mesure | SignProd",
  description:
    "Habillages et finitions type cover pour stands, surfaces et supports d’exposition.",
};

export default function Page() {
  return <ProduitsDetailView slug="cover-style" />;
}
