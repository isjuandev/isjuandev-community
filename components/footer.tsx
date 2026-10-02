import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { Wordmark } from '@/components/wordmark'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer data-line="footer" className="border-t border-border bg-card/40">
      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-border/60">
          {/* Brand & Value Prop (5 columnas) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Wordmark size="sm" />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Desarrollo de páginas web de alta conversión y automatizaciones comerciales con IA para negocios que buscan escalar sin perder ventas.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button size="sm" asChild>
                <a href={SITE_CONFIG.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  Cotizar por WhatsApp
                </a>
              </Button>

              <Button size="sm" variant="outline" asChild>
                <Link href="/contact">
                  Auditoría Gratuita
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Columna 1: Soluciones (3 columnas) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Soluciones
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/#servicios" className="hover:text-foreground transition-colors block">
                  Sprint Web de Alta Conversión
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-foreground transition-colors block">
                  Asistente WhatsApp con IA
                </Link>
              </li>
              <li>
                <Link href="/#auditoria" className="hover:text-foreground transition-colors block">
                  Auditoría Web Gratuita (90s)
                </Link>
              </li>
              <li>
                <Link href="/#proceso" className="hover:text-foreground transition-colors block">
                  El Método en 7 Días
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors block">
                  Formulario de Diagnóstico
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 2: Ecosistema & Recursos (2 columnas) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Ecosistema
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Aprendizajes</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Tips de Código</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/comunidad" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Comunidad</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Archivo Proyectos</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                </Link>
              </li>
              <li>
                <a href="/CV_JuanDiegoGarcia.pdf" download className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Descargar CV</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Canales Directos (2 columnas) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Canales
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={SITE_CONFIG.social.kick} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Kick (Streams)</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>TikTok</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Instagram</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <span>Email Directo</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>© {currentYear} IsJuanDev. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              Sobre mí
            </Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Proyectos
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
