
// Farmer profile types
export interface Farmer {
  id: string;
  name: string;
  landSize: number;  // in acres
  location: string;
  soilType?: string;
  email?: string;
  phone?: string;
}

// Crop types
export interface Crop {
  id: string;
  name: string;
  season: 'Spring' | 'Summer' | 'Fall' | 'Winter' | 'Year-round';
  yieldPerAcre: number;
  waterRequirement: 'Low' | 'Medium' | 'High';
  fertilizerRequirement: 'Low' | 'Medium' | 'High';
  growthDurationDays: number;
  description?: string;
}

// Fertilizer recommendation types
export interface FertilizerRecommendation {
  id: string;
  cropId: string;
  type: string;
  quantity: number; // in kg/acre
  schedule: string;
  npkRatio: string;
  sustainabilityScore: number; // 1-10
  date: string;
}

// Weather data types
export interface WeatherData {
  date: string;
  temperature: number;
  rainfall: number;
  humidity: number;
  forecast?: string;
}

// Market trend types
export interface MarketTrend {
  id: string;
  cropId: string;
  cropName: string;
  price: number;
  demandScore: number; // 1-10
  priceChange: number;
  date: string;
}

// Sustainability metrics
export interface SustainabilityMetrics {
  waterSaved: number; // in gallons
  fertilizerReduced: number; // in kg
  carbonFootprintReduced: number; // in kg CO2
  soilHealthImproved: number; // percentage
}

// Crop planning
export interface CropPlan {
  id: string;
  farmerId: string;
  cropId: string;
  cropName: string;
  fieldName?: string;
  plantingDate: string;
  harvestDate?: string;
  status: 'Planned' | 'Planted' | 'Growing' | 'Harvested';
  notes?: string;
}
