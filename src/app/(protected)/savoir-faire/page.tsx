import type { Metadata } from "next";
import SavoirFaireOverviewView from "@/features/savoir-faire/views/savoir-faire-overview.view";

export const metadata: Metadata = {
  title: "Notre Savoir-Faire | SignProd",
  description:
    "Cinq expertises : enseignes lumineuses, concept façade, signalétique, stands sur mesure, impression grand format. Une équipe, un savoir-faire, un contrôle total — Abidjan.",
};

export default function Page() {
  return <SavoirFaireOverviewView />;
}
