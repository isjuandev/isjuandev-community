import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Hash determinista corto (hex) para simular hashes de commit */
export function commitHash(input: string, len = 6): string {
  let h = 0
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i)
    h |= 0
  }
  return (h >>> 0).toString(16).padStart(len, '0').slice(0, len)
}

/** Tiempo relativo en español, p.ej. "hace 3 días · 4 min" */
export function timeAgo(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  const diff = Date.now() - date.getTime()
  const days = Math.floor(diff / 86400000)
  if (days <= 0) return 'hoy'
  if (days === 1) return 'hace 1 día'
  if (days < 30) return `hace ${days} días`
  if (days < 365) return `hace ${Math.floor(days / 30)} mes${Math.floor(days / 30) > 1 ? 'es' : ''}`
  return `hace ${Math.floor(days / 365)} año${Math.floor(days / 365) > 1 ? 's' : ''}`
}
