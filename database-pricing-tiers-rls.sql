-- RLS Policy for pricing_tiers_config table
-- Execute this SQL in Supabase SQL Editor to enable public read access

-- Enable RLS on pricing_tiers_config table (if not already enabled)
ALTER TABLE pricing_tiers_config ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to active pricing tiers
CREATE POLICY "Allow public read access to pricing_tiers_config"
  ON pricing_tiers_config FOR SELECT
  USING (active = true);

-- Verify the policy was created
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies
WHERE tablename = 'pricing_tiers_config';

-- Success message
SELECT 'RLS policy for pricing_tiers_config created successfully!' as message;
