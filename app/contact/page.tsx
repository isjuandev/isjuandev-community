'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/motion/reveal'
import { 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Mail, 
  Globe 
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/platform-icons'
import { SITE_CONFIG } from '@/lib/config'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'Sprint Web de Conversión',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Preparar mensaje para WhatsApp si el usuario quiere enviarlo directamente:
    const whatsappMsg = `¡Hola Juan! Soy ${formData.name}. Me interesa la solución: ${formData.service}. Web actual: ${formData.website || 'No tengo'}. Detalle: ${formData.message}`
    window.open(SITE_CONFIG.getWhatsAppUrl(whatsappMsg), '_blank')
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="section" id="contacto" data-line="contacto">
        <div className="container mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-2">
              <span className="section-label mb-0">Contacto Directo</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Respuesta en &lt; 2 horas
              </span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="section-title">
              Hablemos de tu Proyecto<span className="text-primary">.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead max-w-2xl text-muted-foreground mb-12">
              ¿Tu web no genera ventas o pierdes horas respondiendo WhatsApp de forma manual? 
              Cuéntame qué necesitas y te responderé con un diagnóstico y plan de acción claro.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Formulario Comercial */}
            <div className="lg:col-span-7">
              <Reveal delay={180}>
                <div className="card-editorial p-7 md:p-9 border border-border/80 rounded-2xl bg-card/60">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Send className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-xl text-foreground">
                        Formulario de Diagnóstico
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Te contestaré directamente a tu WhatsApp o correo con una estimación.
                      </p>
                    </div>
                  </div>

                  {formSubmitted ? (
                    <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center my-6">
                      <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">
                        ¡Mensaje Preparado!
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Se ha abierto WhatsApp con tu mensaje. Si no abrió automáticamente, haz clic abajo:
                      </p>
                      <Button asChild className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                        <a href={SITE_CONFIG.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                          <WhatsAppIcon className="h-4 w-4" />
                          Abrir WhatsApp Ahora
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-mono text-xs text-muted-foreground">
                            Nombre o Empresa *
                          </Label>
                          <Input 
                            id="name" 
                            required 
                            placeholder="Ej. Juan Pérez / OdontoPlus"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-mono text-xs text-muted-foreground">
                            WhatsApp / Teléfono *
                          </Label>
                          <Input 
                            id="phone" 
                            required 
                            type="tel"
                            placeholder="Ej. +57 310 123 4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-mono text-xs text-muted-foreground">
                            Correo Electrónico *
                          </Label>
                          <Input 
                            id="email" 
                            required 
                            type="email" 
                            placeholder="tu@negocio.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website" className="font-mono text-xs text-muted-foreground">
                            Web actual o Instagram (Opcional)
                          </Label>
                          <Input 
                            id="website" 
                            placeholder="https://minegocio.com"
                            value={formData.website}
                            onChange={(e) => setFormData({...formData, website: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" className="font-mono text-xs text-muted-foreground">
                          ¿Qué solución te interesa? *
                        </Label>
                        <select 
                          id="service"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                        >
                          <option value="Sprint Web de Alta Conversión ($1.450.000 COP / $370 USD)">Sprint Web de Alta Conversión ($1.450.000 COP / $370 USD)</option>
                          <option value="Asistente WhatsApp & Captación 24/7 ($980.000 COP / $250 USD)">Asistente WhatsApp &amp; Captación 24/7 ($980.000 COP / $250 USD)</option>
                          <option value="Pack Completo: Web + Asistente WhatsApp IA">Pack Completo: Web + Asistente WhatsApp IA</option>
                          <option value="Auditoría Web Gratuita (90s)">Solo Auditoría Web Gratuita</option>
                          <option value="Desarrollo a Medida / Pasarelas (Desde $2.800.000 COP)">Sistema a Medida / Pasarelas (Desde $2.800.000 COP / $700 USD)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-mono text-xs text-muted-foreground">
                          ¿Cuál es el mayor dolor o problema de tu negocio hoy? *
                        </Label>
                        <Textarea 
                          id="message" 
                          required
                          placeholder="Ej. Llegan visitas pero nadie escribe, o pierdo muchos clientes que preguntan por WhatsApp los fines de semana..." 
                          rows={4} 
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full gap-2 bg-primary text-primary-foreground font-semibold mt-4">
                        <WhatsAppIcon className="h-4 w-4" />
                        Enviar y Abrir WhatsApp
                      </Button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Sidebar de Contacto Rápido & Garantías */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Direct Card */}
              <Reveal delay={240}>
                <div className="card-editorial p-7 rounded-2xl border-primary/50 bg-gradient-to-b from-card to-background">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <WhatsAppIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        ¿Prefieres respuesta inmediata?
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Escríbeme por WhatsApp sin formularios
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Si tienes prisa o quieres hacerme una pregunta puntual sobre tu caso, 
                    mi WhatsApp directo es el canal más rápido.
                  </p>

                  <Button size="lg" className="w-full gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold" asChild>
                    <a href={SITE_CONFIG.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-5 w-5" />
                      Chatear por WhatsApp
                    </a>
                  </Button>
                </div>
              </Reveal>

              {/* Garantías y Confianza */}
              <Reveal delay={300}>
                <div className="card-editorial p-7 rounded-2xl border-border/80 bg-card/40 space-y-5">
                  <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Garantías de Trabajo
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <b className="text-sm text-foreground block">Sprints de 3 a 7 Días</b>
                        <span className="text-xs text-muted-foreground">
                          Entrega rápida sin meses de retrasos ni reuniones de relleno.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <b className="text-sm text-foreground block">Esquema Seguro 50/50</b>
                        <span className="text-xs text-muted-foreground">
                          50% para apartar el sprint e iniciar, y 50% al entregarte la solución funcionando.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <b className="text-sm text-foreground block">Ingeniero Senior a Cargo</b>
                        <span className="text-xs text-muted-foreground">
                          8+ años de experiencia. Trato directo, código limpio y soporte post-lanzamiento.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50 text-xs font-mono text-muted-foreground">
                    <p>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a></p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
