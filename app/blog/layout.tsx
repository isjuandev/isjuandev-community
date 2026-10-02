import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Aprendizajes',
  description: 'Artículos, aprendizajes y reflexiones de IsJuanDev sobre desarrollo de software, automatizaciones con IA, arquitectura web y lecciones creando en público.',
  openGraph: {
    type: 'website',
    title: 'Blog & Aprendizajes | IsJuanDev',
    description: 'Artículos, notas técnicas y reflexiones sobre software, automatizaciones y tecnología por IsJuanDev.',
    url: '/blog',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Blog de IsJuanDev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Aprendizajes | IsJuanDev',
    description: 'Artículos, notas técnicas y reflexiones sobre software, automatizaciones y tecnología por IsJuanDev.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
