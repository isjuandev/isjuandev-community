'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Wordmark } from '@/components/wordmark'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Proyectos' },
    { href: '/about', label: 'Skills' },
    { href: '/blog', label: 'Writing' },
    { href: '/tips', label: 'Consejos' },
    { href: '/contact', label: 'Contacto' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-30 bg-background border-b border-border">
      <div className="container mx-auto px-7">
        <div className="flex items-center justify-between h-[64px]">
          <Link href="/" className="inline-flex items-center">
            <Wordmark size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[0.92rem] text-muted-foreground hover:text-foreground transition-colors',
                  isActive(link.href) && 'text-primary font-medium'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-[14px]">
            <Button variant="ghost" asChild className="border border-input">
              <a href="https://github.com/isjuandev" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button asChild>
              <Link href="/contact">Únete</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden font-mono text-[0.85rem] text-foreground"
            aria-expanded={mobileMenuOpen}
          >
            [ {mobileMenuOpen ? 'cerrar' : 'menu'} ]
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
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
            <Button className="w-full" asChild>
              <Link href="/contact">Únete a la comunidad</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}