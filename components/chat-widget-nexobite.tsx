import Script from 'next/script'

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
      />
    </>
  )
}
