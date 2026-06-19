"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AuditLogo } from "@/components/brand/audit-logo";
import { landingNavItems } from "@/lib/site";

export function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex cursor-pointer items-center gap-2.5">
          <AuditLogo size={32} />
          <span className="font-display text-lg font-bold text-gray-900">
            Audit
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {landingNavItems.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`cursor-pointer text-sm font-medium transition-colors xl:text-[15px] ${
                  i === 0
                    ? "text-rose-600"
                    : "text-gray-600 hover:text-rose-600"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#descargar"
          className="hidden cursor-pointer items-center justify-center rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition-all hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-500/30 lg:inline-flex xl:px-6"
        >
          Descargar App
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 text-gray-700 transition hover:bg-rose-50 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-rose-100 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-4">
              {landingNavItems.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block min-h-10 cursor-pointer text-[15px] font-medium text-gray-600 transition-colors hover:text-rose-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#descargar"
                  onClick={() => setOpen(false)}
                  className="inline-flex cursor-pointer items-center justify-center rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Descargar App
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
