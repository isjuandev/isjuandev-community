import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Spline_Sans_Mono } from 'next/font/google'
import { Footer } from '@/components/footer'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter'
})
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display'
})
const splineSansMono = Spline_Sans_Mono({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono'
})

const SITE_URL = 'https://isjuandev.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'IsJuanDev — Webs de Alta Conversión & Automatizaciones con IA',
    template: '%s | IsJuanDev',
  },
  description: 'Ayudo a empresas y negocios a captar más clientes, responder en menos de 60 segundos y automatizar sus operaciones con software web moderno y agentes de IA.',
  keywords: [
    'IsJuanDev', 'Automatizaciones con IA', 'n8n', 'Chatbots WhatsApp', 'Desarrollo Web',
    'Landing pages alta conversión', 'Next.js', 'DeepSeek', 'Sistemas a medida', 'CRM Notion',
    'Consultor IA', 'Colombia',
  ],
  authors: [{ name: 'Juan Diego García Castaño', url: 'https://github.com/isjuandev' }],
  creator: 'IsJuanDev',
  icons: {
    icon: '/icon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'IsJuanDev',
    locale: 'es_ES',
    url: '/',
    title: 'IsJuanDev — Webs de Alta Conversión & Automatizaciones con IA',
    description: 'Desarrollo web de alta conversión y automatizaciones con IA para negocios que buscan escalar sin perder ventas.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'IsJuanDev — Webs de Alta Conversión y Automatizaciones IA.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IsJuanDev — Webs de Alta Conversión & Automatizaciones con IA',
    description: 'Desarrollo web de alta conversión y automatizaciones con IA para negocios que buscan escalar sin perder ventas.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#060b14',
  colorScheme: 'dark',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'IsJuanDev',
      description: 'Portafolio de Juan Diego, desarrollador FullStack que construye productos digitales en público.',
      inLanguage: 'es',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      url: SITE_URL,
      name: 'Juan Diego García Castaño',
      alternateName: 'IsJuanDev',
      jobTitle: 'Desarrollador FullStack',
      description: 'Desarrollador FullStack especializado en React, .NET y cloud (AWS), que construye productos reales y comparte el proceso con su comunidad.',
      knowsAbout: ['React', 'TypeScript', 'Next.js', '.NET Core', 'AWS', 'Docker', 'PostgreSQL', 'Flutter'],
      sameAs: [
        'https://github.com/isjuandev',
        'https://kick.com/isjuandev',
        'https://instagram.com/isjuandev',
        'https://tiktok.com/@isjuandev',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} ${splineSansMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
