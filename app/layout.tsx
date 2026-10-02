import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Spline_Sans_Mono } from 'next/font/google'
import { Footer } from '@/components/footer'
import { MAIN_PLANS, OPTIONAL_ADDONS, CUSTOM_SYSTEM } from '@/lib/data/pricing'

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
    'IsJuanDev',
    'Juan Diego Garcia',
    'Automatizaciones con IA',
    'Desarrollo Web Colombia',
    'Colombia (Servicio Global)',
    'Chatbots WhatsApp',
    'Agentes de IA',
    'n8n consultor',
    'Landing pages alta conversión',
    'Next.js',
    'Desarrollo de Software',
    'Sistemas a medida',
    'Integraciones CRM',
    'Consultor IA',
    'Automatización de procesos',
    'Chatbot inteligente WhatsApp',
    'Ventas automáticas'
  ],
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
    locale: 'es_ES',
    url: SITE_URL,
    title: 'IsJuanDev — Webs de Alta Conversión & Automatizaciones con IA',
    description: 'Desarrollo web de alta conversión y automatizaciones con IA para negocios que buscan escalar sin perder ventas.',
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
    title: 'IsJuanDev — Webs de Alta Conversión & Automatizaciones con IA',
    description: 'Desarrollo web de alta conversión y automatizaciones con IA para negocios que buscan escalar sin perder ventas.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.webmanifest',
  category: 'technology',
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
      description: 'Webs de alta conversión y automatizaciones con inteligencia artificial para negocios.',
      inLanguage: 'es',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'IsJuanDev',
      url: SITE_URL,
      logo: `${SITE_URL}/profile.png`,
      image: `${SITE_URL}/opengraph-image`,
      description: 'Consultoría y desarrollo de sitios web de alta conversión, asistentes automáticos de WhatsApp y flujos de automatización con inteligencia artificial.',
      telephone: '+573178073598',
      email: 'hola@isjuandev.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CO',
        addressLocality: 'Colombia (Servicio Global)',
      },
      areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'AdministrativeArea', name: 'Latinoamérica' },
        { '@type': 'AdministrativeArea', name: 'Global' },
      ],
      founder: {
        '@id': `${SITE_URL}/#person`,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Crecimiento & Automatización Digital',
        itemListElement: [
          ...MAIN_PLANS.map((plan) => ({
            '@type': 'Offer',
            name: plan.title,
            description: plan.description,
            price: plan.priceCop.toString(),
            priceCurrency: 'COP',
          })),
          {
            '@type': 'Offer',
            name: CUSTOM_SYSTEM.title,
            description: CUSTOM_SYSTEM.description,
            price: CUSTOM_SYSTEM.priceCop.toString(),
            priceCurrency: 'COP',
          },
          ...OPTIONAL_ADDONS.map((addon) => ({
            '@type': 'Offer',
            name: `${addon.name} (Complemento opcional)`,
            description: addon.description,
            price: addon.priceCop.toString(),
            priceCurrency: 'COP',
          })),
        ],
      },
      sameAs: [
        'https://github.com/isjuandev',
        'https://kick.com/isjuandev',
        'https://instagram.com/isjuandev',
        'https://tiktok.com/@isjuandev',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      url: SITE_URL,
      name: 'Juan Diego García Castaño',
      alternateName: 'IsJuanDev',
      jobTitle: 'Consultor de Automatizaciones IA & Desarrollador Web FullStack',
      description: 'Ingeniero y consultor de software enfocado en soluciones digitales de alto impacto: webs de alta conversión, agentes de IA y sistemas automatizados.',
      image: `${SITE_URL}/profile.png`,
      knowsAbout: [
        'Desarrollo Web',
        'Next.js',
        'React',
        'TypeScript',
        'Inteligencia Artificial',
        'Automatizaciones n8n',
        'WhatsApp API',
        'Chatbots con IA',
        'Arquitectura de Software',
        'Sistemas CRM'
      ],
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
