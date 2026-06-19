import type { Metadata } from "next";
import { SupportLogin } from "@/components/support/support-login";

export const metadata: Metadata = {
  title: "Soporte interno",
  description: "Inicio de sesion del panel privado de soporte de Audit.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SupportLoginPage() {
  return <SupportLogin />;
}
