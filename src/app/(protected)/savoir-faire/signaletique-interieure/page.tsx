import type { Metadata } from "next";
import SavoirFaireDetailView from "@/features/savoir-faire/views/savoir-faire-detail.view";

export const metadata: Metadata = {
  title: "Signalétique intérieure | SignProd",
  description:
    "Plaques, panneaux directionnels, vitrophanies et signalétique de sécurité pour vos espaces intérieurs.",
};

export default function Page() {
  return <SavoirFaireDetailView slug="signaletique-interieure" />;
}
