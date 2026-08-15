# IsJuanDev | Dev Community Hub

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev)

Sitio web personal de **IsJuanDev** (Juan García): un hub de comunidad para desarrolladores donde se comparten **proyectos construidos en vivo (streaming)**, **artículos de blog** sobre la trayectoria dev y **consejos rápidos** de desarrollo.

> "Código, proyectos y comunidad"

---

## 🚀 Características

- **Inicio** — Hero con CTA a streams en Kick y acceso rápido a las secciones del sitio.
- **Sobre Mí** — Perfil profesional, estadísticas animadas (años de experiencia, proyectos, tecnologías), stack tecnológico, experiencia laboral y línea de tiempo de la trayectoria.
- **Proyectos** — Catálogo de proyectos con búsqueda, filtros por categoría, ordenamiento (recientes / hechos en stream / A-Z) y badges de "Hecho en Stream".
- **Blog** — Artículos con artículo destacado, búsqueda, filtro por categoría y orden por fecha. Rutas estáticas generadas por slug.
- **Consejos** — Tarjetas de consejos rápidos con fragmentos de código, botón "copiar" y expansión de código largo.
- **Contacto** — Formulario de contacto, newsletter, link a comunidad (Discord) y redes sociales (Kick, TikTok, Instagram).
- **Tema oscuro** — Paleta personalizada con azul cian, dorado y azul oscuro, con gradientes animados.

---

## 🛠️ Stack Tecnológico

| Área      | Tecnologías |
|-----------|-------------|
| Framework | Next.js 16 (App Router) · React 19 |
| Lenguaje  | TypeScript 5.7 |
| Estilos   | Tailwind CSS 3.4 · CSS variables (HSL) |
| UI        | shadcn/ui + Radix UI primitives · lucide-react |
| Fuentes   | Inter · JetBrains Mono (next/font) |
| Utilidades| clsx · tailwind-merge · class-variance-authority |
| Extras    | date-fns · next-themes · sonner · vaul · recharts (disponibles en `components/ui`) |

---

## 📁 Estructura del Proyecto

```
.
├── app/                          # App Router (rutas y layouts)
│   ├── layout.tsx                # Root layout + metadata + fuentes
│   ├── globals.css               # Variables de tema (paleta azul/dorado) y animaciones
│   ├── page.tsx                  # Home / Hero
│   ├── about/page.tsx            # Perfil, stats, stack, experiencia, timeline
│   ├── projects/page.tsx         # Catálogo de proyectos con filtros
│   ├── blog/page.tsx             # Listado de artículos
│   ├── blog/[slug]/page.tsx      # Artículo individual (SSG + metadata)
│   ├── tips/page.tsx             # Consejos con snippets y copy
│   └── contact/page.tsx          # Formulario, newsletter y redes
│
├── components/
│   ├── navigation.tsx            # Navbar fija, responsiva, estado activo
│   ├── social-button.tsx         # Botones de redes (Kick, TikTok, Instagram)
│   ├── theme-provider.tsx        # Wrapper de next-themes
│   └── ui/                       # Componentes shadcn/ui (50+)
│
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/
│   ├── utils.ts                  # utilidad cn() (clsx + tailwind-merge)
│   └── data/
│       └── content.ts            # Datos: proyectos, posts de blog y tips (single source of truth)
│
├── public/
│   ├── profile.jpg               # Foto de perfil
│   ├── placeholder.svg
│   └── CV_JuanDiegoGarcia.pdf
│
├── styles/globals.css
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── tsconfig.json                 # Alias @/* → ./*
```

---

## 🚦 Requisitos

- Node.js 18+ (recomendado 20+)
- pnpm (recomendado) o npm

---

## ⚙️ Instalación y Uso

```bash
# 1. Instalar dependencias
pnpm install
# o
npm install

# 2. Iniciar servidor de desarrollo
pnpm dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts disponibles

| Comando         | Descripción                            |
|-----------------|----------------------------------------|
| `pnpm dev`      | Servidor de desarrollo con hot reload  |
| `pnpm build`    | Build de producción                    |
| `pnpm start`    | Servir el build de producción          |
| `pnpm lint`     | Ejecutar ESLint sobre el proyecto      |

---

## ✍️ Añadir Contenido

Todo el contenido vive en **`lib/data/content.ts`** (un solo archivo, sin CMS ni base de datos):

- **Proyectos** → arreglo `projects` (título, descripción, categoría, tags, links demo/código, flag `stream`).
- **Blog** → arreglo `blogPosts` (slug, título, excerpt, imagen, categoría, tags, tiempo de lectura, fecha, flag `featured` y cuerpo en markdown plano). El slug se usa automáticamente para generar la ruta `/blog/[slug]`.
- **Consejos** → arreglo `tips` (título, descripción, categoría, emoji y snippet de código opcional).

> 💡 **Tip:** para un nuevo post de blog solo agrega un objeto a `blogPosts` con un `slug` único; la página se generará estáticamente sin tocar ningún otro archivo.

---

## 🎨 Tema y Estilos

- Paleta definida con variables CSS en HSL en `app/globals.css`.
- Colores principales: **azul cian** (`--primary`), **dorado** (`--secondary`) y **azul suave** (`--accent`) sobre fondo azul muy oscuro.
- Fuentes: **Inter** (sans) y **JetBrains Mono** (mono) cargadas con `next/font`.
- Animaciones personalizadas: `animate-gradient` (gradiente animado) y `animate-float`.

---

## 🧱 Arquitectura y Decisiones

- **App Router** de Next.js con Server Components por defecto; páginas interactivas (about, projects, blog, tips) marcadas como `'use client'` cuando usan estado.
- **Generación estática (SSG):** `/blog/[slug]` usa `generateStaticParams` + `generateMetadata` para SEO por artículo.
- **shadcn/ui:** componentes bajo `components/ui` (accordion, dialog, sheet, sidebar, etc.) generados con el CLI de shadcn, listos para usar.
- **Contenido desacoplado:** la UI lee de `lib/data/content.ts`, lo que facilita migrar a un CMS (Sanity, Contentlayer, etc.) o a un backend en el futuro.

---

## 🔗 Redes y Comunidad

- **Streaming:** [Kick — @isjuandev](https://kick.com/isjuandev)
- **TikTok:** [@isjuandev](https://tiktok.com/@isjuandev)
- **Instagram:** [@isjuandev](https://instagram.com/isjuandev)
- **GitHub:** [github.com/isjuandev](https://github.com/isjuandev)

---

## 📄 Licencia

© 2024 IsJuanDev. Proyecto personal. Si usas alguna parte del código o el diseño como referencia, un crédito es bienvenido.