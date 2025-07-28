import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import { notFound } from 'next/navigation';
import { getTranslations, type Locale } from '@/lib/translations';
import { TranslationsProvider } from '@/components/TranslationsProvider';

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Familia OCR 事業計画書 | 株式会社ハウディ × TERACOM社",
  description: "AI OCRとLLMを融合した革新的な文書処理ソリューション",
  keywords: "OCR, AI, 文書処理, デジタル化, ビジネスソリューション",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}

const locales = ['ja', 'vi'];

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const translations = getTranslations(locale as Locale);

  return (
    <html lang={locale}>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <TranslationsProvider translations={translations} locale={locale}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}