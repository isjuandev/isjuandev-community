import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { SITE_CONFIG } from '@/lib/config'
import { ArrowLeft, ShieldCheck, Mail, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos | IsJuanDev',
  description: 'Política de tratamiento de datos personales conforme a la Ley 1581 de 2012 de Colombia. Transparencia, derechos y canales de atención de IsJuanDev.',
  alternates: {
    canonical: 'https://www.isjuandev.com/privacidad',
  },
  openGraph: {
    title: 'Política de Privacidad y Tratamiento de Datos | IsJuanDev',
    description: 'Política de tratamiento de datos personales conforme a la Ley 1581 de 2012 de Colombia.',
    url: 'https://www.isjuandev.com/privacidad',
  },
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/25">
      <Navigation />

      <main className="container mx-auto px-6 lg:px-8 py-16 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver al Inicio
        </Link>

        {/* Banner de Aviso de Revisión Legal */}
        <div className="p-4 sm:p-5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs sm:text-sm leading-relaxed mb-10 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
          <div>
            <strong className="font-semibold block text-amber-200 mb-1">
              AVISO DE REVISIÓN LEGAL PENDIENTE (TODO)
            </strong>
            El presente documento constituye una versión base para la política de tratamiento de datos personales formulada bajo los lineamientos generales de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia. Se encuentra sujeto a revisión y validación legal definitiva antes de su entrada en vigor vinculante.
          </div>
        </div>

        <div className="space-y-4 mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
            Marco Legal Colombiano · Ley 1581 de 2012
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Política de Tratamiento de Datos Personales<span className="text-primary">.</span>
          </h1>
          <p className="text-sm text-muted-foreground font-mono">
            Última actualización referencial: Octubre 2026 · Versión preliminar
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              1. Identificación del Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos personales recolectados a través del sitio web{' '}
              <strong className="text-foreground">www.isjuandev.com</strong> y sus canales vinculados es{' '}
              <strong className="text-foreground">Juan Diego García Castaño (IsJuanDev)</strong>, desarrollador de software y consultor de soluciones digitales en Colombia.
            </p>
            <p className="flex items-center gap-2 text-foreground font-mono text-xs sm:text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span>Correo electrónico de contacto y ejercicio de derechos: </span>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                {SITE_CONFIG.email}
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              2. Marco Normativo y Principios
            </h2>
            <p>
              Esta política se rige por la Constitución Política de Colombia (artículo 15), la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y demás normas concordantes expedidas por la Superintendencia de Industria y Comercio (SIC). Nos comprometemos a aplicar los principios de legalidad, finalidad, libertad, veracidad, transparencia, acceso restringido, seguridad y confidencialidad en el tratamiento de tus datos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              3. Datos Recolectados y Finalidad del Tratamiento
            </h2>
            <p>
              A través de formularios de contacto, mensajes de WhatsApp o correo electrónico, podemos recolectar datos de identificación y contacto como: nombre, dirección de correo electrónico, número de teléfono/WhatsApp, enlace al sitio web o negocio y requerimientos técnicos del proyecto.
            </p>
            <p>
              Estos datos se tratan exclusivamente con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Responder consultas comerciales y técnicas solicitadas por el titular.</li>
              <li>Elaborar y remitir diagnósticos preliminares, auditorías web (video de 90 segundos) y cotizaciones de servicios.</li>
              <li>Coordinar reuniones, demostraciones operativas o entregas de proyectos contratados.</li>
              <li>Emitir facturas o soportes contables cuando se perfeccione una relación contractual.</li>
            </ul>
            <p>
              <strong className="text-foreground">No vendemos, cedemos ni comercializamos</strong> bases de datos con terceros para publicidad masiva ni fines ajenos a los servicios ofrecidos en IsJuanDev.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              4. Derechos de los Titulares
            </h2>
            <p>
              De conformidad con el artículo 8 de la Ley 1581 de 2012, tú como titular de los datos personales tienes derecho a:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Conocer, actualizar y rectificar tus datos personales frente al Responsable.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento, salvo excepciones de ley.</li>
              <li>Ser informado respecto del uso que se le ha dado a tus datos personales.</li>
              <li>Revocar la autorización y/o solicitar la supresión del dato cuando consideres que no se respetan los principios legales.</li>
              <li>Acceder en forma gratuita a tus datos personales objeto de tratamiento.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              5. Procedimiento para Consultas y Reclamos
            </h2>
            <p>
              Para ejercer tus derechos de consulta, rectificación, actualización o eliminación de datos, puedes enviar una solicitud formal al correo{' '}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                {SITE_CONFIG.email}
              </a>{' '}
              con el asunto &ldquo;Tratamiento de Datos Personales&rdquo;, indicando tu nombre completo, documento de identificación, descripción clara de la petición y los datos de contacto para la respuesta.
            </p>
            <p>
              Las consultas serán atendidas en un término máximo de diez (10) días hábiles y los reclamos en quince (15) días hábiles contados a partir de su recepción completa.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              6. Seguridad de la Información
            </h2>
            <p>
              Adoptamos medidas técnicas, humanas y administrativas necesarias para garantizar la seguridad de los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
