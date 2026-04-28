import type { Metadata } from "next";
import DevisView from "@/features/devis/views/devis.view";

export const metadata: Metadata = {
  title: "Demande de Devis | SignProd",
  description:
    "Recevez votre devis personnalisé sous 24h pour vos projets d'enseigne, signalétique et impression grand format.",
};

export default function Page() {
  return <DevisView />;
}
