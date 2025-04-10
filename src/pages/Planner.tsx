
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchCropPlans } from '@/services/mockDataService';
import { Calendar } from '@/components/ui/calendar';

const Planner = () => {
  const { data: plans, isLoading } = useQuery({
    queryKey: ['cropPlans'],
    queryFn: fetchCropPlans
  });

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Crop Planner</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-1">
                  <Calendar 
                    mode="single"
                    className="rounded-md border"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-16 bg-gray-100 animate-pulse rounded"></div>
                    ))}
                  </div>
                ) : plans && plans.length > 0 ? (
                  <div className="space-y-4 divide-y">
                    {plans.map((plan) => (
                      <div key={plan.id} className="pt-4 first:pt-0">
                        <p className="font-medium">{plan.cropName} - {plan.fieldName}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(plan.plantingDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm">{plan.notes}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No upcoming tasks found.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Planner;
