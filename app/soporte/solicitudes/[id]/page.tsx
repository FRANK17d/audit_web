import type { Metadata } from "next";
import { SupportRequestDetailView } from "@/components/support/support-views";
import { getSupportRequestById } from "@/lib/support-data";

export const metadata: Metadata = {
  title: "Detalle de solicitud",
  description: "Revision detallada de una solicitud de registro en soporte.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function SupportRequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const request = getSupportRequestById(id);

  return <SupportRequestDetailView request={request} />;
}
