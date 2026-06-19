import type { Metadata } from "next";
import { SupportSettingsView } from "@/components/support/support-views";

export const metadata: Metadata = {
  title: "Configuracion de soporte",
  description: "Configuracion visual del flujo privado de soporte.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SupportSettingsPage() {
  return <SupportSettingsView />;
}
