'use client';

import { useTranslations, useLocale } from './TranslationsProvider';
import { Target, Trophy, Users } from 'lucide-react';

export default function Summary() {
  const t = useTranslations('summary');
  const locale = useLocale();

  return (
    <section id="summary" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#50A69F]">
          {t('title')}
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            {t('content')}
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {t('strength')}
          </p>
          
          {/* 3年後の目標 */}
          <div className="bg-gradient-to-r from-[#50A69F] to-[#3D7F7A] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Trophy className="w-8 h-8 mr-3" />
              {t('goals.title')}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-3" />
                <p className="text-sm mb-2">{t('goals.revenue').includes('：') ? t('goals.revenue').split('：')[0] : t('goals.revenue')}</p>
                <p className="text-2xl font-bold">{t('goals.revenue').includes('：') ? t('goals.revenue').split('：')[1] : (locale === 'ja' ? '14.25億円' : '285 tỷ VND')}</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-3" />
                <p className="text-sm mb-2">{t('goals.companies').includes('：') ? t('goals.companies').split('：')[0] : t('goals.companies')}</p>
                <p className="text-xl font-bold leading-tight">{t('goals.companies').includes('：') ? t('goals.companies').split('：')[1] : (locale === 'ja' ? '50社+15件/年' : '50 công ty + 15 dự án/năm')}</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-3" />
                <p className="text-sm mb-2">{t('goals.marketShare').includes('：') ? t('goals.marketShare').split('：')[0] : t('goals.marketShare')}</p>
                <p className="text-2xl font-bold">{t('goals.marketShare').includes('：') ? t('goals.marketShare').split('：')[1] : '1%'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 結論 */}
        <div className="text-center">
          <p className="text-xl font-bold text-gray-800">
            {t('conclusion')}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="bg-[#50A69F] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">
              🇯🇵 {locale === 'ja' ? '日本' : 'Nhật Bản'}
            </div>
            <div className="text-3xl font-bold text-gray-400">×</div>
            <div className="bg-[#50A69F] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">
              🇻🇳 {locale === 'ja' ? 'ベトナム' : 'Việt Nam'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}