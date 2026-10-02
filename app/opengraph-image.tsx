import { ImageResponse } from 'next/og'

export const alt = 'IsJuanDev — Webs de Alta Conversión & Automatizaciones con IA'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #060b14 0%, #0b1528 50%, #060b14 100%)',
          color: '#ffffff',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow ambient effects */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(55, 224, 246, 0.15) 0%, rgba(55, 224, 246, 0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: 200,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0) 70%)',
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Brand Tag / Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 18px',
              borderRadius: 9999,
              background: 'rgba(55, 224, 246, 0.08)',
              border: '1px solid rgba(55, 224, 246, 0.25)',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: '#37e0f6',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#37e0f6',
                display: 'flex',
              }}
            />
            <span>Webs de Alta Conversión & Agentes IA</span>
          </div>

          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 22,
              color: 'rgba(255, 255, 255, 0.55)',
              letterSpacing: '0.02em',
            }}
          >
            isjuandev.com
          </div>
        </div>

        {/* Center Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>&lt;</span>
            <span>Is</span>
            <span style={{ color: '#37e0f6' }}>Juan</span>
            <span>Dev</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>&nbsp;/&gt;</span>
          </div>

          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: '#f8fafc',
              lineHeight: 1.25,
              maxWidth: 960,
            }}
          >
            Webs que venden y automatizaciones con IA que escalan tu negocio.
          </div>

          <div
            style={{
              fontSize: 21,
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Ayudo a empresas a captar más clientes, responder en segundos vía WhatsApp y optimizar operaciones con software moderno.
          </div>
        </div>

        {/* Bottom Bar: Tags & Status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 24,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Tech Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            {['Next.js', 'Agentes IA', 'WhatsApp CRM', 'Flujos n8n', 'Sprint 7 Días'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 14px',
                  borderRadius: 6,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: 16,
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Status Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 16,
              color: '#10b981',
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#10b981',
              }}
            />
            <span>Disponible para Proyectos</span>
          </div>
        </div>
      </div>
    ),
    size
  )
}
