import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lawyers in Ubon Ratchathani — Nationwide Thai Attorneys',
  description:
    'Meet the lawyers of Thiangtham Law Office led by Kasem Chimphlee with 19+ years of experience. Consultation and litigation across Thailand. Call +66 82 377 2404',
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/en/lawyers',
    languages: {
      'th-TH': 'https://www.thiangthamlaw.com/th/lawyers',
      'en-US': 'https://www.thiangthamlaw.com/en/lawyers',
      'x-default': 'https://www.thiangthamlaw.com/th/lawyers',
    },
  },
}

export default function LawyersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
