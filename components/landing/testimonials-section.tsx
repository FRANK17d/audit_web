"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Carlos Mendoza",
    role: "Auditor Principal",
    company: "AgroExport SAC",
    avatar: "/testimonial-carlos.webp",
    text: "Audit revolucionó nuestro proceso de certificación GlobalGAP. Antes tardábamos semanas en consolidar informes, ahora lo hacemos al instante desde el campo.",
    rating: 5,
  },
  {
    name: "María Torres",
    role: "Gerente de Calidad",
    company: "Alimentos del Norte",
    avatar: "/testimonial-maria.webp",
    text: "La trazabilidad de hallazgos y acciones correctivas nos permite mantener nuestras certificaciones ISO sin estrés. Excelente herramienta.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    role: "Coordinador SSOMA",
    company: "Minera Andina",
    avatar: "/testimonial-roberto.webp",
    text: "Con Audit gestionamos todas nuestras auditorías de ISO 45001 desde el celular. La evidencia fotográfica en tiempo real es invaluable.",
    rating: 5,
  },
  {
    name: "Lucía Vargas",
    role: "Jefa de Certificaciones",
    company: "Campos del Valle",
    avatar: "/testimonial-lucia.webp",
    text: "El equipo de auditores adoptó Audit muy rápido. Ahora tenemos evidencias ordenadas, responsables claros y reportes listos para presentar a gerencia.",
    rating: 5,
  },
];

const carouselPositions: Record<
  number,
  { x: number; scale: number; opacity: number; zIndex: number; rotate: number }
> = {
  [-2]: { x: -520, scale: 0.78, opacity: 0, zIndex: 0, rotate: -4 },
  [-1]: { x: -360, scale: 0.88, opacity: 0.32, zIndex: 1, rotate: -3 },
  0: { x: 0, scale: 1, opacity: 1, zIndex: 3, rotate: 0 },
  1: { x: 360, scale: 0.88, opacity: 0.32, zIndex: 1, rotate: 3 },
  2: { x: 520, scale: 0.78, opacity: 0, zIndex: 0, rotate: 4 },
};

function getCircularOffset(index: number, activeIndex: number) {
  const rawOffset = (index - activeIndex + reviews.length) % reviews.length;
  return rawOffset > Math.floor(reviews.length / 2)
    ? rawOffset - reviews.length
    : rawOffset;
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonios" className="relative overflow-hidden bg-[#FFE6F0]/45 py-14 sm:py-20 lg:py-28">
      <div className="absolute left-0 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#FFD1E3]/55 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 translate-x-1/3 rounded-full bg-[#FFB3D1]/35 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            Comentarios de equipos que ya usan Audit para controlar hallazgos,
            evidencias y reportes desde campo.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-10 h-[320px] max-w-6xl overflow-hidden sm:mt-14 sm:h-[330px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {reviews.map((review, index) => {
              const offset = getCircularOffset(index, activeIndex);
              const position =
                carouselPositions[offset] ??
                carouselPositions[offset > 0 ? 2 : -2];

              return (
                <motion.article
                  key={review.name}
                  animate={position}
                  transition={{ type: "spring", stiffness: 180, damping: 26 }}
                  aria-hidden={offset !== 0}
                  className="absolute w-[min(640px,calc(100%-1.5rem))] rounded-[1.5rem] border border-[#FFD1E3] bg-white/95 p-5 shadow-2xl shadow-rose-900/10 backdrop-blur sm:rounded-[2rem] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-[#FFE6F0] bg-[#FFD1E3] shadow-lg shadow-rose-500/10">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={1253}
                          height={1253}
                          unoptimized
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-display text-base font-bold text-gray-900">
                          {review.name}
                        </p>
                        <p className="mt-1 text-xs font-medium text-rose-500">
                          {review.role} · {review.company}
                        </p>
                      </div>
                    </div>
                    <Quote size={34} className="shrink-0 text-[#FFB3D1]" />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
                    “{review.text}”
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={16}
                          className="fill-[#FF75A8] text-[#FF75A8]"
                        />
                      ))}
                    </div>
                    <span className="rounded-full bg-[#FFE6F0] px-3 py-1 text-xs font-semibold text-[#E6005E]">
                      Verificado
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver testimonio de ${review.name}`}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                index === activeIndex
                  ? "w-7 bg-[#E6005E]"
                  : "w-2 bg-[#FFB3D1] hover:bg-[#FF75A8]"
              }`}
            />
          ))}
        </div>

        <div className="sr-only" aria-live="polite">
          Testimonio visible: {reviews[activeIndex].name}
        </div>
      </div>
    </section>
  );
}
