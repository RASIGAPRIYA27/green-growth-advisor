
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SustainabilityMetrics } from '@/models/types';

interface SustainabilityCardProps {
  metrics: SustainabilityMetrics;
  isLoading?: boolean;
}

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({ 
  metrics, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg animate-pulse bg-gray-200 h-6 w-3/4 rounded"></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="animate-pulse bg-gray-200 h-4 w-1/2 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-2 w-full rounded"></div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Sustainability Impact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Water Saved</span>
            <span className="font-medium">{metrics.waterSaved.toLocaleString()} gallons</span>
          </div>
          <Progress value={75} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Fertilizer Reduced</span>
            <span className="font-medium">{metrics.fertilizerReduced.toLocaleString()} kg</span>
          </div>
          <Progress value={60} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Carbon Footprint</span>
            <span className="font-medium">{metrics.carbonFootprintReduced.toLocaleString()} kg CO₂</span>
          </div>
          <Progress value={45} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Soil Health Improved</span>
            <span className="font-medium">{metrics.soilHealthImproved}%</span>
          </div>
          <Progress value={metrics.soilHealthImproved} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SustainabilityCard;
