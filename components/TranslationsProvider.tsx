'use client';

import { createContext, useContext } from 'react';

type TranslationsContextType = {
  t: (key: string) => string;
  locale: string;
};

const TranslationsContext = createContext<TranslationsContextType | null>(null);

export function TranslationsProvider({
  children,
  translations,
  locale
}: {
  children: React.ReactNode;
  translations: any;
  locale: string;
}) {
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <TranslationsContext.Provider value={{ t, locale }}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const context = useContext(TranslationsContext);
  if (!context) {
    throw new Error('useTranslations must be used within TranslationsProvider');
  }

  if (namespace) {
    return (key: string) => context.t(`${namespace}.${key}`);
  }

  return context.t;
}

export function useLocale() {
  const context = useContext(TranslationsContext);
  if (!context) {
    throw new Error('useLocale must be used within TranslationsProvider');
  }
  return context.locale;
}