import type { Metadata } from "next";
import RealisationsView from "@/features/realisations/views/realisations.view";

export const metadata: Metadata = {
  title: "Nos Réalisations | SignProd",
  description:
    "Plus de 100 projets livrés : enseignes, signalétique, façades, marques partenaires et dossiers thématiques à Abidjan.",
};

export default function Page() {
  return <RealisationsView />;
}
