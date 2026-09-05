import type { Metadata } from 'next'
import { FloatingContactButton } from '@/components/floating-contact-button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DocumentLocale } from '@/components/document-locale'
import { MotionShell } from '@/components/motion/motion-shell'
import { LanguageProvider } from '@/lib/i18n'
import { englishHomeFaqs } from '@/lib/data/faqs-en'
import { officeContact, officeInfo } from '@/lib/data/office'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thiangthamlaw.com'),
  title: {
    default: 'Thiangtham Law Office | Legal Services in Thailand',
    template: '%s | Thiangtham Law Office',
  },
  description:
    'Thai legal consultation, representation, litigation, contracts, and business legal services from Thiangtham Law Office in Ubon Ratchathani.',
  keywords: [
    'lawyer Thailand',
    'Thai law office',
    'nationwide lawyer Thailand',
    'Bangkok lawyer',
    'Phuket lawyer',
    'Chiang Mai lawyer',
    'Pattaya lawyer',
    'Ubon Ratchathani lawyer',
    'Isan lawyer Thailand',
    'English speaking lawyer Thailand',
    'legal consultation Thailand',
    'online legal advice Thailand',
    'litigation lawyer Thailand',
    'criminal defense Thailand',
    'civil litigation Thailand',
    'family law Thailand',
    'inheritance and probate lawyer Thailand',
    'land and property lawyer Thailand',
    'business contracts Thailand',
    'visa and legal documents Thailand',
    'Thiangtham Law Office',
  ],
  openGraph: {
    title: 'Thiangtham Law Office | Legal Services in Thailand',
    description:
      'Legal consultation, representation, litigation, and document services for individuals and businesses across Thailand.',
    url: 'https://www.thiangthamlaw.com/en',
    siteName: 'Thiangtham Law Office',
    images: [
      {
        url: '/law-office-hero.png',
        width: 1200,
        height: 630,
        alt: 'Thiangtham Law Office Thailand',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thiangtham Law Office | Legal Services in Thailand',
    description: 'Professional legal services, litigation, and consultation across all regions of Thailand.',
    images: ['/law-office-hero.png'],
  },
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/en',
    languages: {
      'th-TH': 'https://www.thiangthamlaw.com/th',
      'en-US': 'https://www.thiangthamlaw.com/en',
      'x-default': 'https://www.thiangthamlaw.com/th',
    },
  },
}

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // locale มาจาก path /en โดยตรง ไม่ต้องอ่าน cookie ฝั่ง server
  // เพื่อให้ทุกหน้า prerender เป็น static และขึ้น CDN cache ได้

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: officeInfo.englishName,
    alternateName: [officeInfo.name, 'Thiangtham Law Firm Thailand', 'Nationwide Thai Attorney'],
    description: metadata.description,
    url: 'https://www.thiangthamlaw.com/en',
    image: 'https://www.thiangthamlaw.com/law-office-hero.png',
    foundingDate: '2007',
    numberOfEmployees: 9,
    telephone: officeContact.phones[0],
    email: officeContact.email,
    logo: 'https://www.thiangthamlaw.com/law-office-logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+66-82-377-2404',
      contactType: 'customer service',
      areaServed: 'TH',
      availableLanguage: ['Thai', 'English'],
    },
    sameAs: [officeContact.facebookUrl, officeContact.mapUrl],
    founder: {
      '@type': 'Attorney',
      name: 'Kasem Chimphlee',
      alternateName: 'นายเกษม ฉิมพลี',
      jobTitle: 'Head Lawyer',
      worksFor: { '@type': 'LegalService', name: officeInfo.englishName },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: officeContact.addressEn,
      addressLocality: 'Det Udom',
      addressRegion: 'Ubon Ratchathani',
      postalCode: '34160',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.904,
      longitude: 105.078,
    },
    areaServed: [
      { '@type': 'Country', name: 'Thailand' },
      { '@type': 'AdministrativeArea', name: 'All 77 Provinces of Thailand' },
      { '@type': 'AdministrativeArea', name: 'Bangkok Metropolitan Region' },
      { '@type': 'AdministrativeArea', name: 'Northeastern Thailand (Isan)' },
      { '@type': 'AdministrativeArea', name: 'Northern Thailand' },
      { '@type': 'AdministrativeArea', name: 'Southern Thailand' },
      { '@type': 'AdministrativeArea', name: 'Eastern Thailand' },
    ],
    serviceType: [
      'Legal Consultation',
      'Online Legal Advice',
      'Nationwide Court Representation',
      'Civil & Commercial Litigation',
      'Criminal Defense',
      'Family & Divorce Law',
      'Inheritance & Probate',
      'Land & Property Disputes',
      'Corporate & Contract Law',
    ],
    knowsAbout: [
      'Lawyer in Thailand',
      'Thai Attorney',
      'English Speaking Lawyer in Thailand',
      'Nationwide Legal Defense Thailand',
      'Bangkok Lawyer',
      'Phuket Lawyer',
      'Chiang Mai Lawyer',
      'Pattaya Lawyer',
      'Civil Law Thailand',
      'Criminal Law Thailand',
      'Family Law Thailand',
      'Estate Administration Thailand',
      'Land Ownership Law Thailand',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:30',
        closes: '17:30',
      },
    ],
    priceRange: '$$',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: englishHomeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <LanguageProvider initialLocale="en">
      <DocumentLocale />
      <MotionShell
        header={<SiteHeader />}
        footer={<SiteFooter />}
        floating={<FloatingContactButton />}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </MotionShell>
    </LanguageProvider>
  )
}
