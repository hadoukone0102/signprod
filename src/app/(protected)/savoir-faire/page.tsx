import type { Metadata } from "next";
import SavoirFaireOverviewView from "@/features/savoir-faire/views/savoir-faire-overview.view";

export const metadata: Metadata = {
  title: "Notre Savoir-Faire | SignProd",
  description:
    "Cinq expertises en communication visuelle : enseignes, signalétique intérieure et extérieure, impression grand format, concept façade. Présentation illustrée et fiches détaillées.",
};

export default function Page() {
  return <SavoirFaireOverviewView />;
}
