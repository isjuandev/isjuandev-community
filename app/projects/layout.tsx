import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Proyectos públicos de IsJuanDev en GitHub, organizados por categoría: aplicaciones web, backend/APIs, móviles, experimentos y más.',
  openGraph: {
    type: 'website',
    title: 'Proyectos | IsJuanDev',
    description: 'Proyectos públicos de IsJuanDev en GitHub: web, backend/APIs, móviles y experimentos.',
    url: '/projects',
  },
  twitter: {
    title: 'Proyectos | IsJuanDev',
    description: 'Proyectos públicos de IsJuanDev en GitHub: web, backend/APIs, móviles y experimentos.',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}