import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { platformIcons } from '@/components/platform-icons'
import { Reveal } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Comunidad',
  description: 'Construyo productos en público, comparto el proceso y conecto con desarrolladores en Kick, TikTok e Instagram.',
  openGraph: {
    type: 'website',
    title: 'Comunidad | IsJuanDev',
    description: 'Construyo productos en público, comparto el proceso y conecto con desarrolladores.',
    url: '/comunidad',
  },
  twitter: {
    title: 'Comunidad | IsJuanDev',
    description: 'Construyo productos en público, comparto el proceso y conecto con desarrolladores.',
  },
  alternates: {
    canonical: '/comunidad',
  },
}

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

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="section" id="comunidad" data-line="comunidad">
        <div className="container mx-auto">
          <Reveal>
            <div className="section-label">comunidad.status</div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="section-title">
              Construyo en público<span className="dot">.</span>
            </h1>
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
                  <h2>{pillar.title}</h2>
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
                  <h2>{platform.name}</h2>
                  <div className="num">{platform.num}</div>
                  <div className="num-label">{platform.label}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
