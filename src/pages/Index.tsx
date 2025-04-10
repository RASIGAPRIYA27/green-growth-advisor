
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import FarmerInfoCard from '@/components/dashboard/FarmerInfoCard';
import SustainabilityCard from '@/components/dashboard/SustainabilityCard';
import WeatherCard from '@/components/dashboard/WeatherCard';
import MarketTrendsCard from '@/components/dashboard/MarketTrendsCard';
import RecommendationsCard from '@/components/dashboard/RecommendationsCard';
import CropPlannerCard from '@/components/dashboard/CropPlannerCard';
import { 
  fetchFarmerProfile, 
  fetchWeatherData, 
  fetchMarketTrends, 
  fetchFertilizerRecommendations,
  fetchSustainabilityMetrics,
  fetchCropPlans
} from '@/services/mockDataService';

const Dashboard = () => {
  // Fetch data using React Query
  const { data: farmer, isLoading: isLoadingFarmer } = useQuery({
    queryKey: ['farmer'],
    queryFn: fetchFarmerProfile
  });

  const { data: weatherData, isLoading: isLoadingWeather } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeatherData
  });

  const { data: marketTrends, isLoading: isLoadingMarket } = useQuery({
    queryKey: ['market'],
    queryFn: fetchMarketTrends
  });

  const { data: fertilizerRecommendations, isLoading: isLoadingFertilizer } = useQuery({
    queryKey: ['fertilizer'],
    queryFn: fetchFertilizerRecommendations
  });

  const { data: sustainabilityMetrics, isLoading: isLoadingSustainability } = useQuery({
    queryKey: ['sustainability'],
    queryFn: fetchSustainabilityMetrics
  });

  const { data: cropPlans, isLoading: isLoadingCropPlans } = useQuery({
    queryKey: ['cropPlans'],
    queryFn: fetchCropPlans
  });

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Farmer Info Card */}
          <div className="col-span-1 md:col-span-2">
            <FarmerInfoCard 
              farmer={farmer || { id: '', name: '', landSize: 0, location: '' }} 
              isLoading={isLoadingFarmer} 
            />
          </div>
          
          {/* Weather Card */}
          <div className="col-span-1 md:col-span-2">
            <WeatherCard 
              weatherData={weatherData || []} 
              isLoading={isLoadingWeather} 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sustainability Card */}
          <SustainabilityCard 
            metrics={sustainabilityMetrics || { 
              waterSaved: 0, 
              fertilizerReduced: 0, 
              carbonFootprintReduced: 0, 
              soilHealthImproved: 0 
            }}
            isLoading={isLoadingSustainability}
          />
          
          {/* Market Trends Card */}
          <MarketTrendsCard 
            trends={marketTrends || []} 
            isLoading={isLoadingMarket} 
          />
          
          {/* Recommendations Card */}
          <RecommendationsCard 
            recommendations={fertilizerRecommendations || []} 
            isLoading={isLoadingFertilizer} 
          />
        </div>
        
        {/* Crop Planner Card */}
        <CropPlannerCard 
          plans={cropPlans || []} 
          isLoading={isLoadingCropPlans} 
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
