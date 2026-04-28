import type { Metadata } from "next";
import SavoirFaireDetailView from "@/features/savoir-faire/views/savoir-faire-detail.view";

export const metadata: Metadata = {
  title: "Impression grand format | SignProd",
  description:
    "Impression numérique grand format sur bâches, vinyles, adhésifs et toiles tendues.",
};

export default function Page() {
  return <SavoirFaireDetailView slug="impression" />;
}
