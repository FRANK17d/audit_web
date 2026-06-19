"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Eye,
  EyeOff,
  FileText,
  Headphones,
  HelpCircle,
  LockKeyhole,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { AuditLogo } from "@/components/brand/audit-logo";

const recentRequests = [
  {
    icon: MessageCircle,
    title: "Error al generar informe",
    company: "Empresa Alfa S.A.",
    status: "En revisión",
    tone: "rose",
    time: "Hoy, 09:15 AM",
  },
  {
    icon: FileText,
    title: "Acceso denegado al panel",
    company: "Constructora del Norte",
    status: "Pendiente",
    tone: "amber",
    time: "Hoy, 08:42 AM",
  },
  {
    icon: HelpCircle,
    title: "Duda sobre checklist ISO 14001",
    company: "Industrial Andina",
    status: "Respondido",
    tone: "emerald",
    time: "Ayer, 04:30 PM",
  },
];

const notifications = [
  {
    title: "Nueva solicitud asignada",
    text: "Error al generar informe",
    time: "Hace 5 min",
  },
  {
    title: "Respuesta del usuario",
    text: "Acceso denegado al panel",
    time: "Hace 28 min",
  },
];

const statusStyles = {
  rose: "bg-rose-50 text-rose-600",
  amber: "bg-amber-50 text-amber-600",
  emerald: "bg-emerald-50 text-emerald-600",
};

function MiniPill({ tone, children }: { tone: keyof typeof statusStyles; children: string }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[7px] font-extrabold ${statusStyles[tone]}`}
    >
      {children}
    </span>
  );
}

export function SupportLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative min-h-screen overflow-y-auto overflow-x-hidden bg-[#fffafd] text-slate-950 lg:h-screen lg:overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,_rgba(255,209,227,0.52),_transparent_27rem),radial-gradient(circle_at_16%_44%,_rgba(255,230,240,0.6),_transparent_19rem),linear-gradient(180deg,_#fffaff_0%,_#ffffff_58%,_#fffafd_100%)]" />
      <div className="pointer-events-none absolute left-[6.4%] top-[13%] size-2 rounded-full bg-rose-300/80" />
      <div className="pointer-events-none absolute left-[48.9%] top-[10%] size-2 rounded-full bg-rose-300/75" />
      <div className="pointer-events-none absolute left-[47%] top-[34%] size-2.5 rounded-full bg-rose-300/70" />
      <div className="pointer-events-none absolute bottom-[13%] left-[48%] size-4 rounded-full border border-rose-300/80" />
      <div className="pointer-events-none absolute right-[8.5%] top-[17%] size-4 rounded-full border border-rose-300/70" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1000px] flex-col px-5 py-5 sm:px-8 lg:h-screen lg:min-h-0 lg:px-0 lg:py-0">
        <header className="flex h-12 shrink-0 items-center lg:h-[70px]">
          <Link href="/" className="flex items-center gap-2.5">
            <AuditLogo size={31} />
            <span className="font-display text-[18px] font-extrabold tracking-tight text-slate-950">
              Audit
            </span>
          </Link>
        </header>

        <section className="grid min-h-0 flex-1 items-center gap-6 pb-6 pt-5 lg:grid-cols-[430px_1fr] lg:gap-8 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto w-full max-w-[356px] rounded-[9px] border border-rose-100/80 bg-white/92 px-[28px] pb-[26px] pt-[42px] shadow-[0_22px_70px_rgba(255,92,147,0.12)] backdrop-blur-2xl sm:min-h-[399px] lg:mx-0 lg:ml-9"
          >
            <div className="absolute -top-[16px] left-[22px] inline-flex h-[29px] items-center gap-2 rounded-full bg-rose-50 px-4 text-[10px] font-extrabold text-rose-600 shadow-[0_8px_24px_rgba(255,92,147,0.13)]">
              <Headphones size={12} />
              Soporte interno
            </div>

            <h1 className="font-display text-[27px] font-light leading-[1.13] tracking-[-0.045em] text-slate-950 sm:text-[29px]">
              Iniciar sesión en
              <br />
              <span className="font-extrabold text-rose-600">Soporte</span> Audit
            </h1>
            <p className="mt-2 text-[11px] leading-5 text-slate-400">
              Acceso exclusivo para el equipo de soporte.
            </p>

            <div className="my-[18px] h-px bg-slate-100" />

            <form className="grid gap-[13px]">
              <label className="grid gap-[6px]">
                <span className="text-[10.5px] font-extrabold text-slate-500">
                  Correo electrónico
                </span>
                <span className="relative">
                  <Mail
                    size={14}
                    className="pointer-events-none absolute left-[11px] top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    placeholder="tu@empresa.com"
                    autoComplete="email"
                    className="h-[29px] w-full rounded-[6px] border border-slate-200 bg-white pl-[33px] pr-3 text-[11px] font-semibold text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
                  />
                </span>
              </label>

              <label className="grid gap-[6px]">
                <span className="text-[10.5px] font-extrabold text-slate-500">
                  Contraseña
                </span>
                <span className="relative">
                  <LockKeyhole
                    size={14}
                    className="pointer-events-none absolute left-[11px] top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    defaultValue="auditsoporte"
                    autoComplete="current-password"
                    className="h-[29px] w-full rounded-[6px] border border-slate-200 bg-white pl-[33px] pr-9 text-[11px] font-semibold text-slate-700 outline-none transition focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-[10px] top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-rose-600"
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </span>
              </label>
            </form>

            <div className="mt-[12px] flex items-center justify-between gap-3 text-[9.5px]">
              <label className="flex items-center gap-2 text-slate-400">
                <input
                  type="checkbox"
                  defaultChecked
                  className="size-[12px] rounded-[3px] border-rose-200 accent-rose-500"
                />
                Recordar mi sesión
              </label>
              <a href="#" className="font-extrabold text-rose-500 hover:text-rose-600">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Link
              href="/soporte/panel"
              className="mt-[18px] inline-flex h-[31px] w-full items-center justify-center rounded-[6px] bg-rose-500 text-[11px] font-extrabold text-white shadow-[0_12px_28px_rgba(255,61,127,0.24)] transition hover:bg-rose-600"
            >
              Ingresar al panel
            </Link>

            <div className="mt-[17px] flex justify-center text-slate-400">
              <span className="size-1 rounded-full bg-slate-400" />
            </div>

            <Link
              href="/"
              className="mx-auto mt-[16px] flex w-fit items-center gap-2 text-[10.5px] font-extrabold text-rose-500 transition hover:text-rose-600"
            >
              <ArrowLeft size={13} />
              Volver al sitio principal
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto hidden h-[410px] w-full max-w-[500px] lg:block"
          >
            <div className="absolute left-[28px] top-[-72px] h-[470px] w-[470px] rounded-full border border-white/75" />
            <div className="absolute bottom-[-24px] left-[155px] h-[154px] w-[154px] rounded-full bg-rose-100/60 blur-3xl" />
            <div className="absolute left-[278px] top-[30px] h-1.5 w-1.5 rounded-full bg-rose-100" />

            <div className="absolute left-[18px] top-[2px] flex h-[55px] w-[246px] items-center gap-4 rounded-[11px] border border-white/80 bg-white/90 px-5 shadow-[0_18px_60px_rgba(255,92,147,0.13)] backdrop-blur-xl">
              <span className="grid size-[32px] place-items-center rounded-full bg-rose-50 text-rose-500">
                <Headphones size={16} />
              </span>
              <div>
                <p className="text-[12px] font-extrabold text-slate-950">
                  Hola, Equipo de Soporte 👋
                </p>
                <p className="mt-1 text-[8.5px] font-semibold text-slate-300">
                  Aquí tienes el resumen de las solicitudes de soporte.
                </p>
              </div>
            </div>

            <div className="absolute left-[10px] top-[76px] h-[173px] w-[274px] rounded-[11px] border border-white/80 bg-white/92 p-[13px] shadow-[0_18px_60px_rgba(255,92,147,0.13)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-[10px] font-extrabold text-slate-950">
                  Solicitudes recientes
                </h2>
                <Link href="/soporte/solicitudes" className="text-[8px] font-extrabold text-rose-500">
                  Ver todas
                </Link>
              </div>
              <div className="mt-3 grid gap-[6px]">
                {recentRequests.map((request) => {
                  const Icon = request.icon;

                  return (
                    <div
                      key={request.title}
                      className="grid grid-cols-[28px_1fr_auto] items-center gap-2 border-b border-slate-100 pb-[8px] last:border-0 last:pb-0"
                    >
                      <span className="grid size-[28px] place-items-center rounded-[9px] bg-rose-50 text-rose-500">
                        <Icon size={13} />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[8px] font-extrabold text-slate-950">
                          {request.title}
                        </p>
                        <p className="mt-0.5 truncate text-[7px] font-semibold text-slate-400">
                          {request.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MiniPill tone={request.tone as keyof typeof statusStyles}>
                          {request.status}
                        </MiniPill>
                        <span className="text-[7px] font-semibold text-slate-400">
                          {request.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute right-[28px] top-[4px] h-[154px] w-[118px] rounded-[10px] border border-white/80 bg-white/92 p-[15px] shadow-[0_18px_60px_rgba(255,92,147,0.13)] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-rose-500" />
                <p className="text-[9px] font-extrabold text-slate-950">Aprobaciones</p>
              </div>
              <div className="my-3 h-px bg-slate-100" />
              <p className="font-display text-[24px] font-light text-slate-950">8</p>
              <p className="text-[8px] font-semibold text-slate-400">Pendientes</p>
              <p className="mt-3 text-[8px] font-semibold text-slate-400">
                <span className="text-rose-500">3</span> críticas · <span>5</span> menores
              </p>
              <Link
                href="/soporte/solicitudes"
                className="mt-[18px] inline-flex items-center gap-1 text-[8px] font-extrabold text-rose-500"
              >
                Revisar aprobaciones
                <ArrowRight size={10} />
              </Link>
            </div>

            <div className="absolute right-[4px] top-[176px] h-[180px] w-[144px] rounded-[11px] border border-white/80 bg-white/92 p-[14px] shadow-[0_18px_60px_rgba(255,92,147,0.13)] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Bell size={13} className="text-rose-500" />
                <p className="text-[9px] font-extrabold text-slate-950">Notificaciones</p>
              </div>
              <div className="mt-4 grid gap-4">
                {notifications.map((notification) => (
                  <div key={notification.title} className="relative pl-4">
                    <span className="absolute left-0 top-1 size-1.5 rounded-full bg-rose-500" />
                    <p className="text-[8px] font-extrabold text-slate-700">
                      {notification.title}
                    </p>
                    <p className="mt-1 text-[7px] font-semibold leading-[1.35] text-slate-400">
                      {notification.text}
                      <br />
                      {notification.time}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/soporte/comunicaciones"
                className="absolute bottom-[16px] left-[14px] inline-flex items-center gap-1 text-[8px] font-extrabold text-rose-500"
              >
                Ver todas
                <ArrowRight size={10} />
              </Link>
            </div>

            <div className="absolute left-[76px] top-[268px] h-[92px] w-[208px] rounded-[11px] border border-white/80 bg-white/92 p-[14px] shadow-[0_18px_60px_rgba(255,92,147,0.13)] backdrop-blur-xl">
              <h2 className="text-[10px] font-extrabold text-slate-950">Resumen del día</h2>
              <div className="mt-3 h-px bg-slate-100" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["12", "Recibidas", "bg-rose-400"],
                  ["7", "En revisión", "bg-amber-400"],
                  ["5", "Respondidas", "bg-emerald-400"],
                ].map(([value, label, dot]) => (
                  <div key={label}>
                    <p className="font-display text-[17px] font-extrabold text-slate-950">
                      {value}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[7px] font-semibold text-slate-400">
                      <span className={`size-1 rounded-full ${dot}`} />
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <footer className="flex shrink-0 flex-col gap-2 border-t border-slate-100 py-4 text-[10px] font-semibold text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:h-[47px] lg:py-0">
          <p>© 2024 Audit. Todos los derechos reservados.</p>
          <div className="flex gap-7">
            <span>Términos de uso</span>
            <span>Política de privacidad</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
