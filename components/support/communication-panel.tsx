import { Mail, Send } from "lucide-react";
import { StatusBadge } from "@/components/ui/badge/status-badge";
import { supportMessages } from "@/lib/support-data";
import type { SupportMessage } from "@/types/support";

export function CommunicationPanel({
  messages = supportMessages,
  compact = false,
}: {
  messages?: SupportMessage[];
  compact?: boolean;
}) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_70px_rgba(255,92,147,0.1)] backdrop-blur-xl sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Comunicaciones
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold text-slate-950 sm:text-xl">
            Mensajes recientes
          </h2>
        </div>
        <span className="grid size-10 place-items-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
          <Mail size={17} />
        </span>
      </div>

      <div className="mt-5 grid gap-3">
        {messages.map((message) => (
          <article
            key={message.id}
            className="rounded-2xl border border-rose-100/80 bg-white p-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-extrabold text-slate-950">{message.company}</p>
              <StatusBadge label={message.status} />
            </div>
            <p className="mt-2 text-xs font-bold text-slate-700 sm:text-sm">
              {message.subject}
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
              {message.preview}
            </p>
            <div className="mt-3 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
              <span>{message.channel}</span>
              <span>{message.time}</span>
            </div>
          </article>
        ))}
      </div>

      {!compact && (
        <div className="mt-5 rounded-[1.5rem] bg-rose-50/70 p-3">
          <label className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Respuesta rapida
          </label>
          <textarea
            rows={4}
            placeholder="Escribe una solicitud de informacion adicional..."
            className="mt-2 w-full resize-none rounded-2xl border border-rose-100 bg-white p-3 text-sm outline-none focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
          />
          <button
            type="button"
            className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-rose-500 px-4 text-sm font-extrabold text-white shadow-lg shadow-rose-500/20"
          >
            <Send size={15} />
            Enviar mensaje
          </button>
        </div>
      )}
    </section>
  );
}
