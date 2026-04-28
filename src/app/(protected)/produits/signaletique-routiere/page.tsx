import type { Metadata } from "next";
import ProduitsDetailView from "@/features/produits/views/produits-detail.view";

export const metadata: Metadata = {
  title: "Signalétique routière | SignProd",
  description: "Panneaux de signalisation routière et de sécurité conformes aux normes.",
};

export default function Page() {
  return <ProduitsDetailView slug="signaletique-routiere" />;
}
