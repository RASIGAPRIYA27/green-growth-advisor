
import { MarketTrend } from './types';
import { marketTrends } from './mockData';

// Get market trends
export const fetchMarketTrends = (): Promise<MarketTrend[]> => {
  return new Promise<MarketTrend[]>((resolve) => {
    setTimeout(() => resolve(marketTrends), 500);
  });
};
