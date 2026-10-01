import { cn } from '@/lib/utils'

interface WordmarkProps {
  size?: 'sm' | 'lg'
  className?: string
}

export function Wordmark({ size = 'sm', className }: WordmarkProps) {
  return (
    <span
      className={cn(
        'font-display font-bold tracking-tight inline-flex items-center gap-2',
        size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-xl',
        className
      )}
    >
      <span className="text-foreground">IsJuanDev</span>
    </span>
  )
}