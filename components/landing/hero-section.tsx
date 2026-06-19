"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const sectors = ["Agrícola", "Industrial", "Alimentaria", "Ambiental", "Laboral"];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[auto] items-center overflow-hidden sm:min-h-screen"
    >
      <div className="absolute top-20 left-[8%] w-4 h-4 rounded-full bg-rose-300/60 animate-pulse" />
      <div className="absolute top-32 left-[4%] w-2 h-2 rounded-full bg-rose-200/80" />
      <div className="absolute top-44 right-[12%] w-3 h-3 rounded-full bg-rose-400/40 animate-pulse" />
      <div className="absolute top-64 right-[5%] w-2.5 h-2.5 rounded-full bg-rose-200/60" />
      <div className="absolute bottom-32 left-[15%] w-3 h-3 rounded-full bg-rose-300/50 animate-pulse" />
      <div className="absolute bottom-48 left-[6%] w-2 h-2 rounded-full bg-rose-100" />
      <div className="absolute top-[45%] left-[2%] w-5 h-5 rounded-full border-2 border-rose-200/50" />
      <div className="absolute top-28 right-[30%] w-6 h-6 rounded-full border-2 border-rose-200/40" />
      <div className="absolute bottom-24 right-[8%] w-4 h-4 rounded-full border-2 border-rose-300/30" />
      <div className="absolute top-[60%] right-[18%] w-2 h-2 rounded-full bg-rose-400/30" />
      <div className="absolute bottom-40 right-[35%] w-3 h-3 rounded-full bg-rose-200/40 animate-pulse" />

      <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-[radial-gradient(ellipse_at_top_right,_#FFE6F050,_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_bottom_left,_#FFD1E330,_transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 lg:pt-28">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="font-display leading-[1.05]">
              <span className="block text-[2.15rem] font-light tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                La mejor
              </span>
              <span className="mt-1 block text-[2.15rem] font-extrabold tracking-tight text-rose-600 sm:text-5xl lg:text-6xl">
                app de auditorías
              </span>
              <span className="mt-1 block text-[2.15rem] font-light tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                para tu empresa
              </span>
            </h1>

            <p className="mt-5 max-w-[26rem] text-sm leading-7 text-gray-500 sm:mt-7 sm:text-lg sm:leading-relaxed">
              Ejecuta checklists, registra evidencias y genera informes de
              cumplimiento normativo directamente desde tu celular.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9"
            >
              <a
                href="#descargar"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-rose-500/25 transition-all duration-300 hover:bg-rose-600 hover:shadow-2xl hover:shadow-rose-500/30 sm:px-8 sm:py-3.5"
              >
                Descargar App
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-7 flex items-center gap-3 sm:mt-10 sm:gap-4"
            >
              <div className="flex -space-x-2.5">
                {["/testimonial-carlos.webp", "/testimonial-maria.webp", "/testimonial-roberto.webp", "/testimonial-lucia.webp"].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="Usuario de Audit"
                    width={36}
                    height={36}
                    unoptimized
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 mt-0.5">
                  4.9 estrellas en +1.2k reseñas
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 sm:mt-10 sm:gap-x-7"
            >
              {sectors.map((sector) => (
                <span
                  key={sector}
                    className="text-xs font-medium tracking-wide text-gray-400 sm:text-sm"
                >
                  {sector}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-rose-100/30 rounded-full blur-3xl" />
            <div className="absolute top-[20%] right-[5%] w-20 h-20 rounded-full border border-dashed border-rose-200/60" />
            <div className="absolute bottom-[15%] left-[10%] w-14 h-14 rounded-full border border-dashed border-rose-200/40" />

            <Image
              src="/hero-section-phones.webp"
              alt="Audit app mostrando dashboard, auditoría en curso y checklist"
              width={620}
              height={620}
              priority
              className="relative z-10 h-auto w-full max-w-[330px] drop-shadow-2xl sm:max-w-[500px] lg:max-w-[560px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
