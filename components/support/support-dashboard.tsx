"use client";

import Link from "next/link";
import { ArrowRight, Clock3, FileWarning, ShieldCheck } from "lucide-react";
import { CommunicationPanel } from "@/components/support/communication-panel";
import { RequestsTable } from "@/components/support/requests-table";
import { SupportMetrics } from "@/components/support/support-metrics";
import { SupportShell } from "@/components/support/support-shell";
import { StatusBadge } from "@/components/ui/badge/status-badge";
import {
  featuredSupportRequest,
  supportMessages,
  supportRequests,
} from "@/lib/support-data";

export function SupportDashboard() {
  return (
    <SupportShell
      activeKey="dashboard"
      eyebrow="Panel privado"
      title="Resumen de soporte"
      description="Monitorea solicitudes de registro, validaciones externas y comunicaciones pendientes antes de aprobar o rechazar empresas."
      actions={
        <Link
          href="/soporte/solicitudes"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-rose-500 px-4 text-sm font-extrabold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-600 sm:h-12"
        >
          Ver solicitudes
          <ArrowRight size={15} />
        </Link>
      }
    >
      <div className="grid gap-4 sm:gap-5">
        <SupportMetrics />

        <section className="grid gap-4 xl:grid-cols-[1fr_24rem]">
          <div className="grid gap-4">
            <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_24px_90px_rgba(255,92,147,0.12)] backdrop-blur-xl sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge label={featuredSupportRequest.status} />
                    <StatusBadge label={featuredSupportRequest.priority} />
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-slate-950 sm:text-4xl">
                    {featuredSupportRequest.company}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                    {featuredSupportRequest.summary}
                  </p>
                </div>
                <Link
                  href={`/soporte/solicitudes/${featuredSupportRequest.id}`}
                  className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-extrabold text-white transition hover:bg-rose-600"
                >
                  Revisar ahora
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>

            <RequestsTable requests={supportRequests.slice(0, 3)} compact />
          </div>

          <div className="grid gap-4">
            <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Resumen del dia
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["12", "Recibidas"],
                  ["7", "En revision"],
                  ["5", "Respondidas"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-2xl font-extrabold text-slate-950">
                      {value}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/80 bg-slate-950 p-4 text-white shadow-[0_18px_70px_rgba(15,23,42,0.22)] sm:p-5">
              <ShieldCheck className="text-rose-300" size={22} />
              <h2 className="mt-4 font-display text-2xl font-light tracking-tight">
                8 aprobaciones
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                3 criticas y 5 menores esperando decision final del equipo.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-rose-50 text-rose-600">
                  <FileWarning size={17} />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-slate-950">Riesgos activos</p>
                  <p className="text-xs text-slate-500">2 documentos observados</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-rose-50/70 p-3 text-xs text-slate-500">
                <Clock3 size={16} className="text-rose-500" />
                SLA critico vence en 48 min.
              </div>
            </article>

            <CommunicationPanel messages={supportMessages.slice(0, 2)} compact />
          </div>
        </section>
      </div>
    </SupportShell>
  );
}
