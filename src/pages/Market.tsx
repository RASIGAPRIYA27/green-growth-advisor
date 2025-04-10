
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchMarketTrends } from '@/services/mockDataService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Market = () => {
  const { data: marketTrends, isLoading } = useQuery({
    queryKey: ['market'],
    queryFn: fetchMarketTrends
  });
  
  // Transform data for charts
  const getChartData = () => {
    if (!marketTrends) return [];
    
    return marketTrends.map(trend => ({
      name: trend.cropName,
      price: trend.price,
      demand: trend.demandScore,
      priceChange: trend.priceChange,
      // Add a color field for the fill property
      color: trend.priceChange >= 0 ? "#4E9F3D" : "#e74c3c"
    }));
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Market Trends</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Price Overview</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              {isLoading ? (
                <div className="h-full bg-gray-100 animate-pulse rounded"></div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={getChartData()}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#4E9F3D" name="Price (₹)" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Demand Scores</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              {isLoading ? (
                <div className="h-full bg-gray-100 animate-pulse rounded"></div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={getChartData()}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="demand" 
                      stroke="#1E5631" 
                      name="Demand Score"
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Price Change</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              {isLoading ? (
                <div className="h-full bg-gray-100 animate-pulse rounded"></div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={getChartData()}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[-10, 10]} />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="priceChange" 
                      fill="#4E9F3D"
                      name="Price Change (%)" 
                      // Use the color field from each data point
                      fillOpacity={0.8}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Market;
