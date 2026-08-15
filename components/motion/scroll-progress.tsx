'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const r = 18
  const c = 2 * Math.PI * r
  const offset = c - progress * c

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block motion-reduce:hidden" aria-hidden="true">
      <svg width="48" height="48" viewBox="0 0 48 48" className="-rotate-90">
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
      </svg>
    </div>
  )
}