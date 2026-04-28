import type { Metadata } from "next";
import LegalPageView from "@/features/legal/views/legal-page.view";

export const metadata: Metadata = {
  title: "Mentions légales | SignProd",
  description: "Mentions légales du site SignProd : éditeur, hébergement, propriété intellectuelle.",
};

export default function Page() {
  return <LegalPageView slug="mentions-legales" />;
}
