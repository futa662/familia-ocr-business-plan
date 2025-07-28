'use client';

import { useTranslations } from './TranslationsProvider';
import { CheckCircle } from 'lucide-react';

export default function ExecutiveSummary() {
  const t = useTranslations('executiveSummary');

  return (
    <section id="executive-summary" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#50A69F]">
          {t('title')}
        </h2>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {t('description')}
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-6 text-[#3D7F7A]">
              {t('points.title')}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#50A69F] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-bold">{t('points.accuracy')}</span>
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#50A69F] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-bold">{t('points.timeReduction')}</span>
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#50A69F] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-bold">{t('points.marketSize')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}