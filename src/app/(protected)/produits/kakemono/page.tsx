import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Stands événementiel & roll-up | SignProd",
  description: "Roll-up, kakémonos et murs visuels pour salons, roadshows et opérations événementielles.",
};

export default function Page() {
  return <ProduitsDetailView slug="kakemono" />;
}
