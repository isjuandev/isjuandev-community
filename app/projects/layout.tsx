import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Portafolio de proyectos y sistemas desarrollados por IsJuanDev: aplicaciones web de alto rendimiento, sistemas backend, automatizaciones y experimentos en código.',
  openGraph: {
    type: 'website',
    title: 'Proyectos y Sistemas | IsJuanDev',
    description: 'Explora los proyectos, sistemas web y desarrollos construidos por IsJuanDev.',
    url: '/projects',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Proyectos de IsJuanDev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyectos y Sistemas | IsJuanDev',
    description: 'Explora los proyectos, sistemas web y desarrollos construidos por IsJuanDev.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}