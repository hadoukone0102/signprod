import type { Metadata } from "next";
import SavoirFaireDetailView from "@/features/savoir-faire/views/savoir-faire-detail.view";

export const metadata: Metadata = {
  title: "Stands sur mesure | SignProd",
  description:
    "Présentoirs, linéaires et PLV sur mesure pour retail et points de vente : conception, fabrication et pose à Abidjan.",
};

export default function Page() {
  return <SavoirFaireDetailView slug="stands-sur-mesure" />;
}
