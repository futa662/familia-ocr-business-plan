'use client';

import { useTranslations } from './TranslationsProvider';
import { Award, Brain, Zap, Layers } from 'lucide-react';

export default function CompetitorAnalysis() {
  const t = useTranslations('competitorAnalysis');

  return (
    <section id="competitor-analysis" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#50A69F]">
          {t('title')}
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12">{t('subtitle')}</p>

        {/* 比較表 */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-[#50A69F] text-white">
                <th className="px-6 py-4 text-left">{t('table.headers.item')}</th>
                <th className="px-6 py-4 text-center">{t('table.headers.traditional')}</th>
                <th className="px-6 py-4 text-center">{t('table.headers.aiCompetitor')}</th>
                <th className="px-6 py-4 text-center bg-[#3D7F7A]">{t('table.headers.familiaOcr')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold">{t('table.rows.accuracy.label')}</td>
                <td className="px-6 py-4 text-center">{t('table.rows.accuracy.traditional')}</td>
                <td className="px-6 py-4 text-center">{t('table.rows.accuracy.aiCompetitor')}</td>
                <td className="px-6 py-4 text-center font-bold text-[#50A69F]">{t('table.rows.accuracy.familiaOcr')}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-4 font-semibold">{t('table.rows.contextUnderstanding.label')}</td>
                <td className="px-6 py-4 text-center text-2xl">{t('table.rows.contextUnderstanding.traditional')}</td>
                <td className="px-6 py-4 text-center text-2xl">{t('table.rows.contextUnderstanding.aiCompetitor')}</td>
                <td className="px-6 py-4 text-center text-2xl font-bold text-[#50A69F]">{t('table.rows.contextUnderstanding.familiaOcr')}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-4 font-semibold">{t('table.rows.complexLayout.label')}</td>
                <td className="px-6 py-4 text-center text-2xl">{t('table.rows.complexLayout.traditional')}</td>
                <td className="px-6 py-4 text-center text-2xl">{t('table.rows.complexLayout.aiCompetitor')}</td>
                <td className="px-6 py-4 text-center text-2xl font-bold text-[#50A69F]">{t('table.rows.complexLayout.familiaOcr')}</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 font-semibold">{t('table.rows.learningFunction.label')}</td>
                <td className="px-6 py-4 text-center text-2xl">{t('table.rows.learningFunction.traditional')}</td>
                <td className="px-6 py-4 text-center text-2xl">{t('table.rows.learningFunction.aiCompetitor')}</td>
                <td className="px-6 py-4 text-center font-bold text-[#50A69F]">{t('table.rows.learningFunction.familiaOcr')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 競争優位性 */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-[#3D7F7A]">{t('advantages.title')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Brain className="w-10 h-10 text-[#50A69F] flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">1. {t('advantages.llm').split('：')[0]}</h4>
                <p className="text-gray-700">{t('advantages.llm').split('：')[1]}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Layers className="w-10 h-10 text-[#50A69F] flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">2. {t('advantages.layout').split('：')[0]}</h4>
                <p className="text-gray-700">{t('advantages.layout').split('：')[1]}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="w-10 h-10 text-[#50A69F] flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">3. {t('advantages.learning').split('：')[0]}</h4>
                <p className="text-gray-700">{t('advantages.learning').split('：')[1]}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-10 h-10 text-[#50A69F] flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">4. {t('advantages.localization').split('：')[0]}</h4>
                <p className="text-gray-700">{t('advantages.localization').split('：')[1]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}