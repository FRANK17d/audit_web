import type { Metadata } from "next";
import { SupportCommunicationsView } from "@/components/support/support-views";

export const metadata: Metadata = {
  title: "Comunicaciones de soporte",
  description: "Vista de comunicaciones entre soporte y solicitantes.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SupportCommunicationsPage() {
  return <SupportCommunicationsView />;
}
