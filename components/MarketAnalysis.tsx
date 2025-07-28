'use client';

import { useTranslations, useLocale } from './TranslationsProvider';
import { TrendingUp, Building2, Zap, Package } from 'lucide-react';
import MarketGrowthChart from './charts/MarketGrowthChart';

export default function MarketAnalysis() {
  const t = useTranslations('marketAnalysis');
  const locale = useLocale();

  return (
    <section id="market-analysis" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#50A69F]">
          {t('title')}
        </h2>

        <div className="grid gap-8 mb-12">
          {/* TAM */}
          <div className="bg-gradient-to-r from-[#50A69F]/10 to-[#7BC4BF]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#3D7F7A]">{t('tam.title')}</h3>
            <p className="text-gray-700 mb-4">{t('tam.content')}</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">{t('tam.currentSize')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">{locale === 'ja' ? '600億円' : '120 nghìn tỷ VND'}</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">{t('tam.futureSize')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">{locale === 'ja' ? '1.500億円' : '300 nghìn tỷ VND'}</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">{t('tam.aiShare')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">30%</p>
              </div>
            </div>
          </div>

          {/* Market Growth Chart */}
          <MarketGrowthChart />

          {/* SAM */}
          <div className="bg-gradient-to-r from-[#3D7F7A]/10 to-[#50A69F]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#3D7F7A]">{t('sam.title')}</h3>
            <p className="text-gray-700 mb-4">{t('sam.content')}</p>
            <div className="bg-white rounded-xl p-6">
              <p className="font-semibold mb-4">{t('sam.targetMarket')}</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-[#50A69F]" />
                  <div>
                    <p className="text-sm text-gray-600">{t('sam.energy')}</p>
                    <p className="font-bold">{locale === 'ja' ? '150億円' : '30 nghìn tỷ VND'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-8 h-8 text-[#50A69F]" />
                  <div>
                    <p className="text-sm text-gray-600">{t('sam.finance')}</p>
                    <p className="font-bold">{locale === 'ja' ? '200億円' : '40 nghìn tỷ VND'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-8 h-8 text-[#50A69F]" />
                  <div>
                    <p className="text-sm text-gray-600">{t('sam.logistics')}</p>
                    <p className="font-bold">{locale === 'ja' ? '100億円' : '20 nghìn tỷ VND'}</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-700">{t('sam.aiOcrMarket')}</p>
            </div>
          </div>

          {/* SOM */}
          <div className="bg-gradient-to-r from-[#7BC4BF]/10 to-[#50A69F]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#3D7F7A]">{t('som.title')}</h3>
            <p className="text-gray-700 mb-4">{t('som.content')}</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <TrendingUp className="w-8 h-8 text-[#50A69F] mx-auto mb-2" />
                <p className="text-sm text-gray-600">{t('som.targetShare')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">1%</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">{t('som.obtainableSize')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">{locale === 'ja' ? '5億円' : '1 nghìn tỷ VND'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 電力業界の具体的なニーズ */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-[#3D7F7A]">{t('powerIndustry.title')}</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-2">{t('powerIndustry.currentState')}</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('powerIndustry.processingCost')}</li>
                <li>• {t('powerIndustry.volume')}</li>
                <li>• {t('powerIndustry.challenges')}</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold mb-4">{t('powerIndustry.marketEstimate')}</h4>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">{t('powerIndustry.retailers')}</p>
                  <p className="text-xl font-bold text-[#50A69F]">700{locale === 'ja' ? '社' : ' công ty'}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">{t('powerIndustry.averageVolume')}</p>
                  <p className="text-xl font-bold text-[#50A69F]">500{locale === 'ja' ? '件' : ' trường hợp'}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">{t('powerIndustry.annualSize')}</p>
                  <p className="text-xl font-bold text-[#50A69F]">{locale === 'ja' ? '42億円' : '8,4 nghìn tỷ VND'}</p>
                </div>
              </div>
              <p className="text-center text-lg font-bold text-[#3D7F7A]">
                ※ {t('powerIndustry.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}