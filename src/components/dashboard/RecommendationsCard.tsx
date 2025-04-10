
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FertilizerRecommendation } from '@/models/types';
import { Check } from 'lucide-react';

interface RecommendationsCardProps {
  recommendations: FertilizerRecommendation[];
  isLoading?: boolean;
}

const RecommendationsCard: React.FC<RecommendationsCardProps> = ({ 
  recommendations, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg animate-pulse bg-gray-200 h-6 w-3/4 rounded"></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="border rounded-lg p-4 animate-pulse">
              <div className="space-y-2">
                <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                <div className="bg-gray-200 h-3 w-3/4 rounded"></div>
                <div className="bg-gray-200 h-3 w-2/3 rounded"></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  // Sort by sustainability score
  const sortedRecommendations = [...recommendations].sort(
    (a, b) => b.sustainabilityScore - a.sustainabilityScore
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">Fertilizer Recommendations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sortedRecommendations.slice(0, 2).map((rec) => (
          <div key={rec.id} className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">{rec.type}</h4>
                <p className="text-sm text-muted-foreground">
                  {rec.quantity} kg/acre • NPK {rec.npkRatio}
                </p>
                <p className="text-sm mt-1">{rec.schedule}</p>
              </div>
              <div className="bg-green-50 text-green-700 rounded-full p-1">
                <Check className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-xs text-muted-foreground mr-2">Sustainability Score:</span>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-green-500 h-1.5 rounded-full" 
                  style={{ width: `${rec.sustainabilityScore * 10}%` }}
                ></div>
              </div>
              <span className="ml-2 text-xs font-medium">{rec.sustainabilityScore}/10</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecommendationsCard;
