import type { Metadata } from "next";
import ProduitsOverviewView from "@/features/produits/views/produits-overview.view";

export const metadata: Metadata = {
  title: "Nos Produits | SignProd",
  description:
    "Revêtement de façades, enseignes, signalétique, totems, stands sur mesure, stands événementiel, impression 3D foam, impression grand format, branding véhicule, agencement, cover style, stations services.",
};

export default function Page() {
  return <ProduitsOverviewView />;
}
