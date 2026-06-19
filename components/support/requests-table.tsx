"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Filter, Search } from "lucide-react";
import { StatusBadge } from "@/components/ui/badge/status-badge";
import { supportRequests } from "@/lib/support-data";
import type { SupportRequest } from "@/types/support";

export function RequestsTable({
  requests = supportRequests,
  compact = false,
}: {
  requests?: SupportRequest[];
  compact?: boolean;
}) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/88 p-3 shadow-[0_24px_90px_rgba(255,92,147,0.12)] backdrop-blur-xl sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-lg font-extrabold text-slate-950 sm:text-2xl">
            Solicitudes recientes
          </h2>
          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
            Vista basada en el flujo de revision de Nos Planet Soporte.
          </p>
        </div>
        {!compact && (
          <div className="flex gap-2">
            <label className="relative block flex-1 sm:w-64">
              <span className="sr-only">Buscar solicitudes</span>
              <Search
                size={15}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                placeholder="Buscar"
                className="h-10 w-full rounded-full border border-rose-100 bg-white pl-9 pr-3 text-xs outline-none focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
              />
            </label>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full bg-rose-50 text-rose-600 ring-1 ring-rose-100"
              aria-label="Filtrar solicitudes"
            >
              <Filter size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 hidden overflow-hidden rounded-[1.5rem] border border-rose-100/80 md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-rose-50/70 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            <tr>
              <th className="px-4 py-3 font-extrabold">ID</th>
              <th className="px-4 py-3 font-extrabold">Empresa</th>
              <th className="px-4 py-3 font-extrabold">Solicitante</th>
              <th className="px-4 py-3 font-extrabold">RUC</th>
              <th className="px-4 py-3 font-extrabold">Fecha</th>
              <th className="px-4 py-3 font-extrabold">Estado</th>
              <th className="px-4 py-3 font-extrabold text-right">Accion</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-100/80 bg-white">
            {requests.map((request) => (
              <tr key={request.id} className="transition hover:bg-rose-50/40">
                <td className="px-4 py-4 font-bold text-rose-600">{request.id}</td>
                <td className="px-4 py-4">
                  <p className="font-bold text-slate-950">{request.company}</p>
                  <p className="mt-1 text-xs text-slate-400">{request.priority}</p>
                </td>
                <td className="px-4 py-4 text-slate-600">{request.requester}</td>
                <td className="px-4 py-4 font-medium text-slate-500">{request.ruc}</td>
                <td className="px-4 py-4 text-slate-500">{request.submittedAt}</td>
                <td className="px-4 py-4">
                  <StatusBadge label={request.status} />
                </td>
                <td className="px-4 py-4 text-right">
                  <Link
                    href={`/soporte/solicitudes/${request.id}`}
                    className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-600"
                  >
                    Revisar
                    <ArrowRight size={13} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid gap-3 md:hidden">
        {requests.map((request, index) => (
          <motion.article
            key={request.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="rounded-[1.5rem] border border-rose-100 bg-white p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-extrabold text-rose-600">{request.id}</p>
                <h3 className="mt-1 truncate font-display text-base font-extrabold text-slate-950">
                  {request.company}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{request.requester}</p>
              </div>
              <StatusBadge label={request.status} />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-500">
              <span>RUC: {request.ruc}</span>
              <span>{request.submittedAt}</span>
            </div>
            <Link
              href={`/soporte/solicitudes/${request.id}`}
              className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-rose-500 text-xs font-bold text-white"
            >
              Revisar solicitud
              <ArrowRight size={14} />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
