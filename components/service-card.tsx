import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { LegalService } from '@/lib/data/services'
import { getLocalePath, type Locale } from '@/lib/i18n-config'
import { serviceIcons } from '@/lib/service-icons'

export function ServiceCard({
  service,
  locale = 'th',
}: {
  service: LegalService
  locale?: Locale
}) {
  const Icon = serviceIcons[service.icon]
  return (
    <Link
      href={getLocalePath(`/services/${service.slug}`, locale)}
      data-motion-reveal=""
      data-motion-depth=""
      className="group relative flex flex-col rounded-3xl border border-border/80 bg-card p-8 sm:p-9 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      {/* Top subtle gold line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-500 group-hover:via-gold/70 rounded-t-3xl" />

      {/* Decorative subtle background tint on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />
      
      <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-gold group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/10">
        {Icon && <Icon className="size-7 text-gold-ink group-hover:text-gold transition-colors" aria-hidden="true" />}
      </div>

      <h3 className="font-serif text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-gold-ink leading-snug">
        {service.title}
      </h3>
      
      <div className="mt-4 h-0.5 w-10 rounded-full bg-gold/30 transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
      
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary/80">
        {service.description}
      </p>

      <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary transition-all duration-300 group-hover:text-gold-ink group-hover:gap-3">
        <span>{locale === 'en' ? 'Learn More' : 'อ่านรายละเอียด'}</span>
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Link>
  )
}
