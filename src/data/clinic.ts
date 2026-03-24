export const clinic = {
  name: {
    en: 'London Dental Clinic',
    ko: '런던치과의원',
  },
  nameShort: {
    en: 'London Dental',
    ko: '런던치과',
  },
  phone: {
    international: '+82-2-732-1917',
    domestic: '02-732-1917',
    tel: '+8227321917',
  },
  email: 'seoul.londondental@gmail.com',
  address: {
    en: {
      street: '97 Jong-ro 5-gil, 2nd Floor',
      district: 'Susong-dong, Jongno-gu',
      city: 'Seoul',
      country: 'South Korea',
      full: '2nd Floor, 97 Jong-ro 5-gil, Susong-dong, Jongno-gu, Seoul',
    },
    ko: {
      full: '서울 종로구 종로5길 97, 2층 (수송동)',
    },
  },
  postalCode: '03054',
  geo: {
    latitude: 37.5725,
    longitude: 126.979,
  },
  links: {
    naverBooking: 'https://booking.naver.com/booking/13/bizes/185268',
    naverMap: 'https://map.naver.com/p/search/%EB%9F%B0%EB%8D%98%EC%B9%98%EA%B3%BC%EC%9D%98%EC%9B%90/place/1400948670?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp',
    googleMapsEmbed: 'https://maps.google.com/maps?q=London%20Dental%20Clinic%2C%2097%20Jong-ro%205-gil%2C%20Susong-dong%2C%20Jongno-gu%2C%20Seoul%2C%20South%20Korea&t=m&z=15&output=embed&iwloc=near',
  },
  businessReg: '106-91-61579',
  doctor: {
    name: {
      en: 'Dr. Fiona Park',
      ko: '박지연 원장',
    },
  },
  verification: {
    google: 'HpZ_4jK3zaEh4L09l3m2FkYGdjb3hxGePse_9RHhx6Y',
    naver: '', // To be obtained from Naver Search Advisor
  },
} as const;
