import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consejos',
  description: 'Consejos rápidos y accionables para mejorar tus habilidades de desarrollo: fragmentos de código, herramientas, buenas prácticas y productividad.',
  openGraph: {
    type: 'website',
    title: 'Consejos | IsJuanDev',
    description: 'Consejos rápidos de desarrollo: fragmentos de código, herramientas y buenas prácticas.',
    url: '/tips',
  },
  twitter: {
    title: 'Consejos | IsJuanDev',
    description: 'Consejos rápidos de desarrollo: fragmentos de código, herramientas y buenas prácticas.',
  },
  alternates: {
    canonical: '/tips',
  },
}

export default function TipsLayout({ children }: { children: React.ReactNode }) {
  return children
}