'use client'

import * as React from 'react'
import { CheckCircle2, Clock } from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Solution } from '@/lib/data/content'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/motion/reveal'

interface PricingPlansProps {
  solutions: Solution[]
}

function PricingCard({ solution }: { solution: Solution }) {
  return (
    <article
      className={cn(
        'card-editorial flex flex-col justify-between w-full h-full p-6 sm:p-8 rounded-2xl border transition-all',
        solution.popular
          ? 'border-primary/80 bg-card shadow-xl shadow-primary/5 ring-1 ring-primary/30'
          : 'border-border/80 bg-card/60 hover:border-border'
      )}
    >
      <div>
        {/* Header de la tarjeta */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-semibold">
            {solution.badge}
          </span>
          {solution.popular && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold uppercase tracking-wider">
              Más Vendido
            </span>
          )}
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-[1.7rem] text-foreground mb-1.5 leading-snug">
          {solution.title}
        </h3>
        <p className="text-xs sm:text-sm font-mono text-primary font-medium mb-3 leading-snug">
          {solution.subtitle}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {solution.description}
        </p>

        <div className="space-y-3 pt-5 border-t border-border/60 mb-6">
          <p className="text-xs font-mono text-foreground font-semibold uppercase tracking-wider">
            Lo que incluye:
          </p>
          <div className="space-y-2.5">
            {solution.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
            {solution.notIncluded && solution.notIncluded.length > 0 && (
              <div className="pt-2 space-y-2 border-t border-border/40">
                {solution.notIncluded.map((item, idx) => (
                  <div key={`not-${idx}`} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                    <span className="font-mono text-muted-foreground/80 font-bold shrink-0">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bloque de Inversión y Botón */}
      <div className="pt-6 border-t border-border/60">
        <div className="mb-5">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                {solution.price.split(' / ')[0]}
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground font-medium">
                / {solution.price.split(' / ')[1]}
              </span>
            </div>
            {solution.priceNote && (
              <div className="text-xs font-mono text-muted-foreground leading-snug">
                {solution.priceNote}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-secondary mt-2.5">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>{solution.timeframe}</span>
          </div>
        </div>

        <Button
          size="lg"
          className={cn(
            'w-full gap-2 font-semibold py-5 text-sm transition-all',
            solution.popular
              ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20'
              : 'border-border hover:bg-card text-foreground'
          )}
          variant={solution.popular ? 'default' : 'outline'}
          asChild
        >
          <a
            href={SITE_CONFIG.getWhatsAppUrl(`¡Hola Juan! Me interesa contratar o saber más sobre: ${solution.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {solution.ctaText || 'Elegir este Plan'}
          </a>
        </Button>
      </div>
    </article>
  )
}

export function PricingPlans({ solutions }: PricingPlansProps) {
  const [activeTab, setActiveTab] = React.useState<'all' | 'web' | 'ai'>('all')
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const filteredSolutions = React.useMemo(() => {
    if (activeTab === 'web') {
      return solutions.filter((s) => s.index === '01' || s.index === '02')
    }
    if (activeTab === 'ai') {
      return solutions.filter((s) => s.index === '03' || s.index === '04')
    }
    return solutions
  }, [solutions, activeTab])

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api, filteredSolutions])

  return (
    <div className="w-full">
      {/* ── Filtro por Categorías / Selector ── */}
      <div className="flex justify-center mt-8 mb-6">
        <div className="inline-flex items-center rounded-xl bg-card/60 p-1 border border-border/80">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={cn(
              'px-4 py-2 text-xs sm:text-sm font-mono rounded-lg transition-all',
              activeTab === 'all'
                ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Todos los planes (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('web')}
            className={cn(
              'px-4 py-2 text-xs sm:text-sm font-mono rounded-lg transition-all',
              activeTab === 'web'
                ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Páginas Web (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ai')}
            className={cn(
              'px-4 py-2 text-xs sm:text-sm font-mono rounded-lg transition-all',
              activeTab === 'ai'
                ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            WhatsApp &amp; IA (2)
          </button>
        </div>
      </div>

      {/* ── Vista Desktop: Grid 2 Columnas espacioso y legible (md+) ── */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
        {filteredSolutions.map((solution, i) => (
          <Reveal key={solution.index} delay={120 + i * 80} className="flex h-full">
            <PricingCard solution={solution} />
          </Reveal>
        ))}
      </div>

      {/* ── Vista Responsive/Móvil: Slider táctil con Embla Carousel (< md) ── */}
      <div className="block md:hidden">
        <Reveal delay={120}>
          <div className="flex items-center justify-between mb-3 px-1 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1">
              Desliza para explorar planes &rarr;
            </span>
            <span className="font-semibold text-foreground">
              {current + 1} / {count || filteredSolutions.length}
            </span>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              containScroll: 'trimSnaps',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 py-1">
              {filteredSolutions.map((solution) => (
                <CarouselItem key={solution.index} className="pl-3 basis-[88%] sm:basis-[80%] flex">
                  <PricingCard solution={solution} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Indicadores de paginación / Dots interactivos */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {filteredSolutions.map((item, index) => (
              <button
                key={item.index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  current === index
                    ? 'w-6 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                )}
                aria-label={`Ver plan ${index + 1}: ${item.title}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
