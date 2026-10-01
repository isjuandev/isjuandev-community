'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { Button } from '@/components/ui/button'
import { Wordmark } from '@/components/wordmark'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Exactamente 3 enlaces principales en el header
  const primaryNavLinks = [
    { href: '/#servicios', label: 'Soluciones' },
    { href: '/#auditoria', label: 'Auditoría Gratis' },
    { href: '/about', label: 'Sobre mí' },
  ]

  // Enlaces del ecosistema para el menú móvil
  const ecosystemLinks = [
    { href: '/blog', label: 'Aprendizajes (Blog)' },
    { href: '/tips', label: 'Tips de Código' },
    { href: '/projects', label: 'Archivo de Proyectos' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-7">
        <div className="flex items-center justify-between h-[64px]">
          <Link href="/" className="inline-flex items-center">
            <Wordmark size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[0.92rem] text-muted-foreground hover:text-foreground transition-colors font-medium',
                  isActive(link.href) && 'text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-[0.88rem] text-muted-foreground hover:text-foreground transition-colors px-1"
            >
              Contacto
            </Link>
            <Button size="sm" asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm">
              <a href={SITE_CONFIG.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Cotizar Proyecto
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground border border-border/80 px-2.5 py-1 rounded"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-7 py-6 flex flex-col gap-5">
            {/* Principales de Venta */}
            <div className="flex flex-col gap-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Navegación</span>
              <Link
                href="/"
                className="text-[0.95rem] text-foreground font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.95rem] text-foreground font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-[0.95rem] text-foreground font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>

            {/* Ecosistema */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-border/50">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Recursos &amp; Archivo</span>
              {ecosystemLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.88rem] text-muted-foreground hover:text-primary transition-colors flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/60" />
                </Link>
              ))}
            </div>

            {/* Acciones */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-border/50">
              <Button className="w-full gap-2 bg-primary text-primary-foreground font-semibold" asChild>
                <a href={SITE_CONFIG.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  Cotizar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
