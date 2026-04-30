import type { Metadata } from "next";
import SavoirFaireDetailView from "@/features/savoir-faire/views/savoir-faire-detail.view";

export const metadata: Metadata = {
  title: "Signalétique intérieure & extérieure | SignProd",
  description:
    "Signalétique sur mesure : orientation, totems, panneaux et PLV pour sites, commerces et établissements à Abidjan.",
};

export default function Page() {
  return <SavoirFaireDetailView slug="signaletique" />;
}
