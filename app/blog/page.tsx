'use client'

import { useState, useMemo } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { blogPosts, formatDate } from '@/lib/data/content'
import { Search, BookOpen, Clock, Calendar } from 'lucide-react'

export default function BlogPage() {
  const [blogSearch, setBlogSearch] = useState('')
  const [blogCategory, setBlogCategory] = useState('Todos')
  const [blogSort, setBlogSort] = useState('Latest')

  // Filtered blog posts
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
      
      <section className="py-32 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Blog</h2>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            Tutoriales, actualizaciones de mi trayectoria y perspectivas tecnológicas
          </p>

          {/* Blog Filters */}
          <div className="space-y-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar artículos..."
                value={blogSearch}
                onChange={(e) => setBlogSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {['Todos', 'Tutoriales', 'Trayectoria Dev', 'Reseñas Tech', 'Actualizaciones'].map((cat) => (
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

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="text-sm text-muted-foreground my-auto">Ordenar por:</span>
                {['Latest', 'Most Popular', 'Oldest'].map((sort) => (
                  <Button
                    key={sort}
                    variant={blogSort === sort ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setBlogSort(sort)}
                  >
                    {sort === 'Latest' ? 'Más recientes' : sort === 'Most Popular' ? 'Más populares' : 'Más antiguos'}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {filteredBlogPosts.filter(p => p.featured).length > 0 && (
            <Card className="mb-8 overflow-hidden border-primary/50 bg-card/50 backdrop-blur">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="p-6 flex flex-col justify-center">
                  <Badge variant="default" className="w-fit mb-4">Destacado</Badge>
                  <h3 className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                    {filteredBlogPosts.find(p => p.featured)?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {filteredBlogPosts.find(p => p.featured)?.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {filteredBlogPosts.find(p => p.featured)?.readTime} min de lectura
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(filteredBlogPosts.find(p => p.featured)?.date || '')}
                    </span>
                  </div>
                  <Button className="w-fit">Leer Más</Button>
                </div>
              </div>
            </Card>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogPosts.filter(p => !p.featured).map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="ghost" className="w-full">
                    Leer Más
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredBlogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No se encontraron artículos que coincidan con tus criterios.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
