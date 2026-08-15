'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { SocialButton } from '@/components/social-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Video,
  Rocket,
  Heart,
  Users,
  FileText,
  Code2,
  Target,
  Github
} from 'lucide-react'

export default function AboutPage() {
  const [statsVisible, setStatsVisible] = useState(false)
  const [yearsExperience, setYearsExperience] = useState(0)
  const [projectsBuilt, setProjectsBuilt] = useState(0)
  const [technologiesUsed, setTechnologiesUsed] = useState(0)
  const [companiesWorked, setCompaniesWorked] = useState(0)

  // Animate stats on mount
  useEffect(() => {
    setStatsVisible(true)
  }, [])

  // Animate stats counting up
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-gradient" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Juan Diego García Castaño"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Juan Diego García Castaño
                </h1>
                <p className="text-xl text-primary mb-4">Desarrollador FullStack | React & .NET</p>
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
              </div>

              <div className="flex flex-wrap gap-3">
                <SocialButton platform="kick" href="https://kick.com/isjuandev" />
                <SocialButton platform="tiktok" href="https://tiktok.com/@isjuandev" />
                <SocialButton platform="instagram" href="https://instagram.com/isjuandev" />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center border-primary/30 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="pt-6">
                <Video className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-5xl sm:text-6xl font-display font-bold text-primary mb-2">
                  {yearsExperience}+
                </div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/30 bg-card/50 backdrop-blur hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
              <CardContent className="pt-6">
                <Rocket className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="text-5xl sm:text-6xl font-display font-bold text-secondary mb-2">
                  {projectsBuilt}+
                </div>
                <div className="text-sm text-muted-foreground">Proyectos Completados</div>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/30 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-5xl sm:text-6xl font-display font-bold text-primary mb-2">
                  {technologiesUsed}+
                </div>
                <div className="text-sm text-muted-foreground">Tecnologías Dominadas</div>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/30 bg-card/50 backdrop-blur hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
              <CardContent className="pt-6">
                <FileText className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="text-5xl sm:text-6xl font-display font-bold text-secondary mb-2">
                  {companiesWorked}
                </div>
                <div className="text-sm text-muted-foreground">Empresas (Actual)</div>
              </CardContent>
            </Card>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Stack Tecnológico</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Frontend */}
              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-primary mb-3 text-center">Frontend</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Angular', 'Vite'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Backend */}
              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-primary mb-3 text-center">Backend</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['.NET Core', 'Node.js', 'Express', 'NestJS', 'APIs REST'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bases de Datos */}
              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-primary mb-3 text-center">Bases de Datos</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['SQL Server', 'MongoDB', 'PostgreSQL'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* DevOps / Cloud */}
              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-primary mb-3 text-center">DevOps / Cloud</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['AWS', 'Docker', 'Azure DevOps', 'Git', 'CI/CD'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Terminal de Skills */}
          <div className="mt-16">
            <h3 className="font-display text-4xl sm:text-5xl font-bold mb-8 text-center text-balance">
              Skills<span className="text-primary">.</span>
            </h3>
            <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/50 backdrop-blur overflow-hidden shadow-xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-sm font-mono text-muted-foreground">skills — zsh</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed space-y-2">
                <div className="flex gap-2">
                  <span className="text-primary">$</span>
                  <span>pnpm isjuandev@skills init</span>
                </div>
                <div className="text-muted-foreground">✔ Cargando perfil de Juan Diego…</div>
                <div className="text-muted-foreground">✔ 8+ años de experiencia FullStack</div>
                <div className="text-muted-foreground">✔ 20+ tecnologías dominadas</div>
                <div className="text-muted-foreground">✔ React &amp; .NET · microservicios · AWS</div>
                <div className="text-muted-foreground">✔ Streams en vivo: construyo en público</div>
                <div className="text-primary font-bold">✨ Pkg ready in 0ms — sin humo, con código.</div>
              </div>
            </div>
          </div>

          {/* Experiencia Profesional */}
          <div className="mt-16">
            <h3 className="font-display text-4xl sm:text-5xl font-bold mb-8 text-center text-balance">
              Experiencia<span className="text-primary">.</span>
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">

              {/* CODERLAND */}
              <Card className="border-primary/30 bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">Desarrollador FullStack Senior</h4>
                      <p className="text-muted-foreground">CODERLAND</p>
                    </div>
                    <Badge variant="secondary">2025-2026</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Desarrollo de aplicaciones empresariales con .NET y React. Implementación de APIs REST, marketplaces,
                    integración de pasarelas de pago. Contenedorización con Docker y automatización CI/CD con Azure DevOps.
                  </p>
                </CardContent>
              </Card>

              {/* IMAGINAMOS */}
              <Card className="border-primary/30 bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">Desarrollador FullStack .NET Sr</h4>
                      <p className="text-muted-foreground">IMAGINAMOS</p>
                    </div>
                    <Badge variant="secondary">2022-2025</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Desarrollo de aplicaciones web con React y .NET Core. Arquitecturas escalables basadas en microservicios,
                    optimización de consultas SQL Server, reducción de tiempos de carga en 30%. Integración AWS.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', '.NET Core', 'SQL Server', 'AWS'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Freelance */}
              <Card className="border-primary/30 bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">Desarrollador Frontend & Backend</h4>
                      <p className="text-muted-foreground">Freelance</p>
                    </div>
                    <Badge variant="secondary">2016-Presente</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Desarrollo de interfaces modernas con React y Context API. Diseño de APIs REST/GraphQL con Node.js y .NET Core.
                    Desarrollo móvil con Flutter. Optimización con code-splitting y lazy loading.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mi Trayectoria - Timeline */}
          <div className="mt-16">
            <h3 className="font-display text-4xl sm:text-5xl font-bold mb-8 text-center text-balance">
              Trayectoria<span className="text-primary">.</span>
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Target className="h-6 w-6" />
                  </div>
                  <div className="flex-1 w-px bg-gradient-to-b from-primary to-secondary mt-2" style={{ minHeight: '60px' }} />
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="text-xl font-semibold mb-2">2016 - Primeros pasos como desarrollador</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Comencé como desarrollador freelance, construyendo sitios web y aprendiendo las bases del desarrollo full-stack.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1 w-px bg-gradient-to-b from-secondary to-primary mt-2" style={{ minHeight: '60px' }} />
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="text-xl font-semibold mb-2">2022 - Primeros pasos en una empresa de desarrollo</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Me uní a IMAGINAMOS como desarrollador .NET <span className="font-bold">JR</span> durante 6 meses, después de eso me ascendieron a desarrollador .NET <span className="font-bold">SENIOR</span>, especializándome en arquitecturas de microservicios y desarrollo empresarial con React y .NET Core.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div className="flex-1 w-px bg-gradient-to-b from-primary to-secondary mt-2" style={{ minHeight: '60px' }} />
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="text-xl font-semibold mb-2">2025 - Desarrollador Senior</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ahora como desarrollador senior en CODERLAND, <span className="font-bold">LIDERÉ</span> y participé en proyectos de e-commerce, implementando CI/CD con Docker y Azure DevOps.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Heart className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">Presente - Compartiendo Conocimiento</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Desarrollo proyectos empresariales mientras construyo una comunidad, comparto experiencias en streaming y ayudo a otros desarrolladores a crecer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
