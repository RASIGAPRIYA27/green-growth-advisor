
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchFarmerProfile } from '@/services/mockDataService';

const Profile = () => {
  const { data: farmer, isLoading } = useQuery({
    queryKey: ['farmer'],
    queryFn: fetchFarmerProfile
  });

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Farmer Profile</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <div className="animate-pulse bg-gray-200 h-6 w-1/3 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-6 w-1/2 rounded"></div>
                <div className="animate-pulse bg-gray-200 h-6 w-1/4 rounded"></div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-medium">
                  Name: <span className="font-normal">{farmer?.name}</span>
                </p>
                <p className="font-medium">
                  Land Size: <span className="font-normal">{farmer?.landSize} acres</span>
                </p>
                <p className="font-medium">
                  Location: <span className="font-normal">{farmer?.location}</span>
                </p>
                <p className="font-medium">
                  Soil Type: <span className="font-normal">{farmer?.soilType || 'Not specified'}</span>
                </p>
                <p className="font-medium">
                  Email: <span className="font-normal">{farmer?.email || 'Not specified'}</span>
                </p>
                <p className="font-medium">
                  Phone: <span className="font-normal">{farmer?.phone || 'Not specified'}</span>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Profile editing functionality will be implemented in the next version.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
