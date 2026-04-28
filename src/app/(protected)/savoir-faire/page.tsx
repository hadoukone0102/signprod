import type { Metadata } from "next";
import SavoirFaireOverviewView from "@/features/savoir-faire/views/savoir-faire-overview.view";

export const metadata: Metadata = {
  title: "Notre Savoir-Faire | SignProd",
  description:
    "Découvrez les expertises SignProd : enseignes lumineuses, signalétique intérieure et extérieure, impression grand format et concept façade.",
};

export default function Page() {
  return <SavoirFaireOverviewView />;
}
