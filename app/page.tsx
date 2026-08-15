import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Video, Users, ChevronDown, Radio, Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data/content'
import { Reveal } from '@/components/motion/reveal'

const featured = projects.filter((p) => p.demo !== '#').slice(0, 4)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="font-display font-bold leading-none text-balance text-[clamp(3.25rem,12vw,4.5rem)] sm:text-8xl md:text-9xl">
              <span className="block">Construyo</span>
              <span className="block text-primary">en público</span>
              <span className="block text-muted-foreground">
                <span className="animate-blink text-primary">▌</span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance font-mono">
              Senior FullStack · React &amp; .NET · Streams en vivo
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://kick.com/isjuandev" target="_blank" rel="noopener noreferrer">
                  <Video className="h-5 w-5" />
                  Ver Streams
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="/contact">
                  <Users className="h-5 w-5" />
                  Únete a la Comunidad
                </Link>
              </Button>
            </div>

            <div className="flex justify-center pt-8">
              <Link href="#proyectos" className="animate-bounce" aria-label="Ir a proyectos">
                <ChevronDown className="h-8 w-8 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Bento */}
      <section id="proyectos" className="relative py-24 px-4">
        <div className="container mx-auto">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-balance">
              Proyectos<span className="text-primary">.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-6">
            {featured.map((project, i) => (
              <Link
                key={project.id}
                href={project.demo !== '#' ? project.demo : project.code}
                target={project.demo !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary transition-all flex flex-col justify-between ${
                  i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    {project.stream && <Badge variant="secondary" className="text-xs">Hecho en Stream</Badge>}
                    <Badge variant="outline" className="text-xs">{project.category}</Badge>
                  </div>
                  <h3 className={`font-display font-bold mb-2 ${i === 0 ? 'text-3xl' : 'text-2xl'}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                    {project.demo !== '#' ? <ExternalLink className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                    <span className="text-sm font-medium">Ver proyecto</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </Reveal>
          <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Button variant="outline" className="gap-2 bg-transparent" asChild>
              <Link href="/projects">Ver todos los proyectos</Link>
            </Button>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Live Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <Reveal>
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            <span className="text-sm font-mono text-muted-foreground">EN VIVO</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Construyendo en vivo<span className="text-primary">.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Streams donde construyo proyectos reales, comparto consejos y respondo preguntas de la comunidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://kick.com/isjuandev" target="_blank" rel="noopener noreferrer">
                <Radio className="h-5 w-5" />
                Ver en Kick
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <Link href="/contact">
                <Users className="h-5 w-5" />
                Únete a la Comunidad
              </Link>
            </Button>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}