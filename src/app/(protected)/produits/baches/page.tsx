import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Bâches & banderoles | SignProd",
  description: "Bâches PVC grand format pour vos campagnes publicitaires et événements.",
};

export default function Page() {
  return <ProduitsDetailView slug="baches" />;
}
