import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consejos & Snippets',
  description: 'Consejos técnicos y fragmentos de código accionables para desarrolladores: soluciones prácticas, automatizaciones, buenas prácticas y productividad.',
  openGraph: {
    type: 'website',
    title: 'Consejos & Snippets | IsJuanDev',
    description: 'Consejos técnicos y fragmentos de código accionables para desarrolladores y automatizadores.',
    url: '/tips',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Consejos de IsJuanDev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consejos & Snippets | IsJuanDev',
    description: 'Consejos técnicos y fragmentos de código accionables para desarrolladores y automatizadores.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/tips',
  },
}

export default function TipsLayout({ children }: { children: React.ReactNode }) {
  return children
}