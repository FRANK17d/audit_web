const badgeStyles: Record<string, string> = {
  Pendiente: "bg-amber-50 text-amber-700 ring-amber-200",
  "En revision": "bg-rose-50 text-rose-700 ring-rose-200",
  "En espera": "bg-sky-50 text-sky-700 ring-sky-200",
  Aprobada: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Rechazada: "bg-red-50 text-red-700 ring-red-200",
  Respondido: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Validado: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Observado: "bg-red-50 text-red-700 ring-red-200",
  Critica: "bg-rose-600 text-white ring-rose-600",
  Alta: "bg-rose-50 text-rose-700 ring-rose-200",
  Media: "bg-amber-50 text-amber-700 ring-amber-200",
  Baja: "bg-slate-50 text-slate-600 ring-slate-200",
};

export function StatusBadge({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ring-inset sm:text-xs ${
        badgeStyles[label] ?? "bg-slate-50 text-slate-600 ring-slate-200"
      } ${className}`}
    >
      {label}
    </span>
  );
}
