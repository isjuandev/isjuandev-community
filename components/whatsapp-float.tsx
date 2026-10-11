import { WhatsAppIcon } from '@/components/platform-icons'
import { SITE_CONFIG } from '@/lib/config'

/**
 * Botón flotante de WhatsApp, visible solo en móvil.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={SITE_CONFIG.getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="md:hidden fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 active:scale-95"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
