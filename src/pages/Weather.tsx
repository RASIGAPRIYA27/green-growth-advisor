
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchWeatherData } from '@/services/mockDataService';
import { Cloud, Droplets, Thermometer } from 'lucide-react';

const Weather = () => {
  const { data: weatherData, isLoading } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeatherData
  });

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Weather Monitor</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
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
                    <div className="mt-4 bg-gray-200 h-8 w-1/2 mx-auto rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </>
          ) : weatherData && weatherData.length > 0 ? (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Temperature</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center">
                    <Thermometer className="h-12 w-12 text-orange-500" />
                  </div>
                  <p className="mt-4 text-3xl font-bold">{weatherData[0].temperature} °C</p>
                  <p className="text-sm text-muted-foreground">Current</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Rainfall</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center">
                    <Droplets className="h-12 w-12 text-blue-500" />
                  </div>
                  <p className="mt-4 text-3xl font-bold">{weatherData[0].rainfall.toFixed(1)} mm</p>
                  <p className="text-sm text-muted-foreground">Today</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Humidity</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center">
                    <Cloud className="h-12 w-12 text-sky-500" />
                  </div>
                  <p className="mt-4 text-3xl font-bold">{weatherData[0].humidity}%</p>
                  <p className="text-sm text-muted-foreground">Current</p>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="col-span-3">
              <p className="text-muted-foreground">No weather data available.</p>
            </div>
          )}
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                  <div key={i} className="text-center animate-pulse">
                    <div className="bg-gray-200 h-4 w-12 mb-2 rounded mx-auto"></div>
                    <div className="bg-gray-200 h-12 w-12 rounded-full mx-auto mb-2"></div>
                    <div className="bg-gray-200 h-4 w-8 rounded mx-auto"></div>
                  </div>
                ))}
              </div>
            ) : weatherData ? (
              <div className="flex justify-between overflow-x-auto">
                {weatherData.map((day, index) => {
                  const date = new Date(day.date);
                  return (
                    <div key={index} className="text-center min-w-[80px]">
                      <p className="font-medium">
                        {index === 0 
                          ? 'Today' 
                          : date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </p>
                      <div className="my-2">
                        <Cloud className="h-8 w-8 mx-auto text-blue-500" />
                      </div>
                      <p className="text-lg font-bold">{day.temperature}°C</p>
                      <p className="text-sm text-muted-foreground">{day.rainfall.toFixed(1)}mm</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-muted-foreground">No forecast data available.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Weather;
