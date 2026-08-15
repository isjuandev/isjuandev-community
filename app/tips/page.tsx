'use client'

import { useState, useMemo } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { tips } from '@/lib/data/content'
import { Search, Copy, Check } from 'lucide-react'

export default function TipsPage() {
  const [tipsSearch, setTipsSearch] = useState('')
  const [tipsCategory, setTipsCategory] = useState('Todos')
  const [copiedTip, setCopiedTip] = useState<number | null>(null)
  const [expandedTip, setExpandedTip] = useState<number | null>(null)

  const filteredTips = useMemo(() => {
    return tips.filter(tip => {
      const matchesSearch = tip.title.toLowerCase().includes(tipsSearch.toLowerCase()) ||
        tip.description.toLowerCase().includes(tipsSearch.toLowerCase())
      const matchesCategory = tipsCategory === 'Todos' || tip.category === tipsCategory
      return matchesSearch && matchesCategory
    })
  }, [tipsSearch, tipsCategory])

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
    setCopiedTip(id)
    setTimeout(() => setCopiedTip(null), 2000)
  }

  const cats = ['Todos', 'Fragmentos', 'Herramientas', 'Recursos', 'Buenas Prácticas', 'Productividad']

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="section" id="tips" data-line="tips">
        <div className="container mx-auto">
          <div className="flex items-center gap-3">
            <span className="section-label">tips.quick</span>
          </div>
          <h2 className="section-title">
            Skills<span className="dot">.</span>
          </h2>
          <p className="section-lead mb-12">
            Consejos rápidos y accionables para mejorar tus habilidades de desarrollo
          </p>

          {/* Filters */}
          <div className="space-y-4 mb-12">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar consejos..."
                value={tipsSearch}
                onChange={(e) => setTipsSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {cats.map((cat) => (
                <Button
                  key={cat}
                  variant={tipsCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTipsCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {filteredTips.map((tip) => (
              <div key={tip.id} className="card-editorial flex flex-col">
                <div className="terminal-bar -mx-[26px] -mt-[26px] px-4 py-3 mb-4 rounded-t-[10px]">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="fname">{tip.title.toLowerCase().replace(/\s+/g, '-')}.sh</span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="text-3xl leading-none">{tip.icon}</div>
                  <span className="card-tag" style={{ marginBottom: 0 }}>{tip.category}</span>
                </div>

                {/* Log line */}
                <div className="font-mono text-sm leading-relaxed space-y-1 mb-3">
                  <div className="flex gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-muted-foreground">tip --get {tip.title.toLowerCase().replace(/\s+/g, '-')}</span>
                  </div>
                  <div className="text-foreground font-semibold">{tip.title}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {tip.description}
                </p>

                {tip.code && (
                  <div className="mt-auto">
                    <pre className="bg-card border border-border p-4 rounded-lg text-xs overflow-x-auto font-mono">
                      <code>{expandedTip === tip.id ? tip.code : tip.code.slice(0, 100) + (tip.code.length > 100 ? '...' : '')}</code>
                    </pre>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(tip.code!, tip.id)}
                        className="gap-2"
                      >
                        {copiedTip === tip.id ? (
                          <>
                            <Check className="h-4 w-4" />
                            ¡Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copiar
                          </>
                        )}
                      </Button>
                      {tip.code.length > 100 && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                        >
                          {expandedTip === tip.id ? 'Mostrar Menos' : 'Mostrar Más'}
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredTips.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No se encontraron consejos que coincidan con tus criterios.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}