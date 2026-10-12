import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { SITE_CONFIG } from '@/lib/config'
import { ArrowLeft, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | IsJuanDev',
  description: 'Términos y condiciones de uso y contratación de servicios de desarrollo web, asistentes de WhatsApp y automatizaciones con IA de IsJuanDev.',
  alternates: {
    canonical: 'https://www.isjuandev.com/terminos',
  },
  openGraph: {
    title: 'Términos y Condiciones | IsJuanDev',
    description: 'Condiciones de contratación y uso de servicios de desarrollo web y automatizaciones con IA.',
    url: 'https://www.isjuandev.com/terminos',
  },
}

export default function TerminosPage() {
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
            El presente documento constituye una versión base para los términos y condiciones de contratación de servicios de desarrollo de software y consultoría tecnológica. Se encuentra sujeto a revisión y validación legal definitiva antes de su entrada en vigor vinculante.
          </div>
        </div>

        <div className="space-y-4 mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
            Condiciones de Contratación &amp; Uso
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Términos y Condiciones de Servicio<span className="text-primary">.</span>
          </h1>
          <p className="text-sm text-muted-foreground font-mono">
            Última actualización referencial: Octubre 2026 · Versión preliminar
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              1. Objeto del Servicio
            </h2>
            <p>
              IsJuanDev, liderado por el desarrollador de software Juan Diego García Castaño, ofrece servicios especializados de diseño y desarrollo de sitios web de alta conversión, asistentes automáticos de WhatsApp con inteligencia artificial, integración de flujos operativos con n8n y arquitecturas de software a medida.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              2. Esquema de Pago y Plazos de Ejecución
            </h2>
            <p>
              Los servicios se cotizan en pesos colombianos (COP), con valores referenciales en USD calculados para consulta general. La modalidad de pago se acuerda de forma transparente según el alcance:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-foreground">Web Express:</strong> Pago del 100% por adelantado al iniciar el sprint (entrega en 2 a 3 días hábiles).
              </li>
              <li>
                <strong className="text-foreground">Webs en modalidad compra o suscripción:</strong> Web Express y Tu Nueva Web pueden contratarse en compra (pago único; incluye dominio .com registrado a nombre del cliente y hosting durante el primer año; desde el segundo año, su renovación se cubre con el plan Esencial, opcional y sin permanencia) o en suscripción (instalación reducida de $290.000 COP o $690.000 COP, respectivamente, más el plan Esencial obligatorio, que incluye hosting y el dominio .com). En suscripción, la web y su hosting permanecen bajo administración de IsJuanDev hasta que el cliente ejerza la opción de compra.
              </li>
              <li>
                <strong className="text-foreground">Opción de compra:</strong> En una web por suscripción, la titularidad pasa al cliente cuando la suma de la instalación y las mensualidades pagadas alcanza el precio de la modalidad compra del plan contratado. El cliente puede adelantarla en cualquier momento pagando la diferencia.
              </li>
              <li>
                <strong className="text-foreground">Tu Nueva Web, instalación del Asistente WhatsApp y Pack Crecimiento:</strong> Esquema 50/50 (50% de anticipo para reserva de sprint y comienzo de arquitectura; 50% restante contra entrega y verificación en producción).
              </li>
              <li>
                <strong className="text-foreground">Planes mensuales (Esencial, Crecimiento y Pro):</strong> Suscripciones mensuales. El Asistente de WhatsApp, la web por suscripción y el plan Pro tienen una permanencia mínima de 3 meses desde la entrega o el inicio del plan; el plan Esencial contratado como complemento de una web comprada no tiene permanencia. El plan Crecimiento está incluido con el Asistente de WhatsApp desde su entrega; en el Pack Crecimiento los dos primeros meses van incluidos y se cobra desde el tercer mes, con lo que se completa la permanencia mínima. Cumplida la permanencia, el cliente puede cancelar notificando antes de su siguiente ciclo. El pago anual equivale a 10 meses de 12.
              </li>
              <li>
                <strong className="text-foreground">Medios de pago:</strong> Los pagos se realizan por transferencia bancaria o mediante un enlace de pago enviado por IsJuanDev. Las mensualidades no se debitan de forma automática: cada mes se pagan con una transferencia o con el enlace de pago que IsJuanDev envía al cliente.
              </li>
            </ul>
            <p className="pt-2">
              <strong className="text-foreground">Pago de mensualidades, plazo de gracia y mora:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-foreground">Ciclo y fecha de pago:</strong> Las mensualidades se pagan por adelantado, en ciclos de 30 días contados desde la fecha de entrega del servicio o desde el inicio del plan, según corresponda. IsJuanDev enviará al cliente los datos de transferencia o el enlace de pago con al menos 3 días de anticipación a la fecha de corte.
              </li>
              <li>
                <strong className="text-foreground">Plazo de gracia:</strong> Si el pago no se recibe en la fecha de corte, el cliente cuenta con un plazo de gracia de 5 días calendario durante el cual el servicio continúa sin interrupción.
              </li>
              <li>
                <strong className="text-foreground">Suspensión:</strong> Vencido el plazo de gracia sin que se haya recibido el pago, IsJuanDev podrá suspender los servicios mensuales: monitoreo, ajustes, soporte y el funcionamiento del asistente de WhatsApp. La suspensión no afecta los entregables ya pagados ni la propiedad del código y de la página web que el cliente haya comprado. Una web por suscripción sin opción de compra ejercida puede despublicarse durante la suspensión.
              </li>
              <li>
                <strong className="text-foreground">Reactivación:</strong> El cliente puede reactivar el servicio pagando el ciclo vencido. IsJuanDev lo reactivará dentro de 1 día hábil tras confirmar el pago, sin cobro adicional por reconexión.
              </li>
              <li>
                <strong className="text-foreground">Terminación por falta de pago:</strong> Si transcurren 30 días desde la suspensión sin pago, el plan mensual se entenderá cancelado. IsJuanDev conservará la configuración del cliente durante 30 días adicionales y, pasado ese plazo, podrá eliminarla. Antes de eso, el cliente puede solicitar una copia de sus datos y configuraciones.
              </li>
              <li>
                <strong className="text-foreground">Pago anual:</strong> El pago anual se realiza por adelantado y no es reembolsable por meses no utilizados, salvo cuando la falta de prestación del servicio sea imputable a IsJuanDev.
              </li>
              <li>
                <strong className="text-foreground">Cancelación voluntaria:</strong> El cliente puede cancelar notificando antes de su siguiente fecha de corte; la cancelación aplica a partir del siguiente ciclo. Si cancela antes de cumplir la permanencia mínima de 3 meses, deberá pagar los meses restantes hasta completarla.
              </li>
              <li>
                <strong className="text-foreground">Entrega al cancelar:</strong> Al cancelar el plan Crecimiento o Pro, el asistente se desactiva y el cliente recibe una exportación de sus prospectos (Google Sheets o CSV). Al cancelar una web por suscripción sin ejercer la opción de compra, la web se despublica y el cliente conserva su dominio, textos e imágenes. Al cancelar el plan Esencial, Crecimiento o Pro, IsJuanDev transfiere el dominio al cliente sin costo, entregándole el código de autorización y el acceso necesario para trasladarlo al registrador que elija.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              3. Propiedad Intelectual y Código Entregado
            </h2>
            <p>
              Una vez cancelado el 100% del valor acordado del proyecto (en una web por suscripción, al ejercer la opción de compra):
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>El cliente adquiere la titularidad total sobre el código fuente, flujos de trabajo e interfaces desarrolladas para su solución.</li>
              <li>No existen tarifas mensuales forzadas por licenciamiento de código propietario.</li>
              <li>Las credenciales de despliegue, repositorios y accesos a bases de datos se entregan en su totalidad al cliente o su equipo técnico.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              4. Servicios y Costos de Terceros
            </h2>
            <p>
              El cliente reconoce que ciertos servicios complementarios dependen de proveedores tecnológicos de infraestructura ajenos a IsJuanDev:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Costos de consumo de la API oficial de WhatsApp (Meta / Cloud API / BSP).</li>
              <li>Registro y renovación de dominios de internet, salvo cuando estén incluidos en el plan contratado: Web Express en compra (primer año), Tu Nueva Web (primer año) y las webs por suscripción (mientras esté vigente el plan Esencial). El dominio se registra a nombre del cliente.</li>
              <li>Consumos directos de tokens o saldo en plataformas de modelos de lenguaje (OpenAI, DeepSeek, Anthropic) cuando el cliente no cuente con el plan Crecimiento o Pro, que los cubre dentro de un uso razonable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              5. Limitación de Responsabilidad
            </h2>
            <p>
              IsJuanDev diseña e implementa soluciones con altos estándares de ingeniería y buenas prácticas de seguridad. Sin embargo, no se hace responsable por caídas generales de servicios de terceros (interrupciones globales de Meta, OpenAI, Vercel o proveedores DNS), ni por modificaciones o alteraciones al código realizadas por personas ajenas al equipo de IsJuanDev tras la entrega final.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
              6. Canales de Contacto
            </h2>
            <p>
              Para cualquier consulta o solicitud relativa a los presentes Términos, comunícate a través del correo{' '}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                {SITE_CONFIG.email}
              </a>{' '}
              o mediante el canal de WhatsApp habilitado en{' '}
              <a href="https://www.isjuandev.com" className="text-primary hover:underline">
                www.isjuandev.com
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
