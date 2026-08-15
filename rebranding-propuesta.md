# Rebranding Propuesta — IsJuanDev

> Documento de propuesta de rebranding de `isjuandev-community`, inspirado en la estética editorial de [diegovz.com](https://diegovz.com/).
> Complementa a `design.md` (estado actual). Define el **destino visual** de la marca.

---

## 1. Resumen Ejecutivo

El sitio actual es un "Dev Community Hub" genérico con paleta oscura cyan/dorado. La propuesta lo transforma en un **portafolio editorial híbrido**: profesional (React/.NET, proyectos reales, trayectoria) + comunidad (streams en Kick, tips, contenido). Se mantiene el fondo oscuro y el acento azul/cyan como ADN, pero con la **tipografía gigante, la narrativa por secciones y las micro-interacciones** que hacen icónico a diegovz.com.

**Antes → Después**
- "Community Hub" → "Portafolio editorial de un dev que construye en público"
- Paleta difusa cyan+dorado → **cyan protagonista, oscuridad profunda, contraste alto**
- Layout genérico de cards → secciones narrativas con jerarquía tipográfica extrema
- Marca `<IsJuanDev />` simple → **wordmark editorial rediseñado**

---

## 2. Análisis de Referencia: diegovz.com

### 2.1 Qué hace bien (y adoptamos)

| Elemento | En diegovz.com | Adaptación a IsJuanDev |
|---|---|---|
| Hero tipográfico | Palabras gigantes en SVG ("Hi, there, I am Diego") | "Construyo en público" en display extragrande |
| Secciones narrativas | "Some projects.", "Writing.", "Fragments of me." | Secciones con títulos editoriales cortos |
| Skills como terminal | `pnpm diegovz@skills init` con líneas de log | `pnpm isjuandev@skills init` con líneas de log |
| Logros grandes | "5 years leading design at Rappi" | "8+ años FullStack", "20+ tecnologías", "Streams en vivo" |
| Bento-box | Grids asimétricos para contenido mixto | Grids asimétricos en Home/Projects |
| Scroll progress | Círculo de progreso de lectura | Idem |
| Cursor custom | Cursor Lottie animado | Cursor SVG/Lottie con tema dev (bloque de código) |
| Particles | Partículas sutiles de fondo | Idem, muy sutil (opacidad baja) |
| Wordmark footer | Logo repetido + contador de visitas | Wordmark gigante + contador de visitas |
| Metadatos editoriales | Fechas y "claps" grandes en Writing | Fecha + tiempo de lectura grandes en Blog |

### 2.2 Qué NO se adopta

- **Paleta clara** con acento rosa `#DE5E91` → se descarta (IsJuanDev es dark, cyan).
- **One-page total** → se mantienen las 6 páginas (decisión del usuario).
- Fotografía/mockups pesados de producto → se sustituyen por mockups de código/terminal (más coherente con un dev).

---

## 3. Nueva Identidad

### 3.1 Wordmark

```
<IsJuanDev />
```

- Tipografía **display extragrande** (Space Grotesk Bold) con `Dev` en color cyan y el resto en foreground.
- Los corchetes `< >` en `text-muted-foreground` (sutil) para mantener la firma de código.
- Opción de monograma: cursor de texto `▌` parpadeante como favicon/marca.

### 3.2 Taglines

| Contexto | Texto |
|---|---|
| Hero | "Construyo en público" |
| Descripción | "Senior FullStack · React & .NET · Streams en vivo" |
| Footer | "Construyendo en público, un stream a la vez." (mantener) |

### 3.3 Posicionamiento

> Portafolio editorial de un desarrollador senior FullStack (React & .NET) que construye proyectos reales en vivo, comparte consejos y documenta su trayectoria. Profesional para clientes/empresas, cercano para la comunidad.

---

## 4. Nueva Paleta (Dark Editorial)

Base en `app/globals.css` (tokens HSL). El cyan pasa a ser **protagonista absoluto**; el dorado queda como detalle secundario; se añade blanco puro para contraste de texto editorial.

### 4.1 Tokens propuestos vs. actuales

| Token | Actual (design.md) | Propuesto | Cambio |
|---|---|---|---|
| `--background` | `210 50% 8%` | `210 55% 6%` | Más profundo |
| `--foreground` | `200 10% 95%` | `0 0% 100%` | Blanco puro, mayor contraste |
| `--card` | `210 45% 12%` | `210 45% 10%` | Más oscuro |
| `--primary` | `190 85% 55%` | `190 90% 58%` | Cyan más brillante (protagonista) |
| `--primary-foreground` | `210 50% 8%` | `210 55% 6%` | Texto sobre cyan = fondo |
| `--secondary` | `35 90% 60%` | `35 90% 60%` | Se mantiene (dorado de detalle) |
| `--accent` | `200 60% 45%` | `200 70% 50%` | Azul medio más saturado |
| `--muted` | `210 30% 18%` | `210 25% 14%` | Más apagado para contraste |
| `--muted-foreground` | `200 15% 60%` | `200 15% 65%` | Levemente más legible |
| `--border` | `210 35% 22%` | `210 30% 18%` | Bordes más sutiles |
| `--ring` | `190 85% 55%` | `190 90% 58%` | = primary |

### 4.2 Reglas de uso

- **Cyan** → solo acciones, enlaces, resaltados y la palabra "Dev". No sobrecargar.
- **Dorado** → badges "Hecho en Stream", destacados puntuales, stats.
- **Blanco puro** → títulos editoriales gigantes (h1/h2).
- **Muted** → cuerpo de texto, metadatos, tags.

---

## 5. Nueva Tipografía (Editorial)

| Rol | Actual | Propuesto | Variable |
|---|---|---|---|
| Display (títulos) | Inter | **Space Grotesk** (open-source, estilo Helvetica Now) | `--font-display` |
| Sans (body) | Inter | Inter (mantener) | `--font-inter` |
| Mono (código/tags/meta) | JetBrains Mono | **Spline Sans Mono** (como diegovz) | `--font-mono` |

Carga en `app/layout.tsx` vía `next/font/google`.

### 5.1 Jerarquía

| Nivel | Clases | Uso |
|---|---|---|
| Hero h1 | `text-7xl sm:text-8xl md:text-9xl font-bold` | Página de inicio |
| Título página | `text-6xl font-bold` | Encabezados editoriales de sección |
| Título tarjeta | `text-2xl` / `text-4xl` | Cards y posts |
| Body | `text-lg sm:text-xl leading-relaxed text-muted-foreground` | Texto editorial |
| Meta | `text-sm font-mono text-muted-foreground` | Fechas, tags, lecturas |

Patrón de título con marca (mantener pero en display):
`font-display bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent`

---

## 6. Layout — 6 Páginas con Estilo Editorial

### Home → Hero editorial
- Hero de altura completa con palabras gigantes en lineas escalonadas (tipo diegovz): `Construyo` / `en público` / `▌`.
- Subtítulo profesional + 2 CTAs (Ver Streams / Únete a la Comunidad).
- Sección de proyectos destacados (bento-box con 3-4 proyectos).
- Sección "En vivo" → badge de stream + plataformas.

### About → "Fragments of me."
- Mantener stats animadas pero con **tipografía gigante** (`text-6xl+`) estilo logros.
- Stack, experiencia y timeline se mantienen; se re-titulan: "Experiencia", "Trayectoria".
- Terminal de skills: sección interactiva estilo `pnpm isjuandev@skills init`.

### Projects → grid editorial
- Grid asimétrico (bento) con mockups de terminal/imagen de proyecto.
- Mantener filtros (búsqueda, categoría, orden) — la funcionalidad no cambia, solo el look.
- Badges "Hecho en Stream" en dorado.

### Blog → "Writing."
- Metadatos grandes y `font-mono` (fecha, min de lectura).
- Artículo destacado en layout de 2 columnas editorial.
- Título: "Writing." con punto en cyan (guiño a diegovz).

### Tips → "Skills"
- Sección estilo terminal: encabezado de ventana con puntos, líneas de log para cada tip.
- Mantener botón copiar / expandir (funcionalidad intacta).

### Contact → Cierre editorial
- Formulario + newsletter + redes.
- Footer con wordmark gigante `<IsJuanDev />` + tagline + contador de visitas.

---

## 7. Motion & Micro-interacciones

| Elemento | Propuesta |
|---|---|
| Cursor custom | SVG/Lottie de cursor con bloque de código; oculto en móvil |
| Particles | Fondo con partículas sutiles (opacidad ≤ 0.2) en hero |
| Scroll progress | Círculo de progreso fijo abajo-derecha |
| Hover enlaces | Subrayado animado tipo `underline-dvz` (gradiente cyan) |
| Scroll reveal | `@keyframes` + `IntersectionObserver` para fade/translate por sección |
| Terminal typing | Efecto de escritura en la sección Skills |
| Títulos | `animate-gradient` (mantener) para textos con gradiente |

---

## 8. Tono de Voz

- **Idioma:** Español editorial + términos tech en inglés (sin traducir: "streams", "full-stack", "design system").
- **Persona:** Primera persona, directa, sin relleno corporativo.
- **Registro:** De desarrollador senior que explica con claridad; cercano pero con autoridad técnica.
- **Ejemplos:**
  - Antes: "Únete mientras construimos proyectos en vivo, compartimos consejos…"
  - Después: "Construyo proyectos reales en vivo. Comparto lo que aprendo. Sin humo."

---

## 9. Plan de Implementación por Fases

| Fase | Alcance | Archivos |
|---|---|---|
| **1. Tokens + fuentes** | Paleta dark editorial + Space Grotesk/Spline Sans Mono | `app/globals.css`, `app/layout.tsx`, `tailwind.config.ts` |
| **2. Wordmark + nav** | Nuevo wordmark, navbar editorial, favicon `▌` | `components/navigation.tsx`, `app/layout.tsx`, `app/icon.svg` |
| **3. Home + About** | Hero editorial, "Fragments of me.", terminal de skills | `app/page.tsx`, `app/about/page.tsx` |
| **4. Projects + Blog + Tips** | Bento-grid, "Writing.", "Skills" | `app/projects/page.tsx`, `app/blog/page.tsx`, `app/tips/page.tsx` |
| **5. Contact + motion** | Footer wordmark, cursor, particles, scroll progress | `app/contact/page.tsx`, nuevos componentes de motion |
| **6. QA** | Build, accesibilidad, responsive | `pnpm build` |

**Se mantiene:** shadcn/ui, estructura de 6 páginas, datos en `lib/data/content.ts`, funcionalidad de filtros/copy, metadata SEO.

---

## 10. Comparativa Antes / Después

| Sección | Antes | Después |
|---|---|---|
| Marca | `<IsJuanDev />` simple | Wordmark editorial, `Dev` en cyan, monograma `▌` |
| Paleta | Dark cyan+dorado difuso | Dark profundo + cyan protagonista + blanco puro |
| Tipografía | Inter + JetBrains Mono | Space Grotesk + Inter + Spline Sans Mono |
| Hero | Título gradiente mediano | Palabras gigantes escalonadas |
| Proyectos | Grid uniforme de cards | Bento-grid editorial con mockups |
| Blog | Cards con metadatos pequeños | "Writing." con meta `font-mono` grande |
| Tips | Cards con snippets | Sección terminal "Skills" |
| About | Stats estándar | Logros gigantes + terminal interactiva |
| Motion | Gradientes + pulse | Cursor custom, particles, scroll-progress, reveal |
| Tono | "Únete a la comunidad" | "Construyo en público. Sin humo." |

---

## Checklist de Aprobación

- [ ] Paleta aprobada (¿cyan protagonista sobre fondo `210 55% 6%`?)
- [ ] Tipografías aprobadas (Space Grotesk + Spline Sans Mono)
- [ ] Wordmark y monograma `▌` aprobados
- [ ] Posicionamiento híbrido validado
- [ ] Estructura de 6 páginas confirmada
- [ ] Motion deseado priorizado (cursor / particles / scroll-progress)