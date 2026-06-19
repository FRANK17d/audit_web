import { CheckCircle2, CircleAlert, Clock3 } from "lucide-react";
import { StatusBadge } from "@/components/ui/badge/status-badge";
import type { SupportRequest, ValidationStatus } from "@/types/support";

const checkIcons = {
  Validado: CheckCircle2,
  Observado: CircleAlert,
  Pendiente: Clock3,
} satisfies Record<ValidationStatus, typeof CheckCircle2>;

export function ExternalChecksCard({ request }: { request: SupportRequest }) {
  return (
    <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Validaciones externas
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold text-slate-950 sm:text-xl">
            SUNAT, RENIEC y duplicidad
          </h2>
        </div>
        <StatusBadge label="En revision" />
      </div>
      <div className="mt-5 grid gap-3">
        {request.externalChecks.map((check) => {
          const Icon = checkIcons[check.status];

          return (
            <div
              key={check.label}
              className="flex items-start gap-3 rounded-2xl border border-rose-100/80 bg-white p-3"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-rose-50 text-rose-600">
                <Icon size={17} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-extrabold text-slate-950">{check.label}</p>
                  <StatusBadge label={check.status} />
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  {check.source}: {check.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
