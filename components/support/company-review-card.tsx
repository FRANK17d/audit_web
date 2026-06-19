import { Building2, MapPin } from "lucide-react";
import type { SupportRequest } from "@/types/support";

export function CompanyReviewCard({ request }: { request: SupportRequest }) {
  return (
    <article className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
          <Building2 size={19} />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Datos de empresa
          </p>
          <h2 className="font-display text-lg font-extrabold text-slate-950 sm:text-xl">
            {request.company}
          </h2>
        </div>
      </div>
      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        {request.companyFields.map((field) => (
          <div key={field.label} className="rounded-2xl bg-rose-50/60 p-3">
            <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
              {field.label}
            </dt>
            <dd className="mt-1 text-sm font-bold text-slate-800">{field.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 flex items-start gap-2 rounded-2xl border border-rose-100 bg-white p-3 text-xs leading-5 text-slate-500 sm:text-sm">
        <MapPin size={16} className="mt-0.5 shrink-0 text-rose-500" />
        {request.address}
      </p>
    </article>
  );
}
