import { ImageResponse } from 'next/og'

export const alt = 'IsJuanDev — Desarrollador FullStack que construye en público.'
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
          background: '#060b14',
          color: '#ffffff',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            fontFamily: 'monospace',
            fontSize: 28,
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          <span>&lt;IsJuanDev /&gt;</span>
          <span>isjuandev.com</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>&lt;</span>
            <span>Is</span>
            <span style={{ color: '#37e0f6' }}>Juan</span>
            <span>Dev</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>&nbsp;/&gt;</span>
          </div>
          <div style={{ fontSize: 40, color: 'rgba(255,255,255,0.92)', marginTop: 16 }}>
             Desarrollador FullStack · React & .NET
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 48,
            fontSize: 26,
            fontFamily: 'monospace',
            color: '#37e0f6',
          }}
        >
          <span>react · .net</span>
          <span>aws · docker</span>
          <span>build in public</span>
        </div>
      </div>
    ),
    size
  )
}
