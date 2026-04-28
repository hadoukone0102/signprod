import type { Metadata } from "next";
import SavoirFaireDetailView from "@/features/savoir-faire/views/savoir-faire-detail.view";

export const metadata: Metadata = {
  title: "Signalétique extérieure | SignProd",
  description:
    "Totems, pylônes, panneaux et signalisation extérieure résistants aux intempéries.",
};

export default function Page() {
  return <SavoirFaireDetailView slug="signaletique-exterieure" />;
}
