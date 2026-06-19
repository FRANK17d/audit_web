import type { Metadata } from "next";
import { SupportDashboard } from "@/components/support/support-dashboard";

export const metadata: Metadata = {
  title: "Panel de soporte",
  description: "Dashboard privado para el equipo de soporte de Audit.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SupportDashboardPage() {
  return <SupportDashboard />;
}
