import Link from 'next/link'
import type { Metadata } from 'next'
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Bot, 
  Calendar, 
  Video, 
  Layers, 
  Smartphone,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Code2,
  Tv,
  FolderGit2,
  Check,
  ExternalLink
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { businessSolutions, faqs } from '@/lib/data/content'
import { RATE_NOTE, OPTIONAL_ADDONS, CUSTOM_SYSTEM } from '@/lib/data/pricing'
import { testimonials, canRenderTestimonials } from '@/lib/data/testimonials'
import { PricingPlans } from '@/components/pricing-plans'
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
    title: 'Diagnóstico de Proceso',
    description: 'Analizamos tu flujo actual de captación y atención. Identificamos tareas repetitivas y diseñamos la arquitectura automatizada (AS-IS → TO-BE) antes de escribir una sola línea de código.',
    badge: 'Día 1'
  },
  {
    step: '02',
    title: 'AI Automation & Web Sprint',
    description: 'Diseño e integración de tu web o flujos de IA con WhatsApp y n8n. Conectamos tus herramientas sin fricción ni reuniones innecesarias; tú sigues operando tu negocio normalmente.',
    badge: 'Días 2 al 5'
  },
  {
    step: '03',
    title: 'QA, Lanzamiento & Control Humano',
    description: 'Pruebas reales en caliente, calibración de respuestas seguras (cero alucinaciones) y entrega llave en mano con videos explicativos para ti y tu equipo.',
    badge: 'Días 6 y 7'
  }
]

const differentials = [
  {
    title: 'Trato Directo con el Ingeniero',
    description: 'Sin intermediarios, gerentes de cuenta ni comerciales. Trabajas y hablas directamente con quien diseña la arquitectura y escribe el código.'
  },
  {
    title: 'Entrega Llave en Mano en 3 a 7 Días',
    description: 'Mientras una agencia tradicional tarda semanas en cotizar, nosotros entregamos tu solución en un sprint cerrado lista para facturar.'
  },
  {
    title: '100% Código Propio y Tuyo',
    description: 'Sin ataduras a mensualidades abusivas ni plataformas rígidas. La infraestructura, los flujos y el código quedan bajo tu total propiedad y control.'
  },
  {
    title: 'Diseño Enfocado en Ventas',
    description: 'No hacemos páginas para adornar. Cada botón, texto y automatización está diseñado para que el visitante entienda tu oferta y te contacte de inmediato.'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/25">
      <Navigation />

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <section className="section hero-section relative" id="top" data-line="hero">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.12] mb-6">
              Webs que Venden <br className="hidden sm:inline" />
              <span className="text-primary">
                + WhatsApp con IA.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Especialista en diseño de páginas web de alta conversión y configuración de tu asistente de WhatsApp con IA para atender consultas, cotizar y agendar clientes automáticamente.
              <span className="text-foreground font-medium block mt-2">
                Menos tareas manuales. Más prospectos calificados listos para comprar.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <Button size="lg" asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-6 text-base rounded-xl transition-all">
                <a href="#auditoria">
                  <Sparkles className="h-4 w-4" />
                  Solicitar Auditoría Gratis (90s)
                  <ArrowUpRight className="h-4 w-4 ml-0.5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border hover:bg-card/90 px-6 py-6 text-base rounded-xl transition-all">
                <a href="#servicios">
                  Ver Soluciones &amp; Precios
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-muted-foreground">
              <a
                href={SITE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Chatea directo por WhatsApp &rarr;
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Sin reuniones eternas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Entrega en 2 a 7 días
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Esquema 50/50
              </span>
            </div>
          </div>

          {/* Tarjetas de Métricas de Experiencia */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 pt-10 border-t border-border/50">
            <div className="rounded-2xl bg-card/40 border border-border/70 p-5 hover:border-border transition-colors">
              <div className="text-3xl lg:text-4xl text-primary font-display font-bold">8+</div>
              <div className="text-sm font-semibold text-foreground mt-1">Años de Trayectoria</div>
              <div className="text-xs text-muted-foreground mt-0.5">Ingeniería de software y arquitectura</div>
            </div>
            <div className="rounded-2xl bg-card/40 border border-border/70 p-5 hover:border-border transition-colors">
              <div className="text-3xl lg:text-4xl text-secondary font-display font-bold">&lt; 60s</div>
              <div className="text-sm font-semibold text-foreground mt-1">Respuesta Automática</div>
              <div className="text-xs text-muted-foreground mt-0.5">Atención en menos de 60 segundos con WhatsApp</div>
            </div>
            <div className="rounded-2xl bg-card/40 border border-border/70 p-5 hover:border-border transition-colors">
              <div className="text-3xl lg:text-4xl text-primary font-display font-bold">2 a 7</div>
              <div className="text-sm font-semibold text-foreground mt-1">Días de Entrega</div>
              <div className="text-xs text-muted-foreground mt-0.5">Solución llave en mano lista para facturar</div>
            </div>
            <div className="rounded-2xl bg-card/40 border border-border/70 p-5 hover:border-border transition-colors">
              <div className="text-3xl lg:text-4xl text-secondary font-display font-bold">24/7</div>
              <div className="text-sm font-semibold text-foreground mt-1">Atención Continua</div>
              <div className="text-xs text-muted-foreground mt-0.5">Tus prospectos atendidos a cualquier hora</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. AUDITORÍA WEB GRATUITA (LEAD MAGNET COMERCIAL) ──────────────── */}
      <section className="section bg-card/40 border-y border-border" id="auditoria" data-line="auditoria">
        <div className="container mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider font-semibold">
                Diagnóstico Gratuito
              </span>
              <span className="text-xs text-muted-foreground">Video de 90 segundos · Sin compromiso</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
              ¿Tu web y tus redes no están generando ventas<span className="text-primary">?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              La mayoría de sitios fallan en lo básico: cargan lento en teléfonos, el botón de WhatsApp no se ve o no hay claridad en los precios. Te grabo un video personalizado de 90 segundos mostrándote exactamente qué ajustar para empezar a recibir más mensajes de clientes.
            </p>
          </Reveal>

          {/* Grid de 3 Tiles con el mismo diseño y alineación que Planes & Precios */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 items-stretch">
            <Reveal delay={180} className="flex">
              <article className="card-editorial flex flex-col justify-between w-full p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 hover:border-border transition-all">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-5">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    Inspección de Conversión Móvil
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Revisamos cómo experimenta tu cliente el sitio desde su teléfono celular: legibilidad, jerarquía y facilidad para encontrar tus canales de compra.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={240} className="flex">
              <article className="card-editorial flex flex-col justify-between w-full p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 hover:border-border transition-all">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-5">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    Detección de Fugas de Ventas
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Identificamos exactamente por qué las personas visitan tu perfil o web pero se van sin escribirte: falta de botón directo, formularios engorrosos o lentitud.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={300} className="flex">
              <article className="card-editorial flex flex-col justify-between w-full p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 hover:border-border transition-all">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-5">
                    <Video className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    Video de 90s + Plan de Acción
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Te grabo un video mostrándote en pantalla los fallos concretos y el plan paso a paso para resolverlos en menos de 7 días.
                  </p>
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
                  <p className="text-[11px] text-muted-foreground text-left md:text-right">
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
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
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
              Elige el plan ideal para el diseño de páginas web o la integración de tu asistente de WhatsApp con IA. Precios transparentes, sin sorpresas y con entrega en días, no en meses. 
              Tú eliges qué necesita tu negocio para empezar a vender más hoy.
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-3">
              {RATE_NOTE}
            </p>
          </Reveal>

          <PricingPlans solutions={businessSolutions} />

          {/* Complementos Opcionales: Soporte Mensual y Mantenimiento Web */}
          <div className="mt-8">
            <Reveal delay={380}>
              <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/40">
                <div className="max-w-2xl mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-secondary font-semibold mb-1">
                    Complementos Opcionales
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
                    Mantenimiento y Acompañamiento Mensual
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Sin permanencia mínima. Tu página y código son 100% de tu propiedad; estos servicios son totalmente opcionales para quienes buscan soporte continuo.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {OPTIONAL_ADDONS.map((addon) => (
                    <div
                      key={addon.id}
                      className="p-5 sm:p-6 rounded-xl border border-border/70 bg-background/60 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-display font-bold text-base sm:text-lg text-foreground">
                            {addon.name}
                          </h4>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20">
                            Opcional
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">
                          {addon.description}
                        </p>
                        <div className="space-y-2 mb-6">
                          {addon.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/60">
                        <div className="flex items-baseline justify-between gap-2 flex-wrap mb-3">
                          <span className="font-display font-bold text-xl text-foreground">
                            {addon.priceDisplay}
                          </span>
                          <span className="text-[11px] font-mono text-muted-foreground">
                            Sin permanencia
                          </span>
                        </div>
                        <Button size="sm" variant="outline" asChild className="w-full gap-2 border-border hover:bg-card text-foreground">
                          <a
                            href={SITE_CONFIG.getWhatsAppUrl(`¡Hola Juan! Me gustaría consultar sobre el complemento opcional: ${addon.name}.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <WhatsAppIcon className="h-3.5 w-3.5" />
                            <span>Consultar {addon.name}</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Banner de Proyectos a Medida / CRM */}
          <div className="mt-8">
            <Reveal delay={420}>
              <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-secondary font-semibold">
                      Sistemas a Medida &amp; CRM
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">· {CUSTOM_SYSTEM.priceDisplay}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">
                    ¿Necesitas conectar pasarelas de pago, bases de datos o tu CRM?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                    Desarrollo e integración de flujos con n8n, pasarelas locales (Wompi, PSE, Stripe), portales privados y automatización de operaciones complejas. Presupuesto cerrado según tus requerimientos.
                  </p>
                </div>

                <div className="w-full md:w-auto shrink-0">
                  <Button size="lg" variant="outline" asChild className="w-full md:w-auto gap-2 border-border hover:bg-card text-foreground font-semibold py-5">
                    <a href={SITE_CONFIG.getWhatsAppUrl('¡Hola Juan! Tengo un requerimiento más complejo o sistema a medida que me gustaría evaluar y cotizar.')} target="_blank" rel="noopener noreferrer">
                      <span>Cotizar Proyecto a Medida</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. EL MÉTODO DE TRABAJO (TIMELINE SECUENCIAL) ─────────────────── */}
      <section className="section bg-card/30 border-t border-border" id="proceso" data-line="proceso">
        <div className="container mx-auto">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Método de Trabajo
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-2">
              De la idea a producción en 7 días<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              Un método ágil, transparente y enfocado en que empieces a ver resultados en la primera semana. 
              Sin fricción ni pérdida de tiempo.
            </p>
          </Reveal>

          {/* Flujo de Pasos Conectados */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {workSteps.map((step, i) => (
              <Reveal key={step.step} delay={180 + i * 80}>
                <div className="card-editorial p-7 h-full flex flex-col justify-between border-border/70 bg-background/80 relative">
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

      {/* ── 6. POR QUÉ TRABAJAR CONMIGO (DIFERENCIALES & GARANTÍAS) ──────── */}
      <section className="section" id="diferenciales" data-line="diferenciales">
        <div className="container mx-auto">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Garantías &amp; Diferenciales
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-2">
              Ingeniería Senior sin la burocracia de una agencia<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              La alternativa directa a las agencias lentas y a las plantillas genéricas que no convierten.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {differentials.map((item, i) => (
              <Reveal key={item.title} delay={160 + i * 60}>
                <div className="card-editorial p-6 h-full flex flex-col justify-between border-border/60">
                  <div>
                    <h3 className="font-display font-bold text-base mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
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
        <section className="section bg-card/20 border-t border-border" id="testimonios" data-line="testimonios">
          <div className="container mx-auto">
            <Reveal>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                Prueba Social
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="section-title mt-2">
                Resultados en negocios reales<span className="dot">.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mt-12 items-stretch">
              {testimonials.map((t, idx) => (
                <Reveal key={idx} delay={180 + idx * 80} className="flex">
                  <article className="card-editorial flex flex-col justify-between w-full p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 hover:border-border transition-all">
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
      <section className="section bg-card/20 border-t border-border" id="faq" data-line="faq">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Resolvemos tus Dudas
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
      </section>

      {/* ── 8. ECOSISTEMA & AUTORIDAD TÉCNICA ─────────────────────────────── */}
      <section className="section bg-card/30 border-t border-border" id="ecosistema" data-line="ecosistema">
        <div className="container mx-auto">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Autoridad Técnica &amp; Comunidad
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-2">
              Construyo en público: código, streaming y comunidad<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              Detrás de cada solución para clientes hay investigación real, desarrollo en vivo y una comunidad activa. 
              Accede libremente a mis aprendizajes, snippets y proyectos públicos.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Reveal delay={180}>
              <Link href="/blog" className="group block h-full">
                <article className="card-editorial p-6 h-full flex flex-col justify-between border-border/70 bg-background/80 group-hover:border-primary/60 transition-all">
                  <div>
                    <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono text-primary font-semibold">Blog Técnico</span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                      Aprendizajes
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Artículos sobre arquitectura de software, toma de decisiones técnicas, carrera y lecciones reales de desarrollo.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-primary">
                    <span>Leer artículos del blog</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </article>
              </Link>
            </Reveal>

            <Reveal delay={240}>
              <Link href="/tips" className="group block h-full">
                <article className="card-editorial p-6 h-full flex flex-col justify-between border-border/70 bg-background/80 group-hover:border-secondary/60 transition-all">
                  <div>
                    <div className="p-3 w-fit rounded-lg bg-secondary/10 text-secondary mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono text-secondary font-semibold">Snippets</span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-2 text-foreground group-hover:text-secondary transition-colors">
                      Tips de Código
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Fragmentos interactivos, trucos de frontend, buenas prácticas y utilidades listas para copiar en tus proyectos.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-secondary">
                    <span>Explorar tips de código</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </article>
              </Link>
            </Reveal>

            <Reveal delay={300}>
              <Link href="/comunidad" className="group block h-full">
                <article className="card-editorial p-6 h-full flex flex-col justify-between border-border/70 bg-background/80 group-hover:border-primary/60 transition-all">
                  <div>
                    <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Tv className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono text-primary font-semibold">En Vivo</span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                      Comunidad &amp; Streams
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Sesiones de programación en vivo en Kick, clips educativos en TikTok e historias de proyectos en Instagram.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-primary">
                    <span>Ver comunidad y streams</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </article>
              </Link>
            </Reveal>

            <Reveal delay={360}>
              <Link href="/projects" className="group block h-full">
                <article className="card-editorial p-6 h-full flex flex-col justify-between border-border/70 bg-background/80 group-hover:border-secondary/60 transition-all">
                  <div>
                    <div className="p-3 w-fit rounded-lg bg-secondary/10 text-secondary mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <FolderGit2 className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono text-secondary font-semibold">Repositorios</span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-2 text-foreground group-hover:text-secondary transition-colors">
                      Archivo de Proyectos
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Catálogo con 26 repositorios públicos en GitHub, pruebas técnicas, experimentos y productos de código abierto.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-secondary">
                    <span>Explorar archivo de proyectos</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </article>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 9. CONTACTO & CIERRE COMERCIAL ────────────────────────────────── */}
      <section className="section contact-section border-t border-border" id="contacto" data-line="contact">
        <div className="container mx-auto">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-3">
              Empecemos Hoy
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-5 sm:p-8 md:p-12 lg:p-14">
              <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Columna Izquierda: Mensaje y Propuesta */}
                <div className="lg:col-span-7 space-y-5">
                  <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-[1.15]">
                    ¿Listo para captar más clientes y dejar de perder ventas<span className="text-primary">?</span>
                  </h2>

                  <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-xl">
                    Pide tu auditoría gratuita: te grabo un video de 90 segundos mostrándote exactamente qué ajustar para empezar a recibir más mensajes de clientes (con llamada de 15 min opcional si la requieres).
                  </p>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Sin reuniones eternas
                    </span>
                    <span className="flex items-center gap-1.5 text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Video en menos de 24 horas
                    </span>
                    <span className="flex items-center gap-1.5 text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> 100% gratuito y sin compromiso
                    </span>
                  </div>
                </div>

                {/* Columna Derecha: Tarjeta de Acciones */}
                <div className="lg:col-span-5 flex flex-col gap-3.5 bg-background/80 p-4 sm:p-6 md:p-8 rounded-xl border border-border/80">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Acción Principal</span>
                  
                  <Button size="lg" asChild className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5 sm:py-6 text-sm sm:text-base h-auto min-h-[48px] whitespace-normal sm:whitespace-nowrap text-center justify-center">
                    <a href={SITE_CONFIG.getWhatsAppUrl('¡Hola Juan! Me gustaría recibir la auditoría gratuita de 90 segundos para mi sitio web o negocio.')} target="_blank" rel="noopener noreferrer">
                      <Sparkles className="h-5 w-5 shrink-0" />
                      <span>Pedir Auditoría Gratis (90s)</span>
                    </a>
                  </Button>

                  <Button size="lg" variant="outline" asChild className="w-full border-border hover:bg-card text-foreground font-medium py-5 sm:py-6 text-sm sm:text-base h-auto min-h-[48px] whitespace-normal sm:whitespace-nowrap text-center justify-center">
                    <Link href="/contact" className="gap-2 flex items-center justify-center">
                      <span>Enviar Formulario Detallado</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </Button>

                  <div className="pt-2 text-center space-y-1">
                    <a
                      href={SITE_CONFIG.getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-emerald-400 transition-colors"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      <span>O chatea directo por WhatsApp &rarr;</span>
                    </a>
                    <p className="font-mono text-[0.75rem] text-muted-foreground">
                      Tiempo promedio de respuesta humana: menos de 2 horas
                    </p>
                  </div>
                </div>
              </div>

              {/* Barra Inferior con Datos de Confianza */}
              <div className="relative z-10 mt-8 sm:mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
                <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                  <span>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline break-all sm:break-normal">{SITE_CONFIG.email}</a></span>
                  <span>Ubicación: Colombia (Servicio Global)</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  Soporte técnico directo sin intermediarios
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
