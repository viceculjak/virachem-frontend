// ViraChem Tiered Pricing Utilities
// Pricing tiers based on quantity with decreasing margins

import { supabase } from './supabase';

export interface PricingTier {
  min: number;
  max: number;
  margin: number;
  label: string;
}

// Database tier row type
type DbPricingTier = {
  id: string;
  tier_name: string;
  tier_number: number;
  min_quantity: number;
  max_quantity: number | null;
  margin_percentage: number;
  mrp_margin_percentage: number;
  active: boolean;
};

/**
 * Convert database tier row to PricingTier interface
 * Note: margin_percentage represents the cost share (percentage of price that is cost)
 * So if margin_percentage = 25, it means 25% of price is cost → price = cost / 0.25
 * 
 * IMPORTANT: If your database stores margin_percentage where higher values = higher prices,
 * you may need to invert: margin = (100 - margin_percentage) / 100
 */
function convertDbTierToPricingTier(dbTier: DbPricingTier): PricingTier {
  // If margin_percentage is stored as "ViraChem's markup percentage" (higher = higher price),
  // we need to convert to "cost share percentage" (higher = lower price)
  // margin_percentage = 75 (high markup) → cost share = 25 → margin = 0.25 → price = cost / 0.25 (high price)
  // margin_percentage = 25 (low markup) → cost share = 75 → margin = 0.75 → price = cost / 0.75 (low price)
  
  // Try inverted interpretation: cost_share = 100 - margin_percentage
  const margin = (100 - dbTier.margin_percentage) / 100;
  
  return {
    min: dbTier.min_quantity,
    max: dbTier.max_quantity ?? Infinity,
    margin: margin,
    label: dbTier.tier_name || `${dbTier.min_quantity}-${dbTier.max_quantity ?? '∞'}`,
  };
}

/**
 * Fetch active pricing tiers from database
 */
export async function fetchPricingTiers(): Promise<PricingTier[]> {
  try {
    const { data, error } = await supabase
      .from('pricing_tiers_config')
      .select('*')
      .eq('active', true)
      .order('min_quantity', { ascending: true });

    if (error) {
      console.error('Error fetching pricing tiers:', error);
      throw error;
    }

    if (!data || data.length === 0) {
      console.warn('No active pricing tiers found in database');
      return [];
    }

    const tiers = data.map(convertDbTierToPricingTier);
    // Debug: Log tier data to verify values
    console.log('Fetched pricing tiers from database:', tiers.map(t => ({
      range: `${t.min}-${t.max === Infinity ? '∞' : t.max}`,
      margin: t.margin,
      marginPercent: (t.margin * 100).toFixed(1) + '%'
    })));
    
    return tiers;
  } catch (err) {
    console.error('Failed to fetch pricing tiers from database:', err);
    throw err;
  }
}

export const PRICING_TIERS: PricingTier[] = [
  { min: 1, max: 5, margin: 0.25, label: '1-5' },
  { min: 6, max: 20, margin: 0.35, label: '6-20' },
  { min: 21, max: 50, margin: 0.45, label: '21-50' },
  { min: 51, max: 200, margin: 0.53, label: '51-200' },
  { min: 201, max: 500, margin: 0.58, label: '201-500' },
  { min: 501, max: Infinity, margin: 0.65, label: '500+' },
];

/**
 * Calculate the price per unit based on cost and quantity
 * @param tiers - Array of pricing tiers
 * @param cost - Cost per vial in EUR
 * @param quantity - Number of units being ordered
 * @returns Price per unit in EUR (rounded to 2 decimal places)
 */
export function calculatePricePerUnit(tiers: PricingTier[], cost: number, quantity: number): number {
  if (!tiers || tiers.length === 0) {
    console.warn('No pricing tiers provided, using default margin');
    return Number((cost / 0.25).toFixed(2));
  }
  
  const tier = tiers.find(t => quantity >= t.min && quantity <= t.max);
  if (!tier) {
    // Use first tier as default
    const defaultTier = tiers[0];
    return Number((cost / defaultTier.margin).toFixed(2));
  }
  return Number((cost / tier.margin).toFixed(2));
}

/**
 * Calculate the total price based on cost and quantity
 * @param tiers - Array of pricing tiers
 * @param cost - Cost per vial in EUR
 * @param quantity - Number of units being ordered
 * @returns Total price in EUR (rounded to 2 decimal places)
 */
export function calculateTotalPrice(tiers: PricingTier[], cost: number, quantity: number): number {
  const pricePerUnit = calculatePricePerUnit(tiers, cost, quantity);
  return Number((pricePerUnit * quantity).toFixed(2));
}

/**
 * Get the pricing tier for a given quantity
 * @param tiers - Array of pricing tiers
 * @param quantity - Number of units
 * @returns The pricing tier object or undefined
 */
export function getTierForQuantity(tiers: PricingTier[], quantity: number): PricingTier | undefined {
  if (!tiers || tiers.length === 0) return undefined;
  return tiers.find(t => quantity >= t.min && quantity <= t.max);
}

/**
 * Calculate the margin percentage for a tier
 * @param tier - The pricing tier
 * @returns Margin percentage (e.g., 75 for 75%)
 */
export function calculateMarginPercentage(tier: PricingTier): number {
  return Math.round((1 - tier.margin) * 100);
}

/**
 * Calculate savings percentage compared to tier 1 pricing
 * @param tiers - Array of pricing tiers
 * @param cost - Cost per vial in EUR
 * @param quantity - Number of units being ordered
 * @returns Savings percentage (e.g., 29 for 29% savings)
 */
export function calculateSavingsPercentage(tiers: PricingTier[], cost: number, quantity: number): number {
  if (!tiers || tiers.length === 0) return 0;
  
  const tier1 = tiers[0]; // First tier (tier 1)
  const tier1Price = cost / tier1.margin;
  const currentPrice = calculatePricePerUnit(tiers, cost, quantity);
  const savings = ((tier1Price - currentPrice) / tier1Price) * 100;
  return Math.round(savings);
}

/**
 * Get the price range for a tier
 * @param cost - Cost per vial in EUR
 * @param tier - The pricing tier
 * @returns Object with min and max total prices for the tier
 */
export function getTierPriceRange(cost: number, tier: PricingTier): { min: number; max: number } {
  const pricePerUnit = cost / tier.margin;
  const maxQuantity = tier.max === Infinity ? 500 : tier.max;
  return {
    min: Number((pricePerUnit * tier.min).toFixed(2)),
    max: Number((pricePerUnit * maxQuantity).toFixed(2)),
  };
}
