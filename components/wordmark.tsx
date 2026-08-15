import { cn } from '@/lib/utils'

interface WordmarkProps {
  size?: 'sm' | 'lg'
  className?: string
}

export function Wordmark({ size = 'sm', className }: WordmarkProps) {
  return (
    <span
      className={cn(
        'font-display font-bold whitespace-nowrap',
        size === 'lg' ? 'text-6xl sm:text-7xl md:text-8xl' : 'text-xl',
        className
      )}
    >
      <span className="text-muted-foreground">&lt;</span>
      <span>IsJuan</span>
      <span className="text-primary">Dev</span>
      <span className="text-muted-foreground"> /&gt;</span>
    </span>
  )
}