import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { 
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Video,
  Smartphone,
  ChevronRight,
  ChevronDown
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { businessSolutions, faqs } from '@/lib/data/content'
import { RATE_NOTE, SUBSCRIPTION_TIERS, ANNUAL_NOTE, ENTRY_SETUP_COP, formatCop } from '@/lib/data/pricing'
import { testimonials, canRenderTestimonials } from '@/lib/data/testimonials'
import { PricingPlans } from '@/components/pricing-plans'
import { HeroChatMockup } from '@/components/hero-chat-mockup'
import { Reveal } from '@/components/motion/reveal'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Páginas Web y Asistente de WhatsApp con IA | IsJuanDev',
  description: 'Diseño páginas web de alta conversión y configuro tu asistente de WhatsApp con IA. Automatización con IA para captar clientes y escalar tu negocio.',
  openGraph: {
    type: 'website',
    siteName: 'IsJuanDev',
    locale: 'es_CO',
    title: 'Páginas Web y Asistente de WhatsApp con IA | IsJuanDev',
    description: 'Diseño páginas web de alta conversión y configuro tu asistente de WhatsApp con IA. Automatización con IA para captar clientes y escalar tu negocio.',
    url: 'https://www.isjuandev.com',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'IsJuanDev — Webs de Alta Conversión y Automatizaciones IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@isjuandev',
    creator: '@isjuandev',
    title: 'Páginas Web y Asistente de WhatsApp con IA | IsJuanDev',
    description: 'Diseño páginas web de alta conversión y configuro tu asistente de WhatsApp con IA. Automatización con IA para captar clientes y escalar tu negocio.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://www.isjuandev.com',
  },
}

const workSteps = [
  {
    step: '01',
    title: 'Reviso tu caso',
    description: 'Veo cómo te encuentran hoy tus clientes y cómo les respondes. Identifico qué tareas repites a mano y te propongo qué automatizar, antes de construir nada.',
    badge: 'Día 1'
  },
  {
    step: '02',
    title: 'Lo construyo',
    description: 'Armo tu web o tu asistente de WhatsApp y lo conecto con las herramientas que ya usas. Tú sigues atendiendo tu negocio normalmente mientras tanto.',
    badge: 'Días 2 al 5'
  },
  {
    step: '03',
    title: 'Lo pruebo contigo y lo entrego',
    description: 'Hacemos pruebas reales juntos, ajusto las respuestas para que sean seguras y te entrego todo funcionando, con videos cortos para ti y tu equipo.',
    badge: 'Días 6 y 7'
  }
]

const differentials = [
  {
    title: 'Hablas directo conmigo',
    description: 'Sin intermediarios ni gerentes de cuenta: trabajas con quien diseña y programa tu solución.'
  },
  {
    title: 'Entrega en días, no en meses',
    description: 'Cada plan tiene un plazo cerrado de 2 a 7 días, con precio publicado y sin sorpresas.'
  },
  {
    title: 'Todo queda tuyo',
    description: 'Sin plataformas que te aten: compras tu web o la tomas en suscripción con opción de compra, y el código y los flujos son tuyos.'
  }
]

const BIGGER_OPTIONS = [
  {
    title: 'Tu Nueva Web para Vender',
    description: 'Una web completa con varias secciones, textos de venta y tu dominio .com, para cuando una sola página se queda corta.',
    message: '¡Hola Juan! Me interesa Tu Nueva Web para Vender.'
  },
  {
    title: 'Plan Pro mensual',
    description: 'Un flujo o mejora nueva cada mes, campañas para reactivar clientes por WhatsApp y una revisión de resultados contigo.',
    message: '¡Hola Juan! Quiero saber más sobre el plan mensual Pro.'
  },
  {
    title: 'Sistemas a medida & CRM',
    description: 'Pasarelas de pago (Wompi, PSE, Stripe), CRM, portales privados y automatización con n8n. Empieza con una auditoría de tus procesos.',
    message: '¡Hola Juan! Quiero evaluar un sistema a medida para mi negocio.'
  }
]

function IncludesList({ items }: { items: string[] }) {
  const list = (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-xs text-foreground/90">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <div className="hidden md:block">{list}</div>
      <details className="md:hidden group">
        <summary className="cursor-pointer list-none inline-flex items-center min-h-11 text-sm font-medium text-primary hover:underline underline-offset-4">
          <span className="group-open:hidden">Ver qué incluye</span>
          <span className="hidden group-open:inline">Ver menos</span>
        </summary>
        <div className="pt-1">{list}</div>
      </details>
    </>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/25">
      <Navigation />

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="section hero-section relative" id="top" data-line="hero">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.12] mb-6">
              Tu web y tu WhatsApp <br className="hidden sm:inline" />
              <span className="text-primary">
                trabajando por ti.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Hago páginas web que hacen que te escriban y asistentes de WhatsApp con IA que responden, cotizan y agendan a tus clientes aunque estés ocupado.
              <span className="text-foreground font-medium block mt-2">
                Más mensajes de clientes reales, menos tareas manuales.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-x-6 gap-y-4 mb-8">
              <Button size="lg" asChild className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 sm:px-7 py-4 sm:py-6 h-auto min-h-12 text-base rounded-xl transition-all whitespace-normal sm:whitespace-nowrap text-center">
                <a href="#auditoria">
                  <Sparkles className="h-4 w-4" />
                  Pedir mi auditoría gratis (90&nbsp;s)
                  <ArrowUpRight className="h-4 w-4 ml-0.5" />
                </a>
              </Button>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-1.5 min-h-11 whitespace-nowrap text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
              >
                Ver planes y precios
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Sin reuniones eternas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Entrega en 2 a 7 días
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Desde {formatCop(ENTRY_SETUP_COP)}
              </span>
            </div>
          </div>

          <HeroChatMockup />
          </div>

          {/* Diferenciales en franja corta */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-border/50">
            {differentials.map((item) => (
              <div key={item.title} className="rounded-2xl bg-card/40 border border-border/70 px-5 py-3.5 sm:p-5">
                <div className="text-sm font-display font-semibold text-foreground">{item.title}</div>
                <div className="hidden sm:block text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 2. AUDITORÍA WEB GRATUITA (LEAD MAGNET COMERCIAL) ──────────────── */}
      <section className="section bg-card/40" id="auditoria" data-line="auditoria">
        <div className="container mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="eyebrow">Diagnóstico Gratuito</span>
              <span className="text-xs text-muted-foreground">Video de 90 segundos · Sin compromiso</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-2">
              ¿Tu web y tus redes no están generando ventas<span className="text-primary">?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              La mayoría de sitios fallan en lo básico: cargan lento en teléfonos, el botón de WhatsApp no se ve o no hay claridad en los precios. Te grabo un video personalizado de 90 segundos mostrándote exactamente qué ajustar para empezar a recibir más mensajes de clientes.
            </p>
          </Reveal>

          {/* Grid de 3 Tiles con el mismo diseño y alineación que Planes & Precios */}
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mt-8 sm:mt-12 items-stretch">
            <Reveal delay={180} className="flex">
              <article className="card-editorial flex flex-col justify-between w-full p-5 sm:p-8 rounded-2xl border border-border/80 bg-card/60 hover:border-border transition-all">
                <div className="flex items-center sm:items-start gap-4 lg:block">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-0 lg:mb-5">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-foreground mb-0 sm:mb-2 lg:mb-3">
                    Tu web vista desde el celular
                  </h3>
                  <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed">
                    Reviso cómo ve tu cliente el sitio desde su teléfono: si se lee bien, si se entiende qué ofreces y si encuentra fácil cómo escribirte.
                  </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={240} className="flex">
              <article className="card-editorial flex flex-col justify-between w-full p-5 sm:p-8 rounded-2xl border border-border/80 bg-card/60 hover:border-border transition-all">
                <div className="flex items-center sm:items-start gap-4 lg:block">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-0 lg:mb-5">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-foreground mb-0 sm:mb-2 lg:mb-3">
                    Por qué no te escriben
                  </h3>
                  <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed">
                    Te muestro por qué la gente visita tu perfil o tu web y se va sin escribirte: falta de botón directo, formularios engorrosos o lentitud.
                  </p>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={300} className="flex">
              <article className="card-editorial flex flex-col justify-between w-full p-5 sm:p-8 rounded-2xl border border-border/80 bg-card/60 hover:border-border transition-all">
                <div className="flex items-center sm:items-start gap-4 lg:block">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-0 lg:mb-5">
                    <Video className="h-5 w-5" />
                  </div>
                  <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-foreground mb-0 sm:mb-2 lg:mb-3">
                    Video de 90s + Plan de Acción
                  </h3>
                  <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed">
                    Te grabo un video mostrándote en pantalla los fallos concretos y el plan paso a paso para resolverlos en menos de 7 días.
                  </p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Tarjeta de Acción Directa / Solicitud */}
          <div className="mt-8">
            <Reveal delay={360}>
              <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-1 text-left">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                    Solicitud Inmediata
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">
                    Pide tu video de 90 segundos hoy
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                    Envíame el enlace de tu sitio web o perfil por WhatsApp. Es 100% gratuito y te lo envío en menos de 24 horas.
                  </p>
                </div>

                <div className="w-full md:w-auto shrink-0 flex flex-col items-start md:items-end gap-2">
                  <Button size="lg" asChild className="w-full md:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 px-6 text-sm sm:text-base whitespace-normal sm:whitespace-nowrap">
                    <a href={SITE_CONFIG.getWhatsAppUrl('¡Hola Juan! Me gustaría recibir la auditoría gratuita de 90 segundos para mi sitio web o negocio.')} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-5 w-5 shrink-0" />
                      <span>Pedir Auditoría por WhatsApp</span>
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground text-left md:text-right">
                    Sin llamadas de venta forzadas · Revisión directa por Juan Diego
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. SOLUCIONES PRODUCTIZADAS (CATÁLOGO COMERCIAL) ──────────────── */}
      <section className="section" id="servicios" data-line="servicios">
        <div className="container mx-auto">
          <Reveal>
            <div className="eyebrow">
              Planes &amp; Precios
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-2">
              Planes directos para conseguir más clientes y automatizar tu negocio<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              Pagas una instalación para arrancar y una mensualidad pequeña con la que mantengo todo funcionando y mejorando. Precios transparentes y entrega en días, no en meses.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              {RATE_NOTE}
            </p>
          </Reveal>

          <PricingPlans solutions={businessSolutions} />
        </div>
      </section>

      {/* ── 3.5 MENSUALIDADES ────────────────────────────────────────────── */}
      <section className="section bg-card/40" id="mensualidad" data-line="mensualidad">
        <div className="container mx-auto">
          <Reveal>
            <div className="eyebrow">
              Soporte &amp; Crecimiento Mensual
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-2">
              Tu web y tu asistente funcionando y mejorando cada mes<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              Tu web y tu asistente no se instalan y se olvidan: cada mes los monitoreo, ajusto lo que haga falta y te muestro los resultados. {ANNUAL_NOTE}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mt-8 sm:mt-12 items-stretch max-w-4xl">
            {SUBSCRIPTION_TIERS.filter((tier) => tier.id !== 'pro').map((tier, i) => (
              <Reveal key={tier.id} delay={180 + i * 60} className="flex">
                <article
                  className={cn(
                    'card-editorial flex flex-col justify-between w-full p-5 sm:p-8 rounded-2xl border',
                    tier.highlight
                      ? 'border-primary/80 bg-card shadow-xl shadow-primary/5 ring-1 ring-primary/30'
                      : 'border-border/80 bg-card/60'
                  )}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 mb-3">
                      <h3 className="font-display font-bold text-xl text-foreground">{tier.name}</h3>
                      {tier.highlight && (
                        <span className="whitespace-nowrap text-xs font-mono px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/30 font-semibold uppercase tracking-wider">
                          Incluido en el asistente
                        </span>
                      )}
                    </div>
                    <p className="hidden md:block text-sm text-muted-foreground leading-relaxed mb-4">{tier.description}</p>
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className={cn('font-display font-bold text-2xl tracking-tight', tier.highlight ? 'text-secondary' : 'text-foreground')}>
                          {tier.priceDisplay.split(' / ')[0]}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">/ mes</span>
                      </div>
                    </div>
                    <IncludesList items={tier.features} />
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/60">
                    <Button size="sm" variant="outline" asChild className="w-full gap-2 border-border hover:bg-card text-foreground min-h-11 h-auto whitespace-normal">
                      <a
                        href={SITE_CONFIG.getWhatsAppUrl(`¡Hola Juan! Quiero saber más sobre el plan mensual ${tier.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        <span>Consultar plan {tier.name}</span>
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ALGO MÁS GRANDE ───────────────────────────────────────────── */}
      <section className="section" id="sistemas" data-line="sistemas">
        <div className="container mx-auto">
          <Reveal>
            <div className="eyebrow">
              Proyectos más grandes
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-2">
              ¿Necesitas algo más grande<span className="dot">?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              Si tu negocio ya creció, armamos algo a tu medida. Escríbeme y te digo en una conversación qué te conviene y cuánto cuesta.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mt-8 sm:mt-12 items-stretch">
            {BIGGER_OPTIONS.map((option, i) => (
              <Reveal key={option.title} delay={180 + i * 60} className="flex">
                <article className="card-editorial flex flex-col justify-between w-full p-5 sm:p-6 rounded-2xl border border-border/80 bg-card/60">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                  </div>
                  <a
                    href={SITE_CONFIG.getWhatsAppUrl(option.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 min-h-11 text-sm font-semibold text-primary hover:underline underline-offset-4"
                  >
                    Escríbeme
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── 5. EL MÉTODO DE TRABAJO (TIMELINE SECUENCIAL) ─────────────────── */}
      <section className="section bg-card/40" id="proceso" data-line="proceso">
        <div className="container mx-auto">
          <Reveal>
            <div className="eyebrow">
              Cómo trabajo
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-2">
              De tu idea a funcionando en una semana<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              Un método simple y transparente para que empieces a ver resultados en la primera semana. 
              Sin fricción ni pérdida de tiempo.
            </p>
          </Reveal>

          {/* Flujo de Pasos Conectados */}
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mt-8 sm:mt-12">
            {workSteps.map((step, i) => (
              <Reveal key={step.step} delay={180 + i * 80}>
                <div className="card-editorial p-5 sm:p-7 h-full flex flex-col justify-between border-border/70 bg-background/80 relative">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-primary">{step.step}</span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-semibold">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6.5 PRUEBA SOCIAL / TESTIMONIOS (CONDICIONAL) ───────────────── */}
      {canRenderTestimonials && (
        <section className="section" id="testimonios" data-line="testimonios">
          <div className="container mx-auto">
            <Reveal>
              <div className="eyebrow">
                Prueba Social
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="section-title mt-2">
                Resultados en negocios reales<span className="dot">.</span>
              </h2>
            </Reveal>
            <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mt-8 sm:mt-12 items-stretch">
              {testimonials.map((t, idx) => (
                <Reveal key={idx} delay={180 + idx * 80} className="flex">
                  <article className="card-editorial flex flex-col justify-between w-full p-5 sm:p-8 rounded-2xl border border-border/80 bg-card/60 hover:border-border transition-all">
                    <div>
                      <p className="text-sm text-foreground/90 leading-relaxed italic mb-6">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold mb-4">
                        {t.result}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/60">
                      <h3 className="font-display font-bold text-base text-foreground">{t.name}</h3>
                      <p className="text-xs text-muted-foreground">{t.business}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. PREGUNTAS FRECUENTES (FAQ) ─────────────────────────────────── */}
      <section className={cn('section', canRenderTestimonials && 'bg-card/40')} id="faq" data-line="faq">
        <div className="container mx-auto">
          <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow">
              Preguntas antes de empezar
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-2">
              Preguntas Frecuentes<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead text-muted-foreground mb-8">
              Todo lo que necesitas saber antes de dar el primer paso.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group card-editorial px-5 py-4 border border-border/70 rounded-lg bg-card/40 transition-colors open:bg-card/70 open:border-border"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none text-left font-display font-semibold text-base py-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">
                    <h3 className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors pr-4 m-0">
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="text-sm text-muted-foreground leading-relaxed pt-3 pb-1 border-t border-border/40 mt-3">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      {/* ── 9. CONTACTO & CIERRE ─────────────────────────────────────────── */}
      <section className={cn('section contact-section', !canRenderTestimonials && 'bg-card/40')} id="contacto" data-line="contact">
        <div className="container mx-auto">
          <Reveal>
            <div className="eyebrow mb-3">
              Empecemos
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-5 sm:p-8 md:p-12 lg:p-14">
              <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-[1.15]">
                    ¿Quieres que te escriban más clientes y no perder ventas<span className="text-primary">?</span>
                  </h2>

                  <div className="flex items-center gap-3 pt-1">
                    <Image
                      src="/juan.jpg"
                      alt="Juan Diego García, desarrollador y fundador de IsJuanDev"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover object-top border border-border/80"
                    />
                    <p className="text-sm text-muted-foreground leading-snug">
                      <span className="block text-foreground font-medium">Soy Juan Diego</span>
                      Reviso tu caso y te respondo yo personalmente.
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-xl">
                    Pide tu auditoría gratuita: te grabo un video de 90 segundos mostrándote qué ajustar en tu web o tus redes (con llamada de 15 min opcional si la quieres).
                  </p>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Video en menos de 24 horas
                    </span>
                    <span className="flex items-center gap-1.5 text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> 100% gratuito y sin compromiso
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4 bg-background/80 p-4 sm:p-6 md:p-8 rounded-xl border border-border/80">
                  <Button size="lg" asChild className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5 sm:py-6 text-sm sm:text-base h-auto min-h-[48px] whitespace-nowrap text-center justify-center">
                    <a href={SITE_CONFIG.getWhatsAppUrl('¡Hola Juan! Me gustaría recibir la auditoría gratuita de 90 segundos para mi sitio web o negocio.')} target="_blank" rel="noopener noreferrer">
                      <Sparkles className="h-5 w-5 shrink-0" />
                      <span><span className="sm:hidden">Auditoría gratis</span><span className="hidden sm:inline">Pedir auditoría gratis</span> (90&nbsp;s)</span>
                    </a>
                  </Button>

                  <div className="text-center space-y-2">
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
                      <a
                        href={SITE_CONFIG.getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 min-h-11 text-muted-foreground hover:text-emerald-400 transition-colors"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        <span>Escríbeme por WhatsApp</span>
                      </a>
                      <Link href="/contact" className="inline-flex items-center min-h-11 text-muted-foreground hover:text-primary transition-colors">
                        Usar formulario
                      </Link>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Normalmente respondo en menos de 2 horas
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 sm:mt-10 pt-6 border-t border-border/50 flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-muted-foreground">
                <span>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline break-all sm:break-normal">{SITE_CONFIG.email}</a></span>
                <span>Ubicación: Colombia (servicio global)</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
