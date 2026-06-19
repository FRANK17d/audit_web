"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screens = [
  {
    src: "/app-screen-dashboard.webp",
    title: "Dashboard ejecutivo",
    description: "Indicadores clave para revisar auditorías, hallazgos y avances.",
  },
  {
    src: "/app-screen-audits.webp",
    title: "Auditorías asignadas",
    description: "Cada auditor ve su agenda y el estado de sus revisiones.",
  },
  {
    src: "/app-screen-checklist.webp",
    title: "Checklist en campo",
    description: "Responde requisitos por norma, área y proceso desde el celular.",
  },
  {
    src: "/app-screen-evidence.webp",
    title: "Evidencias digitales",
    description: "Registra fotos, documentos y observaciones vinculadas al hallazgo.",
  },
  {
    src: "/app-screen-findings.webp",
    title: "Hallazgos trazables",
    description: "Clasifica inconformidades y prepara acciones correctivas.",
  },
  {
    src: "/app-screen-history.webp",
    title: "Historial completo",
    description: "Consulta auditorías previas, evidencias y evolución del cumplimiento.",
  },
  {
    src: "/app-screen-reports.webp",
    title: "Informes listos",
    description: "Genera resultados profesionales para seguimiento y mejora continua.",
  },
];

const carouselPositions: Record<
  number,
  { x: number; y: number; scale: number; rotate: number; opacity: number; zIndex: number }
> = {
  [-3]: { x: -390, y: 36, scale: 0.62, rotate: -9, opacity: 0.22, zIndex: 1 },
  [-2]: { x: -280, y: 18, scale: 0.74, rotate: -6, opacity: 0.42, zIndex: 2 },
  [-1]: { x: -150, y: 6, scale: 0.86, rotate: -3, opacity: 0.7, zIndex: 3 },
  0: { x: 0, y: 0, scale: 1.08, rotate: 0, opacity: 1, zIndex: 7 },
  1: { x: 150, y: 6, scale: 0.86, rotate: 3, opacity: 0.7, zIndex: 3 },
  2: { x: 280, y: 18, scale: 0.74, rotate: 6, opacity: 0.42, zIndex: 2 },
  3: { x: 390, y: 36, scale: 0.62, rotate: 9, opacity: 0.22, zIndex: 1 },
};

function getCircularOffset(index: number, activeIndex: number) {
  const rawOffset = (index - activeIndex + screens.length) % screens.length;
  return rawOffset > Math.floor(screens.length / 2)
    ? rawOffset - screens.length
    : rawOffset;
}

export function AppScreensSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = screens[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? screens.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === screens.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section id="app" className="relative overflow-hidden bg-[#f8f4fb] pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-28">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,_#ffd1e3_0%,_transparent_68%)] opacity-70" />
      <div className="absolute inset-x-[-10%] -bottom-28 h-56 rounded-t-[50%] bg-white" />
      <div className="absolute -bottom-8 right-0 h-28 w-2/5 rounded-tl-[80%] bg-[#FFD1E3]/35" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">
            Capturas de App
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-4xl">
            Así se ve Audit en campo
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            Recorre las pantallas clave de la app móvil: dashboard,
            checklists, evidencias, hallazgos e informes desde el celular.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-10 h-[350px] max-w-5xl sm:mt-14 sm:h-[500px] lg:h-[540px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/30 blur-3xl sm:h-[420px] sm:w-[420px]" />
          <div className="pointer-events-none absolute left-[17%] top-[18%] h-5 w-5 rounded-full border border-rose-300/40" />
          <div className="pointer-events-none absolute right-[14%] top-[28%] h-6 w-6 rounded-full bg-rose-300/50" />
          <div className="pointer-events-none absolute bottom-[18%] left-[29%] h-4 w-4 rounded-full bg-white shadow-sm" />
          <div className="pointer-events-none absolute bottom-[11%] right-[25%] h-8 w-8 rounded-full bg-rose-200/70" />

          <div className="absolute inset-x-0 top-2 hidden h-[430px] items-center justify-center sm:flex">
            {screens.map((screen, index) => {
              const offset = getCircularOffset(index, activeIndex);
              const position = carouselPositions[offset];

              return (
                <motion.div
                  key={screen.src}
                  animate={position}
                  transition={{ type: "spring", stiffness: 220, damping: 28 }}
                  className="absolute left-1/2 top-0 -ml-[110px] w-[220px]"
                  aria-hidden={offset !== 0}
                >
                  <Image
                    src={screen.src}
                    alt={screen.title}
                    width={1121}
                    height={1401}
                    className="h-auto w-full drop-shadow-2xl"
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center sm:hidden">
            <motion.div
              key={activeScreen.src}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-[168px]"
            >
              <Image
                src={activeScreen.src}
                alt={activeScreen.title}
                width={1121}
                height={1401}
                className="h-auto w-full drop-shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-md flex-col items-center gap-5 px-4 text-center sm:bottom-2">
            <div>
              <h3 className="font-display text-lg font-bold text-gray-900">
                {activeScreen.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                {activeScreen.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Ver captura anterior"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-gray-900 shadow-lg shadow-rose-900/10 ring-1 ring-rose-100 transition hover:-translate-y-0.5 hover:bg-rose-50 sm:h-11 sm:w-11"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Ver siguiente captura"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-500/25 transition hover:-translate-y-0.5 hover:bg-rose-600 sm:h-11 sm:w-11"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {screens.map((screen, index) => (
                <button
                  key={screen.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver ${screen.title}`}
                  className={`h-2 cursor-pointer rounded-full transition-all ${
                    index === activeIndex
                      ? "w-6 bg-rose-500"
                      : "w-2 bg-rose-200 hover:bg-rose-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
