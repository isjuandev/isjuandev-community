import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto & Cotizaciones',
  description: 'Agenda una auditoría gratuita o cotiza tu sitio web de alta conversión o asistente inteligente de WhatsApp con IsJuanDev. Trato directo, sin intermediarios y entrega rápida.',
  openGraph: {
    type: 'website',
    title: 'Contacto & Cotizaciones | IsJuanDev',
    description: 'Cotiza tu proyecto de desarrollo web o automatización con IA directamente con el ingeniero a cargo.',
    url: '/contact',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Contacto IsJuanDev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto & Cotizaciones | IsJuanDev',
    description: 'Cotiza tu proyecto de desarrollo web o automatización con IA directamente con el ingeniero a cargo.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}