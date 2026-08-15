'use client'

import { useEffect, useState } from 'react'

export function Gutter() {
  const [active, setActive] = useState(0)
  const [lines, setLines] = useState<{ id: string; label: string }[]>([])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-line]'))
    const items = sections.map((s) => ({
      id: s.id || s.getAttribute('data-line') || '',
      label: s.getAttribute('data-line') || '',
    }))
    setLines(items)

    const sync = () => {
      const pos = window.scrollY + window.innerHeight * 0.35
      let activeIdx = 0
      sections.forEach((sec, i) => {
        if (sec.offsetTop <= pos) activeIdx = i
      })
      setActive(activeIdx)
    }

    sync()
    document.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      document.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  if (lines.length === 0) return null

  return (
    <div
      className="hidden md:flex fixed top-0 left-0 bottom-0 w-16 flex-col items-center pt-[84px] border-r border-border bg-card z-40 font-mono text-[0.68rem] text-muted-foreground/55 select-none"
      aria-hidden="true"
    >
      {lines.map((line, i) => (
        <span
          key={line.id}
          className={`h-[34px] leading-[34px] block transition-colors ${
            i === active ? 'text-primary' : ''
          }`}
        >
          {String((i + 1) * 10).padStart(3, '0')}
        </span>
      ))}
    </div>
  )
}