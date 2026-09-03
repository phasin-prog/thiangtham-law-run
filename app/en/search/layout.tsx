import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search legal services and articles of Thiangtham Law Office.',
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/en/search',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function SearchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
