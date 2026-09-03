import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'สำนักกฎหมายเที่ยงธรรมทนายความ — ทนายเดชอุดม อุบลราชธานี',
    short_name: 'เที่ยงธรรมทนายความ',
    description:
      'หาทนาย จ้างทนาย ปรึกษากฎหมายออนไลน์ รับว่าความคดีแพ่ง อาญา ครอบครัว มรดก ที่ดิน ทั่วราชอาณาจักร',
    start_url: '/th',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0b1f3a',
    lang: 'th-TH',
    dir: 'auto',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
