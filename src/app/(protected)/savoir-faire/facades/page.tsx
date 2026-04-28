import type { Metadata } from "next";
import SavoirFaireDetailView from "@/features/savoir-faire/views/savoir-faire-detail.view";

export const metadata: Metadata = {
  title: "Concept façade | SignProd",
  description:
    "Habillage de façades, bardage composite et lettres reliefs grand format pour transformer vos bâtiments.",
};

export default function Page() {
  return <SavoirFaireDetailView slug="facades" />;
}
