"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Camera,
  BarChart3,
  Users,
  Shield,
  FileDown,
} from "lucide-react";

const featuresLeft = [
  {
    icon: ClipboardCheck,
    title: "Checklists Digitales",
    description: "Listas de verificación personalizadas por norma, área y proceso.",
  },
  {
    icon: Camera,
    title: "Evidencias en Campo",
    description: "Fotos, documentos y comentarios como respaldo de cada hallazgo.",
  },
  {
    icon: BarChart3,
    title: "Informes Automáticos",
    description: "Reportes de cumplimiento en PDF, Excel y Word al instante.",
  },
];

const featuresRight = [
  {
    icon: Users,
    title: "Gestión de Equipos",
    description: "Administra auditores, asigna competencias y coordina equipos.",
  },
  {
    icon: Shield,
    title: "Multi-Norma",
    description: "ISO 9001, 14001, 45001, GlobalGAP, FSMA, BRCGS y más.",
  },
  {
    icon: FileDown,
    title: "Historial Completo",
    description: "Trazabilidad de hallazgos, acciones correctivas y evolución.",
  },
];

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-gray-50/50 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-4xl">
            Nuestras funcionalidades principales
          </h2>
        </motion.div>

        <div className="mt-10 grid items-center gap-8 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          <div className="space-y-6 sm:space-y-12">
            {featuresLeft.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 lg:flex-row-reverse lg:text-right"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lg shadow-rose-500/25 sm:h-12 sm:w-12">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center order-first lg:order-none"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[80px] sm:w-[260px] sm:h-[100px]">
              <svg viewBox="0 0 260 100" fill="none" className="w-full h-full">
                <ellipse cx="130" cy="70" rx="120" ry="30" fill="#FFD1E3" fillOpacity="0.6" />
                <path
                  d="M20 60c30-25 70-30 110-25s80 20 110 5"
                  stroke="#FF94BD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </div>

            <div className="absolute top-[10%] left-[10%] w-3 h-3 rounded-full bg-rose-300/60" />
            <div className="absolute top-[5%] right-[15%] w-2.5 h-2.5 rounded-full bg-rose-200/80" />
            <div className="absolute bottom-[20%] left-[8%] w-2 h-2 rounded-full bg-rose-400/50" />
            <div className="absolute bottom-[15%] right-[10%] w-3 h-3 rounded-full bg-rose-200/70" />
            <div className="absolute top-[40%] left-[5%] w-4 h-4 rounded-full border-2 border-rose-200/50" />
            <div className="absolute top-[35%] right-[5%] w-3.5 h-3.5 rounded-full border-2 border-rose-300/40" />

            <Image
              src="/features-section-phone.webp"
              alt="Audit app mostrando funcionalidades principales"
              width={400}
              height={819}
              loading="eager"
              className="relative z-10 h-auto w-[155px] drop-shadow-2xl sm:w-[220px] lg:w-[240px]"
              style={{ height: "auto" }}
            />
          </motion.div>

          <div className="space-y-6 sm:space-y-12">
            {featuresRight.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lg shadow-rose-500/25 sm:h-12 sm:w-12">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
