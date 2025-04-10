
import { v4 as uuidv4 } from 'uuid';
import { 
  Farmer, 
  Crop, 
  FertilizerRecommendation, 
  WeatherData, 
  MarketTrend, 
  SustainabilityMetrics,
  CropPlan 
} from './types';

// Mock farmer data
export const farmers: Farmer[] = [
  {
    id: uuidv4(),
    name: 'John Smith',
    landSize: 50,
    location: 'Midwest',
    soilType: 'Loam',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567'
  }
];

// Mock crop data
export const crops: Crop[] = [
  {
    id: uuidv4(),
    name: 'Corn',
    season: 'Summer',
    yieldPerAcre: 180,
    waterRequirement: 'Medium',
    fertilizerRequirement: 'High',
    growthDurationDays: 90,
    description: 'A staple grain with high demand for both food and biofuel.'
  },
  {
    id: uuidv4(),
    name: 'Soybeans',
    season: 'Summer',
    yieldPerAcre: 50,
    waterRequirement: 'Medium',
    fertilizerRequirement: 'Medium',
    growthDurationDays: 100,
    description: 'Valuable for protein and oil production.'
  },
  {
    id: uuidv4(),
    name: 'Wheat',
    season: 'Winter',
    yieldPerAcre: 60,
    waterRequirement: 'Low',
    fertilizerRequirement: 'Medium',
    growthDurationDays: 240,
    description: 'Essential grain crop with global demand.'
  },
  {
    id: uuidv4(),
    name: 'Alfalfa',
    season: 'Spring',
    yieldPerAcre: 6,
    waterRequirement: 'Medium',
    fertilizerRequirement: 'Low',
    growthDurationDays: 365,
    description: 'Perennial forage crop that improves soil health.'
  },
  {
    id: uuidv4(),
    name: 'Cotton',
    season: 'Summer',
    yieldPerAcre: 2,
    waterRequirement: 'High',
    fertilizerRequirement: 'High',
    growthDurationDays: 160,
    description: 'Important fiber crop for textile production.'
  }
];

// Generate mock fertilizer recommendations
export const fertilizerRecommendations: FertilizerRecommendation[] = [
  {
    id: uuidv4(),
    cropId: crops[0].id,
    type: 'Nitrogen-rich Organic',
    quantity: 150,
    schedule: 'Apply 50% before planting, 50% during growth phase',
    npkRatio: '10-5-5',
    sustainabilityScore: 7,
    date: new Date().toISOString()
  },
  {
    id: uuidv4(),
    cropId: crops[1].id,
    type: 'Balanced Organic',
    quantity: 100,
    schedule: 'Apply once before planting',
    npkRatio: '5-5-5',
    sustainabilityScore: 9,
    date: new Date().toISOString()
  },
  {
    id: uuidv4(),
    cropId: crops[2].id,
    type: 'Phosphorus-rich',
    quantity: 120,
    schedule: 'Apply 75% before planting, 25% mid-season',
    npkRatio: '5-10-5',
    sustainabilityScore: 6,
    date: new Date().toISOString()
  }
];

// Mock weather data
const today = new Date();
export const weatherData: WeatherData[] = Array.from({ length: 7 }, (_, i) => {
  const date = new Date(today);
  date.setDate(date.getDate() + i);
  return {
    date: date.toISOString(),
    temperature: Math.floor(Math.random() * 15) + 15, // 15-30°C
    rainfall: Math.random() * 20, // 0-20mm
    humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
    forecast: i === 0 ? 'Sunny' : ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)]
  };
});

// Mock market trends
export const marketTrends: MarketTrend[] = crops.map(crop => ({
  id: uuidv4(),
  cropId: crop.id,
  cropName: crop.name,
  price: Math.floor(Math.random() * 500) + 100, // $100-$600 per unit
  demandScore: Math.floor(Math.random() * 10) + 1, // 1-10
  priceChange: (Math.random() * 10) - 5, // -5% to +5%
  date: new Date().toISOString()
}));

// Mock sustainability metrics
export const sustainabilityMetrics: SustainabilityMetrics = {
  waterSaved: 120000, // gallons
  fertilizerReduced: 2500, // kg
  carbonFootprintReduced: 15000, // kg CO2
  soilHealthImproved: 22 // percentage
};

// Mock crop plans
export const cropPlans: CropPlan[] = [
  {
    id: uuidv4(),
    farmerId: farmers[0].id,
    cropId: crops[0].id,
    cropName: crops[0].name,
    fieldName: 'North Field',
    plantingDate: '2025-05-01',
    harvestDate: '2025-08-01',
    status: 'Planned',
    notes: 'Prepare for early planting if weather permits'
  },
  {
    id: uuidv4(),
    farmerId: farmers[0].id,
    cropId: crops[1].id,
    cropName: crops[1].name,
    fieldName: 'East Field',
    plantingDate: '2025-06-01',
    harvestDate: '2025-09-10',
    status: 'Planned',
    notes: 'Consider companion planting with clover'
  }
];
