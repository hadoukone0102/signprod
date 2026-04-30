import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Impression 3D foam & lettres volume | SignProd",
  description:
    "Lettres et logos relief en mousse : signalétique décorative, stands et vitrines sur mesure.",
};

export default function Page() {
  return <ProduitsDetailView slug="impression-3d-foam" />;
}
