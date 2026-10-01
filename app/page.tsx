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
      <section className="section hero-section" id="top" data-line="hero">
        <div className="container mx-auto">
          <div className="hero-layout">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label">solutions.init // isjuandev</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    2 CUPOS DISPONIBLES ESTE MES
                  </span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="hero-title">
                  <span className="block font-bold">Webs que Convierten</span>
                  <span className="hero-role text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary">
                    &amp; Automatizaciones con IA
                  </span>
                  <span className="hero-stack font-mono text-muted-foreground text-xl md:text-2xl mt-1 block">
                    Menos tareas manuales <span className="text-primary font-bold">·</span> Más clientes que pagan
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="hero-sub text-muted-foreground text-lg leading-relaxed max-w-xl">
                  Ayudo a empresas, clínicas y negocios de servicios a captar más prospectos, 
                  responder consultas en menos de 60 segundos y automatizar sus operaciones repetitivas 
                  con webs ultrarrápidas y agentes de WhatsApp inteligentes.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex gap-[14px] mt-8 flex-wrap items-center">
                  <Button size="lg" asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-lg shadow-primary/20">
                    <a href="#auditoria">
                      Solicitar Auditoría Gratis <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-border hover:bg-card/80">
                    <a href="#servicios">
                      Ver Soluciones &amp; Precios
                    </a>
                  </Button>
                  <a
                    href={SITE_CONFIG.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors ml-1"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-400" />
                    O chatea directo por WhatsApp &rarr;
                  </a>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex items-center gap-4 mt-8 text-xs font-mono text-muted-foreground/80">
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

            {/* STATUS ASIDE */}
            <Reveal delay={180}>
              <aside className="status-card" aria-label="Disponibilidad y stack de IsJuanDev">
                <div className="status-card-header">
                  <span className="dot-status live" />
                  <span>ONLINE &amp; ACCEPTING CLIENTS</span>
                </div>
                <div className="status-card-file">// juandev.agency_engine</div>
                <dl className="status-list text-sm">
                  <div><dt>role:</dt><dd>Software &amp; AI Architect</dd></div>
                  <div><dt>specialty:</dt><dd>Webs de Conversión · IA</dd></div>
                  <div><dt>turnaround:</dt><dd className="text-secondary font-semibold">3 a 7 días hábiles</dd></div>
                  <div><dt>lead_response:</dt><dd className="text-primary font-semibold">&lt; 60s con IA</dd></div>
                  <div><dt>stack:</dt><dd>Next.js · n8n · WhatsApp API</dd></div>
                  <div><dt>guarantee:</dt><dd className="text-primary">100% Código Propio</dd></div>
                </dl>
              </aside>
            </Reveal>
          </div>

          {/* HERO METRICS */}
          <Reveal delay={320}>
            <div className="hero-meta grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border/50">
              <div>
                <b className="text-3xl text-primary font-display font-bold">8+</b>
                <span className="block text-sm text-muted-foreground mt-1">Años de experiencia en ingeniería</span>
              </div>
              <div>
                <b className="text-3xl text-secondary font-display font-bold">&lt; 60s</b>
                <span className="block text-sm text-muted-foreground mt-1">Tiempo de respuesta automática a leads</span>
              </div>
              <div>
                <b className="text-3xl text-primary font-display font-bold">3 a 7</b>
                <span className="block text-sm text-muted-foreground mt-1">Días hábiles para entrega llave en mano</span>
              </div>
              <div>
                <b className="text-3xl text-secondary font-display font-bold">0</b>
                <span className="block text-sm text-muted-foreground mt-1">Leads perdidos por falta de atención</span>
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
            <div className="section-label">services.catalog // paquetes cerrados</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Soluciones diseñadas para aumentar tus ventas<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground">
              Sin semanas de reuniones interminables ni presupuestos inflados. 
              Paquetes claros, de entrega rápida y orientados a generar ingresos desde el primer día.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-12 items-stretch">
            {businessSolutions.map((solution, i) => (
              <Reveal key={solution.index} delay={180 + i * 80} className="flex">
                <article className={cn(
                  "card-editorial flex flex-col justify-between w-full relative p-7 rounded-xl border transition-all",
                  solution.popular 
                    ? "border-primary/80 bg-card shadow-lg shadow-primary/5 ring-1 ring-primary/30" 
                    : "border-border bg-card/60 hover:border-border/80"
                )}>
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-primary text-primary-foreground shadow">
                      {solution.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-muted-foreground">PLAN {solution.index}</span>
                      {!solution.popular && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {solution.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-xs font-mono text-primary mb-4">
                      {solution.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-border/60 mb-6">
                      <p className="text-xs font-mono text-foreground font-semibold uppercase tracking-wider">
                        Qué incluye:
                      </p>
                      {solution.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-mono text-muted-foreground">Inversión:</span>
                      <span className="font-display font-bold text-2xl text-foreground">
                        {solution.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-secondary mb-5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{solution.timeframe}</span>
                    </div>

                    <Button 
                      className={cn(
                        "w-full gap-2 font-medium",
                        solution.popular ? "bg-primary text-primary-foreground" : "variant-outline border-border"
                      )}
                      asChild
                    >
                      <a 
                        href={SITE_CONFIG.getWhatsAppUrl(`¡Hola Juan! Me interesa contratar o saber más sobre el plan: ${solution.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Elegir este Plan
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
