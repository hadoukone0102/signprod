import type { Metadata } from "next";
import ProduitsOverviewView from "@/features/produits/views/produits-overview.view";

export const metadata: Metadata = {
  title: "Nos Produits | SignProd",
  description:
    "Revêtement de façades, enseignes lumineuses, signalétique, totems, agencement, branding véhicules, display, impression grand format, stands PLV, cover style, stations services.",
};

export default function Page() {
  return <ProduitsOverviewView />;
}
