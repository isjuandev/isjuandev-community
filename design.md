# Design System — IsJuanDev

> Documento de referencia del sistema de diseño **actual** de `isjuandev-community`.
> Línea base para el proceso de rebranding de la marca personal.

---

## 1. Identidad de Marca

| Atributo | Valor |
|---|---|
| Marca | `<IsJuanDev />` |
| Descripción | Dev Community Hub |
| Tagline | "Construyendo en público, un stream a la vez" |
| Posicionamiento | Comunidad de desarrolladores: streams en vivo, blog, consejos y proyectos |
| Autor | Juan Diego García Castaño |
| Rol | Desarrollador FullStack \| React & .NET |

**Propuesta de valor:** Únete mientras construimos proyectos en vivo, compartimos consejos de desarrollo y hacemos crecer nuestra comunidad.

**Canales / Redes:**
| Plataforma | Handle |
|---|---|
| Kick | [@isjuandev](https://kick.com/isjuandev) |
| TikTok | [@isjuandev](https://tiktok.com/@isjuandev) |
| Instagram | [@isjuandev](https://instagram.com/isjuandev) |
| GitHub | [isjuandev](https://github.com/isjuandev) |

---

## 2. Paleta de Color

Tema **único oscuro** (sin modo claro). Los colores se definen como tokens CSS en formato HSL en `app/globals.css` y se consumen vía `hsl(var(--token))` desde `tailwind.config.ts`.

### 2.1 Tokens base

| Token | HSL | Hex aprox. | Uso |
|---|---|---|---|
| `--background` | `210 50% 8%` | `#0a121e` | Fondo principal (azul muy oscuro) |
| `--foreground` | `200 10% 95%` | `#f1f4f6` | Texto principal claro |
| `--card` / `--popover` | `210 45% 12%` | `#111a29` | Fondos de tarjetas/popovers |
| `--card-foreground` | `200 10% 95%` | `#f1f4f6` | Texto sobre tarjetas |

### 2.2 Colores de marca (3 principales)

| Token | HSL | Hex aprox. | Rol |
|---|---|---|---|
| `--primary` | `190 85% 55%` | `#1ecbe8` | **Azul cyan** — botones, acciones y CTAs |
| `--secondary` | `35 90% 60%` | `#f2b244` | **Dorado/naranja** — badges y elementos destacados |
| `--accent` | `200 60% 45%` | `#2e91b8` | **Azul suave** — bordes y elementos sutiles |

Foregrounds de marca:
| Token | HSL | Uso |
|---|---|---|
| `--primary-foreground` | `210 50% 8%` | Texto sobre cyan (azul oscuro para contraste) |
| `--secondary-foreground` | `210 50% 8%` | Texto sobre dorado |
| `--accent-foreground` | `0 0% 100%` | Texto sobre accent |

### 2.3 Estados y utilitarios

| Token | HSL | Uso |
|---|---|---|
| `--muted` | `210 30% 18%` | Fondos apagados con tinte azul |
| `--muted-foreground` | `200 15% 60%` | Texto secundario |
| `--destructive` | `0 72% 55%` | Rojo para errores |
| `--destructive-foreground` | `0 0% 100%` | Texto sobre rojo |
| `--border` / `--input` | `210 35% 22%` | Bordes e inputs |
| `--ring` | `190 85% 55%` | Focus ring (= primary cyan) |
| `--radius` | `0.75rem` | Radio de esquinas base |

### 2.4 Charts

| Token | HSL | Descripción |
|---|---|---|
| `--chart-1` | `190 85% 55%` | Cyan brillante |
| `--chart-2` | `35 90% 60%` | Dorado |
| `--chart-3` | `200 60% 45%` | Azul medio |
| `--chart-4` | `195 70% 50%` | Cyan intermedio |
| `--chart-5` | `30 85% 55%` | Naranja suave |

---

## 3. Tipografía

Fuentes cargadas vía `next/font/google` en `app/layout.tsx`:

| Fuente | Variable CSS | Uso |
|---|---|---|
| **Inter** | `--font-inter` | Sans-serif, texto general |
| **JetBrains Mono** | `--font-jetbrains` | Monoespaciada, código (`font-mono`) |

El body usa `font-sans antialiased` y clases `font-mono` para bloques de código en Tips.

### 3.1 Jerarquía tipográfica

| Nivel | Clases | Uso |
|---|---|---|
| Hero h1 | `text-5xl sm:text-6xl md:text-7xl font-bold` + gradiente | Página de inicio |
| Título página | `text-4xl font-bold` | Encabezados de sección |
| Título de tarjeta | `text-xl` / `text-3xl font-bold` | Cards y posts |
| Body | `text-lg leading-relaxed text-muted-foreground` | Texto de apoyo |
| Texto | `text-sm text-muted-foreground` | Metadatos, badges |

Los títulos con marca usan el patrón:
`bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent`

---

## 4. UI / Componentes

Stack: **shadcn/ui** (estilo `default`, `baseColor: neutral`, `cssVariables: true`, iconos **lucide**).

### 4.1 Patrones visuales recurrentes

| Patrón | Clases |
|---|---|
| Tarjeta con blur | `border-border bg-card/50 backdrop-blur` |
| Hover de tarjeta | `hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1` |
| Badge secundario | `Badge variant="secondary"` + `text-xs` |
| Botón primario | `Button size="lg"` + icono lucide |
| Gradiente de fondo | `bg-gradient-to-br from-primary/20 to-secondary/20` |
| Decoración hero | `bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient` |
| Grid pattern | `bg-[url('/grid.svg')] opacity-20` |

### 4.2 Componentes en uso
- `Navigation` — navbar fija, móvil/desktop, estado activo por ruta
- `SocialButton` — botones de red (Kick, TikTok, Instagram) con SVGs inline
- `Button`, `Card`, `Badge`, `Input`, `Textarea`, `Label`
- Biblioteca completa shadcn/ui bajo `components/ui/` (50+ componentes: dialog, sheet, sidebar, accordion, etc.)

---

## 5. Layout & Spacing

| Elemento | Especificación |
|---|---|
| Navbar | Fija, `h-16`, `backdrop-blur-xl bg-background/80`, `border-b border-border`, `z-50` |
| Secciones | `py-32 px-4` |
| Contenedor | `container mx-auto` |
| Padding responsivo | `px-4 sm:px-6 lg:px-8` |
| Grids | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (gap-6) |
| Hero | `min-h-screen`, centrado, `pt-32 pb-20` |
| Max-widths | `max-w-3xl`, `max-w-4xl`, `max-w-6xl` según contexto |

---

## 6. Motion

| Animación | Uso |
|---|---|
| `animate-gradient` | Gradientes animados (8s ease infinite, `background-size 200%`) en héroes y títulos |
| `animate-float` | Definida en globals.css (translateY -10px), reservada |
| `animate-pulse` | Orbes decorativos de fondo (blur-3xl) en About |
| `animate-bounce` | Flecha de scroll (ChevronDown) en el hero |
| Transiciones hover | `transition-all duration-300`, `hover:scale-105`, `hover:scale-110`, sombras con glow |

---

## 7. Tono de Voz y Contenido

- **Idioma:** Español.
- **Persona:** Primera persona, cercana y directa.
- **Registro:** Educativo y accesible; explica decisiones técnicas y consejos accionables.
- **Contenido:** Proyectos, posts de blog (trayectoria, reseñas tech), consejos rápidos con snippets de código.
- **Llamados a la acción:** "Únete a la Comunidad", "Ver Streams", "Leer artículo".

---

## 8. Notas para el Rebranding

Sección de referencia para el futuro rediseño. Puntos críticos a revisar:

- [ ] Nombre/logo (`<IsJuanDev />`) y tagline
- [ ] Paleta: ¿se mantienen cyan + dorado sobre azul oscuro?
- [ ] Tipografías: ¿Inter + JetBrains Mono siguen siendo las de marca?
- [ ] Tono de voz y metadata (title/description)
- [ ] Patrones de UI y animaciones a conservar o reemplazar