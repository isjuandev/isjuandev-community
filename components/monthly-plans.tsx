'use client'

import * as React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Reveal } from '@/components/motion/reveal'
import type { SubscriptionTier } from '@/lib/data/pricing'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'

interface MonthlyPlansProps {
  tiers: SubscriptionTier[]
}

function TierCard({ tier }: { tier: SubscriptionTier }) {
  return (
    <article
      className={cn(
        'card-editorial flex flex-col justify-between w-full h-full p-5 sm:p-8 rounded-2xl border',
        tier.highlight
          ? 'border-primary/80 bg-card shadow-xl shadow-primary/5 ring-1 ring-primary/30'
          : 'border-border/80 bg-card/60'
      )}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 mb-3">
          <h3 className="font-display font-bold text-xl text-foreground">{tier.name}</h3>
          {tier.highlight && (
            <span className="whitespace-nowrap text-xs font-mono px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/30 font-semibold uppercase tracking-wider">
              Incluido en el asistente
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tier.description}</p>
        <div className="mb-4">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span
              className={cn(
                'font-display font-bold text-2xl tracking-tight',
                tier.highlight ? 'text-secondary' : 'text-foreground'
              )}
            >
              {tier.priceDisplay.split(' / ')[0]}
            </span>
            <span className="text-xs font-mono text-muted-foreground">/ mes</span>
          </div>
        </div>
        <ul className="space-y-2">
          {tier.features.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 pt-4 border-t border-border/60">
        <Button
          size="sm"
          variant="outline"
          asChild
          className="w-full gap-2 border-border hover:bg-card text-foreground min-h-11 h-auto whitespace-normal"
        >
          <a
            href={SITE_CONFIG.getWhatsAppUrl(`¡Hola Juan! Quiero saber más sobre el plan mensual ${tier.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span>Consultar plan {tier.name}</span>
          </a>
        </Button>
      </div>
    </article>
  )
}

export function MonthlyPlans({ tiers }: MonthlyPlansProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="mt-8 sm:mt-12 max-w-4xl">
      {/* Carrusel en móvil; desde md embla se desactiva y quedan las tarjetas en 2 columnas */}
      <Reveal delay={180}>
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            breakpoints: { '(min-width: 768px)': { active: false } },
          }}
          className="w-full"
        >
          <div className="flex items-center justify-between gap-4 mb-4 text-xs text-muted-foreground md:hidden">
            <span>Desliza para ver los {tiers.length} planes</span>
            <span className="font-mono font-semibold text-foreground">
              {current + 1} / {tiers.length}
            </span>
          </div>

          <CarouselContent className="-ml-4 md:-ml-6 py-2 items-stretch">
            {tiers.map((tier) => (
              <CarouselItem key={tier.id} className="pl-4 md:pl-6 basis-[88%] sm:basis-[70%] md:basis-1/2 flex">
                <TierCard tier={tier} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Flechas centradas sobre el carrusel, solo mientras hay carrusel */}
          <CarouselPrevious className="-left-4 top-1/2 -translate-y-1/2 z-10 md:hidden h-9 w-9 border-border bg-card/95 text-foreground shadow-lg shadow-black/40 backdrop-blur hover:bg-card before:absolute before:-inset-1 before:content-['']" />
          <CarouselNext className="-right-4 top-1/2 -translate-y-1/2 z-10 md:hidden h-9 w-9 border-border bg-card/95 text-foreground shadow-lg shadow-black/40 backdrop-blur hover:bg-card before:absolute before:-inset-1 before:content-['']" />
        </Carousel>

        <div className="flex justify-center items-center gap-1 mt-2 md:hidden">
          {tiers.map((tier, index) => (
            <button
              key={tier.id}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className="group flex h-11 w-6 items-center justify-center"
              aria-label={`Ver plan ${index + 1}: ${tier.name}`}
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
