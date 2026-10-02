export const TASA_COP_USD = 3300

export const RATE_NOTE = 'USD referencial a una tasa de 3.300 COP/USD. El cobro se realiza en COP.'

export function calcUsd(cop: number): number {
  return Math.round(cop / TASA_COP_USD)
}

export function formatCop(amount: number): string {
  return `$${amount.toLocaleString('es-CO')} COP`
}

export function formatUsdRef(amount: number): string {
  return `~$${calcUsd(amount)} USD ref.`
}

export function formatPriceString(cop: number): string {
  return `${formatCop(cop)} / ${formatUsdRef(cop)}`
}

export interface PricingPlan {
  id: string
  index: string
  badge: string
  popular: boolean
  title: string
  subtitle: string
  description: string
  priceCop: number
  priceUsd: number
  priceDisplay: string
  paymentTerms: string
  timeframe: string
  deliverables: string[]
  notIncluded?: string[]
  ctaText: string
  tags: string[]
}

export interface OptionalAddon {
  id: string
  name: string
  priceCop: number
  priceUsd: number
  priceDisplay: string
  billingCycle: string
  description: string
  features: string[]
  note: string
}

export const MAIN_PLANS: PricingPlan[] = [
  {
    id: 'web-express',
    index: '01',
    badge: '⚡ SPRINT 2-3 DÍAS',
    popular: false,
    title: 'Web Express',
    subtitle: 'Lanza tu presencia profesional y empieza a recibir contactos de inmediato',
    description: 'Página única de alto impacto basada en una estructura probada para tu nicho. Optimizada para celulares, lista para captar clientes directo a tu WhatsApp y correo.',
    priceCop: 690000,
    priceUsd: calcUsd(690000), // 209
    priceDisplay: `${formatCop(690000)} / ${formatUsdRef(690000)}`,
    paymentTerms: 'Pago único · 100% por adelantado',
    timeframe: 'Lista en 2 a 3 días',
    deliverables: [
      'Página única basada en la plantilla de tu nicho, personalizada con tu marca, textos y fotos',
      'Botón directo a tu WhatsApp para que te escriban con un toque',
      'Formulario de contacto conectado directo a tu correo',
      'Adaptada 100% a celulares y pantallas móviles',
      '1 ronda de ajustes y afinaciones incluida',
      'Publicación y puesta en marcha en la web'
    ],
    notIncluded: [
      'No incluye dominio .com propio (lo registra el cliente en su cuenta, costo directo) ni páginas adicionales'
    ],
    ctaText: 'Quiero mi Web Express',
    tags: ['Web Express', 'WhatsApp Directo', 'Móvil First', '2-3 Días']
  },
  {
    id: 'web-completa',
    index: '02',
    badge: '🚀 SPRINT 7 DÍAS',
    popular: false,
    title: 'Tu Nueva Web para Vender',
    subtitle: 'Atrae clientes y haz que te contacten de inmediato desde su celular',
    description: 'Diseñamos una página web moderna y rápida para tu negocio, estructurada para que cualquier persona que entre desde su teléfono entienda tu oferta y te escriba directamente a WhatsApp.',
    priceCop: 1450000,
    priceUsd: calcUsd(1450000), // 439
    priceDisplay: `${formatCop(1450000)} / ${formatUsdRef(1450000)}`,
    paymentTerms: 'Pago único · 50% anticipo / 50% entrega',
    timeframe: 'Lista en 5 a 7 días',
    deliverables: [
      'Página web completa y adaptada 100% para teléfonos celulares',
      'Botón directo a tu WhatsApp para que te escriban con un solo toque',
      'Textos claros y persuasivos que explican por qué deben elegirte a ti',
      'Formulario fácil para recibir solicitudes de clientes en tu correo',
      'Tu nombre en internet (.com), seguridad SSL y puesta en marcha incluida',
      'Sin pagos mensuales forzados: la página es 100% de tu propiedad'
    ],
    ctaText: 'Quiero mi Página Web',
    tags: ['Web Móvil', 'WhatsApp Directo', 'Diseño Moderno', 'Dominio .com']
  },
  {
    id: 'asistente-whatsapp',
    index: '03',
    badge: '⚡ AI AUTOMATION SPRINT',
    popular: false,
    title: 'Asistente Automático de WhatsApp',
    subtitle: 'Responde en menos de 60 segundos 24/7 con control total y derivación a tu equipo',
    description: 'Automatizamos la atención y pre-calificación en tu WhatsApp. Da precios, resuelve dudas frecuentes, agenda citas y transfiere la conversación a tu equipo solo cuando hay un cliente listo para comprar.',
    priceCop: 790000,
    priceUsd: calcUsd(790000), // 239
    priceDisplay: `${formatCop(790000)} / ${formatUsdRef(790000)}`,
    paymentTerms: 'Pago único · 50% anticipo / 50% entrega',
    timeframe: 'Listo en 3 a 5 días',
    deliverables: [
      'Atención inmediata en WhatsApp en menos de 60 segundos día y noche',
      'Configuración y puesta en marcha completa (cubre el pago único)',
      'Respuestas automáticas basadas únicamente en tu información aprobada',
      'Agenda citas directamente en tu Google Calendar sin cruzar mensajes',
      'Control y Escalamiento Humano: la conversación se transfiere a tu equipo en casos clave',
      'Filtro de curiosos y registro de prospectos ordenado en tu CRM o Sheets',
      'Capacitación en video y acompañamiento directo en la entrega'
    ],
    notIncluded: [
      'No cubre costos de uso de la API de WhatsApp (los paga el cliente directo al proveedor) ni mantenimiento',
      'Consumo del modelo de IA incluido con uso razonable solo con Soporte Mensual; sin él, el cliente conecta su propia cuenta del modelo'
    ],
    ctaText: 'Quiero mi Asistente WhatsApp',
    tags: ['WhatsApp 24/7', 'Escalamiento Humano', 'Menos de 60s', 'Cero Fugas']
  },
  {
    id: 'pack-crecimiento',
    index: '04',
    badge: '🔥 RECOMENDADO · MÁXIMA CONVERSIÓN',
    popular: true,
    title: 'Pack Crecimiento Completo',
    subtitle: 'Tu web de ventas + tu asistente de WhatsApp integrados en un solo sprint',
    description: 'La combinación más rentable para tu negocio: una web moderna que atrae clientes desde Google y redes, conectada a un asistente inteligente que responde al instante y agenda citas 24/7.',
    priceCop: 1990000,
    priceUsd: calcUsd(1990000), // 603
    priceDisplay: `${formatCop(1990000)} / ${formatUsdRef(1990000)}`,
    paymentTerms: 'Ahorras $250.000 COP + 2 meses de soporte · 50% anticipo / 50% entrega',
    timeframe: 'Listo en 7 días',
    deliverables: [
      'Página Web de Alta Conversión completa adaptada 100% a celulares',
      'Asistente de WhatsApp 24/7 conectado a los botones de tu nueva web',
      '2 meses de Soporte Mensual Completo incluidos (valor de $198.000 COP)',
      'Agendamiento automático de citas y respuestas a preguntas frecuentes',
      'Escalamiento inmediato a tu celular cuando un cliente solicita atención personal',
      'Dominio .com, seguridad SSL, base de datos y puesta en marcha llave en mano',
      'Ahorras $250.000 COP frente a contratar por separado, más 2 meses de soporte incluidos (valor $198.000 COP)'
    ],
    ctaText: 'Quiero el Pack Completo',
    tags: ['Web + IA WhatsApp', '2 Meses Soporte Gratis', 'Ahorro $250k', 'Sprint 7 Días']
  }
]

export const OPTIONAL_ADDONS: OptionalAddon[] = [
  {
    id: 'soporte-mensual',
    name: 'Soporte Mensual Completo',
    priceCop: 99000,
    priceUsd: calcUsd(99000), // 30
    priceDisplay: `${formatCop(99000)} / ${formatUsdRef(99000)}/mes`,
    billingCycle: 'mensual (opcional, sin permanencia)',
    description: 'Tranquilidad total para tu web y tu asistente de WhatsApp.',
    features: [
      'Mantenimiento técnico continuo y ajustes de contenido',
      'Monitoreo activo del asistente de WhatsApp y estabilidad operativa',
      'Consumo del modelo de IA incluido con uso razonable',
      'Soporte directo prioritario por WhatsApp'
    ],
    note: 'Sin permanencia mínima. Cancela o reactiva cuando quieras. Tu web y código siguen siendo 100% de tu propiedad.'
  },
  {
    id: 'mantenimiento-web',
    name: 'Mantenimiento Web',
    priceCop: 49000,
    priceUsd: calcUsd(49000), // 15
    priceDisplay: `${formatCop(49000)} / ${formatUsdRef(49000)}/mes`,
    billingCycle: 'mensual (opcional, sin permanencia)',
    description: 'Para sitios web que requieren soporte preventivo y actualizaciones periódicas.',
    features: [
      'Cambios menores de textos, imágenes y enlaces',
      'Monitoreo de uptime y certificados de seguridad SSL',
      'Soporte técnico directo ante incidencias'
    ],
    note: 'Sin permanencia mínima. La página es 100% de tu propiedad; este mantenimiento es totalmente opcional.'
  }
]

export const CUSTOM_SYSTEM = {
  title: 'Sistemas a Medida & CRM',
  priceCop: 2800000,
  priceUsd: calcUsd(2800000), // 848
  priceDisplay: `Desde ${formatCop(2800000)} / ${formatUsdRef(2800000)}`,
  description: 'Desarrollo e integración de flujos con n8n, pasarelas locales (Wompi, PSE, Stripe), portales privados y automatización de operaciones complejas. Presupuesto cerrado según tus requerimientos.'
}
