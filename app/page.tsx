import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { projects } from '@/lib/data/content'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

const featured = projects.slice(0, 5)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="section" id="top" data-line="hero">
        <div className="container mx-auto">
          <Reveal>
            <span className="hero-status">
              <span className="dot-status" />
              offline — próximo stream sin confirmar
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-title">
              <span className="block">Construyo</span>
              <span className="block">
                en <span className="text-primary">público</span>
                <span className="animate-blink text-primary">▌</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero-sub">
              Portafolio editorial de un dev <strong>FullStack (React &amp; .NET)</strong> que construye
              proyectos reales en vivo, comparte lo que aprende y documenta su trayectoria. Sin humo.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex gap-[14px] mt-10 flex-wrap">
              <Button size="lg" asChild>
                <a href="https://kick.com/isjuandev" target="_blank" rel="noopener noreferrer">
                  Ver streams →
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Únete a la comunidad</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero-meta">
              <div><b>8+</b>años construyendo software</div>
              <div><b>50+</b>proyectos en producción</div>
              <div><b>20+</b>tecnologías del stack</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROYECTOS — bento */}
      <section className="section" id="proyectos" data-line="proyectos">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">proyectos.destacados</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Cosas que he construido<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead">Selección de proyectos reales — de stream a producción.</p>
          </Reveal>

          <div className="bento">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <Link
                  href={project.demo !== '#' ? project.demo : project.code}
                  target={project.demo !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={cn(
                    'card-editorial flex flex-col justify-between group',
                    i === 0 && 'c-a',
                    i === 1 && 'c-b',
                    i === 2 && 'c-c',
                    i === 3 && 'c-d',
                    i === 4 && 'c-e'
                  )}
                >
                  <div>
                    {project.stream && <span className="card-tag">Hecho en Stream</span>}
                    <div className="card-mock" style={i !== 0 ? { height: '80px' } : undefined}>
                      preview / captura del proyecto
                    </div>
                    <h3 className="font-display font-bold text-[1.25rem] mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-[0.92rem] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="card-stack">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMUNIDAD — plataformas */}
      <section className="section" id="comunidad" data-line="comunidad">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">comunidad.status</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Construimos esto juntos<span className="dot">.</span>
            </h2>
          </Reveal>

          <div className="platforms">
            {[
              { icon: 'K', name: 'Kick', num: '—', label: 'seguidores', href: 'https://kick.com/isjuandev' },
              { icon: 'D', name: 'Discord', num: '—', label: 'miembros', href: '/contact' },
              { icon: 'IG', name: 'Instagram', num: '—', label: 'seguidores', href: 'https://instagram.com/isjuandev' },
            ].map((p) => (
              <Reveal key={p.name} delay={80}>
                <Link href={p.href} className="platform block hover:border-primary/50 transition-colors">
                  <span className="icon">{p.icon}</span>
                  <h3>{p.name}</h3>
                  <div className="num">{p.num}</div>
                  <div className="num-label">{p.label}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}