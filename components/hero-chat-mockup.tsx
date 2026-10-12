import { CheckCheck, Calendar } from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { cn } from '@/lib/utils'

type Message = {
  from: 'client' | 'assistant'
  text: string
  time: string
}

const MESSAGES: Message[] = [
  { from: 'client', text: 'Hola, ¿tienen cita disponible para mañana?', time: '9:41 pm' },
  { from: 'assistant', text: '¡Hola! Sí, tengo 10:00 am y 4:30 pm. ¿Cuál te sirve?', time: '9:41 pm' },
  { from: 'client', text: 'La de 4:30, por favor', time: '9:42 pm' },
  { from: 'assistant', text: 'Listo, tu cita quedó agendada para mañana a las 4:30 pm. Te recordaré una hora antes.', time: '9:42 pm' },
]

/**
 * Chat ilustrativo de WhatsApp para el hero. Es una demostración visual,
 * no una conversación real de un cliente.
 */
export function HeroChatMockup({ className }: { className?: string }) {
  return (
    <figure className={cn('w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto', className)}>
      <div
        role="img"
        aria-label="Ejemplo ilustrativo de un chat de WhatsApp: un cliente pide una cita a las 9:41 pm y el asistente le ofrece horarios y la agenda en menos de 10 segundos."
        className="rounded-2xl border border-border/80 bg-card shadow-xl shadow-black/30 overflow-hidden"
      >
        {/* Cabecera del chat */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[hsl(var(--surface-2))] border-b border-border/70">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
            <WhatsAppIcon className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-foreground">Asistente de tu negocio</div>
            <div className="text-xs text-emerald-400">en línea · responde al instante</div>
          </div>
        </div>

        {/* Mensajes */}
        <div className="space-y-2.5 p-4" aria-hidden="true">
          {MESSAGES.map((m, i) => (
            <div
              key={i}
              className={cn(
                'flex',
                m.from === 'client' ? 'justify-start' : 'justify-end',
                // En móvil se muestran solo la pregunta y la confirmación para acortar el hero
                (i === 1 || i === 2) && 'hidden sm:flex'
              )}
            >
              <div
                className={cn(
                  'max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug',
                  m.from === 'client'
                    ? 'rounded-tl-sm bg-[hsl(var(--surface-2))] text-foreground'
                    : 'rounded-tr-sm bg-primary/90 text-primary-foreground'
                )}
              >
                <p>{m.text}</p>
                <div
                  className={cn(
                    'mt-1 flex items-center justify-end gap-1 text-[11px]',
                    m.from === 'client' ? 'text-muted-foreground' : 'text-primary-foreground/70'
                  )}
                >
                  <span>{m.time}</span>
                  {m.from === 'assistant' && <CheckCheck className="h-3 w-3" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sello de resultado */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-border/70 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 text-secondary font-semibold">
            <Calendar className="h-3.5 w-3.5" />
            Respondido en 8 s
          </span>
          <span className="text-muted-foreground">Cita agendada</span>
        </div>
      </div>
      <figcaption className="mt-2 text-center lg:text-right text-xs text-muted-foreground">
        Ejemplo ilustrativo
      </figcaption>
    </figure>
  )
}
