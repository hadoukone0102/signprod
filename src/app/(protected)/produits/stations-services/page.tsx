import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Signalétique stations-services | SignProd",
  description:
    "Totems, habillage pompes et dispositifs d’identité pour réseaux de stations-service.",
};

export default function Page() {
  return <ProduitsDetailView slug="stations-services" />;
}
