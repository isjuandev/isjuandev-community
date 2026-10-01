'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Wordmark } from '@/components/wordmark'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/#servicios', label: 'Soluciones' },
    { href: '/#auditoria', label: 'Auditoría Web' },
    { href: '/#proyectos', label: 'Casos de Éxito' },
    { href: '/#proceso', label: 'El Método' },
    { href: '/about', label: 'Sobre mí' },
    { href: '/contact', label: 'Contacto' },
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
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[0.90rem] text-muted-foreground hover:text-foreground transition-colors',
                  isActive(link.href) && 'text-primary font-medium'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-[12px]">
            <Link
              href="/contact"
              className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors px-2"
            >
              Contacto
            </Link>
            <Button size="sm" asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm">
              <a href={SITE_CONFIG.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Cotizar Proyecto
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden font-mono text-[0.85rem] text-foreground"
            aria-expanded={mobileMenuOpen}
          >
            [ {mobileMenuOpen ? 'cerrar' : 'menu'} ]
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-7 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[0.92rem] text-muted-foreground hover:text-foreground transition-colors',
                  isActive(link.href) && 'text-primary font-medium'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
              <Button className="w-full gap-2" asChild>
                <a href={SITE_CONFIG.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Cotizar por WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Formulario de Contacto <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
