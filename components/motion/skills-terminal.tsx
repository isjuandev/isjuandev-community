'use client'

import { useEffect, useRef, useState } from 'react'

const LOG_LINES = [
  { text: '$ pnpm isjuandev@skills init', cls: 'prompt' },
  { text: '✓ cargando .NET Core / C#', cls: 'ok' },
  { text: '✓ cargando React / TypeScript', cls: 'ok' },
  { text: '✓ cargando AWS / Azure DevOps', cls: 'ok' },
  { text: '✓ cargando Astro / Tailwind', cls: 'ok' },
  { text: 'stack listo.', cls: 'prompt' },
]

export function SkillsTerminal() {
  const [typedCount, setTypedCount] = useState(0)
  const [done, setDone] = useState(false)
  const reducedRef = useRef(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    reducedRef.current = reduced
    if (reduced) {
      setTypedCount(LOG_LINES.reduce((acc, l) => acc + l.text.length, 0))
      setDone(true)
      return
    }

    const total = LOG_LINES.reduce((acc, line) => acc + line.text.length, 0)
    let current = 0
    const timer = setInterval(() => {
      current++
      setTypedCount(current)
      if (current >= total) {
        clearInterval(timer)
        setDone(true)
      }
    }, 22)

    return () => clearInterval(timer)
  }, [])

  let cursor = 0
  const visibleLines = LOG_LINES.map((line) => {
    const start = cursor
    cursor += line.text.length
    return { ...line, chars: Math.max(0, Math.min(line.text.length, typedCount - start)) }
  })

  return (
    <div className="terminal mx-auto">
      <div className="terminal-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="fname">isjuandev@skills — zsh</span>
      </div>
      <div className="terminal-body">
        {visibleLines.map((line, i) => (
          <div key={i} className={line.cls}>
            {line.text.slice(0, line.chars)}
            {!done && i === visibleLines.length - 1 && line.chars === line.text.length && (
              <span className="terminal-cursor" />
            )}
          </div>
        ))}
        {!done && (
          <div className="prompt">
            {typedCount === 0 && <span className="terminal-cursor" />}
          </div>
        )}
      </div>
    </div>
  )
}