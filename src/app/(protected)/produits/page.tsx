import type { Metadata } from "next";
import ProduitsOverviewView from "@/features/produits/views/produits-overview.view";

export const metadata: Metadata = {
  title: "Nos Produits | SignProd",
  description:
    "Enseignes LED, totems, vitrines, kakémonos, bâches et signalétique routière : découvrez tous les produits SignProd.",
};

export default function Page() {
  return <ProduitsOverviewView />;
}
