import Link from "next/link";
import { AuditLogo } from "@/components/brand/audit-logo";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-16">
      <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-rose-100/70 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-7rem] h-96 w-96 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="relative w-full max-w-3xl rounded-[2rem] border border-rose-100 bg-white/90 p-8 text-center shadow-2xl shadow-rose-900/10 backdrop-blur sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 ring-1 ring-rose-100">
          <AuditLogo size={42} />
        </div>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-rose-600">
          Error 404
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
          Esta auditoría no existe o fue movida
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          La ruta que intentas abrir no está disponible. Vuelve al landing de
          Audit para continuar explorando la app de auditorías.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-rose-500 px-6 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition hover:-translate-y-0.5 hover:bg-rose-600"
          >
            Volver al inicio
          </Link>
          <Link
            href="/#faq"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-rose-100 bg-white px-6 text-sm font-bold text-gray-700 transition hover:-translate-y-0.5 hover:bg-rose-50 hover:text-rose-600"
          >
            Ver preguntas frecuentes
          </Link>
        </div>
      </div>
    </main>
  );
}
