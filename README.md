# IsJuanDev | Webs de Alta Conversión & Asistentes de WhatsApp con IA

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev)

Sitio comercial de **Juan Diego García Castaño (IsJuanDev)**, desarrollador FullStack y consultor de automatizaciones con IA en Colombia. Producción: **https://www.isjuandev.com**

El sitio funciona como embudo de ventas: presenta la oferta (páginas web y asistentes de WhatsApp con IA), ofrece una **auditoría gratuita de 90 segundos** como gancho y dirige todo el tráfico hacia **WhatsApp**. Además mantiene secciones de credibilidad (proyectos, blog, tips y comunidad en Kick).

---

## 🧩 Qué ofrece el sitio

Modelo **instalación + mensualidad**: cada servicio tiene un pago de instalación y una mensualidad.

| Plan | Instalación (COP) | Mensualidad (COP) | Plazo | Pago instalación |
|---|---|---|---|---|
| Web Express — compra | $750.000 (incluye dominio .com y hosting el 1.er año) | Esencial $69.000 opcional | 2–3 días | 100% por adelantado |
| Web Express — suscripción | $290.000 | Esencial $69.000 obligatorio (hosting + dominio) | 2–3 días | 100% por adelantado |
| Tu Nueva Web para Vender — compra | $1.450.000 | Esencial $69.000 opcional | 5–7 días | 50% / 50% |
| Tu Nueva Web para Vender — suscripción | $690.000 | Esencial $69.000 obligatorio (hosting + dominio) | 5–7 días | 50% / 50% |
| Asistente Automático de WhatsApp | $490.000 | Crecimiento $149.000 | 3–5 días | 50% / 50% |
| Pack Crecimiento Completo (web + asistente) | $1.990.000 | Crecimiento $149.000 desde el mes 3 | 7 días | 50% / 50% |
| Sistemas a Medida & CRM (n8n, Wompi, PSE, Stripe) | desde $2.800.000 | — | cotización cerrada | — |

Planes mensuales: **Esencial** $69.000, **Crecimiento** $149.000, **Pro** $349.000 (anual = 10 de 12 meses). El asistente, la web por suscripción y Pro tienen **permanencia mínima de 3 meses**; después, mes a mes. La web por suscripción tiene **opción de compra**: pasa a ser del cliente cuando lo pagado alcanza el precio de compra. El cobro es en COP; el USD es solo referencial (tasa 3.300 COP/USD).

> Fuente única de precios: `lib/data/pricing.ts`. La home, el JSON-LD y `public/llms.txt` deben mantenerse alineados con ese archivo.

---

## 🗺️ Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home: hero con mockup de WhatsApp, auditoría 90s, servicios y precios, proceso, diferenciales, testimonios (apagados), FAQ, ecosistema y contacto |
| `/about` | Perfil, estadísticas, stack, experiencia y trayectoria |
| `/projects` | Archivo de proyectos con búsqueda, filtros y ordenamiento |
| `/blog`, `/blog/[slug]` | Artículos (SSG + metadata + imagen OG dinámica por post) |
| `/tips` | Consejos rápidos con snippets copiables |
| `/contact` | Formulario, newsletter y redes |
| `/comunidad` | Comunidad y streams |
| `/privacidad`, `/terminos` | Páginas legales |
| `/servicios/*` | Páginas de detalle por servicio (`paginas-web`, `asistente-whatsapp-ia`, `automatizacion-n8n`, `sistemas-a-medida`). **Borradores con `noindex`**, fuera del sitemap |

SEO y descubrimiento: `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/opengraph-image.tsx`, JSON-LD (`lib/schema.ts`: Organization, Service/Offer, FAQ), canónico en `www` y `public/llms.txt` para buscadores de IA.

---

## 🛠️ Stack

| Área | Tecnologías |
|---|---|
| Framework | Next.js 16 (App Router) · React 19 |
| Lenguaje | TypeScript 5.7 |
| Estilos | Tailwind CSS 3.4 · variables CSS (HSL) |
| UI | shadcn/ui + Radix UI · lucide-react · Embla Carousel (slider de planes) |
| Fuentes | Inter · Space Grotesk · Spline Sans Mono (`next/font`) |
| Analítica | Vercel Analytics · Vercel Speed Insights (GA4 disponible, comentado en `app/layout.tsx`) |

No hay backend ni base de datos: todo el contenido está en archivos TypeScript.

---

## 📁 Estructura

```
.
├── app/                    # App Router: rutas, layouts, sitemap, robots, manifest, OG images
├── components/
│   ├── navigation.tsx      # Navbar fija responsiva
│   ├── footer.tsx          # Footer global
│   ├── pricing-plans.tsx   # Slider de planes (Embla)
│   ├── motion/             # Reveal, skills-terminal
│   └── ui/                 # shadcn/ui (muchos componentes no se usan)
├── lib/
│   ├── config.ts           # SITE_CONFIG, link de WhatsApp, conversión COP/USD
│   ├── schema.ts           # JSON-LD
│   └── data/
│       ├── pricing.ts      # Planes, complementos y sistema a medida (fuente de verdad)
│       ├── content.ts      # FAQs, proyectos, posts de blog y tips
│       └── testimonials.ts # Testimonios (placeholders; SHOW_TESTIMONIALS = false)
├── public/                 # llms.txt, CV, imágenes de proyectos
├── design.md               # Sistema de diseño actual
├── rebranding-propuesta.md # Propuesta de rebranding editorial
└── auditoria-identidad-visual.html
```

---

## ⚙️ Instalación y uso

Requisitos: Node.js 20+ y pnpm (hay `pnpm-lock.yaml`; también existe `package-lock.json`).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

| Comando | Descripción |
|---|---|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm start` | Servir el build |
| `pnpm lint` | ESLint |

### Variables de entorno (`.env.local`)

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número destino de todos los CTA a WhatsApp (formato internacional sin `+`, p. ej. `573178073598`). Si falta, se usa el valor por defecto de `lib/config.ts` |
| `NEXT_PUBLIC_GA_ID` | Opcional, solo si se descomenta GA4 en `app/layout.tsx` |

---

## ✍️ Editar contenido

- **Precios y planes** → `lib/data/pricing.ts`. De ahí se derivan las tarjetas de la home, `SITE_CONFIG.pricing`, las FAQs y la oferta. Después actualiza a mano `lib/schema.ts` (descripciones y precios de `servicePlans`) y `public/llms.txt`.
- **FAQs, proyectos, blog y tips** → `lib/data/content.ts`. Un nuevo `slug` en `blogPosts` genera automáticamente `/blog/[slug]` y su entrada en el sitemap.
- **Testimonios** → `lib/data/testimonials.ts`. Reemplaza los placeholders por casos reales y activa `SHOW_TESTIMONIALS`.
- **Datos de contacto y redes** → `lib/config.ts`.

---

## 🎨 Diseño

Tema oscuro (`#060b14`) con acento cian y detalles dorados, definido con variables HSL en `app/globals.css`. Detalles y tokens en `design.md`; la dirección visual futura en `rebranding-propuesta.md`.

---

## ⚠️ Notas conocidas

- `next.config.mjs` tiene `typescript.ignoreBuildErrors: true` e `images.unoptimized: true`: los errores de tipos no rompen el build.
- El `name` en `package.json` sigue siendo `isjuandev-community`.
- Los testimonios son placeholders y están ocultos.
- Las páginas `/servicios/*` son borradores no indexados.

---

## 🔗 Redes

[Kick](https://kick.com/isjuandev) · [TikTok](https://tiktok.com/@isjuandev) · [Instagram](https://instagram.com/isjuandev) · [GitHub](https://github.com/isjuandev) · hola@isjuandev.com

---

© IsJuanDev. Proyecto personal.
