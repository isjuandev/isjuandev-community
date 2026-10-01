export const SITE_CONFIG = {
  name: 'Juan Diego (IsJuanDev)',
  role: 'Consultor de Automatizaciones IA & Desarrollador Web FullStack',
  title: 'Juan Diego — Webs de Alta Conversión & Automatizaciones con IA',
  description: 'Ayudo a empresas y negocios a captar más clientes, responder en menos de 60 segundos y automatizar sus operaciones repetitivas con software moderno.',
  url: 'https://isjuandev.com',
  email: 'garciajuandiego162@gmail.com',
  // Reemplazar si el usuario tiene otro número de WhatsApp en producción:
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573100000000',
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg = '¡Hola Juan! Vi tu portafolio y me gustaría agendar una auditoría gratuita o cotizar una solución para mi negocio.'
    const text = customMessage || defaultMsg
    const num = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573100000000').replace(/\D/g, '')
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`
  },
  social: {
    github: 'https://github.com/isjuandev',
    kick: 'https://kick.com/isjuandev',
    tiktok: 'https://tiktok.com/@isjuandev',
    instagram: 'https://instagram.com/isjuandev',
  },
  pricing: {
    webSprint: '$500 USD',
    whatsappBot: '$350 USD',
    customSystem: 'Cotización',
  }
}
