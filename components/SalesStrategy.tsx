'use client';

import { useTranslations, useLocale } from './TranslationsProvider';
import { Users, Building, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function SalesStrategy() {
  const t = useTranslations('salesStrategy');
  const locale = useLocale();

  return (
    <section id="sales-strategy" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#50A69F]">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* 現在の営業状況 */}
          <div className="bg-gradient-to-br from-[#50A69F]/10 to-[#7BC4BF]/10 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Building className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('currentStatus.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700">{t('currentStatus.approached')}</p>
                <p className="text-2xl font-bold text-[#50A69F]">10{locale === 'ja' ? '社' : ' công ty'}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700 mb-2">{t('currentStatus.trialSigned')}</p>
                <p className="text-xl font-bold text-[#50A69F]">2{locale === 'ja' ? '社' : ' công ty'}</p>
                <p className="text-sm text-gray-600">{locale === 'ja' ? 'リミックスポイント社、イーレックス社' : 'Remix Point, E-Rex'}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700">{t('currentStatus.trialStart')}</p>
                <p className="text-lg font-bold text-[#50A69F]">{locale === 'ja' ? '2025年7月' : 'Tháng 7/2025'}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-700">{t('currentStatus.others')}</p>
                <p className="text-lg text-gray-600">{locale === 'ja' ? '継続フォロー中' : 'Tiếp tục theo dõi'}</p>
              </div>
            </div>
          </div>

          {/* 営業体制 */}
          <div className="bg-gradient-to-br from-[#3D7F7A]/10 to-[#50A69F]/10 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Users className="w-10 h-10 text-[#50A69F] mr-3" />
              <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('salesTeam.title')}</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-12 h-12 bg-[#50A69F] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <p className="font-bold text-lg">{t('salesTeam.member1')}</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 bg-[#50A69F] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div>
                    <p className="font-bold text-lg">{t('salesTeam.member2')}</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 bg-[#50A69F] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <p className="font-bold text-lg">{t('salesTeam.member3')}</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-12 h-12 bg-[#50A69F] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div>
                    <p className="font-bold text-lg">{t('salesTeam.member4')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 営業課題と対策 */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <AlertCircle className="w-10 h-10 text-orange-500 mr-3" />
            <h3 className="text-2xl font-bold text-[#3D7F7A]">{t('challenges.title')}</h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 mb-6">
            <p className="text-gray-700 leading-relaxed">
              {t('challenges.challenge')}
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4 text-[#3D7F7A]">{t('challenges.countermeasures')}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#50A69F] mt-1 flex-shrink-0" />
                <p className="text-gray-700">1. {t('challenges.measure1')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#50A69F] mt-1 flex-shrink-0" />
                <p className="text-gray-700">2. {t('challenges.measure2')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#50A69F] mt-1 flex-shrink-0" />
                <p className="text-gray-700">3. {t('challenges.measure3')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#50A69F] mt-1 flex-shrink-0" />
                <p className="text-gray-700">4. {t('challenges.measure4')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}