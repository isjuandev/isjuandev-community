'use client'

import { useState, useMemo } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { projects } from '@/lib/data/content'
import { Search } from 'lucide-react'

export default function ProjectsPage() {
  const [projectSearch, setProjectSearch] = useState('')
  const [projectCategory, setProjectCategory] = useState('Todos')
  const [projectSort, setProjectSort] = useState('Recent')

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

  const cats = ['Todos', 'Aplicaciones Web', 'Backend / APIs', 'Aplicaciones Móviles', 'Experimentos', 'Pruebas Técnicas', 'Código Abierto']

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="section" id="proyectos" data-line="proyectos">
        <div className="container mx-auto">
          <div className="flex items-center gap-3">
            <span className="section-label">proyectos.github</span>
          </div>
          <h2 className="section-title">
            Proyectos<span className="dot">.</span>
          </h2>
          <p className="section-lead mb-12">
            Proyectos públicos de mi GitHub, organizados por categoría
          </p>

          {/* Filters */}
          <div className="space-y-4 mb-14">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar proyectos..."
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {cats.map((cat) => (
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

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.demo !== '#' ? project.demo : project.code}
                target={project.demo !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card-editorial flex flex-col justify-between group"
              >
                <div>
                  {project.stream && <span className="card-tag">Hecho en Stream</span>}
                  <div className="card-mock">preview / captura del proyecto</div>
                  <h3 className="font-display font-bold text-[1.25rem] mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.92rem] leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="card-stack">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="text-primary font-mono text-[0.82rem] whitespace-nowrap group-hover:translate-x-1 transition-transform">
                    {project.demo !== '#' ? 'demo →' : 'código →'}
                  </span>
                </div>
              </a>
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