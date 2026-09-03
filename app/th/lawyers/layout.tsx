import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'หาทนาย จ้างทนาย ทีมทนายความเดชอุดม อุบลราชธานี รับว่าความทั่วราชอาณาจักร',
  description:
    'ทีมทนายความสำนักกฎหมายเที่ยงธรรมทนายความ นำโดยทนายเกษม ฉิมพลี ประสบการณ์กว่า 19 ปี ให้คำปรึกษา วางแนวทาง และดำเนินคดีแพ่ง อาญา ครอบครัว มรดก ที่ดิน ทั่วอุบลราชธานีและทั่วราชอาณาจักร โทร 082-377-2404',
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/th/lawyers',
    languages: {
      'th-TH': 'https://www.thiangthamlaw.com/th/lawyers',
      'en-US': 'https://www.thiangthamlaw.com/en/lawyers',
      'x-default': 'https://www.thiangthamlaw.com/th/lawyers',
    },
  },
  openGraph: {
    title: 'ทีมทนายความเดชอุดม อุบลราชธานี รับว่าความทั่วราชอาณาจักร',
    description: 'หาทนาย จ้างทนาย ปรึกษากฎหมายกับทีมทนายประสบการณ์กว่า 19 ปี โทร 082-377-2404',
    url: 'https://www.thiangthamlaw.com/th/lawyers',
    siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    locale: 'th_TH',
    type: 'website',
  },
}

export default function LawyersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
