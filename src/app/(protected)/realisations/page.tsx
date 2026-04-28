import type { Metadata } from "next";
import RealisationsView from "@/features/realisations/views/realisations.view";

export const metadata: Metadata = {
  title: "Nos Réalisations | SignProd",
  description:
    "Plus de 500 projets réalisés : enseignes lumineuses, signalétique, façades et impressions grand format à Abidjan.",
};

export default function Page() {
  return <RealisationsView />;
}
