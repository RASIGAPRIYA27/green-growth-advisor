
import { Farmer } from './types';
import { farmers } from './mockData';

// Get farmer profile
export const fetchFarmerProfile = (): Promise<Farmer> => {
  return new Promise<Farmer>((resolve) => {
    setTimeout(() => resolve(farmers[0]), 500);
  });
};
