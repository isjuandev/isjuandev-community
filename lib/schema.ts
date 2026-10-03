import { MAIN_PLANS, CUSTOM_SYSTEM, OPTIONAL_ADDONS } from '@/lib/data/pricing'
import { faqs } from '@/lib/data/content'

export const SITE_URL = 'https://www.isjuandev.com'

export interface StructuredDataGraph {
  '@context': 'https://schema.org'
  '@graph': Array<Record<string, unknown>>
}

export function getRootJsonLd(): StructuredDataGraph {
  const servicePlans = [
    {
      id: 'service-web-express',
      name: 'Web Express',
      serviceType: 'Diseño de páginas web',
      description: 'Página única de alto impacto basada en una estructura probada para tu nicho. Optimizada para celulares, lista para captar clientes directo a tu WhatsApp y correo.',
      price: 690000,
    },
    {
      id: 'service-web-completa',
      name: 'Tu Nueva Web para Vender',
      serviceType: 'Diseño de páginas web',
      description: 'Diseñamos una página web moderna y rápida para tu negocio, estructurada para que cualquier persona que entre desde su teléfono entienda tu oferta y te escriba directamente a WhatsApp.',
      price: 1450000,
    },
    {
      id: 'service-asistente-whatsapp',
      name: 'Asistente Automático de WhatsApp',
      serviceType: 'Asistente de WhatsApp con IA',
      description: 'Automatizamos la atención y pre-calificación en tu WhatsApp. Da precios, resuelve dudas frecuentes, agenda citas y transfiere la conversación a tu equipo solo cuando hay un cliente listo para comprar.',
      price: 790000,
    },
    {
      id: 'service-pack-crecimiento',
      name: 'Pack Crecimiento Completo',
      serviceType: 'Páginas web y Asistente de WhatsApp con IA',
      description: 'La combinación más rentable para tu negocio: una web moderna que atrae clientes desde Google y redes, conectada a un asistente inteligente que responde al instante y agenda citas 24/7.',
      price: 1990000,
    },
  ]

  const serviceNodes = servicePlans.map((plan) => ({
    '@type': 'Service',
    '@id': `${SITE_URL}/#${plan.id}`,
    name: plan.name,
    serviceType: plan.serviceType,
    description: plan.description,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      price: plan.price,
      priceCurrency: 'COP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: plan.price,
        priceCurrency: 'COP',
        valueAddedTaxIncluded: true,
      },
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#servicios`,
    },
  }))

  const faqNode = {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const websiteNode = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'IsJuanDev',
    description: 'Páginas web de alta conversión y asistentes de WhatsApp con automatización e inteligencia artificial.',
    inLanguage: 'es-CO',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  }

  const organizationNode = {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'IsJuanDev',
    url: SITE_URL,
    logo: `${SITE_URL}/profile.png`,
    image: `${SITE_URL}/opengraph-image`,
    description: 'Consultoría y desarrollo de páginas web de alta conversión, asistentes automáticos de WhatsApp y flujos de automatización con inteligencia artificial.',
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
          price: plan.priceCop,
          priceCurrency: 'COP',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/#servicios`,
        })),
        {
          '@type': 'Offer',
          name: CUSTOM_SYSTEM.title,
          description: CUSTOM_SYSTEM.description,
          price: CUSTOM_SYSTEM.priceCop,
          priceCurrency: 'COP',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/#servicios`,
        },
        ...OPTIONAL_ADDONS.map((addon) => ({
          '@type': 'Offer',
          name: `${addon.name} (Complemento opcional)`,
          description: addon.description,
          price: addon.priceCop,
          priceCurrency: 'COP',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/#servicios`,
        })),
      ],
    },
    sameAs: [
      'https://github.com/isjuandev',
      'https://kick.com/isjuandev',
      'https://instagram.com/isjuandev',
      'https://tiktok.com/@isjuandev',
    ],
  }

  const personNode = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    url: SITE_URL,
    name: 'Juan Diego García Castaño',
    alternateName: 'IsJuanDev',
    jobTitle: 'Consultor de Automatizaciones IA & Desarrollador Web FullStack',
    description: 'Ingeniero de software especializado en diseño de páginas web de alta conversión, asistentes de WhatsApp con IA y automatizaciones con n8n.',
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
      'Sistemas CRM',
    ],
    sameAs: [
      'https://github.com/isjuandev',
      'https://kick.com/isjuandev',
      'https://instagram.com/isjuandev',
      'https://tiktok.com/@isjuandev',
    ],
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      websiteNode,
      organizationNode,
      personNode,
      ...serviceNodes,
      faqNode,
    ],
  }
}
