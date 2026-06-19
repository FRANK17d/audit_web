"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Bell, Search, Sparkles } from "lucide-react";

export function SupportHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="px-3 pb-4 pt-4 sm:px-5 sm:pb-6 sm:pt-6 lg:px-8 lg:pt-8"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-4 rounded-[2rem] border border-white/80 bg-white/80 p-3 shadow-[0_24px_90px_rgba(255,92,147,0.12)] backdrop-blur-2xl sm:rounded-[2.3rem] sm:p-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="min-w-0">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-rose-600 ring-1 ring-rose-100 sm:text-xs">
            <Sparkles size={13} />
            {eyebrow}
          </div>
          <h1 className="font-display text-2xl font-light tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center xl:justify-end">
          <label className="relative block min-w-0 sm:w-72">
            <span className="sr-only">Buscar en soporte</span>
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              placeholder="Buscar solicitud, RUC o empresa"
              className="h-11 w-full rounded-full border border-rose-100 bg-white pl-9 pr-4 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:ring-4 focus:ring-rose-100 sm:h-12 sm:text-sm"
            />
          </label>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-rose-50 text-rose-600 ring-1 ring-rose-100 transition hover:bg-rose-100 sm:size-12"
            aria-label="Ver notificaciones"
          >
            <Bell size={18} />
          </button>
          {actions}
        </div>
      </div>
    </motion.header>
  );
}
