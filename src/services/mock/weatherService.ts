
import { WeatherData } from './types';
import { weatherData } from './mockData';

// Get weather data
export const fetchWeatherData = (): Promise<WeatherData[]> => {
  return new Promise<WeatherData[]>((resolve) => {
    setTimeout(() => resolve(weatherData), 500);
  });
};
