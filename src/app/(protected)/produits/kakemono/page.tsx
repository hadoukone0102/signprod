import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Kakémono & roll-up | SignProd",
  description: "Roll-up et kakémonos pour vos stands, salons et événements professionnels.",
};

export default function Page() {
  return <ProduitsDetailView slug="kakemono" />;
}
