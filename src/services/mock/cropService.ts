
import { Crop } from './types';
import { crops } from './mockData';

// Get all crops
export const fetchCrops = (): Promise<Crop[]> => {
  return new Promise<Crop[]>((resolve) => {
    setTimeout(() => resolve(crops), 500);
  });
};
