'use client';

import { useTranslations, useLocale } from './TranslationsProvider';
import { Cloud, Code, TestTube } from 'lucide-react';

export default function BusinessModel() {
  const t = useTranslations('businessModel');
  const locale = useLocale();

  return (
    <section id="business-model" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#50A69F]">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* パターン1: SaaSモデル */}
          <div className="bg-gradient-to-br from-[#50A69F]/10 to-[#7BC4BF]/10 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Cloud className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('pattern1.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700">{t('pattern1.initialCost')}</p>
                <p className="text-xl font-bold text-[#50A69F]">{locale === 'ja' ? '50万円' : '100 triệu VND'}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700 mb-2">{t('pattern1.monthlyFee')}</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• {t('pattern1.perDocument')}</li>
                  <li>• {t('pattern1.powerBill')}</li>
                  <li>• {t('pattern1.bankbook')}</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700">{t('pattern1.expectedVolume')}</p>
                <p className="text-lg font-bold text-[#50A69F]">{locale === 'ja' ? '月1,000ドキュメント' : '1.000 tài liệu/tháng'}</p>
              </div>
            </div>
          </div>

          {/* パターン2: ライセンス提供＋受託開発 */}
          <div className="bg-gradient-to-br from-[#3D7F7A]/10 to-[#50A69F]/10 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Code className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('pattern2.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700">{t('pattern2.licenseFee')}</p>
                <p className="text-xl font-bold text-[#50A69F]">{locale === 'ja' ? '300万円/年' : '600 triệu VND/năm'}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700">{t('pattern2.developmentFee')}</p>
                <p className="text-lg font-bold text-[#50A69F]">{locale === 'ja' ? '1,200万円〜' : 'Từ 2,4 tỷ VND'}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700">{t('pattern2.averagePrice')}</p>
                <p className="text-xl font-bold text-[#50A69F]">{locale === 'ja' ? '1,500万円' : '3 tỷ VND'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* トライアルプログラム */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <TestTube className="w-10 h-10 text-[#50A69F] mr-3" />
            <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('trial.title')}</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-gray-600 mb-2">{t('trial.period')}</p>
              <p className="text-2xl font-bold text-[#50A69F]">{locale === 'ja' ? '2週間' : '2 tuần'}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">{t('trial.cost')}</p>
              <p className="text-2xl font-bold text-[#50A69F]">{locale === 'ja' ? '無料' : 'Miễn phí'}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">{t('trial.purpose')}</p>
              <p className="text-lg font-semibold text-gray-700">{locale === 'ja' ? '効果実感と社内稟議' : 'Trải nghiệm hiệu quả và phê duyệt nội bộ'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}