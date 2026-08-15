import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Spline_Sans_Mono } from 'next/font/google'
import { Gutter } from '@/components/motion/gutter'
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
    default: 'IsJuanDev — Desarrollador FullStack | React & .NET',
    template: '%s | IsJuanDev',
  },
  description: 'Portafolio de un desarrollador FullStack (React & .NET) que construye proyectos reales en vivo, comparte lo que aprende y documenta su trayectoria.',
  keywords: [
    'IsJuanDev', 'Desarrollador FullStack', 'React', '.NET', 'TypeScript', 'Next.js',
    'AWS', 'Docker', 'desarrollo web', 'portafolio', 'build in public', 'streaming',
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
    title: 'IsJuanDev — Desarrollador FullStack | React & .NET',
    description: 'Portafolio de un desarrollador FullStack (React & .NET) que construye proyectos reales en vivo, comparte lo que aprende y documenta su trayectoria.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'IsJuanDev — Código, proyectos y comunidad.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IsJuanDev — Desarrollador FullStack | React & .NET',
    description: 'Portafolio de un desarrollador FullStack (React & .NET) que construye proyectos reales en vivo.',
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
      description: 'Portafolio de un desarrollador FullStack (React & .NET).',
      inLanguage: 'es',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      url: SITE_URL,
      name: 'Juan Diego García Castaño',
      alternateName: 'IsJuanDev',
      jobTitle: 'Desarrollador FullStack',
      description: 'Ingeniero de software full-stack especializado en React, .NET y cloud (AWS), que construye proyectos en vivo y comparte conocimiento con su comunidad.',
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
        <Gutter />
        <div className="md:pl-16">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}