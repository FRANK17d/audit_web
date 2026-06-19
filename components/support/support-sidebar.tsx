"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  History,
  LayoutDashboard,
  Menu,
  MessageSquareText,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AuditLogo } from "@/components/brand/audit-logo";
import { supportNavItems } from "@/lib/support-data";
import type { SupportNavKey } from "@/types/support";

const navIcons: Record<SupportNavKey, LucideIcon> = {
  dashboard: LayoutDashboard,
  requests: ShieldCheck,
  communications: MessageSquareText,
  history: History,
  settings: Settings,
};

function NavLinks({ activeKey }: { activeKey: SupportNavKey }) {
  return (
    <nav className="grid gap-2">
      {supportNavItems.map((item) => {
        const Icon = navIcons[item.key];
        const active = item.key === activeKey;

        return (
          <Link
            key={item.key}
            href={item.href}
            className={`group flex items-center gap-3 rounded-3xl px-3 py-3 text-sm transition-all sm:px-4 ${
              active
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20"
                : "text-slate-500 hover:bg-rose-50 hover:text-rose-700"
            }`}
          >
            <span
              className={`grid size-9 shrink-0 place-items-center rounded-2xl ${
                active ? "bg-white/20" : "bg-white text-rose-500 shadow-sm"
              }`}
            >
              <Icon size={17} />
            </span>
            <span className="min-w-0">
              <span className="block font-bold leading-tight">{item.label}</span>
              <span
                className={`mt-0.5 hidden text-[11px] leading-tight sm:block ${
                  active ? "text-white/75" : "text-slate-400"
                }`}
              >
                {item.helper}
              </span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export function SupportSidebar({ activeKey }: { activeKey: SupportNavKey }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-rose-100/80 bg-white/90 px-3 py-2.5 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <Link href="/soporte/panel" className="flex items-center gap-2">
            <AuditLogo size={30} />
            <span className="font-display text-base font-extrabold text-slate-950">
              Audit Soporte
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full bg-rose-50 text-rose-600 transition hover:bg-rose-100"
            aria-label={open ? "Cerrar menu de soporte" : "Abrir menu de soporte"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-3">
                <NavLinks activeKey={activeKey} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <aside className="sticky top-0 hidden h-dvh w-[18rem] shrink-0 border-r border-rose-100/80 bg-white/78 px-4 py-5 backdrop-blur-2xl lg:block xl:w-[19.5rem]">
        <div className="flex h-full flex-col">
          <Link href="/soporte/panel" className="flex items-center gap-3 px-2">
            <AuditLogo size={34} />
            <div>
              <p className="font-display text-lg font-extrabold text-slate-950">
                Audit
              </p>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-rose-500">
                Soporte interno
              </p>
            </div>
          </Link>

          <div className="mt-8">
            <NavLinks activeKey={activeKey} />
          </div>

          <div className="mt-auto rounded-[2rem] border border-rose-100 bg-rose-50/70 p-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-white text-rose-500 shadow-sm">
                <Bell size={17} />
              </span>
              <div>
                <p className="text-sm font-extrabold text-slate-950">8 alertas</p>
                <p className="text-xs leading-5 text-slate-500">
                  3 criticas requieren aprobacion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
