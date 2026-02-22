'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { blogPosts, formatDate } from '@/lib/data/content'
import { Search, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react'

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

  const featuredPost = filteredBlogPosts.find(p => p.featured)
  const regularPosts = filteredBlogPosts.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-32 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Blog</h2>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            Cosas que pienso, cosas que aprendo y cosas que me pasan programando
          </p>

          {/* Filters */}
          <div className="space-y-4 mb-10">
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
              {['Latest', 'Oldest'].map((sort) => (
                <Button
                  key={sort}
                  variant={blogSort === sort ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setBlogSort(sort)}
                >
                  {sort === 'Latest' ? 'Más recientes' : 'Más antiguos'}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Card className="mb-10 overflow-hidden border-primary/50 bg-card/50 backdrop-blur">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto overflow-hidden min-h-[200px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="default" className="w-fit mb-4">Destacado</Badge>
                  <h3 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime} min de lectura
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(featuredPost.date)}
                    </span>
                  </div>
                  <Button asChild className="w-fit gap-2">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Leer artículo <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
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
                <CardFooter className="mt-auto">
                  <Button asChild size="sm" className="w-full gap-2">
                    <Link href={`/blog/${post.slug}`}>
                      Leer artículo <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredBlogPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No se encontraron artículos que coincidan con tus criterios.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
