'use client';

import { useTranslations } from './TranslationsProvider';
import { Handshake, Building2, DollarSign, Sparkles } from 'lucide-react';

export default function Partnership() {
  const t = useTranslations('partnership');

  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#50A69F]">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* 開発体制 */}
          <div className="bg-gradient-to-br from-[#50A69F]/10 to-[#7BC4BF]/10 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Building2 className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('development.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700 mb-2">{t('development.foundation').includes('：') ? t('development.foundation').split('：')[0] : t('development.foundation')}</p>
                <p className="text-gray-600">{t('development.foundation').includes('：') ? t('development.foundation').split('：')[1] : ''}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700 mb-2">{t('development.customization').includes('：') ? t('development.customization').split('：')[0] : t('development.customization')}</p>
                <p className="text-gray-600">{t('development.customization').includes('：') ? t('development.customization').split('：')[1] : ''}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700 mb-2">{t('development.quality').includes('：') ? t('development.quality').split('：')[0] : t('development.quality')}</p>
                <p className="text-gray-600">{t('development.quality').includes('：') ? t('development.quality').split('：')[1] : ''}</p>
              </div>
            </div>
          </div>

          {/* 収益配分 */}
          <div className="bg-gradient-to-br from-[#3D7F7A]/10 to-[#50A69F]/10 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <DollarSign className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('revenue.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700 mb-2">{t('revenue.pattern1').includes('：') ? t('revenue.pattern1').split('：')[0] : t('revenue.pattern1')}</p>
                <p className="text-gray-600">{t('revenue.pattern1').includes('：') ? t('revenue.pattern1').split('：')[1] : ''}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700 mb-2">{t('revenue.pattern2').includes('：') ? t('revenue.pattern2').split('：')[0] : t('revenue.pattern2')}</p>
                <p className="text-gray-600">{t('revenue.pattern2').includes('：') ? t('revenue.pattern2').split('：')[1] : ''}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 期待する連携 */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <Handshake className="w-10 h-10 text-[#50A69F] mr-3" />
            <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('expectations.title')}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#50A69F] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold mb-1">{t('expectations.tech')}</h4>
                <p className="text-gray-600 text-sm"></p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#50A69F] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold mb-1">{t('expectations.improvement')}</h4>
                <p className="text-gray-600 text-sm"></p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#50A69F] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold mb-1">{t('expectations.newFeatures')}</h4>
                <p className="text-gray-600 text-sm"></p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#50A69F] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold mb-1">{t('expectations.asiaExpansion')}</h4>
                <p className="text-gray-600 text-sm"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}