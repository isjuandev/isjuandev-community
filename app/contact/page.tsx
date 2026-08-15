import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Users, Video, Github } from 'lucide-react'
import { SocialButton } from '@/components/social-button'
import { Wordmark } from '@/components/wordmark'
import { VisitCounter } from '@/components/motion/visit-counter'

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
            ¿Tienes una pregunta o quieres colaborar? ¡Contácteme!
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
                <CardContent className="space-y-3 flex flex-col">
                  <SocialButton platform="kick" href="https://kick.com/isjuandev" />
                  <SocialButton platform="tiktok" href="https://tiktok.com/@isjuandev" />
                  <SocialButton platform="instagram" href="https://instagram.com/isjuandev" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <Wordmark size="lg" />
          <p className="text-lg text-muted-foreground mt-6 mb-8">
            Construyendo en público, un stream a la vez.
          </p>
          <div className="flex justify-center mb-8">
            <VisitCounter />
          </div>
          <p className="text-sm text-muted-foreground">
            Construido con Next.js, Tailwind CSS y shadcn/ui
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 IsJuanDev. Construyendo en público, un stream a la vez.
          </p>
        </div>
      </footer>
    </div>
  )
}
