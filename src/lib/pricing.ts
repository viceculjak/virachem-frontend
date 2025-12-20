// ViraChem Tiered Pricing Utilities
// Pricing tiers based on quantity with decreasing margins

export interface PricingTier {
  min: number;
  max: number;
  margin: number;
  label: string;
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
 * @param cost - Cost per vial in EUR
 * @param quantity - Number of units being ordered
 * @returns Price per unit in EUR (rounded to 2 decimal places)
 */
export function calculatePricePerUnit(cost: number, quantity: number): number {
  const tier = PRICING_TIERS.find(t => quantity >= t.min && quantity <= t.max);
  if (!tier) return Number((cost / 0.25).toFixed(2)); // Default to tier 1
  return Number((cost / tier.margin).toFixed(2));
}

/**
 * Calculate the total price based on cost and quantity
 * @param cost - Cost per vial in EUR
 * @param quantity - Number of units being ordered
 * @returns Total price in EUR (rounded to 2 decimal places)
 */
export function calculateTotalPrice(cost: number, quantity: number): number {
  const pricePerUnit = calculatePricePerUnit(cost, quantity);
  return Number((pricePerUnit * quantity).toFixed(2));
}

/**
 * Get the pricing tier for a given quantity
 * @param quantity - Number of units
 * @returns The pricing tier object or undefined
 */
export function getTierForQuantity(quantity: number): PricingTier | undefined {
  return PRICING_TIERS.find(t => quantity >= t.min && quantity <= t.max);
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
 * @param cost - Cost per vial in EUR
 * @param quantity - Number of units being ordered
 * @returns Savings percentage (e.g., 29 for 29% savings)
 */
export function calculateSavingsPercentage(cost: number, quantity: number): number {
  const tier1Price = cost / 0.25;
  const currentPrice = calculatePricePerUnit(cost, quantity);
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
