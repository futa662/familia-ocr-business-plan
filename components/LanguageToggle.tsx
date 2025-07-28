'use client';

import { useLocale } from './TranslationsProvider';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'ja' ? 'vi' : 'ja';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
    >
      <span className={locale === 'ja' ? 'font-bold text-[#50A69F]' : 'text-gray-600'}>
        日本語
      </span>
      <span className="text-gray-400">|</span>
      <span className={locale === 'vi' ? 'font-bold text-[#50A69F]' : 'text-gray-600'}>
        Tiếng Việt
      </span>
    </button>
  );
}