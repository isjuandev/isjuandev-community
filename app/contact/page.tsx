import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Users, Video, Github } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-32 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Contacto</h2>
          </div>
          <p className="text-muted-foreground mb-12 text-lg">
            ¿Tienes una pregunta o quieres colaborar? ¡Contáctame!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Enviar Mensaje</CardTitle>
                <CardDescription>Te responderé lo antes posible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Tu mensaje..." rows={5} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </CardFooter>
            </Card>

            {/* Social Links & Newsletter */}
            <div className="space-y-6">
              <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur">
                <CardHeader>
                  <CardTitle>Únete a la Comunidad</CardTitle>
                  <CardDescription>
                    Conéctate con otros desarrolladores y recibe actualizaciones sobre nuevos proyectos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full gap-2 bg-primary text-primary-foreground" size="lg">
                    <Users className="h-5 w-5" />
                    Únete al Servidor de Discord
                  </Button>
                  <div className="space-y-2">
                    <Label htmlFor="newsletter">Newsletter</Label>
                    <div className="flex gap-2">
                      <Input id="newsletter" type="email" placeholder="tu@email.com" />
                      <Button>Suscribirse</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Redes Sociales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                    <a href="https://kick.com" target="_blank" rel="noopener noreferrer">
                      <Video className="h-5 w-5" />
                      Sígueme en Kick
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Twitter / X
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                      <Users className="h-5 w-5" />
                      Comunidad Discord
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            {'<IsJuanDev />'}
          </div>
          <p className="text-sm">
            Construido con Next.js, Tailwind CSS y shadcn/ui
          </p>
          <p className="text-sm mt-2">
            © 2024 IsJuanDev. Construyendo en público, un stream a la vez.
          </p>
        </div>
      </footer>
    </div>
  )
}
