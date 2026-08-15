import Link from 'next/link'
import { Wordmark } from '@/components/wordmark'

const footerLinks = [
  { href: 'https://github.com/isjuandev', label: 'GitHub' },
  { href: 'https://kick.com/isjuandev', label: 'Kick' },
  { href: 'https://instagram.com/isjuandev', label: 'Instagram' },
  { href: 'https://tiktok.com/@isjuandev', label: 'TikTok' },
  { href: '/contact', label: 'Email' },
]

export function Footer() {
  return (
    <footer data-line="footer" className="px-4">
      <div className="container mx-auto flex flex-col items-center text-center">
        <Wordmark size="lg" />
        <p className="text-muted-foreground text-[0.98rem] mt-[18px] mb-10">
          Código, proyectos y comunidad.
        </p>
        <div className="flex justify-center gap-[26px] flex-wrap font-mono text-[0.82rem] text-muted-foreground">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}