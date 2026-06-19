import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { AuditLogo } from "@/components/brand/audit-logo";

export default function Unauthorized() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff7fb] px-4 py-16">
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-rose-100/80 to-transparent" />
      <div className="absolute left-[12%] top-[22%] h-8 w-8 rounded-full border border-rose-200" />
      <div className="absolute bottom-[18%] right-[14%] h-10 w-10 rounded-full bg-rose-200/70" />
      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-rose-100 bg-white shadow-2xl shadow-rose-900/10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-between bg-linear-to-br from-rose-500 to-rose-700 p-8 text-white sm:p-10">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
            <LockKeyhole size={28} />
          </div>
          <div className="mt-16">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-white/70">
              Error 401
            </p>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Acceso no autorizado
            </h1>
            <p className="mt-5 text-sm leading-7 text-white/80">
              Esta sección está reservada para usuarios autorizados de Audit.
              Verifica tus permisos o vuelve a una zona pública.
            </p>
          </div>
        </div>
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="flex items-center gap-3">
            <AuditLogo size={40} />
            <span className="font-display text-xl font-extrabold text-gray-950">
              Audit
            </span>
          </div>
          <h2 className="mt-10 font-display text-2xl font-extrabold text-gray-950 sm:text-3xl">
            Necesitas una sesión válida para continuar
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            Si perteneces a una empresa registrada, ingresa desde la app móvil o
            solicita a tu Auditor Admin que revise tus permisos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-rose-500 px-6 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition hover:-translate-y-0.5 hover:bg-rose-600"
            >
              Ir al landing
            </Link>
            <Link
              href="/#descargar"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-rose-100 bg-white px-6 text-sm font-bold text-gray-700 transition hover:-translate-y-0.5 hover:bg-rose-50 hover:text-rose-600"
            >
              Descargar Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
