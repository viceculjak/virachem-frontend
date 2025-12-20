-- Pricing System Migration for ViraChem
-- Execute this SQL in Supabase SQL Editor

-- Step 1: Add cost_per_vial column to products table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS cost_per_vial DECIMAL(10,2);

-- Add index for queries
CREATE INDEX IF NOT EXISTS idx_products_cost ON products(cost_per_vial);

-- Step 2: Add pricing columns to quote_requests table
ALTER TABLE quote_requests 
ADD COLUMN IF NOT EXISTS unit_price DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS total_price DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS price_tier TEXT;

-- Add index for reporting
CREATE INDEX IF NOT EXISTS idx_quote_requests_total_price 
ON quote_requests(total_price DESC);

-- Success message
SELECT 'Pricing schema migration completed successfully!' as message;
