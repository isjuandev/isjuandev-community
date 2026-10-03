import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/config'
import { CUSTOM_SYSTEM } from '@/lib/data/pricing'
import { WhatsAppIcon } from '@/components/platform-icons'
import { ArrowLeft, CheckCircle2, Zap, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatizaciones con n8n e Inteligencia Artificial | IsJuanDev (Borrador)',
  description: 'Conexión de herramientas, flujos automatizados con n8n y agentes de IA para eliminar tareas operativas repetitivas sin intermediarios.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AutomatizacionN8nPage() {
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
          <span className="text-xs font-mono uppercase tracking-wider text-secondary font-semibold">
            Integraciones &amp; Automatización
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Automatización con n8n e IA<span className="text-secondary">.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Conectamos tus canales de venta, pasarelas de pago y CRM con flujos inteligentes en n8n. Sin fricción, sin ataduras y con código 100% bajo tu propiedad.
          </p>
        </div>

        <div className="card-editorial p-8 rounded-2xl border border-border/80 bg-card/50 mb-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20 font-semibold">
                SPRINT A MEDIDA
              </span>
              <h2 className="text-2xl font-display font-bold text-foreground mt-2">
                Arquitectura de Flujos Operativos
              </h2>
            </div>
            <div className="text-right">
              <div className="text-2xl font-display font-bold text-foreground">{CUSTOM_SYSTEM.priceDisplay}</div>
              <div className="text-xs font-mono text-muted-foreground">Presupuesto cerrado por alcance</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {CUSTOM_SYSTEM.description}
          </p>

          <div className="space-y-3 pt-4 border-t border-border/60">
            <p className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">Casos de integración frecuentes:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Captura y sincronización de leads de WhatsApp directo a Notion o Google Sheets',
                'Calificación automática de prospectos con modelos de IA (OpenAI / DeepSeek)',
                'Integración de pasarelas de pago (Wompi, PSE, Stripe) con confirmación inmediata',
                'Notificaciones automáticas por correo y webhook a equipos de venta',
                'Agendamiento sincronizado con Google Calendar sin colisiones de horario'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button size="lg" asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <a href={SITE_CONFIG.getWhatsAppUrl('¡Hola Juan! Me gustaría evaluar una automatización con n8n para mi negocio.')} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                <span>Evaluar Caso de Automatización</span>
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
