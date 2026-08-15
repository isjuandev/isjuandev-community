import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Juan Diego García Castaño (IsJuanDev): desarrollador FullStack que convierte ideas en productos reales con React, .NET y cloud.',
  openGraph: {
    type: 'website',
    title: 'Sobre mí | IsJuanDev',
    description: 'Ingeniero de software full-stack especializado en React, .NET y cloud (AWS).',
    url: '/about',
  },
  twitter: {
    title: 'Sobre mí | IsJuanDev',
    description: 'Ingeniero de software full-stack especializado en React, .NET y cloud (AWS).',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
