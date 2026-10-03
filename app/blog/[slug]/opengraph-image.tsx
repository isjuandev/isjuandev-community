import { ImageResponse } from 'next/og'
import { blogPosts } from '@/lib/data/content'

export const alt = 'Artículo de IsJuanDev'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  const title = post ? post.title : 'Artículo en IsJuanDev'
  const category = post ? post.category : 'Aprendizajes'
  const readTime = post ? `${post.readTime} min de lectura` : '5 min de lectura'
  const tags = post?.tags?.slice(0, 3) || ['Web', 'IA', 'Tech']

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #060b14 0%, #0d1b30 60%, #060b14 100%)',
          color: '#ffffff',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow ambient background */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(55, 224, 246, 0.16) 0%, rgba(55, 224, 246, 0) 70%)',
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                padding: '6px 16px',
                borderRadius: 9999,
                background: 'rgba(55, 224, 246, 0.1)',
                border: '1px solid rgba(55, 224, 246, 0.3)',
                fontSize: 15,
                fontWeight: 600,
                color: '#37e0f6',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {category}
            </div>
            <div
              style={{
                fontSize: 15,
                color: 'rgba(255, 255, 255, 0.55)',
              }}
            >
              · {readTime}
            </div>
          </div>

          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 22,
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            www.isjuandev.com/blog
          </div>
        </div>

        {/* Center Content: Article Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            maxWidth: 1050,
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: '#ffffff',
            }}
          >
            {title}
          </div>
          {post?.excerpt && (
            <div
              style={{
                fontSize: 22,
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.4,
                maxHeight: 64,
                overflow: 'hidden',
              }}
            >
              {post.excerpt}
            </div>
          )}
        </div>

        {/* Bottom Bar: Author & Tags */}
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#1e293b',
                border: '2px solid #37e0f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 18,
                color: '#37e0f6',
              }}
            >
              JD
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#f8fafc' }}>
                Juan Diego García
              </span>
              <span style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.55)' }}>
                IsJuanDev · Consultor de Software & IA
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 10,
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '6px 14px',
                  borderRadius: 6,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: 15,
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'monospace',
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  )
}
