'use client'

import { useState, useMemo } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/lib/data/content'
import { Search, Github, ExternalLink, FolderGit2 } from 'lucide-react'

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
          <div className="flex items-center gap-3 mb-4">
            <FolderGit2 className="h-8 w-8 text-primary" />
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-balance">
              Proyectos<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 text-lg">
            Proyectos públicos de mi GitHub, organizados por categoría
          </p>

          {/* Project Filters */}
          <div className="space-y-4 mb-12">
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

          {/* Project Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`group flex flex-col border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden rounded-lg ${
                  i % 4 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                {/* Terminal mockup */}
                <div className="border-b border-border bg-muted/50">
                  <div className="flex items-center gap-2 px-4 py-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-xs font-mono text-muted-foreground truncate">
                      {project.title.toLowerCase().replace(/\s+/g, '-')} — bash
                    </span>
                  </div>
                  <div className="px-4 pb-3 font-mono text-xs leading-relaxed space-y-1">
                    <div className="flex gap-2">
                      <span className="text-primary">$</span>
                      <span>git clone {project.code.replace('https://github.com/', '')}</span>
                    </div>
                    <div className="text-muted-foreground truncate">✔ {project.tags.join(' · ')}</div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.stream && <Badge variant="secondary" className="text-xs">Hecho en Stream</Badge>}
                    <Badge variant="outline" className="text-xs">{project.category}</Badge>
                  </div>
                  <h3 className={`font-display font-bold group-hover:text-primary transition-colors ${i % 4 === 0 ? 'text-3xl' : 'text-2xl'}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{project.description}</p>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
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
                    </div>
                  </div>
                </div>
              </div>
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