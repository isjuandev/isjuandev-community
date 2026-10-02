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
        'card-editorial flex flex-col justify-between w-full h-full p-6 sm:p-7 rounded-2xl border transition-all',
        solution.popular
          ? 'border-primary/80 bg-card shadow-lg shadow-primary/5'
          : 'border-border/80 bg-card/60 hover:border-border'
      )}
    >
      <div>
        {/* Header de la tarjeta */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono text-primary font-semibold">
            {solution.badge}
          </span>
        </div>
        <h3 className="font-display font-bold text-2xl mb-2 text-foreground">
          {solution.title}
        </h3>
        <p className="text-xs font-mono text-primary font-medium mb-3">
          {solution.subtitle}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {solution.description}
        </p>

        <div className="space-y-3 pt-5 border-t border-border/60 mb-6">
          <p className="text-xs font-mono text-foreground font-semibold uppercase tracking-wider">
            Lo que incluye:
          </p>
          {solution.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
          {solution.notIncluded && solution.notIncluded.length > 0 && (
            <div className="pt-2 space-y-2 border-t border-border/40">
              {solution.notIncluded.map((item, idx) => (
                <div key={`not-${idx}`} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="font-mono text-muted-foreground/80 font-bold shrink-0">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bloque de Inversión y Botón */}
      <div className="pt-6 border-t border-border/60">
        <div className="mb-5">
          <div className="space-y-1">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="font-display font-bold text-2xl sm:text-[1.65rem] text-foreground">
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
          <div className="flex items-center gap-1.5 text-xs font-mono text-secondary mt-2">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>{solution.timeframe}</span>
          </div>
        </div>

        <Button
          size="lg"
          className={cn(
            'w-full gap-2 font-semibold py-5 text-sm transition-all',
            solution.popular
              ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
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
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      {/* ── Vista Desktop: Grid tradicional (md+) ── */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
        {solutions.map((solution, i) => (
          <Reveal key={solution.index} delay={180 + i * 80} className="flex h-full">
            <PricingCard solution={solution} />
          </Reveal>
        ))}
      </div>

      {/* ── Vista Responsive/Móvil: Slider táctil con Embla Carousel (< md) ── */}
      <div className="block md:hidden mt-8">
        <Reveal delay={180}>
          <div className="flex items-center justify-between mb-3 px-1 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1">
              Desliza para explorar planes &rarr;
            </span>
            <span className="font-semibold text-foreground">
              {current + 1} / {count || solutions.length}
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
              {solutions.map((solution) => (
                <CarouselItem key={solution.index} className="pl-3 basis-[88%] sm:basis-[80%] flex">
                  <PricingCard solution={solution} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Indicadores de paginación / Dots interactivos */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {solutions.map((item, index) => (
              <button
                key={item.index}
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
    </>
  )
}
