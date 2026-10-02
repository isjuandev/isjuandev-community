import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IsJuanDev — Webs de Alta Conversión & Automatizaciones IA',
    short_name: 'IsJuanDev',
    description: 'Desarrollo web de alta conversión y automatizaciones con IA para negocios que buscan escalar sin perder ventas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060b14',
    theme_color: '#060b14',
    icons: [
      {
        src: '/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/profile.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}