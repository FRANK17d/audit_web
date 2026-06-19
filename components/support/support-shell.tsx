"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { SupportHeader } from "@/components/support/support-header";
import { SupportSidebar } from "@/components/support/support-sidebar";
import type { SupportNavKey } from "@/types/support";

export function SupportShell({
  activeKey,
  eyebrow,
  title,
  description,
  actions,
  children,
}: {
  activeKey: SupportNavKey;
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#fffafd] text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,_rgba(255,209,227,0.72),_transparent_24rem),radial-gradient(circle_at_10%_70%,_rgba(255,230,240,0.8),_transparent_22rem)]" />
      <div className="pointer-events-none absolute left-[7%] top-24 size-2 rounded-full bg-rose-300/80" />
      <div className="pointer-events-none absolute right-[8%] top-28 size-4 rounded-full border border-rose-300/70" />
      <div className="pointer-events-none absolute bottom-16 left-[34%] size-3 rounded-full bg-rose-200/80" />
      <div className="pointer-events-none absolute right-[28%] top-[45%] size-2 rounded-full bg-rose-400/40" />

      <div className="relative flex min-h-dvh flex-col lg:flex-row">
        <SupportSidebar activeKey={activeKey} />
        <div className="min-w-0 flex-1">
          <SupportHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            actions={actions}
          />
          <motion.main
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto w-full max-w-[88rem] px-3 pb-8 sm:px-5 lg:px-8 lg:pb-10"
          >
            {children}
          </motion.main>
        </div>
      </div>
    </div>
  );
}
