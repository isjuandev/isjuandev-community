import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/config'
import { MAIN_PLANS } from '@/lib/data/pricing'
import { WhatsAppIcon } from '@/components/platform-icons'
import { ArrowLeft, CheckCircle2, Clock, Sparkles, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diseño de Páginas Web de Alta Conversión | IsJuanDev (Borrador)',
  description: 'Diseño de páginas web rápidas y modernas para negocios que buscan captar clientes directamente a WhatsApp. Sprint de 5 a 7 días con código 100% propio.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PaginasWebPage() {
  const plan = MAIN_PLANS.find((p) => p.id === 'web-completa') || MAIN_PLANS[1]
  const express = MAIN_PLANS.find((p) => p.id === 'web-express') || MAIN_PLANS[0]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/25">
      <Navigation />

      <main className="container mx-auto px-6 lg:px-8 py-16 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver al Inicio
        </Link>

        {/* Banner de Borrador */}
        <div className="p-4 rounded-xl border border-border bg-card/60 text-xs font-mono text-muted-foreground mb-10 flex items-center gap-2.5">
          <AlertCircle className="h-4 w-4 text-primary shrink-0" />
          <span>[BORRADOR / DRAFT] — Página de servicio dedicada basada únicamente en el catálogo actual de la home. No indexada en sitemap ni buscadores.</span>
        </div>

        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
            Servicio Especializado
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Diseño de Páginas Web para Vender<span className="text-primary">.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Diseño páginas web modernas y optimizadas para celulares, estructuradas para que cualquier persona que entre entienda tu oferta y te escriba directamente a WhatsApp.
          </p>
        </div>

        {/* Tarjeta de Solución Principal */}
        <div className="card-editorial p-8 rounded-2xl border border-border/80 bg-card/50 mb-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-semibold">
                {plan.badge}
              </span>
              <h2 className="text-2xl font-display font-bold text-foreground mt-2">
                {plan.title}
              </h2>
              <p className="text-sm text-primary font-mono mt-1">{plan.subtitle}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-display font-bold text-foreground">{plan.priceDisplay.split(' / ')[0]}</div>
              <div className="text-xs font-mono text-muted-foreground">{plan.paymentTerms}</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>

          <div className="space-y-3 pt-4 border-t border-border/60">
            <p className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">Lo que incluye:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {plan.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-xs font-mono text-secondary">
              <Clock className="h-3.5 w-3.5" />
              <span>{plan.timeframe}</span>
            </div>
            <Button size="lg" asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <a href={SITE_CONFIG.getWhatsAppUrl(`¡Hola Juan! Me interesa contratar el servicio de ${plan.title}.`)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                <span>{plan.ctaText}</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Opción Express */}
        <div className="p-6 rounded-xl border border-border/60 bg-background/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-muted-foreground">¿Buscas algo más rápido?</span>
            <h3 className="text-lg font-display font-bold text-foreground">{express.title} ({express.badge})</h3>
            <p className="text-xs text-muted-foreground max-w-lg mt-1">{express.subtitle} · {express.priceDisplay.split(' / ')[0]}</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/#servicios">Ver todos los planes en Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
