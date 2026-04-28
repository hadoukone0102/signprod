import type { Metadata } from "next";
import SavoirFaireDetailView from "@/features/savoir-faire/views/savoir-faire-detail.view";

export const metadata: Metadata = {
  title: "Enseignes lumineuses | SignProd",
  description:
    "Conception et fabrication d'enseignes lumineuses LED, néon et caissons rétroéclairés sur mesure à Abidjan.",
};

export default function Page() {
  return <SavoirFaireDetailView slug="enseignes" />;
}
