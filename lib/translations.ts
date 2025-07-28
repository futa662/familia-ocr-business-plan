import jaTranslations from '@/locales/ja.json';
import viTranslations from '@/locales/vi.json';

export type Locale = 'ja' | 'vi';

const translations = {
  ja: jaTranslations,
  vi: viTranslations
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}