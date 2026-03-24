export const languages = {
  en: { label: 'English', htmlLang: 'en-GB' },
  ko: { label: '한국어', htmlLang: 'ko-KR' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
