'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLocale } from '../TranslationsProvider';

export default function MarketGrowthChart() {
  const locale = useLocale();
  
  const dataJa = [
    { year: '2024', market: 600 },
    { year: '2025', market: 750 },
    { year: '2026', market: 900 },
    { year: '2027', market: 1080 },
    { year: '2028', market: 1250 },
    { year: '2029', market: 1400 },
    { year: '2030', market: 1500 },
  ];

  const dataVi = [
    { year: '2024', market: 120 },
    { year: '2025', market: 150 },
    { year: '2026', market: 180 },
    { year: '2027', market: 216 },
    { year: '2028', market: 250 },
    { year: '2029', market: 280 },
    { year: '2030', market: 300 },
  ];

  const data = locale === 'ja' ? dataJa : dataVi;

  const labels = {
    ja: {
      title: 'OCR市場規模推移（億円）',
      market: '市場規模',
      year: '年',
    },
    vi: {
      title: 'Quy mô thị trường OCR (nghìn tỷ VND)',
      market: 'Quy mô thị trường',
      year: 'Năm',
    },
  };

  const currentLabels = labels[locale as keyof typeof labels] || labels.ja;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h4 className="text-lg font-bold mb-4 text-[#3D7F7A]">{currentLabels.title}</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: currentLabels.year, position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: currentLabels.market, angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="market" 
            stroke="#50A69F" 
            strokeWidth={3}
            name={currentLabels.market}
            dot={{ fill: '#50A69F', r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-sm text-gray-600 mt-4">CAGR: 16.5%</p>
    </div>
  );
}