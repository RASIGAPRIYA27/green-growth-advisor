
import { CropPlan } from './types';
import { cropPlans } from './mockData';

// Get all crop plans
export const fetchCropPlans = (): Promise<CropPlan[]> => {
  return new Promise<CropPlan[]>((resolve) => {
    setTimeout(() => resolve(cropPlans), 500);
  });
};

// Function to filter crop plans by farmerId
export const fetchCropPlansByFarmerId = (farmerId: string): Promise<CropPlan[]> => {
  return new Promise<CropPlan[]>((resolve) => {
    setTimeout(() => {
      resolve(cropPlans.filter(plan => plan.farmerId === farmerId));
    }, 500);
  });
};
