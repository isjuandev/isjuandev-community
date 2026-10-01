import Link from 'next/link'
import type { Metadata } from 'next'
import { 
  ArrowUpRight, 
  MessageCircle, 
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
  BookOpen,
  Code2,
  Tv,
  FolderGit2
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { businessSolutions, faqs } from '@/lib/data/content'
import { Reveal } from '@/components/motion/reveal'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Juan Diego (IsJuanDev) — Webs de Alta Conversión & Automatizaciones con IA',
  description: 'Ayudo a empresas y negocios a captar más clientes, responder en menos de 60 segundos y automatizar sus operaciones repetitivas con software moderno.',
  openGraph: {
    type: 'website',
    title: 'Juan Diego (IsJuanDev) — Webs de Alta Conversión & Automatizaciones con IA',
    description: 'Desarrollo web de alta conversión y automatizaciones con IA para negocios que buscan escalar sin perder ventas.',
    url: '/',
  },
  twitter: {
    title: 'Juan Diego (IsJuanDev) — Webs de Alta Conversión & Automatizaciones con IA',
    description: 'Desarrollo web de alta conversión y automatizaciones con IA para negocios que buscan escalar sin perder ventas.',
  },
  alternates: {
    canonical: '/',
  },
}

const workSteps = [
  {
    step: '01',
    title: 'Diagnóstico & Estrategia (15 min)',
    description: 'Analizamos tu presencia web actual y tu flujo de clientes. Identificamos con exactitud dónde estás perdiendo ventas y definimos la solución con el retorno de inversión más rápido.',
    badge: 'Día 1'
  },
  {
    step: '02',
    title: 'Sprint de Construcción (3 a 5 días)',
    description: 'Diseño, desarrollo e integración de tu web o flujos de IA con n8n y WhatsApp. Sin retrasos ni reuniones innecesarias; tú sigues operando tu negocio normalmente.',
    badge: 'Días 2-5'
  },
  {
    step: '03',
    title: 'Pruebas, Lanzamiento & Entrega',
    description: 'Despliegue en producción con dominio y SSL. Pruebas reales de captación y compra en caliente, más una capacitación en video para ti o tu equipo.',
    badge: 'Días 6-7'
  }
]

const differentials = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Trato Directo con el Ingeniero',
    description: 'Sin intermediarios, gerentes de cuenta ni comerciales. Trabajas y hablas directamente con un Ingeniero Senior con 8+ años de experiencia técnica.'
  },
  {
    icon: <Clock className="h-6 w-6 text-secondary" />,
    title: 'Velocidad de Ejecución Implacable',
    description: 'Mientras una agencia tradicional tarda semanas en cotizar, nosotros entregamos tu solución en sprints de 3 a 7 días hábiles lista para producir.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: '100% Código Propio y Tuyo',
    description: 'Sin ataduras a mensualidades abusivas ni plataformas rígidas. La infraestructura, los flujos y el código quedan bajo tu total propiedad y control.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-secondary" />,
    title: 'Obsesión por la Conversión',
    description: 'No hacemos páginas para adornar. Cada botón, texto y automatización está diseñado con psicología de ventas para que el visitante tome acción.'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/25">
      <Navigation />

      {/* HERO SECTION */}
      <section className="section hero-section relative overflow-hidden" id="top" data-line="hero">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* LEFT COLUMN: HIGH-CONVERTING COPY */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Soluciones Digitales de Alta Conversión</span>
                  <span className="text-muted-foreground/60">•</span>
                  <span className="text-foreground font-semibold">2 cupos para este mes</span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.12] mb-6">
                  Webs que Venden <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary">
                    + WhatsApp con IA.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
                  Diseño páginas web ultrarrápidas y configuro agentes inteligentes de WhatsApp 
                  que atienden consultas, cotizan y agendan clientes en segundos.
                  <span className="text-foreground font-medium block mt-1.5">
                    Menos tareas repetitivas. Más prospectos calificados listos para pagar.
                  </span>
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
                  <Button size="lg" asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-6 text-base shadow-lg shadow-primary/25 rounded-xl">
                    <a href="#auditoria">
                      <Sparkles className="h-4 w-4" />
                      Solicitar Auditoría Gratis
                      <ArrowUpRight className="h-4 w-4 ml-0.5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-border hover:bg-card/90 px-6 py-6 text-base rounded-xl">
                    <a href="#servicios">
                      Ver Soluciones &amp; Precios
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-muted-foreground">
                  <a
                    href={SITE_CONFIG.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    O escríbeme directo a WhatsApp &rarr;
                  </a>
                  <span className="hidden sm:inline text-border">|</span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Sin reuniones eternas
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Entrega en 3 a 7 días
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Esquema 50/50
                  </span>
                </div>
              </Reveal>
            </div>

            {/* RIGHT COLUMN: LIVE CONVERSION ENGINE SHOWCASE */}
            <div className="lg:col-span-5">
              <Reveal delay={180}>
                <div className="relative">
                  {/* Subtle ambient glow behind card */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-cyan-500/20 to-secondary/20 blur-xl opacity-60" />

                  <div className="relative rounded-2xl border border-border/80 bg-card/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
                    {/* Mockup Header */}
                    <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-mono text-[11px] text-muted-foreground/70">
                          sistema-de-ventas.live
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        EN VIVO 24/7
                      </div>
                    </div>

                    {/* Quick Metric Pills */}
                    <div className="grid grid-cols-2 gap-2.5 mb-4">
                      <div className="rounded-xl bg-background/60 border border-border/60 p-2.5">
                        <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <Zap className="h-3 w-3 text-amber-400" /> Rendimiento Web
                        </div>
                        <div className="text-base font-bold text-foreground mt-0.5">
                          0.8s <span className="text-[10px] font-normal text-emerald-400">· 99/100 Vitals</span>
                        </div>
                      </div>
                      <div className="rounded-xl bg-background/60 border border-border/60 p-2.5">
                        <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3 text-primary" /> Respuesta a Leads
                        </div>
                        <div className="text-base font-bold text-foreground mt-0.5">
                          &lt; 30s <span className="text-[10px] font-normal text-primary">· Agente IA</span>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp IA Live Simulation */}
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-emerald-500/10 pb-2">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                            WA
                          </div>
                          <span>Agente IA · Atención Inmediata</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400">En línea</span>
                      </div>

                      {/* Chat Bubble: Prospect */}
                      <div className="flex flex-col items-start max-w-[88%]">
                        <div className="rounded-2xl rounded-tl-sm bg-muted/70 text-foreground px-3 py-2 text-xs">
                          Hola, vi sus soluciones y quiero automatizar la atención de citas en mi negocio.
                        </div>
                        <span className="text-[9px] text-muted-foreground mt-1 ml-1">10:42 AM</span>
                      </div>

                      {/* Chat Bubble: AI Agent */}
                      <div className="flex flex-col items-end max-w-[92%] ml-auto">
                        <div className="rounded-2xl rounded-tr-sm bg-emerald-600/25 border border-emerald-500/30 text-emerald-100 px-3 py-2 text-xs">
                          ¡Hola! 👋 Claro que sí. Tenemos el sistema de agenda y cotización automática listo. ¿Prefieres cita mañana a las 10:00 AM o a las 3:00 PM?
                        </div>
                        <span className="text-[9px] text-emerald-400/90 mt-1 mr-1 flex items-center gap-1">
                          <Zap className="h-2.5 w-2.5" /> Respondido en 8s · Agente IA
                        </span>
                      </div>

                      {/* Outcome pill */}
                      <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/25 py-2 px-3 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                          <span>Cita agendada · Notificado al dueño</span>
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground">0 pérdidas</span>
                      </div>
                    </div>

                    {/* Trust badges footer */}
                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-border/40 text-[11px] text-muted-foreground font-mono">
                      <span>⚡ 3 a 7 días</span>
                      <span>•</span>
                      <span>🛡️ 100% Código Propio</span>
                      <span>•</span>
                      <span>🤝 Sin ataduras</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* HERO METRICS CARDS */}
          <Reveal delay={300}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border/50">
              <div className="rounded-2xl bg-card/40 backdrop-blur-sm border border-border/70 p-5 hover:border-primary/40 transition-colors">
                <div className="text-3xl lg:text-4xl text-primary font-display font-bold">8+</div>
                <div className="text-sm font-semibold text-foreground mt-1">Años de Trayectoria</div>
                <div className="text-xs text-muted-foreground mt-0.5">Ingeniería de software y arquitectura</div>
              </div>
              <div className="rounded-2xl bg-card/40 backdrop-blur-sm border border-border/70 p-5 hover:border-secondary/40 transition-colors">
                <div className="text-3xl lg:text-4xl text-secondary font-display font-bold">&lt; 45s</div>
                <div className="text-sm font-semibold text-foreground mt-1">Respuesta Automática</div>
                <div className="text-xs text-muted-foreground mt-0.5">Atención 24/7 con Agente IA en WhatsApp</div>
              </div>
              <div className="rounded-2xl bg-card/40 backdrop-blur-sm border border-border/70 p-5 hover:border-primary/40 transition-colors">
                <div className="text-3xl lg:text-4xl text-primary font-display font-bold">3 a 7</div>
                <div className="text-sm font-semibold text-foreground mt-1">Días de Entrega</div>
                <div className="text-xs text-muted-foreground mt-0.5">Solución llave en mano lista para facturar</div>
              </div>
              <div className="rounded-2xl bg-card/40 backdrop-blur-sm border border-border/70 p-5 hover:border-secondary/40 transition-colors">
                <div className="text-3xl lg:text-4xl text-secondary font-display font-bold">0</div>
                <div className="text-sm font-semibold text-foreground mt-1">Leads Perdidos</div>
                <div className="text-xs text-muted-foreground mt-0.5">Respuesta inmediata a cada visitante</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AUDITORÍA WEB CON IA (LEAD MAGNET INTERACTIVO) */}
      <section className="section bg-card/40 border-y border-border" id="auditoria" data-line="auditoria">
        <div className="container mx-auto">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="section-label">audit.multimodal // herramienta propia</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                100% GRATIS
              </span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              ¿Tu web y tus redes están perdiendo clientes<span className="text-primary">?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              La mayoría de sitios fallan en lo básico: cargan lento en celulares, el botón de WhatsApp está oculto 
              o no tienen un llamado a la acción claro. Con nuestro motor multimodal con IA analizamos tu presencia 
              y te entregamos un diagnóstico con video de 90 segundos antes de comprometerte a nada.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Reveal delay={180}>
              <div className="card-editorial h-full p-6 border-border/80 bg-background/60 hover:border-primary/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono font-bold mb-4">
                  01
                </div>
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Inspección Visual con IA
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tomamos capturas reales de tu sitio móvil y desktop. Analizamos la legibilidad, la jerarquía visual y la facilidad con la que un usuario encuentra tu canal de contacto.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="card-editorial h-full p-6 border-border/80 bg-background/60 hover:border-secondary/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-mono font-bold mb-4">
                  02
                </div>
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-secondary" />
                  Detección de Fugas de Venta
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Identificamos exactamente por qué las personas visitan tu perfil o página pero no te escriben: ausencia de botón directo a WhatsApp, formularios pesados o lentitud de carga.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="card-editorial h-full p-6 border-border/80 bg-background/60 hover:border-primary/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono font-bold mb-4">
                  03
                </div>
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  Video de 90s + Plan de Acción
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Te grabo un video personalizado mostrándote en pantalla los fallos detectados y el plan paso a paso para resolverlos en menos de 7 días.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={360}>
            <div className="mt-10 p-6 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-card to-background flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-display font-bold text-lg text-foreground">
                  Solicita la auditoría visual de tu negocio hoy mismo
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Envíame el enlace de tu web o red social por WhatsApp y te entrego el video en menos de 24 horas.
                </p>
              </div>
              <Button size="lg" asChild className="gap-2 whitespace-nowrap bg-primary text-primary-foreground font-semibold">
                <a href={SITE_CONFIG.getWhatsAppUrl('¡Hola Juan! Me gustaría recibir la auditoría gratuita de 90 segundos para mi sitio web o negocio.')} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Pedir Auditoría Gratuita
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUCIONES PRODUCTIZADAS */}
      <section className="section" id="servicios" data-line="servicios">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">services.solutions // lo que hacemos por ti</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Tres formas directas de conseguir más clientes<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              Precios transparentes, sin sorpresas y con entrega en días, no en meses. 
              Tú eliges qué necesita tu negocio para empezar a vender más hoy.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-12 items-stretch">
            {businessSolutions.map((solution, i) => (
              <Reveal key={solution.index} delay={180 + i * 80} className="flex">
                <article className={cn(
                  "card-editorial flex flex-col justify-between w-full p-7 sm:p-8 rounded-2xl border transition-all",
                  solution.popular 
                    ? "border-primary/80 bg-gradient-to-b from-card via-card to-background shadow-xl shadow-primary/5 ring-1 ring-primary/30" 
                    : "border-border/80 bg-card/60 hover:border-border"
                )}>
                  <div>
                    {/* Header de la tarjeta con badge integrado (sin desbordes) */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        // OPCIÓN {solution.index}
                      </span>
                      <span className={cn(
                        "text-xs font-mono font-medium px-3 py-1 rounded-full border",
                        solution.popular
                          ? "bg-primary/15 text-primary border-primary/30"
                          : "bg-muted text-muted-foreground border-border/60"
                      )}>
                        {solution.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl mb-2 text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-xs font-mono text-primary font-medium mb-3">
                      {solution.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    <div className="space-y-3 pt-5 border-t border-border/60 mb-6">
                      <p className="text-xs font-mono text-foreground font-semibold uppercase tracking-wider">
                        Lo que incluye:
                      </p>
                      {solution.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bloque de Inversión y Botón (sin solapamientos tipográficos) */}
                  <div className="pt-6 border-t border-border/60">
                    <div className="mb-5">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-display font-bold text-3xl text-foreground">
                          {solution.price}
                        </span>
                        {solution.priceNote && (
                          <span className="text-xs font-mono text-muted-foreground">
                            ({solution.priceNote})
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-secondary mt-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{solution.timeframe}</span>
                      </div>
                    </div>

                    <Button 
                      size="lg"
                      className={cn(
                        "w-full gap-2 font-semibold py-5 text-sm",
                        solution.popular 
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" 
                          : "variant-outline border-border hover:bg-card text-foreground"
                      )}
                      asChild
                    >
                      <a 
                        href={SITE_CONFIG.getWhatsAppUrl(`¡Hola Juan! Me interesa contratar o saber más sobre: ${solution.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {solution.ctaText || 'Elegir este Plan'}
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EL MÉTODO DE TRABAJO */}
      <section className="section bg-card/30" id="proceso" data-line="proceso">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">workflow.sprint // cómo trabajamos</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              De la idea a producción en 7 días<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              Un método ágil, transparente y enfocado en que empieces a ver resultados en la primera semana. 
              Sin fricción ni pérdida de tiempo.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {workSteps.map((step, i) => (
              <Reveal key={step.step} delay={180 + i * 80}>
                <div className="card-editorial p-7 h-full flex flex-col justify-between border-border/70 bg-background/80">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-primary">{step.step}</span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
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

      {/* POR QUÉ TRABAJAR CONMIGO */}
      <section className="section" id="diferenciales" data-line="diferenciales">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">why.isjuandev // la diferencia</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Ingeniería Senior sin la burocracia de una agencia<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              La alternativa a las agencias lentas y a las plantillas genéricas que no convierten.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {differentials.map((item, i) => (
              <Reveal key={item.title} delay={160 + i * 60}>
                <div className="card-editorial p-6 h-full flex flex-col justify-between border-border/60">
                  <div>
                    <div className="p-3 w-fit rounded-lg bg-muted/60 mb-4">
                      {item.icon}
                    </div>
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

      {/* ECOSISTEMA & CONSTRUYO EN PÚBLICO (AUTORIDAD TÉCNICA) */}
      <section className="section bg-card/30" id="ecosistema" data-line="ecosistema">
        <div className="container mx-auto">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="section-label">community.ecosystem // autoridad técnica</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                OPEN SOURCE &amp; STREAMING
              </span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
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
                    <span className="text-xs font-mono text-primary">// 01. BLOG</span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                      Aprendizajes
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Artículos sobre arquitectura de software, toma de decisiones técnicas, carrera y lecciones reales de desarrollo.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-primary">
                    <span>Leer artículos</span>
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
                    <span className="text-xs font-mono text-secondary">// 02. SNIPPETS</span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-2 text-foreground group-hover:text-secondary transition-colors">
                      Tips de Código
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Fragmentos interactivos, trucos de frontend, buenas prácticas y utilidades listas para copiar en tus proyectos.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-secondary">
                    <span>Explorar tips</span>
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
                    <span className="text-xs font-mono text-primary">// 03. EN VIVO</span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                      Comunidad &amp; Streams
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Sesiones de programación en vivo en Kick, clips educativos en TikTok e historias de proyectos en Instagram.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-primary">
                    <span>Ver comunidad</span>
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
                    <span className="text-xs font-mono text-secondary">// 04. GITHUB</span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-2 text-foreground group-hover:text-secondary transition-colors">
                      Archivo de Proyectos
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Catálogo con más de 50 repositorios públicos, pruebas técnicas, experimentos y productos de código abierto.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-secondary">
                    <span>Explorar archivo</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </article>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (FAQ) */}
      <section className="section bg-card/20" id="faq" data-line="faq">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <div className="section-label">faq.answers // resolvemos tus dudas</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title text-center md:text-left">
              Preguntas Frecuentes<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead text-muted-foreground mb-8">
              Todo lo que necesitas saber antes de dar el primer paso.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="card-editorial px-5 border border-border/70 rounded-lg bg-card/40"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-base py-4 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO & CIERRE COMERCIAL */}
      <section className="section contact-section" id="contacto" data-line="contact">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">contact.start // empecemos hoy</div>
          </Reveal>
          <Reveal delay={60}>
            <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-card via-card/95 to-background p-8 md:p-12 lg:p-14 shadow-2xl shadow-primary/5">
              {/* Resplandores sutiles de fondo */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

              <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Columna Izquierda: Mensaje y Propuesta */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    2 CUPOS DISPONIBLES ESTE MES
                  </div>

                  <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-[1.15]">
                    ¿Listo para escalar las ventas de tu negocio<span className="text-primary">?</span>
                  </h2>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                    Agenda un diagnóstico de 15 minutos o escríbeme directamente por WhatsApp. 
                    Te responderé con una propuesta transparente y el plan exacto para tu caso.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Sin reuniones de relleno
                    </span>
                    <span className="flex items-center gap-1.5 text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Entrega en 3 a 7 días
                    </span>
                    <span className="flex items-center gap-1.5 text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Esquema 50/50
                    </span>
                  </div>
                </div>

                {/* Columna Derecha: Tarjeta de Acciones */}
                <div className="lg:col-span-5 flex flex-col gap-3.5 bg-background/70 p-6 sm:p-8 rounded-xl border border-border/80 backdrop-blur-sm shadow-inner">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">// Acción Directa</span>
                  
                  <Button size="lg" asChild className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base shadow-lg shadow-primary/20">
                    <a href={SITE_CONFIG.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Chatear por WhatsApp Ahora
                    </a>
                  </Button>

                  <Button size="lg" variant="outline" asChild className="w-full border-border hover:bg-card text-foreground font-medium py-6">
                    <Link href="/contact" className="gap-2">
                      Enviar Formulario Detallado <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <p className="text-center font-mono text-[0.75rem] text-muted-foreground pt-1">
                    ⚡ Tiempo promedio de respuesta: &lt; 2 horas
                  </p>
                </div>
              </div>

              {/* Barra Inferior con Datos de Confianza */}
              <div className="relative z-10 mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
                <div className="flex flex-wrap items-center gap-6">
                  <span>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a></span>
                  <span>Ubicación: Colombia (Servicio Global)</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
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
