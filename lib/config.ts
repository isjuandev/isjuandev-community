import { MAIN_PLANS, CUSTOM_SYSTEM } from '@/lib/data/pricing'

export const SITE_CONFIG = {
  name: 'Juan Diego (IsJuanDev)',
  role: 'Consultor de Automatizaciones IA & Desarrollador Web FullStack',
  title: 'Juan Diego — Webs de Alta Conversión & Automatizaciones con IA',
  description: 'Ayudo a empresas y negocios a captar más clientes, responder en menos de 60 segundos y automatizar sus operaciones repetitivas con software moderno.',
  url: 'https://www.isjuandev.com',
  email: 'hola@isjuandev.com',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573178073598',
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg = '¡Hola Juan! Vi tu portafolio y me gustaría agendar una auditoría gratuita o cotizar una solución para mi negocio.'
    const text = customMessage || defaultMsg
    const num = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573178073598').replace(/\D/g, '')
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`
  },
  social: {
    github: 'https://github.com/isjuandev',
    kick: 'https://kick.com/isjuandev',
    tiktok: 'https://tiktok.com/@isjuandev',
    instagram: 'https://instagram.com/isjuandev',
  },
  pricing: {
    webExpress: MAIN_PLANS[0].priceDisplay,
    webSprint: MAIN_PLANS[1].priceDisplay,
    whatsappBot: MAIN_PLANS[2].priceDisplay,
    growthPack: MAIN_PLANS[3].priceDisplay,
    customSystem: CUSTOM_SYSTEM.priceDisplay,
  }
}

