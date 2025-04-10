
import { SustainabilityMetrics } from './types';
import { sustainabilityMetrics } from './mockData';

// Get sustainability metrics
export const fetchSustainabilityMetrics = (): Promise<SustainabilityMetrics> => {
  return new Promise<SustainabilityMetrics>((resolve) => {
    setTimeout(() => resolve(sustainabilityMetrics), 500);
  });
};
