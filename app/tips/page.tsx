'use client'

import { useState, useMemo } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { tips } from '@/lib/data/content'
import { Search, Terminal, Copy, Check } from 'lucide-react'

export default function TipsPage() {
  const [tipsSearch, setTipsSearch] = useState('')
  const [tipsCategory, setTipsCategory] = useState('Todos')
  const [copiedTip, setCopiedTip] = useState<number | null>(null)
  const [expandedTip, setExpandedTip] = useState<number | null>(null)

  // Filtered tips
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="h-8 w-8 text-primary" />
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-balance">
              Skills<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 text-lg">
            Consejos rápidos y accionables para mejorar tus habilidades de desarrollo
          </p>

          {/* Tips Filters */}
          <div className="space-y-4 mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar consejos..."
                value={tipsSearch}
                onChange={(e) => setTipsSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {['Todos', 'Fragmentos', 'Herramientas', 'Recursos', 'Buenas Prácticas', 'Productividad'].map((cat) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip) => (
              <div
                key={tip.id}
                className="flex flex-col border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 rounded-lg overflow-hidden"
              >
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/50">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs font-mono text-muted-foreground truncate">
                    {tip.title.toLowerCase().replace(/\s+/g, '-')}.sh
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="text-3xl leading-none">{tip.icon}</div>
                    <Badge variant="secondary" className="text-xs">
                      {tip.category}
                    </Badge>
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
                      <div className="relative">
                        <pre className="bg-muted/50 p-4 rounded-lg text-xs overflow-x-auto font-mono border border-border">
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
                    </div>
                  )}
                </div>
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