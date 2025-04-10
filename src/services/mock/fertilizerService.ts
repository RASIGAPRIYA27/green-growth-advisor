
import { FertilizerRecommendation } from './types';
import { fertilizerRecommendations } from './mockData';

// Get all fertilizer recommendations
export const fetchFertilizerRecommendations = (): Promise<FertilizerRecommendation[]> => {
  return new Promise<FertilizerRecommendation[]>((resolve) => {
    setTimeout(() => resolve(fertilizerRecommendations), 500);
  });
};

// Function to filter fertilizer recommendations by cropId
export const fetchFertilizerRecommendationsByCropId = (cropId: string): Promise<FertilizerRecommendation[]> => {
  return new Promise<FertilizerRecommendation[]>((resolve) => {
    setTimeout(() => {
      resolve(fertilizerRecommendations.filter(rec => rec.cropId === cropId));
    }, 500);
  });
};
