
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { fetchSustainabilityMetrics, fetchFertilizerRecommendations } from '@/services/mockDataService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Leaf, Droplets, CloudCog } from 'lucide-react';

const Sustainability = () => {
  const { data: metrics, isLoading: isLoadingMetrics } = useQuery({
    queryKey: ['sustainability'],
    queryFn: fetchSustainabilityMetrics
  });
  
  const { data: recommendations, isLoading: isLoadingRecs } = useQuery({
    queryKey: ['fertilizer'],
    queryFn: fetchFertilizerRecommendations
  });

  // Transform data for charts
  const getFertilizerData = () => {
    if (!recommendations) return [];
    
    return recommendations.map(rec => ({
      name: rec.type,
      sustainability: rec.sustainabilityScore,
      quantity: rec.quantity
    }));
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Sustainability Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoadingMetrics ? (
            <>
              {[1, 2, 3].map(i => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="bg-gray-200 animate-pulse h-6 w-1/2 rounded"></CardTitle>
                  </CardHeader>
                  <CardContent className="animate-pulse">
                    <div className="flex justify-center">
                      <div className="bg-gray-200 h-16 w-16 rounded-full"></div>
                    </div>
                    <div className="mt-4 bg-gray-200 h-8 w-3/4 mx-auto rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </>
          ) : metrics ? (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Water Conservation</CardTitle>
                  <CardDescription>Water saved from sustainable practices</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center">
                    <Droplets className="h-12 w-12 text-blue-500" />
                  </div>
                  <p className="mt-4 text-3xl font-bold">{metrics.waterSaved.toLocaleString()} gal</p>
                  <div className="mt-2">
                    <Progress value={75} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">75% of target</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Fertilizer Reduction</CardTitle>
                  <CardDescription>Less chemical fertilizers used</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center">
                    <Leaf className="h-12 w-12 text-green-500" />
                  </div>
                  <p className="mt-4 text-3xl font-bold">{metrics.fertilizerReduced.toLocaleString()} kg</p>
                  <div className="mt-2">
                    <Progress value={60} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">60% of target</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Carbon Footprint</CardTitle>
                  <CardDescription>CO₂ emissions reduced</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center">
                    <CloudCog className="h-12 w-12 text-purple-500" />
                  </div>
                  <p className="mt-4 text-3xl font-bold">{metrics.carbonFootprintReduced.toLocaleString()} kg</p>
                  <div className="mt-2">
                    <Progress value={45} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">45% of target</p>
                </CardContent>
              </Card>
            </>
          ) : null}
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Fertilizer Sustainability Scores</CardTitle>
            <CardDescription>Higher scores mean more sustainable options</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            {isLoadingRecs ? (
              <div className="h-full bg-gray-100 animate-pulse rounded"></div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getFertilizerData()}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sustainability" fill="#4E9F3D" name="Sustainability Score" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Soil Health Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoadingMetrics ? (
              <div className="space-y-4 animate-pulse">
                <div className="bg-gray-200 h-8 w-3/4 rounded"></div>
                <div className="bg-gray-200 h-4 w-full rounded"></div>
                <div className="bg-gray-200 h-32 w-full rounded"></div>
              </div>
            ) : metrics ? (
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-semibold mb-1">
                    {metrics.soilHealthImproved}% Improvement
                  </p>
                  <Progress value={metrics.soilHealthImproved} className="h-3" />
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <p className="font-medium text-green-800 mb-2">Key Benefits:</p>
                  <ul className="list-disc list-inside space-y-1 text-green-700">
                    <li>Increased organic matter content</li>
                    <li>Better water retention capacity</li>
                    <li>Reduced erosion risk</li>
                    <li>Improved nutrient cycling</li>
                    <li>Enhanced microbial activity</li>
                  </ul>
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Sustainability;
