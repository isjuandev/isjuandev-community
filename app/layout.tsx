import React from "react"
import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'IsJuanDev — Propuesta de identidad',
  description: 'Portafolio editorial de un dev FullStack (React & .NET) que construye en público.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} ${splineSansMono.variable}`}>
      <body className="font-sans antialiased">
        <Gutter />
        <div className="md:pl-16">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}