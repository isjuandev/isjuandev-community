import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con IsJuanDev: colaboraciones, preguntas o únete a su comunidad de desarrolladores en Discord, Kick, TikTok e Instagram.',
  openGraph: {
    type: 'website',
    title: 'Contacto | IsJuanDev',
    description: 'Contacta con IsJuanDev o únete a su comunidad de desarrolladores.',
    url: '/contact',
  },
  twitter: {
    title: 'Contacto | IsJuanDev',
    description: 'Contacta con IsJuanDev o únete a su comunidad de desarrolladores.',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}