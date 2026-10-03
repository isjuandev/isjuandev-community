import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Spline_Sans_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/components/footer'
import { getRootJsonLd, SITE_URL } from '@/lib/schema'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const splineSansMono = Spline_Sans_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Páginas Web y Asistente de WhatsApp con IA | IsJuanDev',
    template: '%s | IsJuanDev',
  },
  description: 'Diseño páginas web de alta conversión y configuro tu asistente de WhatsApp con IA. Automatización con IA para captar clientes y escalar tu negocio.',
  authors: [{ name: 'Juan Diego García Castaño (IsJuanDev)', url: SITE_URL }],
  creator: 'IsJuanDev',
  publisher: 'IsJuanDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.ico',
    apple: '/icon.ico',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'IsJuanDev',
    locale: 'es_CO',
    url: SITE_URL,
    title: 'Páginas Web y Asistente de WhatsApp con IA | IsJuanDev',
    description: 'Diseño páginas web de alta conversión y configuro tu asistente de WhatsApp con IA. Automatización con IA para captar clientes y escalar tu negocio.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'IsJuanDev — Webs de Alta Conversión y Automatizaciones IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@isjuandev',
    creator: '@isjuandev',
    title: 'Páginas Web y Asistente de WhatsApp con IA | IsJuanDev',
    description: 'Diseño páginas web de alta conversión y configuro tu asistente de WhatsApp con IA. Automatización con IA para captar clientes y escalar tu negocio.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: '/manifest.webmanifest',
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#060b14',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = getRootJsonLd()

  return (
    <html lang="es-CO" className={`${inter.variable} ${spaceGrotesk.variable} ${splineSansMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 (Opcional: descomentar y configurar NEXT_PUBLIC_GA_ID en .env.local)
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        */}
        <div>
          {children}
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
