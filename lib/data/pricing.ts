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

export const MIN_COMMITMENT_MONTHS = 3

export const COMMITMENT_NOTE = `Permanencia mínima de ${MIN_COMMITMENT_MONTHS} meses; después, mes a mes avisando antes del siguiente ciclo.`

export interface SubscriptionOption {
  setupCop: number
  monthlyCop: number
  display: string
  note: string
}

function webSubscription(setupCop: number, monthlyCop: number, purchaseCop: number): SubscriptionOption {
  return {
    setupCop,
    monthlyCop,
    display: `o en suscripción: ${formatCop(setupCop)} + ${formatCop(monthlyCop)} / mes`,
    note: `Instalación más baja con plan Esencial obligatorio (incluye hosting). ${COMMITMENT_NOTE} Opción de compra: la web pasa a ser tuya cuando lo pagado (instalación + mensualidades) llega a ${formatCop(purchaseCop)}, o antes pagando la diferencia.`,
  }
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
  monthlyCop?: number
  monthlyDisplay?: string
  monthlyNote?: string
  subscription?: SubscriptionOption
  timeframe: string
  deliverables: string[]
  notIncluded?: string[]
  ctaText: string
  tags: string[]
}

export interface SubscriptionTier {
  id: string
  name: string
  highlight: boolean
  priceCop: number
  priceUsd: number
  priceDisplay: string
  annualCop: number
  annualDisplay: string
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
    paymentTerms: 'Compra · Pago único · 100% por adelantado',
    subscription: webSubscription(290000, 69000, 690000),
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
    description: 'Diseño una página web moderna y rápida para tu negocio, estructurada para que cualquier persona que entre desde su teléfono entienda tu oferta y te escriba directamente a WhatsApp.',
    priceCop: 1450000,
    priceUsd: calcUsd(1450000), // 439
    priceDisplay: `${formatCop(1450000)} / ${formatUsdRef(1450000)}`,
    paymentTerms: 'Compra · Pago único · 50% anticipo / 50% entrega',
    subscription: webSubscription(690000, 69000, 1450000),
    timeframe: 'Lista en 5 a 7 días',
    deliverables: [
      'Página web completa y adaptada 100% para teléfonos celulares',
      'Botón directo a tu WhatsApp para que te escriban con un solo toque',
      'Textos claros y persuasivos que explican por qué deben elegirte a ti',
      'Formulario fácil para recibir solicitudes de clientes en tu correo',
      'Tu nombre en internet (.com), seguridad SSL y puesta en marcha incluida',
      'En modalidad compra la web es 100% tuya desde la entrega; en suscripción, con opción de compra'
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
    description: 'Automatizo la atención y pre-calificación en tu WhatsApp. Da precios, resuelve dudas frecuentes, agenda citas y transfiere la conversación a tu equipo solo cuando hay un cliente listo para comprar.',
    priceCop: 490000,
    priceUsd: calcUsd(490000), // 148
    priceDisplay: `${formatCop(490000)} / ${formatUsdRef(490000)}`,
    paymentTerms: 'Instalación · 50% anticipo / 50% entrega',
    monthlyCop: 149000,
    monthlyDisplay: `+ ${formatCop(149000)} / mes`,
    monthlyNote: `Plan Crecimiento incluido desde la entrega: monitoreo, ajustes, consumo de IA y reporte mensual. ${COMMITMENT_NOTE}`,
    timeframe: 'Listo en 3 a 5 días',
    deliverables: [
      'Atención inmediata en WhatsApp en menos de 60 segundos día y noche',
      'Configuración y puesta en marcha completa',
      'Respuestas automáticas basadas únicamente en tu información aprobada',
      'Agenda citas directamente en tu Google Calendar sin cruzar mensajes',
      'Control y Escalamiento Humano: la conversación se transfiere a tu equipo en casos clave',
      'Filtro de curiosos y registro de prospectos ordenado en tu CRM o Sheets',
      'Capacitación en video y acompañamiento directo en la entrega',
      'Mensualidad incluida: monitoreo, ajuste de respuestas, consumo de IA con uso razonable y reporte mensual de resultados'
    ],
    notIncluded: [
      'No cubre los costos de uso de la API de WhatsApp (los paga el cliente directo al proveedor)'
    ],
    ctaText: 'Quiero mi Asistente WhatsApp',
    tags: ['WhatsApp 24/7', 'Escalamiento Humano', 'Menos de 60s', 'Cero Fugas']
  },
  {
    id: 'pack-crecimiento',
    index: '04',
    badge: '🔥 RECOMENDADO',
    popular: true,
    title: 'Pack Crecimiento Completo',
    subtitle: 'Tu web de ventas + tu asistente de WhatsApp integrados en un solo sprint',
    description: 'La combinación más rentable para tu negocio: una web moderna que atrae clientes desde Google y redes, conectada a un asistente inteligente que responde al instante y agenda citas 24/7.',
    priceCop: 1990000,
    priceUsd: calcUsd(1990000), // 603
    priceDisplay: `${formatCop(1990000)} / ${formatUsdRef(1990000)}`,
    paymentTerms: 'Ahorras $248.000 COP · 50% anticipo / 50% entrega',
    monthlyCop: 149000,
    monthlyDisplay: `+ ${formatCop(149000)} / mes desde el mes 3`,
    monthlyNote: 'Los 2 primeros meses del plan Crecimiento van incluidos y el mes 3 completa la permanencia mínima. Después, mes a mes.',
    timeframe: 'Listo en 7 días',
    deliverables: [
      'Página web completa pensada para vender adaptada 100% a celulares',
      'Asistente de WhatsApp 24/7 conectado a los botones de tu nueva web',
      '2 meses del plan Crecimiento incluidos (valor $298.000 COP): monitoreo, ajustes y reporte mensual',
      'Agendamiento automático de citas y respuestas a preguntas frecuentes',
      'Escalamiento inmediato a tu celular cuando un cliente solicita atención personal',
      'Dominio .com, seguridad SSL, base de datos y puesta en marcha lista para usar',
      'Ahorras $248.000 COP frente a contratar la web, la instalación del asistente y 2 meses de plan Crecimiento por separado'
    ],
    ctaText: 'Quiero el Pack Completo',
    tags: ['Web + IA WhatsApp', '2 Meses Incluidos', 'Ahorro $248k', 'Sprint 7 Días']
  }
]

// Planes que se muestran en la home; el resto se ofrece en "¿Necesitas algo más grande?"
export const HOME_PLAN_IDS = ['web-express', 'asistente-whatsapp', 'pack-crecimiento']

export const ENTRY_SETUP_COP = Math.min(
  ...MAIN_PLANS.map((plan) => plan.subscription?.setupCop ?? plan.priceCop)
)

export const ANNUAL_NOTE = 'Paga el año completo y recibe 2 meses gratis (10 meses de 12).'

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: 'esencial',
    name: 'Esencial',
    highlight: false,
    priceCop: 69000,
    priceUsd: calcUsd(69000), // 21
    priceDisplay: `${formatCop(69000)} / ${formatUsdRef(69000)}/mes`,
    annualCop: 690000,
    annualDisplay: `${formatCop(690000)} al año`,
    description: 'Tu web siempre al día y segura, sin preocuparte por lo técnico.',
    features: [
      'Mantenimiento técnico y cambios menores de textos, imágenes y enlaces',
      'Monitoreo de disponibilidad y certificado SSL',
      'Soporte por correo y WhatsApp',
      'En web por suscripción: hosting y renovación de dominio incluidos'
    ],
    note: `Opcional si compraste tu web (sin permanencia). Obligatorio en web por suscripción: ${COMMITMENT_NOTE}`
  },
  {
    id: 'crecimiento',
    name: 'Crecimiento',
    highlight: true,
    priceCop: 149000,
    priceUsd: calcUsd(149000), // 45
    priceDisplay: `${formatCop(149000)} / ${formatUsdRef(149000)}/mes`,
    annualCop: 1490000,
    annualDisplay: `${formatCop(1490000)} al año`,
    description: 'Tu asistente de WhatsApp funcionando y mejorando cada mes, con resultados a la vista.',
    features: [
      'Todo lo del plan Esencial',
      'Asistente de WhatsApp monitoreado y ajuste de respuestas',
      'Consumo del modelo de IA incluido con uso razonable',
      'Reporte mensual: consultas atendidas y citas agendadas',
      'Soporte prioritario por WhatsApp'
    ],
    note: `Incluido en el Asistente de WhatsApp. ${COMMITMENT_NOTE}`
  },
  {
    id: 'pro',
    name: 'Pro',
    highlight: false,
    priceCop: 349000,
    priceUsd: calcUsd(349000), // 106
    priceDisplay: `${formatCop(349000)} / ${formatUsdRef(349000)}/mes`,
    annualCop: 3490000,
    annualDisplay: `${formatCop(3490000)} al año`,
    description: 'Para negocios que quieren seguir mejorando: más automatización y acompañamiento.',
    features: [
      'Todo lo del plan Crecimiento',
      '1 mejora o flujo nuevo cada mes',
      'Campañas de reactivación de clientes por WhatsApp',
      'Revisión mensual de resultados contigo (30 min)'
    ],
    note: COMMITMENT_NOTE
  }
]

export const CUSTOM_AUDIT = {
  title: 'Auditoría de Procesos',
  priceCop: 200000,
  priceUsd: calcUsd(200000), // 61
  priceDisplay: `${formatCop(200000)} / ${formatUsdRef(200000)}`,
  description: 'Antes de construir, entiendo cómo trabaja tu equipo y dónde se pierde el tiempo. Si decides avanzar con el proyecto, el valor de la auditoría se descuenta del total.',
  deliverables: [
    'Mapa de tus procesos y flujos actuales',
    'Detección de tareas manuales y cuellos de botella',
    'Alcance priorizado, plan de entregas y presupuesto cerrado'
  ]
}

export const CUSTOM_SYSTEM = {
  title: 'Sistema a Medida & CRM',
  priceCop: 2800000,
  priceUsd: calcUsd(2800000), // 848
  priceDisplay: `Desde ${formatCop(2800000)} / ${formatUsdRef(2800000)}`,
  description: 'Desarrollo e integración de flujos con n8n, pasarelas locales (Wompi, PSE, Stripe), portales privados y automatización de operaciones complejas. Presupuesto cerrado según tus requerimientos.',
  deliverables: [
    'Primera versión funcionando en semanas, no en meses',
    'Reuniones de avance y ajustes durante el desarrollo',
    'Integración con tus herramientas actuales y pasarelas de pago'
  ]
}
