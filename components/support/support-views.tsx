"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Download, KeyRound } from "lucide-react";
import { AuditorReviewCard } from "@/components/support/auditor-review-card";
import { CommunicationPanel } from "@/components/support/communication-panel";
import { CompanyReviewCard } from "@/components/support/company-review-card";
import { DecisionPanel } from "@/components/support/decision-panel";
import { ExternalChecksCard } from "@/components/support/external-checks-card";
import { RequestDetailCard } from "@/components/support/request-detail-card";
import { RequestsTable } from "@/components/support/requests-table";
import { SupportShell } from "@/components/support/support-shell";
import { StatusBadge } from "@/components/ui/badge/status-badge";
import {
  featuredSupportRequest,
  supportHistoryItems,
  supportMessages,
  supportRequests,
  supportSettings,
} from "@/lib/support-data";
import type { SupportRequest } from "@/types/support";

export function SupportRequestsView() {
  return (
    <SupportShell
      activeKey="requests"
      eyebrow="Revision de empresas"
      title="Solicitudes de registro"
      description="Lista operativa para revisar solicitudes pendientes con ID, empresa, solicitante, RUC, fecha, estado y accion."
      actions={
        <Link
          href={`/soporte/solicitudes/${featuredSupportRequest.id}`}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-rose-500 px-4 text-sm font-extrabold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-600 sm:h-12"
        >
          Abrir critica
          <ArrowRight size={15} />
        </Link>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_22rem]">
        <RequestsTable requests={supportRequests} />
        <aside className="grid gap-4">
          <article className="rounded-[2rem] border border-white/80 bg-slate-950 p-4 text-white shadow-[0_24px_90px_rgba(15,23,42,0.2)] sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-200">
              Cola prioritaria
            </p>
            <p className="mt-3 font-display text-4xl font-extrabold">3</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Solicitudes criticas requieren decision antes de cumplir SLA.
            </p>
          </article>
          <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Flujo de soporte
            </p>
            <div className="mt-4 grid gap-3">
              {["Validar SUNAT", "Validar RENIEC", "Solicitar info", "Aprobar o rechazar"].map((step, index) => (
                <div key={step} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="grid size-8 place-items-center rounded-full bg-rose-50 text-xs text-rose-600">
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </article>
        </aside>
      </div>
    </SupportShell>
  );
}

export function SupportRequestDetailView({ request }: { request: SupportRequest }) {
  return (
    <SupportShell
      activeKey="requests"
      eyebrow="Detalle de solicitud"
      title="Revision y decision"
      description="Detalle completo con empresa, Auditor Admin, documentos, validaciones externas, observaciones internas y linea de tiempo."
      actions={
        <Link
          href="/soporte/solicitudes"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-extrabold text-rose-600 ring-1 ring-rose-100 transition hover:bg-rose-50 sm:h-12"
        >
          Volver a solicitudes
        </Link>
      }
    >
      <div className="grid gap-4 xl:grid-cols-[1fr_22rem]">
        <div className="grid gap-4">
          <RequestDetailCard request={request} />
          <div className="grid gap-4 lg:grid-cols-2">
            <CompanyReviewCard request={request} />
            <AuditorReviewCard request={request} />
          </div>
          <ExternalChecksCard request={request} />

          <section className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Documentos adjuntos
              </p>
              <div className="mt-4 grid gap-3">
                {request.documents.map((document) => (
                  <div key={document.name} className="flex items-center justify-between gap-3 rounded-2xl border border-rose-100 bg-white p-3">
                    <div>
                      <p className="text-sm font-extrabold text-slate-950">{document.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{document.type} - {document.size}</p>
                    </div>
                    <StatusBadge label={document.status} />
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Linea de tiempo
              </p>
              <div className="mt-4 grid gap-3">
                {request.timeline.map((event) => (
                  <div key={`${event.title}-${event.time}`} className="relative rounded-2xl border border-rose-100 bg-white p-3 pl-10">
                    <span className="absolute left-3 top-4 size-3 rounded-full bg-rose-500 ring-4 ring-rose-100" />
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-extrabold text-slate-950">{event.title}</p>
                      <span className="text-xs font-bold text-slate-400">{event.time}</span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{event.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>

        <div className="grid content-start gap-4">
          <DecisionPanel request={request} />
          <CommunicationPanel messages={supportMessages.slice(0, 2)} compact />
          <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Observaciones internas
            </p>
            <div className="mt-4 grid gap-3">
              {request.observations.map((observation) => (
                <p key={observation} className="rounded-2xl bg-rose-50/70 p-3 text-xs leading-5 text-slate-600 sm:text-sm">
                  {observation}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </SupportShell>
  );
}

export function SupportCommunicationsView() {
  return (
    <SupportShell
      activeKey="communications"
      eyebrow="Comunicaciones"
      title="Mensajes con solicitantes"
      description="Bandeja visual para solicitudes de informacion adicional, respuestas de usuarios y comunicaciones automaticas del sistema."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_22rem]">
        <CommunicationPanel messages={supportMessages} />
        <aside className="grid content-start gap-4">
          <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Plantillas rapidas
            </p>
            <div className="mt-4 grid gap-3">
              {["Falta informacion", "Documento observado", "Aprobacion enviada"].map((template) => (
                <button key={template} type="button" className="rounded-2xl border border-rose-100 bg-white p-3 text-left text-sm font-bold text-slate-700 transition hover:bg-rose-50">
                  {template}
                </button>
              ))}
            </div>
          </article>
          <article className="rounded-[2rem] border border-white/80 bg-slate-950 p-4 text-white shadow-[0_24px_90px_rgba(15,23,42,0.2)] sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-200">
              SLA de respuesta
            </p>
            <p className="mt-3 font-display text-4xl font-extrabold">18m</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Promedio actual para comunicaciones en revision.
            </p>
          </article>
        </aside>
      </div>
    </SupportShell>
  );
}

export function SupportHistoryView() {
  return (
    <SupportShell
      activeKey="history"
      eyebrow="Trazabilidad"
      title="Historial de soporte"
      description="Registro de aprobaciones, rechazos, solicitudes de informacion y eventos internos del flujo de soporte."
      actions={
        <button type="button" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-rose-500 px-4 text-sm font-extrabold text-white shadow-lg shadow-rose-500/20 sm:h-12">
          <Download size={15} />
          Exportar
        </button>
      }
    >
      <section className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_24px_90px_rgba(255,92,147,0.12)] backdrop-blur-xl sm:p-5">
        <div className="grid gap-3">
          {supportHistoryItems.map((item) => (
            <article key={item.id} className="grid gap-3 rounded-[1.5rem] border border-rose-100 bg-white p-3 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:p-4">
              <div>
                <p className="text-xs font-extrabold text-rose-600">{item.id}</p>
                <p className="mt-1 text-xs text-slate-400">{item.date}</p>
              </div>
              <div>
                <h2 className="text-sm font-extrabold text-slate-950 sm:text-base">{item.action}</h2>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{item.company} - {item.user}</p>
              </div>
              <StatusBadge label={item.result} />
            </article>
          ))}
        </div>
      </section>
    </SupportShell>
  );
}

export function SupportSettingsView() {
  return (
    <SupportShell
      activeKey="settings"
      eyebrow="Reglas internas"
      title="Configuracion de soporte"
      description="Vista de parametros operativos del flujo: vigencia de tokens, reenvios, SLA y reglas de validacion."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {supportSettings.map((setting) => (
          <article key={setting.title} className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
            <span className="grid size-11 place-items-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
              <KeyRound size={18} />
            </span>
            <h2 className="mt-5 font-display text-xl font-extrabold text-slate-950">{setting.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{setting.description}</p>
            <p className="mt-5 font-display text-3xl font-extrabold text-rose-600">{setting.value}</p>
          </article>
        ))}
      </div>

      <section className="mt-4 rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
            <CheckCircle2 size={18} />
          </span>
          <div>
            <h2 className="font-display text-xl font-extrabold text-slate-950">Validaciones activas</h2>
            <p className="text-sm text-slate-500">SUNAT, RENIEC, duplicidad de RUC, DNI, correo, dispositivo e IP.</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["SUNAT", "RENIEC", "Duplicidad", "Limites anti abuso"].map((item) => (
            <div key={item} className="rounded-2xl bg-rose-50/70 p-3 text-sm font-bold text-slate-700">
              <CalendarDays size={15} className="mb-2 text-rose-500" />
              {item}
            </div>
          ))}
        </div>
      </section>
    </SupportShell>
  );
}
