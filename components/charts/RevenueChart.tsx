'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLocale } from '../TranslationsProvider';

export default function RevenueChart() {
  const locale = useLocale();
  
  const dataJa = [
    { period: '2025', saas: 60, development: 75, total: 135 },
    { period: '2026', saas: 480, development: 150, total: 630 },
    { period: '2027', saas: 840, development: 187.5, total: 1027.5 },
    { period: '2028', saas: 1200, development: 225, total: 1425 },
  ];

  const dataVi = [
    { period: '2025', saas: 12, development: 15, total: 27 },
    { period: '2026', saas: 96, development: 30, total: 126 },
    { period: '2027', saas: 168, development: 37.5, total: 205.5 },
    { period: '2028', saas: 240, development: 45, total: 285 },
  ];

  const data = locale === 'ja' ? dataJa : dataVi;

  const labels = {
    ja: {
      title: '収益予測（百万円）',
      saas: 'SaaS売上',
      development: '受託開発',
      total: '合計',
      period: '年度',
    },
    vi: {
      title: 'Dự báo doanh thu (tỷ VND)',
      saas: 'Doanh thu SaaS',
      development: 'Phát triển theo yêu cầu',
      total: 'Tổng cộng',
      period: 'Năm',
    },
  };

  const currentLabels = labels[locale as keyof typeof labels] || labels.ja;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h4 className="text-lg font-bold mb-4 text-[#3D7F7A]">{currentLabels.title}</h4>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" label={{ value: currentLabels.period, position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: currentLabels.title, angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="saas" stackId="a" fill="#50A69F" name={currentLabels.saas} />
          <Bar dataKey="development" stackId="a" fill="#7BC4BF" name={currentLabels.development} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}