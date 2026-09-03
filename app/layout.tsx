import type { Metadata } from 'next'
import { Sarabun } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { AnalyticsTracker } from '@/components/analytics-tracker'
import './globals.css'

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sarabun',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0b1f3a' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1f3a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thiangthamlaw.com'),
  title: {
    default: 'ทนายความเดชอุดม ทนายอุบลราชธานี รับว่าความทั่วราชอาณาจักร | สำนักกฎหมายเที่ยงธรรมทนายความ',
    template: '%s | สำนักกฎหมายเที่ยงธรรมทนายความ',
  },
  description:
    'หาทนาย จ้างทนาย ปรึกษากฎหมายออนไลน์ กับสำนักกฎหมายเที่ยงธรรมทนายความ ประสบการณ์กว่า 19 ปี รับว่าความคดีแพ่ง คดีอาญา คดีครอบครัว มรดก ที่ดิน ทั่วอุบลราชธานีและทั่วราชอาณาจักร โทร 082-377-2404',
  keywords: [
    'หาทนาย',
    'จ้างทนาย',
    'ปรึกษาทนาย',
    'ปรึกษากฎหมาย',
    'ปรึกษากฎหมายออนไลน์',
    'ทนายใกล้ฉัน',
    'ทนายความใกล้ฉัน',
    'รับว่าความทั่วราชอาณาจักร',
    'ทนายเดชอุดม',
    'ทนายอุบลราชธานี',
    'สำนักกฎหมายเที่ยงธรรมทนายความ',
  ],
  authors: [{ name: 'สำนักกฎหมายเที่ยงธรรมทนายความ' }],
  creator: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
  openGraph: {
    title: 'ทนายความเดชอุดม ทนายอุบลราชธานี รับว่าความทั่วราชอาณาจักร | สำนักกฎหมายเที่ยงธรรมทนายความ',
    description:
      'หาทนาย จ้างทนาย ปรึกษากฎหมายออนไลน์ ประสบการณ์กว่า 19 ปี คดีแพ่ง อาญา ครอบครัว มรดก ที่ดิน ทั่วอุบลราชธานีและทั่วราชอาณาจักร',
    url: 'https://www.thiangthamlaw.com/th',
    siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    images: [
      {
        url: '/law-office-hero.png',
        width: 1200,
        height: 630,
        alt: 'สำนักกฎหมายเที่ยงธรรมทนายความ — ทนายความเดชอุดม อุบลราชธานี รับว่าความทั่วราชอาณาจักร',
      },
    ],
    locale: 'th_TH',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ทนายความเดชอุดม ทนายอุบลราชธานี รับว่าความทั่วราชอาณาจักร',
    description: 'หาทนาย จ้างทนาย ปรึกษากฎหมายออนไลน์ ประสบการณ์กว่า 19 ปี โทร 082-377-2404',
    images: ['/law-office-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/th',
    languages: {
      'th-TH': 'https://www.thiangthamlaw.com/th',
      'en-US': 'https://www.thiangthamlaw.com/en',
      'x-default': 'https://www.thiangthamlaw.com/th',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={`bg-background ${sarabun.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              `(()=>{try{const path=location.pathname;const locale=path.startsWith('/en')?'en':'th';document.documentElement.lang=locale;document.documentElement.dataset.locale=locale;}catch{}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-gold">
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
              alternateName: 'Tiangtham Law Office',
              url: 'https://www.thiangthamlaw.com/th',
              inLanguage: ['th-TH', 'en-US'],
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.thiangthamlaw.com/th/articles?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <AnalyticsTracker />
        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7LXBDR1Z2V"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7LXBDR1Z2V');
            `,
          }}
        />
      </body>
    </html>
  )
}

