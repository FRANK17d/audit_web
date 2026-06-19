"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { downloadLinks } from "@/lib/site";

export function DownloadSection() {
  return (
    <section id="descargar" className="relative overflow-hidden bg-white pb-14 pt-0 sm:pb-20 lg:pb-24 lg:pt-4">
      <div className="absolute left-0 top-8 h-[320px] w-[62%] rounded-br-[70%] rounded-tr-[28%] bg-white" />
      <div className="absolute bottom-0 left-0 h-28 w-1/2 rounded-tr-[80%] bg-[#FFD1E3]/35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-xl"
          >
            <span className="text-sm font-semibold text-rose-600 tracking-wider">
              Descarga Ahora
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-[2.65rem]">
              Descarga Audit y empieza a auditar desde tu celular
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-500 sm:mt-6 sm:text-base sm:leading-8">
              Lleva tus checklists, evidencias, hallazgos e informes en una app
              diseñada para auditorías reales en campo. Configura tu empresa y
              empieza tu primera auditoría sin complicaciones.
            </p>

            <div className="mt-7 grid gap-3 text-sm font-medium text-gray-700 sm:grid-cols-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-rose-500" />
                Prueba inicial sin costo
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-rose-500" />
                Evidencias protegidas
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              {downloadLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  className="inline-flex min-w-[142px] cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-[#FF5C93] to-[#E6005E] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-[#FF5C93]/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#FF5C93]/30 sm:min-w-[150px] sm:px-5"
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d={link.platform === "ios" ? "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" : "M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"} />
                  </svg>
                  <span className="text-left">
                    <span className="block text-[10px] text-white/75">{link.eyebrow}</span>
                    <span className="block text-sm font-semibold">{link.label}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex min-h-[310px] justify-center sm:min-h-[390px] lg:min-h-[480px]"
          >
            <div className="absolute left-[12%] top-[18%] h-5 w-5 rounded-full bg-rose-200/70" />
            <div className="absolute right-[12%] top-[8%] h-5 w-5 rounded-full border border-rose-300/50" />
            <div className="absolute bottom-[20%] left-[18%] h-8 w-8 rounded-full bg-white shadow-sm" />
            <div className="absolute bottom-[12%] right-[22%] h-6 w-6 rounded-full border border-[#FFB3D1]" />
            <Image
              src="/dowloand-section.webp"
              alt="Audit app lista para descargar"
              width={767}
              height={1557}
              className="relative z-10 h-auto w-[185px] drop-shadow-2xl sm:w-[280px] lg:w-[315px]"
              loading="eager"
              style={{ height: "auto" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
