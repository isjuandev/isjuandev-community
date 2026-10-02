import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conoce a Juan Diego García (IsJuanDev): Consultor de Automatizaciones con IA y Desarrollador Web FullStack. Trayectoria, stack técnico y enfoque en software que genera ventas reales.',
  openGraph: {
    type: 'profile',
    title: 'Sobre mí | Juan Diego (IsJuanDev)',
    description: 'Consultor de Automatizaciones con IA & Desarrollador Web FullStack enfocado en soluciones digitales de alto impacto.',
    url: '/about',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sobre Juan Diego (IsJuanDev)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre mí | Juan Diego (IsJuanDev)',
    description: 'Consultor de Automatizaciones con IA & Desarrollador Web FullStack enfocado en soluciones digitales de alto impacto.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
