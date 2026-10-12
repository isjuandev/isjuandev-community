'use client'

import { useEffect, useState } from 'react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'

/**
 * Botón flotante de WhatsApp, visible solo en móvil.
 * Se oculta cuando la sección de contacto o el footer están en pantalla,
 * porque ahí ya hay CTAs de WhatsApp y el botón taparía contenido.
 */
export function WhatsAppFloat() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const targets = [document.getElementById('contacto'), document.querySelector('footer')].filter(
      (el): el is HTMLElement => el !== null
    )
    if (targets.length === 0) return

    const visible = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      })
      setHidden(visible.size > 0)
    })
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={SITE_CONFIG.getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      className={cn(
        'md:hidden fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-black/40 transition-all duration-200 hover:scale-105 active:scale-95',
        hidden && 'pointer-events-none translate-y-4 opacity-0'
      )}
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
