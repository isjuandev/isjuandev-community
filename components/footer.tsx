import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config'

const footerLinks = [
  { href: '/#servicios', label: 'Soluciones' },
  { href: '/#auditoria', label: 'Auditoría Web' },
  { href: '/#proyectos', label: 'Casos de Éxito' },
  { href: '/#proceso', label: 'El Método' },
  { href: SITE_CONFIG.getWhatsAppUrl(), label: 'WhatsApp', external: true },
  { href: '/contact', label: 'Contacto' },
  { href: 'https://github.com/isjuandev', label: 'GitHub', external: true },
]

export function Footer() {
  return (
    <footer data-line="footer" className="px-4 py-16 border-t border-border bg-background">
      <div className="container mx-auto flex flex-col items-center text-center">
        <p className="font-display font-bold text-lg text-foreground mb-2">
          Juan Diego <span className="text-primary font-mono">//</span> IsJuanDev
        </p>
        <p className="text-muted-foreground text-[0.92rem] max-w-md mx-auto mb-8">
          Webs de alta conversión y automatizaciones con IA para negocios y empresas que no pueden permitirse perder ventas.
        </p>
        <div className="flex justify-center gap-6 flex-wrap font-mono text-[0.82rem] text-muted-foreground">
          {footerLinks.map((link) => (
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            )
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground/60 mt-8">
          © {new Date().getFullYear()} IsJuanDev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
