import type { Metadata } from "next";
import { SupportRequestsView } from "@/components/support/support-views";

export const metadata: Metadata = {
  title: "Solicitudes de soporte",
  description: "Vista de solicitudes pendientes para Nos Planet Soporte.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SupportRequestsPage() {
  return <SupportRequestsView />;
}
