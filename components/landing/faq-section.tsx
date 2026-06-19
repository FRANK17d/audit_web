"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { landingFaqs } from "@/lib/site";

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof landingFaqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl transition-all duration-300 ${
        isOpen
          ? "bg-linear-to-br from-rose-500 via-rose-600 to-rose-700 shadow-2xl shadow-rose-500/25"
          : "border border-transparent bg-gray-50 shadow-sm hover:border-rose-100 hover:bg-rose-50/50"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-start justify-between gap-4 p-4 text-left sm:gap-5 sm:p-6"
      >
        <span
          className={`text-[13px] font-bold leading-relaxed sm:text-base ${
            isOpen ? "text-white" : "text-gray-700"
          }`}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`mt-0.5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-white" : "text-gray-400"
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-6 text-sm leading-7 text-white/85 sm:px-6">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-28">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-rose-100/50 blur-3xl" />
      <div className="absolute bottom-16 right-0 h-80 w-80 rounded-full bg-rose-200/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold text-rose-600 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-bold text-gray-900 sm:text-4xl lg:text-[2.7rem]">
            Preguntas Frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Resolvemos las dudas clave antes de llevar tus auditorías al campo
            con Audit.
          </p>
        </motion.div>

        <div className="mt-10 grid items-center gap-8 sm:mt-14 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto flex min-h-[330px] w-full max-w-[420px] items-center justify-center sm:min-h-[560px] sm:max-w-[520px] lg:max-w-none"
          >
            <div className="absolute bottom-8 left-1/2 h-[68%] w-[92%] -translate-x-1/2 rounded-[45%] bg-linear-to-br from-rose-500 via-rose-600 to-rose-700 shadow-2xl shadow-rose-500/25" />
            <div className="absolute left-[8%] top-[18%] h-10 w-10 rounded-full border border-rose-200" />
            <div className="absolute right-[10%] top-[12%] h-3 w-3 rounded-full bg-rose-200/80" />
            <div className="absolute bottom-[14%] left-[18%] h-8 w-8 rounded-full bg-rose-100" />
            <div className="absolute bottom-[20%] right-[12%] h-4 w-4 rounded-full border border-rose-300/70" />

            <Image
              src="/faq-section-mobile.webp"
              alt="Vista móvil de Audit con resumen de auditorías"
              width={945}
              height={1024}
              className="relative z-10 h-auto w-[220px] drop-shadow-2xl sm:w-[380px] lg:w-[430px]"
              sizes="(min-width: 1024px) 430px, (min-width: 640px) 380px, 285px"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white/85 bg-linear-to-br from-rose-500 to-rose-700 text-white shadow-2xl shadow-rose-700/30 sm:h-24 sm:w-24 sm:border-[10px]"
            >
              <span className="ml-1 h-0 w-0 border-y-[11px] border-l-[16px] border-y-transparent border-l-white sm:border-y-[17px] sm:border-l-[24px]" />
            </div>
          </motion.div>

          <div className="space-y-4">
            {landingFaqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
