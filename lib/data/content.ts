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
  title: string
  excerpt: string
  image: string
  category: string
  tags: string[]
  readTime: number
  date: string
  featured: boolean
}

export interface Tip {
  id: number
  title: string
  description: string
  category: string
  icon: string
  code: string | null
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Plataforma de Chat con IA',
    description: 'Aplicación de chat en tiempo real con respuestas impulsadas por IA y análisis de sentimientos',
    image: '/placeholder.svg',
    category: 'Aplicaciones Web',
    tags: ['React', 'Next.js', 'IA', 'WebSocket'],
    demo: '#',
    code: '#',
    stream: true
  },
  {
    id: 2,
    title: 'CLI de Herramientas Dev',
    description: 'Herramienta de línea de comandos para automatizar flujos de trabajo comunes de desarrollo',
    image: '/placeholder.svg',
    category: 'Herramientas',
    tags: ['Node.js', 'CLI', 'TypeScript'],
    demo: '#',
    code: '#',
    stream: true
  },
  {
    id: 3,
    title: 'Gestor de Fragmentos de Código',
    description: 'Interfaz hermosa para organizar y compartir fragmentos de código con resaltado de sintaxis',
    image: '/placeholder.svg',
    category: 'Código Abierto',
    tags: ['React', 'Firebase', 'Monaco Editor'],
    demo: '#',
    code: '#',
    stream: false
  },
  {
    id: 4,
    title: 'Plantilla de Portafolio 3D',
    description: 'Portafolio interactivo en 3D construido con Three.js y React Three Fiber',
    image: '/placeholder.svg',
    category: 'Experimentos',
    tags: ['Three.js', 'React', 'WebGL'],
    demo: '#',
    code: '#',
    stream: false
  },
  {
    id: 5,
    title: 'Dashboard de Stream',
    description: 'Panel de analíticas en tiempo real para rastrear métricas de stream y actividad del chat',
    image: '/placeholder.svg',
    category: 'Aplicaciones Web',
    tags: ['React', 'Charts', 'WebSocket'],
    demo: '#',
    code: '#',
    stream: false
  },
  {
    id: 6,
    title: 'Limitador de Tasa de API',
    description: 'Middleware para limitar peticiones de API con caché Redis',
    image: '/placeholder.svg',
    category: 'Código Abierto',
    tags: ['Node.js', 'Redis', 'Express'],
    demo: '#',
    code: '#',
    stream: false
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Construyendo una App de Chat en Tiempo Real con WebSockets',
    excerpt: 'Aprende cómo implementar comunicación en tiempo real en tus aplicaciones web usando tecnología WebSocket y manejar estados de conexión elegantemente.',
    image: '/placeholder.svg',
    category: 'Tutoriales',
    tags: ['WebSocket', 'React', 'Node.js'],
    readTime: 8,
    date: '2024-01-15',
    featured: true
  },
  {
    id: 2,
    title: 'Mi Trayectoria desde Bootcamp hasta Desarrollador Senior',
    excerpt: 'Una historia personal sobre aprender a programar, construir proyectos y crecer en la industria tech durante los últimos 5 años.',
    image: '/placeholder.svg',
    category: 'Trayectoria Dev',
    tags: ['Carrera', 'Aprendizaje'],
    readTime: 12,
    date: '2024-01-10',
    featured: false
  },
  {
    id: 3,
    title: 'Top 10 Extensiones de VS Code para 2024',
    excerpt: 'Aumenta tu productividad con estas extensiones esenciales de VS Code que todo desarrollador debería tener instaladas.',
    image: '/placeholder.svg',
    category: 'Reseñas Tech',
    tags: ['Herramientas', 'Productividad'],
    readTime: 5,
    date: '2024-01-05',
    featured: false
  },
  {
    id: 4,
    title: 'Destacados de la Comunidad: Proyectos Increíbles de Nuestro Discord',
    excerpt: 'Destacando proyectos increíbles construidos por miembros de nuestra comunidad y celebrando sus logros.',
    image: '/placeholder.svg',
    category: 'Actualizaciones',
    tags: ['Comunidad', 'Showcase'],
    readTime: 6,
    date: '2024-01-01',
    featured: false
  },
  {
    id: 5,
    title: 'Entendiendo React Server Components',
    excerpt: 'Inmersión profunda en React Server Components, cómo funcionan y cuándo usarlos en tus aplicaciones Next.js.',
    image: '/placeholder.svg',
    category: 'Tutoriales',
    tags: ['React', 'Next.js', 'Server Components'],
    readTime: 10,
    date: '2023-12-28',
    featured: false
  },
  {
    id: 6,
    title: 'Por Qué Cambié a Neovim',
    excerpt: 'Mi experiencia de transición de VS Code a Neovim y las ganancias de productividad que descubrí en el camino.',
    image: '/placeholder.svg',
    category: 'Reseñas Tech',
    tags: ['Editor', 'Vim', 'Productividad'],
    readTime: 7,
    date: '2023-12-20',
    featured: false
  },
  {
    id: 7,
    title: 'Construyendo en Público: Lecciones Aprendidas',
    excerpt: 'Lo que aprendí construyendo proyectos públicamente, interactuando con la comunidad y haciendo streaming de mi proceso de desarrollo.',
    image: '/placeholder.svg',
    category: 'Trayectoria Dev',
    tags: ['Comunidad', 'Aprendizaje', 'Streaming'],
    readTime: 9,
    date: '2023-12-15',
    featured: false
  },
  {
    id: 8,
    title: 'Consejos de TypeScript para Mejor Código',
    excerpt: 'Técnicas avanzadas de TypeScript para escribir código más mantenible y type-safe en tus proyectos.',
    image: '/placeholder.svg',
    category: 'Tutoriales',
    tags: ['TypeScript', 'Buenas Prácticas'],
    readTime: 11,
    date: '2023-12-10',
    featured: false
  }
]

export const tips: Tip[] = [
  {
    id: 1,
    title: 'Usa Atajos de Teclado',
    description: 'Domina los atajos de VS Code para 10x tu velocidad de programación',
    category: 'Productividad',
    icon: '⚡',
    code: null
  },
  {
    id: 2,
    title: 'Poder de Array.reduce()',
    description: 'Reduce es más versátil de lo que piensas',
    category: 'Fragmentos',
    icon: '🔥',
    code: `const sum = arr.reduce((acc, val) => acc + val, 0);`
  },
  {
    id: 3,
    title: 'Mensajes de Commit en Git',
    description: 'Usa commits convencionales para mejor historial de git',
    category: 'Buenas Prácticas',
    icon: '📝',
    code: 'feat: add user authentication\nfix: resolve memory leak\ndocs: update API docs'
  },
  {
    id: 4,
    title: 'Chrome DevTools',
    description: 'Usa console.table() para mejor debugging',
    category: 'Herramientas',
    icon: '🔧',
    code: `console.table([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]);`
  },
  {
    id: 5,
    title: 'CSS Grid Auto-Fit',
    description: 'Grids responsivos sin media queries',
    category: 'Fragmentos',
    icon: '🎨',
    code: `.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }`
  },
  {
    id: 6,
    title: 'Generador de Favicon',
    description: 'Usa realfavicongenerator.net para todas las plataformas',
    category: 'Recursos',
    icon: '🌐',
    code: null
  },
  {
    id: 7,
    title: 'Encadenamiento Opcional',
    description: 'Accede a propiedades de objetos anidados de forma segura',
    category: 'Fragmentos',
    icon: '🔗',
    code: `const value = obj?.nested?.property ?? 'default';`
  },
  {
    id: 8,
    title: 'Plantillas de README',
    description: 'Usa readme.so para documentación hermosa de proyectos',
    category: 'Recursos',
    icon: '📄',
    code: null
  },
  {
    id: 9,
    title: 'Función Debounce',
    description: 'Optimiza inputs de búsqueda con debouncing',
    category: 'Fragmentos',
    icon: '⏱️',
    code: `const debounce = (fn, delay) => {\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => fn(...args), delay);\n  };\n};`
  },
  {
    id: 10,
    title: 'Usa Lighthouse',
    description: 'Audita el rendimiento de tu sitio regularmente',
    category: 'Buenas Prácticas',
    icon: '💡',
    code: null
  },
  {
    id: 11,
    title: 'Excalidraw',
    description: 'Dibuja diagramas de arquitectura con excalidraw.com',
    category: 'Herramientas',
    icon: '✏️',
    code: null
  },
  {
    id: 12,
    title: 'Error Boundaries',
    description: 'Siempre implementa error boundaries en React',
    category: 'Buenas Prácticas',
    icon: '🛡️',
    code: `class ErrorBoundary extends React.Component {\n  componentDidCatch(error, info) {\n    logError(error, info);\n  }\n  render() {\n    return this.state.hasError ? <Fallback /> : this.props.children;\n  }\n}`
  }
]

export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number)
  return `${month}/${day}/${year}`
}
