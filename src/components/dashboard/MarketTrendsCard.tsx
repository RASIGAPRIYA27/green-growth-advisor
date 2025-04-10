
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingDown, TrendingUp } from 'lucide-react';
import { MarketTrend } from '@/models/types';

interface MarketTrendsCardProps {
  trends: MarketTrend[];
  isLoading?: boolean;
}

const MarketTrendsCard: React.FC<MarketTrendsCardProps> = ({ 
  trends, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg animate-pulse bg-gray-200 h-6 w-1/2 rounded"></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between animate-pulse">
                <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/6 rounded"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Sort by demand score descending
  const sortedTrends = [...trends].sort((a, b) => b.demandScore - a.demandScore);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Market Trends</CardTitle>
        <BarChart3 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedTrends.slice(0, 5).map((trend) => (
            <div key={trend.id} className="flex items-center justify-between">
              <span className="font-medium">{trend.cropName}</span>
              <span className="text-muted-foreground">
                ${trend.price.toFixed(2)}
              </span>
              <div className={`flex items-center ${trend.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {trend.priceChange >= 0 ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                <span>{Math.abs(trend.priceChange).toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketTrendsCard;
