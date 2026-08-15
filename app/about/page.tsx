'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { SocialButton } from '@/components/social-button'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/motion/reveal'
import { SkillsTerminal } from '@/components/motion/skills-terminal'
import { Rocket, Heart, Code2, Target } from 'lucide-react'

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
      animateStat(20, setTechnologiesUsed),
      animateStat(3, setCompaniesWorked)
    ]

    return () => timers.forEach(clearInterval)
  }, [statsVisible])

  const stack = [
    { title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Angular', 'Vite'] },
    { title: 'Backend', items: ['.NET Core', 'Node.js', 'Express', 'NestJS', 'APIs REST'] },
    { title: 'Bases de Datos', items: ['SQL Server', 'MongoDB', 'PostgreSQL'] },
    { title: 'DevOps / Cloud', items: ['AWS', 'Docker', 'Azure DevOps', 'Git', 'CI/CD'] },
  ]

  const experience = [
    {
      role: 'Desarrollador FullStack Senior',
      company: 'CODERLAND',
      period: '2025-2026',
      text: 'Desarrollo de aplicaciones empresariales con .NET y React. Implementación de APIs REST, marketplaces, integración de pasarelas de pago. Contenedorización con Docker y automatización CI/CD con Azure DevOps.',
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
      period: '2016-Presente',
      text: 'Desarrollo de interfaces modernas con React y Context API. Diseño de APIs REST/GraphQL con Node.js y .NET Core. Desarrollo móvil con Flutter. Optimización con code-splitting y lazy loading.',
    },
  ]

  const timeline = [
    {
      icon: <Target className="h-6 w-6" />,
      title: '2016 - Primeros pasos como desarrollador',
      text: 'Comencé como desarrollador freelance, construyendo sitios web y aprendiendo las bases del desarrollo full-stack.',
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: '2022 - Primeros pasos en una empresa de desarrollo',
      text: 'Me uní a IMAGINAMOS como desarrollador .NET JR durante 6 meses, después de eso me ascendieron a desarrollador .NET SENIOR, especializándome en arquitecturas de microservicios y desarrollo empresarial con React y .NET Core.',
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: '2025 - Desarrollador Senior',
      text: 'Ahora como desarrollador senior en CODERLAND, LIDERÉ y participé en proyectos de e-commerce, implementando CI/CD con Docker y Azure DevOps.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Presente - Compartiendo Conocimiento',
      text: 'Desarrollo proyectos empresariales mientras construyo una comunidad, comparto experiencias en streaming y ayudo a otros desarrolladores a crecer.',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Sobre mí */}
      <section className="section" id="sobre-mi" data-line="about">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">sobre.mi</div>
          </Reveal>
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-2 ring-primary/60">
                  <Image
                    src="/profile.jpg"
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
                  Desarrollador FullStack | React &amp; .NET
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ingeniero de software especializado en desarrollo full-stack con experiencia en la creación de soluciones web modernas y escalables.
                  </p>
                  <p>
                    Me apasiona construir aplicaciones que combinan interfaces elegantes con arquitecturas robustas, utilizando React, .NET y servicios cloud (AWS). Experiencia en microservicios, APIs REST y optimización de rendimiento.
                  </p>
                  <p>
                    Actualmente trabajo en proyectos empresariales mientras comparto conocimiento con la comunidad de desarrolladores a través de streaming y contenido educativo.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <SocialButton platform="kick" href="https://kick.com/isjuandev" />
                  <SocialButton platform="tiktok" href="https://tiktok.com/@isjuandev" />
                  <SocialButton platform="instagram" href="https://instagram.com/isjuandev" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal delay={120}>
            <div className="hero-meta justify-center md:justify-start mt-16">
              <div><b>{yearsExperience}+</b>años de experiencia</div>
              <div><b>{projectsBuilt}+</b>proyectos completados</div>
              <div><b>{technologiesUsed}+</b>tecnologías dominadas</div>
              <div><b>{companiesWorked}</b>empresas</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section className="section" id="stack" data-line="stack">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">stack.init</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Lo que uso a diario<span className="dot">.</span>
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

      {/* Skills terminal */}
      <section className="section" id="skills" data-line="skills">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">stack.init</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Skills<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <SkillsTerminal />
          </Reveal>
        </div>
      </section>

      {/* Experiencia */}
      <section className="section" id="experiencia" data-line="experiencia">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">experiencia.log</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Experiencia<span className="dot">.</span>
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
            <div className="section-label">trayectoria.log</div>
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