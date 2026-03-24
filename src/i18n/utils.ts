import { ui } from './ui';
import { defaultLang, type Lang } from './languages';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'ko') return 'ko';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'ko' : 'en';
}

export function getAlternatePath(currentPath: string): string {
  const parts = currentPath.split('/');
  if (parts[1] === 'en') {
    parts[1] = 'ko';
  } else if (parts[1] === 'ko') {
    parts[1] = 'en';
  }
  return parts.join('/') || '/';
}
