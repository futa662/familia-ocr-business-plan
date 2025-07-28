'use client';

import { useTranslations, useLocale } from './TranslationsProvider';
import { Target, TrendingUp, Rocket } from 'lucide-react';
import RevenueChart from './charts/RevenueChart';

export default function RevenueProjection() {
  const t = useTranslations('revenueProjection');
  const locale = useLocale();

  return (
    <section id="revenue-projection" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#50A69F]">
          {t('title')}
        </h2>

        <div className="space-y-8">
          {/* 短期 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('shortTerm.title')}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold mb-3 text-[#3D7F7A]">{t('shortTerm.pattern1.title')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('shortTerm.pattern1.target')}</li>
                  <li>• {t('shortTerm.pattern1.monthlyRevenue')}</li>
                  <li>• {t('shortTerm.pattern1.totalRevenue')}</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold mb-3 text-[#3D7F7A]">{t('shortTerm.pattern2.title')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('shortTerm.pattern2.target')}</li>
                  <li>• {t('shortTerm.pattern2.revenue')}</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center bg-[#50A69F]/10 rounded-lg p-4">
              <p className="text-xl font-bold text-[#3D7F7A]">{t('shortTerm.total')}</p>
              <p className="text-3xl font-bold text-[#50A69F]">{locale === 'ja' ? '1.35億円' : '27 tỷ VND'}</p>
            </div>
          </div>

          {/* 中期 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('midTerm.title')}</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-2">{t('midTerm.saas')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">20{locale === 'ja' ? '社' : ' công ty'}</p>
                <p className="text-sm text-gray-600">{locale === 'ja' ? '月間売上 4,000万円' : 'Doanh thu hàng tháng 8 tỷ VND'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-2">{t('midTerm.development')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">10{locale === 'ja' ? '件' : ' dự án'}</p>
                <p className="text-sm text-gray-600">{locale === 'ja' ? '年間 1.5億円' : '30 tỷ VND/năm'}</p>
              </div>
              <div className="bg-[#50A69F]/10 rounded-xl p-6 text-center">
                <p className="text-gray-700 mb-2">{t('midTerm.annual')}</p>
                <p className="text-3xl font-bold text-[#50A69F]">{locale === 'ja' ? '6.3億円' : '126 tỷ VND'}</p>
              </div>
            </div>
          </div>

          {/* 長期 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Rocket className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('longTerm.title')}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-2">{t('longTerm.saas')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">50{locale === 'ja' ? '社' : ' công ty'}</p>
                <p className="text-sm text-gray-600">{locale === 'ja' ? '月間売上 1億円' : 'Doanh thu hàng tháng 20 tỷ VND'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-2">{t('longTerm.development')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">15{locale === 'ja' ? '件' : ' dự án'}</p>
                <p className="text-sm text-gray-600">{locale === 'ja' ? '年間 2.25億円' : '45 tỷ VND/năm'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-600 mb-2">{t('longTerm.marketShare')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">1%</p>
              </div>
              <div className="bg-[#50A69F]/10 rounded-xl p-6 text-center">
                <p className="text-gray-700 mb-2">{t('longTerm.annual')}</p>
                <p className="text-3xl font-bold text-[#50A69F]">{locale === 'ja' ? '14.25億円' : '285 tỷ VND'}</p>
              </div>
            </div>
          </div>

          {/* Revenue Chart */}
          <RevenueChart />
        </div>
      </div>
    </section>
  );
}