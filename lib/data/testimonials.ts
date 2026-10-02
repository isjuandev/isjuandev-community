export interface Testimonial {
  name: string
  business: string
  text: string
  result: string
  link?: string
}

export const SHOW_TESTIMONIALS = false

export const testimonials: Testimonial[] = [
  {
    name: '[PLACEHOLDER] Nombre Cliente 1',
    business: '[PLACEHOLDER] Empresa o Negocio 1',
    text: '[PLACEHOLDER] Testimonio detallado sobre la experiencia de trabajo, claridad en el proceso y entrega rápida.',
    result: '[PLACEHOLDER] Métrica de resultado concreta obtenida con la solución implementada.',
    link: 'https://example.com'
  },
  {
    name: '[PLACEHOLDER] Nombre Cliente 2',
    business: '[PLACEHOLDER] Empresa o Negocio 2',
    text: '[PLACEHOLDER] Testimonio detallado sobre la experiencia de trabajo, claridad en el proceso y entrega rápida.',
    result: '[PLACEHOLDER] Métrica de resultado concreta obtenida con la solución implementada.',
    link: 'https://example.com'
  },
  {
    name: '[PLACEHOLDER] Nombre Cliente 3',
    business: '[PLACEHOLDER] Empresa o Negocio 3',
    text: '[PLACEHOLDER] Testimonio detallado sobre la experiencia de trabajo, claridad en el proceso y entrega rápida.',
    result: '[PLACEHOLDER] Métrica de resultado concreta obtenida con la solución implementada.',
    link: 'https://example.com'
  }
]

export const canRenderTestimonials = 
  SHOW_TESTIMONIALS && 
  testimonials.length > 0 && 
  !testimonials.some((t) => t.name.includes('[PLACEHOLDER]') || t.text.includes('[PLACEHOLDER]'))
