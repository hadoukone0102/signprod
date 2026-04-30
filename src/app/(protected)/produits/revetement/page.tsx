import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Revêtement de façades & bardage | SignProd",
  description:
    "Bardage, HPL et habillage de façades tertiaire et hôtellerie : étude, fabrication et pose en Côte d'Ivoire.",
};

export default function Page() {
  return <ProduitsDetailView slug="revetement-facades" />;
}
