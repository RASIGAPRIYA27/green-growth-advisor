
import { farmers, crops, fertilizerRecommendations, weatherData, marketTrends, sustainabilityMetrics, cropPlans } from './mockData';

// Re-export all service functions
export * from './farmerService';
export * from './cropService';
export * from './fertilizerService';
export * from './weatherService';
export * from './marketService';
export * from './sustainabilityService';
export * from './planningService';

// Service function to get all mock data at once
export const getMockData = () => {
  return {
    farmers,
    crops,
    fertilizerRecommendations,
    weatherData,
    marketTrends,
    sustainabilityMetrics,
    cropPlans
  };
};
