export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  demo: string
  code: string
  stream: boolean
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

export const projects: Project[] = [
  // ── Aplicaciones Web ─────────────────────────────────────────────────────
  {
    id: 1,
    title: 'NexoBite',
    description: 'Sitio web corporativo de NexoBite con widget de chat y captura de leads a través de webhooks de n8n',
    image: '/placeholder.svg',
    category: 'Aplicaciones Web',
    tags: ['Next.js', 'n8n', 'TypeScript'],
    demo: 'https://nexobite.com',
    code: 'https://github.com/isjuandev/nexobite',
    stream: false
  },
  {
    id: 2,
    title: 'EA-RIF',
    description: 'Aplicación web para la gestión de RIF y documentos electrónicos',
    image: '/placeholder.svg',
    category: 'Aplicaciones Web',
    tags: ['Next.js', 'TypeScript'],
    demo: 'https://ea-rif.vercel.app',
    code: 'https://github.com/isjuandev/ea-rif',
    stream: false
  },
  {
    id: 3,
    title: 'ViralyShop',
    description: 'E-commerce moderno y escalable construido con el stack de Next.js',
    image: '/placeholder.svg',
    category: 'Aplicaciones Web',
    tags: ['Next.js', 'TypeScript', 'E-commerce'],
    demo: 'https://viralyshop.vercel.app',
    code: 'https://github.com/isjuandev/viralyshop',
    stream: false
  },
  {
    id: 4,
    title: 'Residente',
    description: 'Web app para gestión de comunidades y condominios',
    image: '/placeholder.svg',
    category: 'Aplicaciones Web',
    tags: ['Next.js', 'TypeScript'],
    demo: 'https://residente-web.vercel.app',
    code: 'https://github.com/isjuandev/residente',
    stream: false
  },
  {
    id: 5,
    title: 'CRM NexoBite (Frontend)',
    description: 'Frontend del sistema CRM de NexoBite para gestión de clientes y ventas',
    image: '/placeholder.svg',
    category: 'Aplicaciones Web',
    tags: ['Next.js', 'CRM', 'TypeScript'],
    demo: 'https://crm-front-nexobite.vercel.app',
    code: 'https://github.com/isjuandev/crm-front-nexobite',
    stream: false
  },
  {
    id: 6,
    title: 'IEJMO',
    description: 'Aplicación web institucional',
    image: '/placeholder.svg',
    category: 'Aplicaciones Web',
    tags: ['Next.js', 'TypeScript'],
    demo: 'https://iejmo.vercel.app',
    code: 'https://github.com/isjuandev/iejmo',
    stream: false
  },
  {
    id: 7,
    title: 'isjuandev-portafolio',
    description: 'Portafolio personal desarrollado con React y Vite',
    image: '/placeholder.svg',
    category: 'Aplicaciones Web',
    tags: ['React', 'Vite', 'TypeScript'],
    demo: '#',
    code: 'https://github.com/isjuandev/isjuandev-portafolio',
    stream: false
  },

  // ── Backend / APIs ───────────────────────────────────────────────────────
  {
    id: 8,
    title: 'NexoBite · Menu Digital',
    description: 'Backend multi-tenant para pedidos de restaurantes con resolución de tenant por host HTTP y generación de QRs por mesa (NestJS + TypeORM + PostgreSQL)',
    image: '/placeholder.svg',
    category: 'Backend / APIs',
    tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'Multi-tenant'],
    demo: '#',
    code: 'https://github.com/isjuandev/menu-digital',
    stream: false
  },
  {
    id: 9,
    title: 'NanoBank Ledger',
    description: 'Gestión de billeteras y transacciones personales con backend Spring Boot + JWT, frontend Angular y PostgreSQL',
    image: '/placeholder.svg',
    category: 'Backend / APIs',
    tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'JWT'],
    demo: '#',
    code: 'https://github.com/isjuandev/nanobank-ledger',
    stream: false
  },
  {
    id: 10,
    title: 'CRM NexoBite (Backend)',
    description: 'API del sistema CRM de NexoBite',
    image: '/placeholder.svg',
    category: 'Backend / APIs',
    tags: ['Node.js', 'API', 'JavaScript'],
    demo: '#',
    code: 'https://github.com/isjuandev/crm-back-nexobite',
    stream: false
  },
  {
    id: 11,
    title: 'Coderland · MarcasAutos',
    description: 'API REST .NET Core 8 con arquitectura hexagonal, Entity Framework Core, PostgreSQL y Docker',
    image: '/placeholder.svg',
    category: 'Backend / APIs',
    tags: ['.NET Core', 'EF Core', 'PostgreSQL', 'Docker'],
    demo: '#',
    code: 'https://github.com/isjuandev/Coderland-MarcasAutos',
    stream: false
  },
  {
    id: 12,
    title: 'MW2019',
    description: 'Proyecto de bajo nivel desarrollado en C++',
    image: '/placeholder.svg',
    category: 'Backend / APIs',
    tags: ['C++'],
    demo: '#',
    code: 'https://github.com/isjuandev/MW2019',
    stream: false
  },

  // ── Aplicaciones Móviles ─────────────────────────────────────────────────
  {
    id: 13,
    title: 'Amazon Tracker',
    description: 'App móvil Flutter para rastrear precios de productos de Amazon con diseño iOS, sincronización con Supabase y notificaciones push (FCM)',
    image: '/placeholder.svg',
    category: 'Aplicaciones Móviles',
    tags: ['Flutter', 'Supabase', 'Firebase', 'Dart'],
    demo: '#',
    code: 'https://github.com/isjuandev/Amazon-Tracker',
    stream: false
  },
  {
    id: 14,
    title: 'ToDo BLoC',
    description: 'App de gestión de tareas en Flutter con patrón BLoC, CRUD completo, temas claro/oscuro y persistencia en Firestore',
    image: '/placeholder.svg',
    category: 'Aplicaciones Móviles',
    tags: ['Flutter', 'BLoC', 'Firestore', 'Dart'],
    demo: '#',
    code: 'https://github.com/isjuandev/ToDo-BLoC',
    stream: false
  },
  {
    id: 15,
    title: 'WhatsApp UI Flutter',
    description: 'Clon de la interfaz de WhatsApp construido en Flutter',
    image: '/placeholder.svg',
    category: 'Aplicaciones Móviles',
    tags: ['Flutter', 'UI', 'Dart'],
    demo: '#',
    code: 'https://github.com/isjuandev/WhatsApp-IU-Flutter',
    stream: false
  },
  {
    id: 16,
    title: 'Coderland Tasks App',
    description: 'App de gestión de tareas en React Native con Expo Router, Redux y tests unitarios',
    image: '/placeholder.svg',
    category: 'Aplicaciones Móviles',
    tags: ['React Native', 'Expo', 'TypeScript'],
    demo: '#',
    code: 'https://github.com/isjuandev/Coderland-ReactNative',
    stream: false
  },

  // ── Experimentos ─────────────────────────────────────────────────────────
  {
    id: 17,
    title: 'FocusMind Landing',
    description: 'Landing de validación (smoke test) con métricas en tiempo real usando Vercel KV (Redis) y Edge Runtime',
    image: '/placeholder.svg',
    category: 'Experimentos',
    tags: ['Next.js', 'Redis', 'Edge', 'Experimento'],
    demo: 'https://focusmind-eight.vercel.app',
    code: 'https://github.com/isjuandev/focusmind',
    stream: false
  },

  // ── Pruebas Técnicas ─────────────────────────────────────────────────────
  {
    id: 18,
    title: 'Loto-Back',
    description: 'Prueba de desarrollo para la vacante Senior Full Stack — backend en C#',
    image: '/placeholder.svg',
    category: 'Pruebas Técnicas',
    tags: ['C#', '.NET', 'Prueba Técnica'],
    demo: '#',
    code: 'https://github.com/isjuandev/Loto-Back',
    stream: false
  },
  {
    id: 19,
    title: 'Loto-Front',
    description: 'Prueba de desarrollo para la vacante Senior Full Stack — frontend en JavaScript',
    image: '/placeholder.svg',
    category: 'Pruebas Técnicas',
    tags: ['JavaScript', 'Frontend', 'Prueba Técnica'],
    demo: '#',
    code: 'https://github.com/isjuandev/Loto-Front',
    stream: false
  },

  // ── Código Abierto ───────────────────────────────────────────────────────
  {
    id: 20,
    title: 'Programacion3-MarketPlace',
    description: 'Red de vendedores: marketplace académico desarrollado en Java',
    image: '/placeholder.svg',
    category: 'Código Abierto',
    tags: ['Java', 'Marketplace', 'Académico'],
    demo: '#',
    code: 'https://github.com/isjuandev/Programacion3-MarketPlace',
    stream: false
  },
  {
    id: 21,
    title: 'Portafolio',
    description: 'Portafolio de trabajos y proyectos en HTML',
    image: '/placeholder.svg',
    category: 'Código Abierto',
    tags: ['HTML', 'CSS', 'Portafolio'],
    demo: '#',
    code: 'https://github.com/isjuandev/Portafolio',
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
