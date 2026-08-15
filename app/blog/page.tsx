'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Reveal } from '@/components/motion/reveal'
import { blogPosts } from '@/lib/data/content'
import { commitHash, timeAgo } from '@/lib/utils'
import { Search } from 'lucide-react'

export default function BlogPage() {
  const [blogSearch, setBlogSearch] = useState('')
  const [blogCategory, setBlogCategory] = useState('Todos')
  const [blogSort, setBlogSort] = useState('Latest')

  const filteredBlogPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(blogSearch.toLowerCase())
      const matchesCategory = blogCategory === 'Todos' || post.category === blogCategory
      return matchesSearch && matchesCategory
    })

    if (blogSort === 'Most Popular') {
      filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    } else if (blogSort === 'Oldest') {
      filtered = filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else {
      filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    return filtered
  }, [blogSearch, blogCategory, blogSort])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="section" id="aprendizajes" data-line="aprendizajes">
        <div className="container mx-auto">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="section-label">aprendizajes.log</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Aprendizajes<span className="dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead mb-10">
              Notas técnicas y de proceso sobre proyectos, arquitectura, errores y decisiones reales.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link href="/tips" className="inline-flex text-primary font-mono text-[0.82rem] hover:underline underline-offset-4 mb-10">
              ¿Buscas algo rápido? Ver consejos →
            </Link>
          </Reveal>

          {/* Filters */}
          <Reveal delay={200}>
            <div className="space-y-4 mb-8">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar artículos..."
                  value={blogSearch}
                  onChange={(e) => setBlogSearch(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {['Todos', 'Trayectoria Dev', 'Reseñas Tech'].map((cat) => (
                  <Button
                    key={cat}
                    variant={blogCategory === cat ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setBlogCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-sm text-muted-foreground">Ordenar por:</span>
                {['Latest', 'Most Popular', 'Oldest'].map((sort) => (
                  <Button
                    key={sort}
                    variant={blogSort === sort ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setBlogSort(sort)}
                  >
                    {sort === 'Latest' ? 'Más recientes' : sort === 'Most Popular' ? 'Populares' : 'Más antiguos'}
                  </Button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Commit log */}
          <div className="commit-log">
            {filteredBlogPosts.map((post, i) => (
              <Reveal key={post.id} delay={i * 60}>
                <Link href={`/blog/${post.slug}`} className="commit group">
                  <span className="hash">#{commitHash(post.slug)}</span>
                  <div>
                    <h3 className="group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p>{post.excerpt}</p>
                  </div>
                  <span className="meta">
                    {timeAgo(post.date)} · {post.readTime} min
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          {filteredBlogPosts.length === 0 && (
            <Reveal>
              <div className="text-center py-16">
                <p className="text-muted-foreground">No se encontraron artículos que coincidan con tus criterios.</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  )
}
