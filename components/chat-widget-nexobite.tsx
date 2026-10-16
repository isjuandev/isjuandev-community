'use client'

import Script from 'next/script'

const WIDGET_ROOT_ID = 'omnichat-widget-root'
const STYLE_ID = 'omnichat-panel-touch-fix'

/**
 * El panel cerrado conserva el iframe del chat activo: en iOS ese iframe recibe los gestos de
 * scroll aunque esté con `pointer-events: none`, y bloquea el scroll de la página desde el centro.
 * `visibility: hidden` lo saca del área táctil; la transición retrasa el cambio para que el cierre se anime.
 */
const PANEL_TOUCH_FIX_CSS = `
.ocw-panel {
  visibility: hidden;
  transition: opacity 220ms ease, transform 220ms ease, visibility 0s linear 220ms;
}
.ocw-panel.open {
  visibility: visible;
  transition: opacity 220ms ease, transform 220ms ease, visibility 0s;
}
`

/**
 * Inyecta el ajuste de touch en el shadow root del widget una vez montado.
 * El widget se monta al ejecutar `widget.js`, pero se reintenta por si el montaje es diferido.
 */
function applyPanelTouchFix(attempt = 0) {
  const root = document.getElementById(WIDGET_ROOT_ID)
  const shadow = root?.shadowRoot

  if (shadow) {
    if (shadow.getElementById(STYLE_ID)) return
    const style = document.createElement('style')
    style.id = STYLE_ID
    style.textContent = PANEL_TOUCH_FIX_CSS
    shadow.appendChild(style)
    return
  }

  if (attempt < 50) {
    requestAnimationFrame(() => applyPanelTouchFix(attempt + 1))
  }
}

/**
 * Configuración del widget de chat de Nexobite (OmniChat).
 * Se expone en `window.OmniChat` antes de cargar `widget.js`.
 */
const OMNICHAT_CONFIG = {
  tenantSlug: 'isjuandev',
  widgetBaseUrl: 'https://app.nexobite.com',
  widgetPath: '/chat',
  launcher: {
    position: 'right',
    primaryColor: '#39b5d1',
    secondaryColor: 'rgb(var(--accent))',
    iconColor: '#39b5d1',
    glowColor: 'rgb(var(--accent))',
    pulseColor: '#39b5d1',
    shadowColor: 'rgb(var(--foreground))',
    size: 50,
    iconSize: 24,
    bottomOffset: 24,
    sideOffset: 24,
    showPulse: true,
  },
} as const

/**
 * Widget de chat flotante de Nexobite.
 * Define la configuración antes de la carga del script externo para que el widget la lea al iniciar.
 */
export function ChatWidgetNexobite() {
  return (
    <>
      <script
        id="omnichat-config"
        dangerouslySetInnerHTML={{
          __html: `window.OmniChat = ${JSON.stringify(OMNICHAT_CONFIG)};`,
        }}
      />
      <Script
        id="omnichat-widget"
        src="https://app.nexobite.com/widget.js"
        strategy="afterInteractive"
        onLoad={() => applyPanelTouchFix()}
      />
    </>
  )
}
