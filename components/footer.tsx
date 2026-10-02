import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { Wordmark } from '@/components/wordmark'
import { SITE_CONFIG } from '@/lib/config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer data-line="footer" className="relative border-t border-border bg-background text-foreground overflow-hidden">
      {/* Sutil resplandor superior integrado con la estética del sitio */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-24 bg-gradient-to-b from-primary/5 to-transparent"
      />

      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-border/60">
          {/* Brand & Value Prop (5 columnas) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col gap-2">
              <Link href="/" className="inline-flex items-center gap-1.5 w-fit">
                <Wordmark size="sm" />
                <span className="text-primary font-display font-bold text-xl">.</span>
              </Link>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Disponible para nuevos sprints y consultoría</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Desarrollo de páginas web de alta conversión y automatizaciones comerciales con IA para negocios que buscan escalar sin perder ventas.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-sm"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                <span>Cotizar por WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-lg border border-border bg-card/50 hover:bg-card text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Auditoría Gratuita</span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground/70" />
              </Link>
            </div>
          </div>

          {/* Columna 1: Soluciones (3 columnas) */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Soluciones
            </div>
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
            <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Ecosistema
            </div>
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
            <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Canales
            </div>
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
            <Link href="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              Sobre mí
            </Link>
            <Link href="/projects" className="hover:text-primary transition-colors">
              Proyectos
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
