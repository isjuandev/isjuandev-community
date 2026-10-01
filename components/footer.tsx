import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { SITE_CONFIG } from '@/lib/config'

export function Footer() {
  return (
    <footer data-line="footer" className="border-t border-border bg-card/40 pt-16 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border/60">
          {/* Brand & Value Prop */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display font-bold text-xl text-foreground inline-flex items-center gap-2">
                <span>Juan Diego</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Desarrollo de páginas web de alta conversión y automatizaciones comerciales con IA para negocios que buscan escalar sin perder ventas.
            </p>
            <div className="pt-2">
              <a
                href={SITE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Respuesta directa por WhatsApp
              </a>
            </div>
          </div>

          {/* Columna 1: Soluciones & Negocio */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs text-foreground uppercase tracking-wider font-semibold">
              Soluciones
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono text-[0.85rem]">
              <li>
                <Link href="/#servicios" className="hover:text-primary transition-colors">
                  Sprint Web de Alta Conversión
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-primary transition-colors">
                  Asistente WhatsApp con IA
                </Link>
              </li>
              <li>
                <Link href="/#auditoria" className="hover:text-primary transition-colors">
                  Auditoría Web Gratuita (90s)
                </Link>
              </li>
              <li>
                <Link href="/#proceso" className="hover:text-primary transition-colors">
                  El Método en 7 Días
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Formulario de Diagnóstico
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 2: Ecosistema & Recursos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs text-foreground uppercase tracking-wider font-semibold">
              Ecosistema &amp; Recursos
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono text-[0.85rem]">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors flex items-center justify-between pr-4">
                  <span>Aprendizajes (Blog)</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-primary transition-colors flex items-center justify-between pr-4">
                  <span>Tips de Código</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/comunidad" className="hover:text-primary transition-colors flex items-center justify-between pr-4">
                  <span>Comunidad &amp; Streams</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors flex items-center justify-between pr-4">
                  <span>Archivo de Proyectos</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <a href="/CV_JuanDiegoGarcia.pdf" download className="hover:text-primary transition-colors flex items-center justify-between pr-4">
                  <span>Descargar CV Técnico</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Canales & Contacto */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs text-foreground uppercase tracking-wider font-semibold">
              Canales Directos
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono text-[0.85rem]">
              <li>
                <a href={SITE_CONFIG.social.kick} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  Kick (Streams) <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  TikTok <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  Instagram <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  GitHub <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground/70">
          <p>© {new Date().getFullYear()} IsJuanDev. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              Sobre mí
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
