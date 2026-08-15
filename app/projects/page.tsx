'use client'

import { useState, useMemo } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/lib/data/content'
import { Search, Github, ExternalLink, BookOpen } from 'lucide-react'

export default function ProjectsPage() {
  const [projectSearch, setProjectSearch] = useState('')
  const [projectCategory, setProjectCategory] = useState('Todos')
  const [projectSort, setProjectSort] = useState('Recent')

  // Filtered projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
        project.description.toLowerCase().includes(projectSearch.toLowerCase())
      const matchesCategory = projectCategory === 'Todos' || project.category === projectCategory
      return matchesSearch && matchesCategory
    })

    if (projectSort === 'Stream') {
      filtered = filtered.sort((a, b) => (b.stream ? 1 : 0) - (a.stream ? 1 : 0))
    } else if (projectSort === 'A-Z') {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    return filtered
  }, [projectSearch, projectCategory, projectSort])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Proyectos</h2>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            Proyectos públicos de mi GitHub, organizados por categoría
          </p>

          {/* Project Filters */}
          <div className="space-y-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar proyectos..."
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {['Todos', 'Aplicaciones Web', 'Backend / APIs', 'Aplicaciones Móviles', 'Experimentos', 'Pruebas Técnicas', 'Código Abierto'].map((cat) => (
                <Button
                  key={cat}
                  variant={projectCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setProjectCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <span className="text-sm text-muted-foreground my-auto">Ordenar por:</span>
              {['Recent', 'Stream', 'A-Z'].map((sort) => (
                <Button
                  key={sort}
                  variant={projectSort === sort ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setProjectSort(sort)}
                >
                  {sort === 'Recent' ? 'Recientes' : sort === 'Stream' ? 'Streams' : 'A-Z'}
                </Button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  {project.stream && (
                    <Badge variant="secondary" className="absolute top-2 right-2">
                      Hecho en Stream
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" variant="default" className="flex-1 gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No se encontraron proyectos que coincidan con tus criterios.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
