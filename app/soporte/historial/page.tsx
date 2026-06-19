import type { Metadata } from "next";
import { SupportHistoryView } from "@/components/support/support-views";

export const metadata: Metadata = {
  title: "Historial de soporte",
  description: "Historial privado de acciones del equipo de soporte.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SupportHistoryPage() {
  return <SupportHistoryView />;
}
