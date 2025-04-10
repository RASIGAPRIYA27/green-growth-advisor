
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';
import { Farmer } from '@/models/types';

interface FarmerInfoCardProps {
  farmer: Farmer;
  isLoading?: boolean;
}

const FarmerInfoCard: React.FC<FarmerInfoCardProps> = ({ 
  farmer, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg animate-pulse bg-gray-200 h-6 w-1/2 rounded"></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="animate-pulse bg-gray-200 h-12 w-12 rounded-full"></div>
            <div className="space-y-2">
              <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-3 w-24 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-1">
                <div className="animate-pulse bg-gray-200 h-3 w-16 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-24 rounded"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Farmer Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 p-2 rounded-full">
            <User className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold">{farmer.name}</h3>
            <p className="text-sm text-muted-foreground">{farmer.location}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-xs text-muted-foreground">Land Size</p>
            <p className="font-medium">{farmer.landSize} acres</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Soil Type</p>
            <p className="font-medium">{farmer.soilType || 'Not specified'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="font-medium">{farmer.email || 'Not specified'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Phone</p>
            <p className="font-medium">{farmer.phone || 'Not specified'}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarmerInfoCard;
