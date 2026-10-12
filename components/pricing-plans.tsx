'use client'

import * as React from 'react'
import { CheckCircle2, ChevronRight, Clock } from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Solution } from '@/lib/data/content'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/motion/reveal'

interface PricingPlansProps {
  solutions: Solution[]
}

const VISIBLE_DELIVERABLES = 3

function DeliverablesList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2.5">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

function PlanCta({ solution }: { solution: Solution }) {
  return (
    <Button
      size="lg"
      className={cn(
        'w-full gap-2 font-semibold py-5 text-sm transition-all whitespace-normal h-auto min-h-11',
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
  )
}

function PlanPrice({ solution, showMonthlyNote = false }: { solution: Solution; showMonthlyNote?: boolean }) {
  const [price, usdRef] = solution.price.split(' / ')

  return (
    <div className="space-y-1">
      <div className="flex items-baseline gap-2 flex-wrap">
        <span
          className={cn(
            'font-display font-bold text-2xl sm:text-3xl tracking-tight',
            solution.popular ? 'text-secondary' : 'text-foreground'
          )}
        >
          {price}
        </span>
        <span className="text-xs sm:text-sm font-mono text-muted-foreground font-medium">
          / {usdRef}
        </span>
      </div>
      {solution.monthlyDisplay && (
        <div className="font-display font-semibold text-sm sm:text-base text-foreground">
          {solution.monthlyDisplay}
        </div>
      )}
      {showMonthlyNote && solution.monthlyNote && (
        <div className="text-xs text-muted-foreground leading-snug">{solution.monthlyNote}</div>
      )}
      {solution.purchaseDisplay && (
        <div className="text-xs text-muted-foreground leading-snug">{solution.purchaseDisplay}</div>
      )}
      {showMonthlyNote && solution.priceNote && (
        <div className="text-xs text-muted-foreground leading-snug">{solution.priceNote}</div>
      )}
    </div>
  )
}

function PlanDetailsDialog({ solution }: { solution: Solution }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-1 min-h-11 text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          Ver detalles del plan
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[88vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto border-border bg-card p-5 pb-0 sm:p-8 sm:pb-0">
        <DialogHeader className="pr-6 text-left">
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            {solution.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-primary">
            {solution.subtitle}
          </DialogDescription>
        </DialogHeader>

        <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>

        <div className="space-y-2 border-y border-border/60 py-4">
          <PlanPrice solution={solution} showMonthlyNote />
          <div className="flex items-center gap-1.5 text-xs font-mono text-secondary">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>{solution.timeframe}</span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-mono text-foreground font-semibold uppercase tracking-wider">
            Lo que incluye:
          </p>
          <DeliverablesList items={solution.deliverables} />
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

        <div className="sticky bottom-0 -mx-5 sm:-mx-8 border-t border-border/60 bg-card px-5 py-4 sm:px-8">
          <PlanCta solution={solution} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function PricingCard({ solution }: { solution: Solution }) {
  const visible = solution.deliverables.slice(0, VISIBLE_DELIVERABLES)

  return (
    <article
      className={cn(
        'card-editorial flex flex-col w-full h-full p-5 sm:p-6 rounded-2xl border transition-all',
        solution.popular
          ? 'border-primary/80 bg-card shadow-xl shadow-primary/5 ring-1 ring-primary/30'
          : 'border-border/80 bg-card/60 hover:border-border'
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="whitespace-nowrap text-xs font-mono px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-semibold">
          {solution.badge}
        </span>
        {solution.popular && (
          <span className="whitespace-nowrap text-xs font-mono px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/30 font-semibold uppercase tracking-wider">
            Más Vendido
          </span>
        )}
      </div>
      <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-1.5 leading-snug">
        {solution.title}
      </h3>
      <p className="text-sm text-primary font-medium mb-4 leading-snug">
        {solution.subtitle}
      </p>

      <div className="pt-4 border-t border-border/60 mb-5 space-y-3">
        <PlanPrice solution={solution} />
        <div className="flex items-center gap-1.5 text-xs font-mono text-secondary">
          <Clock className="h-3.5 w-3.5 shrink-0" />
          <span>{solution.timeframe}</span>
        </div>
        <PlanCta solution={solution} />
      </div>

      <div className="space-y-3">
        <p className="text-xs font-mono text-foreground font-semibold uppercase tracking-wider">
          Lo que incluye:
        </p>
        <DeliverablesList items={visible} />
        <PlanDetailsDialog solution={solution} />
      </div>
    </article>
  )
}

export function PricingPlans({ solutions: rawSolutions }: PricingPlansProps) {
  // El plan recomendado abre el carrusel
  const solutions = React.useMemo(
    () => [...rawSolutions].sort((a, b) => Number(b.popular) - Number(a.popular)),
    [rawSolutions]
  )
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
  }, [api, solutions])

  return (
    <div className="w-full mt-8">
      {/* ── Carrusel en móvil y tablet; en lg+ embla se desactiva y queda una grilla de 3 ── */}
      <Reveal delay={120}>
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
            breakpoints: { '(min-width: 1024px)': { active: false } },
          }}
          className="w-full"
        >
          {/* Contador (solo cuando hay carrusel) */}
          <div className="flex items-center justify-between gap-4 mb-4 text-xs text-muted-foreground lg:hidden">
            <span>Desliza para ver los {solutions.length} planes</span>
            <span className="font-mono font-semibold text-foreground">
              {current + 1} / {count || solutions.length}
            </span>
          </div>

          <CarouselContent className="-ml-4 sm:-ml-6 py-2 items-stretch">
            {solutions.map((solution) => (
              <CarouselItem
                key={solution.index}
                className="pl-4 sm:pl-6 basis-[88%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3 flex"
              >
                <PricingCard solution={solution} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Flechas centradas verticalmente sobre el carrusel; en móvil quedan en el borde exterior para no tapar el texto de la tarjeta */}
          <CarouselPrevious className="-left-4 md:-left-3 top-1/2 -translate-y-1/2 z-10 lg:hidden h-9 w-9 md:h-10 md:w-10 border-border bg-card/95 text-foreground shadow-lg shadow-black/40 backdrop-blur hover:bg-card before:absolute before:-inset-1 before:content-['']" />
          <CarouselNext className="-right-4 md:-right-3 top-1/2 -translate-y-1/2 z-10 lg:hidden h-9 w-9 md:h-10 md:w-10 border-border bg-card/95 text-foreground shadow-lg shadow-black/40 backdrop-blur hover:bg-card before:absolute before:-inset-1 before:content-['']" />
        </Carousel>

        {/* Indicadores de paginación */}
        <div className="flex justify-center items-center gap-1 mt-2 lg:hidden">
          {solutions.map((item, index) => (
            <button
              key={item.index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className="group flex h-11 w-6 items-center justify-center"
              aria-label={`Ver plan ${index + 1}: ${item.title}`}
            >
              <span
                className={cn(
                  'block h-2 rounded-full transition-all duration-300',
                  current === index
                    ? 'w-6 bg-primary'
                    : 'w-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60'
                )}
              />
            </button>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
