
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';
import { CropPlan } from '@/models/types';
import { Badge } from '@/components/ui/badge';

interface CropPlannerCardProps {
  plans: CropPlan[];
  isLoading?: boolean;
}

const CropPlannerCard: React.FC<CropPlannerCardProps> = ({ 
  plans, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg animate-pulse bg-gray-200 h-6 w-3/4 rounded"></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 divide-y">
            {[1, 2, 3].map((i) => (
              <div key={i} className="pt-4 first:pt-0 animate-pulse">
                <div className="flex justify-between items-center">
                  <div className="bg-gray-200 h-4 w-1/3 rounded"></div>
                  <div className="bg-gray-200 h-6 w-16 rounded-full"></div>
                </div>
                <div className="mt-2 bg-gray-200 h-3 w-1/2 rounded"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Sort plans by planting date
  const sortedPlans = [...plans].sort((a, b) => 
    new Date(a.plantingDate).getTime() - new Date(b.plantingDate).getTime()
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Planted': return 'bg-blue-50 text-blue-700';
      case 'Growing': return 'bg-green-50 text-green-700';
      case 'Harvested': return 'bg-purple-50 text-purple-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Upcoming Crop Schedule</CardTitle>
        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4 divide-y">
          {sortedPlans.map((plan) => (
            <div key={plan.id} className="pt-4 first:pt-0">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{plan.cropName}</h4>
                <Badge 
                  variant="outline" 
                  className={`${getStatusColor(plan.status)}`}
                >
                  {plan.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {plan.fieldName} • {formatDate(plan.plantingDate)} to {plan.harvestDate ? formatDate(plan.harvestDate) : 'TBD'}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CropPlannerCard;
