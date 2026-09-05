export type CourtJurisdiction = {
  court: string
  courtShort: string
  href: string
  addressNote: string
  districts: string[]
  basis: string
}

/**
 * เขตอำนาจศาลจังหวัดในอุบลราชธานี
 * อ้างอิง พ.ร.บ.จัดตั้งศาลจังหวัดที่อำเภอเดชอุดม จังหวัดอุบลราชธานี พ.ศ. 2538
 * และ พ.ร.บ.เปลี่ยนแปลงเขตอำนาจศาลจังหวัดอุบลราชธานี พ.ศ. 2537
 */
export const courtJurisdictions: CourtJurisdiction[] = [
  {
    court: 'ศาลจังหวัดเดชอุดม',
    courtShort: 'ศาลเดชอุดม',
    href: 'https://dudc.coj.go.th/',
    addressNote: 'อำเภอเดชอุดม จังหวัดอุบลราชธานี',
    districts: [
      'เดชอุดม',
      'นาจะหลวย',
      'น้ำยืน',
      'น้ำขุ่น',
      'บุณฑริก',
      'ทุ่งศรีอุดม',
      'นาเยีย',
    ],
    basis: 'พ.ร.บ.จัดตั้งศาลจังหวัดที่อำเภอเดชอุดม จังหวัดอุบลราชธานี พ.ศ. 2538 (รวมท้องที่ที่แยกใหม่จากอำเภอดังกล่าว)',
  },
  {
    court: 'ศาลจังหวัดอุบลราชธานี',
    courtShort: 'ศาลอุบล',
    href: 'https://ubtc.coj.go.th/',
    addressNote: 'อำเภอเมืองอุบลราชธานี จังหวัดอุบลราชธานี',
    districts: [
      'เมืองอุบลราชธานี',
      'วารินชำราบ',
      'พิบูลมังสาหาร',
      'ม่วงสามสิบ',
      'ตระการพืชผล',
      'เขื่องใน',
      'เขมราฐ',
      'โขงเจียม',
      'โพธิ์ไทร',
      'สำโรง',
      'ดอนมดแดง',
      'กุดข้าวปุ้น',
      'ตาลสุม',
      'ศรีเมืองใหม่',
      'สิรินธร',
      'นาตาล',
      'เหล่าเสือโก้ก',
      'สว่างวีระวงศ์',
    ],
    basis: 'พ.ร.บ.เปลี่ยนแปลงเขตอำนาจศาลจังหวัดอุบลราชธานี พ.ศ. 2537 (เขตตลอดท้องที่จังหวัด ยกเว้นเขตศาลจังหวัดเดชอุดม)',
  },
]

export function findCourtByDistrict(district: string): CourtJurisdiction | undefined {
  return courtJurisdictions.find((court) => court.districts.includes(district))
}

export const specialCourts = [
  {
    court: 'ศาลแขวงอุบลราชธานี',
    href: 'https://ubtmc.coj.go.th/',
    note: 'คดีมโนสาเร่ คดีผู้บริโภค และคดีอาญาโทษเบาในจังหวัดอุบลราชธานี',
  },
  {
    court: 'ศาลเยาวชนและครอบครัวจังหวัดอุบลราชธานี',
    href: 'https://www.coj.go.th/',
    note: 'คดีครอบครัว คดีเยาวชน และคดีมรดกที่เกี่ยวเนื่อง ทั่วจังหวัดอุบลราชธานี',
  },
]
