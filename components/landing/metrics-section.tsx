"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "Normas Soportadas" },
  { value: 100, suffix: "%", label: "Desde el Celular" },
  { value: 7000, suffix: "+", label: "Auditorías Realizadas" },
  { value: 1200, suffix: "+", label: "Empresas Activas" },
];

function AnimatedStat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [delay, isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-rose-100">{label}</p>
    </div>
  );
}

export function MetricsSection() {
  return (
    <section className="bg-linear-to-r from-rose-500 to-rose-700 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
