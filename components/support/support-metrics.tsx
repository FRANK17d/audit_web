"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ClipboardCheck,
  Inbox,
  Timer,
  XCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { supportMetrics } from "@/lib/support-data";
import type { SupportMetric, SupportMetricIcon } from "@/types/support";

const metricIcons: Record<SupportMetricIcon, LucideIcon> = {
  inbox: Inbox,
  review: ClipboardCheck,
  approved: CheckCircle2,
  timer: Timer,
  rejected: XCircle,
};

const toneStyles: Record<SupportMetric["tone"], string> = {
  rose: "bg-rose-50 text-rose-600 ring-rose-100",
  amber: "bg-amber-50 text-amber-600 ring-amber-100",
  emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  sky: "bg-sky-50 text-sky-600 ring-sky-100",
};

export function SupportMetrics({ metrics = supportMetrics }: { metrics?: SupportMetric[] }) {
  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      {metrics.map((metric, index) => {
        const Icon = metricIcons[metric.icon];

        return (
          <motion.article
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-[1.75rem] border border-white/80 bg-white/86 p-4 shadow-[0_18px_60px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:rounded-[2rem] sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  {metric.value}
                </p>
              </div>
              <span
                className={`grid size-10 place-items-center rounded-2xl ring-1 sm:size-11 ${toneStyles[metric.tone]}`}
              >
                <Icon size={18} />
              </span>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500 sm:text-sm">
              {metric.helper}
            </p>
          </motion.article>
        );
      })}
    </section>
  );
}
