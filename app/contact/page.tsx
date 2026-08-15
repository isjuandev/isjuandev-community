import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Users } from 'lucide-react'
import { SocialButton } from '@/components/social-button'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="section" id="contacto" data-line="contacto">
        <div className="container mx-auto">
          <div className="flex items-center gap-3">
            <span className="section-label">contacto.form</span>
          </div>
          <h2 className="section-title">
            Contacto<span className="dot">.</span>
          </h2>
          <p className="section-lead mb-12">
            ¿Tienes una pregunta o quieres colaborar? ¡Contácteme!
          </p>

          <div className="grid md:grid-cols-2 gap-[18px]">
            {/* Contact Form */}
            <div className="card-editorial">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-primary" />
                <h3 className="font-display font-bold text-[1.25rem]">Enviar Mensaje</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Te responderé lo antes posible</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-[0.82rem]">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-[0.82rem]">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-[0.82rem]">Mensaje</Label>
                  <Textarea id="message" placeholder="Tu mensaje..." rows={5} />
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </div>
            </div>

            {/* Community & Social */}
            <div className="space-y-[18px]">
              <div className="card-editorial border-primary/50">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="font-display font-bold text-[1.25rem]">Únete a la Comunidad</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Conéctate con otros desarrolladores y recibe actualizaciones sobre nuevos proyectos
                </p>
                <div className="space-y-4">
                  <Button className="w-full gap-2" size="lg">
                    <Users className="h-5 w-5" />
                    Únete al Servidor de Discord
                  </Button>
                  <div className="space-y-2">
                    <Label htmlFor="newsletter" className="font-mono text-[0.82rem]">Newsletter</Label>
                    <div className="flex gap-2">
                      <Input id="newsletter" type="email" placeholder="tu@email.com" />
                      <Button>Suscribirse</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-editorial">
                <h3 className="font-display font-bold text-[1.25rem] mb-4">Redes Sociales</h3>
                <div className="space-y-3 flex flex-col">
                  <SocialButton platform="kick" href="https://kick.com/isjuandev" />
                  <SocialButton platform="tiktok" href="https://tiktok.com/@isjuandev" />
                  <SocialButton platform="instagram" href="https://instagram.com/isjuandev" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}