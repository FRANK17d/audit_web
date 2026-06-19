import { CalendarDays, FileText, ListChecks } from "lucide-react";
import { StatusBadge } from "@/components/ui/badge/status-badge";
import type { SupportRequest } from "@/types/support";

export function RequestDetailCard({ request }: { request: SupportRequest }) {
  return (
    <article className="rounded-[2rem] border border-white/80 bg-white/90 p-4 shadow-[0_24px_90px_rgba(255,92,147,0.14)] backdrop-blur-xl sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-extrabold text-rose-600 ring-1 ring-rose-100">
              {request.id}
            </span>
            <StatusBadge label={request.status} />
            <StatusBadge label={request.priority} />
          </div>
          <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-slate-950 sm:text-4xl">
            {request.company}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
            {request.summary}
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-rose-100 bg-rose-50/60 p-4 lg:min-w-64">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Progreso de revision
          </p>
          <p className="mt-2 font-display text-3xl font-extrabold text-slate-950">
            {request.progress}%
          </p>
          <div className="mt-3 h-2 rounded-full bg-white">
            <div
              className="h-full rounded-full bg-rose-500"
              style={{ width: `${request.progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-rose-100 bg-white p-3">
          <CalendarDays size={16} className="text-rose-500" />
          <p className="mt-2 text-xs text-slate-400">Fecha</p>
          <p className="font-bold text-slate-800">{request.submittedAt}</p>
        </div>
        <div className="rounded-2xl border border-rose-100 bg-white p-3">
          <ListChecks size={16} className="text-rose-500" />
          <p className="mt-2 text-xs text-slate-400">Pendientes</p>
          <p className="font-bold text-slate-800">
            {request.pendingItems.length || "Sin pendientes"}
          </p>
        </div>
        <div className="rounded-2xl border border-rose-100 bg-white p-3">
          <FileText size={16} className="text-rose-500" />
          <p className="mt-2 text-xs text-slate-400">Documentos</p>
          <p className="font-bold text-slate-800">{request.documents.length} adjuntos</p>
        </div>
      </div>
    </article>
  );
}
