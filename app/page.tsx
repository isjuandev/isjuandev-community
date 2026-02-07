import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Video, Users, ChevronDown, Code2, Rocket, Heart } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient text-balance">
              Construyendo en Público
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance">
              Únete mientras construimos proyectos en vivo, compartimos consejos de desarrollo y hacemos crecer nuestra comunidad
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://kick.com" target="_blank" rel="noopener noreferrer">
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

            {/* Quick Links */}
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Link href="/projects" className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary transition-all">
                <Code2 className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Proyectos</h3>
                <p className="text-sm text-muted-foreground">Explora mis últimas creaciones y experimentos</p>
              </Link>
              
              <Link href="/blog" className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary transition-all">
                <Rocket className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Blog</h3>
                <p className="text-sm text-muted-foreground">Lee tutoriales y artículos sobre desarrollo</p>
              </Link>
              
              <Link href="/tips" className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary transition-all">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Consejos</h3>
                <p className="text-sm text-muted-foreground">Consejos rápidos y fragmentos de código</p>
              </Link>
            </div>

            <div className="flex justify-center pt-8">
              <Link href="/about" className="animate-bounce">
                <ChevronDown className="h-8 w-8 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
