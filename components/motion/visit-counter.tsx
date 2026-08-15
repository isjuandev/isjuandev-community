'use client'

import { useEffect, useState } from 'react'

export function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null)

  useEffect(() => {
    try {
      const key = 'isjuandev-visits'
      const current = Number(localStorage.getItem(key) ?? 0)
      const next = current + 1
      localStorage.setItem(key, String(next))
      setVisits(next)
    } catch {
      setVisits(0)
    }
  }, [])

  if (visits === null) return null

  return (
    <p className="visits">
      visitante número <b>{visits}</b>
    </p>
  )
}