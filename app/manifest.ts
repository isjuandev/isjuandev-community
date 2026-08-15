import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IsJuanDev — Desarrollador FullStack',
    short_name: 'IsJuanDev',
    description: 'Portafolio de un desarrollador FullStack (React & .NET) que construye proyectos reales en vivo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060b14',
    theme_color: '#060b14',
    icons: [
      { src: '/icon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
  }
}