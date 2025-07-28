import Header from '@/components/Header';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import MarketAnalysis from '@/components/MarketAnalysis';
import CompetitorAnalysis from '@/components/CompetitorAnalysis';
import BusinessModel from '@/components/BusinessModel';
import RevenueProjection from '@/components/RevenueProjection';
import SalesStrategy from '@/components/SalesStrategy';
import FutureOutlook from '@/components/FutureOutlook';
import Partnership from '@/components/Partnership';
import Summary from '@/components/Summary';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <ExecutiveSummary />
        <MarketAnalysis />
        <CompetitorAnalysis />
        <BusinessModel />
        <RevenueProjection />
        <SalesStrategy />
        <FutureOutlook />
        <Partnership />
        <Summary />
      </main>
    </>
  );
}