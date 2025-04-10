
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, CloudDrizzle, CloudRain, Sun } from 'lucide-react';
import { WeatherData } from '@/models/types';

interface WeatherCardProps {
  weatherData: WeatherData[];
  isLoading?: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ 
  weatherData, 
  isLoading = false 
}) => {
  const getWeatherIcon = (forecast?: string) => {
    switch (forecast?.toLowerCase()) {
      case 'rainy':
        return <CloudRain className="h-10 w-10 text-blue-500" />;
      case 'cloudy':
        return <Cloud className="h-10 w-10 text-gray-500" />;
      case 'partly cloudy':
        return <CloudDrizzle className="h-10 w-10 text-gray-400" />;
      case 'sunny':
      default:
        return <Sun className="h-10 w-10 text-yellow-500" />;
    }
  };

  if (isLoading || !weatherData.length) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg animate-pulse bg-gray-200 h-6 w-1/2 rounded"></CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center space-y-2">
              <div className="bg-gray-200 h-4 w-16 rounded mx-auto"></div>
              <div className="bg-gray-200 h-10 w-10 rounded-full mx-auto"></div>
              <div className="bg-gray-200 h-3 w-8 rounded mx-auto"></div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  // Only display the next 3 days
  const nextDays = weatherData.slice(0, 4);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">Weather Forecast</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        {nextDays.map((day, index) => {
          const date = new Date(day.date);
          const isToday = index === 0;
          
          return (
            <div key={index} className="text-center">
              <p className="font-medium mb-1">
                {isToday ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' })}
              </p>
              <div className="my-2">
                {getWeatherIcon(day.forecast)}
              </div>
              <p className="text-lg font-bold">{day.temperature}°C</p>
              <p className="text-sm text-muted-foreground">{day.rainfall}mm</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
