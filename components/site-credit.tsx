import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SiteCreditProps {
  className?: string
}

/**
 * Patrón reutilizable para colocar en el pie de página de sitios
 * desarrollados y entregados a clientes, enlazando al dominio principal.
 */
export function SiteCredit({ className }: SiteCreditProps) {
  return (
    <div className={cn('text-xs text-muted-foreground font-mono flex items-center gap-1.5', className)}>
      <span>Sitio por</span>
      <Link
        href="https://www.isjuandev.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors font-medium underline-offset-4 hover:underline"
      >
        IsJuanDev
      </Link>
    </div>
  )
}
