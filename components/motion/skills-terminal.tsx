'use client'

import { useEffect, useRef, useState } from 'react'

const LOG_LINES = [
  'pnpm isjuandev@skills init',
  '✔ Cargando perfil de Juan Diego…',
  '✔ 8+ años de experiencia FullStack',
  '✔ 20+ tecnologías dominadas',
  '✔ React & .NET · microservicios · AWS',
  '✔ Streams en vivo: construyo en público',
  '✨ Pkg ready in 0ms — sin humo, con código.',
]

export function SkillsTerminal() {
  const [typedCount, setTypedCount] = useState(0)
  const [done, setDone] = useState(false)
  const reducedRef = useRef(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    reducedRef.current = reduced
    if (reduced) {
      setTypedCount(LOG_LINES.length)
      setDone(true)
      return
    }

    const total = LOG_LINES.reduce((acc, line) => acc + line.length, 0)
    let current = 0
    const timer = setInterval(() => {
      current++
      setTypedCount(current)
      if (current >= total) {
        clearInterval(timer)
        setDone(true)
      }
    }, 14)

    return () => clearInterval(timer)
  }, [])

  let cursor = 0
  const visibleLines = LOG_LINES.map((line) => {
    const start = cursor
    cursor += line.length
    return { line, chars: Math.max(0, Math.min(line.length, typedCount - start)) }
  })

  return (
    <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/50 backdrop-blur overflow-hidden shadow-xl shadow-black/40">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-sm font-mono text-muted-foreground">skills — zsh</span>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed space-y-2">
        {visibleLines.map(({ line, chars }, i) => (
          <div key={i}>
            {i === 0 && <span className="text-primary">$ </span>}
            {line.slice(0, chars)}
            {!done && i === visibleLines.length - 1 && chars === line.length && (
              <span className="animate-blink text-primary">▌</span>
            )}
          </div>
        ))}
        {!done && (
          <div>
            {typedCount === 0 && <span className="animate-blink text-primary">▌</span>}
          </div>
        )}
      </div>
    </div>
  )
}