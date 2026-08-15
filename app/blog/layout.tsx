import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aprendizajes',
  description: 'Notas técnicas y de proceso de IsJuanDev sobre proyectos, arquitectura, errores y decisiones reales.',
  openGraph: {
    type: 'website',
    title: 'Aprendizajes | IsJuanDev',
    description: 'Notas técnicas y de proceso de IsJuanDev sobre proyectos, arquitectura y decisiones reales.',
    url: '/blog',
  },
  twitter: {
    title: 'Aprendizajes | IsJuanDev',
    description: 'Notas técnicas y de proceso de IsJuanDev sobre proyectos, arquitectura y decisiones reales.',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
