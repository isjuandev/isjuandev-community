export interface Project {
  id: number
  title: string
  subtitle?: string
  description: string
  image: string
  category: string
  tags: string[]
  demo: string
  code: string
  stream: boolean
  role?: string
  status?: string
}

import { MAIN_PLANS, HOME_PLAN_IDS, formatCop, formatPriceString } from '@/lib/data/pricing'

export interface Solution {
  index: string
  badge: string
  title: string
  subtitle: string
  description: string
  deliverables: string[]
  notIncluded?: string[]
  timeframe: string
  price: string
  priceNote?: string
  monthlyDisplay?: string
  monthlyNote?: string
  purchaseDisplay?: string
  ctaText?: string
  popular?: boolean
  tags: string[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  tags: string[]
  readTime: number
  date: string
  featured: boolean
  body: string
}

export interface Tip {
  id: number
  title: string
  description: string
  category: string
  code: string | null
}

// En webs con suscripción, el precio de entrada (instalación + mensualidad) va primero y la compra queda como alternativa
export const businessSolutions: Solution[] = MAIN_PLANS.filter((plan) => HOME_PLAN_IDS.includes(plan.id)).map((plan) => ({
  index: plan.index,
  badge: plan.badge,
  popular: plan.popular,
  title: plan.title,
  subtitle: plan.subtitle,
  description: plan.description,
  deliverables: plan.deliverables,
  notIncluded: plan.notIncluded,
  timeframe: plan.timeframe,
  price: plan.subscription ? formatPriceString(plan.subscription.setupCop) : plan.priceDisplay,
  priceNote: plan.paymentTerms,
  monthlyDisplay: plan.subscription ? `+ ${formatCop(plan.subscription.monthlyCop)} / mes` : plan.monthlyDisplay,
  monthlyNote: plan.subscription ? plan.subscription.note : plan.monthlyNote,
  purchaseDisplay: plan.subscription ? `o cómprala por ${formatCop(plan.priceCop)} (pago único)` : undefined,
  ctaText: plan.ctaText,
  tags: plan.tags,
}))

export const faqs: FAQItem[] = [
  {
    question: '¿En cuánto tiempo estará lista mi web o automatización?',
    answer: 'Trabajo en sprints cortos con plazo cerrado. La Web Express toma de 2 a 3 días hábiles. Un Asistente de WhatsApp toma entre 3 y 5 días hábiles. Tu Nueva Web para Vender toma entre 5 y 7 días hábiles, y el Pack Crecimiento Completo 7 días. Sin reuniones eternas ni meses de espera.'
  },
  {
    question: '¿Necesito saber de programación o tecnología para administrarlo?',
    answer: 'Para nada. Todas las soluciones están diseñadas para que el dueño de negocio o su equipo puedan gestionarlas fácilmente (Notion, Google Calendar, WhatsApp). Al finalizar hacemos una sesión de entrega y te dejo videos cortos de uso.'
  },
  {
    question: '¿Cómo funciona el esquema de pago?',
    answer: 'Todo funciona con instalación + mensualidad. La instalación de Web Express se paga 100% por adelantado; la de Tu Nueva Web, el Asistente de WhatsApp y el Pack Crecimiento, 50% de anticipo para apartar la fecha y 50% cuando todo esté funcionando en producción. Las mensualidades son Esencial $69.000, Crecimiento $149.000 y Pro $349.000 COP. El asistente, la web por suscripción y el plan Pro tienen permanencia mínima de 3 meses; después siguen mes a mes y cancelas avisando antes del siguiente ciclo. Si compraste tu web, el plan Esencial es opcional y sin permanencia. Si pagas el año completo, recibes 2 meses gratis. Pagas por transferencia o con un enlace de pago que te envío cada mes; no hay débito automático.'
  },
  {
    question: '¿Qué pasa si me atraso con la mensualidad?',
    answer: 'Te escribo antes de la fecha de corte con los datos para pagar. Si pasan 5 días sin pago, pauso el asistente y el soporte (tu web y tu código siguen siendo tuyos). Cuando pagues, lo reactivo al siguiente día hábil. El plan anual se paga por adelantado y no tiene reembolso por meses no usados.'
  },
  {
    question: '¿Por qué el asistente de WhatsApp tiene una mensualidad?',
    answer: 'Porque un asistente no se instala y se olvida: hay que monitorearlo, ajustar las respuestas cuando cambian tus precios o servicios, cubrir el consumo del modelo de IA y revisar los resultados cada mes. Por eso la instalación es más baja ($490.000 COP) y el plan Crecimiento ($149.000 COP al mes) va incluido, con permanencia mínima de 3 meses. Después puedes cancelarlo avisando antes del siguiente ciclo y te entrego la exportación de tus prospectos.'
  },
  {
    question: '¿Compro mi web o la tomo en suscripción?',
    answer: 'Tú eliges. En compra pagas una sola vez (Web Express $690.000 o Tu Nueva Web $1.450.000 COP) y la web es tuya desde la entrega; el plan Esencial es opcional. En suscripción pagas una instalación más baja (Web Express $290.000 o Tu Nueva Web $690.000 COP) más el plan Esencial de $69.000 COP al mes, que incluye hosting y renovación de dominio, con permanencia mínima de 3 meses. Además tienes opción de compra: cuando lo que has pagado llega al precio de compra, la web pasa a ser tuya, o puedes adelantarlo pagando la diferencia. Si cancelas sin comprarla, la web se despublica y conservas tu dominio, textos y fotos.'
  },
  {
    question: '¿Qué pasa si ya tengo un sitio web en WordPress, Wix o Shopify?',
    answer: 'Puedo revisar tu sitio actual y conectar el asistente de WhatsApp o los flujos de automatización de n8n sin tocar tu web. Si tu web actual es lenta o no te genera mensajes, puedo rehacerla como una página rápida en Next.js.'
  },
  {
    question: '¿Por qué trabajar contigo en lugar de una agencia tradicional?',
    answer: 'En una agencia tradicional pagas por intermediarios, gerentes de cuenta y reuniones innecesarias. Conmigo hablas y trabajas directamente con un ingeniero con más de 8 años de experiencia: respuestas rápidas, código limpio y foco en que la inversión se recupere.'
  }
]

export const projects: Project[] = [
  // ── Soluciones de Alto Impacto ─────────────────────────────────────────────
  {
    id: 1,
    title: 'NexoBite',
    subtitle: 'Chatbots con IA y automatización de ventas en WhatsApp',
    description: 'Ecosistema de atención comercial y chatbots con IA para WhatsApp. Diseñado para responder consultas en segundos, filtrar clientes calificados y agendar citas o pedidos automáticamente sin intervención manual.',
    image: '/proyectos/nexobite.png',
    category: 'Automatizaciones con IA',
    tags: ['Next.js 16', 'n8n', 'WhatsApp API', 'DeepSeek', 'TypeScript'],
    demo: 'https://nexobite.com',
    code: 'https://github.com/isjuandev/nexobite',
    stream: false,
    role: 'Arquitectura & FullStack',
    status: 'Producción'
  },
  {
    id: 2,
    title: 'Auditor Web Multimodal con IA',
    subtitle: 'Diagnóstico visual y técnico para detección de fugas de conversión',
    description: 'Motor inteligente automatizado con n8n que toma capturas de pantalla de sitios web con Chromium headless, procesa el diseño visual con DeepSeek Vision y analiza elementos de conversión (WhatsApp, formularios, legibilidad móvil), generando un informe accionable en Notion y un guion de video en 30 segundos.',
    image: '/proyectos/generic.png',
    category: 'Automatizaciones con IA',
    tags: ['n8n', 'DeepSeek Vision', 'Browserless', 'Notion API'],
    demo: 'https://www.isjuandev.com/#auditoria',
    code: '#',
    stream: false,
    role: 'Lead Architect',
    status: 'Producción'
  },
  {
    id: 3,
    title: 'EA-RIF',
    subtitle: 'Plataforma de rifas digitales — Club Élite',
    description: 'Venta de entradas (números) de rifa digital: pago con MercadoPago o métodos manuales (WhatsApp, Nequi, Daviplata) y ganadores con la Lotería de Boyacá. Next.js + Supabase + Resend.',
    image: '/proyectos/eliteclub.png',
    category: 'Aplicaciones Web',
    tags: ['Next.js', 'TypeScript', 'MercadoPago', 'Supabase'],
    demo: 'https://ea-rif.vercel.app',
    code: 'https://github.com/isjuandev/ea-rif',
    stream: false,
    role: 'FullStack',
    status: 'Producción'
  },
  {
    id: 4,
    title: 'ViralyShop',
    subtitle: 'Landing de venta (funnel) para dropshipping',
    description: 'Landing de venta con pago contra entrega, carrito y secciones de conversión para dropshipping. React + Vite + shadcn.',
    image: '/proyectos/viralyshop.png',
    category: 'Aplicaciones Web',
    tags: ['React', 'Vite', 'shadcn', 'Funnel'],
    demo: 'https://viralyshop.vercel.app',
    code: 'https://github.com/isjuandev/viralyshop',
    stream: false,
    role: 'FullStack',
    status: 'Producción'
  },
  {
    id: 5,
    title: 'CRM NexoBite (Frontend)',
    subtitle: 'CRM para gestión comercial',
    description: 'Interfaz del sistema CRM de NexoBite para gestionar clientes, oportunidades y ventas.',
    image: '/proyectos/generic.png',
    category: 'Aplicaciones Web',
    tags: ['Next.js', 'TypeScript', 'CRM'],
    demo: 'https://crm-front-nexobite.vercel.app',
    code: 'https://github.com/isjuandev/crm-front-nexobite',
    stream: false,
    role: 'Frontend',
    status: 'Producción'
  },
  {
    id: 6,
    title: 'IEJMO',
    description: 'Sitio institucional del colegio Jesús María Ocampo (Armenia, Quindío): matrículas, PEI, SIEE, proyectos educativos, transparencia y PQRS. Next.js 16 + shadcn/ui.',
    image: '/proyectos/iejmo.png',
    category: 'Aplicaciones Web',
    tags: ['Next.js', 'TypeScript', 'shadcn/ui', 'SEO'],
    demo: 'https://iejmo.vercel.app',
    code: 'https://github.com/isjuandev/iejmo',
    stream: false
  },

  // ── Backend / APIs ───────────────────────────────────────────────────────
  {
    id: 7,
    title: 'NexoBite · Menu Digital',
    description: 'Sistema de pedidos para restaurantes: backend multi-tenant con QRs por mesa y frontend público Astro SSR. NestJS + TypeORM + PostgreSQL.',
    image: '/proyectos/menudigital.png',
    category: 'Backend / APIs',
    tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'Astro'],
    demo: '#',
    code: 'https://github.com/isjuandev/menu-digital',
    stream: false
  },
  {
    id: 8,
    title: 'NanoBank Ledger',
    description: 'Gestión de billeteras y transacciones personales con Spring Boot + JWT, Angular y PostgreSQL.',
    image: '/proyectos/generic.png',
    category: 'Backend / APIs',
    tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'JWT'],
    demo: '#',
    code: 'https://github.com/isjuandev/nanobank-ledger',
    stream: false
  },
  {
    id: 9,
    title: 'CRM NexoBite (Backend)',
    description: 'API del sistema CRM de NexoBite',
    image: '/proyectos/generic.png',
    category: 'Backend / APIs',
    tags: ['Node.js', 'API', 'JavaScript'],
    demo: '#',
    code: 'https://github.com/isjuandev/crm-back-nexobite',
    stream: false
  },
  {
    id: 10,
    title: 'MW2019',
    description: 'Proyecto de bajo nivel desarrollado en C++',
    image: '/proyectos/generic.png',
    category: 'Backend / APIs',
    tags: ['C++'],
    demo: '#',
    code: 'https://github.com/isjuandev/MW2019',
    stream: false
  },

  // ── Aplicaciones Móviles ─────────────────────────────────────────────────
  {
    id: 11,
    title: 'Amazon Tracker',
    description: 'App Flutter para rastrear precios de Amazon con diseño iOS, sincronización con Supabase y notificaciones push (FCM).',
    image: '/proyectos/generic.png',
    category: 'Aplicaciones Móviles',
    tags: ['Flutter', 'Supabase', 'Firebase', 'Dart'],
    demo: '#',
    code: 'https://github.com/isjuandev/Amazon-Tracker',
    stream: false
  },
  {
    id: 12,
    title: 'ToDo BLoC',
    description: 'App de tareas en Flutter con patrón BLoC, CRUD completo, temas claro/oscuro y persistencia en Firestore.',
    image: '/proyectos/generic.png',
    category: 'Aplicaciones Móviles',
    tags: ['Flutter', 'BLoC', 'Firestore', 'Dart'],
    demo: '#',
    code: 'https://github.com/isjuandev/ToDo-BLoC',
    stream: false
  },
  {
    id: 13,
    title: 'WhatsApp UI Flutter',
    description: 'Clon de la interfaz de WhatsApp construido en Flutter',
    image: '/proyectos/generic.png',
    category: 'Aplicaciones Móviles',
    tags: ['Flutter', 'UI', 'Dart'],
    demo: '#',
    code: 'https://github.com/isjuandev/WhatsApp-IU-Flutter',
    stream: false
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'por-que-empece-a-hacer-stream',
    title: '¿Por qué empecé a hacer stream?',
    excerpt: 'Tenía miedo y muchas preguntas, no tenía equipo caro y tampoco sabía si alguien me iba a ver. Aun así le di al botón de "empezar directo". Esto es lo que pasó.',
    image: 'https://images.unsplash.com/photo-1613160717888-faa82cdb8a94?q=80&w=1740&auto=format&fit=crop',
    category: 'Trayectoria Dev',
    tags: ['Comunidad', 'Streaming', 'Inicio'],
    readTime: 4,
    date: '2025-02-10',
    featured: true,
    body: `Al principio hacía streams porque me generaba mucho temor: la idea de crear contenido, ponerme frente a una cámara y hablar en público me daba nervios. Sabía que si quería crecer como creador y como desarrollador tenía que enfrentar eso, así que tomé la decisión de dejar el miedo atrás y comenzar.

  En vez de forzarme a hacer algo que no disfrutaba, la mejor idea fue empezar por lo que más me gustaba: combinar dos pasiones sencillas —jugar videojuegos y construir pequeñas aplicaciones— y hacerlo en público. Eso me permitió mantener la motivación, pasar un buen rato y, al mismo tiempo, hablar sobre lo que hacía sin sentir que estaba actuando.

  Hacer streaming de partidas y sesiones de código me dio un espacio seguro para practicar hablar en voz alta, explicar decisiones técnicas y recibir feedback inmediato. Poco a poco el miedo se volvió menos grande: empecé a ver el stream como un lugar para aprender, experimentar y conectar con personas que compartían intereses similares.

  Si te da miedo empezar, mi recomendación es similar: empieza pequeño, con lo que te hace feliz, y usa esa energía como combustible para aprender a comunicar. No necesitas un set perfecto —necesitas constancia y algo que realmente disfrutes mostrar.`
  },
  {
    id: 2,
    slug: 'de-junior-a-senior-lo-que-nadie-te-dice',
    title: 'De junior a senior: lo que nadie te dice',
    excerpt: 'Todos hablan de cuántos años de experiencia necesitas. Pero nadie habla de lo que realmente cambia cuando cruzas esa línea.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&q=80&auto=format&fit=crop',
    category: 'Trayectoria Dev',
    tags: ['Carrera', 'Aprendizaje', 'Crecimiento'],
    readTime: 5,
    date: '2025-01-28',
    featured: false,
    body: `Cuando me contrataron como junior tenía mucho miedo de equivocarme. Revisaba el código tres veces antes de hacer un commit. Pedía permiso a mis compañeros para tomar decisiones pequeñas.

Eso es normal. Pero lo que nadie te dice es que el salto a senior no es solo técnico.

El mayor cambio fue aprender a tomar decisiones sin tener toda la información. Como senior nadie te explica cada contexto, nadie te dice exactamente qué hacer. Tienes que leer la situación, proponer algo y hacerte responsable del resultado.

También cambió mucho cómo me comunico. Antes explicaba el código. Ahora explico el impacto. ¿Por qué hacemos esto? ¿Qué pasa si no lo hacemos? ¿Cuánto nos va a costar mantenerlo?

Y una cosa más que me tomó tiempo aceptar: ser senior no significa saber todo. Significa saber cómo encontrar lo que no sabes y cuándo pedirle ayuda a alguien más.

Si estás en ese camino, no te afanes por el título. Afánate por entender el problema antes de escribir la solución.`
  },
  {
    id: 3,
    slug: 'por-que-react-sigue-siendo-mi-opcion',
    title: '¿Por qué React sigue siendo mi opción?',
    excerpt: 'Cada semana aparece un nuevo framework que "va a reemplazar a React". Llevo años escuchando eso. Y sigo usando React. Te cuento por qué.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop',
    category: 'Reseñas Tech',
    tags: ['React', 'Frontend', 'Opinión'],
    readTime: 4,
    date: '2025-01-15',
    featured: false,
    body: `No es que React sea perfecto. Tiene sus cosas raras, su curva de aprendizaje inicial y sus debates eternos sobre cuándo usar useEffect.

Pero hay algo que React tiene que pocos frameworks logran: un ecosistema brutal y una comunidad enorme.

Cuando me atasco con algo en React, en diez minutos encuentro la respuesta. Hay ejemplos, hay librerías para todo lo que puedas imaginar y hay miles de personas que ya tuvieron el mismo problema que yo.

También valoro mucho que React no te impone una sola forma de hacer las cosas. Puedes usarlo para una app pequeña o para una plataforma gigante. Puedes combinarlo con Next.js si necesitas SSR, o dejarlo como SPA si con eso te alcanza.

¿Voy a cambiar algún día? Probablemente. La industria cambia y uno tiene que moverse con ella. Pero mientras React siga siendo la tecnología más demandada en el mercado y la que más proyectos reales mueve, no hay razón para abandonarlo solo porque algo nuevo está de moda.

Aprende React bien. Luego aprende lo que necesites.`
  }
]

export const tips: Tip[] = [
  {
    id: 1,
    title: 'Usa Atajos de Teclado',
    description: 'Domina los atajos de VS Code para 10x tu velocidad de programación',
    category: 'Productividad',
    code: null
  },
  {
    id: 2,
    title: 'Poder de Array.reduce()',
    description: 'Reduce es más versátil de lo que piensas',
    category: 'Fragmentos',
    code: `const sum = arr.reduce((acc, val) => acc + val, 0);`
  },
  {
    id: 3,
    title: 'Mensajes de Commit en Git',
    description: 'Usa commits convencionales para mejor historial de git',
    category: 'Buenas Prácticas',
    code: 'feat: add user authentication\nfix: resolve memory leak\ndocs: update API docs'
  },
  {
    id: 4,
    title: 'Chrome DevTools',
    description: 'Usa console.table() para mejor debugging',
    category: 'Herramientas',
    code: `console.table([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]);`
  },
  {
    id: 5,
    title: 'CSS Grid Auto-Fit',
    description: 'Grids responsivos sin media queries',
    category: 'Fragmentos',
    code: `.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }`
  },
  {
    id: 6,
    title: 'Generador de Favicon',
    description: 'Usa realfavicongenerator.net para todas las plataformas',
    category: 'Recursos',
    code: null
  },
  {
    id: 7,
    title: 'Encadenamiento Opcional',
    description: 'Accede a propiedades de objetos anidados de forma segura',
    category: 'Fragmentos',
    code: `const value = obj?.nested?.property ?? 'default';`
  },
  {
    id: 8,
    title: 'Plantillas de README',
    description: 'Usa readme.so para documentación hermosa de proyectos',
    category: 'Recursos',
    code: null
  },
  {
    id: 9,
    title: 'Función Debounce',
    description: 'Optimiza inputs de búsqueda con debouncing',
    category: 'Fragmentos',
    code: `const debounce = (fn, delay) => {\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => fn(...args), delay);\n  };\n};`
  },
  {
    id: 10,
    title: 'Usa Lighthouse',
    description: 'Audita el rendimiento de tu sitio regularmente',
    category: 'Buenas Prácticas',
    code: null
  },
  {
    id: 11,
    title: 'Excalidraw',
    description: 'Dibuja diagramas de arquitectura con excalidraw.com',
    category: 'Herramientas',
    code: null
  },
  {
    id: 12,
    title: 'Error Boundaries',
    description: 'Siempre implementa error boundaries en React',
    category: 'Buenas Prácticas',
    code: `class ErrorBoundary extends React.Component {\n  componentDidCatch(error, info) {\n    logError(error, info);\n  }\n  render() {\n    return this.state.hasError ? <Fallback /> : this.props.children;\n  }\n}`
  }
]

export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number)
  return `${month}/${day}/${year}`
}
