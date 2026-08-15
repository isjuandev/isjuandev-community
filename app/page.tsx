import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/data/content'
import { platformIcons } from '@/components/platform-icons'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Juan Diego — Desarrollador FullStack | React & .NET',
  description: 'Desarrollador FullStack que construye aplicaciones web, APIs y productos digitales que llegan a producción. React, .NET y cloud.',
  openGraph: {
    type: 'website',
    title: 'Juan Diego — Desarrollador FullStack | React & .NET',
    description: 'Construyo productos digitales que llegan a producción y comparto el proceso en público.',
    url: '/',
  },
  twitter: {
    title: 'Juan Diego — Desarrollador FullStack | React & .NET',
    description: 'Construyo productos digitales que llegan a producción y comparto el proceso en público.',
  },
  alternates: {
    canonical: '/',
  },
}

const featured = projects.slice(0, 5)

const capabilities = [
  {
    index: '01',
    title: 'Interfaces web',
    description: 'Aplicaciones modernas, rápidas y mantenibles con React, Next.js y TypeScript.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    index: '02',
    title: 'APIs & backend',
    description: 'APIs REST, autenticación, microservicios y sistemas empresariales con .NET.',
    tags: ['.NET', 'Node.js', 'REST'],
  },
  {
    index: '03',
    title: 'Sistemas empresariales',
    description: 'CRM, plataformas de gestión, e-commerce y productos SaaS pensados para crecer.',
    tags: ['CRM', 'SaaS', 'E-commerce'],
  },
  {
    index: '04',
    title: 'Cloud & DevOps',
    description: 'Contenedores, CI/CD, infraestructura y despliegues que funcionan en producción.',
    tags: ['Docker', 'AWS', 'CI/CD'],
  },
]

const currentFocus = [
  { label: 'construyendo', value: 'Productos SaaS y automatizaciones para equipos reales.' },
  { label: 'experimentando con', value: 'IA · Agents · WebGL · Three.js' },
  { label: 'compartiendo en', value: 'Kick · TikTok · Instagram' },
  { label: 'buscando', value: 'Proyectos interesantes · colaboraciones · oportunidades' },
]

const communityPillars = [
  {
    index: '01',
    title: 'En vivo',
    description: 'Desarrollo proyectos, pruebo tecnologías y resuelvo problemas reales frente a la comunidad.',
  },
  {
    index: '02',
    title: 'Comparto',
    description: 'Convierto decisiones, errores y aprendizajes en tutoriales, consejos y contenido útil.',
  },
  {
    index: '03',
    title: 'Comunidad',
    description: 'Un espacio para desarrolladores que están construyendo sus propios proyectos sin hacerlo solos.',
  },
]

const platforms = [
  { key: 'kick', name: 'Kick', num: 'LIVE', label: 'desarrollo en vivo', href: 'https://kick.com/isjuandev' },
  { key: 'discord', name: 'Discord', num: 'JOIN', label: 'conversaciones y comunidad', href: '/contact' },
  { key: 'tiktok', name: 'TikTok', num: 'CLIPS', label: 'aprendizajes rápidos', href: 'https://tiktok.com/@isjuandev' },
  { key: 'instagram', name: 'Instagram', num: 'BUILD', label: 'proceso y proyectos', href: 'https://instagram.com/isjuandev' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="section hero-section" id="top" data-line="hero">
        <div className="container mx-auto">
          <div className="hero-layout">
            <div>
              <Reveal>
                <div className="section-label">hello.world</div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="hero-title">
                  <span className="block">Juan Diego<span className="text-primary">.</span></span>
                  <span className="hero-role">Desarrollador FullStack</span>
                  <span className="hero-stack">React <span className="text-primary">&amp;</span> .NET</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="hero-sub">
                  Construyo aplicaciones web, APIs y productos digitales que llegan a producción.
                  Comparto el proceso, los aprendizajes y los proyectos en comunidad.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex gap-[14px] mt-10 flex-wrap">
                  <Button size="lg" asChild>
                    <a href="#proyectos">Ver proyectos <ArrowUpRight /></a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/CV_JuanDiegoGarcia.pdf" download>
                      Descargar CV
                    </a>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="hero-links">
                  <a href="https://github.com/isjuandev" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://kick.com/isjuandev" target="_blank" rel="noopener noreferrer">Kick</a>
                  <a href="https://tiktok.com/@isjuandev" target="_blank" rel="noopener noreferrer">TikTok</a>
                  <a href="https://instagram.com/isjuandev" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </Reveal>

              <Reveal delay={340}>
                <a href="#comunidad" className="hero-build-link">
                  Construyo en público <ArrowUpRight />
                </a>
              </Reveal>
            </div>

            <Reveal delay={180}>
              <aside className="status-card" aria-label="Estado actual de Juan Diego">
                <div className="status-card-header">
                  <span className="dot-status live" />
                  <span>ONLINE</span>
                </div>
                <div className="status-card-file">// juandev.status</div>
                <dl className="status-list">
                  <div><dt>role:</dt><dd>FullStack Developer</dd></div>
                  <div><dt>location:</dt><dd>Colombia</dd></div>
                  <div><dt>focus:</dt><dd>React · .NET · Cloud</dd></div>
                  <div><dt>building:</dt><dd>SaaS · AI · Web</dd></div>
                  <div><dt>community:</dt><dd className="text-primary">ACTIVE</dd></div>
                </dl>
              </aside>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <div className="hero-meta">
              <div><b>8+</b>años construyendo software</div>
              <div><b>50+</b>proyectos en producción</div>
              <div><b>20+</b>tecnologías utilizadas</div>
              <div><b>∞</b>ideas por construir</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="section" id="proyectos" data-line="proyectos">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">projects.init</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Cosas que he construido<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead">
              Proyectos reales, con contexto técnico y una historia detrás de cada decisión.
            </p>
          </Reveal>

          <div className="bento">
            {featured.map((project, i) => {
              const projectHref = project.demo !== '#' ? project.demo : project.code
              const hasDemo = project.demo !== '#'

              return (
                <Reveal
                  key={project.id}
                  delay={i * 60}
                  className={cn(
                    i === 0 && 'c-a',
                    i === 1 && 'c-b',
                    i === 2 && 'c-c',
                    i === 3 && 'c-d',
                    i === 4 && 'c-e'
                  )}
                >
                  <article className="card-editorial project-card group">
                    <div>
                      <div className="project-card-topline">
                        <span className="project-index">0{i + 1}</span>
                        <span className="project-status">{project.status ?? 'En evolución'}</span>
                      </div>
                      {project.stream && <span className="card-tag">Hecho en Stream</span>}
                      <div className="card-mock" aria-hidden="true">
                        preview / captura del proyecto
                      </div>
                      <a
                        href={projectHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-title-link"
                      >
                        <h3 className="font-display font-bold text-[1.25rem] mb-2">
                          {project.title}
                        </h3>
                      </a>
                      <p className="project-subtitle">{project.subtitle ?? project.description}</p>
                      <p className="text-muted-foreground text-[0.92rem] leading-relaxed">
                        {project.description}
                      </p>
                      <div className="project-meta">
                        <span><b>Rol</b>{project.role ?? 'FullStack'}</span>
                        <span><b>Estado</b>{project.status ?? 'En evolución'}</span>
                      </div>
                    </div>
                    <div>
                      <div className="card-stack">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="project-actions">
                        <a href={projectHref} target="_blank" rel="noopener noreferrer">
                          {hasDemo ? 'Ver proyecto' : 'Ver código'} <ArrowUpRight />
                        </a>
                        {hasDemo && (
                          <a href={project.code} target="_blank" rel="noopener noreferrer">
                            Ver código <ArrowUpRight />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <div className="section-action">
            <Link href="/projects" className="text-primary font-mono text-[0.85rem] hover:underline underline-offset-4">
              Ver todos los proyectos <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="section" id="capacidades" data-line="capabilities">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">capabilities.init</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Lo que construyo<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead">
              Más que una lista de tecnologías: problemas que puedo convertir en software mantenible.
            </p>
          </Reveal>

          <div className="capabilities-grid">
            {capabilities.map((capability, i) => (
              <Reveal key={capability.index} delay={i * 60}>
                <article className="capability-card">
                  <span className="capability-index">{capability.index}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <div className="card-stack">
                    {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="section" id="actualmente" data-line="currently">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">currently.status</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Actualmente<span className="dot">.</span>
            </h2>
          </Reveal>

          <div className="current-panel">
            <Reveal delay={120}>
              <p className="current-intro">
                El portafolio está vivo. Esto es lo que ocupa mi tiempo, mi curiosidad y mis próximos commits.
              </p>
            </Reveal>
            <div className="current-list">
              {currentFocus.map((item, i) => (
                <Reveal key={item.label} delay={160 + i * 50}>
                  <div className="current-row">
                    <span className="current-label">{item.label}</span>
                    <span className="current-value">{item.value}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMUNIDAD */}
      <section className="section" id="comunidad" data-line="comunidad">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">comunidad.status</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Construyo en público<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead">
              No solo escribo código. Muestro cómo se construyen productos reales, con sus decisiones, errores y aprendizajes.
            </p>
          </Reveal>

          <div className="community-pillars">
            {communityPillars.map((pillar, i) => (
              <Reveal key={pillar.index} delay={i * 60}>
                <article className="community-pillar">
                  <span className="community-pillar-index">{pillar.index}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="community-actions">
              <Button size="lg" asChild>
                <a href="https://kick.com/isjuandev" target="_blank" rel="noopener noreferrer">
                  Ver streams <ArrowUpRight />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Conoce la comunidad</Link>
              </Button>
            </div>
          </Reveal>

          <div className="platforms">
            {platforms.map((platform, i) => (
              <Reveal key={platform.key} delay={220 + i * 40}>
                <a
                  href={platform.href}
                  target={platform.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="platform block hover:border-primary/50 transition-colors"
                >
                  <span className="icon">{platformIcons[platform.key]}</span>
                  <h3>{platform.name}</h3>
                  <div className="num">{platform.num}</div>
                  <div className="num-label">{platform.label}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="section" id="sobre-mi" data-line="about">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">about.me</div>
          </Reveal>
          <div className="about-home about-home-teaser">
            <Reveal delay={80}>
              <div className="about-home-copy">
                <h2 className="section-title">
                  Más que código<span className="dot">.</span>
                </h2>
                <p>
                  Desarrollador FullStack enfocado en convertir problemas reales en productos digitales con React, .NET y cloud.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-mono text-[0.85rem] hover:underline underline-offset-4">
                  Conoce mi trayectoria <ArrowUpRight />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section contact-section" id="contacto" data-line="contact">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">contact.init</div>
          </Reveal>
          <Reveal delay={60}>
            <div className="contact-panel">
              <div>
                <h2 className="section-title">
                  ¿Construimos algo<span className="dot">?</span>
                </h2>
                <p className="section-lead">
                  Si tienes un producto, una idea o un problema interesante, hablemos.
                </p>
              </div>
              <div className="contact-actions">
                <Button size="lg" asChild>
                  <Link href="/contact">Contactarme <ArrowUpRight /></Link>
                </Button>
                <a href="/CV_JuanDiegoGarcia.pdf" download className="text-primary font-mono text-[0.85rem] hover:underline underline-offset-4">
                  Descargar CV
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
