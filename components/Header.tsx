'use client';

import { useTranslations } from './TranslationsProvider';
import LanguageToggle from './LanguageToggle';
import { useEffect, useState } from 'react';

export default function Header() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'executive-summary', label: t('nav.executiveSummary') },
    { id: 'market-analysis', label: t('nav.marketAnalysis') },
    { id: 'competitor-analysis', label: t('nav.competitorAnalysis') },
    { id: 'business-model', label: t('nav.businessModel') },
    { id: 'revenue-projection', label: t('nav.revenueProjection') },
    { id: 'sales-strategy', label: t('nav.salesStrategy') },
    { id: 'future-outlook', label: t('nav.futureOutlook') },
    { id: 'partnership', label: t('nav.partnership') },
    { id: 'summary', label: t('nav.summary') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <h1 className="text-2xl font-bold text-[#50A69F]">{t('title')}</h1>
            <p className="text-sm text-gray-600">{t('subtitle')}</p>
          </div>
          <LanguageToggle />
        </div>
        
        <nav className="py-2 border-t border-gray-100">
          <ul className="flex space-x-6 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-600 hover:text-[#50A69F] transition-colors whitespace-nowrap py-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}