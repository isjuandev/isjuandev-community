import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notas técnicas y de proceso de IsJuanDev, en formato de bitácora: trayectoria dev y reseñas tech.',
  openGraph: {
    type: 'website',
    title: 'Blog | IsJuanDev',
    description: 'Notas técnicas y de proceso de IsJuanDev: trayectoria dev y reseñas tech.',
    url: '/blog',
  },
  twitter: {
    title: 'Blog | IsJuanDev',
    description: 'Notas técnicas y de proceso de IsJuanDev: trayectoria dev y reseñas tech.',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}