'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { SocialButton } from '@/components/social-button'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/motion/reveal'
import { Rocket, Heart, Code2, Target, ArrowUpRight, Zap } from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/config'

export default function AboutPage() {
  const [statsVisible, setStatsVisible] = useState(false)
  const [yearsExperience, setYearsExperience] = useState(0)
  const [projectsBuilt, setProjectsBuilt] = useState(0)
  const [technologiesUsed, setTechnologiesUsed] = useState(0)
  const [companiesWorked, setCompaniesWorked] = useState(0)

  useEffect(() => {
    setStatsVisible(true)
  }, [])

  useEffect(() => {
    if (!statsVisible) return

    const animateStat = (target: number, setter: (val: number) => void) => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, 30)
      return timer
    }

    const timers = [
      animateStat(8, setYearsExperience),
      animateStat(50, setProjectsBuilt),
      animateStat(25, setTechnologiesUsed),
      animateStat(2, setCompaniesWorked)
    ]

    return () => timers.forEach(clearInterval)
  }, [statsVisible])

  const stack = [
    { title: 'Automatizaciones & IA', items: ['n8n', 'WhatsApp API', 'DeepSeek', 'OpenAI', 'Browserless', 'Notion API'] },
    { title: 'Frontend & Conversión', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite'] },
    { title: 'Backend & APIs', items: ['.NET Core', 'Node.js', 'Express', 'NestJS', 'APIs REST', 'Microservicios'] },
    { title: 'Bases de Datos & Cloud', items: ['PostgreSQL', 'Supabase', 'SQL Server', 'Docker', 'AWS', 'CI/CD'] },
  ]

  const experience = [
    {
      role: 'Consultor de Automatización IA & Desarrollador Web',
      company: 'IsJuanDev / NexoBite',
      period: '2024-Presente',
      text: 'Diseño e implementación de ecosistemas web de alta conversión y flujos automatizados con n8n e IA. Creación de agentes de WhatsApp para atención y agendamiento 24/7, sistemas de pago en línea y optimización operativa para negocios.',
      tags: ['n8n', 'Next.js', 'WhatsApp API', 'DeepSeek', 'Supabase'],
    },
    {
      role: 'Desarrollador FullStack Senior',
      company: 'CODERLAND',
      period: '2025-2026',
      text: 'Desarrollo de aplicaciones empresariales con .NET y React. Implementación de APIs REST, marketplaces, integración de pasarelas de pago. Contenedorización con Docker y automatización CI/CD con Azure DevOps.',
      tags: ['.NET', 'React', 'Docker', 'CI/CD', 'Azure DevOps'],
    },
    {
      role: 'Desarrollador FullStack .NET Sr',
      company: 'IMAGINAMOS',
      period: '2022-2025',
      text: 'Desarrollo de aplicaciones web con React y .NET Core. Arquitecturas escalables basadas en microservicios, optimización de consultas SQL Server, reducción de tiempos de carga en 30%. Integración AWS.',
      tags: ['React', 'TypeScript', '.NET Core', 'SQL Server', 'AWS'],
    },
    {
      role: 'Desarrollador Frontend & Backend',
      company: 'Freelance',
      period: '2016-2022',
      text: 'Desarrollo de interfaces modernas con React y Context API. Diseño de APIs REST/GraphQL con Node.js y .NET Core. Integraciones de pago y optimización de conversión web.',
      tags: ['React', 'Node.js', 'APIs REST', 'JavaScript'],
    },
  ]

  const timeline = [
    {
      icon: <Target className="h-6 w-6" />,
      title: '2016 - Primeros pasos en la industria',
      text: 'Comencé como desarrollador freelance, construyendo sitios web comerciales y aprendiendo las bases de la arquitectura de software.',
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: '2022 - Ingeniería Empresarial y Microservicios',
      text: 'Me uní a IMAGINAMOS, donde fui promovido a desarrollador .NET SENIOR, especializándome en arquitecturas de microservicios, alta concurrencia y rendimiento empresarial.',
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: '2025 - Liderazgo Técnico y E-commerce',
      text: 'En CODERLAND lideré y participé en plataformas de e-commerce complejas con .NET y React, automatizando despliegues continuos con Docker y Azure DevOps.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Presente - Consultoría de Automatizaciones IA y Conversión Web',
      text: 'Combino 8+ años de ingeniería senior con Inteligencia Artificial práctica (n8n, visión multimodal, WhatsApp) para construir activos digitales que generan ventas y ahorran horas de trabajo a empresas reales.',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Sobre mí */}
      <section className="section" id="sobre-mi" data-line="about">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">Perfil Profesional</div>
          </Reveal>
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-2 ring-primary/60">
                  <Image
                    src="/profile.png"
                    alt="Juan Diego García Castaño"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="space-y-6">
                <h1 className="font-display font-bold text-5xl sm:text-6xl leading-none">
                  Juan Diego<span className="text-primary">.</span>
                </h1>
                <p className="text-xl text-primary font-mono">
                  Ingeniero Senior &amp; Consultor de Automatizaciones con IA
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Llevo más de 8 años en la industria del software, pasando de desarrollar plataformas empresariales en corporaciones multinacionales a construir activos digitales que generan ingresos medibles para negocios.
                  </p>
                  <p>
                    Mi enfoque no es venderte tecnología por vender: es identificar dónde está perdiendo dinero tu negocio (visitas que no compran, chats desatendidos, tareas repetitivas de horas) y solucionarlo con webs de alta conversión y flujos inteligentes en WhatsApp.
                  </p>
                  <p>
                    Trabajas directamente conmigo: un Ingeniero Senior que diseña la arquitectura, escribe el código y asegura que todo funcione en producción sin intermediarios.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild className="gap-2 bg-primary text-primary-foreground font-semibold">
                    <a href={SITE_CONFIG.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-4 w-4" />
                      Hablemos de tu Proyecto
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/CV_JuanDiegoGarcia.pdf" download className="gap-2">
                      Descargar CV Técnico <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal delay={120}>
            <div className="hero-meta justify-center md:justify-start mt-16">
              <div><b>{yearsExperience}+</b>años de experiencia</div>
              <div><b>{projectsBuilt}+</b>proyectos en producción</div>
              <div><b>{technologiesUsed}+</b>tecnologías utilizadas</div>
              <div><b>{companiesWorked}</b>empresas</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section className="section" id="stack" data-line="stack">
        <div className="container mx-auto">
          <Reveal delay={60}>
            <h2 className="section-title">
              Tecnologías &amp; Herramientas<span className="dot">.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-12">
              {stack.map((group) => (
                <div key={group.title} className="card-editorial">
                  <h3 className="font-display font-bold text-[1.05rem] text-primary mb-4">{group.title}</h3>
                  <div className="card-stack" style={{ marginTop: 0 }}>
                    {group.items.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experiencia */}
      <section className="section" id="experiencia" data-line="experiencia">
        <div className="container mx-auto">
          <Reveal delay={60}>
            <h2 className="section-title">
              Trayectoria Laboral<span className="dot">.</span>
            </h2>
          </Reveal>

          <div className="max-w-4xl space-y-6 mt-12">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card-editorial">
                  <div className="flex justify-between items-start mb-2 gap-4 flex-wrap">
                    <div>
                      <h3 className="font-display font-bold text-xl text-primary">{job.role}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <Badge variant="secondary">{job.period}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{job.text}</p>
                  {job.tags && (
                    <div className="card-stack">
                      {job.tags.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section className="section" id="trayectoria" data-line="trayectoria">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">Historia &amp; Evolución</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Trayectoria<span className="dot">.</span>
            </h2>
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-6 mt-12">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-card">
                      {item.icon}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="flex-1 w-[2px] bg-border mt-3" style={{ minHeight: '60px' }} />
                    )}
                  </div>
                  <div className={i < timeline.length - 1 ? 'flex-1 pb-8' : 'flex-1'}>
                    <h4 className="font-display font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
