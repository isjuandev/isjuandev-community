import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Spline_Sans_Mono } from 'next/font/google'

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
  title: 'IsJuanDev | Dev Community Hub',
  description: 'Join me as I build projects live on stream, share dev tips, and grow our coding community'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${splineSansMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
