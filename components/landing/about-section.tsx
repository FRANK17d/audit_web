"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Confiable y segura",
  "Privacidad protegida",
  "Almacenamiento en la nube",
  "Fácil de usar",
];

export function AboutSection() {
  return (
    <section id="sobre-audit" className="overflow-hidden bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="absolute top-[5%] left-[8%] w-3 h-3 rounded-full bg-rose-300/60" />
            <div className="absolute top-[15%] right-[12%] w-2 h-2 rounded-full bg-rose-200/80" />
            <div className="absolute top-[30%] left-[3%] w-2.5 h-2.5 rounded-full bg-rose-400/40" />
            <div className="absolute top-[50%] right-[6%] w-3.5 h-3.5 rounded-full border-2 border-rose-200/60" />
            <div className="absolute bottom-[25%] left-[5%] w-4 h-4 rounded-full border-2 border-rose-300/40" />
            <div className="absolute bottom-[10%] right-[10%] w-2.5 h-2.5 rounded-full bg-rose-300/50" />
            <div className="absolute top-[8%] right-[25%] w-2 h-2 rounded-full bg-rose-200/70" />
            <div className="absolute bottom-[35%] left-[12%] w-2 h-2 rounded-full bg-rose-400/30" />

            <Image
              src="/about-section-phone.webp"
              alt="Audit app mostrando dashboard de auditorías"
              width={520}
              height={520}
              className="relative z-10 h-auto w-[280px] drop-shadow-2xl sm:w-[440px] lg:w-[520px]"
              style={{ height: "auto" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">
              Sobre Audit
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-[2.6rem]">
              Gestiona todas tus auditorías desde nuestra app
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base">
              La herramienta más completa para ejecutar auditorías de calidad,
              seguridad alimentaria, medio ambiente y seguridad laboral. Fácil de
              usar y diseñada para trabajo de campo real.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm sm:mt-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-100">
                    <Check size={12} className="text-rose-600" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <a
                href="#descargar"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition-all duration-300 hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-500/30 sm:px-7 sm:py-3.5"
              >
                Comenzar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
