import { CheckCircle2, CircleX, HelpCircle } from "lucide-react";
import type { SupportRequest } from "@/types/support";

export function DecisionPanel({ request }: { request: SupportRequest }) {
  return (
    <aside className="rounded-[2rem] border border-white/80 bg-slate-950 p-4 text-white shadow-[0_24px_90px_rgba(15,23,42,0.22)] sm:p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-200">
        Decision de soporte
      </p>
      <h2 className="mt-2 font-display text-2xl font-light tracking-tight">
        {request.id}
      </h2>
      <p className="mt-3 text-xs leading-6 text-slate-300 sm:text-sm">
        Cuando la informacion sea correcta, soporte puede aprobar la solicitud,
        generar token por 3 dias y enviar el correo al Auditor Admin.
      </p>
      <div className="mt-5 grid gap-2">
        <button
          type="button"
          className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-rose-500 px-4 text-sm font-extrabold text-white shadow-lg shadow-rose-500/25 transition hover:bg-rose-600"
        >
          <CheckCircle2 size={17} />
          Aprobar solicitud
        </button>
        <button
          type="button"
          className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/10 px-4 text-sm font-extrabold text-white ring-1 ring-white/15 transition hover:bg-white/15"
        >
          <HelpCircle size={17} />
          Solicitar informacion
        </button>
        <button
          type="button"
          className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-extrabold text-slate-950 transition hover:bg-rose-50"
        >
          <CircleX size={17} />
          Rechazar solicitud
        </button>
      </div>
    </aside>
  );
}
