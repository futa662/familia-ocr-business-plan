'use client';

import { useTranslations } from './TranslationsProvider';
import { Calendar, Map, Globe } from 'lucide-react';

export default function FutureOutlook() {
  const t = useTranslations('futureOutlook');

  return (
    <section id="future-outlook" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#50A69F]">
          {t('title')}
        </h2>

        <div className="space-y-8">
          {/* 製品ロードマップ */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Calendar className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('roadmap.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#50A69F] text-white rounded-lg px-4 py-2 font-bold mr-4 flex-shrink-0">
                  Phase 1
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    {t('roadmap.phase1').includes('：') ? t('roadmap.phase1').split('：')[0] : t('roadmap.phase1')}
                  </p>
                  <p className="text-gray-600">{t('roadmap.phase1').includes('：') ? t('roadmap.phase1').split('：')[1] : ''}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#3D7F7A] text-white rounded-lg px-4 py-2 font-bold mr-4 flex-shrink-0">
                  Phase 2
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    {t('roadmap.phase2').includes('：') ? t('roadmap.phase2').split('：')[0] : t('roadmap.phase2')}
                  </p>
                  <p className="text-gray-600">{t('roadmap.phase2').includes('：') ? t('roadmap.phase2').split('：')[1] : ''}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#7BC4BF] text-white rounded-lg px-4 py-2 font-bold mr-4 flex-shrink-0">
                  Phase 3
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    {t('roadmap.phase3').includes('：') ? t('roadmap.phase3').split('：')[0] : t('roadmap.phase3')}
                  </p>
                  <p className="text-gray-600">{t('roadmap.phase3').includes('：') ? t('roadmap.phase3').split('：')[1] : ''}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 事業拡大計画 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Map className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('expansion.title')}</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#50A69F]/10 to-[#7BC4BF]/10 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-[#3D7F7A]">1. {t('expansion.industry').includes('：') ? t('expansion.industry').split('：')[0] : t('expansion.industry')}</h4>
                <div className="text-gray-700">
                  <p className="text-sm">{t('expansion.industry').includes('：') ? t('expansion.industry').split('：')[1] : ''}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(t('expansion.industry').includes('：') ? t('expansion.industry').split('：')[1] : '').split('→').map((item, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm">
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#3D7F7A]/10 to-[#50A69F]/10 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-[#3D7F7A]">2. {t('expansion.region').includes('：') ? t('expansion.region').split('：')[0] : t('expansion.region')}</h4>
                <div className="text-gray-700">
                  <p className="text-sm">{t('expansion.region').includes('：') ? t('expansion.region').split('：')[1] : ''}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(t('expansion.region').includes('：') ? t('expansion.region').split('：')[1] : '').split('→').map((item, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm">
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#7BC4BF]/10 to-[#50A69F]/10 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Globe className="w-6 h-6 text-[#50A69F] mr-2" />
                  <h4 className="font-bold text-lg text-[#3D7F7A]">3. {t('expansion.overseas').includes('：') ? t('expansion.overseas').split('：')[0] : t('expansion.overseas')}</h4>
                </div>
                <p className="text-gray-700 text-sm">{t('expansion.overseas').includes('：') ? t('expansion.overseas').split('：')[1] : ''}</p>
              </div>
            </div>
          </div>

          {/* 技術改善ロードマップ */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Globe className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('techImprovement.title')}</h3>
            </div>
            
            <div className="space-y-6">
              {/* 優先度：高 */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-red-700">{t('techImprovement.highPriority.title')}</h4>
                <p className="text-gray-700 mb-4">{t('techImprovement.highPriority.description')}</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#50A69F] font-bold mr-2">•</span>
                    <span className="text-gray-700">{t('techImprovement.highPriority.cloudStorage')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#50A69F] font-bold mr-2">•</span>
                    <span className="text-gray-700">{t('techImprovement.highPriority.autoQuote')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#50A69F] font-bold mr-2">•</span>
                    <span className="text-gray-700">{t('techImprovement.highPriority.documentManagement')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#50A69F] font-bold mr-2">•</span>
                    <span className="text-gray-700 font-semibold">{t('techImprovement.highPriority.expectedEffect')}</span>
                  </li>
                </ul>
              </div>

              {/* 優先度：中 */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-amber-700">{t('techImprovement.mediumPriority.title')}</h4>
                <p className="text-gray-700 mb-4">{t('techImprovement.mediumPriority.description')}</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#50A69F] font-bold mr-2">•</span>
                    <span className="text-gray-700">{t('techImprovement.mediumPriority.multimodal')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#50A69F] font-bold mr-2">•</span>
                    <span className="text-gray-700">{t('techImprovement.mediumPriority.structureRecognition')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#50A69F] font-bold mr-2">•</span>
                    <span className="text-gray-700 font-semibold">{t('techImprovement.mediumPriority.expectedEffect')}</span>
                  </li>
                </ul>
              </div>

              {/* 投資に関する注記 */}
              <div className="bg-gray-50 rounded-xl p-4 mt-6">
                <p className="text-gray-600 text-sm">
                  {t('techImprovement.investmentNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}