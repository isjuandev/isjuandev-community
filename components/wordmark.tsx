import { cn } from '@/lib/utils'

interface WordmarkProps {
  size?: 'sm' | 'lg'
  cursor?: boolean
  className?: string
}

export function Wordmark({ size = 'sm', cursor = false, className }: WordmarkProps) {
  return (
    <span
      className={cn(
        'font-display font-bold whitespace-nowrap inline-flex items-center gap-0.5 tracking-[-0.01em]',
        size === 'lg' ? 'text-[clamp(2rem,6vw,4.2rem)]' : 'text-[1.15rem]',
        className
      )}
    >
      <span className="text-muted-foreground">&lt;</span>
      <span>Is</span>
      <span className="text-primary">Juan</span>
      <span>Dev</span>
      <span className="text-muted-foreground">&nbsp;/&gt;</span>
      {cursor && <span className="animate-blink text-primary">▌</span>}
    </span>
  )
}